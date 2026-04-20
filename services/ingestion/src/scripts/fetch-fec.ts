/**
 * Fetch campaign finance data from FEC for a committee.
 *
 * Usage:
 *   pnpm --filter ingestion fetch:fec -- --committee C00835959 --cycle 2024 --label "Campaign for Democracy PAC"
 *   pnpm --filter ingestion fetch:fec -- --candidate P80003338 --cycle 2022
 */
import 'dotenv/config'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import {
  searchCandidates,
  getCommitteesByCandidate,
  getCommitteeTotals,
  getTopContributors,
  searchCommittees,
} from '../clients/fec.js'
import { transformTotalsToFundingCycle } from '../transforms/fec.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

function arg(flag: string): string | undefined {
  const i = process.argv.indexOf(flag)
  return i !== -1 ? process.argv[i + 1] : undefined
}

async function run() {
  const committeeId = arg('--committee')
  const candidateName = arg('--candidate-name')
  const cycleArg = arg('--cycle')
  const label = arg('--label') ?? 'Unknown Campaign'
  const cycle = cycleArg ? parseInt(cycleArg) : new Date().getFullYear()

  let resolvedCommitteeId = committeeId

  if (!resolvedCommitteeId && candidateName) {
    console.log(`Searching FEC for candidate: "${candidateName}"...`)
    const candidates = await searchCandidates(candidateName, cycle)
    if (candidates.length === 0) {
      console.error('No candidates found.')
      process.exit(1)
    }
    console.log('Found candidates:')
    candidates.forEach((c) => console.log(`  ${c.candidate_id} — ${c.name} (${c.party}, ${c.state})`))
    const candidate = candidates[0]
    const committees = await getCommitteesByCandidate(candidate.candidate_id)
    console.log('Committees:')
    committees.forEach((c) => console.log(`  ${c.committee_id} — ${c.name}`))
    resolvedCommitteeId = committees[0]?.committee_id
  }

  if (!resolvedCommitteeId) {
    console.error('Provide --committee <ID> or --candidate-name "<name>"')
    process.exit(1)
  }

  console.log(`\nFetching totals for committee ${resolvedCommitteeId}, cycle ${cycle}...`)
  const totals = await getCommitteeTotals(resolvedCommitteeId, cycle)
  if (!totals) {
    console.error('No totals found for this committee/cycle.')
    process.exit(1)
  }
  console.log(`  Total receipts: $${totals.receipts.toLocaleString()}`)

  console.log('Fetching top contributors...')
  const contributions = await getTopContributors(resolvedCommitteeId, cycle, 100)
  console.log(`  ${contributions.length} contributions retrieved`)

  const fundingCycle = transformTotalsToFundingCycle(totals, label, resolvedCommitteeId, contributions)

  const outPath = resolve(__dirname, `../../../../data/fec-${resolvedCommitteeId}-${cycle}.json`)
  writeFileSync(outPath, JSON.stringify(fundingCycle, null, 2))
  console.log(`\nSaved to ${outPath}`)
  console.log(JSON.stringify(fundingCycle, null, 2))
}

run().catch((err) => { console.error(err); process.exit(1) })

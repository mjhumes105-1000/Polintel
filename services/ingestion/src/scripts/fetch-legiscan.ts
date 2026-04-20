/**
 * Fetch bill data from LegiScan.
 *
 * Usage:
 *   pnpm --filter ingestion fetch:legiscan -- --bill-id 1637072
 *   pnpm --filter ingestion fetch:legiscan -- --search "artificial intelligence" --state CA
 *   pnpm --filter ingestion fetch:legiscan -- --sessions CA
 */
import 'dotenv/config'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getBill, searchBills, getSessionList } from '../clients/legiscan.js'
import { transformLegiScanBill } from '../transforms/legiscan.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

function arg(flag: string): string | undefined {
  const i = process.argv.indexOf(flag)
  return i !== -1 ? process.argv[i + 1] : undefined
}

async function run() {
  const billId = arg('--bill-id')
  const query = arg('--search')
  const state = arg('--state')
  const sessionsState = arg('--sessions')

  if (sessionsState) {
    console.log(`Fetching sessions for ${sessionsState}...`)
    const sessions = await getSessionList(sessionsState)
    sessions.forEach((s) =>
      console.log(`  [${s.session_id}] ${s.session_title} (${s.year_start}–${s.year_end})`)
    )
    return
  }

  if (billId) {
    console.log(`Fetching bill ${billId}...`)
    const raw = await getBill(parseInt(billId))
    const bill = transformLegiScanBill(raw)
    const outPath = resolve(__dirname, `../../../../data/bill-legiscan-${billId}.json`)
    writeFileSync(outPath, JSON.stringify(bill, null, 2))
    console.log(`Saved to ${outPath}`)
    console.log(JSON.stringify(bill, null, 2))
    return
  }

  if (query) {
    console.log(`Searching LegiScan for "${query}"${state ? ` in ${state}` : ''}...`)
    const results = await searchBills(query, state, 2)
    console.log(`Found ${results.length} bills:\n`)
    for (const r of results.slice(0, 20)) {
      const num = (r as unknown as Record<string,string>).bill_number ?? r.number
      console.log(`  [${r.bill_id}] ${num} — ${r.title.slice(0, 80)}`)
      console.log(`         Status: ${r.last_action} (${r.last_action_date})`)
    }
    return
  }

  console.error('Provide --bill-id <id>, --search "<query>" [--state XX], or --sessions <state>')
  process.exit(1)
}

run().catch((err) => { console.error(err); process.exit(1) })

/**
 * Fetches current bill status from Congress.gov API.
 * Only monitors active (non-terminal) bills in the 119th Congress.
 * Outputs: apps/web/src/data/bills/status-overrides.json
 *
 * Usage:  node scripts/fetch-bills-status.mjs
 * Key:    Get a free API key at https://api.congress.gov/sign-up/
 * Env:    CONGRESS_API_KEY (falls back to DEMO_KEY with rate limits)
 */

import { writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Config ───────────────────────────────────────────────────────────────────

function loadEnvKey(key) {
  if (process.env[key]) return process.env[key]
  try {
    const envPath = resolve(__dirname, '../apps/web/.env.local')
    const lines = readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const [k, v] = line.split('=')
      if (k?.trim() === key) return v?.trim()
    }
  } catch {}
  return null
}

const API_KEY = loadEnvKey('CONGRESS_API_KEY') ?? 'DEMO_KEY'
const BASE_URL = 'https://api.congress.gov/v3'

if (API_KEY === 'DEMO_KEY') {
  console.warn('⚠ CONGRESS_API_KEY not found — using DEMO_KEY (rate-limited to ~25 req/hour)\n')
}

// ─── Active Bill Registry ─────────────────────────────────────────────────────
// Only list bills that are still active and could change status.
// Terminal bills (signed laws, vetoed, failed from previous congresses) are excluded.

const ACTIVE_BILLS = [
  // 119th Congress — monitoring for status changes
  { id: 'dhs-appropriations-act-2026',  congress: 119, type: 'hr', number: 7744 },
  { id: 'farm-bill-2026',               congress: 119, type: 'hr', number: 7567 },
  { id: 'save-act-2025',                congress: 119, type: 'hr', number: 22   },
  { id: 'raise-the-wage-act-2025',      congress: 119, type: 'hr', number: 1010 },
]

// ─── Status mapping ───────────────────────────────────────────────────────────

function mapActionToStatus(latestAction, billType) {
  if (!latestAction?.text) return null
  const text = latestAction.text.toLowerCase()
  const date = latestAction.actionDate

  // Terminal: signed into law
  if (text.includes('became public law') || text.includes('signed by the president')) {
    return { status: 'signed', statusDate: date }
  }

  // Terminal: vetoed
  if (text.includes('vetoed by the president') || text.includes('pocket vetoed')) {
    return { status: 'vetoed', statusDate: date }
  }

  // Terminal: explicitly failed
  if (
    text.includes('motion to proceed rejected') ||
    text.includes('cloture motion rejected') ||
    text.includes('indefinitely postponed') ||
    text.includes('failed of passage')
  ) {
    return { status: 'failed', statusDate: date }
  }

  // Passed both chambers (pending presidential action)
  const isHouseBill = billType === 'hr' || billType === 'hjres' || billType === 'hres'
  const isSenateBill = billType === 's' || billType === 'sjres' || billType === 'sres'

  if (isHouseBill && (text.includes('passed senate') || text.includes('passed/agreed to in senate'))) {
    return { status: 'passed', statusDate: date }
  }
  if (isSenateBill && (text.includes('passed house') || text.includes('passed/agreed to in house'))) {
    return { status: 'passed', statusDate: date }
  }

  // Passed one chamber (still needs the other)
  if (isHouseBill && (text.includes('passed house') || text.includes('passed/agreed to in house'))) {
    return { status: 'in-committee', statusDate: date }
  }
  if (isSenateBill && (text.includes('passed senate') || text.includes('passed/agreed to in senate'))) {
    return { status: 'in-committee', statusDate: date }
  }

  // In committee
  if (
    text.includes('referred to') ||
    text.includes('ordered to be reported') ||
    text.includes('reported by') ||
    text.includes('placed on') ||
    text.includes('committee markup') ||
    text.includes('hearing held')
  ) {
    return { status: 'in-committee', statusDate: date }
  }

  // Introduced
  if (text.includes('introduced in house') || text.includes('introduced in senate')) {
    return { status: 'introduced', statusDate: date }
  }

  // No recognized pattern — preserve existing status
  return null
}

// ─── Fetch with retry ─────────────────────────────────────────────────────────

async function fetchBill(bill) {
  const url = `${BASE_URL}/bill/${bill.congress}/${bill.type}/${bill.number}?api_key=${API_KEY}&format=json`

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url)
      if (res.status === 429) {
        console.warn(`  Rate limited — waiting 60s (attempt ${attempt})`)
        await new Promise(r => setTimeout(r, 60_000))
        continue
      }
      if (!res.ok) {
        console.warn(`  HTTP ${res.status} for ${bill.id}`)
        return null
      }
      const data = await res.json()
      return data.bill ?? null
    } catch (err) {
      console.warn(`  Fetch error for ${bill.id}: ${err.message}`)
      if (attempt < 3) await new Promise(r => setTimeout(r, 5_000))
    }
  }
  return null
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const outputPath = resolve(
    __dirname,
    '../apps/web/src/data/bills/status-overrides.json'
  )

  // Load existing overrides so we can preserve terminal-state entries
  let existing = { lastUpdated: '', overrides: {} }
  try {
    existing = JSON.parse(readFileSync(outputPath, 'utf8'))
  } catch {}

  const overrides = { ...existing.overrides }
  let changed = 0

  console.log(`Fetching status for ${ACTIVE_BILLS.length} active bills...\n`)

  for (const bill of ACTIVE_BILLS) {
    // Skip if already terminal in our overrides
    const prev = overrides[bill.id]
    if (prev && ['signed', 'vetoed', 'failed'].includes(prev.status)) {
      console.log(`  ✓ ${bill.id}: already ${prev.status} — skipping`)
      continue
    }

    process.stdout.write(`  Fetching ${bill.id} (${bill.congress}/${bill.type}/${bill.number})… `)

    const data = await fetchBill(bill)
    if (!data) {
      console.log('SKIPPED (fetch failed)')
      continue
    }

    const result = mapActionToStatus(data.latestAction, bill.type)
    if (!result) {
      console.log(`no recognized status · latest: "${data.latestAction?.text}"`)
      continue
    }

    const prevStatus = prev?.status ?? '(none)'
    if (!prev || prev.status !== result.status || prev.statusDate !== result.statusDate) {
      overrides[bill.id] = result
      changed++
      console.log(`${prevStatus} → ${result.status} (${result.statusDate})`)
    } else {
      console.log(`unchanged (${result.status})`)
    }

    // Respect rate limits between requests
    if (ACTIVE_BILLS.indexOf(bill) < ACTIVE_BILLS.length - 1) {
      await new Promise(r => setTimeout(r, 1_200))
    }
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    overrides,
  }

  writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n')

  console.log(
    `\n${changed > 0 ? `✓ ${changed} status change(s) written` : '✓ No changes'} → status-overrides.json`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

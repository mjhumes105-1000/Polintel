/**
 * Fetches U.S. bilateral direct investment data from the BEA ITA dataset.
 * - DiInvDirInvOutward: U.S. direct investment abroad (USDIA) by country
 * - DiInvDirInvInward:  Foreign direct investment in the U.S. (FDIUS) by country
 * Outputs: apps/web/src/data/economy/bea-investment-data.json
 *
 * Usage:  node scripts/fetch-bea-investment-data.mjs
 * Docs:   https://apps.bea.gov/API/signup/
 */

import { writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function loadKey(name) {
  if (process.env[name]) return process.env[name]
  try {
    const p = resolve(__dirname, '../apps/web/.env.local')
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const [k, v] = line.split('=')
      if (k?.trim() === name) return v?.trim()
    }
  } catch {}
  return null
}

const BEA_API_KEY = loadKey('BEA_API_KEY')
if (!BEA_API_KEY) { console.warn('BEA_API_KEY not set — skipping BEA investment data refresh'); process.exit(0) }

const BASE = `https://apps.bea.gov/api/data?UserID=${BEA_API_KEY}&ResultFormat=JSON`

const delay = ms => new Promise(r => setTimeout(r, ms))

async function fetchBEA(params) {
  const res = await fetch(`${BASE}&${params}`)
  const json = await res.json()
  if (json.BEAAPI?.Results?.Error || json.BEAAPI?.Results?.['Error']) {
    const err = json.BEAAPI.Results.Error
    throw new Error(`BEA error ${err.number||err.APIErrorCode}: ${err.error||err.APIErrorDescription}`)
  }
  return json.BEAAPI.Results
}

// ITA AreaOrCountry codes → our app slugs
const COUNTRIES = [
  { slug: 'mexico',          itaCode: 'Mexico' },
  { slug: 'canada',          itaCode: 'Canada' },
  { slug: 'china',           itaCode: 'China' },
  { slug: 'germany',         itaCode: 'Germany' },
  { slug: 'japan',           itaCode: 'Japan' },
  { slug: 'south-korea',     itaCode: 'SouthKorea' },
  { slug: 'united-kingdom',  itaCode: 'UnitedKingdom' },
  { slug: 'vietnam',         itaCode: 'Vietnam' },
  { slug: 'india',           itaCode: 'India' },
  { slug: 'taiwan',          itaCode: 'Taiwan' },
  { slug: 'france',          itaCode: 'France' },
  { slug: 'ireland',         itaCode: 'Ireland' },
  { slug: 'switzerland',     itaCode: 'Switzerland' },
  { slug: 'italy',           itaCode: 'Italy' },
  { slug: 'netherlands',     itaCode: 'Netherlands' },
]

// ITA indicators:
// DiInvAssets  = Net U.S. acquisition of direct investment assets (outward flows)
// DiInvLiabs   = Net U.S. incurrence of direct investment liabilities (inward flows)
// We use the most recent 5 years to compute a cumulative position proxy if position
// indicators are unavailable, but primarily target the latest year position series.

// BEA ITA directional direct investment position indicators (if available):
const OUTWARD_INDICATOR = 'DiInvDirInvOutward'   // USDIA directional basis — outward
const INWARD_INDICATOR  = 'DiInvDirInvInward'    // FDIUS directional basis — inward

// Year to fetch
const YEAR = '2023'

async function fetchIndicatorForCountry(indicator, itaCode, year) {
  const params = `method=GetData&DataSetName=ITA&Indicator=${indicator}&AreaOrCountry=${itaCode}&Frequency=A&Year=${year}`
  const result = await fetchBEA(params)
  // ITA returns Data as an array of one object per time series
  const data = result?.Data
  if (Array.isArray(data)) {
    const row = data.find(d => d.TimePeriod === year || d.Year === year)
    if (row) {
      const val = parseFloat(row.DataValue?.replace(/,/g, ''))
      return isNaN(val) ? null : val * 1_000_000  // BEA reports in millions of dollars
    }
    // fallback: last row
    const last = data[data.length - 1]
    if (last) {
      const val = parseFloat(last.DataValue?.replace(/,/g, ''))
      return isNaN(val) ? null : val * 1_000_000
    }
  } else if (data && typeof data === 'object') {
    // Single value response
    const val = parseFloat((data.DataValue || data.DataValueUnformatted || '').replace(/,/g, ''))
    return isNaN(val) ? null : val * 1_000_000
  }
  return null
}

async function main() {
  console.log(`Fetching BEA bilateral direct investment data (${YEAR})...\n`)

  // First verify indicators exist
  console.log('Verifying ITA indicators...')
  await delay(500)
  const indParams = await fetchBEA('method=GetParameterValues&DataSetName=ITA&ParameterName=Indicator')
  const allInds = indParams?.ParamValue || []
  const outwardExists = allInds.some(v => (v.Key||v.key) === OUTWARD_INDICATOR)
  const inwardExists  = allInds.some(v => (v.Key||v.key) === INWARD_INDICATOR)

  // Fallback indicators if primary ones don't exist
  const outInd = outwardExists ? OUTWARD_INDICATOR : 'DiInvAssets'
  const inInd  = inwardExists  ? INWARD_INDICATOR  : 'DiInvLiabs'
  console.log(`  Outward indicator: ${outInd} ${outwardExists ? '✓' : '(fallback)'}`)
  console.log(`  Inward indicator:  ${inInd} ${inwardExists ? '✓' : '(fallback)'}`)

  const results = {}
  const errors = []

  for (const { slug, itaCode } of COUNTRIES) {
    process.stdout.write(`  ${slug.padEnd(20)} `)
    try {
      await delay(400)
      let usdia = await fetchIndicatorForCountry(outInd, itaCode, YEAR)
      await delay(400)
      let fdius = await fetchIndicatorForCountry(inInd, itaCode, YEAR)

      // For countries BEA tracks only in regional aggregates, try a broader year range
      if (usdia === null) {
        await delay(400)
        usdia = await fetchIndicatorForCountry(outInd, itaCode, '2022')
      }
      if (fdius === null) {
        await delay(400)
        fdius = await fetchIndicatorForCountry(inInd, itaCode, '2022')
      }

      results[slug] = {
        fiscalYear: YEAR,
        usFDIAbroadUSD: usdia,
        foreignFDIInUSUSD: fdius,
        usFDIAbroadIndicator: outInd,
        foreignFDIInUSIndicator: inInd,
      }

      const abroad = usdia != null ? `USDIA $${(usdia/1e9).toFixed(1)}B` : 'USDIA n/a'
      const inward = fdius != null ? `FDIUS $${(fdius/1e9).toFixed(1)}B` : 'FDIUS n/a'
      console.log(`${abroad}  ${inward}`)
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      errors.push({ slug, error: err.message })
    }
  }

  const output = {
    meta: {
      source: 'U.S. Bureau of Economic Analysis (BEA) — International Transactions Accounts',
      dataset: 'ITA',
      indicators: { outward: outInd, inward: inInd },
      fiscalYear: YEAR,
      note: 'Values in USD. Positive = net outflow (U.S. investing abroad) or net inflow (foreign investing in U.S.).',
      retrievedAt: new Date().toISOString().split('T')[0],
    },
    countries: results,
  }

  const outPath = resolve(__dirname, '../apps/web/src/data/economy/bea-investment-data.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))

  console.log(`\n✓ Wrote ${Object.keys(results).length} country profiles → ${outPath}`)
  if (errors.length > 0) {
    console.log(`\n⚠ ${errors.length} errors:`)
    errors.forEach(e => console.log(`  - ${e.slug}: ${e.error}`))
  }
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })

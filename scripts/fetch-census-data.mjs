/**
 * Fetches U.S. international trade data from the Census Bureau API.
 * Outputs: apps/web/src/data/economy/census-trade-data.json
 *
 * Usage:  node scripts/fetch-census-data.mjs
 * Docs:   https://api.census.gov/data/timeseries/intltrade/
 */

import { writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load Census API key from apps/web/.env.local
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

const CENSUS_API_KEY = loadEnvKey('CENSUS_API_KEY')
if (!CENSUS_API_KEY) console.warn('⚠ CENSUS_API_KEY not found — requests may be rate-limited\n')

const BASE_EXP = 'https://api.census.gov/data/timeseries/intltrade/exports/naics'
const BASE_IMP = 'https://api.census.gov/data/timeseries/intltrade/imports/naics'

// Data year — update to most recent complete year
const YEAR = '2024'
const MONTH = '12' // December = full-year cumulative

// Census Bureau country codes → app slug
const COUNTRIES = [
  { slug: 'mexico',         code: '2010' },
  { slug: 'canada',         code: '1220' },
  { slug: 'china',          code: '5700' },
  { slug: 'germany',        code: '4280' },
  { slug: 'japan',          code: '5880' },
  { slug: 'south-korea',    code: '5800' },
  { slug: 'united-kingdom', code: '4120' },
  { slug: 'vietnam',        code: '5520' },
  { slug: 'india',          code: '5330' },
  { slug: 'taiwan',         code: '5830' },
  { slug: 'france',         code: '4279' },
  { slug: 'ireland',        code: '4190' },
  { slug: 'switzerland',    code: '4419' },
  { slug: 'italy',          code: '4759' },
  { slug: 'netherlands',    code: '4330' },
]

// NAICS 3-digit code → cleaner display name
const NAICS_LABELS = {
  '111': 'Agricultural Products',
  '112': 'Livestock & Animal Products',
  '113': 'Forestry & Logging',
  '211': 'Oil & Natural Gas',
  '212': 'Mining & Quarrying',
  '311': 'Food & Beverage Manufacturing',
  '312': 'Beverages & Tobacco',
  '313': 'Textiles',
  '315': 'Apparel & Clothing',
  '316': 'Leather Goods & Footwear',
  '321': 'Wood Products',
  '322': 'Paper & Packaging',
  '324': 'Petroleum & Coal Products',
  '325': 'Chemicals & Pharmaceuticals',
  '326': 'Plastics & Rubber',
  '327': 'Nonmetallic Minerals',
  '331': 'Primary Metals',
  '332': 'Fabricated Metal Products',
  '333': 'Industrial Machinery',
  '334': 'Computer & Electronic Products',
  '335': 'Electrical Equipment & Appliances',
  '336': 'Transportation Equipment',
  '337': 'Furniture & Related',
  '339': 'Miscellaneous Manufactured Goods',
  '423': 'Durable Goods (Wholesale)',
  '424': 'Nondurable Goods (Wholesale)',
  '482': 'Rail Transportation',
  '483': 'Water Transportation',
  '541': 'Professional & Technical Services',
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bNesoi\b/gi, '')
    .replace(/,\s*$/, '')
    .trim()
}

function labelFor(naics, rawName) {
  return NAICS_LABELS[naics] ?? toTitleCase(rawName)
}

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Census API ${res.status}: ${text.slice(0, 200)}`)
  }
  return res.json()
}

function parseRows(rows) {
  const [headers, ...data] = rows
  return data.map(row => Object.fromEntries(headers.map((h, i) => [h, row[i]])))
}

async function fetchCountryData(slug, code) {
  const keyParam = CENSUS_API_KEY ? `&key=${CENSUS_API_KEY}` : ''
  const params = `YEAR=${YEAR}&MONTH=${MONTH}&CTY_CODE=${code}${keyParam}`

  // ── Totals ────────────────────────────────────────────────────────────────
  const [expTotalRows, impTotalRows] = await Promise.all([
    fetchJSON(`${BASE_EXP}?get=CTY_CODE,CTY_NAME,ALL_VAL_YR&${params}`),
    fetchJSON(`${BASE_IMP}?get=CTY_CODE,CTY_NAME,GEN_VAL_YR&${params}`),
  ])

  const expTotal = parseInt(parseRows(expTotalRows)[0]?.ALL_VAL_YR ?? '0', 10)
  const impTotal = parseInt(parseRows(impTotalRows)[0]?.GEN_VAL_YR ?? '0', 10)

  if (!expTotal && !impTotal) throw new Error(`No data returned for ${slug} (code ${code})`)

  // ── Category breakdowns ───────────────────────────────────────────────────
  const [expCatRows, impCatRows] = await Promise.all([
    fetchJSON(`${BASE_EXP}?get=CTY_CODE,NAICS,NAICS_LDESC,ALL_VAL_YR&${params}`),
    fetchJSON(`${BASE_IMP}?get=CTY_CODE,NAICS,NAICS_LDESC,GEN_VAL_YR&${params}`),
  ])

  const topExports = parseRows(expCatRows)
    .filter(r => r.NAICS?.length === 3)
    .map(r => ({ naics: r.NAICS, name: labelFor(r.NAICS, r.NAICS_LDESC), valueUSD: parseInt(r.ALL_VAL_YR, 10) }))
    .filter(r => !isNaN(r.valueUSD) && r.valueUSD > 0)
    .sort((a, b) => b.valueUSD - a.valueUSD)
    .slice(0, 5)
    .map(r => ({
      name: r.name,
      valueUSD: r.valueUSD,
      percentOfTotal: Math.round((r.valueUSD / expTotal) * 100),
      direction: 'export',
    }))

  const topImports = parseRows(impCatRows)
    .filter(r => r.NAICS?.length === 3)
    .map(r => ({ naics: r.NAICS, name: labelFor(r.NAICS, r.NAICS_LDESC), valueUSD: parseInt(r.GEN_VAL_YR, 10) }))
    .filter(r => !isNaN(r.valueUSD) && r.valueUSD > 0)
    .sort((a, b) => b.valueUSD - a.valueUSD)
    .slice(0, 5)
    .map(r => ({
      name: r.name,
      valueUSD: r.valueUSD,
      percentOfTotal: Math.round((r.valueUSD / impTotal) * 100),
      direction: 'import',
    }))

  const tradeBalance = expTotal - impTotal

  return {
    fiscalYear: YEAR,
    usExportsUSD: expTotal,
    usImportsUSD: impTotal,
    tradeBalanceUSD: tradeBalance,
    balance: tradeBalance > 0 ? 'surplus' : tradeBalance < 0 ? 'deficit' : 'balanced',
    topExportCategories: topExports,
    topImportCategories: topImports,
  }
}

async function main() {
  console.log(`Fetching Census Bureau trade data for ${COUNTRIES.length} countries (FY${YEAR})...\n`)

  const results = {}
  const errors = []

  for (const { slug, code } of COUNTRIES) {
    process.stdout.write(`  ${slug.padEnd(18)} `)
    try {
      const data = await fetchCountryData(slug, code)
      results[slug] = data
      const exp = (data.usExportsUSD / 1e9).toFixed(1)
      const imp = (data.usImportsUSD / 1e9).toFixed(1)
      const bal = (data.tradeBalanceUSD / 1e9).toFixed(1)
      const sign = data.tradeBalanceUSD >= 0 ? '+' : ''
      console.log(`exports $${exp}B  imports $${imp}B  balance ${sign}$${bal}B`)
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      errors.push({ slug, error: err.message })
    }
    // Polite delay between requests
    await new Promise(r => setTimeout(r, 150))
  }

  const output = {
    meta: {
      source: 'U.S. Census Bureau, USA Trade Online',
      endpoint: 'api.census.gov/data/timeseries/intltrade/*/naics',
      dataYear: YEAR,
      dataMonth: MONTH,
      note: 'Month 12 = full-year cumulative total. Values in USD.',
      retrievedAt: new Date().toISOString().split('T')[0],
    },
    countries: results,
  }

  const outPath = resolve(__dirname, '../apps/web/src/data/economy/census-trade-data.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))

  console.log(`\n✓ Wrote ${Object.keys(results).length} country profiles → ${outPath}`)
  if (errors.length > 0) {
    console.log(`\n⚠ ${errors.length} errors:`)
    errors.forEach(e => console.log(`  - ${e.slug}: ${e.error}`))
  }
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})

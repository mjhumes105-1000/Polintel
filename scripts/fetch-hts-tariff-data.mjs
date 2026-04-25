/**
 * Fetches U.S. MFN tariff rates from the USITC Harmonized Tariff Schedule API.
 * Outputs: apps/web/src/data/economy/hts-tariff-data.json
 *
 * Usage:  node scripts/fetch-hts-tariff-data.mjs
 * Source: https://hts.usitc.gov  (USITC HTS API at /reststop/)
 */

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://hts.usitc.gov/reststop'

// Sectors keyed by NAICS code — matches the NAICS labels in census-trade-data.json
// Each entry has search terms and the HTS chapter prefix for filtering results
const SECTORS = [
  {
    naics: '336',
    name: 'Transportation Equipment',
    searches: ['passenger motor vehicles spark ignition'],
    htsPrefix: '8703',
    description: 'Passenger automobiles',
  },
  {
    naics: '334',
    name: 'Computer & Electronic Products',
    searches: ['automatic data processing machines portable'],
    htsPrefix: '8471',
    description: 'Portable computers / laptops',
  },
  {
    naics: '335',
    name: 'Electrical Equipment & Appliances',
    searches: ['electrical transformers power supply'],
    htsPrefix: '8504',
    description: 'Electrical transformers',
  },
  {
    naics: '333',
    name: 'Industrial Machinery',
    searches: ['machine tools metalworking'],
    htsPrefix: '8457',
    description: 'Machining centers',
  },
  {
    naics: '325',
    name: 'Chemicals & Pharmaceuticals',
    searches: ['medicaments cardiovascular', 'medicaments anticonvulsants'],
    htsPrefix: '3004',
    fallbackRate: 'Free',
    description: 'Medicaments / pharmaceuticals',
  },
  {
    naics: '331',
    name: 'Primary Metals',
    searches: ['flat-rolled products iron or steel'],
    htsPrefix: '7208',
    description: 'Flat-rolled steel (Sec. 232 applies)',
  },
  {
    naics: '332',
    name: 'Fabricated Metal Products',
    searches: ['articles of iron or steel wire'],
    htsPrefix: '7217',
    description: 'Steel wire products',
  },
  {
    naics: '315',
    name: 'Apparel & Clothing',
    searches: ['T-shirts singlets tank tops cotton'],
    htsPrefix: '6109',
    description: 'Cotton T-shirts',
  },
  {
    naics: '211',
    name: 'Oil & Natural Gas',
    searches: ['testing 25 degrees API petroleum', '2709 petroleum bituminous'],
    htsPrefix: '2709',
    description: 'Crude petroleum oils',
  },
  {
    naics: '311',
    name: 'Food & Beverage Manufacturing',
    searches: ['prepared foods cereals grains'],
    htsPrefix: '1904',
    description: 'Prepared cereal foods',
  },
  {
    naics: '326',
    name: 'Plastics & Rubber',
    searches: ['polymers ethylene primary forms'],
    htsPrefix: '3901',
    description: 'Polyethylene (primary forms)',
  },
]

// HTS special-column program codes relevant to countries in our app
const PROGRAM_CODES = {
  MX: 'USMCA (Mexico)',
  CA: 'USMCA (Canada)',
  KR: 'KORUS FTA (South Korea)',
  AU: 'Australia FTA',
  IL: 'Israel FTA',
  JO: 'Jordan FTA',
  SG: 'Singapore FTA',
  A:  'GSP (developing nations)',
  'A+': 'GSP (least-developed nations)',
  D:  'AGOA (sub-Saharan Africa)',
}

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

async function getCurrentRelease() {
  const data = await fetchJSON(`${BASE}/currentRelease`)
  return data?.name ?? 'unknown'
}

async function fetchSectorRate(sector) {
  for (const keyword of sector.searches) {
    const url = `${BASE}/search?keyword=${encodeURIComponent(keyword)}`
    const rows = await fetchJSON(url)

    // Find entries in the target HTS chapter that have a general rate
    const match = rows.find(r =>
      r.htsno?.startsWith(sector.htsPrefix) &&
      r.general &&
      r.general.trim() !== ''
    )

    if (match) {
      // Parse special column: "Free (A+,AU,BH,...)" → array of codes
      const specialRaw = match.special ?? ''
      const codeMatch = specialRaw.match(/\(([^)]+)\)/)
      const specialCodes = codeMatch
        ? codeMatch[1].split(',').map(c => c.trim())
        : []

      // Identify named FTA programs present
      const ftaPrograms = specialCodes
        .map(code => PROGRAM_CODES[code])
        .filter(Boolean)

      return {
        naics: sector.naics,
        name: sector.name,
        htsCode: match.htsno,
        description: match.description?.trim() ?? sector.description,
        generalRate: match.general.trim(),    // MFN/NTR rate
        specialRaw: specialRaw.slice(0, 200),
        specialCodes,
        ftaPrograms: [...new Set(ftaPrograms)],
        other: match.other?.trim() ?? '',     // Column 2 rate (Cuba, DPRK)
        additionalDuties: match.additionalDuties ?? null,
        source: `USITC HTS 2026, ${match.htsno}`,
      }
    }
  }

  if (sector.fallbackRate) {
    return {
      naics: sector.naics,
      name: sector.name,
      htsCode: sector.htsPrefix,
      description: sector.description,
      generalRate: sector.fallbackRate,
      specialRaw: '',
      specialCodes: [],
      ftaPrograms: [],
      other: '',
      additionalDuties: null,
      source: `USITC HTS 2026, Chapter ${sector.htsPrefix.slice(0, 2)} (heading-level rate)`,
    }
  }
  return {
    naics: sector.naics,
    name: sector.name,
    htsCode: null,
    description: sector.description,
    generalRate: 'N/A',
    specialRaw: '',
    specialCodes: [],
    ftaPrograms: [],
    other: '',
    additionalDuties: null,
    source: 'USITC HTS 2026 (lookup failed)',
  }
}

async function main() {
  console.log('Fetching USITC HTS tariff data...\n')

  const release = await getCurrentRelease()
  console.log(`  HTS Release: ${release}\n`)

  const sectors = {}
  const errors = []

  for (const sector of SECTORS) {
    process.stdout.write(`  ${sector.name.padEnd(36)} `)
    try {
      const data = await fetchSectorRate(sector)
      sectors[sector.naics] = data
      console.log(`${data.htsCode ?? '???'} → general: ${data.generalRate}`)
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      errors.push({ naics: sector.naics, error: err.message })
    }
    await new Promise(r => setTimeout(r, 100))
  }

  const output = {
    meta: {
      source: 'USITC Harmonized Tariff Schedule of the United States',
      apiBase: 'https://hts.usitc.gov/reststop/',
      release,
      note: 'generalRate = MFN/NTR (Most Favored Nation / Normal Trade Relations) rate. Does not include Section 301, 232, 201, or 2025 executive order additional duties.',
      retrievedAt: new Date().toISOString().split('T')[0],
    },
    sectors,
  }

  const outPath = resolve(__dirname, '../apps/web/src/data/economy/hts-tariff-data.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))

  console.log(`\n✓ Wrote ${Object.keys(sectors).length} sector profiles → ${outPath}`)
  if (errors.length > 0) {
    console.log(`\n⚠ ${errors.length} errors:`)
    errors.forEach(e => console.log(`  - ${e.naics}: ${e.error}`))
  }
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})

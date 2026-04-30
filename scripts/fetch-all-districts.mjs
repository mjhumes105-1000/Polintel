/**
 * Downloads congressional district GeoJSON for all 50 states from the
 * Census Bureau TIGER web services and saves them to public/data/.
 *
 * Skips states that already have a local file.
 * Usage: node scripts/fetch-all-districts.mjs
 */
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'apps', 'web', 'public', 'data')

mkdirSync(OUT_DIR, { recursive: true })

// State abbreviation → FIPS code
const STATES = {
  AL:'01', AK:'02', AZ:'04', AR:'05', CA:'06', CO:'08', CT:'09', DE:'10',
  FL:'12', GA:'13', HI:'15', ID:'16', IL:'17', IN:'18', IA:'19', KS:'20',
  KY:'21', LA:'22', ME:'23', MD:'24', MA:'25', MI:'26', MN:'27', MS:'28',
  MO:'29', MT:'30', NE:'31', NV:'32', NH:'33', NJ:'34', NM:'35', NY:'36',
  NC:'37', ND:'38', OH:'39', OK:'40', OR:'41', PA:'42', RI:'44', SC:'45',
  SD:'46', TN:'47', TX:'48', UT:'49', VT:'50', VA:'51', WA:'53', WV:'54',
  WI:'55', WY:'56',
}

// States with at-large districts (only 1 representative) — district = 0 in Census data
// MT gained a second seat in the 119th Congress and is no longer at-large
const AT_LARGE = new Set(['AK','DE','ND','SD','VT','WY'])

// Layer 0 = 119th Congressional Districts; field STATE = FIPS code; CD119 = district number
const BASE_URL = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer/0/query'

async function fetchState(abbr, fips) {
  const outFile = join(OUT_DIR, `${abbr.toLowerCase()}-districts.json`)

  if (existsSync(outFile)) {
    console.log(`  [SKIP] ${abbr} — file already exists`)
    return true
  }

  const params = new URLSearchParams({
    where: `STATE='${fips}'`,
    outFields: 'CD119,STATE,NAME',
    f: 'geojson',
    outSR: '4326',
    returnGeometry: 'true',
  })

  const url = `${BASE_URL}?${params}`
  console.log(`  [FETCH] ${abbr} (FIPS ${fips})…`)

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()

    if (!data.features?.length) {
      console.log(`  [WARN]  ${abbr} — no features returned`)
      return false
    }

    // Normalize: CD119 is already correct; for at-large states set it to '1'
    const normalized = {
      type: 'FeatureCollection',
      features: data.features.map(f => ({
        ...f,
        properties: {
          ...f.properties,
          CD119: AT_LARGE.has(abbr) ? '1' : String(parseInt(f.properties.CD119, 10)),
        },
      })),
    }

    writeFileSync(outFile, JSON.stringify(normalized))
    console.log(`  [OK]    ${abbr} — ${normalized.features.length} districts saved (${Math.round(JSON.stringify(normalized).length / 1024)}KB)`)
    return true
  } catch (err) {
    console.log(`  [ERR]   ${abbr} — ${err.message}`)
    return false
  }
}

async function main() {
  console.log(`Downloading district GeoJSON for ${Object.keys(STATES).length} states...\n`)
  let ok = 0, skip = 0, fail = 0

  for (const [abbr, fips] of Object.entries(STATES)) {
    const result = await fetchState(abbr, fips)
    if (result === true) {
      const outFile = join(OUT_DIR, `${abbr.toLowerCase()}-districts.json`)
      if (existsSync(outFile)) ok++; else skip++
    } else {
      fail++
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200))
  }

  console.log(`\nDone. ${ok} downloaded, ${skip} skipped, ${fail} failed.`)
}

main()

/**
 * Fetches congressional district GeoJSON from the Census Bureau cartographic boundary files.
 * Usage: node scripts/fetch-district-geojson.mjs FL TX NY
 */
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const outDir = resolve(root, 'apps/web/public/data')

// FIPS state codes
const FIPS = {
  FL: '12', TX: '48', NY: '36',
  CA: '06', MS: '28', NJ: '34',
}

// Census Bureau cartographic boundary files — 5m resolution (simplified, small files)
// These are the 119th Congress (2023) boundaries
function censusUrl(stateFips) {
  return `https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_${stateFips}_cd119_500k.zip`
}

// Census Bureau TIGER Web REST Service — Layer 54 = 119th Congressional Districts
function censusGeoJsonUrl(stateFips) {
  return `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/54/query?where=STATE%3D'${stateFips}'&outFields=CD119%2CSTATE%2CNAME&f=geojson&outSR=4326`
}

const states = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : ['FL', 'TX', 'NY']

for (const state of states) {
  const fips = FIPS[state]
  if (!fips) { console.error(`Unknown state: ${state}`); continue }

  const url = censusGeoJsonUrl(fips)
  console.log(`Fetching ${state} (FIPS ${fips})...`)
  console.log(`  URL: ${url}`)

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()

    // Remap properties to match existing format: { CD119, STATE, NAME }
    const geojson = {
      type: 'FeatureCollection',
      features: data.features.map(f => ({
        ...f,
        properties: {
          CD118: f.properties.CD119, // use same value for both
          STATE: f.properties.STATE ?? fips,
          NAME: f.properties.NAME ?? `Congressional District ${f.properties.CD119}`,
          CD119: f.properties.CD119,
        },
      })),
    }

    const outPath = resolve(outDir, `${state.toLowerCase()}-districts.json`)
    writeFileSync(outPath, JSON.stringify(geojson))
    console.log(`  ✓ Wrote ${geojson.features.length} districts to ${outPath} (${Math.round(JSON.stringify(geojson).length / 1024)}KB)`)
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`)
  }
}

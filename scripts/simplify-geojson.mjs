/**
 * Simplifies GeoJSON district files by reducing coordinate precision
 * and applying Visvalingam-Whyatt simplification.
 * Usage: node scripts/simplify-geojson.mjs fl tx ny
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = resolve(__dirname, '..', 'apps/web/public/data')

const states = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : ['fl', 'tx', 'ny']

// Round coordinate to N decimal places (4 = ~11m precision, sufficient for district maps)
function round(n, places = 4) {
  return Math.round(n * 10 ** places) / 10 ** places
}

function simplifyRing(ring, tolerance = 0.001) {
  if (ring.length <= 4) return ring.map(([x, y]) => [round(x), round(y)])
  // Douglas-Peucker simplification
  function perpendicularDistance(pt, lineStart, lineEnd) {
    const dx = lineEnd[0] - lineStart[0]
    const dy = lineEnd[1] - lineStart[1]
    const len2 = dx * dx + dy * dy
    if (len2 === 0) {
      const ex = pt[0] - lineStart[0], ey = pt[1] - lineStart[1]
      return Math.sqrt(ex * ex + ey * ey)
    }
    const t = Math.max(0, Math.min(1, ((pt[0] - lineStart[0]) * dx + (pt[1] - lineStart[1]) * dy) / len2))
    const projX = lineStart[0] + t * dx, projY = lineStart[1] + t * dy
    const ex = pt[0] - projX, ey = pt[1] - projY
    return Math.sqrt(ex * ex + ey * ey)
  }
  function dp(points, tol) {
    if (points.length <= 2) return points.map(([x, y]) => [round(x), round(y)])
    let maxDist = 0, maxIdx = 0
    for (let i = 1; i < points.length - 1; i++) {
      const d = perpendicularDistance(points[i], points[0], points[points.length - 1])
      if (d > maxDist) { maxDist = d; maxIdx = i }
    }
    if (maxDist > tol) {
      const left = dp(points.slice(0, maxIdx + 1), tol)
      const right = dp(points.slice(maxIdx), tol)
      return [...left.slice(0, -1), ...right]
    }
    return [points[0], points[points.length - 1]].map(([x, y]) => [round(x), round(y)])
  }
  const simplified = dp(ring, tolerance)
  // Ensure ring is closed
  if (simplified[0][0] !== simplified[simplified.length - 1][0] ||
      simplified[0][1] !== simplified[simplified.length - 1][1]) {
    simplified.push(simplified[0])
  }
  return simplified.length >= 4 ? simplified : ring.map(([x, y]) => [round(x), round(y)])
}

function simplifyGeometry(geom, tolerance) {
  if (!geom) return geom
  if (geom.type === 'Polygon') {
    return { ...geom, coordinates: geom.coordinates.map(ring => simplifyRing(ring, tolerance)) }
  }
  if (geom.type === 'MultiPolygon') {
    return { ...geom, coordinates: geom.coordinates.map(poly => poly.map(ring => simplifyRing(ring, tolerance))) }
  }
  return geom
}

for (const state of states) {
  const inPath = resolve(dataDir, `${state}-districts.json`)
  let data
  try {
    data = JSON.parse(readFileSync(inPath, 'utf8'))
  } catch (e) {
    console.error(`Could not read ${inPath}:`, e.message)
    continue
  }

  const beforeSize = JSON.stringify(data).length
  // Tolerance in degrees: 0.005 ≈ ~500m, good for state-level district maps
  const tolerance = 0.005
  const simplified = {
    ...data,
    features: data.features.map(f => ({
      ...f,
      geometry: simplifyGeometry(f.geometry, tolerance),
    })),
  }

  const outJson = JSON.stringify(simplified)
  const afterSize = outJson.length
  writeFileSync(inPath, outJson)
  console.log(`${state.toUpperCase()}: ${Math.round(beforeSize/1024)}KB → ${Math.round(afterSize/1024)}KB (${Math.round((1 - afterSize/beforeSize)*100)}% reduction)`)
}

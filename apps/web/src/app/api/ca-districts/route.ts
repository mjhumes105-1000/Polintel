import { NextResponse } from 'next/server'

const TIGERWEB_URL =
  'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer/0/query' +
  '?where=STATE+%3D+%2706%27&outFields=STATE%2CCD119&f=geojson&outSR=4326'

// Cache the GeoJSON in memory for the server process lifetime
let cachedGeoJSON: object | null = null

export async function GET() {
  if (cachedGeoJSON) {
    return NextResponse.json(cachedGeoJSON, {
      headers: { 'Cache-Control': 'public, max-age=86400' },
    })
  }

  try {
    const res = await fetch(TIGERWEB_URL, { next: { revalidate: 86400 } })
    if (!res.ok) throw new Error(`TIGERweb returned ${res.status}`)
    const data = await res.json()
    cachedGeoJSON = data
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, max-age=86400' },
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch district boundaries' },
      { status: 502 }
    )
  }
}

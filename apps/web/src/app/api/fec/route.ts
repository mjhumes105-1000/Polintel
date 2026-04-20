import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://api.open.fec.gov/v1'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')
  if (!path) return NextResponse.json({ error: 'Missing path param' }, { status: 400 })

  const fecUrl = new URL(`${BASE}${path}`)
  fecUrl.searchParams.set('api_key', process.env.FEC_API_KEY ?? '')

  // Forward all other query params
  for (const [k, v] of searchParams.entries()) {
    if (k !== 'path') fecUrl.searchParams.set(k, v)
  }

  const res = await fetch(fecUrl.toString())
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}

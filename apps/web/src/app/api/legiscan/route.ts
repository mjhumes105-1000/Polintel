import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://api.legiscan.com/'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const op = searchParams.get('op')
  if (!op) return NextResponse.json({ error: 'Missing op param' }, { status: 400 })

  const url = new URL(BASE)
  url.searchParams.set('key', process.env.LEGISCAN_API_KEY ?? '')
  for (const [k, v] of searchParams.entries()) {
    url.searchParams.set(k, v)
  }

  const res = await fetch(url.toString())
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}

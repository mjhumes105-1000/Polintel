import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body?.email || !body?.politicianId) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const email = String(body.email).toLowerCase().trim()
  const politicianId = String(body.politicianId).trim()
  const politicianName = String(body.politicianName ?? '').trim()

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  // TODO: persist to database (Supabase recommended)
  // Example:
  // await supabase.from('alert_signups').upsert({ email, politician_id: politicianId, politician_name: politicianName })
  console.log('[alert signup]', { email, politicianId, politicianName })

  return Response.json({ success: true })
}

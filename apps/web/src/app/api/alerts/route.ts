import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body?.email || !body?.politicianId) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const email = String(body.email).toLowerCase().trim()
  const politicianId = String(body.politicianId).trim()
  const politicianName = String(body.politicianName ?? '').trim()
  const notificationType = String(body.notificationType ?? 'vote').trim()
  const source = String(body.source ?? 'profile').trim()
  const createdAt = body.createdAt ?? new Date().toISOString()

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const record = { email, politicianId, politicianName, notificationType, source, createdAt, confirmed: false }

  // Persist to Supabase when configured:
  // const { createClient } = await import('@supabase/supabase-js')
  // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
  // const { error } = await supabase.from('politician_alerts').upsert(record, { onConflict: 'email,politician_id' })
  // if (error && error.code !== '23505') return Response.json({ error: error.message }, { status: 500 })

  console.log('[alert signup]', record)

  return Response.json({ success: true })
}

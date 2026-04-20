export const dynamic = 'force-static'

export function GET() {
  return Response.json({ error: 'API routes are not available in the static build.' }, { status: 404 })
}

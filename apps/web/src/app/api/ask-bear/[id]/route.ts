// Return empty array so Next.js skips this route during static export (output: 'export').
// Dynamic requests are still handled at runtime on Vercel.
export function generateStaticParams() { return [] }

import { NextRequest, NextResponse } from 'next/server'
import { getAnswer } from '@/lib/ask-bear/answerStore'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const response = getAnswer(id)

  if (!response) {
    return NextResponse.json({ error: 'Answer not found or expired' }, { status: 404 })
  }

  return NextResponse.json(response)
}

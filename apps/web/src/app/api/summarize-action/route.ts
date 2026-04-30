// NOTE: Requires server runtime. Excluded from static export builds.
// Works in dev (next dev) and on Vercel. Set ANTHROPIC_API_KEY to enable.

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

interface SummarizeRequest {
  documentNumber: string
  title: string
  type: string
  abstract?: string
}

const TYPE_LABEL: Record<string, string> = {
  executive_order: 'executive order',
  memorandum: 'presidential memorandum',
  proclamation: 'presidential proclamation',
}

// In-memory cache — lives for the lifetime of the server process
const summaryCache = new Map<string, string>()

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 503 })
  }

  const body = (await req.json()) as SummarizeRequest
  const { documentNumber, title, type, abstract } = body

  if (!title) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 })
  }

  if (summaryCache.has(documentNumber)) {
    return NextResponse.json({ summary: summaryCache.get(documentNumber) })
  }

  const typeLabel = TYPE_LABEL[type] ?? 'presidential action'
  const context = abstract
    ? `Title: ${title}\n\nOfficial abstract: ${abstract}`
    : `Title: ${title}`

  const client = new Anthropic({ apiKey })
  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: `You write plain-English summaries of presidential actions for a civic intelligence platform.
Write exactly 2 paragraphs, factual and politically neutral.
Paragraph 1: what the ${typeLabel} does and its immediate effect.
Paragraph 2: who it affects and why it matters.
No markdown. No headers. No # symbols. No jargon. No opinion. No filler phrases like "This order..." — just state what it does.`,
    messages: [{ role: 'user', content: context }],
  })

  const block = message.content[0]
  if (block.type !== 'text') {
    return NextResponse.json({ error: 'Unexpected response' }, { status: 500 })
  }

  summaryCache.set(documentNumber, block.text)
  return NextResponse.json({ summary: block.text })
}

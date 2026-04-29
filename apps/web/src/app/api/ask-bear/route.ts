// NOTE: This route requires a server runtime.
// With output: 'export' set in next.config.ts the static build excludes API routes.
// To enable Ask Teddy, either:
//   (a) deploy to Vercel (remove output: 'export') — recommended
//   (b) set NEXT_PUBLIC_ASK_BEAR_ENDPOINT to an external API server URL

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import type {
  AskBearRequest,
  AskBearResponse,
  AskBearResponseDraft,
  EvidenceItem,
  FundingEvidenceItem,
  ConversationTurn,
} from '@political-intel/types'
import { buildPoliticianEvidencePacket } from '@/lib/ask-bear/evidenceBuilder'
import { buildSystemPrompt } from '@/lib/ask-bear/systemPrompt'
import { validateCitations } from '@/lib/ask-bear/citationValidator'
import { storeAnswer } from '@/lib/ask-bear/answerStore'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles } from '@/data/politicians/stub-profiles'

const allProfiles = {
  'gavin-newsom': newsom,
  ...allDelegationProfiles,
  ...stubProfiles,
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

const SAFE_FALLBACK_ANSWER =
  'The following is an AI-generated editorial interpretation of the public record shown here. It represents one reading of the evidence, not a statement of fact.\n\nI don\'t have enough cited evidence in the record to answer that confidently.'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AskBearRequest
    const { query, contextType, contextId, history } = body

    if (!query?.trim()) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Ask Teddy is not configured on this deployment. Set ANTHROPIC_API_KEY to enable.' },
        { status: 503 }
      )
    }

    // General civic Q&A with live web search
    if (contextType === 'general') {
      const tavilyKey = process.env.TAVILY_API_KEY
      const searchResults = tavilyKey ? await searchWithTavily(query, tavilyKey) : []

      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      const searchContext = searchResults.length > 0
        ? `\nCURRENT WEB SEARCH RESULTS (today is ${today}):\n` +
          searchResults.map((r, i) =>
            `[${i + 1}] "${r.title}"${r.published_date ? ` (${r.published_date.slice(0, 10)})` : ''}\n    ${r.url}\n    ${r.content.slice(0, 300)}`
          ).join('\n\n') +
          '\n\nUse these results for current information. Reference them naturally when they are relevant.\n'
        : ''

      const GENERAL_PROMPT = `You are Teddy, PoliIntel's civic assistant. You answer questions about American government, politics, and the economy in plain language — like a knowledgeable friend, not a textbook.

STYLE
- Direct and honest. Get to the point.
- Short paragraphs. No jargon unless you explain it.
- Don't start with "Great question!" or filler phrases. Just answer.
- If something is genuinely debated, say so.

WHAT YOU COVER
- How Congress, the White House, and the courts work
- How bills become laws, what filibusters are, how committees function
- Politicians — their votes, records, and public positions
- The economy — the Fed, interest rates, inflation, tariffs, trade deficits, the debt ceiling
- Civic basics — elections, how voting works, constitutional rights
${searchContext}
RULES
1. No partisan framing. Describe facts and trade-offs, not sides.
2. If you don't know something, say so plainly.
3. Keep it under 300 words unless complexity demands more.
4. Lead with the direct answer, then explain.

Respond ONLY as JSON — no other text:
{
  "answer": "your conversational answer here",
  "observations": ["optional additional context"],
  "unresolved": ["if something is genuinely contested or uncertain"]
}`

      const client = new Anthropic({ apiKey })
      const message = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: GENERAL_PROMPT,
        messages: [
          ...buildHistory(history),
          { role: 'user', content: query },
        ],
      })

      const rawBlock = message.content[0]
      if (rawBlock.type !== 'text') throw new Error('Unexpected response type')

      let parsed: { answer: string; observations?: string[]; unresolved?: string[] }
      try {
        const match = rawBlock.text.match(/\{[\s\S]*\}/)
        if (!match) throw new Error('No JSON found')
        parsed = JSON.parse(match[0])
      } catch {
        parsed = { answer: rawBlock.text }
      }

      const webSources: AskBearResponse['sources'] = searchResults.map((r, i) => ({
        id: `web-${i + 1}`,
        title: r.title,
        url: r.url,
        publisher: new URL(r.url).hostname.replace(/^www\./, ''),
        publishedAt: r.published_date ?? undefined,
        sourceType: 'web_search' as const,
        accessedAt: new Date().toISOString(),
        reliabilityTier: 2 as const,
      }))

      const id = generateId()
      const generalResponse: AskBearResponse = {
        id,
        query,
        mode: 'general',
        answer: parsed.answer ?? rawBlock.text,
        recordShows: [],
        observations: parsed.observations ?? [],
        unresolved: parsed.unresolved ?? [],
        sources: webSources,
        createdAt: new Date().toISOString(),
        shareUrl: `/api/ask-bear/${id}`,
      }
      storeAnswer(id, generalResponse)
      return NextResponse.json(generalResponse)
    }

    // Build evidence packet from context
    let evidencePacket
    if (contextType === 'politician') {
      const politician = allProfiles[contextId as keyof typeof allProfiles]
      if (!politician) {
        return NextResponse.json({ error: `Politician '${contextId}' not found` }, { status: 404 })
      }
      evidencePacket = buildPoliticianEvidencePacket(politician)
    } else {
      return NextResponse.json(
        { error: `contextType '${contextType}' is not yet supported` },
        { status: 400 }
      )
    }

    const systemPrompt = buildSystemPrompt(evidencePacket, query)

    const client = new Anthropic({ apiKey })
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      system: systemPrompt,
      messages: [
        ...buildHistory(history),
        { role: 'user', content: query },
      ],
    })

    const rawBlock = message.content[0]
    if (rawBlock.type !== 'text') {
      throw new Error('Unexpected response type from Claude API')
    }

    // Parse JSON from model output
    let draft: AskBearResponseDraft
    try {
      const match = rawBlock.text.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('No JSON object found in response')
      draft = JSON.parse(match[0]) as AskBearResponseDraft
      // Ensure arrays exist even if model omits them
      draft.recordShows ??= []
      draft.openSecretsShows ??= []
      draft.observations ??= []
      draft.unresolved ??= []
      draft.recordTensionFlags ??= []
      draft.fundingContextFlags ??= []
    } catch {
      const id = generateId()
      const fallback = buildFallbackResponse(id, query, evidencePacket.sources.slice(0, 2))
      storeAnswer(id, fallback)
      return NextResponse.json(fallback)
    }

    // Citation validation
    const { sanitized, valid } = validateCitations(draft, evidencePacket)

    if (!valid) {
      const id = generateId()
      const fallback = buildFallbackResponse(id, query, evidencePacket.sources.slice(0, 2))
      storeAnswer(id, fallback)
      return NextResponse.json(fallback)
    }

    // Assemble final response
    const id = generateId()
    const usedIds = new Set([
      ...sanitized.recordShows.flatMap(i => i.sourceIds),
      ...sanitized.openSecretsShows.flatMap(i => i.sourceIds),
    ])
    const usedSources = evidencePacket.sources.filter(s => usedIds.has(s.id))

    const response: AskBearResponse = {
      id,
      query,
      mode: 'politician',
      answer: sanitized.answer,
      recordShows: sanitized.recordShows.map((item, i) => ({
        id: `rs-${i}`,
        ...item,
      })) as EvidenceItem[],
      openSecretsShows:
        sanitized.openSecretsShows.length > 0
          ? (sanitized.openSecretsShows.map((item, i) => ({
              id: `os-${i}`,
              ...item,
            })) as FundingEvidenceItem[])
          : undefined,
      observations: sanitized.observations,
      unresolved: sanitized.unresolved,
      sources: usedSources,
      limitationNotice: sanitized.limitationNotice ?? undefined,
      campaignFinanceDisclaimer: sanitized.campaignFinanceDisclaimer ?? undefined,
      recordTensionFlags:
        sanitized.recordTensionFlags.length > 0 ? sanitized.recordTensionFlags : undefined,
      fundingContextFlags:
        sanitized.fundingContextFlags.length > 0 ? sanitized.fundingContextFlags : undefined,
      createdAt: new Date().toISOString(),
      shareUrl: `/api/ask-bear/${id}`,
    }

    storeAnswer(id, response)
    return NextResponse.json(response)
  } catch (err) {
    console.error('[ask-bear] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

interface TavilyResult {
  title: string
  url: string
  content: string
  score: number
  published_date?: string
}

async function searchWithTavily(query: string, apiKey: string): Promise<TavilyResult[]> {
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        query,
        search_depth: 'basic',
        max_results: 5,
        include_answer: false,
      }),
    })
    if (!res.ok) return []
    const data = await res.json()
    return (data.results ?? []) as TavilyResult[]
  } catch {
    return []
  }
}

function buildHistory(history: ConversationTurn[] | undefined): { role: 'user' | 'assistant'; content: string }[] {
  if (!history?.length) return []
  return history.flatMap(turn => [
    { role: 'user' as const, content: turn.query },
    { role: 'assistant' as const, content: turn.answer },
  ])
}

function buildFallbackResponse(
  id: string,
  query: string,
  sources: AskBearResponse['sources']
): AskBearResponse {
  return {
    id,
    query,
    answer: SAFE_FALLBACK_ANSWER,
    recordShows: [],
    observations: [],
    unresolved: ['Insufficient cited evidence is available to answer this question.'],
    sources,
    limitationNotice:
      'The available cited evidence was insufficient to produce a fully supported answer.',
    createdAt: new Date().toISOString(),
    shareUrl: `/api/ask-bear/${id}`,
  }
}

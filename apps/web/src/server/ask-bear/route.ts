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
    const { query, contextType, contextId } = body

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
      messages: [{ role: 'user', content: query }],
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

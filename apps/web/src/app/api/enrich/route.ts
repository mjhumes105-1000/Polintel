import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import type { PoliticianProfile, RecordAssessment } from '@political-intel/types'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the record assessment engine for PoliIntel, a non-partisan political intelligence platform.

Your role is to analyze a politician's documented public record and produce a structured assessment divided into three sections:

1. WHAT THE RECORD SHOWS — factual summary of documented events. Every item must be traceable to a sourced event. No editorializing.
2. WHAT WE OBSERVE — patterns and notable features in the record. Measured, neutral language. No policy judgments.
3. WHAT IS UNRESOLVED — open questions the record does not answer.

Rules: No partisan framing. No honesty scores. Never introduce facts not in the provided data. Return only valid JSON.`

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key')
  if (apiKey !== process.env.INTERNAL_API_KEY && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let profile: PoliticianProfile
  try {
    profile = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const input = {
    name: profile.name,
    currentTitle: profile.currentTitle,
    state: profile.state,
    party: profile.baselineCard.party,
    timelineEvents: profile.timeline.map((e) => ({
      date: e.date,
      type: e.type,
      title: e.title,
      summary: e.summary,
      detail: e.detail,
      contradiction: e.contradiction,
      tags: e.tags,
    })),
  }

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Generate a Record Assessment for this profile. Return JSON only.

${JSON.stringify(input, null, 2)}

Return:
{
  "whatTheRecordShows": ["..."],
  "whatWeObserve": ["..."],
  "whatIsUnresolved": ["..."]
}`,
        },
      ],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : ''
    const stripped = text.replace(/^```json?\n?/, '').replace(/\n?```$/, '')
    const parsed = JSON.parse(stripped)

    const assessment: RecordAssessment = {
      generatedAt: new Date().toISOString().slice(0, 10),
      ...parsed,
    }

    return NextResponse.json(assessment)
  } catch (err) {
    console.error('Enrichment error:', err)
    return NextResponse.json({ error: 'Enrichment failed' }, { status: 500 })
  }
}

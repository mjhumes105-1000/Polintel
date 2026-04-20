import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import type { PoliticianProfile, RecordAssessment } from '@political-intel/types'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the record assessment engine for PoliIntel, a non-partisan political intelligence platform.

Your role is to analyze a politician's documented public record and produce a structured assessment divided into three sections:

1. WHAT THE RECORD SHOWS — factual summary of documented events in the timeline. Every item must be directly traceable to a sourced event. No editorializing.

2. WHAT WE OBSERVE — patterns, tensions, and notable features visible in the record. This is interpretation, not fact. Write in measured, neutral language. Do not characterize policy outcomes as good or bad.

3. WHAT IS UNRESOLVED — genuine open questions the public record does not answer. Things that remain contested, ambiguous, or unknowable from the available evidence.

Rules:
- Never introduce facts not present in the provided timeline data
- No partisan framing. No red/blue. No approval ratings or honesty scores
- Do not characterize a politician as trustworthy or dishonest
- Flags and contradictions in the record should be noted factually, not moralized
- Write in clear, precise prose. No bullet rhetoric. No advocacy
- Each array should contain 4–8 items
- Return only valid JSON matching the schema, no markdown fences`

interface AssessmentInput {
  name: string
  currentTitle: string
  state: string
  party: string
  timelineEvents: {
    date: string
    type: string
    title: string
    summary: string
    detail?: string
    contradiction?: { description: string }
    tags: string[]
  }[]
}

function buildInput(profile: PoliticianProfile): AssessmentInput {
  return {
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
}

export async function generateRecordAssessment(
  profile: PoliticianProfile
): Promise<RecordAssessment> {
  const input = buildInput(profile)

  console.log(`Generating Record Assessment for ${profile.name}...`)
  console.log(`Timeline events: ${input.timelineEvents.length}`)

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Generate a Record Assessment for the following politician profile. Return JSON only.

Profile:
${JSON.stringify(input, null, 2)}

Return this exact JSON structure:
{
  "whatTheRecordShows": ["string", ...],
  "whatWeObserve": ["string", ...],
  "whatIsUnresolved": ["string", ...]
}`,
      },
    ],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''

  let parsed: { whatTheRecordShows: string[]; whatWeObserve: string[]; whatIsUnresolved: string[] }
  try {
    parsed = JSON.parse(text)
  } catch {
    // Strip any accidental markdown fences
    const stripped = text.replace(/^```json?\n?/, '').replace(/\n?```$/, '')
    parsed = JSON.parse(stripped)
  }

  return {
    generatedAt: new Date().toISOString().slice(0, 10),
    whatTheRecordShows: parsed.whatTheRecordShows,
    whatWeObserve: parsed.whatWeObserve,
    whatIsUnresolved: parsed.whatIsUnresolved,
  }
}

'use client'

import { useState, useRef, useCallback } from 'react'
import type { AskBearResponse } from '@political-intel/types'
import { BearAnswer } from './BearAnswer'

const BEAR_NAME = 'Teddy'

const PROMPT_CHIPS = [
  'Summarize this record',
  'Show funding context',
  'Compare votes and statements',
  'What does the funding show?',
  'What changed over time?',
  'What is unresolved?',
]

interface AskTeddyProps {
  politicianId: string
  politicianName: string
}

export function AskTeddy({ politicianId, politicianName }: AskTeddyProps) {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<AskBearResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const answerRef = useRef<HTMLDivElement>(null)

  const submit = useCallback(async (q: string) => {
    const trimmed = q.trim()
    if (!trimmed || isLoading) return

    setIsLoading(true)
    setError(null)
    setResponse(null)

    try {
      const endpoint =
        (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_ASK_BEAR_ENDPOINT) ||
        '/api/ask-bear'

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: trimmed,
          contextType: 'politician',
          contextId: politicianId,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error ?? `Server returned ${res.status}`)
      }

      setResponse(data as AskBearResponse)
      setTimeout(() => answerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, politicianId])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submit(query)
  }

  function handleChip(chip: string) {
    setQuery(chip)
    submit(chip)
    inputRef.current?.blur()
  }

  async function handleCopy() {
    if (!response) return
    const text = buildCopyText(response)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback for environments without clipboard API
    }
  }

  function handleReport() {
    const subject = encodeURIComponent(`[Ask Teddy] Issue with answer — ${politicianName}`)
    const body = encodeURIComponent(
      `Question: ${response?.query ?? query}\n\nIssue:\n\n(Describe what was wrong with the answer)`
    )
    window.open(`mailto:feedback@polintel.com?subject=${subject}&body=${body}`)
  }

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-xl leading-none select-none">🐻</span>
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70">
            ASK {BEAR_NAME.toUpperCase()}
          </p>
          <p className="text-xs text-ink-3 mt-0.5">
            Ask questions about {politicianName}&apos;s public record — votes, funding, statements, and bill activity.
          </p>
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          disabled={isLoading}
          placeholder={`Ask ${BEAR_NAME} about the public record…`}
          className={[
            'w-full bg-surface border rounded px-4 py-3 pr-24 text-sm text-ink placeholder:text-ink-4',
            'focus:outline-none focus:border-accent transition-colors font-sans',
            isLoading ? 'border-accent/30 cursor-not-allowed' : 'border-border hover:border-border/80',
          ].join(' ')}
        />
        {query && !isLoading && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-16 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors font-mono text-xs"
          >
            ✕
          </button>
        )}
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-accent text-bg font-mono text-[10px] rounded hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ASK
        </button>
      </form>

      {/* Suggested prompts */}
      {!isLoading && !response && (
        <div className="flex flex-wrap gap-2 mt-3">
          {PROMPT_CHIPS.map(chip => (
            <button
              key={chip}
              onClick={() => handleChip(chip)}
              className="px-3 py-1.5 bg-surface border border-border rounded text-xs text-ink-3 hover:text-accent hover:border-accent/40 transition-colors font-mono"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded">
          <span className="text-base animate-pulse select-none">🐻</span>
          <div>
            <p className="text-sm text-ink-2">
              {BEAR_NAME} is reviewing the cited record&hellip;
            </p>
            <p className="text-[11px] text-ink-4 mt-0.5">
              Checking evidence against &ldquo;{query}&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {error && !isLoading && (
        <div className="mt-4 px-4 py-3 bg-surface border border-flag-muted rounded">
          <p className="text-sm text-flag font-mono text-[10px] tracking-widest mb-1">ERROR</p>
          <p className="text-sm text-ink-2">{error}</p>
          {error.includes('not configured') && (
            <p className="text-xs text-ink-4 mt-2">
              Ask Teddy requires a server deployment with <code className="font-mono text-[10px]">ANTHROPIC_API_KEY</code> set.
              Set <code className="font-mono text-[10px]">NEXT_PUBLIC_ASK_BEAR_ENDPOINT</code> to point to an external API, or deploy to Vercel.
            </p>
          )}
        </div>
      )}

      {/* Answer */}
      {response && !isLoading && (
        <div ref={answerRef}>
          <div className="flex items-center justify-between mt-4 mb-1">
            <p className="font-mono text-[10px] text-ink-4">
              Answered: &ldquo;{response.query}&rdquo;
            </p>
            <button
              onClick={() => { setResponse(null); setQuery(''); inputRef.current?.focus() }}
              className="font-mono text-[9px] text-ink-4 hover:text-ink-2 transition-colors"
            >
              NEW QUESTION
            </button>
          </div>
          <BearAnswer
            response={response}
            onCopy={handleCopy}
            onReport={handleReport}
            copied={copied}
          />
        </div>
      )}

      {/* Product philosophy note */}
      {!response && !isLoading && (
        <p className="mt-4 text-[10px] text-ink-4 font-mono leading-relaxed">
          {BEAR_NAME} answers only from cited public records. No scores, no partisan framing. Campaign finance data is provided as context — not as proof of motive or causation.
        </p>
      )}
    </section>
  )
}

function buildCopyText(response: AskBearResponse): string {
  const lines: string[] = [
    `Ask Teddy — ${response.query}`,
    '',
    response.answer,
    '',
  ]

  if (response.recordShows.length > 0) {
    lines.push('WHAT THE RECORD SHOWS')
    for (const item of response.recordShows) {
      lines.push(`· ${item.claimSupported}${item.date ? ` (${item.date})` : ''} [${item.sourceIds.join(', ')}]`)
    }
    lines.push('')
  }

  if (response.openSecretsShows && response.openSecretsShows.length > 0) {
    lines.push('WHAT THE FUNDING RECORD SHOWS')
    if (response.campaignFinanceDisclaimer) lines.push(response.campaignFinanceDisclaimer)
    for (const item of response.openSecretsShows) {
      lines.push(`· ${item.claimSupported} [${item.sourceIds.join(', ')}]`)
    }
    lines.push('')
  }

  if (response.observations.length > 0) {
    lines.push('WHAT WE OBSERVE (INTERPRETATION)')
    for (const obs of response.observations) lines.push(`· ${obs}`)
    lines.push('')
  }

  if (response.unresolved.length > 0) {
    lines.push('WHAT IS UNRESOLVED')
    for (const item of response.unresolved) lines.push(`— ${item}`)
    lines.push('')
  }

  if (response.sources.length > 0) {
    lines.push('SOURCES')
    for (const src of response.sources) {
      lines.push(`[${src.id}] ${src.title} — ${src.publisher} — ${src.url}`)
    }
    lines.push('')
  }

  lines.push('Generated by PoliIntel Ask Teddy — polintel.com')
  return lines.join('\n')
}

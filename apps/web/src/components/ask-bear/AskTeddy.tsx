'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
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
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<AskBearResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const submit = useCallback(async (q: string) => {
    const trimmed = q.trim()
    if (!trimmed || isLoading) return
    setIsLoading(true)
    setError(null)
    setResponse(null)
    try {
      const endpoint = process.env.NEXT_PUBLIC_ASK_BEAR_ENDPOINT ?? '/api/ask-bear'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: trimmed, contextType: 'politician', contextId: politicianId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error ?? `Server returned ${res.status}`)
      setResponse(data as AskBearResponse)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
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
  }

  async function handleCopy() {
    if (!response) return
    try {
      await navigator.clipboard.writeText(buildCopyText(response))
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* ignore */ }
  }

  function handleReport() {
    const subject = encodeURIComponent(`[Ask Teddy] Issue — ${politicianName}`)
    const body = encodeURIComponent(`Question: ${response?.query ?? query}\n\nIssue:\n`)
    window.open(`mailto:feedback@polintel.com?subject=${subject}&body=${body}`)
  }

  function handleOpen() {
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(), 80)
  }

  // Desktop-only floating widget — hidden on mobile
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      {/* Collapsed trigger button */}
      {!open && (
        <button
          onClick={handleOpen}
          className="flex items-center gap-2.5 pl-2 pr-4 py-2 bg-bg border border-border rounded-full shadow-lg hover:border-accent/50 hover:shadow-accent/10 transition-all group"
          aria-label="Ask Teddy"
        >
          <div className="w-8 h-8 rounded-full bg-ink dark:bg-transparent overflow-hidden shrink-0">
            <Image
              src={`${basePath}/polintel-logo.png`}
              alt="Ask Teddy"
              width={32}
              height={32}
              className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-ink-3 group-hover:text-accent transition-colors">
            ASK {BEAR_NAME.toUpperCase()}
          </span>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div className="w-[420px] max-h-[80vh] flex flex-col bg-bg border border-border rounded-xl shadow-2xl overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border bg-surface shrink-0">
            <div className="w-7 h-7 rounded-full bg-ink dark:bg-transparent overflow-hidden shrink-0">
              <Image
                src={`${basePath}/polintel-logo.png`}
                alt="Teddy"
                width={28}
                height={28}
                className="w-full h-full object-contain opacity-90"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] tracking-widest text-accent/70">ASK {BEAR_NAME.toUpperCase()}</p>
              <p className="text-[11px] text-ink-3 truncate">{politicianName}</p>
            </div>
            <button
              onClick={() => { setOpen(false); setResponse(null); setQuery(''); setError(null) }}
              className="text-ink-4 hover:text-ink-2 transition-colors text-sm font-mono shrink-0"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-4 py-4">
              {/* Input */}
              <form onSubmit={handleSubmit} className="relative mb-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  disabled={isLoading}
                  placeholder={`Ask ${BEAR_NAME} about the public record…`}
                  className={[
                    'w-full bg-surface border rounded px-3 py-2.5 pr-16 text-sm text-ink placeholder:text-ink-4',
                    'focus:outline-none focus:border-accent transition-colors font-sans',
                    isLoading ? 'border-accent/30 cursor-not-allowed opacity-60' : 'border-border',
                  ].join(' ')}
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-accent text-bg font-mono text-[9px] tracking-widest rounded hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ASK
                </button>
              </form>

              {/* Chips — only before first answer */}
              {!response && !isLoading && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {PROMPT_CHIPS.map(chip => (
                    <button
                      key={chip}
                      onClick={() => handleChip(chip)}
                      className="px-2.5 py-1 bg-surface border border-border rounded text-[10px] text-ink-3 hover:text-accent hover:border-accent/40 transition-colors font-mono"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              {/* Loading */}
              {isLoading && (
                <div className="flex items-center gap-2.5 py-3 text-sm text-ink-3">
                  <span className="animate-pulse text-base">🐻</span>
                  <span>{BEAR_NAME} is reviewing the cited record…</span>
                </div>
              )}

              {/* Error */}
              {error && !isLoading && (
                <div className="px-3 py-2.5 bg-surface border border-flag-muted rounded text-xs text-ink-2">
                  <p className="font-mono text-[9px] text-flag tracking-widest mb-1">ERROR</p>
                  {error}
                  {error.includes('not configured') && (
                    <p className="text-ink-4 mt-1.5">
                      Set <code className="font-mono text-[9px]">ANTHROPIC_API_KEY</code> to enable Ask Teddy.
                    </p>
                  )}
                </div>
              )}

              {/* Answer */}
              {response && !isLoading && (
                <>
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-mono text-[9px] text-ink-4 truncate max-w-[280px]">
                      &ldquo;{response.query}&rdquo;
                    </p>
                    <button
                      onClick={() => { setResponse(null); setQuery(''); setTimeout(() => inputRef.current?.focus(), 50) }}
                      className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors shrink-0 ml-2"
                    >
                      NEW ↩
                    </button>
                  </div>
                  <BearAnswer
                    response={response}
                    onCopy={handleCopy}
                    onReport={handleReport}
                    copied={copied}
                  />
                </>
              )}

              {/* Footer note */}
              {!response && !isLoading && (
                <p className="mt-3 text-[9px] text-ink-4 font-mono leading-relaxed">
                  Answers only from cited public records. No scores, no partisan framing.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function buildCopyText(response: AskBearResponse): string {
  const lines: string[] = [`Ask Teddy — ${response.query}`, '', response.answer, '']
  if (response.recordShows.length > 0) {
    lines.push('WHAT THE RECORD SHOWS')
    for (const item of response.recordShows) {
      lines.push(`· ${item.claimSupported}${item.date ? ` (${item.date})` : ''} [${item.sourceIds.join(', ')}]`)
    }
    lines.push('')
  }
  if (response.openSecretsShows?.length) {
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
    for (const src of response.sources) lines.push(`[${src.id}] ${src.title} — ${src.publisher} — ${src.url}`)
  }
  lines.push('', 'Generated by PoliIntel Ask Teddy — polintel.com')
  return lines.join('\n')
}

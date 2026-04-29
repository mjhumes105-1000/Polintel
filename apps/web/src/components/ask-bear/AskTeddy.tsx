'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import type { AskBearResponse, ConversationTurn } from '@political-intel/types'
import { BearAnswer } from './BearAnswer'

const BEAR_NAME = 'Teddy'

const GENERAL_CHIPS = [
  'How does a bill become law?',
  'What is a filibuster?',
  'How do tariffs affect prices?',
  'What does the Fed do?',
  'What is the debt ceiling?',
  'How does Congress work?',
]

const POLITICIAN_CHIPS = [
  'Summarize this record',
  'Show funding context',
  'Compare votes and statements',
  'What does the funding show?',
  'What changed over time?',
  'What is unresolved?',
]

interface ThreadItem {
  query: string
  response: AskBearResponse
}

export function AskTeddy() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [thread, setThread] = useState<ThreadItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null) // tracks which answer id was copied
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  // Detect context from URL
  const politicianMatch = pathname.match(/^\/politicians\/([^/]+)\/?$/)
  const politicianSlug = politicianMatch?.[1] ?? null
  const isGeneralMode = !politicianSlug
  const chips = politicianSlug ? POLITICIAN_CHIPS : GENERAL_CHIPS
  const subTitle = politicianSlug
    ? politicianSlug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
    : 'Civic assistant'

  useEffect(() => { setMounted(true) }, [])

  // Scroll to bottom after each new response
  useEffect(() => {
    if (thread.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [thread.length, isLoading])

  // Reset thread when navigating between pages
  useEffect(() => {
    setThread([])
    setQuery('')
    setError(null)
  }, [pathname])

  const submit = useCallback(async (q: string) => {
    const trimmed = q.trim()
    if (!trimmed || isLoading) return
    setIsLoading(true)
    setError(null)
    setQuery('')
    try {
      const endpoint = process.env.NEXT_PUBLIC_ASK_BEAR_ENDPOINT ?? '/api/ask-bear'
      const history: ConversationTurn[] = thread.map(item => ({
        query: item.query,
        answer: item.response.answer,
      }))
      const body = politicianSlug
        ? { query: trimmed, contextType: 'politician', contextId: politicianSlug, history }
        : { query: trimmed, contextType: 'general', history }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error ?? `Server returned ${res.status}`)
      setThread(prev => [...prev, { query: trimmed, response: data as AskBearResponse }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isLoading, politicianSlug, thread])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submit(query)
  }

  function handleChip(chip: string) {
    submit(chip)
  }

  async function handleCopy(response: AskBearResponse) {
    try {
      await navigator.clipboard.writeText(buildCopyText(response))
      setCopied(response.id)
      setTimeout(() => setCopied(null), 2500)
    } catch { /* ignore */ }
  }

  function handleReport(q: string) {
    const subject = encodeURIComponent(`[Ask Teddy] Issue`)
    const body = encodeURIComponent(`Question: ${q}\n\nIssue:\n`)
    window.open(`mailto:feedback@polintel.com?subject=${subject}&body=${body}`)
  }

  function handleOpen() {
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(), 80)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleNewConversation() {
    setThread([])
    setQuery('')
    setError(null)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const hasThread = thread.length > 0

  if (!mounted) return null

  // Portal renders directly into document.body, bypassing all parent CSS stacking contexts
  return createPortal(
    <div className="hidden md:block fixed bottom-6 right-6 z-[9999]">
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
        <div className="w-[440px] max-h-[82vh] flex flex-col bg-bg border border-border rounded-xl shadow-2xl overflow-hidden">
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
              <p className="text-[11px] text-ink-3 truncate">{subTitle}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {hasThread && (
                <button
                  onClick={handleNewConversation}
                  className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors"
                >
                  NEW
                </button>
              )}
              <button
                onClick={handleClose}
                className="text-ink-4 hover:text-ink-2 transition-colors text-sm font-mono"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-4 py-4 flex flex-col gap-4">

              {/* Empty state chips */}
              {!hasThread && !isLoading && (
                <>
                  <div className="flex flex-wrap gap-1.5">
                    {chips.map(chip => (
                      <button
                        key={chip}
                        onClick={() => handleChip(chip)}
                        className="px-2.5 py-1 bg-surface border border-border rounded text-[10px] text-ink-3 hover:text-accent hover:border-accent/40 transition-colors font-mono"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  <p className="text-[9px] text-ink-4 font-mono leading-relaxed">
                    {isGeneralMode
                      ? 'Civic answers in plain language. No partisan framing.'
                      : 'Answers only from cited public records. No scores, no partisan framing.'}
                  </p>
                </>
              )}

              {/* Conversation thread */}
              {thread.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {/* User question bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-accent/10 border border-accent/20 rounded-lg px-3 py-2">
                      <p className="text-sm text-ink leading-snug">{item.query}</p>
                    </div>
                  </div>
                  {/* Bear answer */}
                  <BearAnswer
                    response={item.response}
                    onCopy={() => handleCopy(item.response)}
                    onReport={() => handleReport(item.query)}
                    copied={copied === item.response.id}
                  />
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 py-2 text-sm text-ink-3">
                  <span className="animate-pulse text-base">🐻</span>
                  <span>
                    {isGeneralMode
                      ? `${BEAR_NAME} is on it…`
                      : `${BEAR_NAME} is reviewing the cited record…`}
                  </span>
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

              <div ref={bottomRef} />
            </div>
          </div>

          {/* Input — always pinned to bottom */}
          <div className="shrink-0 border-t border-border bg-surface px-4 py-3">
            <form onSubmit={handleSubmit} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                disabled={isLoading}
                placeholder={
                  hasThread
                    ? 'Ask a follow-up…'
                    : isGeneralMode
                    ? `Ask ${BEAR_NAME} a civic question…`
                    : `Ask ${BEAR_NAME} about the public record…`
                }
                className={[
                  'w-full bg-bg border rounded px-3 py-2.5 pr-16 text-sm text-ink placeholder:text-ink-4',
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
          </div>
        </div>
      )}
    </div>,
    document.body
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
    lines.push('ALSO WORTH KNOWING')
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

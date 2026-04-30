'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import type { PresidentialAction } from '@/lib/fetchPresidentialActions'

const TYPE_COLOR: Record<PresidentialAction['type'], string> = {
  executive_order: 'text-red-400 border-red-800/60 bg-red-950/20',
  memorandum:      'text-amber-400 border-amber-800/60 bg-amber-950/20',
  proclamation:    'text-accent/80 border-accent/30 bg-accent/5',
}

const TYPE_LABEL: Record<PresidentialAction['type'], string> = {
  executive_order: 'EO',
  memorandum:      'MEMO',
  proclamation:    'PROC',
}

const PAGE_SIZE = 10

function formatDate(iso: string | undefined | null) {
  if (!iso) return '—'
  // Append local noon only for bare dates (YYYY-MM-DD) to avoid UTC-midnight timezone shift.
  // Full ISO datetime strings already carry offset info — parse them as-is.
  const d = new Date(iso.includes('T') ? iso : iso + 'T12:00:00')
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// Module-level cache so summaries persist across re-renders without re-fetching
const summaryCache = new Map<string, string>()

function ActionRow({ action }: { action: PresidentialAction }) {
  const [expanded, setExpanded]     = useState(false)
  const [summary, setSummary]       = useState<string | null>(summaryCache.get(action.documentNumber) ?? null)
  const [loadingSummary, setLoading] = useState(false)
  const fetchedRef                   = useRef(false)

  useEffect(() => {
    if (!expanded || fetchedRef.current || summary) return
    fetchedRef.current = true
    setLoading(true)

    const endpoint = process.env.NEXT_PUBLIC_SUMMARIZE_ACTION_ENDPOINT ?? '/api/summarize-action'
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        documentNumber: action.documentNumber,
        title: action.title,
        type: action.type,
        abstract: action.abstract,
      }),
    })
      .then((r) => r.json())
      .then((data: { summary?: string }) => {
        if (data.summary) {
          summaryCache.set(action.documentNumber, data.summary)
          setSummary(data.summary)
        }
      })
      .catch(() => { /* fail silently — abstract fallback still shows */ })
      .finally(() => setLoading(false))
  }, [expanded, action, summary])

  return (
    <li className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-4 py-3 hover:bg-surface-2 transition-colors group"
      >
        <div className="flex items-start gap-3">
          {/* Type badge + EO number + date */}
          <div className="flex flex-col items-center gap-0.5 shrink-0 pt-0.5 w-16">
            <span className={`font-mono text-[8px] px-1 py-0.5 rounded border w-full text-center ${TYPE_COLOR[action.type]}`}>
              {TYPE_LABEL[action.type]}
            </span>
            {action.eoNumber && (
              <span className="font-mono text-[8px] text-ink-4 text-center">#{action.eoNumber}</span>
            )}
            <span className="font-mono text-[8px] text-ink-3 text-center leading-tight mt-0.5">
              {formatDate(action.signingDate)}
            </span>
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-ink leading-snug group-hover:text-accent transition-colors">
              {action.title}
            </p>
          </div>

          <span className="text-ink-4 text-xs shrink-0 mt-0.5">{expanded ? '▲' : '▼'}</span>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-1 pl-[calc(1rem+4rem+0.75rem)]">
          {/* AI summary */}
          {loadingSummary ? (
            <p className="text-xs text-ink-4 font-mono animate-pulse mb-3">Generating summary…</p>
          ) : summary ? (
            <div className="mb-3">
              <p className="font-mono text-[8px] tracking-widest text-accent/50 mb-1.5">AI SUMMARY</p>
              {summary.split(/\n+/).filter(Boolean).map((para, i) => (
                <p key={i} className="text-xs text-ink-2 leading-relaxed mb-2 last:mb-0">{para.replace(/^#+\s*/, '')}</p>
              ))}
            </div>
          ) : action.abstract ? (
            <p className="text-xs text-ink-3 leading-relaxed mb-3">{action.abstract}</p>
          ) : null}

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
            >
              VIEW FULL TEXT ↗
            </a>
            {action.citation && (
              <span className="font-mono text-[9px] text-ink-4">{action.citation}</span>
            )}
          </div>
        </div>
      )}
    </li>
  )
}

type Tab = 'executive_orders' | 'memoranda' | 'proclamations'

interface PresidentialActionsPanelProps {
  executiveOrders: PresidentialAction[]
  memoranda: PresidentialAction[]
  proclamations: PresidentialAction[]
}

export function PresidentialActionsPanel({
  executiveOrders,
  memoranda,
  proclamations,
}: PresidentialActionsPanelProps) {
  const [tab, setTab]       = useState<Tab>('executive_orders')
  const [search, setSearch] = useState('')
  const [page, setPage]     = useState(1)

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'executive_orders', label: 'EXECUTIVE ORDERS', count: executiveOrders.length },
    { id: 'memoranda',        label: 'MEMORANDA',        count: memoranda.length },
    { id: 'proclamations',    label: 'PROCLAMATIONS',    count: proclamations.length },
  ]

  const all =
    tab === 'executive_orders' ? executiveOrders
    : tab === 'memoranda'      ? memoranda
    : proclamations

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return all
    return all.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.abstract?.toLowerCase().includes(q) ||
        (a.eoNumber && String(a.eoNumber).includes(q))
    )
  }, [all, search])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible    = filtered.slice(0, page * PAGE_SIZE)
  const hasMore    = page * PAGE_SIZE < filtered.length

  function switchTab(t: Tab) {
    setTab(t)
    setSearch('')
    setPage(1)
  }

  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-[10px] tracking-widest text-accent/70">PRESIDENTIAL ACTIONS</p>
        <span className="font-mono text-[9px] text-ink-4">Updated daily · Federal Register</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border border-border rounded-t-lg overflow-hidden">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTab(t.id)}
            className={[
              'flex-1 px-3 py-2.5 font-mono text-[9px] tracking-widest transition-colors border-r border-border last:border-r-0',
              tab === t.id
                ? 'bg-accent/10 text-accent'
                : 'text-ink-4 hover:text-ink-3 hover:bg-surface-2',
            ].join(' ')}
          >
            {t.label}
            <span className="ml-1.5 opacity-60">({t.count})</span>
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="border-x border-border bg-surface px-3 py-2">
        <div className="relative">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-4 text-xs pointer-events-none">⌕</span>
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            placeholder={`Search ${tabs.find(t => t.id === tab)?.label.toLowerCase()}…`}
            className="w-full bg-bg border border-border rounded pl-7 pr-3 py-1.5 text-xs text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent transition-colors font-mono"
          />
          {search && (
            <button
              onClick={() => { setSearch(''); setPage(1) }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 text-xs"
            >✕</button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="border-x border-border bg-surface-2 px-4 py-1.5 flex items-center justify-between">
        <span className="font-mono text-[9px] text-ink-4">
          {search
            ? `${filtered.length} of ${all.length} results`
            : `${all.length} total · showing ${Math.min(visible.length, filtered.length)}`}
        </span>
        {totalPages > 1 && (
          <span className="font-mono text-[9px] text-ink-4">
            page {page} of {totalPages}
          </span>
        )}
      </div>

      {/* List */}
      <div className="border border-t-0 border-border rounded-b-lg overflow-hidden bg-surface">
        {filtered.length === 0 ? (
          <p className="px-4 py-8 text-center text-xs text-ink-4 font-mono">
            {search ? 'NO MATCHES' : 'NO RECORDS FOUND'}
          </p>
        ) : (
          <>
            <ul>
              {visible.map((action) => (
                <ActionRow key={action.documentNumber} action={action} />
              ))}
            </ul>
            {hasMore && (
              <button
                onClick={() => setPage((p) => p + 1)}
                className="w-full py-3 font-mono text-[9px] tracking-widest text-ink-3 hover:text-accent hover:bg-surface-2 transition-colors border-t border-border"
              >
                LOAD MORE ({filtered.length - visible.length} remaining)
              </button>
            )}
          </>
        )}
      </div>

      <p className="mt-2 font-mono text-[9px] text-ink-4">
        Source: Federal Register (federalregister.gov) · Actions since January 20, 2025
      </p>
    </section>
  )
}

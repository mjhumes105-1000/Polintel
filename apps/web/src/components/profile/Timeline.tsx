'use client'

import { useState } from 'react'
import type { PoliticianProfile, TimelineEvent } from '@political-intel/types'
import { Timestamp } from '@/components/ui/Timestamp'
import { SourceBadge } from '@/components/ui/SourceBadge'

interface TimelineProps {
  politician: PoliticianProfile
  liveEventCount?: number
}

interface SectionProps {
  title: string
  count: number
  defaultOpen?: boolean
  children: React.ReactNode
}

function Section({ title, count, defaultOpen = false, children }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mb-3 rounded border border-border overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-surface hover:bg-surface-2 transition-colors text-left"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-ink">{title}</span>
          <span className="font-mono text-[10px] text-ink-3 bg-surface-2 border border-border rounded px-1.5 py-0.5">
            {count}
          </span>
        </div>
        <span
          className="text-ink-3 text-base transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'none' }}
        >
          ›
        </span>
      </button>

      {open && (
        <div className="border-t border-border bg-bg px-4 py-3 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  )
}

interface EventCardProps {
  event: TimelineEvent
  sourcesById: Record<string, PoliticianProfile['sources'][0]>
}

function VotePill({ vote }: { vote: 'yes' | 'no' | 'abstain' }) {
  const styles = {
    yes: 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950/30',
    no: 'text-red-700 border-red-300 bg-red-100 dark:text-red-400 dark:border-red-900 dark:bg-red-950/30',
    abstain: 'text-ink-3 border-border bg-surface',
  }
  return (
    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${styles[vote]}`}>
      {vote.toUpperCase()}
    </span>
  )
}

function PassedPill({ passed }: { passed: boolean }) {
  return (
    <span
      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
        passed
          ? 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950/30'
          : 'text-red-700 border-red-300 bg-red-100 dark:text-red-400 dark:border-red-900 dark:bg-red-950/30'
      }`}
    >
      {passed ? 'PASSED' : 'FAILED'}
    </span>
  )
}

function EventCard({ event, sourcesById }: EventCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isFlag = event.type === 'contradiction'

  return (
    <div
      className={[
        'rounded border p-3',
        isFlag ? 'border-signal-flag/40 bg-signal-flag/5' : 'border-border bg-surface',
      ].join(' ')}
    >
      <div className="flex items-center gap-2 flex-wrap mb-1.5">
        <Timestamp iso={event.date} mode="short" />
        {event.vote && <VotePill vote={event.vote} />}
        {event.billPassed !== undefined && <PassedPill passed={event.billPassed} />}
      </div>

      <h3 className="text-sm font-medium text-ink leading-snug mb-1">{event.title}</h3>
      <p className="text-xs text-ink-2 leading-relaxed">{event.summary}</p>

      {event.contradiction && (
        <div className="mt-2 pt-2 border-t border-signal-flag/30">
          <p className="text-xs text-signal-flag leading-relaxed">
            <span className="font-mono font-semibold">FLAG: </span>
            {event.contradiction.description}
          </p>
        </div>
      )}

      {event.detail && (
        <>
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="mt-2 text-xs text-accent hover:text-accent-bright transition-colors font-mono"
            >
              + MORE DETAIL
            </button>
          ) : (
            <div className="mt-2 pt-2 border-t border-border">
              <p className="text-xs text-ink-2 leading-relaxed">{event.detail}</p>
              <button
                onClick={() => setExpanded(false)}
                className="mt-1.5 text-xs text-ink-3 hover:text-ink-2 transition-colors font-mono"
              >
                − COLLAPSE
              </button>
            </div>
          )}
        </>
      )}

      {event.sourceIds.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-border/50">
          {event.sourceIds.map((id) =>
            sourcesById[id] ? <SourceBadge key={id} source={sourcesById[id]} /> : null
          )}
        </div>
      )}
    </div>
  )
}

export function Timeline({ politician, liveEventCount = 0 }: TimelineProps) {
  const sourcesById = Object.fromEntries(politician.sources.map((s) => [s.id, s]))

  const sorted = [...politician.timeline].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const billsAndVotes = sorted.filter(
    (e) => (e.type === 'vote' || e.type === 'bill') && e.billCategory !== 'sponsored'
  )
  const introduced = sorted.filter((e) => e.type === 'bill' && e.billCategory === 'sponsored')
  const news = sorted.filter(
    (e) => e.type === 'statement' || e.type === 'milestone' || e.type === 'contradiction' || e.type === 'funding'
  )

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="label-caps text-accent/70">TIMELINE</h2>
        {liveEventCount > 0 && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-teal-700 border border-teal-300 dark:text-teal-400 dark:border-teal-900 rounded px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
            LIVE · {liveEventCount} EVENTS · 24H REFRESH
          </span>
        )}
      </div>

      <Section title="Bills & Votes" count={billsAndVotes.length} defaultOpen>
        {billsAndVotes.length === 0 ? (
          <p className="text-xs text-ink-3 italic">No bill or vote activity on record.</p>
        ) : (
          billsAndVotes.map((e) => (
            <EventCard key={e.id} event={e} sourcesById={sourcesById} />
          ))
        )}
      </Section>

      <Section title="Major News" count={news.length}>
        {news.length === 0 ? (
          <p className="text-xs text-ink-3 italic">No major news on record.</p>
        ) : (
          news.map((e) => (
            <EventCard key={e.id} event={e} sourcesById={sourcesById} />
          ))
        )}
      </Section>

      <Section title="Introduced Legislation" count={introduced.length}>
        {introduced.length === 0 ? (
          <p className="text-xs text-ink-3 italic">No sponsored legislation on record.</p>
        ) : (
          introduced.map((e) => (
            <EventCard key={e.id} event={e} sourcesById={sourcesById} />
          ))
        )}
      </Section>
    </section>
  )
}

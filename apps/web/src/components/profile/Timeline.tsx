'use client'

import { useState } from 'react'
import type { PoliticianProfile, EventType, TimelineEvent } from '@political-intel/types'
import { ContentTypeBadge } from '@/components/ui/ContentTypeBadge'
import { Timestamp } from '@/components/ui/Timestamp'
import { SourceBadge } from '@/components/ui/SourceBadge'

type Filter = 'all' | EventType

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'milestone', label: 'Milestones' },
  { key: 'bill', label: 'Legislation' },
  { key: 'vote', label: 'Votes' },
  { key: 'statement', label: 'Statements' },
  { key: 'contradiction', label: '⚑ Flags' },
]

const dotClass: Record<EventType, string> = {
  vote: 'bg-signal-vote',
  statement: 'bg-signal-statement',
  bill: 'bg-signal-bill',
  milestone: 'bg-signal-milestone',
  funding: 'bg-signal-funding',
  contradiction: 'bg-signal-flag',
}

interface EventCardProps {
  event: TimelineEvent
  sourcesById: Record<string, PoliticianProfile['sources'][0]>
}

function EventCard({ event, sourcesById }: EventCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isFlag = event.type === 'contradiction'

  return (
    <div className="relative pl-8 pb-6">
      <div
        className={[
          'absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-bg',
          dotClass[event.type],
        ].join(' ')}
        style={{ transform: 'translateX(-3px)' }}
      />

      <div
        className={[
          'rounded border p-4',
          isFlag
            ? 'border-signal-flag/40 bg-signal-flag/5'
            : 'border-border bg-surface hover:border-ink-4/40 transition-colors',
        ].join(' ')}
      >
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <ContentTypeBadge type={event.type} />
          <Timestamp iso={event.date} mode="short" />
        </div>

        <h3 className="text-sm font-medium text-ink mb-1.5 leading-snug">{event.title}</h3>
        <p className="text-sm text-ink-2 leading-relaxed">{event.summary}</p>

        {event.contradiction && (
          <div className="mt-3 pt-3 border-t border-signal-flag/30">
            <p className="text-xs text-signal-flag leading-relaxed">
              <span className="font-mono font-semibold">CONTRADICTION: </span>
              {event.contradiction.description}
            </p>
          </div>
        )}

        {event.detail && (
          <>
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="mt-2 text-xs text-accent hover:text-accent-bright transition-colors font-mono"
              >
                + MORE DETAIL
              </button>
            )}
            {expanded && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-ink-2 leading-relaxed">{event.detail}</p>
                <button
                  onClick={() => setExpanded(false)}
                  className="mt-2 text-xs text-ink-3 hover:text-ink-2 transition-colors font-mono"
                >
                  − COLLAPSE
                </button>
              </div>
            )}
          </>
        )}

        {event.sourceIds.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-border/50">
            {event.sourceIds.map((id) =>
              sourcesById[id] ? (
                <SourceBadge key={id} source={sourcesById[id]} />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  )
}

interface TimelineProps {
  politician: PoliticianProfile
  liveEventCount?: number
}

export function Timeline({ politician, liveEventCount = 0 }: TimelineProps) {
  const [filter, setFilter] = useState<Filter>('all')

  const sourcesById = Object.fromEntries(
    politician.sources.map((s) => [s.id, s])
  )

  const events = [...politician.timeline]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((e) => filter === 'all' || e.type === filter)

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="label-caps text-accent/70">TIMELINE</h2>
        {liveEventCount > 0 && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-teal-400 border border-teal-900 rounded px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            LIVE · {liveEventCount} EVENTS · 24H REFRESH
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-6">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={[
              'px-3 py-1 rounded text-xs font-mono border transition-colors',
              filter === key
                ? 'bg-accent/10 border-accent text-accent'
                : 'bg-surface border-border text-ink-3 hover:border-ink-4 hover:text-ink-2',
            ].join(' ')}
          >
            {label}
          </button>
        ))}
      </div>

      {events.length === 0 && (
        <p className="text-sm text-ink-3 pl-8 italic">No events match this filter.</p>
      )}

      <div className="relative border-l border-border/60 ml-1.5">
        {events.map((event) => (
          <EventCard key={event.id} event={event} sourcesById={sourcesById} />
        ))}
      </div>
    </section>
  )
}

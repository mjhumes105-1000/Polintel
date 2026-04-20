'use client'

import { useState } from 'react'
import type { PlatformPlank, Source } from '@political-intel/types'
import { SourceBadge } from '@/components/ui/SourceBadge'

const topicColor: Record<string, string> = {
  'Climate & Environment': 'text-teal-400 border-teal-900 bg-teal-950',
  'Housing & Homelessness': 'text-violet-400 border-violet-900 bg-violet-950',
  'Gun Safety': 'text-flag border-flag-muted bg-flag-bg',
  'Reproductive Rights': 'text-pink-400 border-pink-900 bg-pink-950',
  'Technology & AI': 'text-blue-400 border-blue-900 bg-blue-950',
  Healthcare: 'text-emerald-400 border-emerald-900 bg-emerald-950',
}

const defaultTopicColor = 'text-ink-3 border-border bg-surface-2'

function PlankCard({ plank, sourcesById }: { plank: PlatformPlank; sourcesById: Record<string, Source> }) {
  const [open, setOpen] = useState(false)
  const color = topicColor[plank.topic] ?? defaultTopicColor

  return (
    <div className="bg-surface border border-border rounded overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-4 py-3.5 flex items-start gap-3 hover:bg-surface-2 transition-colors"
      >
        <span
          className={`shrink-0 mt-0.5 font-mono text-[9px] px-1.5 py-0.5 rounded border whitespace-nowrap ${color}`}
        >
          {plank.topic.toUpperCase()}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-ink leading-snug">{plank.position}</p>
        </div>
        <span className="font-mono text-[10px] text-ink-4 shrink-0 mt-0.5">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-border bg-surface-2">
          {plank.detail && (
            <p className="text-sm text-ink-2 leading-relaxed mt-3">{plank.detail}</p>
          )}
          {plank.sourceIds.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {plank.sourceIds.map((id) =>
                sourcesById[id] ? <SourceBadge key={id} source={sourcesById[id]} /> : null
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function PlatformSection({
  planks,
  sourcesById,
}: {
  planks: PlatformPlank[]
  sourcesById: Record<string, Source>
}) {
  return (
    <div>
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
        PLATFORM POSITIONS
      </h2>
      <div className="space-y-2">
        {planks.map((plank) => (
          <PlankCard key={plank.topic} plank={plank} sourcesById={sourcesById} />
        ))}
      </div>
    </div>
  )
}

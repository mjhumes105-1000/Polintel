type Freshness = 'live' | 'recent' | 'stale' | 'historical'

const freshnessConfig: Record<Freshness, { label: string; dotClass: string; textClass: string }> = {
  live: {
    label: 'LIVE',
    dotClass: 'bg-signal-live',
    textClass: 'text-signal-live',
  },
  recent: {
    label: 'RECENT',
    dotClass: 'bg-signal-vote',
    textClass: 'text-signal-vote',
  },
  stale: {
    label: 'STALE',
    dotClass: 'bg-signal-statement',
    textClass: 'text-signal-statement',
  },
  historical: {
    label: 'HISTORICAL',
    dotClass: 'bg-ink-4',
    textClass: 'text-ink-4',
  },
}

interface DataSourceFooterProps {
  source: string
  retrievedAt?: string
  freshness?: Freshness
  note?: string
}

export function DataSourceFooter({
  source,
  retrievedAt,
  freshness = 'historical',
  note,
}: DataSourceFooterProps) {
  const cfg = freshnessConfig[freshness]

  return (
    <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-border/50">
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dotClass}`} />
        <span className={`font-mono text-[9px] ${cfg.textClass}`}>{cfg.label}</span>
      </div>
      <span className="font-mono text-[10px] text-ink-4">{source}</span>
      {retrievedAt && (
        <span className="font-mono text-[10px] text-ink-4">
          · Retrieved {new Date(retrievedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })}
        </span>
      )}
      {note && (
        <span className="font-mono text-[10px] text-ink-4 italic">{note}</span>
      )}
    </div>
  )
}

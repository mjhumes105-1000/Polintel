'use client'

import { useState } from 'react'
import type { TariffIndicator, TariffStatus } from '@political-intel/types'
import { tariffSeverity } from '@/lib/economy'
import { SeverityChip } from './SeverityChip'

const STATUS_STYLES: Record<TariffStatus, string> = {
  active:    'text-ink-2 border-border',
  proposed:  'text-amber-400 border-amber-900 bg-amber-950/30',
  suspended: 'text-ink-4 border-border opacity-60',
}

function TariffRow({ entry }: { entry: TariffIndicator }) {
  const [open, setOpen] = useState(false)
  const hasNote = Boolean(entry.note)
  const severity = tariffSeverity(entry.rate)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => hasNote && setOpen((o) => !o)}
        className={[
          'w-full text-left px-4 py-3 transition-colors',
          hasNote ? 'hover:bg-surface-2 cursor-pointer' : 'cursor-default',
        ].join(' ')}
        disabled={!hasNote}
      >
        <div className="grid grid-cols-[1fr_4rem_auto_auto] gap-3 items-center">
          <div className="min-w-0">
            <p className="text-sm text-ink leading-tight truncate">{entry.sector}</p>
            {entry.legalBasis && (
              <p className="font-mono text-[9px] text-ink-4 mt-0.5">{entry.legalBasis}</p>
            )}
          </div>

          {/* Rate — colored by severity */}
          <p className={[
            'font-mono text-base tabular-nums text-right',
            severity === 'critical' ? 'text-flag' :
            severity === 'high' ? 'text-amber-400' :
            severity === 'moderate' ? 'text-ink-2' :
            'text-ink-3',
          ].join(' ')}>
            {entry.rate}%
          </p>

          <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${STATUS_STYLES[entry.status]}`}>
            {entry.status.toUpperCase()}
          </span>

          {hasNote && (
            <span className="font-mono text-[10px] text-ink-4 w-4 text-right">
              {open ? '▲' : '▼'}
            </span>
          )}
        </div>
      </button>

      {open && entry.note && (
        <div className="px-4 pb-3">
          <p className="text-xs text-ink-3 leading-relaxed bg-surface-2 rounded px-3 py-2.5">
            {entry.note}
          </p>
        </div>
      )}
    </div>
  )
}

interface Props {
  tariffs: TariffIndicator[]
}

export function TariffSection({ tariffs }: Props) {
  if (tariffs.length === 0) {
    return (
      <section className="mb-10">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
          TARIFF SNAPSHOT
        </h2>
        <div className="bg-surface border border-border rounded px-5 py-4">
          <p className="text-sm text-ink-3">
            No sector-specific tariffs tracked for this partner. MFN rates under WTO rules apply.
          </p>
        </div>
      </section>
    )
  }

  const avgRate = tariffs.reduce((s, t) => s + t.rate, 0) / tariffs.length
  const maxRate = Math.max(...tariffs.map((t) => t.rate))
  const activeTariffs = tariffs.filter((t) => t.status === 'active').length

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70">TARIFF SNAPSHOT</h2>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] text-ink-4">
            {activeTariffs} ACTIVE MEASURES
          </span>
          <span className="font-mono text-[9px] text-ink-4">
            AVG {avgRate.toFixed(1)}% · MAX {maxRate}%
          </span>
        </div>
      </div>

      <div className="bg-surface border border-border rounded overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_4rem_auto_auto] gap-3 px-4 py-2 bg-surface-2 border-b border-border">
          <span className="font-mono text-[9px] text-ink-4">SECTOR</span>
          <span className="font-mono text-[9px] text-ink-4 text-right">RATE</span>
          <span className="font-mono text-[9px] text-ink-4">STATUS</span>
          <span className="w-4" />
        </div>
        {tariffs.map((entry, i) => (
          <TariffRow key={i} entry={entry} />
        ))}
      </div>
      <p className="font-mono text-[10px] text-ink-4 mt-2">
        Ad-valorem rates shown. Additional antidumping and countervailing duties may apply.
      </p>
    </section>
  )
}

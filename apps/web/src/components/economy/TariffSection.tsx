'use client'

import { useState } from 'react'
import type { TariffIndicator, TariffStatus } from '@political-intel/types'
import { tariffSeverity, tariffFlow } from '@/lib/economy'

const STATUS_STYLES: Record<TariffStatus, string> = {
  active:    'text-ink-2 border-border',
  proposed:  'text-amber-400 border-amber-900 bg-amber-950/30',
  suspended: 'text-ink-4 border-border opacity-60',
}

function FlowBadge({ entry, partnerSlug }: { entry: TariffIndicator; partnerSlug: string }) {
  const flow = tariffFlow(entry.imposedBy, partnerSlug)
  const isUS = entry.imposedBy === 'us'
  // U.S.-imposed = neutral; partner-imposed stands out (it's the rarer, easy-to-miss case).
  const style = isUS
    ? 'text-ink-3 border-border'
    : 'text-sky-300 border-sky-900 bg-sky-950/30'
  return (
    <span
      title={
        isUS
          ? `U.S. duty on imports from ${flow.to}`
          : `${flow.from}'s duty on goods imported from the U.S.`
      }
      className={`font-mono text-[10px] tabular-nums px-1.5 py-0.5 rounded border ${style}`}
    >
      {flow.from}<span className="opacity-50">→</span>{flow.to}
    </span>
  )
}

function TariffRow({ entry, partnerSlug }: { entry: TariffIndicator; partnerSlug: string }) {
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
        <div className="grid grid-cols-[1fr_4rem_auto_auto_auto] gap-3 items-center">
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

          {/* Flow — who levies the tariff on whom */}
          <FlowBadge entry={entry} partnerSlug={partnerSlug} />

          <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${STATUS_STYLES[entry.status]}`}>
            {entry.status.toUpperCase()}
          </span>

          {hasNote ? (
            <span className="font-mono text-[10px] text-ink-4 w-4 text-right">
              {open ? '▲' : '▼'}
            </span>
          ) : (
            <span className="w-4" />
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
  partnerSlug: string
  partnerName: string
}

export function TariffSection({ tariffs, partnerSlug, partnerName }: Props) {
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

  const usTariffs = tariffs.filter((t) => t.imposedBy === 'us')
  const partnerTariffs = tariffs.filter((t) => t.imposedBy === 'partner')
  const activeTariffs = tariffs.filter((t) => t.status === 'active').length

  // Rate stats are only comparable within one direction; scope them to U.S.-imposed
  // measures (the dominant set), falling back to all lines if a partner has none.
  const rateBasis = usTariffs.length ? usTariffs : tariffs
  const avgRate = rateBasis.reduce((s, t) => s + t.rate, 0) / rateBasis.length
  const maxRate = Math.max(...rateBasis.map((t) => t.rate))
  const rateLabel = usTariffs.length ? 'U.S.' : ''

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-2 gap-4 flex-wrap">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70">TARIFF SNAPSHOT</h2>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] text-ink-4">
            {activeTariffs} ACTIVE MEASURES
          </span>
          {partnerTariffs.length > 0 && (
            <span className="font-mono text-[9px] text-ink-4">
              {usTariffs.length} U.S.-IMPOSED · {partnerTariffs.length} PARTNER
            </span>
          )}
          <span className="font-mono text-[9px] text-ink-4">
            {rateLabel && `${rateLabel} `}AVG {avgRate.toFixed(1)}% · MAX {maxRate}%
          </span>
        </div>
      </div>

      {/* Direction legend — spells out what the FLOW badge means for this partner */}
      <p className="font-mono text-[9px] text-ink-4 mb-3 leading-relaxed">
        FLOW: <span className="text-ink-3">US→XX</span> = U.S. duty on imports from {partnerName} ·{' '}
        <span className="text-sky-300">XX→US</span> = {partnerName}&rsquo;s duty on U.S. exports
      </p>

      <div className="bg-surface border border-border rounded overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_4rem_auto_auto_auto] gap-3 px-4 py-2 bg-surface-2 border-b border-border">
          <span className="font-mono text-[9px] text-ink-4">SECTOR</span>
          <span className="font-mono text-[9px] text-ink-4 text-right">RATE</span>
          <span className="font-mono text-[9px] text-ink-4">FLOW</span>
          <span className="font-mono text-[9px] text-ink-4">STATUS</span>
          <span className="w-4" />
        </div>
        {tariffs.map((entry, i) => (
          <TariffRow key={i} entry={entry} partnerSlug={partnerSlug} />
        ))}
      </div>
      <p className="font-mono text-[10px] text-ink-4 mt-2">
        Ad-valorem rates shown. Additional antidumping and countervailing duties may apply.
      </p>
    </section>
  )
}

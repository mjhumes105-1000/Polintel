'use client'

import { useState } from 'react'
import type { FundingCycle, DonorCategory, Donor, Source } from '@political-intel/types'
import { SourceBadge } from '@/components/ui/SourceBadge'

function formatMoney(amount: number) {
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`
  return `$${amount}`
}

const donorTypeLabel: Record<Donor['type'], string> = {
  individual: 'INDIVIDUAL',
  organization: 'ORG',
  pac: 'PAC',
}

const donorTypeColor: Record<Donor['type'], string> = {
  individual: 'text-accent/80 border-accent/30 bg-accent/5',
  organization: 'text-ink-3 border-border bg-surface-2',
  pac: 'text-flag/80 border-flag-muted bg-flag-bg',
}

function CategoryRow({ cat, maxPercentage }: { cat: DonorCategory; maxPercentage: number }) {
  const [open, setOpen] = useState(false)
  const hasDonors = cat.topDonors && cat.topDonors.length > 0
  const barWidth = `${(cat.percentage / maxPercentage) * 100}%`

  return (
    <div>
      <button
        onClick={() => hasDonors && setOpen((o) => !o)}
        className={[
          'w-full text-left transition-colors rounded px-3 py-2.5 -mx-3',
          hasDonors ? 'hover:bg-surface-2 cursor-pointer' : 'cursor-default',
        ].join(' ')}
        disabled={!hasDonors}
      >
        <div className="flex items-center justify-between text-xs mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-ink-2 font-medium">{cat.category}</span>
            {hasDonors && (
              <span className="font-mono text-[10px] text-ink-4">{open ? '▲' : '▼'}</span>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-ink-3">{formatMoney(cat.amount)}</span>
            <span className="font-mono text-ink-4 w-8 text-right">{cat.percentage}%</span>
          </div>
        </div>
        <div className="h-1 bg-surface-3 rounded overflow-hidden">
          <div
            className={['h-full rounded transition-all', hasDonors ? 'bg-accent' : 'bg-ink-4'].join(' ')}
            style={{ width: barWidth }}
          />
        </div>
      </button>

      {open && cat.topDonors && (
        <div className="mt-1 mb-2 border border-border rounded overflow-hidden">
          <div className="bg-surface-2 px-3 py-1.5 border-b border-border">
            <p className="font-mono text-[10px] tracking-widest text-accent/60">
              TOP DONORS — {cat.category.toUpperCase()}
            </p>
          </div>
          <div className="divide-y divide-border">
            {cat.topDonors.map((donor, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 px-3 py-2.5 bg-surface hover:bg-surface-2 transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={[
                      'shrink-0 font-mono text-[9px] px-1.5 py-0.5 rounded border',
                      donorTypeColor[donor.type],
                    ].join(' ')}
                  >
                    {donorTypeLabel[donor.type]}
                  </span>
                  <span className="text-xs text-ink-2 truncate">{donor.name}</span>
                </div>
                <span className="font-mono text-xs text-ink shrink-0">
                  {formatMoney(donor.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function CandidacyFunding({
  cycles,
  sources,
}: {
  cycles: FundingCycle[]
  sources: Source[]
}) {
  const sourcesById = Object.fromEntries(sources.map((s) => [s.id, s]))

  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
        CAMPAIGN FUNDING
      </h2>
      <div className="space-y-6">
        {cycles.map((cycle) => {
          const maxPercentage = Math.max(...cycle.topDonorCategories.map((c) => c.percentage))
          return (
            <div key={cycle.cycle} className="bg-surface border border-border rounded p-5">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-sm font-medium text-ink">{cycle.label}</p>
                  <p className="font-mono text-xs text-ink-3 mt-0.5">
                    Total raised:{' '}
                    <span className="text-ink-2 font-semibold">{formatMoney(cycle.totalRaised)}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cycle.sourceIds.map((id) =>
                    sourcesById[id] ? <SourceBadge key={id} source={sourcesById[id]} /> : null
                  )}
                </div>
              </div>
              <div className="space-y-1">
                {cycle.topDonorCategories.map((cat) => (
                  <CategoryRow key={cat.category} cat={cat} maxPercentage={maxPercentage} />
                ))}
              </div>
              {cycle.notes && (
                <p className="text-[11px] text-ink-3 mt-5 leading-relaxed border-t border-border pt-3">
                  {cycle.notes}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

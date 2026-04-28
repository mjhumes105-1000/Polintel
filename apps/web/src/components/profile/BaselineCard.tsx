'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PoliticianProfile, CommitteeRole } from '@political-intel/types'

interface BaselineCardProps {
  politician: PoliticianProfile
}

function formatYear(iso: string) {
  return iso.slice(0, 4)
}

export function BaselineCard({ politician }: BaselineCardProps) {
  const { baselineCard } = politician

  return (
    <section className="mb-10">
      <h2 className="label-caps text-accent/70 mb-4">
        OVERVIEW
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded overflow-hidden border border-border">
        <StatCell
          label="Current Office"
          value={baselineCard.currentOffice.title}
          sub={baselineCard.currentOffice.jurisdiction}
        />
        <StatCell
          label="Party"
          value={baselineCard.party}
        />
        <StatCell
          label="Years Public Service"
          value={`${baselineCard.yearsInPublicService}+`}
        />
      </div>

      {baselineCard.previousOffices.length > 0 && (
        <div className="mt-4 bg-surface rounded border border-border px-4 py-3">
          <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-2">PRIOR OFFICES</p>
          <ul className="space-y-1">
            {baselineCard.previousOffices.map((office) => (
              <li key={`${office.title}-${office.startDate}`} className="flex items-baseline gap-3 text-sm">
                <span className="text-ink-2">{office.title}</span>
                <span className="text-ink-4 text-xs">·</span>
                <span className="text-ink-3 text-xs">{office.jurisdiction}</span>
                <span className="text-ink-4 text-xs ml-auto font-mono">
                  {formatYear(office.startDate)}–{office.endDate ? formatYear(office.endDate) : 'present'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {politician.committees && politician.committees.length > 0 && (
        <CommitteeList committees={politician.committees} />
      )}
    </section>
  )
}

function CommitteeList({ committees }: { committees: CommitteeRole[] }) {
  return (
    <div className="mt-4 bg-surface rounded border border-border px-4 py-4">
      <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">COMMITTEE ASSIGNMENTS</p>
      <div className="flex flex-col gap-1.5">
        {committees.map((c) => (
          <CommitteeRow key={`${c.slug}-${c.role}`} committee={c} />
        ))}
      </div>
    </div>
  )
}

function CommitteeRow({ committee: c }: { committee: CommitteeRole }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded border border-border bg-surface-2 overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-surface transition-colors text-left"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <RoleDot role={c.role} />
          <span className="text-sm text-ink truncate">{c.name}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${roleChipColor(c.role)}`}>
            {c.role === 'Ranking Member' ? 'RANKING' : c.role.toUpperCase()}
          </span>
          <span className="text-ink-4 text-xs transition-transform duration-200" style={{ transform: expanded ? 'rotate(90deg)' : 'none' }}>›</span>
        </div>
      </button>

      {expanded && (
        <div className="px-3 pb-3 pt-1 border-t border-border/50">
          {c.description ? (
            <p className="text-xs text-ink-2 leading-relaxed mb-2">{c.description}</p>
          ) : (
            <p className="text-xs text-ink-3 italic mb-2">
              {c.chamber} committee — {c.role === 'Chair' ? 'chaired by this member' : c.role === 'Ranking Member' ? 'ranking minority member' : 'member'}
            </p>
          )}
          <Link
            href={`/committees/${c.slug}`}
            className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-bright transition-colors font-mono"
          >
            SEE MORE →
          </Link>
        </div>
      )}
    </div>
  )
}

function RoleDot({ role }: { role: string }) {
  const color =
    role === 'Chair'
      ? 'bg-accent'
      : role === 'Ranking Member'
      ? 'bg-teal-600 dark:bg-teal-400'
      : 'bg-ink-4'
  return <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${color}`} />
}

function roleChipColor(role: string): string {
  if (role === 'Chair') return 'text-accent border-accent/40 bg-accent/10'
  if (role === 'Ranking Member') return 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900/60 dark:bg-teal-950/30'
  return 'text-ink-4 border-border bg-surface'
}

function StatCell({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-surface px-4 py-4">
      <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-1">{label.toUpperCase()}</p>
      <p className="text-sm font-medium text-ink tabular-nums">{value}</p>
      {sub && <p className="text-xs text-ink-3 mt-0.5">{sub}</p>}
    </div>
  )
}

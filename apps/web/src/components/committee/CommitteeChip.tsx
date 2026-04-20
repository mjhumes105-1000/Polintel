'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { committeeBySlug } from '@/data/committees'
import type { CommitteeRole } from '@political-intel/types'

interface CommitteeChipProps {
  slug: string
  role: string
  name: string
}

function roleColor(role: string): string {
  const r = role.toUpperCase()
  if (r === 'CHAIR') return 'text-accent border-accent/40 bg-accent/10'
  if (r.includes('RANKING')) return 'text-teal-400 border-teal-900/60 bg-teal-950/30'
  return 'text-ink-3 border-border bg-surface-2'
}

function roleLabel(role: string): string {
  const r = role.toUpperCase()
  if (r === 'CHAIR') return 'CHAIR'
  if (r.includes('RANKING')) return 'RANKING'
  return 'MEMBER'
}

export function CommitteeChip({ slug, role, name }: CommitteeChipProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const committee = committeeBySlug[slug]

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const chipColor = roleColor(role)
  const label = roleLabel(role)

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          'inline-flex items-center gap-1.5 px-2 py-1 rounded border font-mono text-[10px] tracking-wide transition-all',
          chipColor,
          open ? 'shadow-lg' : 'hover:opacity-80',
        ].join(' ')}
        aria-expanded={open}
      >
        <span className="font-bold">{label}</span>
        <span className="opacity-40">·</span>
        <span className="font-normal truncate max-w-[140px]">{name}</span>
        <span className="ml-0.5 opacity-50">{open ? '▲' : '▼'}</span>
      </button>

      {open && committee && (
        <div
          className="absolute top-full left-0 mt-1.5 w-80 bg-surface border border-border rounded shadow-2xl z-50 overflow-hidden"
          style={{ maxWidth: '380px' }}
        >
          {/* Header */}
          <div className="px-4 pt-4 pb-3 border-b border-border bg-surface-2">
            <p className={`font-mono text-[9px] tracking-widest mb-1 ${chipColor.split(' ')[0]}`}>
              {committee.chamber.toUpperCase()} COMMITTEE · {label}
            </p>
            <p className="text-sm font-semibold text-ink leading-snug">{committee.name}</p>
          </div>

          {/* Body */}
          <div className="px-4 py-3 space-y-3">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1">WHAT IT DOES</p>
              <p className="text-xs text-ink-2 leading-relaxed">
                {committee.whatItDoes.split('. ')[0]}.
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1">WHY IT MATTERS</p>
              <p className="text-xs text-ink-2 leading-relaxed">
                {committee.whyItMatters.split('. ').slice(0, 2).join('. ')}.
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1">YOUR INFLUENCE</p>
              <p className="text-xs text-ink-2 leading-relaxed">{committee.memberInfluence}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
            <Link
              href={`/committees/${slug}`}
              className="flex items-center justify-center gap-1.5 w-full py-2 bg-accent/10 hover:bg-accent/15 border border-accent/30 hover:border-accent rounded font-mono text-[10px] tracking-wide text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              VIEW COMMITTEE PAGE →
            </Link>
          </div>
        </div>
      )}

      {open && !committee && (
        <div className="absolute top-full left-0 mt-1.5 w-64 bg-surface border border-border rounded shadow-xl z-50 px-4 py-3">
          <p className="text-xs text-ink-3">Committee data not available.</p>
        </div>
      )}
    </div>
  )
}

// ─── CommitteeSection ─────────────────────────────────────────────────────────

interface CommitteeSectionProps {
  committees?: CommitteeRole[]
}

export function CommitteeSection({ committees }: CommitteeSectionProps) {
  if (!committees || committees.length === 0) return null

  return (
    <section className="mb-8">
      <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
        COMMITTEE ASSIGNMENTS
      </p>
      <div className="flex flex-wrap gap-2">
        {committees.map((c) => (
          <CommitteeChip key={`${c.slug}-${c.role}`} slug={c.slug} role={c.role} name={c.name} />
        ))}
      </div>
    </section>
  )
}

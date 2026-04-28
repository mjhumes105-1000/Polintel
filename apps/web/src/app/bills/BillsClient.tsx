'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Bill, BillStatus } from '@political-intel/types'
import { AIExplanationDropdown } from '@/components/ui/AIExplanationDropdown'

// ─── Status config ────────────────────────────────────────────────────────────

const statusConfig: Record<BillStatus, { label: string; cls: string }> = {
  introduced:     { label: 'INTRODUCED',    cls: 'text-ink-3 border-border' },
  'in-committee': { label: 'IN COMMITTEE',  cls: 'text-blue-700 border-blue-300 bg-blue-100 dark:text-blue-400 dark:border-blue-900 dark:bg-blue-950/30' },
  passed:         { label: 'PASSED',        cls: 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950/30' },
  signed:         { label: 'SIGNED',        cls: 'text-accent border-accent-muted bg-accent/5' },
  vetoed:         { label: 'VETOED',        cls: 'text-flag border-flag-muted bg-flag-bg' },
  failed:         { label: 'FAILED',        cls: 'text-ink-3 border-border' },
}

// ─── Segments ─────────────────────────────────────────────────────────────────

interface Segment {
  key: string
  label: string
  description: string
  tags: string[]
  icon: string
  border: string
  bg: string
  text: string
  iconBg: string
}

const SEGMENTS: Segment[] = [
  {
    key: 'national-security',
    label: 'National Security',
    description: 'Defense spending, military authorization, intelligence oversight, and surveillance law.',
    tags: ['National Security', 'Defense', 'Military', 'NDAA', 'Intelligence', 'Surveillance', 'FISA'],
    icon: '🛡️',
    border: 'border-blue-700/50 hover:border-blue-500',
    bg: 'bg-blue-950/20 hover:bg-blue-950/30',
    text: 'text-blue-300',
    iconBg: 'bg-blue-950/60',
  },
  {
    key: 'tax-budget',
    label: 'Tax & Budget',
    description: 'Federal spending, tax cuts and increases, appropriations bills, and fiscal reconciliation.',
    tags: ['Tax Policy', 'Budget', 'Reconciliation', 'TCJA', 'Spending Cuts', 'Appropriations', 'Government Funding', 'Government Shutdown', 'Impoundment', 'DOGE', 'Foreign Aid', 'USAID'],
    icon: '💵',
    border: 'border-amber-700/50 hover:border-amber-500',
    bg: 'bg-amber-950/20 hover:bg-amber-950/30',
    text: 'text-amber-300',
    iconBg: 'bg-amber-950/60',
  },
  {
    key: 'immigration',
    label: 'Immigration',
    description: 'Border enforcement, asylum policy, deportation rules, and DHS funding.',
    tags: ['Immigration', 'Border Security', 'DHS', 'Public Safety'],
    icon: '🗺️',
    border: 'border-red-700/50 hover:border-red-500',
    bg: 'bg-red-950/20 hover:bg-red-950/30',
    text: 'text-red-300',
    iconBg: 'bg-red-950/60',
  },
  {
    key: 'ai-tech',
    label: 'AI & Technology',
    description: 'Artificial intelligence regulation, cryptocurrency, digital privacy, and online safety.',
    tags: ['AI', 'Technology', 'Deepfakes', 'Cryptocurrency', 'Stablecoins', 'Financial Regulation', 'Online Safety', 'Child Protection'],
    icon: '⚡',
    border: 'border-violet-700/50 hover:border-violet-500',
    bg: 'bg-violet-950/20 hover:bg-violet-950/30',
    text: 'text-violet-300',
    iconBg: 'bg-violet-950/60',
  },
  {
    key: 'farmers',
    label: 'Farmers',
    description: 'Agricultural subsidies, farm bills, food assistance programs, and rural development.',
    tags: ['Agriculture', 'SNAP', 'Food Policy', 'Rural Development', 'Farm Policy'],
    icon: '🌾',
    border: 'border-green-700/50 hover:border-green-500',
    bg: 'bg-green-950/20 hover:bg-green-950/30',
    text: 'text-green-300',
    iconBg: 'bg-green-950/60',
  },
  {
    key: 'workers',
    label: 'Workers & Citizens',
    description: 'Medicaid, civil liberties, child safety, and legislation affecting everyday Americans.',
    tags: ['Medicaid', 'Online Safety', 'Child Protection', 'Civil Liberties', 'Bipartisan'],
    icon: '👷',
    border: 'border-teal-700/50 hover:border-teal-500',
    bg: 'bg-teal-950/20 hover:bg-teal-950/30',
    text: 'text-teal-300',
    iconBg: 'bg-teal-950/60',
  },
  {
    key: 'voter-rights',
    label: 'Voter Rights',
    description: 'Voting access, election security, campaign finance, and electoral integrity.',
    tags: ['Voting Rights', 'Elections', 'Voter ID', 'Voter Access', 'Election Integrity', 'Campaign Finance'],
    icon: '🗳️',
    border: 'border-indigo-700/50 hover:border-indigo-500',
    bg: 'bg-indigo-950/20 hover:bg-indigo-950/30',
    text: 'text-indigo-300',
    iconBg: 'bg-indigo-950/60',
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    description: 'Medicaid reform, drug pricing, public health funding, and insurance regulation.',
    tags: ['Medicaid', 'Healthcare', 'Drug Pricing', 'Public Health', 'Medicare'],
    icon: '🏥',
    border: 'border-pink-700/50 hover:border-pink-500',
    bg: 'bg-pink-950/20 hover:bg-pink-950/30',
    text: 'text-pink-300',
    iconBg: 'bg-pink-950/60',
  },
]

// ─── Bill card ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function BillCard({ bill }: { bill: Bill }) {
  const cfg = statusConfig[bill.status]
  return (
    <div className="group bg-surface border border-border rounded hover:border-accent transition-colors">
      <Link
        href={`/bills/${bill.slug}`}
        className="flex flex-col sm:flex-row sm:items-start gap-4 px-5 py-5 hover:bg-surface-2 transition-colors rounded-t"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="font-mono text-xs text-accent font-semibold shrink-0">{bill.number}</span>
            <span className="text-ink-4 text-xs">·</span>
            <span className="font-mono text-[10px] text-ink-3">{bill.jurisdiction}</span>
            <span className="text-ink-4 text-xs">·</span>
            <span className="font-mono text-[10px] text-ink-4">{bill.session}</span>
          </div>

          <h2 className="text-base font-semibold text-ink group-hover:text-accent transition-colors leading-snug mb-2">
            {bill.title}
          </h2>

          <p className="text-sm text-ink-3 leading-relaxed line-clamp-2 mb-3">
            {bill.summary}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${cfg.cls}`}>
              {cfg.label}
            </span>
            <span className="font-mono text-[10px] text-ink-4">
              {bill.sponsor.name} · {bill.sponsor.party.replace(' Party', '')}
            </span>
            <span className="font-mono text-[10px] text-ink-4">
              {formatDate(bill.statusDate)}
            </span>
          </div>

          {bill.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {bill.tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-surface-2 border border-border text-ink-4">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2 sm:gap-3 sm:pt-0.5">
          <span className="font-mono text-[9px] tracking-widest px-2.5 py-1.5 border border-border rounded text-ink-4 group-hover:border-accent/40 group-hover:text-ink-3 transition-colors whitespace-nowrap">
            READ MORE →
          </span>
          {bill.votes && bill.votes.length > 0 && (
            <span className="font-mono text-[9px] text-ink-4">
              {bill.votes.length} position{bill.votes.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </Link>

      {bill.aiExplanation && (
        <div className="px-5 pb-4">
          <AIExplanationDropdown text={bill.aiExplanation} />
        </div>
      )}
    </div>
  )
}

// ─── Segment card ─────────────────────────────────────────────────────────────

function SegmentCard({
  segment,
  count,
  isActive,
  onClick,
}: {
  segment: Segment
  count: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'relative text-left w-full p-4 rounded border transition-all duration-150',
        isActive
          ? `${segment.border.split(' ')[0].replace('border-', 'border-').replace('/50', '')} ${segment.bg.split(' ')[0].replace('/20', '/40')} ring-1 ring-inset ${segment.border.split(' ')[0].replace('border-', 'ring-')}`
          : `${segment.border} ${segment.bg}`,
      ].join(' ')}
    >
      {isActive && (
        <span className={`absolute top-2.5 right-2.5 font-mono text-[8px] px-1.5 py-0.5 rounded ${segment.iconBg} ${segment.text}`}>
          ACTIVE
        </span>
      )}
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-xl ${segment.iconBg}`}>
        {segment.icon}
      </div>
      <p className={`font-semibold text-sm mb-0.5 ${isActive ? segment.text : 'text-ink'}`}>
        {segment.label}
      </p>
      <p className="text-xs text-ink-4 leading-snug mb-2 line-clamp-2">
        {segment.description}
      </p>
      <div className="flex items-center gap-1.5">
        <span className={`font-mono text-[10px] tabular-nums font-semibold ${count > 0 ? segment.text : 'text-ink-4'}`}>
          {count}
        </span>
        <span className="font-mono text-[9px] text-ink-4">
          {count === 1 ? 'bill' : 'bills'}
        </span>
      </div>
    </button>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function BillsClient({ bills }: { bills: Bill[] }) {
  const [activeSegment, setActiveSegment] = useState<string | null>(null)

  const activeConfig = SEGMENTS.find((s) => s.key === activeSegment) ?? null

  const segmentCounts = useMemo(() =>
    Object.fromEntries(
      SEGMENTS.map((seg) => [
        seg.key,
        bills.filter((b) => b.tags.some((t) => seg.tags.includes(t))).length,
      ])
    ), [bills])

  const filtered = useMemo(() => {
    if (!activeConfig) return bills
    return bills.filter((b) => b.tags.some((t) => activeConfig.tags.includes(t)))
  }, [activeSegment, activeConfig, bills])

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const b of filtered) counts[b.status] = (counts[b.status] ?? 0) + 1
    return counts
  }, [filtered])

  return (
    <>
      {/* Segment grid */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-mono text-[10px] tracking-widest text-accent/70">TOPICS</p>
          {activeSegment && (
            <button
              onClick={() => setActiveSegment(null)}
              className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors"
            >
              CLEAR FILTER ✕
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SEGMENTS.map((seg) => (
            <SegmentCard
              key={seg.key}
              segment={seg}
              count={segmentCounts[seg.key] ?? 0}
              isActive={activeSegment === seg.key}
              onClick={() => setActiveSegment(activeSegment === seg.key ? null : seg.key)}
            />
          ))}
        </div>
      </section>

      {/* Divider with active label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-border" />
        <p className="font-mono text-[9px] tracking-widest text-ink-4 shrink-0">
          {activeConfig
            ? `${filtered.length} BILL${filtered.length !== 1 ? 'S' : ''} · ${activeConfig.label.toUpperCase()}`
            : `ALL ${bills.length} BILLS`}
        </p>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Status summary strip */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-border border border-border rounded overflow-hidden mb-8">
        {(Object.entries(statusConfig) as [BillStatus, { label: string; cls: string }][]).map(([status, cfg]) => {
          const count = statusCounts[status] ?? 0
          return (
            <div key={status} className="bg-surface px-3 py-3 text-center">
              <p className={`font-mono text-base tabular-nums ${count > 0 ? cfg.cls.split(' ')[0] : 'text-ink-4'}`}>
                {count}
              </p>
              <p className="font-mono text-[9px] text-ink-4 mt-0.5 leading-tight">{cfg.label}</p>
            </div>
          )
        })}
      </div>

      {/* Bill list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded">
            <p className="font-mono text-[10px] text-ink-4 mb-1">No bills tracked in this category yet.</p>
            <p className="text-xs text-ink-4">More legislation is added as profiles and topics expand.</p>
          </div>
        ) : (
          filtered.map((b) => <BillCard key={b.id} bill={b} />)
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-4 mt-8">
        {filtered.length === bills.length
          ? `${bills.length} bill${bills.length !== 1 ? 's' : ''} tracked · Additional legislation added as profiles expand.`
          : `${filtered.length} of ${bills.length} bills match this topic · Clear filter to see all.`}
      </p>
    </>
  )
}

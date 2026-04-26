import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Bill, BillStatus, LegislativeStep, BillVote, BillVoteAction } from '@political-intel/types'
import { billsById, allBills } from '@/data/bills'
import { SourceBadge } from '@/components/ui/SourceBadge'
import { AIExplanationDropdown } from '@/components/ui/AIExplanationDropdown'

export function generateStaticParams() {
  return allBills.map((b) => ({ id: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const bill = billsById[id]
  if (!bill) return {}
  return {
    title: `${bill.number} — ${bill.title}`,
    description: bill.summary.slice(0, 160),
  }
}

const statusConfig: Record<BillStatus, { label: string; className: string }> = {
  introduced: { label: 'INTRODUCED', className: 'text-ink-3 border-border bg-surface' },
  'in-committee': { label: 'IN COMMITTEE', className: 'text-blue-700 border-blue-300 bg-blue-100 dark:text-blue-400 dark:border-blue-900 dark:bg-blue-950' },
  passed: { label: 'PASSED', className: 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950' },
  signed: { label: 'SIGNED INTO LAW', className: 'text-accent border-accent-muted bg-accent/5' },
  vetoed: { label: 'VETOED', className: 'text-flag border-flag-muted bg-flag-bg' },
  failed: { label: 'FAILED', className: 'text-ink-3 border-border bg-surface' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function StatusBadge({ status }: { status: BillStatus }) {
  const config = statusConfig[status]
  return (
    <span
      className={`inline-block font-mono text-[10px] tracking-widest px-2.5 py-1 rounded border ${config.className}`}
    >
      {config.label}
    </span>
  )
}

function LegislativeHistory({ steps }: { steps: LegislativeStep[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-4">LEGISLATIVE HISTORY</h2>
      <div className="relative border-l border-border ml-1.5">
        {steps.map((step, i) => (
          <div key={i} className="relative pl-6 pb-6 last:pb-0">
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-surface-3 border border-border" style={{ transform: 'translateX(-4px)' }} />
            <p className="font-mono text-[10px] text-ink-4 mb-0.5">{formatDate(step.date)}</p>
            <p className="text-sm text-ink leading-snug">{step.event}</p>
            {step.notes && (
              <p className="text-xs text-ink-3 mt-0.5">{step.notes}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const actionConfig: Record<BillVoteAction, { label: string; color: string }> = {
  signed:        { label: 'SIGNED',       color: 'text-teal-400 border-teal-900 bg-teal-950/30' },
  vetoed:        { label: 'VETOED',       color: 'text-flag border-flag-muted bg-flag-bg' },
  yes:           { label: 'YES',          color: 'text-teal-400 border-teal-900 bg-teal-950/30' },
  no:            { label: 'NO',           color: 'text-red-400 border-red-900 bg-red-950/30' },
  abstain:       { label: 'ABSTAIN',      color: 'text-ink-3 border-border bg-surface' },
  sponsored:     { label: 'SPONSORED',    color: 'text-accent border-accent-muted bg-accent/5' },
  'co-sponsored':{ label: 'CO-SPONSOR',   color: 'text-accent/70 border-accent/30 bg-accent/5' },
  opposed:       { label: 'OPPOSED',      color: 'text-red-400 border-red-900 bg-red-950/30' },
}

function VoteBreakdown({ votes }: { votes: BillVote[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-4">POSITIONS & VOTES</h2>
      <div className="space-y-2">
        {votes.map((v) => {
          const cfg = actionConfig[v.action]
          const inner = (
            <div className="flex items-start justify-between gap-4 px-4 py-3 bg-surface border border-border rounded hover:bg-surface-2 transition-colors group">
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">{v.politicianName}</p>
                {v.politicianTitle && <p className="text-xs text-ink-3">{v.politicianTitle}</p>}
                {v.note && <p className="text-xs text-ink-3 mt-1 italic">{v.note}</p>}
              </div>
              <span className={`font-mono text-[9px] px-2 py-0.5 rounded border shrink-0 mt-0.5 ${cfg.color}`}>
                {cfg.label}
              </span>
            </div>
          )
          return (
            <div key={v.politicianId || v.politicianName}>
              {v.politicianId ? (
                <Link href={`/politicians/${v.politicianId}`}>{inner}</Link>
              ) : inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default async function BillPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const bill = billsById[id]
  if (!bill) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-2">
        <Link
          href="/bills"
          className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-ink-3 transition-colors"
        >
          ← BILLS
        </Link>
      </div>

      <header className="border-b border-border pb-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-accent font-semibold">{bill.number}</span>
          <span className="text-ink-4 text-xs">·</span>
          <span className="font-mono text-[10px] text-ink-3">{bill.jurisdiction}</span>
          <span className="text-ink-4 text-xs">·</span>
          <span className="font-mono text-[10px] text-ink-3">{bill.session}</span>
        </div>

        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-4 leading-snug">
          {bill.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <StatusBadge status={bill.status} />
          <span className="font-mono text-[10px] text-ink-3">
            {bill.status === 'signed' || bill.status === 'vetoed'
              ? formatDate(bill.statusDate)
              : `Updated ${formatDate(bill.statusDate)}`}
          </span>
        </div>

        <div className="bg-surface border border-border rounded px-4 py-3">
          <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-1">SPONSOR</p>
          <p className="text-sm text-ink">
            {bill.sponsor.name}{' '}
            <span className="text-ink-3">
              · {bill.sponsor.title} · {bill.sponsor.party.replace(' Party', '')} · {bill.sponsor.state}
            </span>
          </p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">SUMMARY</h2>
        <div className="bg-surface border border-border rounded px-5 py-4">
          <p className="text-sm text-ink-2 leading-relaxed">{bill.summary}</p>
          {bill.aiExplanation && (
            <AIExplanationDropdown text={bill.aiExplanation} />
          )}
        </div>
      </section>

      {bill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-8">
          {bill.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-ink-3"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {bill.votes && bill.votes.length > 0 && <VoteBreakdown votes={bill.votes} />}
      <LegislativeHistory steps={bill.legislativeHistory} />

      <section className="mb-10">
        <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">FULL CONTEXT</h2>
        <div className="bg-surface border border-border rounded p-5">
          <p className="text-sm text-ink-2 leading-relaxed">{bill.detail}</p>
        </div>
      </section>

      {bill.relatedPoliticianIds.length > 0 && (
        <section className="mb-10">
          <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">RELATED PROFILES</h2>
          <div className="space-y-1">
            {bill.relatedPoliticianIds.map((politicianId) => (
              <Link
                key={politicianId}
                href={`/politicians/${politicianId}`}
                className="flex items-center justify-between px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
              >
                <span className="text-sm text-ink group-hover:text-accent transition-colors capitalize">
                  {politicianId.replace(/-/g, ' ')}
                </span>
                <span className="text-ink-3 group-hover:text-accent transition-colors text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {bill.sources.length > 0 && (
        <section className="mb-10">
          <h2 className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">SOURCES</h2>
          <div className="space-y-2">
            {bill.sources.map((source) => (
              <div key={source.id} className="flex items-start gap-3 text-xs">
                <SourceBadge source={source} />
                <div className="min-w-0">
                  <p className="text-ink-2 leading-snug">{source.label}</p>
                  {source.publishedAt && (
                    <p className="text-ink-4 font-mono text-[10px] mt-0.5">
                      Published {formatDate(source.publishedAt)} · Retrieved {formatDate(source.retrievedAt)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

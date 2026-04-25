import type { Metadata } from 'next'
import Link from 'next/link'
import { allBills } from '@/data/bills'
import type { Bill, BillStatus } from '@political-intel/types'
import { AIExplanationDropdown } from '@/components/ui/AIExplanationDropdown'

export const metadata: Metadata = {
  title: 'Bills & Legislation · PoliIntel',
  description: 'Key legislation tracked with full context — sponsors, votes, legislative history, and plain-language summaries.',
}

const statusConfig: Record<BillStatus, { label: string; cls: string }> = {
  introduced:    { label: 'INTRODUCED',    cls: 'text-ink-3 border-border' },
  'in-committee':{ label: 'IN COMMITTEE',  cls: 'text-blue-400 border-blue-900 bg-blue-950/30' },
  passed:        { label: 'PASSED',        cls: 'text-teal-400 border-teal-900 bg-teal-950/30' },
  signed:        { label: 'SIGNED',        cls: 'text-accent border-accent-muted bg-accent/5' },
  vetoed:        { label: 'VETOED',        cls: 'text-flag border-flag-muted bg-flag-bg' },
  failed:        { label: 'FAILED',        cls: 'text-ink-3 border-border' },
}

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
        {/* Left col */}
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

        {/* Right col */}
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

export default function BillsPage() {
  const byStatus = {
    signed:        allBills.filter((b) => b.status === 'signed'),
    passed:        allBills.filter((b) => b.status === 'passed'),
    'in-committee':allBills.filter((b) => b.status === 'in-committee'),
    introduced:    allBills.filter((b) => b.status === 'introduced'),
    vetoed:        allBills.filter((b) => b.status === 'vetoed'),
    failed:        allBills.filter((b) => b.status === 'failed'),
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">LEGISLATION</p>
        <h1 className="text-2xl font-semibold text-ink mb-2">Bills &amp; Legislative Record</h1>
        <p className="text-sm text-ink-3 leading-relaxed max-w-2xl">
          Key legislation tracked with full context — sponsors, legislative history,
          vote breakdowns, and plain-language summaries. Every claim links to a primary source.
        </p>
      </div>

      {/* Status summary strip */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-border border border-border rounded overflow-hidden mb-10">
        {(Object.entries(statusConfig) as [BillStatus, { label: string; cls: string }][]).map(([status, cfg]) => {
          const count = byStatus[status]?.length ?? 0
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
        {allBills.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded">
            <p className="font-mono text-[10px] text-ink-4">No bills tracked yet.</p>
          </div>
        ) : (
          allBills.map((b) => <BillCard key={b.id} bill={b} />)
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-4 mt-8">
        {allBills.length} bill{allBills.length !== 1 ? 's' : ''} tracked · Additional legislation added as profiles expand.
      </p>
    </div>
  )
}

import type { Metadata } from 'next'
import { allBills } from '@/data/bills'
import { BillsClient } from './BillsClient'

export const metadata: Metadata = {
  title: 'Bills & Legislation · PoliIntel',
  description: 'Key legislation tracked with full context — sponsors, votes, legislative history, and plain-language summaries.',
}

export default function BillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">LEGISLATION</p>
        <h1 className="text-2xl font-semibold text-ink mb-2">Bills &amp; Legislative Record</h1>
        <p className="text-sm text-ink-3 leading-relaxed max-w-2xl">
          Key legislation tracked with full context — sponsors, legislative history,
          vote breakdowns, and plain-language summaries. Every claim links to a primary source.
          Select a topic below to filter.
        </p>
      </div>

      <BillsClient bills={allBills} />
    </div>
  )
}

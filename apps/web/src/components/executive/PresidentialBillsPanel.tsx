'use client'

import { useState } from 'react'
import type { PresidentialBill } from '@/lib/fetchPresidentialBills'

const STATUS_STYLE: Record<PresidentialBill['status'], string> = {
  signed: 'text-teal-400 border-teal-800/60 bg-teal-950/20',
  vetoed: 'text-red-400 border-red-800/60 bg-red-950/20',
  pocket_vetoed: 'text-orange-400 border-orange-800/60 bg-orange-950/20',
  pushing: 'text-amber-400 border-amber-800/60 bg-amber-950/20',
}

const STATUS_LABEL: Record<PresidentialBill['status'], string> = {
  signed: 'SIGNED',
  vetoed: 'VETOED',
  pocket_vetoed: 'POCKET VETO',
  pushing: 'PUSHING',
}

function formatDate(iso?: string) {
  if (!iso) return null
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function BillRow({ bill }: { bill: PresidentialBill }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <li className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-4 py-3 hover:bg-surface-2 transition-colors group"
      >
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-start gap-1 shrink-0 pt-0.5 min-w-[80px]">
            <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${STATUS_STYLE[bill.status]}`}>
              {STATUS_LABEL[bill.status]}
            </span>
            <span className="font-mono text-[8px] text-ink-4">{bill.number}</span>
            {bill.publicLawNumber && (
              <span className="font-mono text-[8px] text-teal-400/80">{bill.publicLawNumber}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-ink leading-snug group-hover:text-accent transition-colors">
              {bill.shortTitle ?? bill.title}
            </p>
            <div className="flex items-center gap-2 flex-wrap mt-0.5">
              {bill.policyArea && (
                <span className="font-mono text-[8px] text-ink-4 border border-border rounded px-1">{bill.policyArea}</span>
              )}
              {(bill.signingDate ?? bill.introducedDate) && (
                <span className="font-mono text-[9px] text-ink-4">
                  {formatDate(bill.signingDate ?? bill.introducedDate)}
                </span>
              )}
            </div>
          </div>
          <span className="text-ink-4 text-xs shrink-0 mt-0.5">{expanded ? '▲' : '▼'}</span>
        </div>
      </button>
      {expanded && (
        <div className="px-4 pb-4 pt-1 ml-[calc(5rem+0.75rem)]">
          {bill.summary && (
            <p className="text-xs text-ink-3 leading-relaxed mb-3">{bill.summary}</p>
          )}
          <a
            href={bill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
          >
            VIEW ON CONGRESS.GOV ↗
          </a>
        </div>
      )}
    </li>
  )
}

type Tab = 'pushing' | 'signed' | 'vetoed'

interface PresidentialBillsPanelProps {
  pushing: PresidentialBill[]
  signed: PresidentialBill[]
  vetoed: PresidentialBill[]
  hasApiKey: boolean
}

export function PresidentialBillsPanel({ pushing, signed, vetoed, hasApiKey }: PresidentialBillsPanelProps) {
  const [tab, setTab] = useState<Tab>('pushing')

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'pushing', label: 'PUSHING', count: pushing.length },
    { id: 'signed', label: 'SIGNED', count: signed.length },
    { id: 'vetoed', label: 'VETOED', count: vetoed.length },
  ]

  const current = tab === 'pushing' ? pushing : tab === 'signed' ? signed : vetoed

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-[10px] tracking-widest text-accent/70">LEGISLATION</p>
        {!hasApiKey && (
          <span className="font-mono text-[9px] text-amber-500 border border-amber-800/60 rounded px-2 py-0.5">
            CONGRESS.GOV KEY NEEDED FOR LIVE DATA
          </span>
        )}
      </div>

      <div className="flex gap-0 border border-border rounded-lg overflow-hidden mb-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={[
              'flex-1 px-3 py-2.5 font-mono text-[9px] tracking-widest transition-colors border-r border-border last:border-r-0',
              tab === t.id
                ? 'bg-accent/10 text-accent'
                : 'text-ink-4 hover:text-ink-3 hover:bg-surface-2',
            ].join(' ')}
          >
            {t.label}
            <span className="ml-1.5 opacity-60">({t.count})</span>
          </button>
        ))}
      </div>

      <div className="border border-t-0 border-border rounded-b-lg overflow-hidden bg-surface">
        {current.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-xs text-ink-4 font-mono mb-1">
              {!hasApiKey && tab !== 'pushing' ? 'ADD CONGRESS.GOV API KEY TO ENABLE' : 'NO RECORDS FOUND'}
            </p>
            {!hasApiKey && tab !== 'pushing' && (
              <p className="text-xs text-ink-4">
                Set <code className="font-mono text-[9px]">CONGRESS_GOV_API_KEY</code> in your environment. Free at{' '}
                <a href="https://api.congress.gov" target="_blank" rel="noopener noreferrer" className="text-accent/70 hover:text-accent">
                  api.congress.gov ↗
                </a>
              </p>
            )}
          </div>
        ) : (
          <ul>
            {current.map((bill) => (
              <BillRow key={bill.billId} bill={bill} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

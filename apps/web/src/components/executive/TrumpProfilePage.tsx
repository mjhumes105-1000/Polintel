import Link from 'next/link'
import type { PoliticianProfile } from '@political-intel/types'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { PresidentialActionsPanel } from './PresidentialActionsPanel'
import { PresidentialBillsPanel } from './PresidentialBillsPanel'
import type { PresidentialAction } from '@/lib/fetchPresidentialActions'
import type { PresidentialBill } from '@/lib/fetchPresidentialBills'

interface TrumpProfilePageProps {
  politician: PoliticianProfile
  executiveOrders: PresidentialAction[]
  memoranda: PresidentialAction[]
  proclamations: PresidentialAction[]
  signedBills: PresidentialBill[]
  vetoedBills: PresidentialBill[]
  pushedBills: PresidentialBill[]
  hasApiKey: boolean
  lastUpdated: string
}

const TERM_FACTS = [
  { label: 'TERM', value: '2025–2029' },
  { label: 'PARTY', value: 'Republican' },
  { label: 'INAUGURATED', value: 'January 20, 2025' },
  { label: 'PRIOR TERM', value: '45th President (2017–2021)' },
  { label: 'VICE PRESIDENT', value: 'JD Vance' },
]

export function TrumpProfilePage({
  politician,
  executiveOrders,
  memoranda,
  proclamations,
  signedBills,
  vetoedBills,
  pushedBills,
  hasApiKey,
  lastUpdated,
}: TrumpProfilePageProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/politicians"
          className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors"
        >
          ← ALL POLITICIANS
        </Link>
      </div>

      {/* Presidential header */}
      <header className="border-b border-border pb-8 mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
          47TH PRESIDENT OF THE UNITED STATES
        </p>
        <div className="flex items-start gap-6">
          <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={96} />
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-semibold text-ink tracking-tight mb-1">{politician.name}</h1>
            <p className="text-lg text-ink-2 mb-3">President of the United States</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-ink-3 mb-4">
              <span className="text-red-400">Republican</span>
              <span className="text-ink-4">·</span>
              <span>In office since January 20, 2025</span>
              <span className="text-ink-4">·</span>
              <span className="text-ink-4">Updated {lastUpdated}</span>
            </div>
            <SocialLinks social={politician.social} contact={politician.contact} />
          </div>
        </div>
      </header>

      {/* Bio */}
      {politician.bio && (
        <section className="mb-8">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">BACKGROUND</p>
          <div className="bg-surface border border-border rounded px-5 py-4">
            <p className="text-sm text-ink-2 leading-relaxed">{politician.bio}</p>
          </div>
        </section>
      )}

      {/* Term facts */}
      <section className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">CURRENT TERM</p>
        <div className="bg-surface border border-border rounded divide-y divide-border">
          {TERM_FACTS.map(({ label, value }) => (
            <div key={label} className="px-5 py-3 flex items-center justify-between gap-4">
              <span className="text-xs text-ink-3 font-mono tracking-wide">{label}</span>
              <span className="text-sm text-ink text-right">{value}</span>
            </div>
          ))}
          <div className="px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-xs text-ink-3 font-mono tracking-wide">EXECUTIVE ORDERS</span>
            <span className="text-sm text-ink">{executiveOrders.length} signed this term</span>
          </div>
          <div className="px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-xs text-ink-3 font-mono tracking-wide">LEGISLATION SIGNED</span>
            <span className="text-sm text-ink">
              {signedBills.length > 0 ? `${signedBills.length} bills` : hasApiKey ? '0 bills' : 'Key required'}
            </span>
          </div>
        </div>
      </section>

      {/* Live executive actions */}
      <PresidentialActionsPanel
        executiveOrders={executiveOrders}
        memoranda={memoranda}
        proclamations={proclamations}
      />

      {/* Legislation */}
      <PresidentialBillsPanel
        pushing={pushedBills}
        signed={signedBills}
        vetoed={vetoedBills}
        hasApiKey={hasApiKey}
      />

      {/* Cabinet link */}
      <section className="mb-8">
        <Link
          href="/politicians#executive"
          className="group flex items-center justify-between gap-4 px-5 py-4 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent mb-1">CABINET</p>
            <p className="text-sm font-medium text-ink">View the full Trump administration</p>
            <p className="text-xs text-ink-3 mt-0.5">25 officials · All departments</p>
          </div>
          <span className="text-ink-3 group-hover:text-accent transition-colors text-sm shrink-0">→</span>
        </Link>
      </section>

      {/* Compare CTA */}
      <section className="mb-8">
        <Link
          href={`/compare?a=${politician.slug}`}
          className="group flex items-center justify-between gap-4 px-5 py-4 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent mb-1">COMPARE</p>
            <p className="text-sm font-medium text-ink">Compare Trump with another politician</p>
            <p className="text-xs text-ink-3 mt-0.5">Side-by-side record comparison</p>
          </div>
          <span className="text-ink-3 group-hover:text-accent transition-colors text-sm shrink-0">→</span>
        </Link>
      </section>

      <div className="text-center pt-4 border-t border-border">
        <p className="font-mono text-[9px] text-ink-4">
          Executive orders sourced from the Federal Register · Legislation from Congress.gov · Updated daily
        </p>
      </div>
    </div>
  )
}

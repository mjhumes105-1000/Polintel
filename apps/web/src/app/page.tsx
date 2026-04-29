import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '@/components/ui/SearchBar'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { CandidatePhoto } from '@/components/ui/CandidatePhoto'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { allBills } from '@/data/bills'
import { committees } from '@/data/committees'
import { countries, GLOBAL_SUMMARY } from '@/data/economy/countries'
import { presidentialCandidates2028 } from '@/data/presidential'
import { formatBillions } from '@/lib/economy'
import type { Bill, PoliticianProfile } from '@political-intel/types'

const allFullProfiles: PoliticianProfile[] = [
  newsom,
  ...Object.values(allDelegationProfiles),
]

// Recently updated — sorted by most recent source retrieval date
const recentlyUpdatedProfiles = [...allFullProfiles]
  .filter(p => p.sources.some(s => s.retrievedAt))
  .sort((a, b) => {
    const aDate = a.sources.map(s => s.retrievedAt).sort().at(-1) ?? ''
    const bDate = b.sources.map(s => s.retrievedAt).sort().at(-1) ?? ''
    return bDate.localeCompare(aDate)
  })
  .slice(0, 6)

// ─── Helpers ──────────────────────────────────────────────────────────────────

const statusConfig: Record<string, { label: string; cls: string }> = {
  introduced:   { label: 'INTRODUCED',    cls: 'text-ink-3 border-border' },
  'in-committee':{ label: 'IN COMMITTEE', cls: 'text-blue-700 border-blue-300 dark:text-blue-400 dark:border-blue-900' },
  passed:       { label: 'PASSED',        cls: 'text-teal-700 border-teal-300 dark:text-teal-400 dark:border-teal-900' },
  signed:       { label: 'SIGNED',        cls: 'text-accent border-accent-muted' },
  vetoed:       { label: 'VETOED',        cls: 'text-flag border-flag-muted' },
  failed:       { label: 'FAILED',        cls: 'text-ink-3 border-border' },
}

// ─── Stats strip ──────────────────────────────────────────────────────────────

function StatsStrip() {
  const cells = [
    { label: 'POLITICIANS TRACKED', value: `${allFullProfiles.length}`, sub: 'All 50 states + territories' },
    { label: 'BILLS IN RECORD',    value: String(allBills.length),       sub: 'With full context' },
    { label: 'COMMITTEES',         value: String(committees.length),     sub: 'With jurisdiction detail' },
    { label: 'TRADE PARTNERS',     value: String(countries.length),      sub: `FY${GLOBAL_SUMMARY.dataYear} data` },
    { label: 'U.S. TRADE TRACKED', value: formatBillions(GLOBAL_SUMMARY.totalTradeUSD), sub: 'Annual bilateral' },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border rounded overflow-hidden mb-16">
      {cells.map((c) => (
        <div key={c.label} className="bg-surface px-4 py-4">
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5 leading-tight">{c.label}</p>
          <p className="font-mono text-lg text-ink">{c.value}</p>
          <p className="font-mono text-[9px] text-ink-4 mt-0.5">{c.sub}</p>
        </div>
      ))}
    </div>
  )
}

// ─── Economy teaser ───────────────────────────────────────────────────────────

function EconomyTeaser() {
  const top3 = countries.slice(0, 3)
  const deficit = formatBillions(Math.abs(GLOBAL_SUMMARY.totalDeficitUSD))

  return (
    <div className="bg-surface border border-border rounded p-5 flex flex-col h-full">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-0.5">ECONOMIC EXPOSURE</p>
          <p className="text-base font-semibold text-ink">U.S. Trade &amp; Dependency</p>
        </div>
        <span className="font-mono text-[9px] text-flag border border-flag-muted bg-flag-bg px-1.5 py-0.5 rounded">
          {deficit} DEFICIT
        </span>
      </div>

      <p className="text-xs text-ink-3 leading-relaxed mb-4">
        Bilateral trade flows, tariff exposure, investment positions, and strategic dependency
        across {countries.length} top U.S. trade partners.
      </p>

      <div className="space-y-2 flex-1">
        {top3.map((c) => (
          <Link
            key={c.slug}
            href={`/economy/${c.slug}`}
            className="flex items-center gap-3 px-3 py-2.5 bg-surface-2 border border-border rounded hover:border-accent/40 transition-colors group"
          >
            <span className="text-xl leading-none shrink-0">{c.flagEmoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">{c.name}</p>
              <p className="font-mono text-[9px] text-ink-4">#{c.tradePartnerRank} partner</p>
            </div>
            <div className="text-right shrink-0">
              <p className={`font-mono text-[10px] tabular-nums ${c.tradeBalanceUSD < 0 ? 'text-flag' : 'text-teal-600 dark:text-teal-400'}`}>
                {c.tradeBalanceUSD < 0 ? '−' : '+'}{formatBillions(Math.abs(c.tradeBalanceUSD))}
              </p>
              <p className="font-mono text-[9px] text-ink-4">balance</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/economy"
        className="mt-4 block text-center font-mono text-[9px] tracking-widest py-2.5 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
      >
        VIEW ALL {countries.length} PARTNERS →
      </Link>
      <p className="font-mono text-[8px] text-ink-4 mt-2">
        Source:{' '}
        <a href="https://www.census.gov/foreign-trade/statistics/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline-offset-2 hover:underline">U.S. Census Bureau</a>
        {' '}·{' '}
        <a href="https://ustr.gov/countries-regions" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline-offset-2 hover:underline">USTR</a>
      </p>
    </div>
  )
}

// ─── Presidential 2028 teaser ─────────────────────────────────────────────────

function PresidentialTeaser() {
  const active = presidentialCandidates2028.filter((c) => c.status !== 'withdrawn')
  const declared = active.filter((c) => c.status === 'declared').length
  const exploring = active.filter((c) => c.status === 'exploring').length

  return (
    <div className="bg-surface border border-border rounded p-5 flex flex-col h-full">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-0.5">2028 PRESIDENTIAL</p>
          <p className="text-base font-semibold text-ink">Field Watch</p>
        </div>
        <div className="flex items-center gap-1.5 text-right">
          {declared > 0 && (
            <span className="font-mono text-[9px] text-accent border border-accent-muted bg-accent/5 px-1.5 py-0.5 rounded">
              {declared} DECLARED
            </span>
          )}
          <span className="font-mono text-[9px] text-ink-3 border border-border px-1.5 py-0.5 rounded">
            {exploring} EXPLORING
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {active.slice(0, 4).map((c) => (
          <div key={c.name} className={c.profileSlug ? 'contents' : ''}>
            {c.profileSlug ? (
              <Link
                href={`/politicians/${c.profileSlug}`}
                className="flex flex-col items-center gap-2 p-3 bg-surface-2 border border-border rounded hover:border-accent/40 hover:bg-surface transition-colors group text-center"
              >
                <CandidateMini candidate={c} />
              </Link>
            ) : (
              <div className="flex flex-col items-center gap-2 p-3 bg-surface-2 border border-border rounded text-center opacity-70">
                <CandidateMini candidate={c} />
              </div>
            )}
          </div>
        ))}
      </div>

      <Link
        href="/explore"
        className="mt-4 block text-center font-mono text-[9px] tracking-widest py-2.5 rounded border border-border text-ink-3 hover:border-accent/40 hover:text-ink-2 transition-colors"
      >
        EXPLORE 2028 RACE →
      </Link>
    </div>
  )
}

function CandidateMini({ candidate }: { candidate: typeof presidentialCandidates2028[0] }) {
  const partyColor = candidate.party === 'D' ? 'text-accent' : candidate.party === 'R' ? 'text-red-600 dark:text-red-400' : 'text-ink-3'
  return (
    <>
      <CandidatePhoto name={candidate.name} photoUrl={candidate.photoUrl} />
      <div className="min-w-0 w-full">
        <p className="text-xs font-medium text-ink leading-tight line-clamp-2">{candidate.name}</p>
        <p className={`font-mono text-[9px] mt-0.5 ${partyColor}`}>
          {candidate.party === 'D' ? 'DEM' : candidate.party === 'R' ? 'REP' : 'IND'}
        </p>
      </div>
    </>
  )
}

// ─── Recent legislation ───────────────────────────────────────────────────────

function LegislationSection() {
  return (
    <section className="mb-16">
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <p className="font-mono text-[10px] tracking-widest text-accent/70">RECENT LEGISLATION</p>
          <a href="https://www.congress.gov" target="_blank" rel="noopener noreferrer" className="font-mono text-[8px] text-ink-4 hover:text-accent transition-colors">
            Source: Congress.gov ↗
          </a>
        </div>
        <Link href="/bills" className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors">
          VIEW ALL →
        </Link>
      </div>
      <div className="space-y-2">
        {allBills.map((b) => <BillRow key={b.id} bill={b} />)}
      </div>
    </section>
  )
}

function BillRow({ bill }: { bill: Bill }) {
  const cfg = statusConfig[bill.status] ?? { label: bill.status.toUpperCase(), cls: 'text-ink-3 border-border' }
  return (
    <Link
      href={`/bills/${bill.slug}`}
      className="flex items-center justify-between gap-4 px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-mono text-xs text-accent font-semibold shrink-0">{bill.number}</span>
          <span className="text-ink-4 text-xs">·</span>
          <span className="font-mono text-[10px] text-ink-3 truncate">{bill.jurisdiction}</span>
        </div>
        <p className="text-sm text-ink group-hover:text-accent transition-colors truncate">{bill.title}</p>
      </div>
      <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${cfg.cls}`}>
        {cfg.label}
      </span>
    </Link>
  )
}

// ─── Recently Updated ─────────────────────────────────────────────────────────

function RecentlyUpdatedSection() {
  if (recentlyUpdatedProfiles.length === 0) return null
  return (
    <section className="mb-16">
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/70">RECENTLY UPDATED</p>
        <Link href="/politicians" className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors">
          ALL POLITICIANS →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {recentlyUpdatedProfiles.map(p => {
          const lastUpdated = p.sources.map(s => s.retrievedAt).sort().at(-1)
          return (
            <Link
              key={p.slug}
              href={`/politicians/${p.slug}`}
              className="group flex flex-col items-center gap-2 p-3 bg-surface border border-border rounded hover:border-accent/40 hover:bg-surface-2 transition-colors text-center"
            >
              <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={40} />
              <div className="min-w-0 w-full">
                <p className="text-xs font-medium text-ink group-hover:text-accent transition-colors leading-tight line-clamp-2">{p.name}</p>
                {lastUpdated && (
                  <p className="font-mono text-[8px] text-ink-4 mt-0.5">{lastUpdated}</p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

// ─── Featured profiles ────────────────────────────────────────────────────────

// A hand-picked cross-section of recognizable members from different states/chambers
const FEATURED_SLUGS = [
  'chuck-schumer', 'mitch-mcconnell', 'hakeem-jeffries', 'mike-johnson',
  'bernie-sanders', 'elizabeth-warren', 'ted-cruz', 'marco-rubio',
  'alexandria-ocasio-cortez', 'nancy-pelosi',
]

function ProfilesSection() {
  const profileMap = Object.fromEntries(allFullProfiles.map(p => [p.slug, p]))
  const featured = FEATURED_SLUGS.map(s => profileMap[s]).filter(Boolean)

  return (
    <section className="mb-16">
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/70">PROFILES</p>
        <Link href="/politicians" className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors">
          ALL {allFullProfiles.length} POLITICIANS →
        </Link>
      </div>

      {/* Newsom — featured */}
      <Link
        href={`/politicians/${newsom.slug}`}
        className="group flex items-center gap-4 px-5 py-4 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors mb-2"
      >
        <PoliticianPhoto name={newsom.name} photoUrl={newsom.photoUrl} size={48} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{newsom.name}</p>
          <p className="text-xs text-ink-3 mt-0.5">{newsom.currentTitle}</p>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="font-mono text-[9px] text-ink-4">{newsom.baselineCard.party.replace(' Party', '')}</span>
            <span className="font-mono text-[9px] text-ink-4">·</span>
            <span className="font-mono text-[9px] text-ink-4">{newsom.timeline.length} TIMELINE EVENTS</span>
            <span className="font-mono text-[9px] text-ink-4">·</span>
            <span className="font-mono text-[9px] text-ink-4">LIVE FEC DATA</span>
          </div>
        </div>
        <span className="font-mono text-[9px] tracking-widest px-2.5 py-1.5 border border-accent/40 text-accent rounded shrink-0 group-hover:bg-accent/10 transition-colors">
          FULL PROFILE →
        </span>
      </Link>

      {/* Cross-country grid */}
      {featured.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/politicians/${p.slug}`}
              className="flex flex-col items-center gap-2 p-3 bg-surface border border-border rounded hover:border-accent/40 hover:bg-surface-2 transition-colors group text-center"
            >
              <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={40} />
              <div className="min-w-0 w-full">
                <p className="text-xs font-medium text-ink group-hover:text-accent transition-colors leading-tight line-clamp-2">{p.name}</p>
                <p className="font-mono text-[9px] text-ink-4 mt-0.5 truncate">{p.state}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="font-mono text-[10px] text-ink-4 mt-3">
        {allFullProfiles.length} full profiles — all 50 states + territories ·{' '}
        <Link href="/politicians" className="text-accent/70 hover:text-accent transition-colors">
          Browse all politicians →
        </Link>
      </p>
    </section>
  )
}

// ─── Hero bill ticker ─────────────────────────────────────────────────────────

function HeroBillTicker() {
  const recent = allBills.slice(0, 5)
  return (
    <div className="max-w-2xl mt-5 border border-border rounded overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-surface border-b border-border">
        <p className="font-mono text-[9px] tracking-widest text-accent/70">LATEST IN CONGRESS</p>
        <Link href="/bills" className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors">
          ALL BILLS →
        </Link>
      </div>
      {recent.map((b) => {
        const cfg = statusConfig[b.status] ?? { label: b.status.toUpperCase(), cls: 'text-ink-3 border-border' }
        return (
          <Link
            key={b.id}
            href={`/bills/${b.slug}`}
            className="flex items-center justify-between gap-3 px-3 py-2 border-b border-border/40 last:border-0 hover:bg-surface transition-colors group"
          >
            <div className="min-w-0 flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-accent shrink-0">{b.number}</span>
              <span className="text-xs text-ink-3 group-hover:text-ink-2 transition-colors truncate">{b.title}</span>
            </div>
            <span className={`font-mono text-[8px] px-1 py-0.5 rounded border shrink-0 ${cfg.cls}`}>
              {cfg.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

// ─── Why this exists ──────────────────────────────────────────────────────────

function WhyThisExists() {
  return (
    <section className="mb-16 border border-border rounded p-6 bg-surface">
      <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-3">WHY THIS EXISTS</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            heading: 'Primary sources only',
            body: 'Every vote, figure, and statement is traced to Congress.gov, the FEC, the Federal Register, or another primary government record. No third-party aggregators, no editorial spin.',
          },
          {
            heading: 'No partisan framing',
            body: 'Voting records are facts. Funding figures are facts. We present the record without characterizing it. Readers draw their own conclusions from the same data officials file publicly.',
          },
          {
            heading: 'Every figure cited',
            body: 'Each data card links directly to the underlying source. If a number is on this site, you can trace it to the original filing in two clicks.',
          },
        ].map(({ heading, body }) => (
          <div key={heading}>
            <p className="text-sm font-medium text-ink mb-1.5">{heading}</p>
            <p className="text-xs text-ink-3 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="mb-16">
        <p className="font-mono text-[10px] tracking-widest text-accent mb-3">
          POLITICAL INTELLIGENCE PLATFORM
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-4 max-w-xl">
          The public record, organized.
        </h1>
        <p className="text-ink-2 text-base leading-relaxed max-w-2xl mb-6">
          Votes, statements, campaign funding, and trade exposure — pulled from primary sources,
          cited clearly, and organized without partisan framing.{' '}
          <span className="text-amber-400/90">See the record. Trace the evidence. Decide for yourself.</span>
        </p>
        <SearchBar
          placeholder="Search politicians, bills, countries, committees…"
          navigateOnSubmit
          size="lg"
          className="max-w-2xl mb-5"
        />
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/politicians"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-900 font-mono text-[10px] tracking-widest rounded transition-colors font-semibold"
          >
            EXPLORE POLITICIANS →
          </Link>
          <Link href="/methodology" className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-ink-2 transition-colors">
            See how this works →
          </Link>
        </div>
        <HeroBillTicker />
        <div className="max-w-2xl mt-3 flex items-center gap-1.5 px-3 py-2 bg-surface border border-border/60 rounded">
          <span className="font-mono text-[8px] tracking-widest text-accent/70 shrink-0">LIVE DATA</span>
          <span className="text-ink-4 text-[8px] mx-1">·</span>
          <p className="font-mono text-[8px] text-ink-4">
            Congress.gov · FEC · Federal Register · Census Bureau / USTR · refreshed daily
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Why this exists */}
      <WhyThisExists />

      {/* Economy + Presidential 2-col */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
        <EconomyTeaser />
        <PresidentialTeaser />
      </section>

      {/* Legislation */}
      <LegislationSection />

      {/* Recently Updated */}
      <RecentlyUpdatedSection />

      {/* Profiles */}
      <ProfilesSection />

    </div>
  )
}

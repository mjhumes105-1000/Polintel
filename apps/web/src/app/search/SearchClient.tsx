'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useMemo, Suspense } from 'react'
import Link from 'next/link'
import { CongressionalMapSection } from '@/components/map/CongressionalMapSection'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { SearchBar } from '@/components/ui/SearchBar'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles, stubProfileSlugs } from '@/data/politicians/stub-profiles'
import { allBills } from '@/data/bills'
import { committees } from '@/data/committees'
import type { PoliticianProfile } from '@political-intel/types'
import type { Bill } from '@political-intel/types'
import type { Committee } from '@/data/committees'

const fullProfiles = [newsom, ...Object.values(allDelegationProfiles)]
const allPoliticians = [...fullProfiles, ...Object.values(stubProfiles)]

interface SearchResults {
  politicians: PoliticianProfile[]
  bills: Bill[]
  committees: Committee[]
}

// Scoring: exact match > starts-with > includes; name match > role/state match
function scorePolitician(p: PoliticianProfile, q: string): number {
  const name = p.name.toLowerCase()
  if (name === q) return 10
  if (name.startsWith(q)) return 8
  if (name.includes(q)) return 6
  if (p.currentTitle.toLowerCase().includes(q)) return 3
  if (p.state.toLowerCase().includes(q)) return 2
  if (p.baselineCard.party.toLowerCase().includes(q)) return 1
  if (p.bio?.toLowerCase().includes(q)) return 1
  return 0
}

function runSearch(query: string): SearchResults {
  const q = query.toLowerCase().trim()
  if (!q) return { politicians: [], bills: [], committees: [] }

  const politicians = allPoliticians
    .map(p => ({ p, s: scorePolitician(p, q) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => {
      // Full profiles rank above stubs at same score
      const aStub = stubProfileSlugs.has(a.p.slug) ? 0 : 1
      const bStub = stubProfileSlugs.has(b.p.slug) ? 0 : 1
      return b.s - a.s || bStub - aStub
    })
    .map(({ p }) => p)

  const bills = allBills.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.number.toLowerCase().includes(q) ||
    b.summary.toLowerCase().includes(q) ||
    b.tags.some(t => t.toLowerCase().includes(q))
  )

  const matchedCommittees = committees.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.shortName.toLowerCase().includes(q) ||
    c.summary.toLowerCase().includes(q) ||
    c.jurisdiction.some(j => j.toLowerCase().includes(q))
  )

  return { politicians, bills, committees: matchedCommittees }
}

const statusColor: Record<string, string> = {
  introduced: 'text-ink-3 border-border',
  'in-committee': 'text-blue-700 border-blue-300 dark:text-blue-400 dark:border-blue-900',
  passed: 'text-teal-700 border-teal-300 dark:text-teal-400 dark:border-teal-900',
  signed: 'text-accent border-accent-muted',
  vetoed: 'text-flag border-flag-muted',
  failed: 'text-ink-3 border-border',
}
const statusLabel: Record<string, string> = {
  introduced: 'INTRODUCED', 'in-committee': 'IN COMMITTEE',
  passed: 'PASSED', signed: 'SIGNED', vetoed: 'VETOED', failed: 'FAILED',
}

function SectionHeader({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70">{label}</h2>
      <span className="font-mono text-[10px] text-ink-4 border border-border rounded px-1.5 py-0.5">{count}</span>
    </div>
  )
}

function EmptyState({ query }: { query: string }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault()
    try {
      await fetch(process.env.NEXT_PUBLIC_ALERT_ENDPOINT ?? '/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, politicianId: query.toLowerCase().replace(/\s+/g, '-'), politicianName: query, source: 'search-empty', notificationType: 'profile-added' }),
      })
    } catch { /* static site — fall through */ }
    setSent(true)
  }

  return (
    <div className="py-16 px-4 text-center max-w-md mx-auto">
      <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-2">NO RESULTS</p>
      <p className="text-base text-ink mb-1">
        We don&apos;t have a full profile for <span className="font-medium">&ldquo;{query}&rdquo;</span> yet.
      </p>
      <p className="text-sm text-ink-3 mb-8 leading-relaxed">
        Our research process requires verifying every claim against a public source before publication.
      </p>

      {sent ? (
        <div className="mb-8 px-4 py-3 bg-surface border border-teal-800 rounded text-sm text-ink-2">
          ✓ You&apos;ll be notified when a matching profile is added.
        </div>
      ) : (
        <form onSubmit={handleNotify} className="mb-8">
          <p className="text-xs text-ink-3 mb-3 font-mono tracking-wide">GET NOTIFIED WHEN THIS PROFILE IS ADDED</p>
          <div className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 px-4 py-2 bg-accent text-bg text-sm font-mono rounded hover:bg-accent/90 transition-colors"
            >
              Notify me
            </button>
          </div>
        </form>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/politicians"
          className="px-4 py-2 bg-surface border border-border rounded text-xs font-mono text-ink-3 hover:text-accent hover:border-accent transition-colors"
        >
          BROWSE ALL POLITICIANS →
        </Link>
        <Link
          href="/bills"
          className="px-4 py-2 bg-surface border border-border rounded text-xs font-mono text-ink-3 hover:text-accent hover:border-accent transition-colors"
        >
          SEARCH BILLS →
        </Link>
      </div>
    </div>
  )
}

function SearchResultsView({ query }: { query: string }) {
  const { politicians, bills, committees: matchedCommittees } = useMemo(
    () => runSearch(query),
    [query]
  )
  const total = politicians.length + bills.length + matchedCommittees.length

  if (!query.trim()) {
    return (
      <div className="mt-4">
        <div className="mb-8 pb-8 border-b border-border">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">FIND YOUR REPRESENTATIVE</p>
          <p className="text-xs text-ink-3">Click a state to see its governor and congressional delegation. CA, FL, MS, NJ, NY, and TX have district-level maps.</p>
        </div>
        <CongressionalMapSection readStateFromUrl syncStateToUrl />
      </div>
    )
  }

  if (total === 0) {
    return <EmptyState query={query} />
  }

  return (
    <div className="space-y-10">
      {/* Profiles always first */}
      {politicians.length > 0 && (
        <section>
          <SectionHeader label="PROFILES" count={politicians.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {politicians.map(p => (
              <Link
                key={p.id}
                href={`/politicians/${p.slug}`}
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
              >
                <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={36} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">{p.name}</p>
                  <p className="text-xs text-ink-3 truncate">{p.currentTitle}</p>
                </div>
                {stubProfileSlugs.has(p.slug) ? (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-amber-600 border-amber-800/60 bg-amber-950/20 shrink-0">
                    IN PROGRESS
                  </span>
                ) : (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-accent/80 border-accent/30 bg-accent/5 shrink-0">
                    PROFILE
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {bills.length > 0 && (
        <section>
          <SectionHeader label="BILLS" count={bills.length} />
          <div className="space-y-2">
            {bills.map(b => (
              <Link
                key={b.id}
                href={`/bills/${b.slug}`}
                className="flex items-center justify-between gap-4 px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-xs text-accent font-semibold">{b.number}</span>
                    <span className="text-ink-4 text-xs">·</span>
                    <span className="font-mono text-[10px] text-ink-3">{b.jurisdiction}</span>
                  </div>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors truncate">{b.title}</p>
                </div>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${statusColor[b.status] ?? 'text-ink-3 border-border'}`}>
                  {statusLabel[b.status] ?? b.status.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {matchedCommittees.length > 0 && (
        <section>
          <SectionHeader label="COMMITTEES" count={matchedCommittees.length} />
          <div className="space-y-2">
            {matchedCommittees.map(c => (
              <Link
                key={c.slug}
                href={`/committees/${c.slug}`}
                className="flex items-center justify-between gap-4 px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
              >
                <div className="min-w-0">
                  <p className="text-sm text-ink group-hover:text-accent transition-colors truncate">{c.name}</p>
                  <p className="text-xs text-ink-3 truncate">{c.summary.slice(0, 100)}…</p>
                </div>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-flag/80 border-flag-muted bg-flag-bg shrink-0">
                  {c.chamber.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function SearchPageInner() {
  const searchParams = useSearchParams()
  const initialQ = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(initialQ)

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-ink mb-6">Search</h1>

      <div className="mb-8">
        <SearchBar
          size="lg"
          placeholder="Search politicians, bills, committees…"
          navigateOnSubmit
          className="w-full"
        />
      </div>

      <SearchResultsView query={query} />
    </div>
  )
}

export function SearchClient() {
  return (
    <Suspense>
      <SearchPageInner />
    </Suspense>
  )
}

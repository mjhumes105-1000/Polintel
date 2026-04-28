'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useMemo, Suspense } from 'react'
import Link from 'next/link'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { SearchBar } from '@/components/ui/SearchBar'
import newsom from '@/data/politicians/gavin-newsom'
import { caDelegationProfiles } from '@/data/politicians/ca-delegation'
import { allCongressMembers, type CongressMember } from '@/data/legislators/slim'
import { allBills } from '@/data/bills'
import { committees } from '@/data/committees'
import type { PoliticianProfile } from '@political-intel/types'
import type { Bill } from '@political-intel/types'
import type { Committee } from '@/data/committees'

const allPoliticians = [newsom, ...Object.values(caDelegationProfiles)]

type ResultType = 'politician' | 'bill' | 'committee'

interface SearchResults {
  politicians: PoliticianProfile[]
  members: CongressMember[]
  bills: Bill[]
  committees: Committee[]
}

function score(text: string, q: string): number {
  const t = text.toLowerCase()
  if (t === q) return 3
  if (t.startsWith(q)) return 2
  if (t.includes(q)) return 1
  return 0
}

function runSearch(query: string): SearchResults {
  const q = query.toLowerCase().trim()
  if (!q) return { politicians: [], members: [], bills: [], committees: [] }

  const politicians = allPoliticians
    .filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.currentTitle.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.baselineCard.party.toLowerCase().includes(q) ||
      p.bio?.toLowerCase().includes(q)
    )
    .sort((a, b) => score(b.name, q) - score(a.name, q))

  const members = allCongressMembers
    .filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q) ||
      m.state.toLowerCase().includes(q) ||
      (m.party === 'D' && 'democrat'.includes(q)) ||
      (m.party === 'R' && 'republican'.includes(q)) ||
      (m.party === 'I' && 'independent'.includes(q))
    )
    .sort((a, b) => score(b.name, q) - score(a.name, q))
    .slice(0, 30)

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

  return { politicians, members, bills, committees: matchedCommittees }
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

const partyColor: Record<string, string> = {
  D: 'text-accent border-accent/40 bg-accent/5',
  R: 'text-red-700 border-red-300 bg-red-50 dark:text-red-400 dark:border-red-900/60 dark:bg-red-950/30',
  I: 'text-ink-3 border-border bg-surface-2',
}
const partyLabel: Record<string, string> = { D: 'DEM', R: 'REP', I: 'IND' }

function SectionHeader({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70">{label}</h2>
      <span className="font-mono text-[10px] text-ink-4 border border-border rounded px-1.5 py-0.5">{count}</span>
    </div>
  )
}

function SearchResults({ query }: { query: string }) {
  const { politicians, members, bills, committees: matchedCommittees } = useMemo(
    () => runSearch(query),
    [query]
  )
  const total = politicians.length + members.length + bills.length + matchedCommittees.length

  if (!query.trim()) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-3 text-sm">Enter a search term above to get started.</p>
      </div>
    )
  }

  if (total === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-2 text-sm mb-1">No results for <span className="text-ink font-medium">"{query}"</span></p>
        <p className="text-ink-3 text-xs">Try searching by name, bill number, committee name, or topic.</p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
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
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-accent/80 border-accent/30 bg-accent/5 shrink-0">
                  PROFILE
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {members.length > 0 && (
        <section>
          <SectionHeader label="CONGRESS MEMBERS" count={members.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {members.map(m => (
              <a
                key={m.bioguide}
                href={`https://bioguide.congress.gov/search/bio/${m.bioguide}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
              >
                <PoliticianPhoto
                  name={m.name}
                  photoUrl={`https://theunitedstates.io/images/congress/225x275/${m.bioguide}.jpg`}
                  size={36}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">{m.name}</p>
                  <p className="text-xs text-ink-3 truncate">{m.title}</p>
                </div>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${partyColor[m.party] ?? ''}`}>
                  {partyLabel[m.party] ?? m.party}
                </span>
              </a>
            ))}
          </div>
          {members.length === 30 && (
            <p className="text-xs text-ink-4 mt-2 font-mono">Showing top 30 — refine your search for more precise results.</p>
          )}
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
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-ink mb-6">Search</h1>

      <div className="mb-8">
        <SearchBar
          size="lg"
          placeholder="Search politicians, bills, committees…"
          navigateOnSubmit
          className="w-full"
        />
      </div>

      <SearchResults query={query} />
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

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles, stubProfileSlugs } from '@/data/politicians/stub-profiles'
import type { PoliticianProfile } from '@political-intel/types'

const fullProfiles: PoliticianProfile[] = [
  newsom,
  ...Object.values(allDelegationProfiles),
]

const allProfiles: PoliticianProfile[] = [
  ...fullProfiles,
  ...Object.values(stubProfiles),
]

// Derive chamber from currentTitle
function getChamber(p: PoliticianProfile): 'Senate' | 'House' | 'Executive' | 'Other' {
  const t = p.currentTitle.toLowerCase()
  if (t.includes('senator') || t.includes('senate')) return 'Senate'
  if (t.includes('representative') || t.includes('house')) return 'House'
  if (t.includes('president') || t.includes('vice president') || t.includes('governor')) return 'Executive'
  return 'Other'
}

type ChamberFilter = 'All' | 'Senate' | 'House' | 'Executive'
type CoverageFilter = 'All' | 'Full Profile' | 'In Progress'
type SortKey = 'name' | 'state' | 'coverage'

const CHAMBERS: ChamberFilter[] = ['All', 'Senate', 'House', 'Executive']
const COVERAGE: CoverageFilter[] = ['All', 'Full Profile', 'In Progress']

const partyDot: Record<string, string> = {
  Democratic: 'bg-ink-3',
  Democrat: 'bg-ink-3',
  Republican: 'bg-ink-3',
  Independent: 'bg-ink-3',
}

function PoliticianCard({ p }: { p: PoliticianProfile }) {
  const isStub = stubProfileSlugs.has(p.slug)
  const chamber = getChamber(p)
  const lastUpdated = p.sources[0]?.retrievedAt ?? null

  return (
    <Link
      href={`/politicians/${p.slug}`}
      className="group flex flex-col gap-3 p-4 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors"
    >
      <div className="flex items-start gap-3">
        <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={48} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-tight truncate">
            {p.name}
          </p>
          <p className="text-xs text-ink-3 leading-snug mt-0.5 line-clamp-2">{p.currentTitle}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1.5 py-0.5">
            {p.state}
          </span>
          <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1.5 py-0.5">
            {chamber}
          </span>
          <span className="font-mono text-[9px] text-ink-4">
            {p.baselineCard.party}
          </span>
        </div>

        {isStub ? (
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-amber-600 border-amber-800/60 bg-amber-950/20">
            IN PROGRESS
          </span>
        ) : (
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-accent/80 border-accent/30 bg-accent/5">
            FULL PROFILE
          </span>
        )}
      </div>

      {lastUpdated && (
        <p className="font-mono text-[9px] text-ink-4">
          Updated {lastUpdated}
        </p>
      )}
    </Link>
  )
}

export default function PoliticiansDirectoryPage() {
  const [query, setQuery] = useState('')
  const [chamberFilter, setChamberFilter] = useState<ChamberFilter>('All')
  const [partyFilter, setPartyFilter] = useState('All')
  const [coverageFilter, setCoverageFilter] = useState<CoverageFilter>('All')
  const [stateFilter, setStateFilter] = useState('All')
  const [sortKey, setSortKey] = useState<SortKey>('name')

  const allStates = useMemo(() => {
    const states = [...new Set(allProfiles.map(p => p.state))].sort()
    return ['All', ...states]
  }, [])

  const allParties = useMemo(() => {
    const parties = [...new Set(allProfiles.map(p => p.baselineCard.party))].sort()
    return ['All', ...parties]
  }, [])

  const filtered = useMemo(() => {
    let list = allProfiles

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.currentTitle.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.baselineCard.party.toLowerCase().includes(q)
      )
    }

    if (chamberFilter !== 'All') {
      list = list.filter(p => getChamber(p) === chamberFilter)
    }

    if (partyFilter !== 'All') {
      list = list.filter(p => p.baselineCard.party === partyFilter)
    }

    if (stateFilter !== 'All') {
      list = list.filter(p => p.state === stateFilter)
    }

    if (coverageFilter === 'Full Profile') {
      list = list.filter(p => !stubProfileSlugs.has(p.slug))
    } else if (coverageFilter === 'In Progress') {
      list = list.filter(p => stubProfileSlugs.has(p.slug))
    }

    // Sort
    list = [...list].sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name)
      if (sortKey === 'state') return a.state.localeCompare(b.state) || a.name.localeCompare(b.name)
      if (sortKey === 'coverage') {
        const aFull = stubProfileSlugs.has(a.slug) ? 1 : 0
        const bFull = stubProfileSlugs.has(b.slug) ? 1 : 0
        return aFull - bFull || a.name.localeCompare(b.name)
      }
      return 0
    })

    return list
  }, [query, chamberFilter, partyFilter, stateFilter, coverageFilter, sortKey])

  const recentlyUpdated = useMemo(() =>
    fullProfiles
      .filter(p => p.sources[0]?.retrievedAt)
      .sort((a, b) => (b.sources[0]?.retrievedAt ?? '').localeCompare(a.sources[0]?.retrievedAt ?? ''))
      .slice(0, 5),
    []
  )

  function FilterChip({
    label,
    active,
    onClick,
  }: {
    label: string
    active: boolean
    onClick: () => void
  }) {
    return (
      <button
        onClick={onClick}
        className={[
          'font-mono text-[9px] tracking-widest px-3 py-1.5 rounded border transition-colors',
          active
            ? 'bg-accent/15 text-accent border-accent/40'
            : 'text-ink-3 border-border hover:text-ink-2 hover:border-ink-3',
        ].join(' ')}
      >
        {label.toUpperCase()}
      </button>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">DIRECTORY</p>
        <h1 className="text-2xl font-semibold text-ink mb-2">Politicians</h1>
        <p className="text-sm text-ink-3 leading-relaxed max-w-2xl">
          {allProfiles.length} politicians tracked — {fullProfiles.length} with full public-record profiles covering all 50 states and territories.
          Browse by chamber, state, or party.
        </p>
      </div>

      {/* Recently updated strip */}
      {recentlyUpdated.length > 0 && (
        <div className="mb-8">
          <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-3">RECENTLY UPDATED</p>
          <div className="flex gap-2 flex-wrap">
            {recentlyUpdated.map(p => (
              <Link
                key={p.slug}
                href={`/politicians/${p.slug}`}
                className="flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded hover:border-accent transition-colors group"
              >
                <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={20} />
                <span className="text-xs text-ink group-hover:text-accent transition-colors">{p.name}</span>
                {p.sources[0]?.retrievedAt && (
                  <span className="font-mono text-[9px] text-ink-4">{p.sources[0].retrievedAt}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-4 pointer-events-none select-none text-sm">⌕</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by name, title, or state…"
            className="w-full bg-surface border border-border rounded pl-9 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors font-mono text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-[9px] tracking-widest text-ink-4">CHAMBER</p>
          <div className="flex gap-1.5 flex-wrap">
            {CHAMBERS.map(c => (
              <FilterChip key={c} label={c} active={chamberFilter === c} onClick={() => setChamberFilter(c)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-[9px] tracking-widest text-ink-4">COVERAGE</p>
          <div className="flex gap-1.5 flex-wrap">
            {COVERAGE.map(c => (
              <FilterChip key={c} label={c} active={coverageFilter === c} onClick={() => setCoverageFilter(c)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-[9px] tracking-widest text-ink-4">SORT</p>
          <div className="flex gap-1.5 flex-wrap">
            {(['name', 'state', 'coverage'] as SortKey[]).map(k => (
              <FilterChip key={k} label={k} active={sortKey === k} onClick={() => setSortKey(k)} />
            ))}
          </div>
        </div>

        {stateFilter !== 'All' && (
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[9px] tracking-widest text-ink-4">STATE</p>
            <FilterChip label={stateFilter} active onClick={() => setStateFilter('All')} />
          </div>
        )}
      </div>

      {/* State quick-select */}
      <div className="mb-6">
        <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">STATE</p>
        <div className="flex gap-1.5 flex-wrap">
          {allStates.map(s => (
            <button
              key={s}
              onClick={() => setStateFilter(s)}
              className={[
                'font-mono text-[9px] px-2 py-1 rounded border transition-colors',
                stateFilter === s
                  ? 'bg-accent/15 text-accent border-accent/40'
                  : 'text-ink-4 border-border hover:text-ink-2',
              ].join(' ')}
            >
              {s === 'All' ? 'ALL' : s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/70">
          {filtered.length} POLITICIAN{filtered.length !== 1 ? 'S' : ''}
        </p>
        {(query || chamberFilter !== 'All' || partyFilter !== 'All' || stateFilter !== 'All' || coverageFilter !== 'All') && (
          <button
            onClick={() => { setQuery(''); setChamberFilter('All'); setPartyFilter('All'); setStateFilter('All'); setCoverageFilter('All') }}
            className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
          >
            CLEAR FILTERS
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-border rounded px-6 py-12 text-center">
          <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-2">NO RESULTS</p>
          <p className="text-sm text-ink-3">Try adjusting your filters or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(p => <PoliticianCard key={p.slug} p={p} />)}
        </div>
      )}
    </div>
  )
}

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import newsom from '@/data/politicians/gavin-newsom'
import tomCotton from '@/data/politicians/tom-cotton'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles, stubProfileSlugs } from '@/data/politicians/stub-profiles'
import type { PoliticianProfile } from '@political-intel/types'
import { ExecutiveBranchSection } from '@/components/executive/ExecutiveBranchSection'
import { CongressionalLeadershipSection } from '@/components/legislative/CongressionalLeadershipSection'

const fullProfiles: PoliticianProfile[] = [
  newsom,
  tomCotton,
  ...Object.values(allDelegationProfiles),
]

// Deduplicate by slug — fullProfiles (richer data) wins over stubs
const _profileMap = new Map<string, PoliticianProfile>()
fullProfiles.forEach(p => _profileMap.set(p.slug, p))
Object.values(stubProfiles).forEach(p => { if (!_profileMap.has(p.slug)) _profileMap.set(p.slug, p) })
const allProfiles: PoliticianProfile[] = [..._profileMap.values()]

// Trump and Vance shown via ExecutiveBranchSection — exclude from grid
const EXEC_ADMIN_SLUGS = new Set(['donald-trump', 'jd-vance'])

type Tab = 'executive' | 'legislative' | 'state'
type SortKey = 'name' | 'state' | 'coverage'
type LegType = 'all' | 'senator' | 'representative' | 'delegate'

function getSection(p: PoliticianProfile): 'executive' | 'legislative' | 'state' {
  const t = p.currentTitle.toLowerCase()
  if (t.includes('senator') || t.includes('senate')) return 'legislative'
  if (t.includes('representative') || t.includes('house')) return 'legislative'
  if (t.includes('delegate') || t.includes('resident commissioner')) return 'legislative'
  if (t.includes('governor')) return 'state'
  return 'executive'
}

function getLegislativeType(p: PoliticianProfile): 'senator' | 'representative' | 'delegate' {
  const t = p.currentTitle.toLowerCase()
  if (t.includes('senator') || t.includes('senate')) return 'senator'
  if (t.includes('delegate') || t.includes('resident commissioner')) return 'delegate'
  return 'representative'
}

// Profiles shown in the grids (excluding those in ExecutiveBranchSection)
const gridProfiles = allProfiles.filter(p => !EXEC_ADMIN_SLUGS.has(p.slug))

function PoliticianCard({ p }: { p: PoliticianProfile }) {
  const isStub = stubProfileSlugs.has(p.slug)
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
          {p.state && p.state !== 'National' && (
            <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1.5 py-0.5">
              {p.state}
            </span>
          )}
          <span className="font-mono text-[9px] text-ink-4">{p.baselineCard.party}</span>
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
        <p className="font-mono text-[9px] text-ink-4">Updated {lastUpdated}</p>
      )}
    </Link>
  )
}

export default function PoliticiansDirectoryPage() {
  const [tab, setTab]               = useState<Tab>('executive')
  const [query, setQuery]           = useState('')
  const [partyFilter, setPartyFilter] = useState('All')
  const [stateFilter, setStateFilter] = useState('All')
  const [sortKey, setSortKey]       = useState<SortKey>('name')
  const [legType, setLegType]       = useState<LegType>('all')

  // Static counts for tab labels
  const counts = useMemo(() => ({
    legislative: gridProfiles.filter(p => getSection(p) === 'legislative').length,
    state:       gridProfiles.filter(p => getSection(p) === 'state').length,
    executive:   gridProfiles.filter(p => getSection(p) === 'executive').length,
  }), [])

  const tabProfiles = useMemo(
    () => gridProfiles.filter(p => getSection(p) === tab),
    [tab]
  )

  const allStates = useMemo(() => {
    const states = [...new Set(tabProfiles.map(p => p.state).filter(s => s && s !== 'National'))].sort()
    return ['All', ...states]
  }, [tabProfiles])

  const allParties = useMemo(() => {
    const parties = [...new Set(tabProfiles.map(p => p.baselineCard.party))].sort()
    return ['All', ...parties]
  }, [tabProfiles])

  const filtered = useMemo(() => {
    let list = tabProfiles

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.currentTitle.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.baselineCard.party.toLowerCase().includes(q)
      )
    }

    if (partyFilter !== 'All') list = list.filter(p => p.baselineCard.party === partyFilter)
    if (stateFilter !== 'All') list = list.filter(p => p.state === stateFilter)
    if (tab === 'legislative' && legType !== 'all') {
      list = list.filter(p => getLegislativeType(p) === legType)
    }

    return [...list].sort((a, b) => {
      if (sortKey === 'name')     return a.name.localeCompare(b.name)
      if (sortKey === 'state')    return a.state.localeCompare(b.state) || a.name.localeCompare(b.name)
      if (sortKey === 'coverage') {
        const aFull = stubProfileSlugs.has(a.slug) ? 1 : 0
        const bFull = stubProfileSlugs.has(b.slug) ? 1 : 0
        return aFull - bFull || a.name.localeCompare(b.name)
      }
      return 0
    })
  }, [tabProfiles, query, partyFilter, stateFilter, sortKey, legType, tab])

  const isFiltering = !!(query || partyFilter !== 'All' || stateFilter !== 'All')

  function switchTab(t: Tab) {
    setTab(t)
    setQuery('')
    setPartyFilter('All')
    setStateFilter('All')
    setLegType('all')
  }

  function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
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

  const TABS: { id: Tab; label: string; count: number | null }[] = [
    { id: 'executive',   label: 'Executive',   count: null },
    { id: 'legislative', label: 'Legislative', count: counts.legislative },
    { id: 'state',       label: 'State',       count: counts.state },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Page header */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">DIRECTORY</p>
        <h1 className="text-2xl font-semibold text-ink mb-2">Politicians</h1>
        <p className="text-sm text-ink-3 leading-relaxed max-w-2xl">
          {allProfiles.length} politicians tracked across the Executive, Legislative, and State branches.
        </p>
      </div>

      {/* ── TAB BAR ──────────────────────────────────────────────────────────── */}
      <div className="flex gap-0 border border-border rounded-lg overflow-hidden mb-8">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTab(t.id)}
            className={[
              'flex-1 px-4 py-3 font-mono text-[10px] tracking-widest transition-colors border-r border-border last:border-r-0',
              tab === t.id
                ? 'bg-accent/10 text-accent'
                : 'text-ink-4 hover:text-ink-3 hover:bg-surface-2',
            ].join(' ')}
          >
            {t.label.toUpperCase()}
            {t.count !== null && (
              <span className="ml-1.5 opacity-60">({t.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* ── EXECUTIVE TAB ────────────────────────────────────────────────────── */}
      {tab === 'executive' && (
        <div id="executive">
          <ExecutiveBranchSection />

          {/* Former/other executives (Biden, Obama, Harris, etc.) */}
          {counts.executive > 0 && (
            <div className="mt-2">
              <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3">FORMER & OTHER</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {gridProfiles
                  .filter(p => getSection(p) === 'executive')
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(p => <PoliticianCard key={p.slug} p={p} />)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── LEGISLATIVE & STATE TABS ─────────────────────────────────────────── */}
      {tab !== 'executive' && (
        <>
          {/* Congressional leadership header — Legislative tab only */}
          {tab === 'legislative' && <CongressionalLeadershipSection />}

          {/* Member type filter — Legislative tab only */}
          {tab === 'legislative' && (
            <div className="flex items-center gap-2 mb-5">
              <p className="font-mono text-[9px] tracking-widest text-ink-4 shrink-0">TYPE</p>
              <div className="flex gap-1.5 flex-wrap">
                {([
                  { id: 'all',            label: 'All Members' },
                  { id: 'senator',        label: 'Senators' },
                  { id: 'representative', label: 'Representatives' },
                  { id: 'delegate',       label: 'Delegates' },
                ] as { id: LegType; label: string }[]).map(({ id, label }) => (
                  <FilterChip key={id} label={label} active={legType === id} onClick={() => setLegType(id)} />
                ))}
              </div>
            </div>
          )}

          {/* Search */}
          <div className="relative mb-4">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-4 pointer-events-none select-none text-sm">⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${tab} politicians…`}
              className="w-full bg-surface border border-border rounded pl-9 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors font-mono text-xs"
              >✕</button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[9px] tracking-widest text-ink-4">PARTY</p>
              <div className="flex gap-1.5 flex-wrap">
                {allParties.map(p => (
                  <FilterChip key={p} label={p} active={partyFilter === p} onClick={() => setPartyFilter(p)} />
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
          </div>

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

          {/* Results count / clear */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[9px] text-ink-4">
              {filtered.length} {tab} politician{filtered.length !== 1 ? 's' : ''}
              {isFiltering && ` of ${tabProfiles.length}`}
            </p>
            {isFiltering && (
              <button
                onClick={() => { setQuery(''); setPartyFilter('All'); setStateFilter('All') }}
                className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
              >
                CLEAR FILTERS
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="border border-border rounded px-6 py-12 text-center">
              <p className="font-mono text-[10px] tracking-widest text-ink-4">NO MATCHES</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map(p => <PoliticianCard key={p.slug} p={p} />)}
            </div>
          )}
        </>
      )}
    </div>
  )
}

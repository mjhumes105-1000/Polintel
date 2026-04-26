'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { countries, GLOBAL_SUMMARY, formatBillions, type CountrySummary } from '@/data/economy/countries'
import { CompareButtonPill, CompareButtonInline, CompareButtonIcon } from '@/components/economy/CompareButton'
import { track } from '@/lib/analytics'

// ─── Types ────────────────────────────────────────────────────────────────────

type Filter = 'all' | 'deficit' | 'surplus' | 'fta' | 'aid'
type SortKey = 'rank' | 'volume' | 'balance' | 'imports' | 'exports'
type SortDir = 'asc' | 'desc'
type ViewMode = 'cards' | 'table'

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Partners' },
  { id: 'deficit', label: 'Trade Deficit' },
  { id: 'surplus', label: 'Trade Surplus' },
  { id: 'fta', label: 'FTA Partners' },
  { id: 'aid', label: 'Aid Recipients' },
]

const REGIONS = ['All Regions', 'Americas', 'East Asia', 'Southeast Asia', 'South Asia', 'Europe']

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'rank', label: 'Partner Rank' },
  { key: 'volume', label: 'Trade Volume' },
  { key: 'imports', label: 'U.S. Imports' },
  { key: 'exports', label: 'U.S. Exports' },
  { key: 'balance', label: 'Trade Balance' },
]

// Featured slugs get the large editorial treatment at the top
const FEATURED_SLUGS = ['mexico', 'canada', 'china']

// ─── Utilities ────────────────────────────────────────────────────────────────

function tradeVolume(c: CountrySummary) {
  return c.usExportsUSD + c.usImportsUSD
}

function sortCountries(arr: CountrySummary[], key: SortKey, dir: SortDir): CountrySummary[] {
  return [...arr].sort((a, b) => {
    const av =
      key === 'rank' ? a.tradePartnerRank
      : key === 'volume' ? tradeVolume(a)
      : key === 'imports' ? a.usImportsUSD
      : key === 'exports' ? a.usExportsUSD
      : a.tradeBalanceUSD
    const bv =
      key === 'rank' ? b.tradePartnerRank
      : key === 'volume' ? tradeVolume(b)
      : key === 'imports' ? b.usImportsUSD
      : key === 'exports' ? b.usExportsUSD
      : b.tradeBalanceUSD
    return dir === 'asc' ? av - bv : bv - av
  })
}

function balanceStatement(c: CountrySummary): string {
  const abs = formatBillions(Math.abs(c.tradeBalanceUSD))
  if (c.tradeBalanceUSD < 0) return `The U.S. runs a ${abs} goods deficit with ${c.name}.`
  if (c.tradeBalanceUSD > 0) return `The U.S. runs a ${abs} goods surplus with ${c.name}.`
  return `The U.S. trade relationship with ${c.name} is roughly balanced.`
}

// ─── Chips & Atoms ───────────────────────────────────────────────────────────

function BalanceChip({ balance }: { balance: number }) {
  if (balance >= 0) {
    return (
      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950/30 shrink-0">
        SURPLUS
      </span>
    )
  }
  return (
    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-flag border-flag-muted bg-flag-bg shrink-0">
      DEFICIT
    </span>
  )
}

function FTAChip({ name }: { name: string }) {
  return (
    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-accent border-accent/40 bg-accent/5 shrink-0">
      {name}
    </span>
  )
}

function AidChip({ amount }: { amount: number }) {
  return (
    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-ink-3 border-border shrink-0">
      AID · {formatBillions(amount)}/yr
    </span>
  )
}

function BalanceValue({ balance }: { balance: number }) {
  const text = (balance >= 0 ? '+' : '−') + formatBillions(Math.abs(balance))
  return (
    <span className={`font-mono tabular-nums ${balance >= 0 ? 'text-teal-600 dark:text-teal-400' : 'text-flag'}`}>
      {text}
    </span>
  )
}

// ─── Global Metrics Bar ───────────────────────────────────────────────────────

function GlobalMetricsBar() {
  const totalAid = countries.reduce((sum, c) => sum + (c.annualAidUSD ?? 0), 0)
  const deficitCountries = countries.filter((c) => c.tradeBalanceUSD < 0).length
  const ftaCountries = countries.filter((c) => c.hasFTA).length

  const cells = [
    {
      label: 'TOTAL TRADE VOLUME',
      value: formatBillions(GLOBAL_SUMMARY.totalTradeUSD),
      sub: `FY${GLOBAL_SUMMARY.dataYear}`,
      color: 'text-ink',
    },
    {
      label: 'GOODS TRADE DEFICIT',
      value: formatBillions(GLOBAL_SUMMARY.totalDeficitUSD),
      sub: 'Aggregate',
      color: 'text-flag',
    },
    {
      label: 'PARTNERS TRACKED',
      value: String(countries.length),
      sub: `${deficitCountries} deficit · ${countries.length - deficitCountries} surplus`,
      color: 'text-ink',
    },
    {
      label: 'FTA PARTNERS',
      value: String(ftaCountries),
      sub: `of ${countries.length} tracked`,
      color: 'text-teal-600 dark:text-teal-400',
    },
    {
      label: 'U.S. AID OUTFLOWS',
      value: formatBillions(totalAid),
      sub: 'Annual · tracked partners',
      color: 'text-ink-2',
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border rounded overflow-hidden mb-10">
      {cells.map((cell) => (
        <div key={cell.label} className="bg-surface px-4 py-4">
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5 leading-tight">{cell.label}</p>
          <p className={`font-mono text-lg tabular-nums ${cell.color}`}>{cell.value}</p>
          <p className="font-mono text-[9px] text-ink-4 mt-0.5">{cell.sub}</p>
        </div>
      ))}
    </div>
  )
}

// ─── Country Search ───────────────────────────────────────────────────────────

function CountrySearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const results = query.length >= 1
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.region.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleChange(val: string) {
    setQuery(val)
    onSearch(val)
    setOpen(val.length > 0)

    if (searchTimer.current) clearTimeout(searchTimer.current)
    if (val.length >= 2) {
      searchTimer.current = setTimeout(() => {
        const count = countries.filter((c) =>
          c.name.toLowerCase().includes(val.toLowerCase()) ||
          c.region.toLowerCase().includes(val.toLowerCase())
        ).length
        track('economy.search.queried', {
          query: val,
          result_count: Math.min(count, 6),
          surface: 'landing',
        })
      }, 600)
    }
  }

  function handleClear() {
    setQuery('')
    onSearch('')
    setOpen(false)
    if (searchTimer.current) clearTimeout(searchTimer.current)
  }

  return (
    <div ref={ref} className="relative max-w-lg">
      <div className="flex items-center gap-2 bg-surface border border-border rounded px-3 py-2.5 focus-within:border-accent transition-colors">
        <span className="font-mono text-[10px] text-ink-4 shrink-0">SEARCH</span>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => query.length > 0 && setOpen(true)}
          onKeyDown={(e) => e.key === 'Escape' && handleClear()}
          placeholder="Country name or region…"
          className="flex-1 bg-transparent text-sm text-ink placeholder-ink-4 focus:outline-none"
        />
        {query && (
          <button
            onClick={handleClear}
            className="font-mono text-[10px] text-ink-4 hover:text-ink-2 transition-colors shrink-0"
          >
            ✕
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full mt-1 left-0 right-0 z-30 bg-surface border border-border rounded overflow-hidden shadow-lg">
          {results.map((c) => (
            <Link
              key={c.slug}
              href={`/economy/${c.slug}`}
              onClick={() => {
                setOpen(false)
                track('economy.search.result_clicked', {
                  slug: c.slug,
                  name: c.name,
                  rank: c.tradePartnerRank,
                  query,
                  surface: 'landing',
                })
              }}
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-surface-2 transition-colors"
            >
              <span className="text-lg leading-none shrink-0">{c.flagEmoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-ink leading-tight">{c.name}</p>
                <p className="font-mono text-[9px] text-ink-4">{c.region} · #{c.tradePartnerRank}</p>
              </div>
              <BalanceChip balance={c.tradeBalanceUSD} />
            </Link>
          ))}
        </div>
      )}

      {open && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-1 left-0 right-0 z-30 bg-surface border border-border rounded px-3 py-3">
          <p className="font-mono text-[10px] text-ink-4">No partners match "{query}"</p>
        </div>
      )}
    </div>
  )
}

// ─── Featured Country Card ────────────────────────────────────────────────────

function FeaturedCard({ country }: { country: CountrySummary }) {
  const maxTrade = tradeVolume(countries[0])
  const importPct = Math.round((country.usImportsUSD / tradeVolume(country)) * 100)
  const exportPct = 100 - importPct

  return (
    <div className="relative bg-surface border border-border rounded overflow-hidden group hover:border-accent transition-colors">
      {/* Rank badge */}
      <div className="absolute top-3 right-3">
        <span className="font-mono text-[9px] text-ink-4">#{country.tradePartnerRank}</span>
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-4xl leading-none shrink-0">{country.flagEmoji}</span>
          <div>
            <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors leading-tight">
              {country.name}
            </h3>
            <p className="font-mono text-[9px] text-ink-4 mt-0.5">{country.region}</p>
            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              <BalanceChip balance={country.tradeBalanceUSD} />
              {country.hasFTA && country.ftaName && <FTAChip name={country.ftaName} />}
            </div>
          </div>
        </div>

        {/* Framing sentence */}
        <p className="text-xs text-ink-3 leading-relaxed mb-4">{balanceStatement(country)}</p>

        {/* Trade bars */}
        <div className="space-y-2 mb-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-mono text-[9px] text-ink-4">IMPORTS FROM</span>
              <span className="font-mono text-[9px] text-ink-3 tabular-nums">
                {formatBillions(country.usImportsUSD)}
              </span>
            </div>
            <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent/50 rounded-full"
                style={{ width: `${Math.min(100, (country.usImportsUSD / maxTrade) * 100)}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-mono text-[9px] text-ink-4">EXPORTS TO</span>
              <span className="font-mono text-[9px] text-ink-3 tabular-nums">
                {formatBillions(country.usExportsUSD)}
              </span>
            </div>
            <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600/70 rounded-full"
                style={{ width: `${Math.min(100, (country.usExportsUSD / maxTrade) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Composition stat */}
        <p className="font-mono text-[10px] text-ink-4 mb-4">
          Import-heavy · {importPct}% of bilateral flow
        </p>

        {/* Top categories */}
        <div className="pt-3 border-t border-border space-y-1 mb-4">
          <p className="text-[10px] text-ink-3">
            <span className="text-ink-4 font-mono">TOP IMPORT · </span>
            {country.topImport}
          </p>
          <p className="text-[10px] text-ink-3">
            <span className="text-ink-4 font-mono">TOP EXPORT · </span>
            {country.topExport}
          </p>
          {country.aidRecipient && country.annualAidUSD && (
            <p className="text-[10px] text-ink-3">
              <span className="text-ink-4 font-mono">U.S. AID · </span>
              {formatBillions(country.annualAidUSD)}/yr
            </p>
          )}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href={`/economy/${country.slug}`}
            className="flex-1 text-center font-mono text-[9px] tracking-widest py-2 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
          >
            VIEW PROFILE →
          </Link>
          <CompareButtonPill slug={country.slug} />
        </div>
      </div>
    </div>
  )
}

// ─── Country Card (grid) ─────────────────────────────────────────────────────

function CountryCard({ country }: { country: CountrySummary }) {
  const maxTrade = tradeVolume(countries[0])

  return (
    <div className="relative">
      <Link
        href={`/economy/${country.slug}`}
        className="block bg-surface border border-border rounded p-4 hover:border-accent hover:bg-surface-2 transition-colors group"
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl leading-none">{country.flagEmoji}</span>
            <div>
              <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-tight">
                {country.name}
              </p>
              <p className="font-mono text-[9px] text-ink-4 mt-0.5">{country.region}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="font-mono text-[9px] text-ink-4">#{country.tradePartnerRank}</span>
            <BalanceChip balance={country.tradeBalanceUSD} />
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-[9px] text-ink-4">IMPORTS FROM</span>
              <span className="font-mono text-[9px] text-ink-3 tabular-nums">
                {formatBillions(country.usImportsUSD)}
              </span>
            </div>
            <div className="h-1 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent/50 rounded-full"
                style={{ width: `${Math.min(100, (country.usImportsUSD / maxTrade) * 100)}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-[9px] text-ink-4">EXPORTS TO</span>
              <span className="font-mono text-[9px] text-ink-3 tabular-nums">
                {formatBillions(country.usExportsUSD)}
              </span>
            </div>
            <div className="h-1 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600/70 rounded-full"
                style={{ width: `${Math.min(100, (country.usExportsUSD / maxTrade) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        <div className="pt-2.5 border-t border-border space-y-1">
          <p className="text-[10px] text-ink-3">
            <span className="text-ink-4 font-mono">TOP IMPORT · </span>
            {country.topImport}
          </p>
          <p className="text-[10px] text-ink-3">
            <span className="text-ink-4 font-mono">TOP EXPORT · </span>
            {country.topExport}
          </p>
        </div>

        <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
          {country.hasFTA && country.ftaName && <FTAChip name={country.ftaName} />}
          {country.aidRecipient && country.annualAidUSD && (
            <AidChip amount={country.annualAidUSD} />
          )}
        </div>
      </Link>

      {/* Compare button — sibling of Link (not nested) to keep HTML valid */}
      <div className="absolute bottom-3 right-3 z-10">
        <CompareButtonIcon slug={country.slug} />
      </div>
    </div>
  )
}

// ─── Country Table ────────────────────────────────────────────────────────────

function SortHeader({
  label,
  sortKey,
  currentKey,
  currentDir,
  onSort,
}: {
  label: string
  sortKey: SortKey
  currentKey: SortKey
  currentDir: SortDir
  onSort: (key: SortKey) => void
}) {
  const active = currentKey === sortKey
  return (
    <button
      onClick={() => onSort(sortKey)}
      className={[
        'font-mono text-[9px] tracking-widest flex items-center gap-1 hover:text-ink-2 transition-colors',
        active ? 'text-accent' : 'text-ink-4',
      ].join(' ')}
    >
      {label}
      <span className="text-[8px]">{active ? (currentDir === 'desc' ? '↓' : '↑') : '↕'}</span>
    </button>
  )
}

function CountryTable({
  data,
  sortKey,
  sortDir,
  onSort,
}: {
  data: CountrySummary[]
  sortKey: SortKey
  sortDir: SortDir
  onSort: (key: SortKey) => void
}) {
  return (
    <div className="border border-border rounded overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2rem_1fr_6rem_6rem_6rem_6rem_5rem_5.5rem] gap-3 px-4 py-2.5 bg-surface-2 border-b border-border items-center">
        <span className="font-mono text-[9px] text-ink-4">#</span>
        <span className="font-mono text-[9px] text-ink-4">COUNTRY</span>
        <SortHeader label="IMPORTS" sortKey="imports" currentKey={sortKey} currentDir={sortDir} onSort={onSort} />
        <SortHeader label="EXPORTS" sortKey="exports" currentKey={sortKey} currentDir={sortDir} onSort={onSort} />
        <SortHeader label="BALANCE" sortKey="balance" currentKey={sortKey} currentDir={sortDir} onSort={onSort} />
        <SortHeader label="VOLUME" sortKey="volume" currentKey={sortKey} currentDir={sortDir} onSort={onSort} />
        <span className="font-mono text-[9px] text-ink-4">FTA</span>
        <span className="font-mono text-[9px] text-ink-4">ACTIONS</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        {data.map((c) => (
          <div
            key={c.slug}
            className="grid grid-cols-[2rem_1fr_6rem_6rem_6rem_6rem_5rem_5.5rem] gap-3 px-4 py-3 items-center hover:bg-surface-2 transition-colors"
          >
            <span className="font-mono text-[10px] text-ink-4 tabular-nums">{c.tradePartnerRank}</span>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base leading-none shrink-0">{c.flagEmoji}</span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-ink leading-tight truncate">{c.name}</p>
                <p className="font-mono text-[9px] text-ink-4 truncate">{c.region}</p>
              </div>
            </div>

            <span className="font-mono text-[10px] text-ink-3 tabular-nums">
              {formatBillions(c.usImportsUSD)}
            </span>

            <span className="font-mono text-[10px] text-ink-3 tabular-nums">
              {formatBillions(c.usExportsUSD)}
            </span>

            <BalanceValue balance={c.tradeBalanceUSD} />

            <span className="font-mono text-[10px] text-ink-2 tabular-nums">
              {formatBillions(tradeVolume(c))}
            </span>

            <div>
              {c.hasFTA && c.ftaName ? (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-accent border-accent/40 bg-accent/5">
                  {c.ftaName}
                </span>
              ) : (
                <span className="font-mono text-[9px] text-ink-4">—</span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <Link
                href={`/economy/${c.slug}`}
                className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
              >
                VIEW →
              </Link>
              <span className="text-ink-4 text-[9px]">·</span>
              <CompareButtonInline slug={c.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Compare Callout ─────────────────────────────────────────────────────────

function CompareCallout() {
  return (
    <div className="mt-10 border border-accent/20 bg-accent/5 rounded p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">COMPARE MODE</p>
        <p className="text-sm font-medium text-ink mb-1">Side-by-side country comparison</p>
        <p className="text-xs text-ink-3 leading-relaxed max-w-md">
          Hit <span className="font-mono text-ink-2">+ COMPARE</span> on any two partners — a tray appears at the bottom. When you have two, launch the full comparison.
        </p>
      </div>
      <Link
        href="/economy/compare"
        onClick={() => track('economy.compare.cta_clicked', { source: 'landing_callout' })}
        className="shrink-0 font-mono text-[10px] tracking-widest px-5 py-3 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
      >
        OPEN COMPARE →
      </Link>
    </div>
  )
}

// ─── Filter / Sort / View Controls ───────────────────────────────────────────

function Controls({
  filter,
  region,
  sortKey,
  sortDir,
  view,
  onFilter,
  onRegion,
  onSort,
  onView,
  resultCount,
  deficitTotal,
  surplusTotal,
}: {
  filter: Filter
  region: string
  sortKey: SortKey
  sortDir: SortDir
  view: ViewMode
  onFilter: (f: Filter) => void
  onRegion: (r: string) => void
  onSort: (k: SortKey) => void
  onView: (v: ViewMode) => void
  resultCount: number
  deficitTotal: number
  surplusTotal: number
}) {
  return (
    <div className="space-y-3 mb-5">
      <div className="flex items-center gap-3 flex-wrap">
        {/* Balance filter */}
        <div className="flex items-center gap-0.5 bg-surface border border-border rounded p-0.5">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => onFilter(f.id)}
              className={[
                'font-mono text-[9px] tracking-widest px-2.5 py-1.5 rounded transition-colors',
                filter === f.id
                  ? 'bg-accent/15 text-accent border border-accent/40'
                  : 'text-ink-3 hover:text-ink-2 border border-transparent',
              ].join(' ')}
            >
              {f.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Region */}
        <select
          value={region}
          onChange={(e) => onRegion(e.target.value)}
          className="font-mono text-[9px] text-ink-2 bg-surface border border-border rounded px-2.5 py-2 hover:border-accent/40 focus:outline-none focus:border-accent transition-colors"
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        {/* Sort (shown only in card view) */}
        {view === 'cards' && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-ink-4">SORT</span>
            <select
              value={sortKey}
              onChange={(e) => onSort(e.target.value as SortKey)}
              className="font-mono text-[9px] text-ink-2 bg-surface border border-border rounded px-2.5 py-2 hover:border-accent/40 focus:outline-none focus:border-accent transition-colors"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.key} value={o.key}>{o.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* View toggle */}
        <div className="flex items-center gap-0.5 bg-surface border border-border rounded p-0.5 ml-auto">
          {(['cards', 'table'] as ViewMode[]).map((v) => (
            <button
              key={v}
              onClick={() => onView(v)}
              className={[
                'font-mono text-[9px] tracking-widest px-2.5 py-1.5 rounded transition-colors',
                view === v
                  ? 'bg-surface-2 text-ink-2 border border-border'
                  : 'text-ink-4 hover:text-ink-3 border border-transparent',
              ].join(' ')}
            >
              {v === 'cards' ? '▦ CARDS' : '≡ TABLE'}
            </button>
          ))}
        </div>
      </div>

      {/* Summary row */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-mono text-[9px] text-ink-4">
          {resultCount} PARTNER{resultCount !== 1 ? 'S' : ''}
        </span>
        {deficitTotal < 0 && (
          <>
            <span className="text-ink-4 text-[9px]">·</span>
            <span className="font-mono text-[9px] text-flag">
              DEFICIT {formatBillions(deficitTotal)}
            </span>
          </>
        )}
        {surplusTotal > 0 && (
          <>
            <span className="text-ink-4 text-[9px]">·</span>
            <span className="font-mono text-[9px] text-teal-600 dark:text-teal-400">
              SURPLUS {formatBillions(surplusTotal)}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Main Client ──────────────────────────────────────────────────────────────

export function EconomyClient() {
  const [filter, setFilter] = useState<Filter>('all')
  const [region, setRegion] = useState('All Regions')
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [view, setView] = useState<ViewMode>('cards')
  const [searchQuery, setSearchQuery] = useState('')

  const featured = FEATURED_SLUGS
    .map((slug) => countries.find((c) => c.slug === slug))
    .filter(Boolean) as CountrySummary[]

  // Non-featured countries used in the grid/table (after search + filter)
  const filtered = countries.filter((c) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      if (!c.name.toLowerCase().includes(q) && !c.region.toLowerCase().includes(q)) return false
    }
    const matchFilter =
      filter === 'all' ||
      (filter === 'deficit' && c.tradeBalanceUSD < 0) ||
      (filter === 'surplus' && c.tradeBalanceUSD >= 0) ||
      (filter === 'fta' && c.hasFTA) ||
      (filter === 'aid' && c.aidRecipient)
    const matchRegion = region === 'All Regions' || c.region === region
    return matchFilter && matchRegion
  })

  const sorted = sortCountries(filtered, sortKey, sortDir)

  const deficitTotal = filtered.reduce(
    (s, c) => s + (c.tradeBalanceUSD < 0 ? c.tradeBalanceUSD : 0), 0
  )
  const surplusTotal = filtered.reduce(
    (s, c) => s + (c.tradeBalanceUSD > 0 ? c.tradeBalanceUSD : 0), 0
  )

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const showFeatured = !searchQuery && filter === 'all' && region === 'All Regions'

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Page header */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">
          ECONOMIC INTELLIGENCE
        </p>
        <h1 className="text-2xl font-semibold text-ink mb-2">U.S. Economic Exposure</h1>
        <p className="text-sm text-ink-3 leading-relaxed max-w-2xl">
          Bilateral trade flows, tariff exposure, investment positions, and aid outflows —
          mapped across the United States' top trading partners.
        </p>
      </div>

      {/* Global metrics */}
      <GlobalMetricsBar />

      {/* Search */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-2">FIND A COUNTRY</p>
        <CountrySearchBar onSearch={setSearchQuery} />
      </div>

      {/* Featured spotlight (hidden when filtering) */}
      {showFeatured && (
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-3">
            <p className="font-mono text-[10px] tracking-widest text-accent/70">
              TOP TRADING PARTNERS
            </p>
            <span className="font-mono text-[9px] text-ink-4">Largest bilateral relationships by volume</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {featured.map((c) => (
              <FeaturedCard key={c.slug} country={c} />
            ))}
          </div>
        </div>
      )}

      {/* All partners section */}
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-mono text-[10px] tracking-widest text-accent/70">
            {showFeatured ? 'ALL PARTNERS' : 'SEARCH RESULTS'}
          </p>
        </div>

        <Controls
          filter={filter}
          region={region}
          sortKey={sortKey}
          sortDir={sortDir}
          view={view}
          onFilter={setFilter}
          onRegion={setRegion}
          onSort={handleSort}
          onView={setView}
          resultCount={sorted.length}
          deficitTotal={deficitTotal}
          surplusTotal={surplusTotal}
        />

        {sorted.length === 0 ? (
          <div className="border border-border rounded px-6 py-12 text-center">
            <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-2">
              NO PARTNERS MATCH THIS FILTER
            </p>
            <button
              onClick={() => { setFilter('all'); setRegion('All Regions'); setSearchQuery('') }}
              className="font-mono text-[9px] text-accent hover:text-accent-bright transition-colors"
            >
              CLEAR FILTERS
            </button>
          </div>
        ) : view === 'table' ? (
          <div className="overflow-x-auto">
            <CountryTable
              data={sorted}
              sortKey={sortKey}
              sortDir={sortDir}
              onSort={handleSort}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sorted.map((c) => (
              <CountryCard key={c.slug} country={c} />
            ))}
          </div>
        )}
      </div>

      {/* Compare CTA */}
      <CompareCallout />

      {/* Source footer */}
      <p className="font-mono text-[10px] text-ink-4 mt-8">
        Source: U.S. Census Bureau Foreign Trade Division · USTR · USAID GreenBook ·
        FY{GLOBAL_SUMMARY.dataYear} data. Country detail pages in progress.
      </p>
    </div>
  )
}

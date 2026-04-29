'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { stateData } from '@/data/states'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { presidentialCandidates2028 } from '@/data/presidential'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles, stubProfileSlugs } from '@/data/politicians/stub-profiles'
import { memberSlug } from '@/components/map/CongressionalMapSection'
import { allCongressMembers } from '@/data/legislators/slim'
import { allBills } from '@/data/bills'
import { committees } from '@/data/committees'
import { countries } from '@/data/economy/countries'

const fullProfiles = [newsom, ...Object.values(allDelegationProfiles)]
const allPoliticians = [...fullProfiles, ...Object.values(stubProfiles)]

interface Result {
  type: 'politician' | 'politician-stub' | 'member' | 'state' | 'candidate' | 'bill' | 'committee' | 'country'
  label: string
  sub: string
  href?: string
  isExternal?: boolean
  stateKey?: string
  photoUrl?: string
  flagEmoji?: string
  score: number
}

function scoreStr(text: string, q: string): number {
  const t = text.toLowerCase()
  if (t === q) return 10
  if (t.startsWith(q)) return 8
  if (t.includes(q)) return 5
  return 0
}

function getResults(query: string): Result[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const results: Result[] = []

  // Politicians — always checked first, scored by name match strength
  for (const p of allPoliticians) {
    const nameScore = scoreStr(p.name, q)
    const roleScore = p.currentTitle.toLowerCase().includes(q) ? 3 : 0
    const stateScore = p.state.toLowerCase().includes(q) ? 2 : 0
    const partyScore = p.baselineCard.party.toLowerCase().includes(q) ? 1 : 0
    const s = nameScore || roleScore || stateScore || partyScore
    if (!s) continue
    const isStub = stubProfileSlugs.has(p.slug)
    results.push({
      type: isStub ? 'politician-stub' : 'politician',
      label: p.name,
      sub: p.currentTitle,
      href: `/politicians/${p.slug}`,
      photoUrl: p.photoUrl,
      // Full profiles rank above stubs at the same score
      score: s + (isStub ? 0 : 0.5),
    })
  }

  // Congress members — second tier
  let memberCount = 0
  for (const m of allCongressMembers) {
    const nameScore = scoreStr(m.name, q)
    const roleScore = m.title.toLowerCase().includes(q) ? 2 : 0
    const stateScore = m.state.toLowerCase().includes(q) ? 1 : 0
    const partyScore =
      (m.party === 'D' && 'democrat'.startsWith(q)) ||
      (m.party === 'R' && 'republican'.startsWith(q))
        ? 1 : 0
    const s = nameScore || roleScore || stateScore || partyScore
    if (!s) continue
    results.push({
      type: 'member',
      label: m.name,
      sub: m.title,
      href: `/politicians/${memberSlug(m.name)}`,
      photoUrl: `https://theunitedstates.io/images/congress/225x275/${m.bioguide}.jpg`,
      score: s - 1, // members rank below profile entries at same name score
    })
    if (++memberCount >= 3) break
  }

  // Presidential candidates without profiles
  for (const c of presidentialCandidates2028) {
    if (!c.profileSlug && (
      c.name.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q) ||
      c.currentTitle.toLowerCase().includes(q)
    )) {
      results.push({
        type: 'candidate',
        label: c.name,
        sub: `${c.currentTitle} · 2028 Presidential`,
        href: undefined,
        score: 4,
      })
    }
  }

  // Bills — lower priority than politician entries
  for (const bill of allBills) {
    if (
      bill.title.toLowerCase().includes(q) ||
      bill.number.toLowerCase().includes(q) ||
      bill.summary.toLowerCase().includes(q) ||
      bill.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        type: 'bill',
        label: bill.title,
        sub: `${bill.number} · ${bill.jurisdiction}`,
        href: `/bills/${bill.slug}`,
        score: 2,
      })
    }
  }

  // Committees
  for (const committee of committees) {
    if (
      committee.name.toLowerCase().includes(q) ||
      committee.shortName.toLowerCase().includes(q) ||
      committee.summary.toLowerCase().includes(q)
    ) {
      results.push({
        type: 'committee',
        label: committee.name,
        sub: `${committee.chamber} Committee`,
        href: `/committees/${committee.slug}`,
        score: 2,
      })
    }
  }

  // Countries / economy
  for (const country of countries) {
    if (
      country.name.toLowerCase().includes(q) ||
      country.region.toLowerCase().includes(q)
    ) {
      results.push({
        type: 'country',
        label: country.name,
        sub: `${country.region} · #${country.tradePartnerRank} U.S. trade partner`,
        href: `/economy/${country.slug}`,
        flagEmoji: country.flagEmoji,
        score: 2,
      })
    }
  }

  // States
  for (const [key, info] of Object.entries(stateData)) {
    if (
      info.name.toLowerCase().includes(q) ||
      info.abbr.toLowerCase().includes(q) ||
      info.governor?.name.toLowerCase().includes(q)
    ) {
      results.push({
        type: 'state',
        label: info.name,
        sub: info.governor ? `Gov. ${info.governor.name} · ${info.governor.party === 'D' ? 'Democrat' : 'Republican'}` : 'Governor data updating',
        href: `/explore`,
        stateKey: key,
        score: 1,
      })
    }
  }

  // Sort by score descending, then return top 8
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}

const typeLabel: Record<Result['type'], string> = {
  politician: 'PROFILE',
  'politician-stub': 'IN PROGRESS',
  member: 'CONGRESS',
  state: 'STATE',
  candidate: 'CANDIDATE',
  bill: 'BILL',
  committee: 'COMMITTEE',
  country: 'ECONOMY',
}

const typeBadgeColor: Record<Result['type'], string> = {
  politician: 'text-accent/80 border-accent/30 bg-accent/5',
  'politician-stub': 'text-amber-600 border-amber-800/60 bg-amber-950/20',
  member: 'text-ink-3 border-border bg-surface-2',
  state: 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950',
  candidate: 'text-violet-700 border-violet-300 bg-violet-100 dark:text-violet-400 dark:border-violet-900 dark:bg-violet-950',
  bill: 'text-signal-bill border-signal-bill/30 bg-surface-2',
  committee: 'text-flag/80 border-flag-muted bg-flag-bg',
  country: 'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-700/50 dark:bg-teal-950/30',
}

interface SearchBarProps {
  placeholder?: string
  navigateOnSubmit?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SearchBar({
  placeholder = 'Search politicians, states, candidates…',
  navigateOnSubmit = false,
  size = 'md',
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = getResults(query)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    if (navigateOnSubmit) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setOpen(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const inputPadding = size === 'lg' ? 'px-5 py-3.5 text-sm' : size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-4 pointer-events-none select-none text-sm">
            ⌕
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={[
              'w-full bg-surface border border-border rounded pl-9 pr-10 font-sans',
              'text-ink placeholder:text-ink-4',
              'focus:outline-none focus:border-accent transition-colors',
              inputPadding,
            ].join(' ')}
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors font-mono text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </form>

      {open && query.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-surface border border-border rounded shadow-2xl overflow-hidden">
          {results.length === 0 ? (
            <div className="px-4 py-3">
              <p className="text-xs text-ink-3 mb-0.5">
                No results for <span className="text-ink-2">&ldquo;{query}&rdquo;</span>
              </p>
              {navigateOnSubmit && (
                <button
                  onClick={handleSubmit as unknown as React.MouseEventHandler}
                  className="text-[10px] font-mono text-accent/70 hover:text-accent transition-colors"
                >
                  SEARCH ALL &amp; GET NOTIFIED →
                </button>
              )}
            </div>
          ) : (
            <ul>
              {results.map((r, i) => {
                const inner = (
                  <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 transition-colors cursor-pointer group">
                    {r.photoUrl ? (
                      <PoliticianPhoto name={r.label} photoUrl={r.photoUrl} size={28} />
                    ) : r.flagEmoji ? (
                      <div className="w-7 h-7 flex items-center justify-center shrink-0">
                        <span className="text-xl leading-none">{r.flagEmoji}</span>
                      </div>
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center shrink-0">
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${typeBadgeColor[r.type]}`}>
                          {typeLabel[r.type]}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ink group-hover:text-accent transition-colors leading-tight truncate">
                        {r.label}
                      </p>
                      <p className="text-xs text-ink-3 truncate">{r.sub}</p>
                    </div>
                    {(r.photoUrl || r.flagEmoji) && (
                      <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${typeBadgeColor[r.type]}`}>
                        {typeLabel[r.type]}
                      </span>
                    )}
                  </div>
                )

                return (
                  <li key={i} className={i > 0 ? 'border-t border-border' : ''}>
                    {r.href && r.isExternal ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                        {inner}
                      </a>
                    ) : r.href ? (
                      <Link href={r.href} onClick={() => setOpen(false)}>
                        {inner}
                      </Link>
                    ) : (
                      <div className="opacity-60">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          )}

          {navigateOnSubmit && query.length > 0 && (
            <div className="border-t border-border px-4 py-2 bg-surface-2">
              <button
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                className="text-xs text-accent hover:text-accent-bright transition-colors font-mono"
              >
                SEARCH ALL RESULTS FOR &ldquo;{query}&rdquo; →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

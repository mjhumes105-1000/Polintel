'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import type { PoliticianProfile } from '@political-intel/types'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import newsom from '@/data/politicians/gavin-newsom'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles } from '@/data/politicians/stub-profiles'

const allPoliticians = [newsom, ...Object.values(allDelegationProfiles), ...Object.values(stubProfiles)]
const bySlug = Object.fromEntries(allPoliticians.map((p) => [p.slug, p]))

function formatMoney(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

function PoliticianPicker({
  value,
  onChange,
  exclude,
  label,
}: {
  value: string
  onChange: (slug: string) => void
  exclude: string
  label: string
}) {
  const [query, setQuery] = useState('')
  const filtered = allPoliticians.filter(
    (p) =>
      p.slug !== exclude &&
      (query === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.currentTitle.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="flex-1 min-w-0">
      <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-2">{label}</p>
      {value ? (
        <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-accent/40 rounded mb-2">
          <PoliticianPhoto name={bySlug[value].name} photoUrl={bySlug[value].photoUrl} size={36} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink truncate">{bySlug[value].name}</p>
            <p className="text-xs text-ink-3 truncate">{bySlug[value].currentTitle}</p>
          </div>
          <button
            onClick={() => onChange('')}
            className="text-ink-4 hover:text-ink-2 transition-colors font-mono text-xs shrink-0"
          >
            ✕
          </button>
        </div>
      ) : (
        <input
          type="text"
          placeholder="Search politician…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-surface border border-border rounded px-4 py-2.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent transition-colors mb-2"
        />
      )}
      {!value && query && (
        <div className="border border-border rounded overflow-hidden bg-surface">
          {filtered.slice(0, 6).map((p) => (
            <button
              key={p.slug}
              onClick={() => { onChange(p.slug); setQuery('') }}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 transition-colors text-left border-b border-border last:border-0"
            >
              <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={28} />
              <div className="min-w-0">
                <p className="text-sm text-ink truncate">{p.name}</p>
                <p className="text-xs text-ink-3 truncate">{p.currentTitle}</p>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-4 py-3 text-xs text-ink-3">No results.</p>
          )}
        </div>
      )}
    </div>
  )
}

function StatRow({ label, a, b, highlight }: { label: string; a: string; b: string; highlight?: boolean }) {
  return (
    <div className={`grid grid-cols-[1fr_auto_1fr] gap-4 py-3 border-b border-border last:border-0 ${highlight ? 'bg-surface-2 -mx-4 px-4 rounded' : ''}`}>
      <p className="text-sm text-ink-2 text-right">{a}</p>
      <p className="font-mono text-[10px] tracking-widest text-ink-4 w-28 text-center pt-0.5">{label}</p>
      <p className="text-sm text-ink-2">{b}</p>
    </div>
  )
}

function ComparePanel({ a, b }: { a: PoliticianProfile; b: PoliticianProfile }) {
  const totalA = a.funding.reduce((s, f) => s + f.totalRaised, 0)
  const totalB = b.funding.reduce((s, f) => s + f.totalRaised, 0)

  const committeeNamesA = a.committees?.map((c) => c.name) ?? []
  const committeeNamesB = b.committees?.map((c) => c.name) ?? []
  const sharedCommittees = committeeNamesA.filter((n) => committeeNamesB.includes(n))

  return (
    <div className="space-y-6">
      {/* Header cards */}
      <div className="grid grid-cols-2 gap-4">
        {[a, b].map((p) => (
          <Link
            key={p.slug}
            href={`/politicians/${p.slug}`}
            className="flex flex-col items-center gap-3 p-5 bg-surface border border-border rounded hover:border-accent transition-colors group text-center"
          >
            <PoliticianPhoto name={p.name} photoUrl={p.photoUrl} size={72} />
            <div>
              <p className="text-base font-semibold text-ink group-hover:text-accent transition-colors">{p.name}</p>
              <p className="text-xs text-ink-3 mt-0.5">{p.currentTitle}</p>
              <p className="font-mono text-[10px] text-accent/70 mt-1">{p.baselineCard.party}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats comparison */}
      <div className="bg-surface border border-border rounded px-4 py-2">
        <StatRow label="PARTY" a={a.baselineCard.party} b={b.baselineCard.party} />
        <StatRow label="STATE" a={a.state} b={b.state} />
        <StatRow label="IN SERVICE" a={`${a.baselineCard.yearsInPublicService}+ yrs`} b={`${b.baselineCard.yearsInPublicService}+ yrs`} />
        <StatRow label="TOTAL RAISED" a={totalA ? formatMoney(totalA) : '—'} b={totalB ? formatMoney(totalB) : '—'} highlight />
        <StatRow label="COMMITTEES" a={`${a.committees?.length ?? 0}`} b={`${b.committees?.length ?? 0}`} />
      </div>

      {/* Shared committees */}
      {sharedCommittees.length > 0 && (
        <div className="bg-surface border border-border rounded px-4 py-4">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">SHARED COMMITTEES</p>
          <div className="space-y-1.5">
            {sharedCommittees.map((name) => (
              <div key={name} className="flex items-center gap-2 px-3 py-2 bg-surface-2 border border-border rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-ink-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Committees side by side */}
      <div className="grid grid-cols-2 gap-4">
        {[a, b].map((p) => (
          <div key={p.slug} className="bg-surface border border-border rounded px-4 py-4">
            <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">{p.name.split(' ').pop()?.toUpperCase()} — COMMITTEES</p>
            {p.committees && p.committees.length > 0 ? (
              <div className="space-y-1.5">
                {p.committees.map((c) => (
                  <div key={c.slug} className="text-xs text-ink-2 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-ink-4 mt-1.5 shrink-0" />
                    {c.name}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-ink-3 italic">No committee data</p>
            )}
          </div>
        ))}
      </div>

      {/* Recent timeline events side by side */}
      <div className="grid grid-cols-2 gap-4">
        {[a, b].map((p) => {
          const recent = [...p.timeline]
            .sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime())
            .slice(0, 4)
          return (
            <div key={p.slug} className="bg-surface border border-border rounded px-4 py-4">
              <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">{p.name.split(' ').pop()?.toUpperCase()} — RECENT ACTIVITY</p>
              <div className="space-y-3">
                {recent.map((e) => (
                  <div key={e.id} className="border-b border-border pb-2 last:border-0 last:pb-0">
                    <p className="font-mono text-[10px] text-ink-4 mb-0.5">{e.date.slice(0, 7)}</p>
                    <p className="text-xs text-ink-2 leading-snug">{e.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        {[a, b].map((p) => (
          <Link
            key={p.slug}
            href={`/politicians/${p.slug}`}
            className="text-center py-2.5 font-mono text-[10px] tracking-widest text-accent hover:text-accent-bright border border-accent/30 hover:border-accent rounded transition-colors"
          >
            FULL PROFILE →
          </Link>
        ))}
      </div>
    </div>
  )
}

function CompareInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [slugA, setSlugA] = useState(searchParams.get('a') ?? '')
  const [slugB, setSlugB] = useState(searchParams.get('b') ?? '')

  const politicianA = slugA ? bySlug[slugA] : null
  const politicianB = slugB ? bySlug[slugB] : null

  function handleChange(which: 'a' | 'b', slug: string) {
    const next = which === 'a' ? { a: slug, b: slugB } : { a: slugA, b: slug }
    if (which === 'a') setSlugA(slug)
    else setSlugB(slug)
    if (next.a && next.b) {
      router.replace(`/compare?a=${next.a}&b=${next.b}`, { scroll: false })
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-ink mb-2">Compare</h1>
      <p className="text-sm text-ink-3 mb-8">Select two politicians to compare their records side by side.</p>

      <div className="flex gap-4 mb-8">
        <PoliticianPicker value={slugA} onChange={(s) => handleChange('a', s)} exclude={slugB} label="POLITICIAN A" />
        <div className="flex items-center pt-6 shrink-0">
          <span className="font-mono text-xs text-ink-4">VS</span>
        </div>
        <PoliticianPicker value={slugB} onChange={(s) => handleChange('b', s)} exclude={slugA} label="POLITICIAN B" />
      </div>

      {politicianA && politicianB ? (
        <ComparePanel a={politicianA} b={politicianB} />
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded">
          <p className="text-ink-3 text-sm">Select two politicians above to begin comparison.</p>
        </div>
      )}
    </div>
  )
}

export function CompareClient() {
  return (
    <Suspense>
      <CompareInner />
    </Suspense>
  )
}

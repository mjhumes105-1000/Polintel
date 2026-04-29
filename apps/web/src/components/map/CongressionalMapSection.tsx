'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { stateData, type StateInfo } from '@/data/states'
import { allCongressMembers, type CongressMember } from '@/data/legislators/slim'
import { houseVacancies, type Vacancy } from '@/data/vacancies'

const USMap = dynamic(() => import('@/components/map/USMap').then((m) => m.USMap), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[960/600] bg-surface border border-border rounded flex items-center justify-center">
      <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING MAP…</p>
    </div>
  ),
})

const StateDistrictMap = dynamic(
  () => import('@/components/map/StateDistrictMap').then((m) => m.StateDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

export const partyLabel: Record<string, string> = { D: 'Democrat', R: 'Republican', I: 'Independent' }
export const partyColor: Record<string, string> = {
  D: 'text-accent border-accent/40 bg-accent/5',
  R: 'text-red-700 border-red-300 bg-red-100 dark:text-red-400 dark:border-red-900/60 dark:bg-red-950/30',
  I: 'text-ink-3 border-border bg-surface-2',
}

export function memberSlug(name: string) {
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function photoUrl(bioguide: string) {
  return `https://theunitedstates.io/images/congress/225x275/${bioguide}.jpg`
}

function MemberRow({ member, large = false }: { member: CongressMember; large?: boolean }) {
  const isSenator = member.district === null
  return (
    <Link
      href={`/politicians/${memberSlug(member.name)}`}
      className={`flex items-center gap-3 bg-surface-2 border border-border rounded px-3 hover:border-accent/40 hover:bg-surface transition-colors ${large ? 'py-3' : 'py-2'}`}
    >
      <div className={`relative shrink-0 rounded-full overflow-hidden bg-surface-3 ${large ? 'w-10 h-10' : 'w-7 h-7'}`}>
        <Image
          src={photoUrl(member.bioguide)}
          alt={member.name}
          width={large ? 40 : 28}
          height={large ? 40 : 28}
          className="object-cover w-full h-full"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-ink leading-tight truncate ${large ? 'text-sm' : 'text-xs'}`}>{member.name}</p>
        <p className="font-mono text-[9px] text-ink-3">
          {isSenator ? 'Senator' : `District ${member.district}`}
        </p>
      </div>
      <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${partyColor[member.party]}`}>
        {partyLabel[member.party].toUpperCase()}
      </span>
    </Link>
  )
}

function StatePanel({ info, onClose, onDrilldown }: { info: StateInfo; onClose: () => void; onDrilldown?: () => void }) {
  return (
    <div className="bg-surface border border-border rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70">{info.abbr}</p>
          <p className="text-sm font-semibold text-ink">{info.name}</p>
        </div>
        <button onClick={onClose} className="font-mono text-[10px] text-ink-4 hover:text-ink-2 transition-colors px-2 py-1">✕</button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2">GOVERNOR</p>
          {info.governor ? (
            <div className="bg-surface-2 border border-border rounded px-3 py-2.5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-ink">{info.governor.name}</p>
                  <p className="text-xs text-ink-3 mt-0.5">In office since {info.governor.since}</p>
                </div>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${partyColor[info.governor.party]}`}>
                  {partyLabel[info.governor.party].toUpperCase()}
                </span>
              </div>
              {info.governor.profileSlug && (
                <Link href={`/politicians/${info.governor.profileSlug}`} className="mt-2.5 flex items-center gap-1 text-xs text-accent hover:text-accent-bright transition-colors font-mono">
                  VIEW FULL PROFILE →
                </Link>
              )}
            </div>
          ) : (
            <p className="text-xs text-ink-3 italic">{info.note ?? 'Data not yet available.'}</p>
          )}
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2">CONGRESSIONAL</p>
          <div className="grid grid-cols-2 gap-px bg-border rounded overflow-hidden border border-border">
            <div className="bg-surface px-3 py-2.5">
              <p className="font-mono text-[10px] text-ink-4">HOUSE SEATS</p>
              <p className="text-sm font-mono text-ink mt-0.5 tabular-nums">{info.houseSeats}</p>
            </div>
            <div className="bg-surface px-3 py-2.5">
              <p className="font-mono text-[10px] text-ink-4">SENATE SEATS</p>
              <p className="text-sm font-mono text-ink mt-0.5">2</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2">NEXT GOVERNOR ELECTION</p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-ink tabular-nums">{info.nextGovElection}</span>
            {parseInt(info.nextGovElection) <= 2026 && (
              <span className="font-mono text-[9px] text-flag border border-flag-muted bg-flag-bg px-1.5 py-0.5 rounded">UPCOMING</span>
            )}
          </div>
        </div>

        {onDrilldown && (
          <button
            onClick={onDrilldown}
            className="w-full mt-1 flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent/15 border border-accent/30 hover:border-accent rounded px-3 py-2.5 transition-colors"
          >
            <span className="font-mono text-[10px] tracking-widest text-accent">VIEW CONGRESSIONAL DISTRICTS →</span>
          </button>
        )}
      </div>

      <div className="px-4 pb-3">
        <p className="text-[10px] text-ink-4 leading-relaxed">Congressional data reflects 119th Congress.</p>
      </div>
    </div>
  )
}

function VacancyBox({ vacancy, large = false }: { vacancy: Vacancy; large?: boolean }) {
  return (
    <div className={`border border-amber-800/50 bg-amber-950/20 rounded px-3 ${large ? 'py-3' : 'py-2'}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-amber-500 border-amber-800/60 bg-amber-950/30">
          VACANT
        </span>
        <span className="font-mono text-[9px] text-ink-4">District {vacancy.district}</span>
      </div>
      <p className="text-xs text-ink-3 leading-relaxed">{vacancy.reason}</p>
      {vacancy.formerMember && (
        <p className="font-mono text-[9px] text-ink-4 mt-1">
          Former: {vacancy.formerMember}
        </p>
      )}
      <p className="font-mono text-[9px] text-ink-4 mt-0.5">
        Vacant since {new Date(vacancy.since).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </p>
      {vacancy.specialElection && (
        <p className="font-mono text-[9px] text-amber-500 mt-0.5">
          Special election: {new Date(vacancy.specialElection).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      )}
    </div>
  )
}

function StateDistrictPanel({
  stateName,
  stateAbbr,
  senators,
  membersByDistrict,
  vacanciesByDistrict,
  district,
  onBack,
}: {
  stateName: string
  stateAbbr: string
  senators: CongressMember[]
  membersByDistrict: Record<number, CongressMember>
  vacanciesByDistrict: Record<number, Vacancy>
  district: number | null
  onBack: () => void
}) {
  const member = district ? membersByDistrict[district] : null
  const vacancy = district ? vacanciesByDistrict[district] : null
  const allDistrictNums = [
    ...Object.keys(membersByDistrict).map(Number),
    ...Object.keys(vacanciesByDistrict).map(Number),
  ].filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b)

  return (
    <div className="bg-surface border border-border rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70">{stateAbbr}</p>
          <p className="text-sm font-semibold text-ink">
            {district ? `District ${district}` : 'Congressional Districts'}
          </p>
        </div>
        <button onClick={onBack} className="font-mono text-[10px] text-ink-4 hover:text-accent transition-colors px-2 py-1">
          ← US MAP
        </button>
      </div>

      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2">SENATORS</p>
        <div className="space-y-2">
          {senators.map((s) => (
            <MemberRow key={s.bioguide} member={s} />
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2 mt-3">
          {district ? `DISTRICT ${district} — REPRESENTATIVE` : 'HOVER A DISTRICT'}
        </p>
        {vacancy ? (
          <VacancyBox vacancy={vacancy} large />
        ) : member ? (
          <div className="space-y-2">
            <MemberRow member={member} large />
            <Link
              href={`/politicians/${memberSlug(member.name)}`}
              className="block text-center py-2 font-mono text-[10px] tracking-widest text-accent hover:text-accent-bright border border-accent/30 hover:border-accent rounded transition-colors"
            >
              VIEW FULL PROFILE →
            </Link>
          </div>
        ) : (
          <div className="border border-border rounded px-3 py-4 text-center">
            <p className="font-mono text-[10px] text-ink-4">Hover over a district to see the representative</p>
          </div>
        )}
      </div>

      <div className="border-t border-border">
        <div className="px-4 py-2 bg-surface-2">
          <p className="font-mono text-[10px] tracking-widest text-accent/60">ALL DISTRICTS</p>
        </div>
        <div className="max-h-52 overflow-y-auto divide-y divide-border">
          {allDistrictNums.map((d) => {
            const m = membersByDistrict[d]
            const v = vacanciesByDistrict[d]
            return (
              <div
                key={d}
                className={[
                  'flex items-center gap-2.5 px-3 py-2',
                  district === d ? 'bg-accent/10' : '',
                ].join(' ')}
              >
                <span className="font-mono text-[9px] text-ink-4 w-4 shrink-0 tabular-nums">{d}</span>
                {v ? (
                  <span className="font-mono text-[9px] px-1 py-0.5 rounded border text-amber-500 border-amber-800/60">
                    VAC
                  </span>
                ) : m ? (
                  <span className={`font-mono text-[9px] px-1 py-0.5 rounded border shrink-0 ${partyColor[m.party]}`}>
                    {m.party}
                  </span>
                ) : null}
                <span className="text-xs text-ink-2 truncate">
                  {v ? 'VACANT' : m ? (
                    <Link href={`/politicians/${memberSlug(m.name)}`} className="hover:text-accent">
                      {m.name}
                    </Link>
                  ) : ''}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function CongressionalMapSection({ readStateFromUrl = false, syncStateToUrl = false }: { readStateFromUrl?: boolean; syncStateToUrl?: boolean }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [drilldownState, setDrilldownState] = useState<string | null>(null)
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const selectedInfo = selectedState ? stateData[selectedState] ?? null : null

  useEffect(() => {
    if (!readStateFromUrl) return
    const stateParam = searchParams.get('state')
    if (stateParam && stateData[stateParam]) {
      setSelectedState(stateParam)
      setDrilldownState(stateParam)
    }
  }, [searchParams, readStateFromUrl])

  function updateUrl(stateKey: string | null) {
    if (!syncStateToUrl) return
    const params = new URLSearchParams(searchParams.toString())
    if (stateKey) {
      params.set('state', stateKey)
    } else {
      params.delete('state')
    }
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname)
  }

  useEffect(() => {
    if ((selectedState || drilldownState) && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [selectedState, drilldownState])

  // Compute senators, reps, and vacancies for the drilldown state
  const { senators, membersByDistrict, vacanciesByDistrict, vacantDistricts } = useMemo(() => {
    if (!drilldownState) return { senators: [], membersByDistrict: {}, vacanciesByDistrict: {}, vacantDistricts: new Set<number>() }
    const info = stateData[drilldownState]
    if (!info) return { senators: [], membersByDistrict: {}, vacanciesByDistrict: {}, vacantDistricts: new Set<number>() }
    const abbr = info.abbr
    const stateMembers = allCongressMembers.filter(m => m.state === abbr)
    const senators = stateMembers.filter(m => m.district === null)
    const reps = stateMembers.filter(m => m.district !== null)
    const membersByDistrict: Record<number, CongressMember> = {}
    for (const rep of reps) {
      const key = rep.district === 0 ? 1 : (rep.district as number)
      membersByDistrict[key] = rep
    }
    const stateVacancies = houseVacancies.filter(v => v.state === abbr)
    const vacanciesByDistrict: Record<number, Vacancy> = {}
    for (const v of stateVacancies) vacanciesByDistrict[v.district] = v
    const vacantDistricts = new Set(stateVacancies.map(v => v.district))
    return { senators, membersByDistrict, vacanciesByDistrict, vacantDistricts }
  }, [drilldownState])

  const focusedDistrict = hoveredDistrict ?? selectedDistrict

  function handleStateClick(name: string) {
    setSelectedState(name)
    setDrilldownState(null)
    setSelectedDistrict(null)
    setHoveredDistrict(null)
    updateUrl(name)
  }

  function handleDrilldown(state: string) {
    setDrilldownState(state)
    setSelectedDistrict(null)
    updateUrl(state)
  }

  function handleBackToUS() {
    setDrilldownState(null)
    setSelectedState(null)
    setSelectedDistrict(null)
    setHoveredDistrict(null)
    updateUrl(null)
  }

  // ── District drilldown view ──────────────────────────────────────────────────
  if (drilldownState && stateData[drilldownState]) {
    const info = stateData[drilldownState]
    const abbr = info.abbr

    return (
      <div>
        <div className="flex items-center gap-4 mb-5">
          <button
            onClick={handleBackToUS}
            className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors border border-border hover:border-accent/40 rounded px-2.5 py-1.5"
          >
            ← BACK TO US MAP
          </button>
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent/70">
              {drilldownState.toUpperCase()} — 119TH CONGRESSIONAL DISTRICTS
            </p>
            <p className="text-xs text-ink-3 mt-0.5">Hover to preview. Click to pin a district and view the representative&apos;s profile.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="border border-border rounded overflow-hidden bg-surface">
              <StateDistrictMap
                stateAbbr={abbr}
                membersByDistrict={membersByDistrict}
                vacantDistricts={vacantDistricts}
                selectedDistrict={selectedDistrict}
                onDistrictHover={setHoveredDistrict}
                onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
              />
            </div>
            <div className="flex items-center gap-5 mt-3 px-1 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#5882c8] dark:bg-[#1e4080] border border-[#3a62a8] dark:border-[#5580c0]" />
                <span className="text-[10px] font-mono text-ink-4">Democrat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#c05050] dark:bg-[#5c1515] border border-[#a03030]" />
                <span className="text-[10px] font-mono text-ink-4">Republican</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#d4a017] dark:bg-[#3d2e00] border border-[#a07800] dark:border-[#7a5e00]" />
                <span className="text-[10px] font-mono text-ink-4">Vacant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#7aa4e8] dark:bg-[#3668c0] border border-[#2563eb] dark:border-[#5b90e0]" />
                <span className="text-[10px] font-mono text-ink-4">Selected</span>
              </div>
            </div>
          </div>

          <div ref={panelRef}>
            <StateDistrictPanel
              stateName={drilldownState}
              stateAbbr={abbr}
              senators={senators}
              membersByDistrict={membersByDistrict}
              vacanciesByDistrict={vacanciesByDistrict}
              district={focusedDistrict}
              onBack={handleBackToUS}
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
            U.S. SENATORS · {drilldownState.toUpperCase()}
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {senators.map(s => (
              <Link
                key={s.bioguide}
                href={`/politicians/${memberSlug(s.name)}`}
                className="flex items-center gap-3 bg-surface border border-border rounded p-3 hover:border-accent/50 hover:bg-surface-2 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-2 shrink-0">
                  <Image src={photoUrl(s.bioguide)} alt={s.name} width={56} height={56} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{s.name}</p>
                  <p className="font-mono text-[9px] text-ink-4 mt-0.5">U.S. Senator · {drilldownState}</p>
                  <span className={`inline-block mt-1.5 font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[s.party]}`}>
                    {partyLabel[s.party].toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
            HOUSE DELEGATION · {Object.keys(membersByDistrict).length} MEMBERS{vacantDistricts.size > 0 && ` · ${vacantDistricts.size} VACANT`}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {[
              ...Object.entries(membersByDistrict).map(([d, m]) => ({ d: Number(d), m, v: null as Vacancy | null })),
              ...Object.entries(vacanciesByDistrict).map(([d, v]) => ({ d: Number(d), m: null as CongressMember | null, v })),
            ]
              .sort((a, b) => a.d - b.d)
              .map(({ d, m, v }) => {
                const isActive = focusedDistrict === d
                if (v) {
                  return (
                    <div
                      key={d}
                      className={[
                        'flex flex-col items-center gap-2 p-3 rounded border transition-colors',
                        isActive ? 'border-amber-600/60 bg-amber-950/20' : 'border-amber-900/40 bg-amber-950/10',
                      ].join(' ')}
                    >
                      <div className="w-12 h-12 rounded-full bg-surface-2 border border-amber-800/30 flex items-center justify-center shrink-0">
                        <span className="font-mono text-[10px] text-amber-600">VAC</span>
                      </div>
                      <div className="w-full text-center">
                        <p className="text-xs font-medium text-amber-600/80 leading-tight">VACANT</p>
                        <p className="font-mono text-[9px] text-ink-4 mt-0.5">District {d}</p>
                        <span className="inline-block mt-1 font-mono text-[8px] px-1.5 py-0.5 rounded border text-amber-500 border-amber-800/60">
                          VACANT
                        </span>
                      </div>
                    </div>
                  )
                }
                if (!m) return null
                return (
                  <Link
                    key={d}
                    href={`/politicians/${memberSlug(m.name)}`}
                    className={[
                      'flex flex-col items-center gap-2 p-3 rounded border transition-colors',
                      isActive ? 'border-accent/60 bg-accent/10' : 'border-border bg-surface hover:border-accent/40 hover:bg-surface-2',
                    ].join(' ')}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-2 shrink-0">
                      <Image src={photoUrl(m.bioguide)} alt={m.name} width={48} height={48} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div className="w-full text-center">
                      <p className="text-xs font-medium text-ink leading-tight line-clamp-2">{m.name}</p>
                      <p className="font-mono text-[9px] text-ink-4 mt-0.5">District {d}</p>
                      <span className={`inline-block mt-1 font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[m.party]}`}>
                        {m.party}
                      </span>
                    </div>
                  </Link>
                )
              })}
          </div>
          <p className="text-[10px] text-ink-4 font-mono mt-4">Source: congress.gov · 119th Congress</p>
        </div>
      </div>
    )
  }

  // ── US overview map ──────────────────────────────────────────────────────────
  return (
    <div>
      <div className="mb-5">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">CONGRESSIONAL &amp; GUBERNATORIAL MAP</p>
        <p className="text-xs text-ink-3">
          Click any state to view governor and congressional info, then drill into district-level maps for all 50 states.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border border-border rounded overflow-hidden bg-surface">
            <USMap selectedState={selectedState} onStateClick={handleStateClick} />
          </div>
          <div className="flex items-center gap-5 mt-3 px-1 flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#a0b0d4] dark:bg-[#162040] border border-[#6070a8] dark:border-[#2d4f7e]" />
              <span className="text-[10px] font-mono text-ink-4">State</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#5a7cb8] dark:bg-[#1e2a50] border border-[#2563eb] dark:border-[#5b90e0]" />
              <span className="text-[10px] font-mono text-ink-4">Selected</span>
            </div>
          </div>
        </div>

        <div ref={panelRef}>
          {selectedInfo ? (
            <StatePanel
              info={selectedInfo}
              onClose={() => setSelectedState(null)}
              onDrilldown={() => handleDrilldown(selectedState!)}
            />
          ) : (
            <div className="h-full min-h-[200px] border border-border rounded bg-surface flex flex-col items-center justify-center gap-2 text-center px-6">
              <p className="font-mono text-[10px] tracking-widest text-ink-4">SELECT A STATE</p>
              <p className="text-xs text-ink-3 leading-relaxed">
                Click any state to view its governor, congressional seats, and upcoming elections. All 50 states have district-level maps.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

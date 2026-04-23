'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { stateData, type StateInfo } from '@/data/states'
import { presidentialCandidates2028, type PresidentialCandidate } from '@/data/presidential'
import { SearchBar } from '@/components/ui/SearchBar'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { caMembers, caMembersByDistrict, caSenators, type CAMember } from '@/data/california-members'

const USMap = dynamic(() => import('@/components/map/USMap').then((m) => m.USMap), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[960/600] bg-surface border border-border rounded flex items-center justify-center">
      <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING MAP…</p>
    </div>
  ),
})

const CADistrictMap = dynamic(
  () => import('@/components/map/CADistrictMap').then((m) => m.CADistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[5/7] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const partyLabel = { D: 'Democrat', R: 'Republican', I: 'Independent' }
const partyColor = {
  D: 'text-accent border-accent/40 bg-accent/5',
  R: 'text-red-400 border-red-900/60 bg-red-950/30',
  I: 'text-ink-3 border-border bg-surface-2',
}
const statusColor = {
  exploring: 'text-ink-3 border-border',
  declared: 'text-accent border-accent-muted',
  withdrawn: 'text-ink-4 border-border',
}
const statusLabel = { exploring: 'EXPLORING', declared: 'DECLARED', withdrawn: 'WITHDRAWN' }

// ─── Presidential Seal ───────────────────────────────────────────────────────

function PresidentialSeal({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-3 focus:outline-none"
      aria-expanded={active}
    >
      <div
        className={[
          'relative w-40 h-40 rounded-full transition-all duration-300',
          active
            ? 'ring-2 ring-accent ring-offset-2 ring-offset-bg shadow-[0_0_32px_rgba(91,144,224,0.25)]'
            : 'hover:shadow-[0_0_20px_rgba(91,144,224,0.15)]',
        ].join(' ')}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <circle cx="100" cy="100" r="99" fill="#0f1024" />
          <circle cx="100" cy="100" r="96" fill="none" stroke="#252848" strokeWidth="1.5" />

          {/* Rim text */}
          <defs>
            <path id="topRim" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0" />
            <path id="botRim" d="M 100,100 m -80,0 a 80,80 0 0,0 160,0" />
          </defs>
          <text fontSize="7" fill="#5b90e0" fontFamily="monospace" letterSpacing="3" fillOpacity="0.9">
            <textPath href="#topRim" startOffset="5%">PRESIDENTIAL CANDIDATES · 2028</textPath>
          </text>
          <text fontSize="7" fill="#5b90e0" fontFamily="monospace" letterSpacing="5" fillOpacity="0.5">
            <textPath href="#botRim" startOffset="20%">UNITED STATES OF AMERICA</textPath>
          </text>

          {/* 13 evenly-spaced stars on inner rim (r=88) */}
          {Array.from({ length: 13 }, (_, i) => {
            const a = ((i * 360) / 13 - 90) * (Math.PI / 180)
            return (
              <text key={i} x={100 + 88 * Math.cos(a)} y={100 + 88 * Math.sin(a) + 2.5}
                textAnchor="middle" fontSize="5.5" fill="#5b90e0" fillOpacity="0.75">★</text>
            )
          })}

          {/* White House silhouette — centered at (100, 115) */}
          <g fill="#eef2ff" fillOpacity="0.93">
            {/* Flagpole */}
            <rect x="99" y="46" width="2" height="30" />
            <polygon points="101,46 116,51 101,57" fill="#c0392b" fillOpacity="0.9" />

            {/* Left wing */}
            <rect x="22" y="112" width="30" height="22" />
            <rect x="18" y="116" width="5" height="18" />
            {/* Right wing */}
            <rect x="148" y="112" width="30" height="22" />
            <rect x="177" y="116" width="5" height="18" />

            {/* Main facade body */}
            <rect x="48" y="96" width="104" height="38" />
            {/* Attic / cornice */}
            <rect x="48" y="91" width="104" height="6" />

            {/* Portico pediment */}
            <polygon points="68,91 132,91 100,74" />
            {/* Portico entablature */}
            <rect x="68" y="87" width="64" height="5" />
            {/* Portico columns (6) */}
            {[71, 81, 91, 101, 111, 121].map((cx) => (
              <rect key={cx} x={cx} y="77" width="4" height="16" fill="#eef2ff" fillOpacity="0.93" />
            ))}
            {/* Portico stylobate */}
            <rect x="68" y="93" width="64" height="4" />

            {/* Central door */}
            <rect x="93" y="112" width="14" height="22" fill="#0a0f1e" fillOpacity="0.55" />

            {/* Windows — left of portico */}
            <rect x="54" y="104" width="9" height="10" fill="#0a0f1e" fillOpacity="0.4" />
            <rect x="66" y="104" width="8" height="10" fill="#0a0f1e" fillOpacity="0.4" />
            {/* Windows — right of portico */}
            <rect x="130" y="104" width="8" height="10" fill="#0a0f1e" fillOpacity="0.4" />
            <rect x="141" y="104" width="9" height="10" fill="#0a0f1e" fillOpacity="0.4" />

            {/* Wing windows */}
            <rect x="30" y="118" width="12" height="10" fill="#0a0f1e" fillOpacity="0.4" />
            <rect x="158" y="118" width="12" height="10" fill="#0a0f1e" fillOpacity="0.4" />

            {/* Ground / lawn line */}
            <rect x="16" y="134" width="168" height="2.5" fillOpacity="0.4" />
          </g>
        </svg>
      </div>
      <div className="text-center">
        <p className="font-mono text-[10px] tracking-widest text-accent/80">
          {active ? '▲ CLOSE' : '▼ PRESIDENTIAL 2028'}
        </p>
      </div>
    </button>
  )
}

// ─── Candidate Card ───────────────────────────────────────────────────────────

function CandidateCard({ candidate }: { candidate: PresidentialCandidate }) {
  const inner = (
    <div
      className={[
        'flex flex-col gap-3 bg-surface border rounded p-4 h-full transition-colors',
        candidate.profileSlug
          ? 'border-accent/30 hover:border-accent hover:bg-surface-2 cursor-pointer'
          : 'border-border opacity-70',
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <PoliticianPhoto name={candidate.name} photoUrl={candidate.photoUrl} size={40} />
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink leading-tight">{candidate.name}</p>
          <p className="text-xs text-ink-3 truncate">{candidate.currentTitle}</p>
        </div>
      </div>
      <p className="text-xs text-ink-3 leading-relaxed flex-1">{candidate.tagline}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${partyColor[candidate.party]}`}>
          {partyLabel[candidate.party].toUpperCase()}
        </span>
        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${statusColor[candidate.status]}`}>
          {statusLabel[candidate.status]}
        </span>
        {candidate.profileSlug
          ? <span className="ml-auto font-mono text-[10px] text-accent">PROFILE →</span>
          : <span className="ml-auto font-mono text-[9px] text-ink-4">PROFILE COMING SOON</span>
        }
      </div>
    </div>
  )
  if (candidate.profileSlug) {
    return <Link href={`/politicians/${candidate.profileSlug}`} className="block h-full">{inner}</Link>
  }
  return <div className="h-full">{inner}</div>
}

// ─── State Detail Panel ───────────────────────────────────────────────────────

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
        <p className="text-[10px] text-ink-4 leading-relaxed">Congressional data reflects 2022 redistricting.</p>
      </div>
    </div>
  )
}

// ─── CA District Panel ────────────────────────────────────────────────────────

function CADistrictPanel({
  district,
  onBack,
}: {
  district: number | null
  onBack: () => void
}) {
  const member = district ? caMembersByDistrict[district] : null

  return (
    <div className="bg-surface border border-border rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70">CALIFORNIA</p>
          <p className="text-sm font-semibold text-ink">
            {district ? `District ${district}` : 'Congressional Districts'}
          </p>
        </div>
        <button onClick={onBack} className="font-mono text-[10px] text-ink-4 hover:text-accent transition-colors px-2 py-1">
          ← US MAP
        </button>
      </div>

      {/* Senators always shown */}
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2">SENATORS</p>
        <div className="space-y-2">
          {caSenators.map((s) => (
            <MemberRow key={s.bioguideId} member={s} />
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2 mt-3">
          {district ? `DISTRICT ${district} — REPRESENTATIVE` : 'HOVER A DISTRICT'}
        </p>
        {member ? (
          <MemberRow member={member} large />
        ) : (
          <div className="border border-border rounded px-3 py-4 text-center">
            <p className="font-mono text-[10px] text-ink-4">Hover over a district to see the representative</p>
          </div>
        )}
      </div>

      {/* District roster (scrollable) */}
      <div className="border-t border-border">
        <div className="px-4 py-2 bg-surface-2">
          <p className="font-mono text-[10px] tracking-widest text-accent/60">ALL DISTRICTS</p>
        </div>
        <div className="max-h-52 overflow-y-auto divide-y divide-border">
          {Array.from({ length: 52 }, (_, i) => i + 1).map((d) => {
            const m = caMembersByDistrict[d]
            if (!m) return null
            return (
              <Link
                key={d}
                href={`/politicians/${memberSlug(m.name)}`}
                className={[
                  'flex items-center gap-2.5 px-3 py-2 transition-colors',
                  district === d ? 'bg-accent/10' : 'hover:bg-surface-2',
                ].join(' ')}
              >
                <span className="font-mono text-[9px] text-ink-4 w-4 shrink-0 tabular-nums">{d}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border shrink-0 ${partyColor[m.party]}`}>
                  {m.party}
                </span>
                <span className="text-xs text-ink-2 truncate">{m.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function memberSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z\s]/g, '').trim().replace(/\s+/g, '-')
}

function MemberRow({ member, large = false }: { member: CAMember; large?: boolean }) {
  const slug = memberSlug(member.name)
  return (
    <Link href={`/politicians/${slug}`} className={`flex items-center gap-3 bg-surface-2 border border-border rounded px-3 hover:border-accent/40 hover:bg-surface transition-colors ${large ? 'py-3' : 'py-2'}`}>
      <div className={`relative shrink-0 rounded-full overflow-hidden bg-surface-3 ${large ? 'w-10 h-10' : 'w-7 h-7'}`}>
        <Image
          src={member.photoUrl}
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
          {member.chamber === 'Senate' ? 'Senator' : `District ${member.district}`}
        </p>
      </div>
      <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${partyColor[member.party]}`}>
        {partyLabel[member.party].toUpperCase()}
      </span>
    </Link>
  )
}

// ─── Main Explore Client ──────────────────────────────────────────────────────

export function ExploreClient() {
  const [showPresidential, setShowPresidential] = useState(false)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [drilldownState, setDrilldownState] = useState<string | null>(null)
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const selectedInfo = selectedState ? stateData[selectedState] ?? null : null

  useEffect(() => {
    if ((selectedState || drilldownState) && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [selectedState, drilldownState])

  // The district shown in the panel = hovered (live preview) or last clicked
  const focusedDistrict = hoveredDistrict ?? selectedDistrict

  function handleStateClick(name: string) {
    setSelectedState(name)
    setDrilldownState(null)
    setSelectedDistrict(null)
    setHoveredDistrict(null)
  }

  function handleDrilldownCA() {
    setDrilldownState('California')
    setSelectedDistrict(null)
  }

  function handleBackToUS() {
    setDrilldownState(null)
    setSelectedDistrict(null)
    setHoveredDistrict(null)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Presidential section */}
      <div className="mb-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <PresidentialSeal active={showPresidential} onClick={() => setShowPresidential((v) => !v)} />
        </div>
        {showPresidential && (
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent/70 text-center mb-5">
              2028 PRESIDENTIAL — CANDIDATES & EXPLORATORY
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {presidentialCandidates2028.map((c) => (
                <CandidateCard key={c.name} candidate={c} />
              ))}
            </div>
            <p className="text-[11px] text-ink-4 text-center font-mono">
              Profiles are added as candidacies develop. Chain of command view — coming soon.
            </p>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest text-accent mb-3">EXPLORE</p>
        <SearchBar
          placeholder="Search politicians, states, governors, candidates…"
          size="lg"
          className="max-w-2xl"
        />
      </div>

      {/* CA District Drilldown — full-width standalone view */}
      {drilldownState === 'California' && (
        <div>
          <div className="flex items-center gap-4 mb-5">
            <button
              onClick={handleBackToUS}
              className="font-mono text-[9px] text-ink-4 hover:text-accent transition-colors border border-border hover:border-accent/40 rounded px-2.5 py-1.5"
            >
              ← BACK TO US MAP
            </button>
            <div>
              <p className="font-mono text-[10px] tracking-widest text-accent/70">CALIFORNIA — 119TH CONGRESSIONAL DISTRICTS</p>
              <p className="text-xs text-ink-3 mt-0.5">Hover a district to preview the representative. Click to pin.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="border border-border rounded overflow-hidden bg-surface">
                <CADistrictMap
                  selectedDistrict={selectedDistrict}
                  onDistrictHover={setHoveredDistrict}
                  onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                />
              </div>
              <div className="flex items-center gap-5 mt-3 px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#1e4080] border border-[#5580c0]" />
                  <span className="text-[10px] font-mono text-ink-4">Democrat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#5c1515] border border-[#a03030]" />
                  <span className="text-[10px] font-mono text-ink-4">Republican</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#3668c0] border border-[#5b90e0]" />
                  <span className="text-[10px] font-mono text-ink-4">Selected</span>
                </div>
              </div>
            </div>

            <div ref={panelRef}>
              <CADistrictPanel district={focusedDistrict} onBack={handleBackToUS} />
            </div>
          </div>

          {/* Full delegation roster */}
          <div className="mt-10">
            {/* Senators */}
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
              U.S. SENATORS · CALIFORNIA
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {caSenators.map(s => (
                <Link
                  key={s.bioguideId}
                  href={`/politicians/${memberSlug(s.name)}`}
                  className="flex items-center gap-3 bg-surface border border-border rounded p-3 hover:border-accent/50 hover:bg-surface-2 transition-colors"
                >
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-2 shrink-0">
                    <Image
                      src={s.photoUrl}
                      alt={s.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.name}</p>
                    <p className="font-mono text-[9px] text-ink-4 mt-0.5">U.S. Senator · California</p>
                    <span className={`inline-block mt-1.5 font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[s.party]}`}>
                      {partyLabel[s.party].toUpperCase()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* House members */}
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
              HOUSE DELEGATION · 52 MEMBERS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
              {Array.from({ length: 52 }, (_, i) => i + 1).map(d => {
                const m = caMembersByDistrict[d]
                if (!m) return null
                const isActive = focusedDistrict === d
                return (
                  <Link
                    key={d}
                    href={`/politicians/${memberSlug(m.name)}`}
                    className={[
                      'flex flex-col items-center gap-2 p-3 rounded border transition-colors',
                      isActive
                        ? 'border-accent/60 bg-accent/10'
                        : 'border-border bg-surface hover:border-accent/40 hover:bg-surface-2',
                    ].join(' ')}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-2 shrink-0">
                      <Image
                        src={m.photoUrl}
                        alt={m.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    </div>
                    <div className="w-full text-center">
                      <p className="text-xs font-medium text-ink leading-tight line-clamp-2">{m.name}</p>
                      <p className="font-mono text-[9px] text-ink-4 mt-0.5">District {d}</p>
                      <span className={`inline-block mt-1 font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[m.party]}`}>
                        {partyLabel[m.party].toUpperCase()}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
            <p className="text-[10px] text-ink-4 font-mono mt-4">
              Source: congress.gov · 119th Congress
            </p>
          </div>
        </div>
      )}

      {/* US Map section */}
      {!drilldownState && (
        <div>
          <div className="mb-5">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">CONGRESSIONAL & GUBERNATORIAL MAP</p>
            <p className="text-xs text-ink-3">
              Click any state to view governor and congressional info. Click California for district-level view.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="border border-border rounded overflow-hidden bg-surface">
                <USMap selectedState={selectedState} onStateClick={handleStateClick} />
              </div>
              <div className="flex items-center gap-5 mt-3 px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#162040] border border-[#2d4f7e]" />
                  <span className="text-[10px] font-mono text-ink-4">Has profile</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#14162e] border border-[#252848]" />
                  <span className="text-[10px] font-mono text-ink-4">No profile yet</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#1e2a50] border border-[#5b90e0]" />
                  <span className="text-[10px] font-mono text-ink-4">Selected</span>
                </div>
              </div>
            </div>

            <div ref={panelRef}>
              {selectedInfo ? (
                <StatePanel
                  info={selectedInfo}
                  onClose={() => setSelectedState(null)}
                  onDrilldown={selectedState === 'California' ? handleDrilldownCA : undefined}
                />
              ) : (
                <div className="h-full min-h-[200px] border border-border rounded bg-surface flex flex-col items-center justify-center gap-2 text-center px-6">
                  <p className="font-mono text-[10px] tracking-widest text-ink-4">SELECT A STATE</p>
                  <p className="text-xs text-ink-3 leading-relaxed">
                    Click any state to view its governor, congressional seats, and upcoming elections.
                    {' '}California has district-level detail.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

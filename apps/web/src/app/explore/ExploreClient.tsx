'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { stateData, type StateInfo } from '@/data/states'
import { presidentialCandidates2028, type PresidentialCandidate } from '@/data/presidential'
import { SearchBar } from '@/components/ui/SearchBar'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { caMembers, caMembersByDistrict, caSenators, type CAMember } from '@/data/california-members'
import { msMembers, msMembersByDistrict, msSenators, type StateMember as MSMember } from '@/data/ms-members'
import { njMembers, njMembersByDistrict, njSenators, type StateMember as NJMember } from '@/data/nj-members'
import { flMembers, flMembersByDistrict, flSenators, type StateMember as FLMember } from '@/data/fl-members'
import { txMembers, txMembersByDistrict, txSenators, type StateMember as TXMember } from '@/data/tx-members'
import { nyMembers, nyMembersByDistrict, nySenators, type StateMember as NYMember } from '@/data/ny-members'

type AnyMember = CAMember | MSMember | NJMember | FLMember | TXMember | NYMember

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

const MSDistrictMap = dynamic(
  () => import('@/components/map/MSDistrictMap').then((m) => m.MSDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[6/7] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const NJDistrictMap = dynamic(
  () => import('@/components/map/NJDistrictMap').then((m) => m.NJDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[3/7] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const FLDistrictMap = dynamic(
  () => import('@/components/map/FLDistrictMap').then((m) => m.FLDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[5/4] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const TXDistrictMap = dynamic(
  () => import('@/components/map/TXDistrictMap').then((m) => m.TXDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[7/8] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const NYDistrictMap = dynamic(
  () => import('@/components/map/NYDistrictMap').then((m) => m.NYDistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[7/6] bg-surface border border-border rounded flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-widest text-ink-4">LOADING DISTRICTS…</p>
      </div>
    ),
  }
)

const partyLabel = { D: 'Democrat', R: 'Republican', I: 'Independent' }
const partyColor = {
  D: 'text-accent border-accent/40 bg-accent/5',
  R: 'text-red-700 border-red-300 bg-red-100 dark:text-red-400 dark:border-red-900/60 dark:bg-red-950/30',
  I: 'text-ink-3 border-border bg-surface-2',
}
const statusColor = {
  exploring: 'text-ink-3 border-border',
  declared: 'text-accent border-accent-muted',
  withdrawn: 'text-ink-4 border-border',
}
const statusLabel = { exploring: 'EXPLORING', declared: 'DECLARED', withdrawn: 'WITHDRAWN' }

// ─── Presidential Seal ───────────────────────────────────────────────────────

function star5(cx: number, cy: number, R: number, r: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const rad = i % 2 === 0 ? R : r
    const a = (i * Math.PI / 5) - Math.PI / 2
    return `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

function PresidentialSeal({ active, onClick }: { active: boolean; onClick: () => void }) {
  const theme = useTheme()
  const isDark = theme === 'dark'

  // Color palette — same blue family, swaps for light mode
  const bg0      = isDark ? '#141830' : '#1a2448'
  const bg1      = isDark ? '#08091a' : '#0f1630'
  const ring     = isDark ? '#5b90e0' : '#7eaef5'
  const eagle    = isDark ? '#8aaad4' : '#b8cce8'
  const eagleHi  = isDark ? '#c0d4f0' : '#ddeaff'
  const shBlue   = isDark ? '#1e3a78' : '#2a4a90'
  const shRed    = '#9a2828'
  const shSilver = isDark ? '#6a8ab8' : '#8aaad4'
  const olive    = isDark ? '#4a7850' : '#5a9060'
  const rimText  = isDark ? '#5b90e0' : '#7eaef5'

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-3 focus:outline-none"
      aria-expanded={active}
    >
      <div
        className={[
          'relative w-28 h-28 sm:w-40 sm:h-40 rounded-full transition-all duration-300',
          active
            ? 'ring-2 ring-accent ring-offset-2 ring-offset-bg shadow-[0_0_32px_rgba(91,144,224,0.25)]'
            : 'hover:shadow-[0_0_20px_rgba(91,144,224,0.15)]',
        ].join(' ')}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <defs>
            <radialGradient id="sealBg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor={bg0} />
              <stop offset="100%" stopColor={bg1} />
            </radialGradient>
            <path id="topRim" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0" />
            <path id="botRim" d="M 100,100 m -80,0 a 80,80 0 0,0 160,0" />
            <clipPath id="shieldClip">
              <path d="M 91,97 L 109,97 L 110,108 Q 100,118 90,108 Z" />
            </clipPath>
          </defs>

          {/* Background */}
          <circle cx="100" cy="100" r="99" fill="url(#sealBg)" />

          {/* Border rings */}
          <circle cx="100" cy="100" r="97" fill="none" stroke={ring} strokeWidth="1"   strokeOpacity="0.6" />
          <circle cx="100" cy="100" r="93" fill="none" stroke={ring} strokeWidth="0.5" strokeOpacity="0.22" />

          {/* Rim text */}
          <text fontSize="7" fill={rimText} fontFamily="monospace" letterSpacing="3" fillOpacity="0.9">
            <textPath href="#topRim" startOffset="4%">PRESIDENTIAL CANDIDATES · 2028</textPath>
          </text>
          <text fontSize="6.5" fill={rimText} fontFamily="monospace" letterSpacing="5" fillOpacity="0.45">
            <textPath href="#botRim" startOffset="22%">UNITED STATES OF AMERICA</textPath>
          </text>

          {/* 13 rim stars */}
          {Array.from({ length: 13 }, (_, i) => {
            const a = ((i * 360) / 13 - 90) * (Math.PI / 180)
            return (
              <text key={i} x={100 + 84 * Math.cos(a)} y={100 + 84 * Math.sin(a) + 2.5}
                textAnchor="middle" fontSize="5.5" fill={ring} fillOpacity="0.75">★</text>
            )
          })}

          {/* ── Eagle ── */}

          {/* Left wing */}
          <path
            d="M 93,95 C 73,82 43,85 14,102 C 28,108 54,107 78,107 C 87,107 92,102 93,95 Z"
            fill={eagle} fillOpacity="0.92"
          />
          {/* Left wing upper highlight */}
          <path
            d="M 93,95 C 73,82 43,85 14,102 C 30,98 58,90 90,94"
            fill="none" stroke={eagleHi} strokeWidth="0.8" strokeOpacity="0.5"
          />

          {/* Right wing */}
          <path
            d="M 107,95 C 127,82 157,85 186,102 C 172,108 146,107 122,107 C 113,107 108,102 107,95 Z"
            fill={eagle} fillOpacity="0.92"
          />
          {/* Right wing upper highlight */}
          <path
            d="M 107,95 C 127,82 157,85 186,102 C 170,98 142,90 110,94"
            fill="none" stroke={eagleHi} strokeWidth="0.8" strokeOpacity="0.5"
          />

          {/* Tail fan */}
          <path
            d="M 86,120 C 80,134 84,144 100,143 C 116,144 120,134 114,120 Z"
            fill={eagle} fillOpacity="0.85"
          />
          {/* Tail feather lines */}
          {[-8, -4, 0, 4, 8].map((x) => (
            <line key={x}
              x1={100 + x} y1={120}
              x2={100 + x * 1.2} y2={142}
              stroke={bg1} strokeWidth="0.75" strokeOpacity="0.5"
            />
          ))}

          {/* Body */}
          <ellipse cx="100" cy="108" rx="13" ry="15" fill={eagle} fillOpacity="0.95" />

          {/* Neck */}
          <path d="M 93,84 C 91,89 91,94 92,96 L 108,96 C 109,94 109,89 107,84 Z"
            fill={eagle} fillOpacity="0.9" />

          {/* Head (white — bald eagle) */}
          <circle cx="100" cy="75" r="11" fill={eagleHi} fillOpacity="0.95" />

          {/* Eye */}
          <circle cx="105" cy="73" r="2"   fill={bg1} fillOpacity="0.8" />
          <circle cx="105.5" cy="72.5" r="0.7" fill={eagleHi} fillOpacity="0.9" />

          {/* Beak */}
          <path d="M 109,72 L 118,75 L 109,78 Q 111,75 109,72 Z"
            fill={isDark ? '#c8a840' : '#d4b050'} fillOpacity="0.9" />

          {/* ── Chest shield ── */}
          {/* Shield outline */}
          <path d="M 91,97 L 109,97 L 110,108 Q 100,118 90,108 Z"
            fill={shBlue} fillOpacity="0.95" />
          {/* Blue chief (top band) */}
          <rect x="91" y="97" width="18" height="6" fill={shBlue} fillOpacity="1" />
          {/* Vertical stripes (clipped to shield) */}
          <g clipPath="url(#shieldClip)">
            <rect x="91"   y="103" width="6" height="16" fill={shRed}    fillOpacity="0.9" />
            <rect x="97"   y="103" width="6" height="16" fill={shSilver} fillOpacity="0.7" />
            <rect x="103"  y="103" width="6" height="16" fill={shRed}    fillOpacity="0.9" />
          </g>
          {/* Shield border */}
          <path d="M 91,97 L 109,97 L 110,108 Q 100,118 90,108 Z"
            fill="none" stroke={eagle} strokeWidth="0.75" strokeOpacity="0.6" />

          {/* ── Left talon: arrows ── */}
          <g stroke={eagle} strokeWidth="1.2" strokeOpacity="0.8">
            <line x1="80" y1="119" x2="86" y2="129" />
            <line x1="84" y1="117" x2="90" y2="127" />
            <line x1="88" y1="115" x2="94" y2="125" />
            {/* Arrowheads */}
            <polygon points="80,119 77,123 83,122" fill={eagle} stroke="none" fillOpacity="0.8" />
            <polygon points="84,117 81,121 87,120" fill={eagle} stroke="none" fillOpacity="0.8" />
            <polygon points="88,115 85,119 91,118" fill={eagle} stroke="none" fillOpacity="0.8" />
          </g>

          {/* ── Right talon: olive branch ── */}
          <path d="M 116,120 Q 124,126 120,134 Q 116,138 114,136"
            fill="none" stroke={olive} strokeWidth="1.2" strokeOpacity="0.85" />
          <circle cx="119" cy="122" r="2.2" fill={olive} fillOpacity="0.8" />
          <circle cx="123" cy="127" r="2.2" fill={olive} fillOpacity="0.8" />
          <circle cx="120" cy="132" r="2.2" fill={olive} fillOpacity="0.8" />

          {/* 13 stars above eagle in arc */}
          {Array.from({ length: 13 }, (_, i) => {
            const a = (-145 + i * (110 / 12)) * (Math.PI / 180)
            return (
              <polygon key={i}
                points={star5(100 + 52 * Math.cos(a), 100 + 52 * Math.sin(a), 4, 1.7)}
                fill={ring} fillOpacity="0.85"
              />
            )
          })}
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

// ─── Generic District Panel (CA / MS / NJ) ───────────────────────────────────

function StateDistrictPanel({
  stateName,
  stateAbbr,
  senators,
  membersByDistrict,
  districtCount,
  district,
  onBack,
}: {
  stateName: string
  stateAbbr: string
  senators: AnyMember[]
  membersByDistrict: Record<number, AnyMember>
  districtCount: number
  district: number | null
  onBack: () => void
}) {
  const member = district ? membersByDistrict[district] : null

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
            <MemberRow key={s.bioguideId} member={s} />
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-2 mt-3">
          {district ? `DISTRICT ${district} — REPRESENTATIVE` : 'HOVER A DISTRICT'}
        </p>
        {member ? (
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
          {Array.from({ length: districtCount }, (_, i) => i + 1).map((d) => {
            const m = membersByDistrict[d]
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
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip diacritics (á→a, etc.)
    .toLowerCase()
    .replace(/[^a-z\s-]/g, '') // keep letters, spaces, hyphens (e.g. Ocasio-Cortez stays intact)
    .trim()
    .replace(/\s+/g, '-')
}

function MemberRow({ member, large = false }: { member: AnyMember; large?: boolean }) {
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

const DRILLDOWN_STATES = new Set(['California', 'Mississippi', 'New Jersey', 'Florida', 'Texas', 'New York'])

export function ExploreClient() {
  const searchParams = useSearchParams()
  const [showPresidential, setShowPresidential] = useState(false)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [drilldownState, setDrilldownState] = useState<string | null>(null)
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const selectedInfo = selectedState ? stateData[selectedState] ?? null : null

  useEffect(() => {
    const stateParam = searchParams.get('state')
    if (stateParam) {
      setSelectedState(stateParam)
      if (DRILLDOWN_STATES.has(stateParam)) {
        setDrilldownState(stateParam)
      }
    }
  }, [searchParams])

  useEffect(() => {
    if ((selectedState || drilldownState) && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [selectedState, drilldownState])

  const focusedDistrict = hoveredDistrict ?? selectedDistrict

  function handleStateClick(name: string) {
    setSelectedState(name)
    setDrilldownState(null)
    setSelectedDistrict(null)
    setHoveredDistrict(null)
  }

  function handleDrilldown(state: string) {
    setDrilldownState(state)
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

      {/* State District Drilldown — California, Mississippi, New Jersey */}
      {drilldownState && DRILLDOWN_STATES.has(drilldownState) && (() => {
        const isCA = drilldownState === 'California'
        const isMS = drilldownState === 'Mississippi'
        const isNJ = drilldownState === 'New Jersey'
        const isFL = drilldownState === 'Florida'
        const isTX = drilldownState === 'Texas'
        const isNY = drilldownState === 'New York'
        const senators = isCA ? caSenators : isMS ? msSenators : isNJ ? njSenators : isFL ? flSenators : isTX ? txSenators : nySenators
        const membersByDistrict = isCA ? caMembersByDistrict : isMS ? msMembersByDistrict : isNJ ? njMembersByDistrict : isFL ? flMembersByDistrict : isTX ? txMembersByDistrict : nyMembersByDistrict
        const districtCount = isCA ? 52 : isMS ? 4 : isNJ ? 12 : isFL ? 28 : isTX ? 38 : 26
        const abbr = isCA ? 'CA' : isMS ? 'MS' : isNJ ? 'NJ' : isFL ? 'FL' : isTX ? 'TX' : 'NY'

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
                <p className="text-xs text-ink-3 mt-0.5">Hover to preview. Click to pin a district and view the representative's profile.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={isCA || isMS || isFL || isTX ? 'lg:col-span-2' : 'lg:col-span-1'}>
                <div className="border border-border rounded overflow-hidden bg-surface">
                  {isCA && (
                    <CADistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                  {isMS && (
                    <MSDistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                  {isNJ && (
                    <NJDistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                  {isFL && (
                    <FLDistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                  {isTX && (
                    <TXDistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                  {isNY && (
                    <NYDistrictMap
                      selectedDistrict={selectedDistrict}
                      onDistrictHover={setHoveredDistrict}
                      onDistrictClick={(d) => setSelectedDistrict((prev) => prev === d ? null : d)}
                    />
                  )}
                </div>
                <div className="flex items-center gap-5 mt-3 px-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#5882c8] dark:bg-[#1e4080] border border-[#3a62a8] dark:border-[#5580c0]" />
                    <span className="text-[10px] font-mono text-ink-4">Democrat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#c05050] dark:bg-[#5c1515] border border-[#a03030]" />
                    <span className="text-[10px] font-mono text-ink-4">Republican</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#7aa4e8] dark:bg-[#3668c0] border border-[#2563eb] dark:border-[#5b90e0]" />
                    <span className="text-[10px] font-mono text-ink-4">Selected</span>
                  </div>
                </div>
              </div>

              <div ref={panelRef} className={isNJ || isNY ? 'lg:col-span-2' : ''}>
                <StateDistrictPanel
                  stateName={drilldownState}
                  stateAbbr={abbr}
                  senators={senators}
                  membersByDistrict={membersByDistrict}
                  districtCount={districtCount}
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
                      <p className="font-mono text-[9px] text-ink-4 mt-0.5">U.S. Senator · {drilldownState}</p>
                      <span className={`inline-block mt-1.5 font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[s.party]}`}>
                        {partyLabel[s.party].toUpperCase()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
                HOUSE DELEGATION · {districtCount} MEMBERS
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
                {Array.from({ length: districtCount }, (_, i) => i + 1).map(d => {
                  const m = membersByDistrict[d]
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
                          {m.party}
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
        )
      })()}

      {/* US Map section */}
      {!drilldownState && (
        <div>
          <div className="mb-5">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">CONGRESSIONAL & GUBERNATORIAL MAP</p>
            <p className="text-xs text-ink-3">
              Click any state to view governor and congressional info. California, Mississippi, New Jersey, Florida, Texas, and New York have district-level views.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="border border-border rounded overflow-hidden bg-surface">
                <USMap selectedState={selectedState} onStateClick={handleStateClick} />
              </div>
              <div className="flex items-center gap-5 mt-3 px-1 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#7e96c8] dark:bg-[#0e2240] border border-[#4060a0] dark:border-[#1e5a9e]" />
                  <span className="text-[10px] font-mono text-ink-4">District map available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#a0b0d4] dark:bg-[#162040] border border-[#6070a8] dark:border-[#2d4f7e]" />
                  <span className="text-[10px] font-mono text-ink-4">Governor profile</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#b8c4de] dark:bg-[#14162e] border border-[#8898c0] dark:border-[#252848]" />
                  <span className="text-[10px] font-mono text-ink-4">No profile yet</span>
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
                  onDrilldown={selectedState && DRILLDOWN_STATES.has(selectedState) ? () => handleDrilldown(selectedState) : undefined}
                />
              ) : (
                <div className="h-full min-h-[200px] border border-border rounded bg-surface flex flex-col items-center justify-center gap-2 text-center px-6">
                  <p className="font-mono text-[10px] tracking-widest text-ink-4">SELECT A STATE</p>
                  <p className="text-xs text-ink-3 leading-relaxed">
                    Click any state to view its governor, congressional seats, and upcoming elections.
                    {' '}CA, MS, NJ, FL, TX, and NY have district-level detail.
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

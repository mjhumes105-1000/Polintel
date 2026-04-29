'use client'

import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import Link from 'next/link'
import { presidentialCandidates2028, type PresidentialCandidate } from '@/data/presidential'
import { SearchBar } from '@/components/ui/SearchBar'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { CongressionalMapSection, partyLabel, partyColor } from '@/components/map/CongressionalMapSection'

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
          <circle cx="100" cy="100" r="99" fill="url(#sealBg)" />
          <circle cx="100" cy="100" r="97" fill="none" stroke={ring} strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="100" cy="100" r="93" fill="none" stroke={ring} strokeWidth="0.5" strokeOpacity="0.22" />
          <text fontSize="7" fill={rimText} fontFamily="monospace" letterSpacing="3" fillOpacity="0.9">
            <textPath href="#topRim" startOffset="4%">PRESIDENTIAL CANDIDATES · 2028</textPath>
          </text>
          <text fontSize="6.5" fill={rimText} fontFamily="monospace" letterSpacing="5" fillOpacity="0.45">
            <textPath href="#botRim" startOffset="22%">UNITED STATES OF AMERICA</textPath>
          </text>
          {Array.from({ length: 13 }, (_, i) => {
            const a = ((i * 360) / 13 - 90) * (Math.PI / 180)
            return (
              <text key={i} x={100 + 84 * Math.cos(a)} y={100 + 84 * Math.sin(a) + 2.5}
                textAnchor="middle" fontSize="5.5" fill={ring} fillOpacity="0.75">★</text>
            )
          })}
          <path d="M 93,95 C 73,82 43,85 14,102 C 28,108 54,107 78,107 C 87,107 92,102 93,95 Z" fill={eagle} fillOpacity="0.92" />
          <path d="M 93,95 C 73,82 43,85 14,102 C 30,98 58,90 90,94" fill="none" stroke={eagleHi} strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M 107,95 C 127,82 157,85 186,102 C 172,108 146,107 122,107 C 113,107 108,102 107,95 Z" fill={eagle} fillOpacity="0.92" />
          <path d="M 107,95 C 127,82 157,85 186,102 C 170,98 142,90 110,94" fill="none" stroke={eagleHi} strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M 86,120 C 80,134 84,144 100,143 C 116,144 120,134 114,120 Z" fill={eagle} fillOpacity="0.85" />
          {[-8, -4, 0, 4, 8].map((x) => (
            <line key={x} x1={100 + x} y1={120} x2={100 + x * 1.2} y2={142} stroke={bg1} strokeWidth="0.75" strokeOpacity="0.5" />
          ))}
          <ellipse cx="100" cy="108" rx="13" ry="15" fill={eagle} fillOpacity="0.95" />
          <path d="M 93,84 C 91,89 91,94 92,96 L 108,96 C 109,94 109,89 107,84 Z" fill={eagle} fillOpacity="0.9" />
          <circle cx="100" cy="75" r="11" fill={eagleHi} fillOpacity="0.95" />
          <circle cx="105" cy="73" r="2" fill={bg1} fillOpacity="0.8" />
          <circle cx="105.5" cy="72.5" r="0.7" fill={eagleHi} fillOpacity="0.9" />
          <path d="M 109,72 L 118,75 L 109,78 Q 111,75 109,72 Z" fill={isDark ? '#c8a840' : '#d4b050'} fillOpacity="0.9" />
          <path d="M 91,97 L 109,97 L 110,108 Q 100,118 90,108 Z" fill={shBlue} fillOpacity="0.95" />
          <rect x="91" y="97" width="18" height="6" fill={shBlue} fillOpacity="1" />
          <g clipPath="url(#shieldClip)">
            <rect x="91" y="103" width="6" height="16" fill={shRed} fillOpacity="0.9" />
            <rect x="97" y="103" width="6" height="16" fill={shSilver} fillOpacity="0.7" />
            <rect x="103" y="103" width="6" height="16" fill={shRed} fillOpacity="0.9" />
          </g>
          <path d="M 91,97 L 109,97 L 110,108 Q 100,118 90,108 Z" fill="none" stroke={eagle} strokeWidth="0.75" strokeOpacity="0.6" />
          <g stroke={eagle} strokeWidth="1.2" strokeOpacity="0.8">
            <line x1="80" y1="119" x2="86" y2="129" />
            <line x1="84" y1="117" x2="90" y2="127" />
            <line x1="88" y1="115" x2="94" y2="125" />
            <polygon points="80,119 77,123 83,122" fill={eagle} stroke="none" fillOpacity="0.8" />
            <polygon points="84,117 81,121 87,120" fill={eagle} stroke="none" fillOpacity="0.8" />
            <polygon points="88,115 85,119 91,118" fill={eagle} stroke="none" fillOpacity="0.8" />
          </g>
          <path d="M 116,120 Q 124,126 120,134 Q 116,138 114,136" fill="none" stroke={olive} strokeWidth="1.2" strokeOpacity="0.85" />
          <circle cx="119" cy="122" r="2.2" fill={olive} fillOpacity="0.8" />
          <circle cx="123" cy="127" r="2.2" fill={olive} fillOpacity="0.8" />
          <circle cx="120" cy="132" r="2.2" fill={olive} fillOpacity="0.8" />
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

// ─── Main Explore Client ──────────────────────────────────────────────────────

export function ExploreClient() {
  const [showPresidential, setShowPresidential] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Presidential section */}
      <div className="mb-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <PresidentialSeal active={showPresidential} onClick={() => setShowPresidential((v) => !v)} />
        </div>
        {showPresidential && (
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent/70 text-center mb-6">
              2028 PRESIDENTIAL FIELD — CANDIDATES &amp; EXPLORATORY
            </p>

            {/* Republicans */}
            <div className="mb-6">
              <p className="font-mono text-[9px] tracking-widest text-red-500 dark:text-red-400 mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
                REPUBLICAN
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {presidentialCandidates2028.filter(c => c.party === 'R').map((c) => (
                  <CandidateCard key={c.name} candidate={c} />
                ))}
              </div>
            </div>

            {/* Democrats */}
            <div className="mb-5">
              <p className="font-mono text-[9px] tracking-widest text-accent mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                DEMOCRAT
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {presidentialCandidates2028.filter(c => c.party === 'D').map((c) => (
                  <CandidateCard key={c.name} candidate={c} />
                ))}
              </div>
            </div>

            <p className="text-[11px] text-ink-4 text-center font-mono">
              Profiles are added as candidacies develop. Last updated April 2026.
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

      {/* Congressional map */}
      <CongressionalMapSection readStateFromUrl />
    </div>
  )
}

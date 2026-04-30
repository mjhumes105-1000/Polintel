import Link from 'next/link'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import {
  president,
  vicePresident,
  cabinet,
  GROUP_ORDER,
  GROUP_LABEL,
  type CabinetMember,
} from '@/data/cabinet'

// ── Small inline seal SVG ─────────────────────────────────────────────────────

function MiniSeal() {
  return (
    <svg viewBox="0 0 40 40" width="18" height="18" aria-hidden className="opacity-60 shrink-0">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.5" />
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => {
        const a = (i * 360/13 - 90) * Math.PI / 180
        return <circle key={i} cx={20 + 17.5*Math.cos(a)} cy={20 + 17.5*Math.sin(a)} r="0.9" fill="currentColor" fillOpacity="0.7" />
      })}
      <ellipse cx="20" cy="22" rx="5" ry="7" fill="currentColor" fillOpacity="0.85" />
      <path d="M 17,14 C 16,17 16,20 17,21 L 23,21 C 24,20 24,17 23,14 Z" fill="currentColor" fillOpacity="0.9" />
      <circle cx="20" cy="11" r="4" fill="currentColor" fillOpacity="0.9" />
    </svg>
  )
}

// ── POTUS Baseball Card (large) ───────────────────────────────────────────────

function PotusCard() {
  const inner = (
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-600/50 shadow-xl shadow-black/30 group hover:border-zinc-400/50 transition-all">
      <img
        src={president.photoUrl}
        alt={president.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/97 via-zinc-950/20 to-zinc-950/30" />

      {/* Top badge */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 text-amber-400/90">
        <MiniSeal />
        <span className="font-mono text-[7px] tracking-widest uppercase">
          {president.ordinal} President
        </span>
      </div>

      {/* Card number */}
      <div className="absolute top-2.5 right-2.5">
        <span className="font-mono text-[9px] font-bold text-amber-500/50">#47</span>
      </div>

      {/* Stats band */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8"
        style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.97) 55%, transparent)' }}
      >
        <p className="text-lg font-bold text-white leading-tight tracking-tight">
          {president.name}
        </p>
        <p className="font-mono text-[7px] tracking-widest text-zinc-400 mt-0.5">
          PRESIDENT OF THE UNITED STATES
        </p>
        <div className="h-px w-full bg-zinc-600/30 my-2" />
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[7px] px-1.5 py-0.5 rounded border border-red-700/50 text-red-400 bg-red-950/30">
            REPUBLICAN
          </span>
          <span className="font-mono text-[7px] text-zinc-500">{president.term}</span>
        </div>
        {president.profileSlug && (
          <p className="font-mono text-[8px] text-zinc-400/50 group-hover:text-zinc-300 mt-1.5 transition-colors">
            VIEW PROFILE →
          </p>
        )}
      </div>
    </div>
  )

  return president.profileSlug
    ? <Link href={`/politicians/${president.profileSlug}`} className="block">{inner}</Link>
    : <div>{inner}</div>
}

// ── VP Baseball Card (medium) ─────────────────────────────────────────────────

function VPCard() {
  const inner = (
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-600/50 shadow-lg group hover:border-zinc-400/50 transition-all">
      <img
        src={vicePresident.photoUrl}
        alt={vicePresident.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/97 via-zinc-950/20 to-zinc-950/25" />

      {/* Top badge */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
        <span className="font-mono text-[6px] tracking-widest text-zinc-400">VICE PRESIDENT</span>
        <span className="font-mono text-[8px] font-bold text-zinc-500/50">#2</span>
      </div>

      {/* Stats band */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8"
        style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.97) 55%, transparent)' }}
      >
        <p className="text-base font-bold text-white leading-tight">{vicePresident.name}</p>
        <p className="font-mono text-[6px] tracking-widest text-zinc-400 mt-0.5">VICE PRESIDENT</p>
        <div className="h-px w-full bg-zinc-600/30 my-2" />
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[6px] px-1.5 py-0.5 rounded border border-red-700/50 text-red-400 bg-red-950/30">
            REPUBLICAN
          </span>
          {vicePresident.state && (
            <span className="font-mono text-[6px] text-zinc-500 border border-zinc-700 rounded px-1 py-0.5">
              {vicePresident.state}
            </span>
          )}
        </div>
        {vicePresident.profileSlug && (
          <p className="font-mono text-[7px] text-zinc-400/50 group-hover:text-zinc-300 mt-1.5 transition-colors">
            PROFILE →
          </p>
        )}
      </div>
    </div>
  )

  return vicePresident.profileSlug
    ? <Link href={`/politicians/${vicePresident.profileSlug}`} className="block">{inner}</Link>
    : <div>{inner}</div>
}

// ── Cabinet Member Card ───────────────────────────────────────────────────────

function CabinetCard({ member }: { member: CabinetMember }) {
  const inner = (
    <div className={[
      'flex flex-col gap-2 p-3 bg-surface border rounded-lg transition-all',
      member.profileSlug
        ? 'border-border hover:border-accent/40 hover:bg-surface-2 group cursor-pointer'
        : 'border-border opacity-90',
    ].join(' ')}>
      <div className="flex items-center gap-2.5">
        <PoliticianPhoto name={member.name} photoUrl={member.photoUrl} size={32} />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-ink leading-tight truncate group-hover:text-accent transition-colors">
            {member.name}
          </p>
          <p className="font-mono text-[9px] text-accent/70 leading-snug truncate">
            {member.shortTitle}
          </p>
        </div>
      </div>
      <p className="text-[10px] text-ink-4 leading-snug line-clamp-1">
        fmr. {member.priorRole}
      </p>
      {member.state && (
        <span className="self-start font-mono text-[8px] text-ink-4 border border-border rounded px-1 py-0.5">
          {member.state}
        </span>
      )}
    </div>
  )

  return member.profileSlug
    ? <Link href={`/politicians/${member.profileSlug}`}>{inner}</Link>
    : <div>{inner}</div>
}

// ── Main Section ──────────────────────────────────────────────────────────────

export function ExecutiveBranchSection() {
  const byGroup = Object.fromEntries(
    GROUP_ORDER.map(g => [g, cabinet.filter(m => m.group === g)])
  ) as Record<CabinetMember['group'], CabinetMember[]>

  return (
    <section className="mb-12 pb-10 border-b border-border">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">EXECUTIVE BRANCH</p>
          <h2 className="text-lg font-semibold text-ink">Trump Administration</h2>
        </div>
      </div>

      {/* Baseball card row: Trump | Vance — equal size, centered */}
      <div className="grid grid-cols-2 gap-4 mb-8 items-start max-w-md mx-auto">
        <PotusCard />
        <VPCard />
      </div>

      {/* Cabinet by group */}
      <div className="space-y-6">
        {GROUP_ORDER.map(group => (
          <div key={group}>
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2.5 flex items-center gap-2">
              <span className="inline-block w-6 border-t border-border" />
              {GROUP_LABEL[group]}
              <span className="inline-block flex-1 border-t border-border" />
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {byGroup[group].map(m => (
                <CabinetCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-[9px] text-ink-4">
        Cabinet data current as of April 2026. Profiles added as records are verified.
      </p>
    </section>
  )
}

import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { supremeCourt, courtComposition, type Justice } from '@/data/scotus'

// ── Small inline column/pediment mark (SCOTUS building motif) ─────────────────

function MiniColumns() {
  return (
    <svg viewBox="0 0 40 40" width="18" height="18" aria-hidden className="opacity-60 shrink-0">
      <path d="M4 14 L20 6 L36 14 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.2" />
      {[8, 15, 22, 29].map(x => (
        <line key={x} x1={x} y1="16" x2={x} y2="32" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.85" />
      ))}
      <line x1="3" y1="34" x2="37" y2="34" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

// ── Chief Justice — featured card ─────────────────────────────────────────────

function ChiefCard({ justice }: { justice: Justice }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-surface border border-accent/30 rounded-xl">
      <PoliticianPhoto name={justice.name} photoUrl={justice.photoUrl} size={56} />
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-0.5">CHIEF JUSTICE</p>
        <p className="text-base font-semibold text-ink leading-tight">{justice.name}</p>
        <p className="text-[11px] text-ink-3 mt-1 leading-snug">
          Appointed by {justice.appointedBy} · {justice.tookSeat}
        </p>
        <p className="text-[10px] text-ink-4 mt-0.5 leading-snug">fmr. {justice.priorRole}</p>
      </div>
    </div>
  )
}

// ── Associate Justice card ────────────────────────────────────────────────────

function JusticeCard({ justice }: { justice: Justice }) {
  return (
    <div className="flex flex-col gap-2 p-3 bg-surface border border-border rounded-lg">
      <div className="flex items-center gap-2.5">
        <PoliticianPhoto name={justice.name} photoUrl={justice.photoUrl} size={32} />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-ink leading-tight truncate">{justice.name}</p>
          <p className="font-mono text-[9px] text-accent/70 leading-snug">Associate Justice</p>
        </div>
      </div>
      <p className="text-[10px] text-ink-4 leading-snug">
        Appt. {justice.tookSeat} · {justice.appointedBy}
      </p>
      <p className="text-[10px] text-ink-4 leading-snug line-clamp-1">fmr. {justice.priorRole}</p>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────

export function JudicialBranchSection() {
  const chief = supremeCourt.find(j => j.role === 'Chief Justice')!
  const associates = supremeCourt
    .filter(j => j.role === 'Associate Justice')
    .sort((a, b) => a.seniority - b.seniority)

  return (
    <section className="mb-12 pb-10 border-b border-border">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-ink">
          <MiniColumns />
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">JUDICIAL BRANCH</p>
            <h2 className="text-lg font-semibold text-ink">The Supreme Court</h2>
          </div>
        </div>
        <p className="font-mono text-[9px] text-ink-4 leading-relaxed text-right">
          9 JUSTICES · {courtComposition.republicanAppointed}R / {courtComposition.democratAppointed}D APPOINTED
        </p>
      </div>

      {/* Chief Justice featured */}
      <div className="mb-8 max-w-md">
        <ChiefCard justice={chief} />
      </div>

      {/* Associate justices — seniority order */}
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2.5 flex items-center gap-2">
        <span className="inline-block w-6 border-t border-border" />
        ASSOCIATE JUSTICES · BY SENIORITY
        <span className="inline-block flex-1 border-t border-border" />
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {associates.map(j => (
          <JusticeCard key={j.name} justice={j} />
        ))}
      </div>

      <p className="mt-6 font-mono text-[9px] text-ink-4 leading-relaxed">
        Composition current as of August 2026 — no changes since Justice Jackson took her seat in 2022.
        &ldquo;Appointed by&rdquo; notes the nominating president; justices hold no party affiliation.
        Source: Supreme Court of the United States.
      </p>
    </section>
  )
}

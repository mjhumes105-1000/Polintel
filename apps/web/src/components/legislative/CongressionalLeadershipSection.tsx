import Link from 'next/link'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'
import { HOUSE_LEADERS, SENATE_LEADERS, type CongressLeader } from '@/data/congressional-leadership'

const PARTY_STYLE: Record<string, string> = {
  Republican: 'text-red-400 border-red-700/60 bg-red-950/20',
  Democrat:   'text-blue-400 border-blue-700/60 bg-blue-950/20',
  Independent:'text-ink-3 border-border',
}

function LeaderCard({ leader, featured }: { leader: CongressLeader; featured?: boolean }) {
  const inner = (
    <div className={[
      'flex items-center gap-3 p-4 bg-surface border rounded-lg transition-all',
      featured
        ? 'border-accent/25 hover:border-accent/50 hover:bg-surface-2'
        : 'border-border hover:border-accent/40 hover:bg-surface-2',
      leader.profileSlug ? 'group cursor-pointer' : '',
    ].join(' ')}>
      <PoliticianPhoto name={leader.name} photoUrl={leader.photoUrl} size={featured ? 52 : 40} />
      <div className="flex-1 min-w-0">
        <p className={[
          'font-medium text-ink leading-tight truncate group-hover:text-accent transition-colors',
          featured ? 'text-base' : 'text-sm',
        ].join(' ')}>
          {leader.name}
        </p>
        <p className={[
          'font-mono text-accent/70 leading-snug truncate mt-0.5',
          featured ? 'text-[10px]' : 'text-[9px]',
        ].join(' ')}>
          {leader.title}
        </p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${PARTY_STYLE[leader.party]}`}>
            {leader.party.toUpperCase()}
          </span>
          <span className="font-mono text-[8px] text-ink-4">{leader.state}</span>
        </div>
      </div>
      {leader.profileSlug && (
        <span className="font-mono text-[9px] text-accent group-hover:text-accent-bright transition-colors shrink-0">→</span>
      )}
    </div>
  )

  if (leader.profileSlug) {
    return <Link href={`/politicians/${leader.profileSlug}`}>{inner}</Link>
  }
  return <a href={leader.url} target="_blank" rel="noopener noreferrer">{inner}</a>
}

export function CongressionalLeadershipSection() {
  return (
    <section className="mb-10 pb-10 border-b border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1">CONGRESSIONAL LEADERSHIP</p>
          <h2 className="text-lg font-semibold text-ink">119th Congress · 2025–2027</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* House */}
        <div>
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3 flex items-center gap-2">
            <span className="inline-block w-4 border-t border-border" />
            HOUSE OF REPRESENTATIVES
            <span className="inline-block flex-1 border-t border-border" />
          </p>
          <div className="flex flex-col gap-2">
            {HOUSE_LEADERS.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} featured={i === 0} />
            ))}
          </div>
        </div>

        {/* Senate */}
        <div>
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3 flex items-center gap-2">
            <span className="inline-block w-4 border-t border-border" />
            SENATE
            <span className="inline-block flex-1 border-t border-border" />
          </p>
          <div className="flex flex-col gap-2">
            {SENATE_LEADERS.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} featured={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

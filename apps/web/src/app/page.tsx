import Link from 'next/link'
import newsom from '@/data/politicians/gavin-newsom'
import { SearchBar } from '@/components/ui/SearchBar'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest text-accent mb-4">
          POLITICAL INTELLIGENCE PLATFORM
        </p>
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-4 max-w-xl">
          The public record, organized.
        </h1>
        <p className="text-ink-2 text-base leading-relaxed max-w-2xl mb-6">
          Votes, statements, campaign funding, and legislative history — pulled from primary sources,
          cited, and interpreted without partisan framing. Every claim traces to a public record.
          No scores. No ratings. No spin.
        </p>
        <SearchBar
          placeholder="Search politicians, states, candidates…"
          navigateOnSubmit
          size="lg"
          className="max-w-2xl mb-6"
        />
        <div className="flex gap-4">
          <Link
            href="/methodology"
            className="text-xs font-mono text-ink-3 hover:text-ink-2 transition-colors border border-border rounded px-3 py-1.5 hover:border-accent"
          >
            HOW THIS WORKS →
          </Link>
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-widest text-accent mb-4">
          PROFILES
        </p>
        <div className="grid gap-px bg-border border border-border rounded overflow-hidden">
          <ProfileRow politician={newsom} />
        </div>
        <p className="text-xs text-ink-4 font-mono mt-3">
          MVP prototype — additional profiles in development
        </p>
      </div>
    </div>
  )
}

function ProfileRow({ politician }: { politician: typeof newsom }) {
  const { baselineCard } = politician
  const sinceYear = baselineCard.currentOffice.startDate.slice(0, 4)
  const timelineCount = politician.timeline.length
  const flagCount = politician.timeline.filter((e) => e.type === 'contradiction').length

  return (
    <Link
      href={`/politicians/${politician.slug}`}
      className="group bg-surface hover:bg-surface-2 transition-colors px-5 py-4 flex items-center gap-4"
    >
      <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={40} />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 mb-0.5">
          <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
            {politician.name}
          </span>
          <span className="font-mono text-[10px] text-ink-3">
            {baselineCard.party.replace(' Party', '')}
          </span>
        </div>
        <p className="text-xs text-ink-3">
          {baselineCard.currentOffice.title}, {baselineCard.currentOffice.jurisdiction} · since {sinceYear}
        </p>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <div className="text-center hidden sm:block">
          <p className="font-mono text-sm text-ink">{timelineCount}</p>
          <p className="font-mono text-[10px] text-ink-4">EVENTS</p>
        </div>
        {flagCount > 0 && (
          <div className="text-center hidden sm:block">
            <p className="font-mono text-sm text-flag">{flagCount}</p>
            <p className="font-mono text-[10px] text-ink-4">FLAGS</p>
          </div>
        )}
        <span className="text-ink-3 group-hover:text-accent transition-colors text-sm">→</span>
      </div>
    </Link>
  )
}

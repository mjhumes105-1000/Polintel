import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { CandidacyStatus, PlatformPlank, Endorsement } from '@political-intel/types'
import newsom from '@/data/politicians/gavin-newsom'
import { CandidacyFunding } from '@/components/candidacy/CandidacyFunding'
import { PlatformSection } from '@/components/candidacy/PlatformSection'
import { SourceBadge } from '@/components/ui/SourceBadge'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'

const politicians = { 'gavin-newsom': newsom }

export function generateStaticParams() {
  return Object.keys(politicians)
    .filter((slug) => politicians[slug as keyof typeof politicians].candidacy)
    .map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const politician = politicians[slug as keyof typeof politicians]
  if (!politician?.candidacy) return {}
  return {
    title: `${politician.name} — ${politician.candidacy.office} Candidacy`,
    description: politician.candidacy.summary.slice(0, 160),
  }
}

const statusConfig: Record<CandidacyStatus, { label: string; className: string }> = {
  exploring: {
    label: 'EXPLORING',
    className: 'text-ink-2 border-border bg-surface-2',
  },
  declared: {
    label: 'DECLARED CANDIDATE',
    className: 'text-accent border-accent-muted bg-accent/5',
  },
  withdrawn: {
    label: 'WITHDRAWN',
    className: 'text-ink-3 border-border bg-surface',
  },
  won: {
    label: 'WON',
    className: 'text-teal-400 border-teal-900 bg-teal-950',
  },
  lost: {
    label: 'LOST',
    className: 'text-ink-3 border-border bg-surface',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function CandidacyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const politician = politicians[slug as keyof typeof politicians]
  if (!politician?.candidacy) notFound()

  const { candidacy } = politician
  const sourcesById = Object.fromEntries(candidacy.sources.map((s) => [s.id, s]))
  const status = statusConfig[candidacy.status]

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-4">
        <Link
          href={`/politicians/${slug}`}
          className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-ink-3 transition-colors"
        >
          ← {politician.name.toUpperCase()} — PUBLIC RECORD
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-border pb-8 mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent mb-4">CANDIDACY</p>

        <div className="flex items-start gap-6">
          <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={64} />
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">
              {politician.name}
            </h1>
            <p className="text-lg text-ink-2 mb-4">
              {candidacy.office}
              {candidacy.jurisdiction !== 'Federal' && `, ${candidacy.jurisdiction}`}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`font-mono text-[10px] tracking-widest px-2.5 py-1 rounded border ${status.className}`}
              >
                {status.label}
              </span>
              {candidacy.electionDate && (
                <span className="font-mono text-[10px] text-ink-3">
                  Election: {formatDate(candidacy.electionDate)}
                </span>
              )}
              {candidacy.announcedDate && (
                <span className="font-mono text-[10px] text-ink-3">
                  Announced: {formatDate(candidacy.announcedDate)}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">OVERVIEW</h2>
        <div className="bg-surface border border-border rounded p-5">
          <p className="text-sm text-ink-2 leading-relaxed">{candidacy.summary}</p>
        </div>
      </section>

      {/* Two-column layout for platform + endorsements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <PlatformSection planks={candidacy.platformPlanks} sourcesById={sourcesById} />
        </div>
        <div>
          <EndorsementsPanel endorsements={candidacy.endorsements} sourcesById={sourcesById} />
        </div>
      </div>

      {/* Funding */}
      {candidacy.funding.length > 0 && (
        <CandidacyFunding cycles={candidacy.funding} sources={candidacy.sources} />
      )}

      {/* Sources */}
      {candidacy.sources.length > 0 && (
        <section className="mt-10 pt-8 border-t border-border">
          <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">SOURCES</h2>
          <div className="space-y-2">
            {candidacy.sources.map((source) => (
              <div key={source.id} className="flex items-start gap-3 text-xs">
                <SourceBadge source={source} />
                <div className="min-w-0">
                  <p className="text-ink-2 leading-snug">{source.label}</p>
                  {source.publishedAt && (
                    <p className="text-ink-4 font-mono text-[10px] mt-0.5">
                      {formatDate(source.publishedAt)} · Retrieved {formatDate(source.retrievedAt)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function EndorsementsPanel({
  endorsements,
  sourcesById,
}: {
  endorsements: Endorsement[]
  sourcesById: Record<string, ReturnType<typeof Object.fromEntries>[string]>
}) {
  return (
    <div>
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">ENDORSEMENTS</h2>
      <div className="space-y-2">
        {endorsements.map((e, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded px-4 py-3"
          >
            <p className="text-sm font-medium text-ink leading-tight">{e.name}</p>
            <p className="text-xs text-ink-3 mt-0.5 leading-snug">{e.title}</p>
            <div className="flex items-center gap-2 mt-1.5">
              {e.party && (
                <span className="font-mono text-[9px] text-ink-4">
                  {e.party.replace(' Party', '')}
                </span>
              )}
              <span className="font-mono text-[9px] text-ink-4">·</span>
              <span className="font-mono text-[9px] text-ink-4">
                {new Date(e.date).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

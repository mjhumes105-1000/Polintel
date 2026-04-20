import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { PoliticianProfile, CandidacyStatus, TimelineEvent } from '@political-intel/types'
import newsom from '@/data/politicians/gavin-newsom'
import { caDelegationProfiles } from '@/data/politicians/ca-delegation'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { BaselineCard } from '@/components/profile/BaselineCard'
import { Timeline } from '@/components/profile/Timeline'
import { FundingSection } from '@/components/profile/FundingSection'
import { RecordAssessment } from '@/components/profile/RecordAssessment'
import { StickyProfileHeader } from '@/components/profile/StickyProfileHeader'
import { BackButton } from '@/components/ui/BackButton'
import { getLegislator } from '@/data/legislators'
import { fetchLiveTimeline } from '@/lib/fetchLiveTimeline'

export const revalidate = 86400

const politicians: Record<string, PoliticianProfile> = {
  'gavin-newsom': newsom,
  ...caDelegationProfiles,
}

export function generateStaticParams() {
  return Object.keys(politicians).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const politician = politicians[slug]
  if (!politician) return {}
  return {
    title: politician.name,
    description: politician.bio,
  }
}

const statusLabel: Record<CandidacyStatus, string> = {
  exploring: 'EXPLORING',
  declared: 'DECLARED',
  withdrawn: 'WITHDRAWN',
  won: 'WON',
  lost: 'LOST',
}

const statusColor: Record<CandidacyStatus, string> = {
  exploring: 'text-ink-3 border-border',
  declared: 'text-accent border-accent-muted',
  withdrawn: 'text-ink-4 border-border',
  won: 'text-teal-400 border-teal-900',
  lost: 'text-ink-4 border-border',
}

const GOVTRACK_SOURCE = {
  id: 'govtrack',
  label: 'GovTrack — Live Congressional Record',
  url: 'https://www.govtrack.us',
  publisher: 'GovTrack.us',
  retrievedAt: new Date().toISOString().slice(0, 10),
  type: 'legislative-record' as const,
}

export default async function PoliticianPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const politician = politicians[slug]
  if (!politician) notFound()

  // Fetch live timeline events from GovTrack (cached for 24h via revalidate)
  const enriched = getLegislator(politician.id)
  let liveEvents: TimelineEvent[] = []
  if (enriched?.govtrack) {
    liveEvents = await fetchLiveTimeline(enriched.govtrack, politician.id).catch(() => [])
  }

  // Merge live events with static timeline, deduplicate by id, sort newest first
  const staticIds = new Set(politician.timeline.map((e) => e.id))
  const merged = [
    ...politician.timeline,
    ...liveEvents.filter((e) => !staticIds.has(e.id)),
  ]

  const enrichedPolitician: PoliticianProfile = {
    ...politician,
    timeline: merged,
    sources: [
      ...politician.sources,
      ...(liveEvents.length > 0 ? [GOVTRACK_SOURCE] : []),
    ],
  }

  return (
    <>
      <StickyProfileHeader politician={enrichedPolitician} />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div id="profile-header-sentinel" />
        <div className="mb-4">
          <BackButton />
        </div>
        <ProfileHeader politician={enrichedPolitician} />

        {enrichedPolitician.candidacy && (
          <Link
            href={`/politicians/${slug}/candidacy`}
            className="group flex items-center justify-between gap-4 mb-8 px-5 py-4 bg-surface border border-accent/30 rounded hover:border-accent hover:bg-surface-2 transition-colors"
          >
            <div>
              <p className="font-mono text-[10px] tracking-widest text-accent mb-1">CANDIDACY</p>
              <p className="text-sm font-medium text-ink">
                {enrichedPolitician.candidacy.office}
              </p>
              <p className="text-xs text-ink-3 mt-0.5">
                Platform · Endorsements · Campaign Finance
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusColor[enrichedPolitician.candidacy.status]}`}
              >
                {statusLabel[enrichedPolitician.candidacy.status]}
              </span>
              <span className="text-ink-3 group-hover:text-accent transition-colors text-sm">→</span>
            </div>
          </Link>
        )}

        <BaselineCard politician={enrichedPolitician} />
        <Timeline politician={enrichedPolitician} liveEventCount={liveEvents.length} />
        <FundingSection politician={enrichedPolitician} />
        <RecordAssessment politician={enrichedPolitician} />
      </div>
    </>
  )
}

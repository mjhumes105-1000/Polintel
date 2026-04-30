import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { PoliticianProfile, CandidacyStatus, TimelineEvent } from '@political-intel/types'
import newsom from '@/data/politicians/gavin-newsom'
import tomCotton from '@/data/politicians/tom-cotton'
import { allDelegationProfiles } from '@/data/politicians/all-delegations'
import { stubProfiles, stubProfileSlugs } from '@/data/politicians/stub-profiles'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { BaselineCard } from '@/components/profile/BaselineCard'
import { Timeline } from '@/components/profile/Timeline'
import { FundingSection } from '@/components/profile/FundingSection'
import { RecordAssessment } from '@/components/profile/RecordAssessment'
import { StickyProfileHeader } from '@/components/profile/StickyProfileHeader'
import { BackButton } from '@/components/ui/BackButton'
import { AlertCapture } from '@/components/profile/AlertCapture'
import { StubProfilePage } from '@/components/profile/StubProfilePage'
import { TrumpProfilePage } from '@/components/executive/TrumpProfilePage'
import { fetchPresidentialActions } from '@/lib/fetchPresidentialActions'
import { fetchSignedBills, fetchVetoedBills, PUSHED_BILLS } from '@/lib/fetchPresidentialBills'
import { getLegislator } from '@/data/legislators'
import { fetchLiveTimeline } from '@/lib/fetchLiveTimeline'
import { fetchFECDonors } from '@/lib/fetchFECDonors'
import { fetchNewsItems } from '@/lib/fetchNewsItems'
import { NewsFeed } from '@/components/profile/NewsFeed'

export const revalidate = 86400

const fullProfiles: Record<string, PoliticianProfile> = {
  'gavin-newsom': newsom,
  'tom-cotton': tomCotton,
  ...allDelegationProfiles,
}

const politicians: Record<string, PoliticianProfile> = {
  ...fullProfiles,
  ...stubProfiles,
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

  const { name, bio, photoUrl, baselineCard } = politician
  const title = `${name} — PoliIntel`
  const description =
    bio ??
    `${baselineCard.currentOffice.title}, ${baselineCard.currentOffice.jurisdiction} · ${baselineCard.party} · Public record, votes, funding, and bill activity.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      ...(photoUrl ? { images: [{ url: photoUrl, width: 400, height: 400, alt: name }] } : {}),
    },
    twitter: {
      card: photoUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(photoUrl ? { images: [photoUrl] } : {}),
    },
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

const STATE_EXPLORE_HREF: Record<string, string> = {
  California: '/explore?state=California',
  Mississippi: '/explore?state=Mississippi',
  'New Jersey': '/explore?state=New Jersey',
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

  // Presidential profile — full live data page
  if (slug === 'donald-trump') {
    const [actions, signedBills, vetoedBills] = await Promise.all([
      fetchPresidentialActions().catch(() => ({ executiveOrders: [], memoranda: [], proclamations: [] })),
      fetchSignedBills().catch(() => []),
      fetchVetoedBills().catch(() => []),
    ])
    return (
      <TrumpProfilePage
        politician={politician}
        executiveOrders={actions.executiveOrders}
        memoranda={actions.memoranda}
        proclamations={actions.proclamations}
        signedBills={signedBills}
        vetoedBills={vetoedBills}
        pushedBills={PUSHED_BILLS}
        hasApiKey={!!process.env.CONGRESS_API_KEY}
        lastUpdated={new Date().toISOString().slice(0, 10)}
      />
    )
  }

  // Render minimal stub page for profiles not yet fully researched
  if (stubProfileSlugs.has(slug)) {
    return <StubProfilePage politician={politician} />
  }

  // Fetch live timeline events from GovTrack (cached for 24h via revalidate)
  const enriched = getLegislator(politician.id)
  const chamber = enriched?.currentTerm?.type === 'sen' ? 'Senate' : 'House'

  const [liveEvents, fecFunding, newsItems] = await Promise.all([
    enriched?.govtrack
      ? fetchLiveTimeline(enriched.govtrack, politician.id).catch(() => [])
      : Promise.resolve([]),
    fetchFECDonors(politician.name, politician.state, chamber).catch(() => null),
    fetchNewsItems(enriched?.govtrack ?? null, politician.name).catch(() => []),
  ])

  // Merge live events with static timeline, deduplicate by id, sort newest first
  const staticIds = new Set(politician.timeline.map((e) => e.id))
  const merged = [
    ...politician.timeline,
    ...liveEvents.filter((e) => !staticIds.has(e.id)),
  ]

  // Merge FEC funding (real donor names) with static funding data
  const fecSourceId = fecFunding ? `fec-${politician.id}` : null
  const fecSource = fecFunding && fecSourceId ? {
    id: fecSourceId,
    label: `${politician.name} — FEC Campaign Finance (Live)`,
    url: `https://www.fec.gov/data/candidate/?q=${encodeURIComponent(politician.name)}`,
    publisher: 'Federal Election Commission',
    retrievedAt: new Date().toISOString().slice(0, 10),
    type: 'campaign-finance' as const,
  } : null

  const funding = fecFunding
    ? [{ ...fecFunding, sourceIds: [fecSourceId!] }, ...politician.funding]
    : politician.funding

  const enrichedPolitician: PoliticianProfile = {
    ...politician,
    timeline: merged,
    funding,
    sources: [
      ...politician.sources,
      ...(liveEvents.length > 0 ? [GOVTRACK_SOURCE] : []),
      ...(fecSource ? [fecSource] : []),
    ],
  }

  const backHref = STATE_EXPLORE_HREF[politician.state] ?? '/politicians'

  return (
    <>
      <StickyProfileHeader politician={enrichedPolitician} />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div id="profile-header-sentinel" />
        <div className="mb-4">
          <BackButton href={backHref} />
        </div>
        <ProfileHeader politician={enrichedPolitician} />

        {/* Compare With button */}
        <Link
          href={`/compare?a=${politician.slug}`}
          className="group inline-flex items-center gap-2 mb-6 px-4 py-2 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors text-xs font-mono text-ink-3 hover:text-accent"
        >
          Compare {politician.name.split(' ').pop()} with →
        </Link>

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

        <AlertCapture politicianId={politician.id} politicianName={politician.name} />
        <BaselineCard politician={enrichedPolitician} />
        <Timeline politician={enrichedPolitician} liveEventCount={liveEvents.length} />
        <NewsFeed items={newsItems} politicianName={politician.name} />
        <FundingSection politician={enrichedPolitician} />
        <RecordAssessment politician={enrichedPolitician} />
      </div>
    </>
  )
}

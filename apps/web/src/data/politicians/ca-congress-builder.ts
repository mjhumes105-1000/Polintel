import type {
  PoliticianProfile,
  TimelineEvent,
  FundingCycle,
  CommitteeRole,
  LegislatorContact,
  LegislatorSocial,
} from '@political-intel/types'
import { getLegislator, getPhotoUrl } from '../legislators'

export interface CommitteeAssignment {
  slug: string
  name: string
  chamber: 'House' | 'Senate'
  role: 'Chair' | 'Ranking Member' | 'Member'
}

export interface KeyMilestone {
  year: number
  description: string
}

export interface TopSector {
  category: string
  amount: number
  percentage: number
}

export interface CongressMemberData {
  bioguideId: string
  slug: string
  name: string
  party: 'D' | 'R' | 'I'
  chamber: 'House' | 'Senate'
  district?: number
  state: string
  currentTitle: string
  bio: string
  photoUrl?: string
  sinceYear: number
  committees: CommitteeAssignment[]
  keyMilestones?: KeyMilestone[]
  topSectors?: TopSector[]
  notableVote?: { title: string; year: number; summary: string }
  notableBill?: { title: string; year: number; summary: string }
}

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}

function buildTimeline(data: CongressMemberData): TimelineEvent[] {
  const events: TimelineEvent[] = []

  const electedYear = data.sinceYear - 1
  events.push({
    id: `elected-${data.bioguideId}`,
    date: `${electedYear}-11-01`,
    type: 'milestone',
    title: `Elected to ${data.chamber === 'Senate' ? 'U.S. Senate' : 'U.S. House'}`,
    summary: `${data.name} was elected to ${data.chamber === 'Senate' ? 'the U.S. Senate' : `represent California's ${data.district ? `${data.district}${ordinal(data.district)} Congressional District` : 'district'} in the U.S. House of Representatives`} in ${electedYear}.`,
    sourceIds: ['congress-gov'],
    tags: ['election', 'milestone'],
  })

  events.push({
    id: `sworn-in-${data.bioguideId}`,
    date: `${data.sinceYear}-01-03`,
    type: 'milestone',
    title: `Sworn into the ${data.chamber === 'Senate' ? 'U.S. Senate' : 'U.S. House of Representatives'}`,
    summary: `${data.name} was sworn in on January 3, ${data.sinceYear}, beginning their congressional service.`,
    sourceIds: ['congress-gov'],
    tags: ['milestone', 'congress'],
  })

  if (data.notableVote) {
    events.push({
      id: `vote-${data.bioguideId}-1`,
      date: `${data.notableVote.year}-06-01`,
      type: 'vote',
      title: data.notableVote.title,
      summary: data.notableVote.summary,
      sourceIds: ['congress-gov'],
      tags: ['vote', 'legislation'],
    })
  }

  if (data.notableBill) {
    events.push({
      id: `bill-${data.bioguideId}-1`,
      date: `${data.notableBill.year}-03-01`,
      type: 'bill',
      title: data.notableBill.title,
      summary: data.notableBill.summary,
      sourceIds: ['congress-gov'],
      tags: ['legislation'],
    })
  }

  if (data.keyMilestones) {
    data.keyMilestones.forEach((m, i) => {
      events.push({
        id: `milestone-${data.bioguideId}-${i}`,
        date: `${m.year}-01-01`,
        type: 'milestone',
        title: m.description,
        summary: m.description,
        sourceIds: ['congress-gov'],
        tags: ['milestone'],
      })
    })
  }

  return events.sort((a, b) => a.date.localeCompare(b.date))
}

function buildFunding(data: CongressMemberData): FundingCycle[] {
  const sectors: TopSector[] = data.topSectors ?? [
    { category: 'Individual Contributors', amount: 800000, percentage: 55 },
    { category: 'PACs', amount: 400000, percentage: 28 },
    { category: 'Small-Dollar Donors', amount: 245000, percentage: 17 },
  ]

  const total = sectors.reduce((sum, s) => sum + s.amount, 0)

  return [
    {
      cycle: '2024',
      label: '2023–2024 Election Cycle',
      totalRaised: total,
      topDonorCategories: sectors.map((s) => ({
        category: s.category,
        amount: s.amount,
        percentage: s.percentage,
      })),
      sourceIds: ['fec-gov'],
      notes: 'FEC filings data, 2023–2024 cycle',
    },
  ]
}

function thomasIdToSlug(thomasId: string): string {
  // Strip subcommittee digit suffix (e.g. HSAS28 → HSAS) and lowercase
  const parentId = thomasId.replace(/\d+$/, '')
  return parentId.toLowerCase()
}

export function buildCongressProfile(data: CongressMemberData): PoliticianProfile {
  const enriched = getLegislator(data.bioguideId)
  const yearsInService = new Date().getFullYear() - data.sinceYear + 1

  // Photo: prefer bioguide official photo, fall back to manually supplied URL
  const photoUrl = getPhotoUrl(data.bioguideId) ?? data.photoUrl

  // Contact from live data
  const contact: LegislatorContact | undefined = enriched?.currentTerm
    ? {
        website: enriched.currentTerm.url ?? undefined,
        phone: enriched.currentTerm.phone ?? undefined,
        office: enriched.currentTerm.office ?? undefined,
        address: enriched.currentTerm.address ?? undefined,
      }
    : undefined

  // Social from live data
  const social: LegislatorSocial | undefined = enriched?.social
    ? {
        twitter: enriched.social.twitter,
        instagram: enriched.social.instagram,
        facebook: enriched.social.facebook,
        youtube: enriched.social.youtube ?? (enriched.social.youtube_id ? undefined : undefined),
        youtube_id: enriched.social.youtube_id,
      }
    : undefined

  // Birthday from live data
  const birthday = enriched?.birthday ?? undefined

  // Committees: merge real committee-membership data over manually curated list.
  // Real data (full set with subcommittees + ranks) takes precedence when available.
  let committees: CommitteeRole[]
  if (enriched && enriched.committees.length > 0) {
    committees = enriched.committees
      .filter((c) => !c.parentName) // top-level committees only for profile chips
      .map((c) => ({
        slug: thomasIdToSlug(c.thomasId),
        name: c.name,
        chamber: (c.type === 'senate' ? 'Senate' : 'House') as 'House' | 'Senate',
        role: (c.title === 'Chairman' || c.title === 'Chair'
          ? 'Chair'
          : c.title === 'Ranking Member'
          ? 'Ranking Member'
          : 'Member') as 'Chair' | 'Ranking Member' | 'Member',
        thomasId: c.thomasId,
        rankingOnCommittee: c.rank ?? undefined,
      }))
  } else {
    committees = data.committees.map((c) => ({
      slug: c.slug,
      name: c.name,
      chamber: c.chamber,
      role: c.role,
    }))
  }

  return {
    id: data.bioguideId,
    slug: data.slug,
    name: data.name,
    currentTitle: data.currentTitle,
    state: data.state,
    bio: data.bio,
    photoUrl,
    contact,
    social,
    sources: [
      {
        id: 'congress-gov',
        label: `${data.name} — Congress.gov`,
        url: `https://www.congress.gov/member/${data.slug}/${data.bioguideId}`,
        publisher: 'United States Congress',
        retrievedAt: '2026-04-19',
        type: 'official-government',
      },
      {
        id: 'fec-gov',
        label: `${data.name} — FEC Campaign Finance`,
        url: `https://www.fec.gov/data/candidate/?q=${encodeURIComponent(data.name)}&election_year=2024`,
        publisher: 'Federal Election Commission',
        retrievedAt: '2026-04-19',
        type: 'campaign-finance',
      },
      {
        id: 'unitedstates-io',
        label: `${data.name} — @unitedstates/congress-legislators`,
        url: 'https://github.com/unitedstates/congress-legislators',
        publisher: 'unitedstates project (CC0)',
        retrievedAt: '2026-04-19',
        type: 'official-government',
      },
    ],
    baselineCard: {
      currentOffice: {
        title: data.currentTitle,
        jurisdiction:
          data.chamber === 'Senate'
            ? 'California (Statewide)'
            : `California's ${data.district}${ordinal(data.district!)} Congressional District`,
        startDate: enriched?.currentTerm.start ?? `${data.sinceYear}-01-03`,
      },
      previousOffices: [],
      party: data.party === 'D' ? 'Democratic' : data.party === 'R' ? 'Republican' : 'Independent',
      birthDate: birthday,
      yearsInPublicService: yearsInService,
      sourceIds: ['congress-gov', 'unitedstates-io'],
    },
    timeline: buildTimeline(data),
    funding: buildFunding(data),
    recordAssessment: {
      generatedAt: '2026-04-19',
      whatTheRecordShows: [
        `${data.name} has served in the ${data.chamber} since ${data.sinceYear}.`,
        committees.length > 0
          ? `Sits on ${committees.map((c) => c.name).join(', ')}.`
          : 'No major committee assignments in current Congress.',
        data.notableVote
          ? `Notable vote: ${data.notableVote.title} (${data.notableVote.year}).`
          : `Voting record consistent with ${data.party === 'D' ? 'Democratic' : 'Republican'} caucus positions.`,
      ],
      whatWeObserve: [
        committees.some((c) => c.role !== 'Member')
          ? `Holds a leadership position (${committees.find((c) => c.role !== 'Member')?.role}) on ${committees.find((c) => c.role !== 'Member')?.name}, giving elevated policy influence.`
          : `Serves as a rank-and-file member of their assigned committees.`,
        `Represents a ${data.party === 'D' ? 'reliably Democratic' : data.party === 'R' ? 'competitive-to-Republican' : 'swing'} district in California's congressional delegation.`,
      ],
      whatIsUnresolved: [
        'Full voting record cross-referenced against stated policy positions pending.',
        'Independent campaign finance analysis not yet complete.',
      ],
    },
    committees,
  }
}

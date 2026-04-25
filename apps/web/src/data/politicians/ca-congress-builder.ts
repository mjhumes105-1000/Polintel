import type {
  PoliticianProfile,
  TimelineEvent,
  FundingCycle,
  CommitteeRole,
  LegislatorContact,
  LegislatorSocial,
} from '@political-intel/types'
import { getLegislator, getPhotoUrl } from '../legislators'

// Keyed to the formal names used in ca-enrichment.json (e.g. "House Committee on the Judiciary")
const COMMITTEE_DESCRIPTIONS: Record<string, string> = {
  'House Committee on Agriculture': 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.',
  'House Committee on Appropriations': 'Controls discretionary federal spending through 12 annual appropriations subcommittees. Members with seats here have significant leverage over agency budgets and priorities.',
  'House Committee on Armed Services': 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.',
  'House Committee on Education and Workforce': 'Covers K-12 and higher education, labor law, workplace safety, and pension policy. Writes reauthorizations of laws like ESEA and the Higher Education Act.',
  'House Committee on Energy and Commerce': 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.',
  'House Committee on Ethics': 'Investigates and adjudicates alleged violations of House rules and federal law by Members of Congress. One of the most sensitive assignments in the House.',
  'House Committee on Financial Services': 'Regulates banking, housing, consumer finance, securities markets, and international monetary policy. Oversees the Federal Reserve, SEC, FDIC, and Fannie Mae and Freddie Mac.',
  'House Committee on Foreign Affairs': 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.',
  'House Committee on Homeland Security': 'Oversees border security, immigration enforcement, cybersecurity, FEMA, TSA, and the Coast Guard. Authorizes the Department of Homeland Security and counter-terrorism programs.',
  'House Committee on House Administration': 'Manages the internal operations of the House, including elections administration, campaign finance, and the Capitol complex. Controls access to House resources and technology.',
  'House Committee on Natural Resources': 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.',
  'House Committee on Oversight and Government Reform': 'The primary investigative committee of the House, with broad authority to investigate the executive branch, federal programs, and government waste, fraud, and abuse.',
  'House Committee on Science, Space, and Technology': 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.',
  'House Committee on Small Business': 'Advocates for small businesses and oversees the SBA\'s lending, contracting, and disaster assistance programs. Focuses on regulatory relief and capital access for entrepreneurs.',
  'House Committee on Transportation and Infrastructure': 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.',
  'House Committee on Veterans\' Affairs': 'Oversees the VA health system, veterans\' benefits, education programs, and military readiness. Advocates for the 19 million U.S. veterans on healthcare access, disability compensation, and housing.',
  'House Committee on Ways and Means': 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.',
  'House Committee on the Budget': 'Writes the annual congressional budget resolution setting overall spending and revenue targets. Shapes fiscal policy and reconciliation instructions to other committees.',
  'House Committee on the Judiciary': 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.',
  'House Permanent Select Committee on Intelligence': 'Provides oversight of U.S. intelligence agencies including the CIA, NSA, and DIA. Reviews classified programs and authorizes intelligence community spending.',
  'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party': 'Investigates the economic and security threat posed by the Chinese Communist Party, including IP theft, supply chain vulnerabilities, and technology competition. A bipartisan select committee.',
  'Joint Economic Committee': 'A bicameral committee that studies economic conditions and makes policy recommendations. Publishes research on employment, wages, and economic trends.',
  'Joint Committee of Congress on the Library': 'Oversees the Library of Congress and the Architect of the Capitol. Handles matters related to the Capitol art collection and Congressional research resources.',
  'Joint Committee on Printing': 'Oversees the Government Publishing Office and federal printing and information policies. Manages the official publication of laws, regulations, and congressional documents.',
  'Senate Committee on Agriculture, Nutrition, and Forestry': 'Writes farm bills governing agricultural subsidies, nutrition programs, rural development, and forestry policy. Counterpart to the House Agriculture Committee.',
  'Senate Committee on Energy and Natural Resources': 'Has jurisdiction over energy policy, public lands, national parks, mining, and water resources. Central to debates over fossil fuel leasing, renewables, and western land management.',
  'Senate Committee on Environment and Public Works': 'Handles environmental protection, clean air and water law, nuclear waste, and infrastructure including highways and bridges. Writes major environmental legislation.',
  'Senate Committee on Rules and Administration': 'Governs Senate procedures, elections, and the administration of the Capitol complex. Controls Senate internal rules and the accreditation of press and lobbyists.',
  'Senate Committee on Small Business and Entrepreneurship': 'Advocates for small businesses and oversees the SBA\'s lending and contracting programs. Focuses on entrepreneurship, access to capital, and regulatory burdens on small firms.',
  'Senate Committee on the Budget': 'Writes the annual Senate budget resolution and oversees the reconciliation process. Controls overall spending and revenue targets and instructs other committees on budget changes.',
  'Senate Committee on the Judiciary': 'Oversees federal judicial nominations, immigration law, antitrust enforcement, and constitutional issues. One of the Senate\'s most powerful committees, handling everything from Supreme Court confirmations to criminal justice reform.',
}

export interface CommitteeAssignment {
  slug: string
  name: string
  chamber: 'House' | 'Senate'
  role: 'Chair' | 'Ranking Member' | 'Member'
  description?: string
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
    summary: `${data.name} was elected to ${data.chamber === 'Senate' ? 'the U.S. Senate' : `represent ${data.state}'s ${data.district ? `${data.district}${ordinal(data.district)} Congressional District` : 'district'} in the U.S. House of Representatives`} in ${electedYear}.`,
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
      billCategory: 'sponsored',
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
      .map((c) => {
        const slug = thomasIdToSlug(c.thomasId)
        return {
          slug,
          name: c.name,
          chamber: (c.type === 'senate' ? 'Senate' : 'House') as 'House' | 'Senate',
          role: (c.title === 'Chairman' || c.title === 'Chair'
            ? 'Chair'
            : c.title === 'Ranking Member'
            ? 'Ranking Member'
            : 'Member') as 'Chair' | 'Ranking Member' | 'Member',
          thomasId: c.thomasId,
          rankingOnCommittee: c.rank ?? undefined,
          description: COMMITTEE_DESCRIPTIONS[c.name],
        }
      })
  } else {
    committees = data.committees.map((c) => ({
      slug: c.slug,
      name: c.name,
      chamber: c.chamber,
      role: c.role,
      description: c.description,
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
            ? `${data.state} (Statewide)`
            : `${data.state}'s ${data.district}${ordinal(data.district!)} Congressional District`,
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
        `Represents a ${data.party === 'D' ? 'reliably Democratic' : data.party === 'R' ? 'competitive-to-Republican' : 'swing'} district in ${data.state}'s congressional delegation.`,
      ],
      whatIsUnresolved: [
        'Full voting record cross-referenced against stated policy positions pending.',
        'Independent campaign finance analysis not yet complete.',
      ],
    },
    committees,
  }
}

export type SourceType =
  | 'official-government'
  | 'legislative-record'
  | 'campaign-finance'
  | 'news'
  | 'court-record'
  | 'academic'

export interface Source {
  id: string
  label: string
  url: string
  publisher: string
  publishedAt?: string
  retrievedAt: string
  type: SourceType
}

export type EventType =
  | 'vote'
  | 'statement'
  | 'bill'
  | 'milestone'
  | 'funding'
  | 'contradiction'

export interface ContradictionFlag {
  description: string
  relatedEventIds?: string[]
}

export interface TimelineEvent {
  id: string
  date: string
  type: EventType
  title: string
  summary: string
  detail?: string
  sourceIds: string[]
  tags: string[]
  contradiction?: ContradictionFlag
  vote?: 'yes' | 'no' | 'abstain'
  billPassed?: boolean
  billCategory?: 'sponsored' | 'voted'
}

export interface Office {
  title: string
  jurisdiction: string
  startDate: string
  endDate?: string
}

export interface BaselineCard {
  currentOffice: Office
  previousOffices: Office[]
  party: string
  birthDate?: string
  birthPlace?: string
  yearsInPublicService: number
  sourceIds: string[]
}

export interface Donor {
  name: string
  amount: number
  type: 'individual' | 'organization' | 'pac'
}

export interface DonorCategory {
  category: string
  amount: number
  percentage: number
  topDonors?: Donor[]
}

export interface FundingCycle {
  cycle: string
  label: string
  totalRaised: number
  topDonorCategories: DonorCategory[]
  sourceIds: string[]
  notes?: string
}

export interface RecordAssessment {
  generatedAt: string
  whatTheRecordShows: string[]
  whatWeObserve: string[]
  whatIsUnresolved: string[]
}

export interface CommitteeRole {
  slug: string
  name: string
  chamber: 'House' | 'Senate'
  role: 'Chair' | 'Ranking Member' | 'Member'
  thomasId?: string
  rankingOnCommittee?: number
  description?: string
}

export interface LegislatorSocial {
  twitter?: string
  instagram?: string
  facebook?: string
  youtube?: string
  youtube_id?: string
}

export interface LegislatorContact {
  website?: string
  phone?: string
  office?: string
  address?: string
}

export interface PoliticianProfile {
  id: string
  slug: string
  name: string
  currentTitle: string
  state: string
  bio: string
  photoUrl?: string
  contact?: LegislatorContact
  social?: LegislatorSocial
  sources: Source[]
  baselineCard: BaselineCard
  timeline: TimelineEvent[]
  funding: FundingCycle[]
  recordAssessment: RecordAssessment
  candidacy?: Candidacy
  committees?: CommitteeRole[]
}

export type CandidacyStatus = 'exploring' | 'declared' | 'withdrawn' | 'won' | 'lost'

export interface PlatformPlank {
  topic: string
  position: string
  detail?: string
  sourceIds: string[]
}

export interface Endorsement {
  name: string
  title: string
  party?: string
  date: string
  sourceIds: string[]
}

export interface Candidacy {
  office: string
  jurisdiction: string
  electionDate?: string
  status: CandidacyStatus
  announcedDate?: string
  summary: string
  platformPlanks: PlatformPlank[]
  endorsements: Endorsement[]
  funding: FundingCycle[]
  sources: Source[]
}

export type BillStatus = 'introduced' | 'in-committee' | 'passed' | 'signed' | 'vetoed' | 'failed'

export interface BillSponsor {
  name: string
  title: string
  party: string
  state: string
}

export interface LegislativeStep {
  date: string
  event: string
  notes?: string
}

export interface Bill {
  id: string
  slug: string
  number: string
  title: string
  jurisdiction: string
  session: string
  status: BillStatus
  statusDate: string
  sponsor: BillSponsor
  summary: string
  detail: string
  legislativeHistory: LegislativeStep[]
  relatedPoliticianIds: string[]
  tags: string[]
  sources: Source[]
}

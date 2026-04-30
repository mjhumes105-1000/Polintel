export * from './ask-bear'

export type SourceType =
  | 'official-government'
  | 'legislative-record'
  | 'campaign-finance'
  | 'news'
  | 'court-record'
  | 'academic'
  | 'trade-data'        // Census Bureau, USTR, WTO, IMF trade statistics

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
  truthsocial?: string
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
  bio?: string
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

export type BillVoteAction = 'signed' | 'vetoed' | 'yes' | 'no' | 'abstain' | 'sponsored' | 'co-sponsored' | 'opposed'

export interface BillVote {
  politicianId: string
  politicianName: string
  politicianTitle?: string
  action: BillVoteAction
  note?: string
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
  aiExplanation?: string
  legislativeHistory: LegislativeStep[]
  votes?: BillVote[]
  relatedPoliticianIds: string[]
  tags: string[]
  sources: Source[]
}

// ─── Economic Exposure ────────────────────────────────────────────────────────

/** Whether the U.S. runs a surplus, deficit, or balanced trade with a partner. */
export type TradeBalance = 'surplus' | 'deficit' | 'balanced'

/** Direction of a trade flow from the U.S. perspective. */
export type TradeFlowDirection = 'import' | 'export'

/** Lifecycle state of a tariff measure. */
export type TariffStatus = 'active' | 'proposed' | 'suspended'

/** Status of a bilateral or multilateral trade agreement. */
export type AgreementStatus = 'in-force' | 'negotiating' | 'suspended' | 'none'

/**
 * How severely the U.S. depends on a partner for a strategic category.
 * 'critical' = single-source or near-irreplaceable supply.
 * 'none'     = no meaningful dependency in this category.
 */
export type DependencySeverity = 'critical' | 'high' | 'moderate' | 'low' | 'none'

/**
 * Whether data for a field is present, not yet collected, or structurally inapplicable
 * (e.g., investment exposure for a country with capital controls).
 * Used to distinguish "we don't have it" from "it doesn't apply."
 */
export type DataAvailability = 'available' | 'pending' | 'not-applicable'

/**
 * One sector within a trade flow breakdown.
 * percentOfTotal is relative to the direction (import total or export total).
 */
export interface TradeCategory {
  name: string
  valueUSD: number
  percentOfTotal: number
  direction: TradeFlowDirection
  /** Year-over-year change in percent; omit if not yet tracked. */
  yoyChangePercent?: number
}

/**
 * Annual bilateral trade snapshot between the U.S. and one partner country.
 * tradeBalanceUSD is negative when the U.S. runs a deficit.
 */
export interface TradeMetric {
  fiscalYear: string
  usExportsUSD: number
  usImportsUSD: number
  tradeBalanceUSD: number
  balance: TradeBalance
}

/**
 * Full bilateral trade flow: the headline metric plus category-level breakdowns.
 * Extend TradeMetric so the headline numbers are always accessible standalone.
 */
export interface TradeFlow extends TradeMetric {
  topExportCategories: TradeCategory[]
  topImportCategories: TradeCategory[]
}

/**
 * A single tariff line — one sector, one rate, one legal basis.
 * Covers both U.S. tariffs on imports and partner tariffs on U.S. exports.
 */
export interface TariffIndicator {
  sector: string
  /** Effective ad-valorem rate in percent (e.g., 25.0 for 25%). */
  rate: number
  status: TariffStatus
  effectiveDate: string
  /** Legal authority for the tariff: "Section 301", "IEEPA", "MFN", "USMCA 0%". */
  legalBasis?: string
  note?: string
}

/** Bilateral or multilateral trade agreement affecting this country relationship. */
export interface TradeAgreement {
  name: string
  status: AgreementStatus
  inForceDate?: string
  summary: string
  keyProvisions?: string[]
}

/**
 * Mutual investment positions between the U.S. and a partner country.
 * Fields are optional because investment data lags trade data and some
 * countries restrict public disclosure.
 */
export interface InvestmentExposure {
  /** U.S. direct investment in the partner country. */
  usFDIAbroadUSD?: number
  /** Partner country's direct investment in the U.S. */
  foreignFDIInUSUSD?: number
  /** U.S. portfolio holdings (bonds, equities) in the partner country. */
  usPortfolioExposureUSD?: number
  /** Notable U.S. companies with significant exposure. */
  majorUSInvestors?: string[]
  dataAvailability: DataAvailability
  fiscalYear?: string
}

/**
 * U.S. financial outflows to a partner country: foreign aid, assistance programs.
 * Omit the AidFlow entirely (leave aid?: undefined on CountryProfile) for countries
 * that receive no U.S. assistance — do not set totals to zero.
 */
export interface AidFlow {
  fiscalYear: string
  totalUSD: number
  economicAssistanceUSD?: number
  militaryAssistanceUSD?: number
  humanitarianUSD?: number
  /** Named programs: "PEPFAR", "MCC Compact", "FMF". */
  majorPrograms?: string[]
  note?: string
}

/**
 * One row in a strategic dependency assessment.
 * direction describes which party depends on the other:
 *   'inbound'  = U.S. relies on this country (e.g., rare earth imports from China)
 *   'outbound' = partner relies on U.S. supply (e.g., U.S. chip exports to Taiwan)
 *   'mutual'   = interdependence runs both ways
 */
export interface StrategicDependencySignal {
  category: string
  severity: DependencySeverity
  direction: 'inbound' | 'outbound' | 'mutual'
  note?: string
}

/**
 * Full domain model for a U.S. trade partner country.
 * This is the shape used by detail pages, the compare feature, and future API responses.
 * historicalTrade is optional so it can be omitted from static data until
 * the live Census Bureau integration is built (Phase 4).
 */
export interface CountryProfile {
  slug: string
  name: string
  officialName: string
  flagEmoji: string
  region: string
  tradePartnerRank: number
  gdpUSD?: number
  gdpPerCapita?: number
  currency?: string
  /** Short editorial framing — 2–3 sentences on the strategic relationship. */
  geopoliticalContext?: string
  /** Most recent fiscal year trade data. */
  currentTrade: TradeFlow
  /** Prior years, ordered newest-first. Populated when historical data is available. */
  historicalTrade?: TradeFlow[]
  tariffs: TariffIndicator[]
  agreement: TradeAgreement
  investment: InvestmentExposure
  /** Omit entirely for non-aid-recipient countries. */
  aid?: AidFlow
  dependencySignals: StrategicDependencySignal[]
  sources: Source[]
}

/**
 * Authored editorial text for a specific country pair.
 * Keyed in compareSummaries.ts as `[slugA, slugB].sort().join(':')`.
 * When null, the UI generates a fallback from the profile data.
 */
export interface CompareSummary {
  whatsDifferent: string
  whyItMatters: string
}

/**
 * The comparison model — two country profiles plus editorial context.
 * dominantExposure is a derived map of which country poses higher
 * dependency risk per strategic category; computed at render time, not stored.
 */
export interface CountryComparison {
  profileA: CountryProfile
  profileB: CountryProfile
  summary: CompareSummary | null
}

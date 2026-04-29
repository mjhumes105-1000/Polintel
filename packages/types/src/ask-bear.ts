export interface ConversationTurn {
  query: string
  answer: string
}

export interface AskBearRequest {
  query: string
  contextType: 'general' | 'politician' | 'bill' | 'vote' | 'committee' | 'topic' | 'funding' | 'donor' | 'pac' | 'search'
  contextId?: string
  history?: ConversationTurn[]
  userId?: string
  includeWebSearch?: boolean
  includeOpenSecrets?: boolean
}

export type EvidenceSourceType =
  | 'internal_record'
  | 'official_government'
  | 'campaign_finance'
  | 'opensecrets'
  | 'official_statement'
  | 'reputable_secondary'
  | 'web_search'

export interface EvidenceSource {
  id: string
  title: string
  sourceType: EvidenceSourceType
  publisher: string
  url: string
  publishedAt?: string
  accessedAt: string
  excerpt?: string
  reliabilityTier: 1 | 2 | 3
  recordType?: string
}

export interface EvidenceItem {
  id: string
  claimSupported: string
  sourceIds: string[]
  quote?: string
  date?: string
  confidence: 'high' | 'medium' | 'low'
}

export interface FundingEvidenceItem {
  id: string
  claimSupported: string
  sourceIds: string[]
  cycle?: string
  contributor?: string
  industry?: string
  pac?: string
  amount?: number
  date?: string
  confidence: 'high' | 'medium' | 'low'
}

export interface AskBearResponse {
  id: string
  query: string
  answer: string
  mode?: 'general' | 'politician'
  recordShows: EvidenceItem[]
  openSecretsShows?: FundingEvidenceItem[]
  observations: string[]
  unresolved: string[]
  sources: EvidenceSource[]
  limitationNotice?: string
  campaignFinanceDisclaimer?: string
  recordTensionFlags?: string[]
  fundingContextFlags?: string[]
  createdAt: string
  shareUrl: string
}

export interface AskBearResponseDraft {
  answer: string
  recordShows: Omit<EvidenceItem, 'id'>[]
  openSecretsShows: Omit<FundingEvidenceItem, 'id'>[]
  observations: string[]
  unresolved: string[]
  limitationNotice: string | null
  campaignFinanceDisclaimer: string | null
  recordTensionFlags: string[]
  fundingContextFlags: string[]
}

export interface EvidencePacket {
  contextType: AskBearRequest['contextType']
  contextId: string
  contextLabel: string
  sources: EvidenceSource[]
  items: EvidenceItem[]
  fundingItems: FundingEvidenceItem[]
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  sanitized: AskBearResponseDraft
  hadRemovals: boolean
}

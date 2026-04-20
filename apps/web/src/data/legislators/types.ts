export interface CommitteeEntry {
  thomasId: string
  name: string
  parentName: string | null
  type: 'house' | 'senate'
  url: string | null
  rank: number | null
  title: string | null
}

export interface CurrentTerm {
  type: 'rep' | 'sen'
  start: string
  end: string
  state: string
  district: number | null
  party: string
  url: string | null
  phone: string | null
  office: string | null
  address: string | null
}

export interface LegislatorSocialRaw {
  twitter?: string
  twitter_id?: string
  instagram?: string
  instagram_id?: number
  facebook?: string
  youtube?: string
  youtube_id?: string
}

export interface EnrichedLegislator {
  bioguide: string
  govtrack: number | null
  officialName: string
  birthday: string | null
  gender: string | null
  currentTerm: CurrentTerm
  photoUrl: string
  committees: CommitteeEntry[]
  social: LegislatorSocialRaw
}

export type EnrichmentMap = Record<string, EnrichedLegislator>

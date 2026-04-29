import type { EnrichedLegislator, EnrichmentMap } from './types'
import allEnrichmentRaw from './all-enrichment.json'

const allEnrichment: EnrichmentMap = allEnrichmentRaw as EnrichmentMap

export function getLegislator(bioguide: string): EnrichedLegislator | null {
  return allEnrichment[bioguide] ?? null
}

export function getPhotoUrl(bioguide: string): string {
  return `https://bioguide.congress.gov/bioguide/photo/${bioguide[0]}/${bioguide}.jpg`
}

export type { EnrichedLegislator, EnrichmentMap } from './types'

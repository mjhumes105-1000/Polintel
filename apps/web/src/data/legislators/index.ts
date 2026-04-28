import type { EnrichedLegislator, EnrichmentMap } from './types'
import caEnrichmentRaw from './ca-enrichment.json'
import msNjEnrichmentRaw from './ms-nj-enrichment.json'

export const caEnrichment: EnrichmentMap = caEnrichmentRaw as EnrichmentMap
export const msNjEnrichment: EnrichmentMap = msNjEnrichmentRaw as EnrichmentMap

const allEnrichment: EnrichmentMap = { ...caEnrichment, ...msNjEnrichment }

export function getLegislator(bioguide: string): EnrichedLegislator | null {
  return allEnrichment[bioguide] ?? null
}

export function getPhotoUrl(bioguide: string): string {
  return `https://bioguide.congress.gov/bioguide/photo/${bioguide[0]}/${bioguide}.jpg`
}

export type { EnrichedLegislator, EnrichmentMap } from './types'

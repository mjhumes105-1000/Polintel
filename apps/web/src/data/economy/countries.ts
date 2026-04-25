import type { CountryProfile } from '@political-intel/types'
import { countryProfiles } from './countryProfiles'

// Re-export the domain model so data-layer consumers have one import path.
export type { CountryProfile }

/**
 * Lightweight shape for landing grid cards and search.
 * Derived from countryProfiles (which is already patched with live Census data)
 * so trade figures stay in sync automatically after each fetch.
 */
export interface CountrySummary {
  slug: string
  name: string
  flagEmoji: string
  region: string
  tradePartnerRank: number
  usExportsUSD: number
  usImportsUSD: number
  tradeBalanceUSD: number
  hasFTA: boolean
  ftaName?: string
  topImport: string
  topExport: string
  aidRecipient: boolean
  annualAidUSD?: number
}

function deriveCountrySummary(p: CountryProfile): CountrySummary {
  return {
    slug: p.slug,
    name: p.name,
    flagEmoji: p.flagEmoji,
    region: p.region,
    tradePartnerRank: p.tradePartnerRank,
    usExportsUSD: p.currentTrade.usExportsUSD,
    usImportsUSD: p.currentTrade.usImportsUSD,
    tradeBalanceUSD: p.currentTrade.tradeBalanceUSD,
    hasFTA: p.agreement.status === 'in-force',
    ftaName: p.agreement.status === 'in-force' ? p.agreement.name : undefined,
    topImport: p.currentTrade.topImportCategories[0]?.name ?? '—',
    topExport: p.currentTrade.topExportCategories[0]?.name ?? '—',
    aidRecipient: !!p.aid,
    annualAidUSD: p.aid?.totalUSD,
  }
}

export const countries: CountrySummary[] = Object.values(countryProfiles)
  .map(deriveCountrySummary)
  .sort((a, b) => a.tradePartnerRank - b.tradePartnerRank)

// ── Global summary stats (computed from live data) ───────────────────────────
const totalTrade = countries.reduce(
  (sum, c) => sum + c.usExportsUSD + c.usImportsUSD, 0
)
const totalBalance = countries.reduce((sum, c) => sum + c.tradeBalanceUSD, 0)
const ftaCount = countries.filter(c => c.hasFTA).length

export const GLOBAL_SUMMARY = {
  totalTradeUSD: totalTrade,
  totalDeficitUSD: totalBalance,
  activeFTACount: ftaCount,
  dataYear: '2024',
}

export function formatBillions(n: number): string {
  const abs = Math.abs(n)
  if (abs >= 1_000_000_000_000) return `$${(abs / 1_000_000_000_000).toFixed(1)}T`
  if (abs >= 1_000_000_000) return `$${Math.round(abs / 1_000_000_000)}B`
  return `$${Math.round(abs / 1_000_000)}M`
}

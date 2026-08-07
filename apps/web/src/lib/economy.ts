import type { DependencySeverity, TariffImposer } from '@political-intel/types'

export function formatBillions(n: number): string {
  const abs = Math.abs(n)
  if (abs >= 1_000_000_000_000) return `$${(abs / 1_000_000_000_000).toFixed(1)}T`
  if (abs >= 1_000_000_000) return `$${Math.round(abs / 1_000_000_000)}B`
  if (abs >= 1_000_000) return `$${Math.round(abs / 1_000_000)}M`
  return `$${n.toLocaleString()}`
}

export function signedBalance(n: number): string {
  return (n >= 0 ? '+' : '−') + formatBillions(Math.abs(n))
}

export function balanceStatement(name: string, balance: number): string {
  const abs = formatBillions(Math.abs(balance))
  if (balance < 0) return `The U.S. runs a ${abs} goods deficit with ${name}.`
  if (balance > 0) return `The U.S. runs a ${abs} goods surplus with ${name}.`
  return `The U.S. trade relationship with ${name} is roughly balanced.`
}

export function tariffSeverity(rate: number): DependencySeverity {
  if (rate >= 50) return 'critical'
  if (rate >= 20) return 'high'
  if (rate >= 5) return 'moderate'
  if (rate > 0) return 'low'
  return 'none'
}

/** Short display codes for tracked trade partners, used by the tariff flow badge. */
const PARTNER_CODES: Record<string, string> = {
  mexico: 'MX',
  canada: 'CA',
  china: 'CN',
  germany: 'DE',
  japan: 'JP',
  'south-korea': 'KR',
  'united-kingdom': 'UK',
  vietnam: 'VN',
  india: 'IN',
  taiwan: 'TW',
  france: 'FR',
  ireland: 'IE',
  switzerland: 'CH',
  italy: 'IT',
  netherlands: 'NL',
}

/** Two-letter code for a partner slug; falls back to the first two slug letters. */
export function partnerCode(slug: string): string {
  return PARTNER_CODES[slug] ?? slug.replace(/[^a-z]/gi, '').slice(0, 2).toUpperCase()
}

/**
 * Directional flow for a tariff line — who levies it and against whom.
 * Returns short codes plus a "US→MX"-style label for the badge.
 */
export function tariffFlow(
  imposedBy: TariffImposer,
  slug: string
): { from: string; to: string; label: string } {
  const code = partnerCode(slug)
  return imposedBy === 'us'
    ? { from: 'US', to: code, label: `US→${code}` }
    : { from: code, to: 'US', label: `${code}→US` }
}

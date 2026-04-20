import type { FundingCycle, DonorCategory, Donor, Source } from '@political-intel/types'
import type { FECCommitteeTotals, FECContribution } from '../clients/fec.js'

function formatMoney(n: number) {
  return Math.round(n)
}

function inferDonorCategory(employer: string, occupation: string): string {
  const text = `${employer} ${occupation}`.toLowerCase()
  if (/real estate|realt|property|developer|housing/.test(text)) return 'Real Estate & Development'
  if (/tech|software|engineer|google|apple|meta|microsoft|amazon|ai|data/.test(text)) return 'Technology & Venture Capital'
  if (/venture|vc|invest|capital|fund|equity|hedge|asset|financ|bank|wall st/.test(text)) return 'Finance & Investment'
  if (/attorney|lawyer|law firm|legal|counsel|litigation/.test(text)) return 'Legal & Lobbying'
  if (/film|studio|entertai|media|television|music|nbc|cbs|abc|disney|netflix/.test(text)) return 'Entertainment & Media'
  if (/healthcare|hospital|pharma|medical|biotech|physician|doctor/.test(text)) return 'Healthcare & Pharma'
  if (/union|labor|worker|afl|seiu|teamster/.test(text)) return 'Labor & Unions'
  if (/energy|oil|gas|utility|solar|wind|electric/.test(text)) return 'Energy'
  if (/retired|none|homemaker|self/.test(text)) return 'Individual / Retired'
  return 'Other'
}

export function transformContributionsToDonorCategories(
  contributions: FECContribution[],
  totalRaised: number
): DonorCategory[] {
  const byCategory: Record<string, { amount: number; donors: Donor[] }> = {}

  for (const c of contributions) {
    const category = inferDonorCategory(c.contributor_employer ?? '', c.contributor_occupation ?? '')
    if (!byCategory[category]) byCategory[category] = { amount: 0, donors: [] }
    byCategory[category].amount += c.contribution_receipt_amount
    byCategory[category].donors.push({
      name: c.contributor_name,
      amount: formatMoney(c.contribution_receipt_amount),
      type: c.entity_type_desc?.toLowerCase().includes('org') ? 'organization' : 'individual',
    })
  }

  const categories: DonorCategory[] = Object.entries(byCategory)
    .sort((a, b) => b[1].amount - a[1].amount)
    .map(([category, { amount, donors }]) => ({
      category,
      amount: formatMoney(amount),
      percentage: Math.round((amount / totalRaised) * 100),
      topDonors: donors
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 8),
    }))

  const categorizedTotal = categories.reduce((sum, c) => sum + c.amount, 0)
  const unitemized = totalRaised - categorizedTotal
  if (unitemized > 0) {
    categories.push({
      category: 'Other / Unitemized',
      amount: formatMoney(unitemized),
      percentage: Math.round((unitemized / totalRaised) * 100),
    })
  }

  return categories
}

export function transformTotalsToFundingCycle(
  totals: FECCommitteeTotals,
  label: string,
  committeeId: string,
  contributions: FECContribution[]
): FundingCycle {
  const totalRaised = formatMoney(totals.receipts)
  const source: Source = {
    id: `fec-${committeeId}-${totals.cycle}`,
    label: `FEC Committee ${committeeId} — ${totals.cycle} Cycle`,
    url: `https://www.fec.gov/data/committee/${committeeId}/`,
    publisher: 'Federal Election Commission',
    retrievedAt: new Date().toISOString().slice(0, 10),
    type: 'campaign-finance',
  }

  return {
    cycle: `fec-${totals.cycle}`,
    label,
    totalRaised,
    topDonorCategories: transformContributionsToDonorCategories(contributions, totalRaised),
    sourceIds: [source.id],
    notes: `Figures from FEC committee ${committeeId}, ${totals.cycle} cycle. Retrieved ${source.retrievedAt}.`,
  }
}

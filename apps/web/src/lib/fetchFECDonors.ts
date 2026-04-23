import type { FundingCycle, DonorCategory, Donor } from '@political-intel/types'

const FEC_BASE = 'https://api.open.fec.gov/v1'
const FEC_KEY = process.env.FEC_API_KEY ?? 'DEMO_KEY'
const REVALIDATE = 86400 // 24h

async function fecGet<T>(path: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(`${FEC_BASE}${path}`)
  url.searchParams.set('api_key', FEC_KEY)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v))
  const res = await fetch(url.toString(), { next: { revalidate: REVALIDATE } })
  if (!res.ok) throw new Error(`FEC ${path} → ${res.status}`)
  return res.json() as Promise<T>
}

interface FECCandidate {
  candidate_id: string
  name: string
  state: string
  office: string
  principal_committees: { committee_id: string }[]
}

interface FECContribution {
  contributor_name: string
  contributor_employer: string
  contributor_occupation: string
  contribution_receipt_amount: number
  entity_type_desc: string
}

function inferCategory(employer: string, occupation: string): string {
  const text = `${employer} ${occupation}`.toLowerCase()
  if (/real estate|realt|property|developer|housing/.test(text)) return 'Real Estate'
  if (/tech|software|engineer|google|apple|meta|microsoft|amazon|ai|data|venture|vc/.test(text)) return 'Technology & VC'
  if (/invest|capital|fund|equity|hedge|asset|financ|bank|wall st/.test(text)) return 'Finance'
  if (/attorney|lawyer|law firm|legal|counsel/.test(text)) return 'Legal'
  if (/film|studio|entertain|media|television|music|disney|netflix/.test(text)) return 'Entertainment & Media'
  if (/healthcare|hospital|pharma|medical|biotech|physician|doctor/.test(text)) return 'Healthcare'
  if (/union|labor|worker|afl|seiu|teamster/.test(text)) return 'Labor'
  if (/energy|oil|gas|utility|solar|wind/.test(text)) return 'Energy'
  if (/retired|none|homemaker/.test(text)) return 'Individual / Retired'
  return 'Other'
}

function groupByCategory(contributions: FECContribution[], totalRaised: number): DonorCategory[] {
  const byCategory: Record<string, { amount: number; donors: Donor[] }> = {}

  for (const c of contributions) {
    const cat = inferCategory(c.contributor_employer ?? '', c.contributor_occupation ?? '')
    if (!byCategory[cat]) byCategory[cat] = { amount: 0, donors: [] }
    byCategory[cat].amount += c.contribution_receipt_amount
    byCategory[cat].donors.push({
      name: c.contributor_name,
      amount: Math.round(c.contribution_receipt_amount),
      type: c.entity_type_desc?.toLowerCase().includes('org') ? 'organization' : 'individual',
    })
  }

  return Object.entries(byCategory)
    .sort((a, b) => b[1].amount - a[1].amount)
    .map(([category, { amount, donors }]) => ({
      category,
      amount: Math.round(amount),
      percentage: Math.round((amount / totalRaised) * 100),
      topDonors: donors.sort((a, b) => b.amount - a.amount).slice(0, 10),
    }))
}

export async function fetchFECDonors(
  name: string,
  state: string,
  chamber: 'House' | 'Senate',
  cycle = 2024,
): Promise<FundingCycle | null> {
  try {
    const office = chamber === 'Senate' ? 'S' : 'H'
    const candidates = await fecGet<{ results: FECCandidate[] }>('/candidates/search/', {
      q: name,
      state,
      office,
      election_year: cycle,
      per_page: 5,
    })

    const candidate = candidates.results[0]
    if (!candidate) return null

    const committeeId = candidate.principal_committees?.[0]?.committee_id
    if (!committeeId) return null

    const [totalsData, contribData] = await Promise.all([
      fecGet<{ results: { receipts: number }[] }>(`/committee/${committeeId}/totals/`, {
        cycle,
        per_page: 1,
      }),
      fecGet<{ results: FECContribution[] }>('/schedules/schedule_a/', {
        committee_id: committeeId,
        two_year_transaction_period: cycle,
        per_page: 100,
        sort: '-contribution_receipt_amount',
        is_individual: 'true',
      }),
    ])

    const totalRaised = Math.round(totalsData.results[0]?.receipts ?? 0)
    if (totalRaised === 0) return null

    const contributions = contribData.results
    const topDonorCategories = groupByCategory(contributions, totalRaised)

    return {
      cycle: `fec-${cycle}`,
      label: `${cycle - 1}–${cycle} Election Cycle (FEC)`,
      totalRaised,
      topDonorCategories,
      sourceIds: [`fec-${committeeId}`],
      notes: `Individual contributions from FEC committee ${committeeId}, ${cycle} cycle.`,
    }
  } catch {
    return null
  }
}

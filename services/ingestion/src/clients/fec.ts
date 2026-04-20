import { config } from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../../../.env') })

const BASE = 'https://api.open.fec.gov/v1'
const KEY = process.env.FEC_API_KEY

if (!KEY) throw new Error('FEC_API_KEY is not set')

async function get<T>(path: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(`${BASE}${path}`)
  url.searchParams.set('api_key', KEY!)
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v))
  }

  const res = await fetch(url.toString())
  if (!res.ok) {
    throw new Error(`FEC API ${path} → ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FECCandidate {
  candidate_id: string
  name: string
  party: string
  state: string
  office: string
  office_full: string
  incumbent_challenge_full: string
  election_years: number[]
  cycles: number[]
  principal_committees: { committee_id: string; name: string }[]
}

export interface FECCommitteeTotals {
  committee_id: string
  cycle: number
  receipts: number
  disbursements: number
  individual_contributions: number
  other_political_committee_contributions: number
  transfers_from_affiliated_committees: number
}

export interface FECContribution {
  contributor_name: string
  contributor_employer: string
  contributor_occupation: string
  contribution_receipt_amount: number
  contribution_receipt_date: string
  contributor_state: string
  contributor_city: string
  entity_type_desc: string
}

export interface FECCommittee {
  committee_id: string
  name: string
  committee_type_full: string
  party_full: string
  state: string
  treasurer_name: string
  filing_frequency: string
}

// ─── API Methods ──────────────────────────────────────────────────────────────

export async function searchCandidates(name: string, cycle?: number): Promise<FECCandidate[]> {
  const params: Record<string, string | number> = { q: name, per_page: 10 }
  if (cycle) params.election_year = cycle
  const data = await get<{ results: FECCandidate[] }>('/candidates/search/', params)
  return data.results
}

export async function getCandidate(candidateId: string): Promise<FECCandidate> {
  const data = await get<{ results: FECCandidate[] }>(`/candidate/${candidateId}/`, { per_page: 1 })
  return data.results[0]
}

export async function getCommitteeTotals(committeeId: string, cycle: number): Promise<FECCommitteeTotals | null> {
  const data = await get<{ results: FECCommitteeTotals[] }>(
    `/committee/${committeeId}/totals/`,
    { cycle, per_page: 1 }
  )
  return data.results[0] ?? null
}

export async function getTopContributors(
  committeeId: string,
  cycle: number,
  limit = 20
): Promise<FECContribution[]> {
  const data = await get<{ results: FECContribution[] }>('/schedules/schedule_a/', {
    committee_id: committeeId,
    two_year_transaction_period: cycle,
    per_page: limit,
    sort: '-contribution_receipt_amount',
    is_individual: 'true',
  })
  return data.results
}

export async function getCommitteesByCandidate(candidateId: string): Promise<FECCommittee[]> {
  const data = await get<{ results: FECCommittee[] }>(
    `/candidate/${candidateId}/committees/`,
    { per_page: 10 }
  )
  return data.results
}

export async function searchCommittees(name: string): Promise<FECCommittee[]> {
  const data = await get<{ results: FECCommittee[] }>('/committees/', {
    q: name,
    per_page: 10,
  })
  return data.results
}

import { config } from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../../../.env') })

const BASE = 'https://api.legiscan.com/'
const KEY = process.env.LEGISCAN_API_KEY

if (!KEY) throw new Error('LEGISCAN_API_KEY is not set')

async function call<T>(op: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(BASE)
  url.searchParams.set('key', KEY!)
  url.searchParams.set('op', op)
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v))
  }

  const res = await fetch(url.toString())
  if (!res.ok) {
    throw new Error(`LegiScan ${op} → ${res.status} ${res.statusText}`)
  }
  const json = await res.json() as { status: string; [key: string]: unknown }
  if (json.status !== 'OK') {
    throw new Error(`LegiScan ${op} returned status: ${json.status}`)
  }
  return json as T
}

// ─── Types ────────────────────────────────────────────────────────────────────

export const STATE_IDS: Record<string, number> = {
  AL: 1, AK: 2, AZ: 3, AR: 4, CA: 5, CO: 6, CT: 7, DE: 8, FL: 9, GA: 10,
  HI: 11, ID: 12, IL: 13, IN: 14, IA: 15, KS: 16, KY: 17, LA: 18, ME: 19,
  MD: 20, MA: 21, MI: 22, MN: 23, MS: 24, MO: 25, MT: 26, NE: 27, NV: 28,
  NH: 29, NJ: 30, NM: 31, NY: 32, NC: 33, ND: 34, OH: 35, OK: 36, OR: 37,
  PA: 38, RI: 39, SC: 40, SD: 41, TN: 42, TX: 43, UT: 44, VT: 45, VA: 46,
  WA: 47, WV: 48, WI: 49, WY: 50, US: 52,
}

export interface LegiScanSession {
  session_id: number
  state_id: number
  year_start: number
  year_end: number
  special: number
  session_name: string
  session_title: string
}

export interface LegiScanBillSummary {
  bill_id: number
  number: string
  title: string
  description: string
  status: number
  status_date: string
  url: string
  state_link: string
  last_action_date: string
  last_action: string
}

export interface LegiScanSponsor {
  people_id: number
  person_hash: string
  name: string
  first_name: string
  last_name: string
  party: string
  role: string
  district: string
}

export interface LegiScanHistoryStep {
  date: string
  action: string
  chamber: string
  importance: number
}

export interface LegiScanVote {
  roll_call_id: number
  date: string
  desc: string
  yea: number
  nay: number
  nv: number
  absent: number
  total: number
  passed: number
  chamber: string
}

export interface LegiScanBillDetail {
  bill_id: number
  bill_number: string
  bill_type: string
  bill_type_id: string
  title: string
  description: string
  state: string
  state_id: number
  session_id: number
  session: LegiScanSession
  url: string
  state_link: string
  completed: number
  status: number
  status_date: string
  progress: { date: string; event: number }[]
  introduced_date: string
  last_action_date: string
  last_action: string
  sponsors: LegiScanSponsor[]
  history: LegiScanHistoryStep[]
  votes: LegiScanVote[]
  subjects: { subject_id: number; subject_name: string }[]
}

// ─── Status codes ─────────────────────────────────────────────────────────────

export const BILL_STATUS: Record<number, string> = {
  1: 'Introduced',
  2: 'Engrossed',
  3: 'Enrolled',
  4: 'Passed',
  5: 'Vetoed',
  6: 'Failed',
  7: 'Override',
  8: 'Chaptered',
  9: 'Refer',
  10: 'Report Pass',
  11: 'Report DNP',
  12: 'Draft',
}

// ─── API Methods ──────────────────────────────────────────────────────────────

export async function getSessionList(stateAbbr: string): Promise<LegiScanSession[]> {
  const stateId = STATE_IDS[stateAbbr.toUpperCase()]
  if (!stateId) throw new Error(`Unknown state: ${stateAbbr}`)
  const data = await call<{ sessions: LegiScanSession[] }>('getSessionList', { state: stateAbbr })
  return data.sessions
}

export async function getMasterList(sessionId: number): Promise<LegiScanBillSummary[]> {
  const data = await call<{ masterlist: Record<string, LegiScanBillSummary> }>(
    'getMasterList',
    { id: sessionId }
  )
  // masterlist is an object with numeric keys; filter out non-bill keys
  return Object.values(data.masterlist).filter((v) => typeof v === 'object' && 'bill_id' in v)
}

export async function getBill(billId: number): Promise<LegiScanBillDetail> {
  const data = await call<{ bill: LegiScanBillDetail }>('getBill', { id: billId })
  return data.bill
}

export async function searchBills(
  query: string,
  stateAbbr?: string,
  year?: 1 | 2
): Promise<LegiScanBillSummary[]> {
  const params: Record<string, string | number> = { query }
  if (stateAbbr) params.state = stateAbbr
  if (year) params.year = year
  const data = await call<{ searchresult: Record<string, LegiScanBillSummary | { summary: unknown }> }>(
    'getSearch',
    params
  )
  return Object.values(data.searchresult).filter(
    (v): v is LegiScanBillSummary => typeof v === 'object' && 'bill_id' in v
  )
}

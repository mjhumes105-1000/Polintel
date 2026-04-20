import type { Bill, BillStatus, LegislativeStep, Source } from '@political-intel/types'
import type { LegiScanBillDetail } from '../clients/legiscan.js'
import { BILL_STATUS } from '../clients/legiscan.js'

function mapStatus(statusCode: number): BillStatus {
  switch (statusCode) {
    case 4: case 8: case 10: return 'passed'
    case 5: return 'vetoed'
    case 6: case 11: return 'failed'
    case 2: case 3: return 'in-committee'
    case 1: case 12: return 'introduced'
    default: return 'introduced'
  }
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function transformLegiScanBill(bill: LegiScanBillDetail): Bill {
  const status = mapStatus(bill.status)

  const legislativeHistory: LegislativeStep[] = bill.history.map((h) => ({
    date: h.date,
    event: `${h.action} (${h.chamber})`,
  }))

  // Add vote results as steps
  for (const vote of bill.votes) {
    const passed = vote.passed === 1
    legislativeHistory.push({
      date: vote.date,
      event: `${vote.desc} — ${vote.chamber}`,
      notes: `Yea: ${vote.yea} · Nay: ${vote.nay} · ${passed ? 'PASSED' : 'FAILED'}`,
    })
  }

  // Sort by date
  legislativeHistory.sort((a, b) => a.date.localeCompare(b.date))

  const primarySponsor = bill.sponsors[0]

  const source: Source = {
    id: `legiscan-${bill.bill_id}`,
    label: `${bill.bill_number} — ${bill.title} (LegiScan)`,
    url: bill.state_link || bill.url,
    publisher: `${bill.state} Legislature via LegiScan`,
    publishedAt: bill.introduced_date,
    retrievedAt: new Date().toISOString().slice(0, 10),
    type: 'legislative-record',
  }

  return {
    id: `legiscan-${bill.bill_id}`,
    slug: `${bill.state.toLowerCase()}-${slugify(bill.bill_number)}-${bill.session.year_start}`,
    number: bill.bill_number,
    title: bill.title,
    jurisdiction: `State of ${bill.state}`,
    session: `${bill.session.year_start}–${bill.session.year_end}`,
    status,
    statusDate: bill.status_date || bill.last_action_date,
    sponsor: primarySponsor
      ? {
          name: `${primarySponsor.first_name} ${primarySponsor.last_name}`,
          title: primarySponsor.role,
          party: primarySponsor.party === 'D' ? 'Democratic Party' : primarySponsor.party === 'R' ? 'Republican Party' : primarySponsor.party,
          state: bill.state,
        }
      : { name: 'Unknown', title: 'Unknown', party: 'Unknown', state: bill.state },
    summary: bill.description || bill.title,
    detail: `Last action: ${bill.last_action} (${bill.last_action_date}). LegiScan status: ${BILL_STATUS[bill.status] ?? 'Unknown'}.`,
    legislativeHistory,
    relatedPoliticianIds: [],
    tags: bill.subjects.map((s) => s.subject_name).slice(0, 6),
    sources: [source],
  }
}

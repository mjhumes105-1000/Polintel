import type { TimelineEvent } from '@political-intel/types'

interface GovTrackVoteVoter {
  created: string
  option: { value: string }
  vote: {
    question: string
    result: string
    category: string
    congress: number
    session: number
    number: number
    chamber: string
  }
}

interface GovTrackBill {
  introduced_date: string
  title: string
  current_status: string
  current_status_date: string
  congress: number
  bill_type: string
  number: number
}

interface GovTrackListResponse<T> {
  objects: T[]
  meta: { total_count: number }
}

const GOVTRACK_BASE = 'https://www.govtrack.us/api/v2'

function categoryToTag(category: string): string[] {
  const map: Record<string, string[]> = {
    passage: ['vote', 'legislation'],
    cloture: ['vote', 'procedural'],
    amendment: ['vote', 'amendment'],
    nomination: ['vote', 'nomination'],
    conviction: ['vote', 'conviction'],
    veto_override: ['vote', 'veto'],
  }
  return map[category] ?? ['vote', 'procedural']
}

function billStatusToTag(status: string): string[] {
  if (status.includes('passed') || status === 'enacted_signed') return ['legislation', 'passed']
  if (status === 'introduced') return ['legislation', 'introduced']
  return ['legislation']
}

function parseVote(v: GovTrackVoteVoter, bioguide: string, index: number): TimelineEvent {
  const date = v.created.slice(0, 10)
  const chamber = v.vote?.chamber === 'h' ? 'House' : 'Senate'
  const question = v.vote?.question ?? 'Vote'
  const truncated = question.length > 80 ? question.slice(0, 80) + '…' : question

  return {
    id: `live-vote-${bioguide}-${index}`,
    date,
    type: 'vote',
    title: truncated,
    summary: `Voted ${v.option?.value} on ${question} — ${v.vote?.result} (${chamber}, ${date})`,
    sourceIds: ['govtrack'],
    tags: categoryToTag(v.vote?.category ?? 'passage'),
  }
}

function parseBill(b: GovTrackBill, bioguide: string, index: number): TimelineEvent {
  const date = b.introduced_date
  const billRef = `${b.bill_type?.toUpperCase() ?? 'H.R.'} ${b.number}`

  return {
    id: `live-bill-${bioguide}-${index}`,
    date,
    type: 'bill',
    title: b.title?.replace(/^(H\.R\.|S\.|H\.Res\.|S\.Res\.) \d+: /, '') ?? b.title,
    summary: `Sponsored ${billRef}: ${b.title} — Status: ${b.current_status} (${b.congress}th Congress)`,
    sourceIds: ['govtrack'],
    tags: billStatusToTag(b.current_status ?? ''),
  }
}

export async function fetchLiveTimeline(
  govtrackId: number,
  bioguide: string,
): Promise<TimelineEvent[]> {
  const [votesRes, billsRes] = await Promise.allSettled([
    fetch(
      `${GOVTRACK_BASE}/vote_voter?person=${govtrackId}&limit=15&order_by=-created`,
      { next: { revalidate: 86400 } },
    ),
    fetch(
      `${GOVTRACK_BASE}/bill?sponsor=${govtrackId}&limit=10&order_by=-introduced_date`,
      { next: { revalidate: 86400 } },
    ),
  ])

  const events: TimelineEvent[] = []

  if (votesRes.status === 'fulfilled' && votesRes.value.ok) {
    const data: GovTrackListResponse<GovTrackVoteVoter> = await votesRes.value.json()
    data.objects.forEach((v, i) => {
      events.push(parseVote(v, bioguide, i))
    })
  }

  if (billsRes.status === 'fulfilled' && billsRes.value.ok) {
    const data: GovTrackListResponse<GovTrackBill> = await billsRes.value.json()
    data.objects.forEach((b, i) => {
      events.push(parseBill(b, bioguide, i))
    })
  }

  return events
}

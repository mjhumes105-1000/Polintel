export interface CommitteeBill {
  title: string
  billRef: string
  status: string
  introducedDate: string
  sponsorName: string
  sponsorBioguide: string | null
  sponsorGovtrack: number
}

interface GovTrackBillObject {
  id: number
  title: string
  display_number: string
  bill_type: string
  number: number
  congress: number
  introduced_date: string
  current_status: string
  current_status_label: string
  sponsor_role?: {
    person?: {
      id: number
      name: string
      firstname?: string
      lastname?: string
    }
    person_id?: number
  }
  sponsor?: {
    id: number
    name: string
  }
}

interface GovTrackBillResponse {
  objects: GovTrackBillObject[]
}

function formatBillRef(obj: GovTrackBillObject): string {
  const typeMap: Record<string, string> = {
    hr: 'H.R.',
    s: 'S.',
    hjres: 'H.J.Res.',
    sjres: 'S.J.Res.',
    hconres: 'H.Con.Res.',
    sconres: 'S.Con.Res.',
    hres: 'H.Res.',
    sres: 'S.Res.',
  }
  const prefix = typeMap[obj.bill_type] ?? obj.bill_type.toUpperCase()
  return `${prefix} ${obj.number}`
}

function getSponsorName(obj: GovTrackBillObject): string {
  if (obj.sponsor_role?.person?.name) return obj.sponsor_role.person.name
  if (obj.sponsor?.name) return obj.sponsor.name
  return 'Unknown'
}

function getSponsorGovtrackId(obj: GovTrackBillObject): number {
  if (obj.sponsor_role?.person?.id) return obj.sponsor_role.person.id
  if (obj.sponsor_role?.person_id) return obj.sponsor_role.person_id
  if (obj.sponsor?.id) return obj.sponsor.id
  return 0
}

export async function fetchCommitteeBills(
  _thomasId: string,
  memberGovtrackIds: number[],
  limit = 12
): Promise<CommitteeBill[]> {
  // Deduplicate and take top 6 members
  const topIds = [...new Set(memberGovtrackIds)].slice(0, 6)

  if (topIds.length === 0) return []

  const results = await Promise.allSettled(
    topIds.map(async (govtrackId) => {
      const url = `https://www.govtrack.us/api/v2/bill?sponsor=${govtrackId}&congress=119&limit=6`
      const res = await fetch(url, { next: { revalidate: 86400 } })
      if (!res.ok) return []
      const data: unknown = await res.json()
      if (
        typeof data !== 'object' ||
        data === null ||
        !('objects' in data) ||
        !Array.isArray((data as Record<string, unknown>).objects)
      ) {
        return []
      }
      const typed = data as GovTrackBillResponse
      return typed.objects.map(
        (obj): CommitteeBill => ({
          title: obj.title ?? '',
          billRef: formatBillRef(obj),
          status: obj.current_status_label ?? obj.current_status ?? '',
          introducedDate: obj.introduced_date ?? '',
          sponsorName: getSponsorName(obj),
          sponsorBioguide: null,
          sponsorGovtrack: getSponsorGovtrackId(obj),
        })
      )
    })
  )

  const allBills: CommitteeBill[] = []
  for (const result of results) {
    if (result.status === 'fulfilled') {
      allBills.push(...result.value)
    }
  }

  // Deduplicate by billRef, sort by introducedDate desc, return top limit
  const seen = new Set<string>()
  const deduped: CommitteeBill[] = []
  for (const bill of allBills) {
    if (!seen.has(bill.billRef)) {
      seen.add(bill.billRef)
      deduped.push(bill)
    }
  }

  deduped.sort((a, b) => b.introducedDate.localeCompare(a.introducedDate))
  return deduped.slice(0, limit)
}

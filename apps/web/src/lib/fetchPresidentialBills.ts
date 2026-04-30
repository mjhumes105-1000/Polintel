export interface PresidentialBill {
  billId: string
  number: string
  type: string
  title: string
  shortTitle?: string
  congress: number
  signingDate?: string
  introducedDate?: string
  status: 'signed' | 'vetoed' | 'pocket_vetoed' | 'pushing'
  policyArea?: string
  publicLawNumber?: string
  url: string
  summary?: string
}

const CONGRESS_API_KEY = process.env.CONGRESS_API_KEY

// Bills Trump is actively championing — updated manually
export const PUSHED_BILLS: PresidentialBill[] = [
  {
    billId: 'hr1-119',
    number: 'H.R.1',
    type: 'HR',
    title: 'One Big Beautiful Bill Act',
    shortTitle: 'One Big Beautiful Bill',
    congress: 119,
    introducedDate: '2025-01-03',
    status: 'pushing',
    policyArea: 'Tax & Budget',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/1',
    summary: 'Comprehensive reconciliation bill covering tax cuts, border security, energy, and spending reductions. Trump\'s signature legislative priority for the 119th Congress.',
  },
]

function billTypeToPath(type: string): string {
  switch (type.toUpperCase()) {
    case 'HR':      return 'house-bill'
    case 'S':       return 'senate-bill'
    case 'HJRES':   return 'house-joint-resolution'
    case 'SJRES':   return 'senate-joint-resolution'
    case 'HRES':    return 'house-resolution'
    case 'SRES':    return 'senate-resolution'
    case 'HCONRES': return 'house-concurrent-resolution'
    case 'SCONRES': return 'senate-concurrent-resolution'
    default:        return type.toLowerCase()
  }
}

function billTypeLabel(type: string): string {
  switch (type.toUpperCase()) {
    case 'HR':      return 'H.R.'
    case 'S':       return 'S.'
    case 'HJRES':   return 'H.J.Res.'
    case 'SJRES':   return 'S.J.Res.'
    case 'HRES':    return 'H.Res.'
    case 'SRES':    return 'S.Res.'
    case 'HCONRES': return 'H.Con.Res.'
    case 'SCONRES': return 'S.Con.Res.'
    default:        return type
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapLawBill(b: any, congress: number): PresidentialBill {
  const type = b.type ?? 'HR'
  const num  = b.number ?? ''
  const publicLaw = b.laws?.[0]?.number ?? undefined
  return {
    billId: `${type.toLowerCase()}${num}-${congress}`,
    number: `${billTypeLabel(type)}${num}`,
    type,
    title: b.title ?? '',
    congress,
    signingDate: b.latestAction?.actionDate,
    status: 'signed',
    publicLawNumber: publicLaw ? `P.L. ${publicLaw}` : undefined,
    url: `https://www.congress.gov/bill/${congress}th-congress/${billTypeToPath(type)}/${num}`,
  }
}

export async function fetchSignedBills(congress = 119): Promise<PresidentialBill[]> {
  if (!CONGRESS_API_KEY) return []
  try {
    const url = `https://api.congress.gov/v3/law/${congress}?format=json&limit=250&sort=updateDate+desc&api_key=${CONGRESS_API_KEY}`
    const res = await fetch(url)
    if (!res.ok) return []
    const data = await res.json()
    const bills: PresidentialBill[] = (data.bills ?? []).map((b: unknown) => mapLawBill(b, congress))
    return bills.sort((a, b) =>
      (b.signingDate ?? '').localeCompare(a.signingDate ?? '')
    )
  } catch {
    return []
  }
}

export async function fetchVetoedBills(congress = 119): Promise<PresidentialBill[]> {
  if (!CONGRESS_API_KEY) return []
  try {
    // Vetoed bills are rare — scan recent 250 bills for veto action text
    const url = `https://api.congress.gov/v3/bill/${congress}?format=json&limit=250&sort=updateDate+desc&api_key=${CONGRESS_API_KEY}`
    const res = await fetch(url)
    if (!res.ok) return []
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.bills ?? [])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((b: any) => b.latestAction?.text?.toLowerCase().includes('vetoed'))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((b: any): PresidentialBill => {
        const type = b.type ?? 'HR'
        const num  = b.number ?? ''
        return {
          billId: `${type.toLowerCase()}${num}-${congress}`,
          number: `${billTypeLabel(type)}${num}`,
          type,
          title: b.title ?? '',
          congress,
          signingDate: b.latestAction?.actionDate,
          status: 'vetoed',
          url: `https://www.congress.gov/bill/${congress}th-congress/${billTypeToPath(type)}/${num}`,
        }
      })
  } catch {
    return []
  }
}

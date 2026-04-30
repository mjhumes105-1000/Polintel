export interface PresidentialAction {
  documentNumber: string
  title: string
  signingDate: string
  type: 'executive_order' | 'memorandum' | 'proclamation'
  eoNumber?: number
  abstract?: string
  url: string
  citation?: string
}

interface FedRegDocument {
  document_number: string
  title: string
  signing_date?: string
  publication_date?: string
  type: string
  executive_order_number?: number
  abstract?: string
  html_url: string
  citation?: string
}

interface FedRegResponse {
  count: number
  results: FedRegDocument[]
}

// Each field must be its own fields[]=name param — comma-joining in a single param is ignored.
const FIELDS = [
  'document_number',
  'title',
  'signing_date',
  'publication_date',
  'type',
  'executive_order_number',
  'abstract',
  'html_url',
  'citation',
].map((f) => `fields%5B%5D=${f}`).join('&')

async function fetchByType(
  docType: 'executive_order' | 'memorandum' | 'proclamation',
  sinceDate: string
): Promise<PresidentialAction[]> {
  // Pre-encoded brackets prevent Node.js WHATWG URL parser from double-encoding them.
  const qs = [
    `conditions%5Bpresidential_document_type%5D%5B%5D=${docType}`,
    `conditions%5Bsigning_date%5D%5Bgte%5D=${sinceDate}`,
    `per_page=1000`,
    `order=newest`,
    FIELDS,
  ].join('&')

  const res = await fetch(
    `https://www.federalregister.gov/api/v1/documents.json?${qs}`
  )
  if (!res.ok) {
    console.error(`[FedReg] ${docType} fetch failed: ${res.status} ${res.statusText}`)
    return []
  }

  const data: FedRegResponse = await res.json()
  return (data.results ?? [])
    .map((doc) => ({
      documentNumber: doc.document_number,
      title: doc.title,
      // signing_date is the actual signed date; fall back to publication_date if absent
      signingDate: doc.signing_date ?? doc.publication_date ?? '',
      type: docType,
      eoNumber: doc.executive_order_number,
      abstract: doc.abstract,
      url: doc.html_url,
      citation: doc.citation,
    }))
    .sort((a, b) => b.signingDate.localeCompare(a.signingDate))
}

export async function fetchPresidentialActions(sinceDate = '2025-01-20'): Promise<{
  executiveOrders: PresidentialAction[]
  memoranda: PresidentialAction[]
  proclamations: PresidentialAction[]
}> {
  const [executiveOrders, memoranda, proclamations] = await Promise.all([
    fetchByType('executive_order', sinceDate),
    fetchByType('memorandum', sinceDate),
    fetchByType('proclamation', sinceDate),
  ])
  return { executiveOrders, memoranda, proclamations }
}

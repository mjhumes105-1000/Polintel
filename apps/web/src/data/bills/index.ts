import type { Bill } from '@political-intel/types'

export const ab5: Bill = {
  id: 'ca-ab5-2019',
  slug: 'ca-ab5-2019',
  number: 'AB 5',
  title: 'Worker Status: Employees and Independent Contractors',
  jurisdiction: 'State of California',
  session: '2019–2020',
  status: 'signed',
  statusDate: '2019-09-18',
  sponsor: {
    name: 'Lorena Gonzalez',
    title: 'State Assembly Member',
    party: 'Democratic Party',
    state: 'California',
  },
  summary:
    'AB 5 codified the "ABC test" established by the California Supreme Court in Dynamex Operations West v. Superior Court (2018), requiring businesses to classify workers as employees unless they meet all three prongs of the test: (A) free from the company\'s control; (B) performing work outside the company\'s usual course of business; (C) engaged in an independently established trade.',
  detail:
    'The law had sweeping effects across industries relying on independent contractor arrangements, most visibly on app-based transportation and delivery companies. Uber, Lyft, DoorDash, and others funded Proposition 22, a 2020 ballot initiative that passed with 58.6% of the vote and carved out a specific exemption for app-based drivers from AB 5 classification requirements. Proposition 22 was subsequently challenged in court; the California Supreme Court upheld it in July 2024. AB 5 itself has been amended multiple times to add industry-specific exemptions (e.g., for certain freelance journalists, musicians, and real estate agents). The law remains in effect for industries not covered by exemptions.',
  legislativeHistory: [
    { date: '2019-01-03', event: 'Introduced in State Assembly' },
    {
      date: '2019-06-19',
      event: 'Passed Assembly Committee on Labor and Employment',
      notes: 'Vote: 5–2',
    },
    {
      date: '2019-09-10',
      event: 'Passed California State Senate',
      notes: 'Vote: 29–11',
    },
    {
      date: '2019-09-11',
      event: 'Passed California State Assembly (concurrence)',
      notes: 'Vote: 56–15',
    },
    {
      date: '2019-09-18',
      event: 'Signed by Governor Gavin Newsom',
    },
    {
      date: '2020-01-01',
      event: 'Effective date',
    },
    {
      date: '2020-11-03',
      event: 'Proposition 22 passed — app-based driver exemption enacted',
      notes: '58.6% Yes',
    },
  ],
  relatedPoliticianIds: ['gavin-newsom'],
  tags: ['Labor', 'Gig Economy', 'Independent Contractors', 'Employment Law'],
  sources: [
    {
      id: 'ab5-leginfo',
      label: 'AB 5 (2019) — Worker Status: Employees and Independent Contractors',
      url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201920200AB5',
      publisher: 'California Legislative Information',
      publishedAt: '2019-09-18',
      retrievedAt: '2024-12-01',
      type: 'legislative-record',
    },
    {
      id: 'prop22-sos',
      label: 'Proposition 22 (2020) — App-Based Drivers as Contractors',
      url: 'https://www.sos.ca.gov/elections/ballot-measures/qualified-ballot-measures/november-3-2020-general-election/proposition-22',
      publisher: 'California Secretary of State',
      publishedAt: '2020-11-03',
      retrievedAt: '2024-12-01',
      type: 'official-government',
    },
  ],
}

export const sb9: Bill = {
  id: 'ca-sb9-2021',
  slug: 'ca-sb9-2021',
  number: 'SB 9',
  title: 'Housing Development Approvals',
  jurisdiction: 'State of California',
  session: '2021–2022',
  status: 'signed',
  statusDate: '2021-09-16',
  sponsor: {
    name: 'Toni Atkins',
    title: 'State Senator',
    party: 'Democratic Party',
    state: 'California',
  },
  summary:
    'SB 9 requires California cities and counties to ministerially approve (without discretionary review) housing projects containing two residential units on a parcel in a single-family residential zone, and to approve urban lot splits that divide a single-family parcel into two lots of at least 1,200 square feet each. The practical effect allows up to four units on a parcel that previously permitted one.',
  detail:
    'SB 9 represents the most significant rollback of single-family zoning in California\'s history, effectively ending exclusionary single-family-only zoning statewide. Ministerial approval removes local discretion to deny conforming projects on design or neighborhood character grounds. However, the law includes exemptions for historic districts, very high fire hazard severity zones, and certain earthquake fault zones. Early reporting on implementation showed limited uptake — most cities processed few applications in the law\'s first two years, and housing researchers attributed this to practical barriers including lot-size constraints, owner-occupancy requirements in some provisions, and local bureaucratic friction. The California Department of Housing and Community Development has continued to monitor local compliance.',
  legislativeHistory: [
    { date: '2020-12-07', event: 'Introduced in California State Senate' },
    {
      date: '2021-06-01',
      event: 'Passed Senate Governance and Finance Committee',
      notes: 'Vote: 5–2',
    },
    {
      date: '2021-08-30',
      event: 'Passed California State Assembly',
      notes: 'Vote: 45–19',
    },
    {
      date: '2021-09-01',
      event: 'Passed California State Senate (concurrence)',
      notes: 'Vote: 28–9',
    },
    {
      date: '2021-09-16',
      event: 'Signed by Governor Gavin Newsom',
    },
    {
      date: '2022-01-01',
      event: 'Effective date',
    },
  ],
  relatedPoliticianIds: ['gavin-newsom'],
  tags: ['Housing', 'Zoning', 'Land Use', 'Urban Policy'],
  sources: [
    {
      id: 'sb9-leginfo',
      label: 'SB 9 (2021) — Housing Development Approvals',
      url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220SB9',
      publisher: 'California Legislative Information',
      publishedAt: '2021-09-16',
      retrievedAt: '2024-12-01',
      type: 'legislative-record',
    },
  ],
}

export const sb1047: Bill = {
  id: 'ca-sb1047-2024',
  slug: 'ca-sb1047-2024',
  number: 'SB 1047',
  title: 'Safe and Secure AI Innovation Act',
  jurisdiction: 'State of California',
  session: '2023–2024',
  status: 'vetoed',
  statusDate: '2024-09-29',
  sponsor: {
    name: 'Scott Wiener',
    title: 'State Senator',
    party: 'Democratic Party',
    state: 'California',
  },
  summary:
    'SB 1047 would have required developers of large AI models (above a threshold of compute, approximately 10²⁶ floating point operations) to implement safety protocols before training, conduct risk assessments, create emergency shutdown capabilities, and publish safety and transparency information. Covered developers would have been required to retain the ability to disable models and to contract with large-scale compute providers to enforce safety requirements.',
  detail:
    'The bill generated intense debate within California\'s technology policy community. Supporters — including AI safety researchers and some academics — argued it was a minimal first step toward oversight of frontier AI development. Opponents — including the California Chamber of Commerce, a group of AI researchers who signed an open letter, and major AI companies — argued the bill was technically flawed, applied blunt compute thresholds that did not track actual risk, and would push AI development out of California. Governor Newsom\'s veto message argued the bill focused on model size rather than demonstrated harm, would "give Californians a false sense of security," and noted that smaller models capable of harm were not covered. Senator Wiener responded publicly that the veto reflected industry lobbying pressure. The episode triggered a broader state-level debate about AI regulation.',
  legislativeHistory: [
    { date: '2024-02-08', event: 'Introduced in California State Senate' },
    {
      date: '2024-05-22',
      event: 'Passed Senate Judiciary Committee',
      notes: 'Vote: 6–1',
    },
    {
      date: '2024-08-28',
      event: 'Passed California State Senate',
      notes: 'Vote: 32–1',
    },
    {
      date: '2024-09-05',
      event: 'Passed California State Assembly',
      notes: 'Vote: 41–9',
    },
    {
      date: '2024-09-29',
      event: 'Vetoed by Governor Gavin Newsom',
      notes: 'Veto message cited regulatory overreach and gaps in coverage',
    },
  ],
  relatedPoliticianIds: ['gavin-newsom'],
  tags: ['Artificial Intelligence', 'Technology Policy', 'AI Safety', 'Regulation'],
  sources: [
    {
      id: 'sb1047-leginfo',
      label: 'SB 1047 (2024) — Safe and Secure AI Innovation Act — Veto Message',
      url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB1047',
      publisher: 'California Legislative Information',
      publishedAt: '2024-09-29',
      retrievedAt: '2024-12-01',
      type: 'legislative-record',
    },
  ],
}

export const allBills: Bill[] = [ab5, sb9, sb1047]

export const billsById: Record<string, Bill> = Object.fromEntries(
  allBills.map((b) => [b.slug, b])
)

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'W000437',
    slug: 'roger-wicker',
    name: 'Roger Wicker',
    party: 'R',
    chamber: 'Senate',
    state: 'Mississippi',
    currentTitle: 'U.S. Senator from Mississippi',
    bio: 'Roger Wicker has represented Mississippi in the U.S. Senate since 2007, serving as Ranking Member of the Senate Armed Services Committee. A former House member and state senator, he is a leading voice on defense, trade, and telecommunications policy.',
    sinceYear: 2007,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssrules', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    notableVote: {
      title: 'Against Inflation Reduction Act',
      year: 2022,
      summary: 'Wicker voted against the Inflation Reduction Act, arguing the climate and healthcare spending package would raise taxes on businesses during an inflationary period and harm Mississippi\'s energy sector.',
    },
    notableBill: {
      title: 'CHIPS and Science Act — Telecom Provisions',
      year: 2022,
      summary: 'Wicker championed broadband and telecommunications provisions in the CHIPS Act, expanding rural broadband access — a priority for rural states like Mississippi.',
    },
    topSectors: [
      { category: 'Defense & Aerospace', amount: 1200000, percentage: 35 },
      { category: 'Finance & Insurance', amount: 850000, percentage: 25 },
      { category: 'Agriculture', amount: 600000, percentage: 17 },
      { category: 'Other / Unitemized', amount: 800000, percentage: 23 },
    ],
  },

  {
    bioguideId: 'H001079',
    slug: 'cindy-hyde-smith',
    name: 'Cindy Hyde-Smith',
    party: 'R',
    chamber: 'Senate',
    state: 'Mississippi',
    currentTitle: 'U.S. Senator from Mississippi',
    bio: 'Cindy Hyde-Smith became Mississippi\'s first female U.S. Senator when she was appointed in 2018 to fill the seat of Thad Cochran. She won a special election later that year and re-election in 2020. She sits on the Senate Appropriations Committee and is a strong advocate for agriculture and rural development.',
    sinceYear: 2018,
    committees: [
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssrules', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    notableVote: {
      title: 'For Laken Riley Act',
      year: 2025,
      summary: 'Hyde-Smith voted for the Laken Riley Act in January 2025, the first bill signed by President Trump in his second term, which mandated detention of undocumented immigrants charged with violent crimes.',
    },
    notableBill: {
      title: 'Agriculture Appropriations — Rural Broadband',
      year: 2023,
      summary: 'Hyde-Smith secured significant rural broadband and agricultural infrastructure funding for Mississippi through her Appropriations Committee seat, prioritizing connectivity for the state\'s rural communities.',
    },
    topSectors: [
      { category: 'Agriculture', amount: 950000, percentage: 38 },
      { category: 'Finance & Insurance', amount: 600000, percentage: 24 },
      { category: 'Energy', amount: 450000, percentage: 18 },
      { category: 'Other / Unitemized', amount: 500000, percentage: 20 },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'K000388',
    slug: 'trent-kelly',
    name: 'Trent Kelly',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Mississippi',
    currentTitle: 'U.S. Representative, Mississippi 1st District',
    bio: 'Trent Kelly has represented Mississippi\'s 1st Congressional District since 2015. A retired Major General in the Army National Guard, he is a member of the House Armed Services Committee and focuses on military readiness, veterans\' affairs, and agriculture.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'For National Defense Authorization Act FY2026',
      year: 2025,
      summary: 'Kelly voted for the FY2026 NDAA, supporting increases in military readiness funding and provisions benefiting Guard and Reserve forces, which are significant employers in Mississippi\'s 1st District.',
    },
    topSectors: [
      { category: 'Defense & Military', amount: 450000, percentage: 40 },
      { category: 'Agriculture', amount: 280000, percentage: 25 },
      { category: 'Finance', amount: 200000, percentage: 18 },
      { category: 'Other / Unitemized', amount: 190000, percentage: 17 },
    ],
  },

  {
    bioguideId: 'T000193',
    slug: 'bennie-thompson',
    name: 'Bennie Thompson',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Mississippi',
    currentTitle: 'U.S. Representative, Mississippi 2nd District',
    bio: 'Bennie Thompson has represented Mississippi\'s 2nd Congressional District since 1993, making him one of the longest-serving members of the House. He chaired the House Homeland Security Committee and served as chair of the January 6th Select Committee. The 2nd District is a majority-Black district in the Mississippi Delta.',
    sinceYear: 1993,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Ranking Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Thompson voted against the House Republican budget reconciliation bill, arguing the Medicaid work requirements and SNAP cuts would harm Mississippi\'s large low-income population — one of the most dependent on federal safety net programs of any state.',
    },
    notableBill: {
      title: 'January 6th Committee Final Report',
      year: 2022,
      summary: 'As chair of the House Select Committee to Investigate the January 6th Attack on the U.S. Capitol, Thompson oversaw the investigation and final report documenting the events of January 6, 2021.',
    },
    topSectors: [
      { category: 'Labor & Public Sector Unions', amount: 350000, percentage: 42 },
      { category: 'Civil Rights & Advocacy', amount: 200000, percentage: 24 },
      { category: 'Individual Contributors', amount: 180000, percentage: 22 },
      { category: 'Other / Unitemized', amount: 100000, percentage: 12 },
    ],
  },

  {
    bioguideId: 'G000591',
    slug: 'michael-guest',
    name: 'Michael Guest',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Mississippi',
    currentTitle: 'U.S. Representative, Mississippi 3rd District',
    bio: 'Michael Guest has represented Mississippi\'s 3rd Congressional District since 2019. A former federal prosecutor and district attorney, he serves on the House Ethics Committee and focuses on law enforcement, judicial appointments, and fiscal conservatism.',
    sinceYear: 2019,
    committees: [
      { slug: 'hset', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against Kevin McCarthy as Speaker',
      year: 2023,
      summary: 'Guest was one of the Republicans who voted to remove Kevin McCarthy as Speaker of the House in October 2023, citing concerns about McCarthy\'s deal with Democrats on the continuing resolution.',
    },
    topSectors: [
      { category: 'Legal & Law Enforcement', amount: 380000, percentage: 38 },
      { category: 'Agriculture', amount: 250000, percentage: 25 },
      { category: 'Finance', amount: 190000, percentage: 19 },
      { category: 'Other / Unitemized', amount: 180000, percentage: 18 },
    ],
  },

  {
    bioguideId: 'E000235',
    slug: 'mike-ezell',
    name: 'Mike Ezell',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Mississippi',
    currentTitle: 'U.S. Representative, Mississippi 4th District',
    bio: 'Mike Ezell has represented Mississippi\'s 4th Congressional District since 2023, succeeding the retiring Steven Palazzo. A former Jackson County Sheriff, he focuses on border security, public safety, and the Gulf Coast\'s fishing and energy industries.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsnr', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'For Laken Riley Act',
      year: 2025,
      summary: 'Ezell voted for the Laken Riley Act, consistent with his background in law enforcement and emphasis on border security and immigration enforcement.',
    },
    topSectors: [
      { category: 'Energy & Oil/Gas', amount: 320000, percentage: 36 },
      { category: 'Agriculture & Fisheries', amount: 220000, percentage: 25 },
      { category: 'Defense', amount: 180000, percentage: 20 },
      { category: 'Other / Unitemized', amount: 170000, percentage: 19 },
    ],
  },
]

export const msDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

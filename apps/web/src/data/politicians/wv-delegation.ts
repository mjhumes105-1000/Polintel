import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001047',
    slug: 'shelley-moore-capito',
    name: 'Shelley Moore Capito',
    party: 'R',
    chamber: 'Senate',
    state: 'West Virginia',
    currentTitle: 'U.S. Senator from West Virginia',
    bio: 'Shelley Moore Capito has served in the U.S. Senate since 2015 and previously represented West Virginia\'s 2nd Congressional District in the House for 14 years. The daughter of former Governor Arch Moore, she became West Virginia\'s first female U.S. senator. She chairs the Senate Environment and Public Works Committee and is a senior member of the Appropriations Committee, where she advocates strongly for coal, natural gas, and rural infrastructure.',
    sinceYear: 2015,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssra', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its clean energy provisions would accelerate the decline of West Virginia\'s coal industry and that its drug pricing measures would reduce pharmaceutical investment. She had been involved in bipartisan infrastructure talks but opposed the broader reconciliation package.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law as one of the key Republican negotiators. West Virginia secured significant highway, broadband, and water infrastructure funding. Capito played a leading role in the bipartisan talks and championed the bill\'s broadband provisions for rural Appalachia.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with her support for stronger immigration enforcement throughout her congressional career.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill as Chair of the Senate Environment and Public Works Committee, championing provisions that rolled back clean energy mandates threatening West Virginia\'s coal and natural gas industries and restored federal fossil fuel leasing on public lands. Capito highlighted the legislation\'s energy provisions as a lifeline for the coalfield communities and natural gas workers that form the backbone of West Virginia\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'INVEST in America Act — Appalachian Highway System Provisions',
        year: 2021,
        month: 7,
        summary: 'Secured major funding for the Appalachian Development Highway System within the bipartisan infrastructure law, advancing long-delayed highway corridors that West Virginia\'s mountainous terrain has made extraordinarily difficult and costly to build. The state\'s network of four-lane highways is critical to economic development in isolated coalfield communities.',
      },
      {
        title: 'Water Resources Development Act',
        year: 2022,
        month: 12,
        summary: 'Championed provisions in the Water Resources Development Act improving flood control infrastructure in West Virginia, which suffers from severe annual flooding along the Kanawha, Elk, and other rivers. She used her Appropriations seat to secure Army Corps of Engineers funding for critical flood mitigation projects.',
      },
    ],
  },

  {
    bioguideId: 'J000312',
    slug: 'james-c-justice',
    name: 'James C. Justice',
    party: 'R',
    chamber: 'Senate',
    state: 'West Virginia',
    currentTitle: 'U.S. Senator from West Virginia',
    bio: 'James C. Justice II, known as Jim Justice, was elected to the U.S. Senate in 2024, filling the seat vacated by Joe Manchin. One of West Virginia\'s wealthiest citizens and owner of The Greenbrier resort, Justice served as the state\'s governor from 2017 to 2025. He was originally elected governor as a Democrat but switched to the Republican Party in 2017 at a rally with President Trump. He serves on the Agriculture, Energy, and Small Business committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in the Senate, mandating ICE detention of undocumented immigrants charged with violent crimes. The vote aligned with his support for the Trump administration\'s immigration enforcement priorities.',
      },
      {
        title: 'One Big Beautiful Bill — Agriculture Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Senate Republican budget reconciliation bill, including agricultural provisions relevant to West Virginia\'s farming and timber communities. Justice used his Agriculture Committee seat to advocate for provisions supporting the state\'s rural economy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using his Energy and Natural Resources Committee seat to press for provisions protecting West Virginia\'s coal and natural gas sectors from federal regulatory overreach. Justice argued the bill\'s fossil fuel protections and tax relief were essential to revitalizing the coalfield communities he governed for eight years as the state\'s chief executive.',
      },
    ],
    keyBills: [
      {
        title: 'Coal and Energy Worker Transition Assistance',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation expanding federal assistance for displaced coal and energy workers in West Virginia and other Appalachian states, drawing on his experience as governor overseeing communities devastated by the decline of the coal industry. The bill targeted workforce retraining, health benefit preservation, and economic development funding for coalfield counties.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M001205',
    slug: 'carol-d-miller',
    name: 'Carol D. Miller',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'West Virginia',
    currentTitle: 'U.S. Representative, West Virginia 1st District',
    bio: 'Carol Miller has represented West Virginia\'s 1st Congressional District since 2019. A businesswoman and former member of the West Virginia House of Delegates, she is the daughter of former U.S. Representative Samuel L. Devine of Ohio. She sits on the House Ways and Means Committee, where she focuses on tax policy, trade, and healthcare issues affecting her southwestern West Virginia district.',
    sinceYear: 2019,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act Extension Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the One Big Beautiful Bill including extension of the 2017 Tax Cuts and Jobs Act provisions, which she argued would benefit small businesses and working families in West Virginia\'s 1st District. She used her Ways and Means seat to advocate for rural small business tax relief.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating detention of undocumented immigrants charged with violent crimes, consistent with her strong support for immigration enforcement throughout her congressional tenure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using her Ways and Means Committee seat to advance tax provisions benefiting West Virginia\'s small businesses and working families in the 1st District. Miller emphasized the legislation\'s coal and fossil fuel protections as vital to preserving the energy jobs that sustain communities across southwestern West Virginia.',
      },
    ],
    keyBills: [
      {
        title: 'Coalfields Expressway Funding Provisions',
        year: 2021,
        month: 11,
        summary: 'Worked within the Infrastructure Investment and Jobs Act to secure funding for the Coalfields Expressway, a long-delayed four-lane highway project connecting isolated McDowell and Wyoming counties to the broader Appalachian highway network — critical to economic revitalization in one of the nation\'s most economically distressed regions.',
      },
    ],
  },

  {
    bioguideId: 'M001235',
    slug: 'riley-m-moore',
    name: 'Riley M. Moore',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'West Virginia',
    currentTitle: 'U.S. Representative, West Virginia 2nd District',
    bio: 'Riley Moore was elected to represent West Virginia\'s 2nd Congressional District in 2024, succeeding Alex Mooney. The son of U.S. Rep. Carol Miller\'s fellow Republican and a former West Virginia State Treasurer, Moore led a national anti-ESG investment movement as treasurer, directing state pension funds away from firms with environmental, social, and governance investing mandates. He serves on the House Appropriations Committee.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in office, mandating ICE detention of undocumented immigrants charged with violent crimes. Consistent with his campaign emphasis on border security and law enforcement.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, including energy provisions he argued would support West Virginia\'s coal and natural gas industries. Used his Appropriations Committee seat to advocate for energy-related funding priorities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package as a member of the House Appropriations Committee, securing energy and infrastructure funding for West Virginia\'s 2nd District. Moore highlighted the bill\'s rollback of ESG-driven energy regulations and its protections for coal and natural gas production as central wins for the state\'s fossil fuel workforce.',
      },
    ],
    keyBills: [
      {
        title: 'Anti-ESG Investment Protection Act',
        year: 2025,
        month: 3,
        summary: 'Introduced federal legislation modeled on his anti-ESG actions as West Virginia Treasurer, prohibiting federally managed pension funds from using ESG criteria in investment decisions. Moore argued ESG investing sacrifices financial returns for political goals and harms beneficiaries including West Virginia coal miners\' pension funds.',
      },
    ],
  },
]

export const wvDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001261',
    slug: 'john-barrasso',
    name: 'John Barrasso',
    party: 'R',
    chamber: 'Senate',
    state: 'Wyoming',
    currentTitle: 'U.S. Senator from Wyoming',
    bio: 'John Barrasso has served as Senate Majority Whip since January 2025 and has represented Wyoming in the U.S. Senate since June 2007, initially appointed to fill the seat vacated by the death of Craig Thomas. An orthopedic surgeon who practiced in Casper for over two decades before entering politics, he served in the Wyoming State Senate and built a reputation as a reliable conservative voice on energy, healthcare, and fiscal policy. He has served in Senate Republican leadership continuously since 2013, making him one of the most experienced members of the current Senate leadership team.',
    sinceYear: 2007,
    committees: [
      { slug: 'sswh', name: 'Senate Majority Whip — Vote Counting', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Wyoming State Senator, Natrona County', jurisdiction: 'Wyoming State Senate', startDate: '2003-01-14', endDate: '2007-06-22' },
      { title: 'Orthopedic Surgeon, Wyoming Orthopedics & Sports Medicine', jurisdiction: 'Casper, Wyoming', startDate: '1983-01-01', endDate: '2007-01-01' },
      { title: 'Wyoming State Medical Officer — Wyoming Board of Medicine', jurisdiction: 'State of Wyoming', startDate: '2003-01-01', endDate: '2007-01-01' },
    ],
    keyMilestones: [
      { year: 2003, description: 'Elected to Wyoming State Senate; entered politics after more than 20 years as an orthopedic surgeon in Casper' },
      { year: 2007, description: 'Appointed to U.S. Senate by Governor Dave Freudenthal to fill the vacancy created by Craig Thomas\'s death from leukemia; won full-term election in 2008' },
      { year: 2013, description: 'Elected Senate Republican Policy Committee Chairman — entered leadership structure that he has remained in continuously for over a decade' },
      { year: 2017, description: 'Elected Senate Republican Conference Chairman — the third-ranking position in the caucus' },
      { year: 2019, description: 'Chaired the Senate Republican Conference through the first Trump term and COVID-19 pandemic response, managing a fractious conference on healthcare legislation' },
      { year: 2025, description: 'Elected Senate Majority Whip, the second-ranking position in Senate Republican leadership, responsible for vote counting and conference management on the Senate floor' },
    ],
    keyVotes: [
      {
        title: 'Against: Affordable Care Act',
        year: 2010,
        month: 3,
        position: 'Against',
        summary: 'Voted against the Affordable Care Act as a third-year senator and physician, arguing the law would increase costs, reduce access, and represent a federal overreach into healthcare decisions. Barrasso\'s medical background made him one of the most credentialed Republican voices on ACA opposition, and he has written and spoken extensively about the law\'s effects on physicians and patients throughout his career.',
      },
      {
        title: 'For: Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul as Conference Chairman, supporting the corporate rate reduction and enhanced business expensing provisions. Wyoming\'s oil, gas, and coal industry — the state\'s primary economic engine — benefited significantly from the bill\'s pass-through deduction and capital expensing enhancements.',
      },
      {
        title: 'Against: Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, opposing its clean energy tax credits and Medicare drug price negotiation provisions. Barrasso argued from his Environment and Public Works Committee seat that the law\'s clean energy subsidies would accelerate the decline of Wyoming\'s fossil fuel industry. His opposition was the most vocal and sustained of any senator on energy grounds.',
      },
      {
        title: 'For: One Big Beautiful Bill',
        year: 2025,
        month: 7,
        position: 'For',
        summary: 'As Majority Whip, tracked Republican Senate votes and managed the floor dynamics for passage of the reconciliation bill, voting for the final package. Barrasso focused particularly on the bill\'s rollback of clean energy subsidies from the Inflation Reduction Act — a reversal he had advocated for since the IRA\'s passage — and its provisions supporting domestic fossil fuel production.',
      },
    ],
    keyBills: [
      {
        title: 'ADVANCE Act — Nuclear Energy',
        year: 2024,
        month: 7,
        summary: 'Co-authored the bipartisan Accelerating Deployment of Versatile, Advanced Nuclear for Clean Energy (ADVANCE) Act, the most significant nuclear energy legislation in decades, streamlining NRC licensing, reducing fees for advanced reactor applicants, and incentivizing deployment of next-generation nuclear technology. Wyoming\'s TerraPower reactor project at Kemmerer is one of the nation\'s leading advanced nuclear demonstrations.',
      },
      {
        title: 'PEPFAR Reauthorization provisions',
        year: 2024,
        month: 3,
        summary: 'Supported reauthorization of the President\'s Emergency Plan for AIDS Relief from the Foreign Relations Committee, one of the few global health programs with consistent bipartisan support. Barrasso\'s backing was notable given conservative skepticism about foreign aid, and reflected his positioning as a physician-senator who supports targeted global health investments with demonstrated measurable outcomes.',
      },
    ],
    topSectors: [
      { category: 'Energy & Oil and Gas', amount: 2100000, percentage: 40 },
      { category: 'Healthcare & Pharma', amount: 1100000, percentage: 21 },
      { category: 'Finance & Real Estate', amount: 900000, percentage: 17 },
      { category: 'Individual Contributors', amount: 1100000, percentage: 22 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Barrasso has built one of the Senate\'s most reliably conservative voting records, opposing the ACA, ARP, IRA, and most major Democratic legislation while supporting Republican tax cuts, defense increases, and deregulation.',
        'His medical background is central to his legislative identity on healthcare — he is credentialed in a way that most healthcare-focused politicians are not, and has used that credential to give Republican healthcare arguments substantive weight.',
        'His opposition to the IRA and clean energy policy is particularly fierce because of Wyoming\'s fossil fuel economy — he is not merely voting on party lines but defending the fundamental economic structure of his state.',
      ],
      whatWeObserve: [
        'Barrasso is the Senate Republican leadership member with the most explicit fossil fuel industry alignment — a positioning that reflects Wyoming\'s economic reality but also makes him a target for Democrats framing Republicans as captured by oil and gas.',
        'His appointment-then-election path to the Senate in 2007–2008 means he arrived at the Senate with a physician\'s authority and a state legislator\'s pragmatism, without having had to fight through a contested Republican primary.',
        'Wyoming is the smallest-population state with Senate representation, giving Barrasso extraordinary per-capita influence relative to the state\'s size — and near-total electoral security that allows him to focus on leadership without competitive re-election concerns.',
      ],
      whatIsUnresolved: [
        'The long-term viability of Wyoming\'s coal economy — and whether Barrasso\'s policy positions can arrest its decline — is the existential economic question for his state that underlies much of his legislative record.',
      ],
    },
  },

  {
    bioguideId: 'L000571',
    slug: 'cynthia-m-lummis',
    name: 'Cynthia M. Lummis',
    party: 'R',
    chamber: 'Senate',
    state: 'Wyoming',
    currentTitle: 'U.S. Senator from Wyoming',
    bio: 'Cynthia Lummis has served in the U.S. Senate since 2021 and previously represented Wyoming\'s at-large House seat from 2009 to 2017. One of Congress\'s most vocal cryptocurrency advocates and a Bitcoin holder herself, she has become the leading Senate voice on digital asset regulation and blockchain policy. She serves on the Banking, Housing, and Urban Affairs Committee and the Commerce and Environment committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing it would destroy Wyoming\'s fossil fuel economy and that its energy transition provisions were economically unrealistic. Wyoming is one of the nation\'s most coal-dependent states and Lummis has consistently opposed federal climate regulations.',
      },
      {
        title: 'FIT21 Cryptocurrency Oversight Act — Senate Companion',
        year: 2024,
        month: 7,
        position: 'For',
        summary: 'Championed Senate legislation establishing a comprehensive regulatory framework for digital assets, assigning oversight authority between the SEC and CFTC based on whether assets are securities or commodities. The bill reflected years of work with the crypto industry to create regulatory clarity.',
      },
      {
        title: 'Bitcoin Strategic Reserve Resolution',
        year: 2025,
        month: 3,
        position: 'For',
        summary: 'Supported legislation proposing that the U.S. Treasury establish a strategic Bitcoin reserve, arguing that Bitcoin\'s fixed supply and decentralized nature make it an appropriate sovereign reserve asset. Lummis has been the most prominent congressional advocate for Bitcoin as a government reserve holding.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, drawing on her Banking Committee seat to advance provisions creating a clearer regulatory environment for digital assets alongside fossil fuel protections vital to Wyoming\'s coal and oil economy. Lummis emphasized the bill\'s rollback of IRA energy regulations as critical relief for Wyoming\'s energy producers and the state revenues they generate.',
      },
    ],
    keyBills: [
      {
        title: 'Lummis-Gillibrand Responsible Financial Innovation Act',
        year: 2023,
        month: 7,
        summary: 'Co-authored the most comprehensive cryptocurrency regulatory bill in Senate history with Sen. Kirsten Gillibrand, establishing a clear regulatory framework distinguishing digital commodities from securities, setting consumer protection standards, and creating rules for stablecoins. The bill became the basis for subsequent congressional cryptocurrency negotiations.',
      },
      {
        title: 'BITCOIN Act — Strategic Bitcoin Reserve',
        year: 2024,
        month: 7,
        summary: 'Introduced the Boosting Innovation, Technology, and Competitiveness through Optimized Investment Nationwide Act, proposing that the U.S. Treasury purchase one million Bitcoin over five years as a strategic reserve asset. The bill generated significant debate about the role of cryptocurrency in U.S. sovereign wealth strategy.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'H001096',
    slug: 'harriet-m-hageman',
    name: 'Harriet M. Hageman',
    party: 'R',
    chamber: 'House',
    district: 0,
    state: 'Wyoming',
    currentTitle: 'U.S. Representative, Wyoming At-Large',
    bio: 'Harriet Hageman has represented Wyoming\'s at-large House seat since 2023, defeating incumbent Liz Cheney in the 2022 Republican primary with Donald Trump\'s endorsement. A water rights and natural resources attorney, she has built her legal career representing ranchers, farmers, and local governments in battles against federal environmental and land use regulations. She serves on the House Judiciary and Natural Resources committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsqj', name: 'House Select Subcommittee to Investigate the Remaining Questions Surrounding January 6, 2021', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Limit, Save, Grow Act',
        year: 2023,
        month: 4,
        position: 'For',
        summary: 'Voted for the House Republican debt ceiling bill requiring significant spending cuts in exchange for raising the debt limit. Hageman was a strong supporter of fiscal conservative demands for spending restraint as a condition for any debt ceiling increase.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Border security was a central issue in her 2022 primary campaign and she has been a consistent supporter of strict immigration enforcement.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, emphasizing its rollback of Inflation Reduction Act environmental regulations and its implications for Wyoming\'s energy sector. Hageman argued the bill would reverse what she characterized as federal overreach into western states\' natural resource management.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package from her Natural Resources and Judiciary committee seats, highlighting provisions that curtailed federal EPA and BLM regulatory authority over Wyoming\'s ranchers, energy producers, and water rights holders. Hageman argued the bill\'s fossil fuel protections and land-use rollbacks were a long-overdue correction to decades of federal overreach that had strangled Wyoming\'s agricultural and energy economy.',
      },
    ],
    keyBills: [
      {
        title: 'REINS Act — Regulatory Overreach Reduction',
        year: 2023,
        month: 6,
        summary: 'Co-championed the Regulations from the Executive in Need of Scrutiny Act, requiring congressional approval of all major federal regulations before they take effect. Hageman\'s career as a litigator against federal land and water regulations made this a signature priority — she argued agencies like EPA and BLM had far exceeded their statutory authority in regulating Wyoming\'s ranchers and energy producers.',
      },
    ],
  },
]

export const wyDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

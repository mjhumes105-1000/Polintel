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
    currentTitle: 'Senate Majority Whip',
    bio: 'John Barrasso has served in the U.S. Senate since 2007, appointed to fill the seat of the late Craig Thomas. An orthopedic surgeon before entering politics, he serves as Senate Majority Whip in the 119th Congress — responsible for securing votes and enforcing Republican caucus discipline — and is a senior member of the Energy and Natural Resources, Finance, and Foreign Relations committees. He is a leading voice on energy policy, opposing regulations that affect Wyoming\'s coal, oil, and natural gas industries.',
    sinceYear: 2007,
    committees: [
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its energy provisions amounted to a war on Wyoming\'s fossil fuel economy. As a leading Senate Republican on energy policy, Barrasso was among the most vocal critics of the law\'s clean energy subsidies and oil and gas royalty increases on federal lands.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act as a consistent supporter of strict immigration enforcement. Barrasso has supported stronger border security legislation throughout his Senate tenure and views the bill as a necessary step to hold the prior administration accountable for immigration policy failures.',
      },
      {
        title: 'Nuclear Energy Innovation and Modernization Act',
        year: 2019,
        month: 1,
        position: 'For',
        summary: 'Championed and voted for the Nuclear Energy Innovation and Modernization Act, streamlining NRC licensing for advanced nuclear reactors. Wyoming has positioned itself as a future hub for advanced nuclear energy, and Barrasso has long argued nuclear must be part of any serious carbon reduction strategy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill as a senior member of the Energy and Natural Resources and Finance committees, championing provisions that rescinded Inflation Reduction Act clean energy mandates and restored federal oil, gas, and coal leasing at rates favorable to Wyoming\'s extractive industries. Barrasso called the energy provisions a turning point that would protect the fossil fuel jobs and revenues that fund Wyoming\'s state government.',
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
        title: 'American Energy Independence Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation rolling back Inflation Reduction Act energy provisions and restoring federal oil and gas leasing to prior rates, protecting Wyoming\'s position as one of the nation\'s top coal, oil, and natural gas producing states. The bill reflected his consistent opposition to federal energy regulations affecting Wyoming\'s extractive economy.',
      },
    ],
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

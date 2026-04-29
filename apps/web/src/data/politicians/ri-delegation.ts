import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'W000802',
    slug: 'sheldon-whitehouse',
    name: 'Sheldon Whitehouse',
    party: 'D',
    chamber: 'Senate',
    state: 'Rhode Island',
    currentTitle: 'U.S. Senator from Rhode Island',
    bio: 'Sheldon Whitehouse has served Rhode Island in the U.S. Senate since 2007, having previously served as Rhode Island Attorney General and U.S. Attorney. He serves as Ranking Member on the Senate Environment and Public Works Committee and is one of the chamber\'s most persistent advocates for climate change legislation, having delivered over 290 "Time to Wake Up" floor speeches on the climate crisis. He also chairs the International Narcotics Control Caucus and sits on the Senate Judiciary Committee.',
    sinceYear: 2007,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'scnc', name: 'United States Senate Caucus on International Narcotics Control', chamber: 'Senate', role: 'Chair' },
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, which represented the largest climate investment in U.S. history at $369 billion. Whitehouse, who has delivered hundreds of Senate floor speeches on climate change over more than a decade, called the bill a historic step and worked to ensure its clean energy provisions were as strong as possible.',
      },
      {
        title: 'DISCLOSE Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Championed the DISCLOSE Act requiring dark money organizations to disclose donors who give more than $10,000. Whitehouse has been the Senate\'s leading investigator of dark money\'s influence on federal courts and elections, and the legislation reflects his years-long effort to bring transparency to political spending.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, advocating for its coastal resilience provisions and clean water infrastructure funding particularly important to Rhode Island\'s coastline and Narragansett Bay ecosystem. Rhode Island faces significant sea level rise and storm surge risks that make coastal infrastructure investment an immediate priority.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package as Ranking Member on the Senate Environment and Public Works Committee, warning that its sweeping rollback of clean energy investment credits would halt offshore wind development and devastate Rhode Island\'s position as a pioneer in the industry. Whitehouse, who has delivered hundreds of Senate floor speeches on climate, called the bill\'s energy provisions the most damaging environmental rollback in decades and condemned its Medicaid cuts as harmful to Rhode Island\'s working families.',
      },
    ],
    keyBills: [
      {
        title: 'Comprehensive Ocean Acidification Research Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation expanding federal research into ocean acidification\'s effects on marine ecosystems and the fishing industry. Rhode Island\'s commercial fishing economy, concentrated in Point Judith and Newport, is directly threatened by ocean acidification caused by carbon dioxide absorption, and Whitehouse has consistently linked climate science to the state\'s economic interests.',
      },
      {
        title: 'Supreme Court Ethics Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation requiring the Supreme Court to adopt a binding code of ethics comparable to that applied to lower federal courts. Following revelations of undisclosed gifts and travel to Supreme Court justices, Whitehouse used his Judiciary Committee role to lead Senate Democrats\' push for judicial ethics reform.',
      },
    ],
  },

  {
    bioguideId: 'R000122',
    slug: 'jack-reed',
    name: 'Jack Reed',
    party: 'D',
    chamber: 'Senate',
    state: 'Rhode Island',
    currentTitle: 'U.S. Senator from Rhode Island',
    bio: 'Jack Reed has served Rhode Island in Congress since 1991 — first in the House and then in the U.S. Senate since 1997 — making him one of the longest-serving members of the Senate. A West Point graduate and former Army Airborne Ranger who practiced law before entering politics, he serves as Ranking Member on the Senate Armed Services Committee and sits on the Appropriations and Banking Committees. He is one of the Senate\'s most respected voices on defense and military policy.',
    sinceYear: 1991,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024 as Ranking Member on Armed Services, having negotiated key bipartisan provisions on military readiness, housing for service members, and Indo-Pacific deterrence. Reed used his position to remove or modify provisions he viewed as harmful to military cohesion, while supporting overall defense investment.',
      },
      {
        title: 'Ukraine Security Supplemental',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for Ukraine military aid, arguing from his military background that supporting Ukraine\'s defense against Russian aggression is essential to NATO cohesion and U.S. strategic interests. Reed has been one of the Senate\'s most consistent voices for maintaining U.S. commitments to democratic allies.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, securing funding for Rhode Island\'s aging bridges — the state has one of the highest percentages of structurally deficient bridges in the country — and for port infrastructure at the Port of Providence. Reed used his Appropriations seat to advocate for Rhode Island-specific projects.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package as Ranking Member on the Senate Armed Services Committee, arguing its defense spending cuts undermined readiness at Naval Station Newport and the Naval War College — two of Rhode Island\'s most vital economic and strategic institutions. Reed also condemned the bill\'s Medicaid reductions as a betrayal of Rhode Island\'s service members and veterans who depend on federal healthcare programs.',
      },
    ],
    keyBills: [
      {
        title: 'Military Housing Privatization Reform Act',
        year: 2022,
        month: 8,
        summary: 'Co-authored legislation reforming the Military Housing Privatization Initiative following investigations revealing mold, pest infestations, and maintenance failures in privatized military family housing. Reed drew on his Armed Services leadership to address a systemic problem affecting service member families at installations across the country.',
      },
      {
        title: 'Servicemember Financial Protection Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation through the Banking Committee strengthening financial protections for military families against predatory lending and deceptive financial products. Rhode Island\'s Naval Station Newport and Naval War College give Reed a large military constituency, and he has consistently fought for service member financial wellbeing throughout his career.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'A000380',
    slug: 'gabe-amo',
    name: 'Gabe Amo',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Rhode Island',
    currentTitle: 'U.S. Representative, Rhode Island 1st District',
    bio: 'Gabe Amo was elected to Rhode Island\'s 1st Congressional District in a November 2023 special election, succeeding David Cicilline who resigned to lead the Rhode Island School of Design. A native of Pawtucket and a former White House official in the Biden administration who worked on domestic policy, he serves on the House Foreign Affairs, Science and Technology, and Budget Committees. At 35, he is one of the youngest members of Congress and the first Black member of Congress elected from Rhode Island.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would harm Rhode Island\'s working families and its proposed science and research funding cuts would damage the state\'s biotech and university research sectors. Amo highlighted the bill\'s impact on Pawtucket and Providence communities that depend heavily on federal safety net programs.',
      },
      {
        title: 'Continuing Resolution on Government Funding',
        year: 2025,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2025 continuing resolution that included cuts to domestic programs, arguing it would harm Rhode Island\'s community health centers and education funding. Amo has positioned himself as a progressive voice on fiscal policy, opposing spending cuts to programs serving vulnerable communities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from his seat on the House Budget Committee, warning that its Medicaid cuts and SNAP reductions would devastate Pawtucket and Providence\'s working-class communities, which depend heavily on federal safety net programs. Amo also condemned the bill\'s rollback of biotech and science research funding as a direct threat to Rhode Island\'s university research sector and the innovation economy he has championed since taking office.',
      },
    ],
    keyBills: [
      {
        title: 'Pawtucket Economic Renewal and Opportunity Act',
        year: 2024,
        month: 6,
        summary: 'Introduced legislation supporting economic development and workforce training in Pawtucket and central Rhode Island, drawing on his background as a Biden White House domestic policy official. The bill targeted communities transitioning from manufacturing to service and technology employment, reflecting Amo\'s focus on economic equity for Rhode Island\'s working-class communities.',
      },
    ],
  },

  {
    bioguideId: 'M001223',
    slug: 'seth-magaziner',
    name: 'Seth Magaziner',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Rhode Island',
    currentTitle: 'U.S. Representative, Rhode Island 2nd District',
    bio: 'Seth Magaziner was elected to Rhode Island\'s 2nd Congressional District in 2022, succeeding Jim Langevin who retired. A former two-term Rhode Island General Treasurer and Yale graduate who worked in investment management, he serves on the House Homeland Security and Natural Resources Committees. His district covers western and southern Rhode Island including Cranston, Warwick, and the state\'s rural and coastal communities, and he focuses on clean energy, infrastructure, and veterans\' issues.',
    sinceYear: 2023,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican reconciliation bill, highlighting cuts to clean energy programs he argued would harm Rhode Island\'s growing offshore wind industry and the jobs associated with it. Rhode Island was the site of the first offshore wind farm in U.S. waters, and Magaziner has championed the state\'s offshore wind development as a model for clean energy job creation.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Supported implementation of the bipartisan infrastructure law, advocating for its offshore wind provisions and coastal resilience funding as General Treasurer before taking office. As a congressman, he has championed the law\'s implementation for Rhode Island\'s bridge and port infrastructure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from his seat on the House Natural Resources Committee, arguing its elimination of offshore wind tax credits would gut the industry Rhode Island pioneered and cost thousands of jobs in Cranston, Warwick, and the state\'s coastal communities. Magaziner also warned that the bill\'s Medicaid cuts would harm the working families of the 2nd District who gained healthcare coverage under the ACA.',
      },
    ],
    keyBills: [
      {
        title: 'Offshore Wind Workforce Development Act',
        year: 2024,
        month: 4,
        summary: 'Introduced legislation funding apprenticeship and training programs for the offshore wind industry, building on Rhode Island\'s position as a pioneering state in offshore wind development. The bill targeted workforce development at Rhode Island\'s community colleges and technical schools to prepare workers for construction and maintenance of offshore wind turbines in the New England region.',
      },
    ],
  },
]

export const riDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

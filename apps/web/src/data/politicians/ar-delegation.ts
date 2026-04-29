import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001236',
    slug: 'john-boozman',
    name: 'John Boozman',
    party: 'R',
    chamber: 'Senate',
    state: 'Arkansas',
    currentTitle: 'U.S. Senator from Arkansas',
    bio: 'John Boozman has represented Arkansas in the U.S. Senate since 2011, having previously served five terms in the House. He chairs the Senate Committee on Agriculture, Nutrition, and Forestry in the 119th Congress and serves on Appropriations and Veterans\' Affairs. A former optometrist, Boozman has focused on farm policy, veterans\' healthcare, and rural economic development throughout his congressional career. He is known for his bipartisan instincts and methodical approach to legislating, and authored key provisions of the 2018 Farm Bill.',
    sinceYear: 2001,
    committees: [
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Agriculture Improvement Act of 2018 (2018 Farm Bill)',
        year: 2018,
        month: 12,
        position: 'For',
        summary: 'As a senior member of the Agriculture Committee, Boozman was instrumental in writing and passing the 2018 Farm Bill, which reauthorized commodity support programs critical to Arkansas\'s rice, soybean, and cotton producers. He championed the bill\'s crop insurance provisions and conservation programs and secured additional support for beginning farmers.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing the methane fees would raise costs for Arkansas\'s energy sector and that the corporate minimum tax would harm the state\'s agricultural cooperatives and food processing businesses. He also objected to Medicare drug negotiation provisions he believed would reduce pharmaceutical innovation.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Boozman has consistently supported strong immigration enforcement and views secure borders as a prerequisite for orderly immigration reform.',
      },
    ],
    keyBills: [
      {
        title: 'Farm Bill — 2026 Reauthorization',
        year: 2026,
        month: 2,
        summary: 'As Senate Agriculture Committee Chair, Boozman is the principal Senate author of the 2026 Farm Bill reauthorization, working to update commodity programs, crop insurance, conservation priorities, and nutrition assistance for the next five years. He has prioritized maintaining the safety net for Arkansas\'s row crop farmers while updating conservation programs to reflect current climate and water challenges facing the Delta region.',
      },
      {
        title: 'PACT Act — Veterans Toxic Exposure',
        year: 2022,
        month: 8,
        summary: 'Co-sponsored and voted for the PACT Act, which expanded VA healthcare eligibility for veterans exposed to burn pits and other toxic substances during service. Boozman used his Veterans\' Affairs Committee role to advocate for provisions specifically addressing the backlog of exposure-related claims and ensuring that rural Arkansas veterans could access VA services without excessive travel.',
      },
    ],
  },

  {
    bioguideId: 'C001095',
    slug: 'tom-cotton',
    name: 'Tom Cotton',
    party: 'R',
    chamber: 'Senate',
    state: 'Arkansas',
    currentTitle: 'U.S. Senator from Arkansas',
    bio: 'Tom Cotton has represented Arkansas in the U.S. Senate since 2015, having previously served one term in the House. A Harvard Law graduate and Army Ranger veteran who served in Iraq and Afghanistan, he chairs the Senate Select Committee on Intelligence and serves on Armed Services and Energy and Natural Resources. Cotton is one of the Senate\'s most hawkish voices on national security, China policy, and Iran, and has been widely discussed as a potential presidential candidate. He is known for his strategic communications and willingness to take confrontational positions that other Republicans avoid.',
    sinceYear: 2013,
    committees: [
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Chair' },
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Cotton Letter to Iranian Leaders',
        year: 2015,
        month: 3,
        position: 'For',
        summary: 'Cotton organized and led 46 Republican senators in signing an open letter to Iranian leadership warning that any nuclear deal not ratified by the Senate could be reversed by a future president. The letter was widely criticized by Democrats and foreign policy experts as unprecedented interference in executive branch negotiations, but Cotton defended it as a necessary constitutional reminder about the Senate\'s treaty role.',
      },
      {
        title: 'Against COVID-19 Relief Negotiations — Initial Objections',
        year: 2020,
        month: 4,
        position: 'Against',
        summary: 'Was one of the first Republican senators to raise concerns about the CARES Act\'s enhanced unemployment benefits, arguing that the $600 per week supplement could pay workers more than their pre-pandemic wages and reduce the incentive to return to work. Cotton advocated for wage replacement formulas rather than flat benefit amounts, a position that foreshadowed later Republican debates over benefit design.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his long-standing immigration enforcement advocacy. As Intelligence Committee Chair, Cotton has also highlighted the national security dimensions of border vulnerabilities and supported the bill as part of a broader enforcement package he has championed for years.',
      },
    ],
    keyBills: [
      {
        title: 'BIOSECURE Act',
        year: 2024,
        month: 3,
        summary: 'Co-authored legislation prohibiting U.S. federal agencies from contracting with Chinese biotechnology firms — particularly BGI and WuXi AppTec — citing national security risks from foreign access to American genetic data and pharmaceutical supply chains. Cotton framed the bill as essential for protecting sensitive health data from the Chinese Communist Party and reducing dangerous dependencies in the biopharmaceutical supply chain.',
      },
      {
        title: 'COTTON Act — Restricting Chinese investment in U.S. agriculture',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation restricting Chinese nationals and entities from purchasing farmland and agricultural businesses near U.S. military installations. Cotton expressed concern about Chinese acquisition of land near sensitive facilities — including a high-profile case involving a Chinese-connected firm near Grand Forks Air Force Base in North Dakota — and used his Intelligence Committee position to highlight the counterintelligence risks.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'C001087',
    slug: 'eric-a-rick-crawford',
    name: 'Eric A. "Rick" Crawford',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Arkansas',
    currentTitle: 'U.S. Representative, Arkansas 1st District',
    bio: 'Rick Crawford has represented Arkansas\'s 1st Congressional District — covering the northeastern Delta region — since 2011. He chairs the House Permanent Select Committee on Intelligence and serves on Transportation and Infrastructure and Agriculture. A former Army bomb disposal technician and agricultural broadcaster, he brings both national security and farm policy expertise to his work. His Delta district is among the most agriculturally productive in the country, producing rice, cotton, and soybeans, and faces persistent economic challenges.',
    sinceYear: 2011,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Chair' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2024,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2025 as Intelligence Committee Chair, supporting strong national security provisions and classified program authorizations. Crawford has been a consistent advocate for maintaining robust intelligence community funding and for prioritizing China-focused intelligence operations through his committee work.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting it as a reasonable compromise that imposed spending discipline without risking the agricultural credit markets that his Delta district depends on for seasonal crop loans. Crawford has generally taken a pragmatic approach to debt ceiling negotiations, prioritizing farm credit market stability.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his border security focus. Crawford has used his Intelligence Committee work to highlight the national security implications of border vulnerabilities, including reports of special-interest alien crossings and cartel control of smuggling routes.',
      },
    ],
    keyBills: [
      {
        title: 'Waterways Infrastructure Investment Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation through Transportation and Infrastructure funding critical maintenance and capacity improvements for the Mississippi and Arkansas River navigation systems, which are essential for moving Arkansas Delta grain and commodity exports to Gulf ports. Crawford has consistently championed inland waterways investment as a top priority for the 1st District\'s agricultural economy.',
      },
      {
        title: 'Agricultural Intelligence Security Initiative',
        year: 2024,
        month: 4,
        summary: 'Used his Intelligence Committee Chairmanship to launch an initiative examining foreign threats to U.S. agricultural supply chains, including Chinese acquisition of farmland, corporate control of seed genetics, and data security vulnerabilities in precision agriculture systems. Crawford argued that protecting agricultural infrastructure from foreign interference is a national security imperative requiring intelligence community attention.',
      },
    ],
  },

  {
    bioguideId: 'H001072',
    slug: 'j-french-hill',
    name: 'J. French Hill',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Arkansas',
    currentTitle: 'U.S. Representative, Arkansas 2nd District',
    bio: 'J. French Hill has represented Arkansas\'s 2nd Congressional District — covering Little Rock — since 2015. He chairs the House Committee on Financial Services and serves on the Intelligence Committee. A former Treasury Department official under Presidents Reagan and George H.W. Bush and a community banking executive, Hill brings deep financial industry expertise to his role as Financial Services Chair. He focuses on banking regulation, capital markets, housing finance, and financial technology policy.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Chair' },
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Economic Growth, Regulatory Relief, and Consumer Protection Act',
        year: 2018,
        month: 5,
        position: 'For',
        summary: 'Was a key architect and supporter of the Dodd-Frank rollback legislation, which raised the threshold for enhanced prudential regulation from $50 billion to $250 billion in assets and provided regulatory relief for community and mid-size banks. Hill\'s banking background and Financial Services work made him one of the most credible Republican voices on the substance of the reforms.',
      },
      {
        title: 'FIT21 Act — Digital Asset Regulation',
        year: 2024,
        month: 5,
        position: 'For',
        summary: 'Co-authored and voted for the Financial Innovation and Technology for the 21st Century Act, the first comprehensive federal framework for digital asset regulation. As Financial Services Chair, Hill championed the bill as essential for providing regulatory clarity that allows the United States to remain competitive in the global digital assets market while protecting investors.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing the corporate minimum tax would impair community bank lending capacity and harm small businesses in Arkansas that depend on bank credit. He objected to provisions he argued would increase IRS audit activity targeting small businesses and self-employed individuals.',
      },
    ],
    keyBills: [
      {
        title: 'Financial Innovation and Technology for the 21st Century Act (FIT21)',
        year: 2024,
        month: 5,
        summary: 'Hill was the primary House author of FIT21, the landmark digital asset regulation bill that passed the House with bipartisan support and established a framework for determining whether digital assets are commodities or securities. The bill created clear regulatory pathways for crypto exchanges and developers, resolving years of regulatory uncertainty that Hill argued was driving digital asset businesses out of the United States.',
      },
      {
        title: 'Community Bank Capital Relief Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation opposing the Basel III "endgame" capital rule proposed by federal banking regulators, arguing the rule\'s dramatic capital requirement increases would cause community and regional banks to curtail lending to Main Street businesses and homebuyers. Hill organized Financial Services Committee hearings featuring community bank executives from Arkansas and across the country to document the proposed rule\'s impact on credit availability.',
      },
    ],
  },

  {
    bioguideId: 'W000809',
    slug: 'steve-womack',
    name: 'Steve Womack',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Arkansas',
    currentTitle: 'U.S. Representative, Arkansas 3rd District',
    bio: 'Steve Womack has represented Arkansas\'s 3rd Congressional District — covering Fayetteville, Fort Smith, and northwest Arkansas — since 2011. He serves on the House Appropriations Committee and is a senior voice on fiscal policy within the Republican Conference. A retired Army National Guard colonel and former mayor of Rogers, Arkansas, he represents one of the fastest-growing regions in the South — home to Walmart\'s global headquarters, Tyson Foods, and J.B. Hunt Transport — and has focused on infrastructure, trade, and fiscal discipline.',
    sinceYear: 2011,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Womack was one of thirteen House Republicans who voted for the bipartisan infrastructure law, citing the transformative importance of highway, broadband, and port investment for northwest Arkansas — one of the nation\'s fastest-growing metro areas. He argued the region\'s logistics infrastructure, critical for Walmart\'s and J.B. Hunt\'s supply chains, had not kept pace with population and economic growth.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal as a senior Appropriations member, arguing that avoiding default was essential for the credit markets and trade finance used by northwest Arkansas\'s multinational corporate community. Womack has consistently argued that fiscal discipline must be achieved through the regular appropriations process rather than debt ceiling brinkmanship.',
      },
      {
        title: 'Against FY2024 Minibus Appropriations — Procedural disagreement',
        year: 2023,
        month: 11,
        position: 'Against',
        summary: 'Voted against several appropriations packages in 2023, arguing the process violated regular order principles by bundling bills and circumventing the full committee markup process. As a senior Appropriations member, Womack has been one of the most vocal advocates for returning to individual, on-time appropriations bills and views omnibus and minibus spending packages as institutional failures.',
      },
    ],
    keyBills: [
      {
        title: 'Northwest Arkansas Infrastructure Investment provisions',
        year: 2022,
        month: 11,
        summary: 'Used his Appropriations seat to direct federal infrastructure investment to northwest Arkansas, including funding for the Highway 412 corridor expansion, Fayetteville-area interchange improvements, and expansion of the Northwest Arkansas National Airport. The region\'s rapid growth has created significant infrastructure pressures and Womack has made transportation capacity a top Appropriations priority.',
      },
      {
        title: 'Freight and Logistics Infrastructure Modernization Act',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation through Appropriations improving federal freight infrastructure investment, including provisions supporting intermodal rail-truck transfer facilities and last-mile logistics infrastructure important to retail supply chains. Womack\'s district is home to the headquarters of Walmart, the world\'s largest retailer, and J.B. Hunt Transport, one of the nation\'s largest trucking companies, giving him direct constituent interest in freight infrastructure policy.',
      },
    ],
  },

  {
    bioguideId: 'W000821',
    slug: 'bruce-westerman',
    name: 'Bruce Westerman',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Arkansas',
    currentTitle: 'U.S. Representative, Arkansas 4th District',
    bio: 'Bruce Westerman has represented Arkansas\'s 4th Congressional District — covering southern and western Arkansas including Hot Springs and Texarkana — since 2015. He chairs the House Committee on Natural Resources and serves on Transportation and Infrastructure. A Yale-educated forester and engineer, he is one of the few members of Congress with a professional forestry background and has championed active forest management, timber harvesting, and responsible natural resource development on federal lands. He has been a leading Republican voice on climate and environmental policy, proposing market-based conservation alternatives to Democratic regulatory approaches.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Chair' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023 — Permitting Reform provisions',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, which included environmental permitting reforms that Westerman had championed through Natural Resources. The NEPA streamlining provisions in the bill — requiring faster permitting decisions, page limits on environmental reviews, and clearer timelines — reflected priorities Westerman had pursued through his committee for years.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its clean energy mandates and methane fees would harm Arkansas\'s natural gas producers and that its conservation programs bypassed the market-based approaches he advocates. He also objected to the bill\'s expansion of federal regulatory authority over private land management practices affecting Arkansas timber and agriculture operations.',
      },
      {
        title: 'One Big Beautiful Bill — Natural Resources provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, having shaped its Natural Resources provisions as committee chair to expand domestic energy production and streamline environmental permitting. Westerman secured provisions accelerating timber salvage harvests after catastrophic wildfires and expanding offshore energy leasing — priorities for both the environment and his district\'s energy economy.',
      },
    ],
    keyBills: [
      {
        title: 'Trillion Trees Act',
        year: 2021,
        month: 3,
        summary: 'Introduced legislation committing the United States to plant a trillion trees globally as a market-based, nature-forward approach to carbon sequestration. Westerman, drawing on his Yale forestry background, has championed reforestation and sustainable forest management as conservative alternatives to regulatory carbon pricing, arguing that healthy forests are among the most effective carbon sinks available at scale.',
      },
      {
        title: 'REAL Cuts Act — Rescinding Environmental Agency Lawlessness',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation through Natural Resources rolling back EPA and Corps of Engineers "Waters of the United States" regulations governing wetland and waterway permitting on private land. Westerman argued the regulations vastly expanded federal jurisdiction over private property in ways that burden Arkansas farmers and landowners without corresponding environmental benefit.',
      },
    ],
  },
]

export const arDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

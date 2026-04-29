import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'M000934',
    slug: 'jerry-moran',
    name: 'Jerry Moran',
    party: 'R',
    chamber: 'Senate',
    state: 'Kansas',
    currentTitle: 'U.S. Senator from Kansas',
    bio: 'Jerry Moran has served Kansas in Congress since 1997 — first in the U.S. House representing the 1st District and then in the U.S. Senate since 2011. A Kansas State University graduate and attorney from Plainville, he chairs the Senate Veterans\' Affairs Committee and sits on the Appropriations and Commerce Committees. He is known for his steady, consensus-building approach to legislation and his long record of advocacy for veterans, rural communities, and Kansas agriculture.',
    sinceYear: 1997,
    committees: [
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'VA MISSION Act of 2018',
        year: 2018,
        month: 5,
        position: 'For',
        summary: 'Co-authored and voted for the landmark Veterans Affairs Mission Act, the most significant reform of the VA healthcare system in decades. The law gave veterans greater access to private-sector healthcare when VA services were inaccessible or unavailable, expanded caregiver support programs, and consolidated previous VA community care programs — addressing longstanding wait time and access problems.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Was one of the Senate Republicans to support the bipartisan gun safety legislation, which enhanced background checks for younger buyers, closed the "boyfriend loophole," and funded state red flag laws. Moran\'s vote was notable as a signal of his willingness to work across party lines on public safety issues even in a deeply red state.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Moran has supported stronger immigration enforcement throughout his congressional career and viewed the bill as a common-sense public safety measure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using his Appropriations Committee seat to ensure the package maintained veterans\' healthcare funding while advancing the tax cuts and spending efficiency measures that Kansas\'s rural communities and small businesses depend on. Moran, as Chair of the Senate Veterans\' Affairs Committee, secured assurances that VA program funding would be protected within the reconciliation framework.',
      },
    ],
    keyBills: [
      {
        title: 'VA MISSION Act of 2018',
        year: 2018,
        month: 5,
        summary: 'As Chair of the Senate Veterans\' Affairs Committee, Moran was a principal author of the VA MISSION Act, which overhauled VA community care programs and gave veterans more flexibility to see private doctors when VA facilities were unavailable. The law has since facilitated tens of millions of veteran community care appointments and is considered the most consequential VA reform legislation since the department was established.',
      },
      {
        title: 'Rural Broadband Expansion Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation expanding USDA ReConnect Program broadband funding to underserved rural Kansas communities, using his Appropriations Committee seat to accelerate deployment. Kansas\'s vast rural counties remain among the least-connected in the nation, and Moran has made broadband access a persistent appropriations priority.',
      },
    ],
  },

  {
    bioguideId: 'M001198',
    slug: 'roger-marshall',
    name: 'Roger Marshall',
    party: 'R',
    chamber: 'Senate',
    state: 'Kansas',
    currentTitle: 'U.S. Senator from Kansas',
    bio: 'Roger Marshall was elected to the U.S. Senate from Kansas in 2020, having previously served two terms in the U.S. House representing the 1st District. An OB-GYN from Great Bend who delivered more than 5,000 babies over a 25-year medical career, he sits on the Senate Finance, HELP, Agriculture, and Budget Committees. He is a vocal critic of government healthcare mandates and drug pricing policies, and a strong advocate for Kansas agriculture and energy production.',
    sinceYear: 2017,
    committees: [
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing that its drug pricing provisions would stifle pharmaceutical innovation and that its energy provisions were harmful to Kansas\'s oil and gas industry. As a physician, he was particularly critical of Medicare drug price negotiation, claiming it would reduce patients\' access to new treatments.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Marshall has been one of the Senate\'s most vocal critics of Biden-era immigration enforcement policies and viewed the bill as an essential correction.',
      },
      {
        title: 'Against Bipartisan Infrastructure Law',
        year: 2021,
        month: 8,
        position: 'Against',
        summary: 'Voted against the $1.2 trillion Infrastructure Investment and Jobs Act, arguing it added too much to the national debt and contained provisions favoring organized labor over Kansas\'s largely non-union workforce. Marshall objected to both the bill\'s price tag and its procedural coupling with a larger reconciliation package.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, championing its Medicaid restructuring through his HELP and Finance Committee seats as necessary to rein in runaway entitlement spending threatening Kansas\'s fiscal future. Marshall, a physician and longtime critic of government-run healthcare, highlighted the bill\'s market-based reforms and tax cut extensions as pro-growth measures for Kansas agriculture and energy producers.',
      },
    ],
    keyBills: [
      {
        title: 'PRICE Transparency Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation expanding hospital and insurance price transparency requirements, drawing on his medical background and Finance Committee role. Marshall has argued that patients cannot make informed healthcare decisions without clear pricing information, and that transparency drives down costs through market competition.',
      },
      {
        title: 'Protecting America\'s Agricultural Land from Foreign Harm (PAALF) Act',
        year: 2023,
        month: 6,
        summary: 'Co-sponsored legislation restricting foreign adversaries, particularly China, from purchasing U.S. agricultural land near military installations. Kansas has some of the most productive farmland in the world and is home to several major military bases, making the convergence of agricultural and national security concerns a natural priority for Marshall.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M000871',
    slug: 'tracey-mann',
    name: 'Tracey Mann',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Kansas',
    currentTitle: 'U.S. Representative, Kansas 1st District',
    bio: 'Tracey Mann has represented Kansas\'s 1st Congressional District — the vast "Big First," covering the western two-thirds of the state — since 2021, succeeding Roger Marshall. A real estate broker and rancher from Quinter, he serves on the House Agriculture and Transportation Committees, focusing on rural agriculture, water rights, and infrastructure issues affecting one of the most sparsely populated but agriculturally productive districts in the country.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, using his Agriculture Committee seat to protect commodity support programs critical to western Kansas\'s wheat, corn, and cattle producers. Mann focused particularly on crop insurance provisions and commodity loan rate adjustments.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting discretionary spending caps as a mechanism to address the federal deficit. Mann has emphasized fiscal discipline as a core commitment to his rural Kansas constituents who are skeptical of federal deficit spending.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, working through his Agriculture Committee seat to protect commodity support programs and crop insurance for the "Big First" district\'s wheat, corn, and cattle producers. Mann emphasized the package\'s tax cut extensions and spending efficiency measures as delivering on his longstanding promise of fiscal discipline to western Kansas rural communities.',
      },
    ],
    keyBills: [
      {
        title: 'Ogallala Aquifer Agricultural Water Security Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation funding research and conservation measures to address depletion of the Ogallala Aquifer, which underlies much of western Kansas and supplies irrigation for one of the world\'s most productive agricultural regions. The aquifer is being drawn down at rates far exceeding natural recharge, and Mann has made its long-term sustainability a legislative priority.',
      },
    ],
  },

  {
    bioguideId: 'S001228',
    slug: 'derek-schmidt',
    name: 'Derek Schmidt',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Kansas',
    currentTitle: 'U.S. Representative, Kansas 2nd District',
    bio: 'Derek Schmidt was elected to Kansas\'s 2nd Congressional District in 2024 after an 11-year tenure as Kansas Attorney General. A Kansas State University and University of Kansas School of Law graduate from Independence, he served in the Kansas Senate before becoming AG. He now sits on the House Judiciary, Small Business, and Armed Services Committees, bringing his legal and public safety background to federal oversight roles. His district covers northeast Kansas including Topeka and the Kansas City suburbs.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in office, consistent with his record as Kansas Attorney General where he frequently challenged Biden administration immigration policies in federal court. Schmidt\'s law enforcement background made border security a central campaign issue.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation package as a freshman member, supporting its tax cut extensions and regulatory reform provisions. Schmidt emphasized provisions beneficial to Kansas\'s small business community and agricultural sector.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, supporting its border security funding and tax cut provisions as priorities he championed during his tenure as Kansas Attorney General. Schmidt used his Judiciary Committee seat to highlight the bill\'s immigration enforcement measures and argued the spending efficiency reforms would benefit northeast Kansas\'s small business community centered in Topeka and the Kansas City suburbs.',
      },
    ],
    keyBills: [
      {
        title: 'Federal Prosecutorial Accountability Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation drawing on his 11 years as Kansas Attorney General to strengthen oversight of federal prosecutors and expand state cooperation with federal law enforcement. Schmidt has brought his prosecutorial perspective to the House Judiciary Committee\'s oversight of the Justice Department.',
      },
    ],
  },

  {
    bioguideId: 'D000629',
    slug: 'sharice-davids',
    name: 'Sharice Davids',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Kansas',
    currentTitle: 'U.S. Representative, Kansas 3rd District',
    bio: 'Sharice Davids has represented Kansas\'s 3rd Congressional District since 2019, becoming the first Native American woman elected to Congress from Kansas and one of the first two Native American women elected to Congress overall. A member of the Ho-Chunk Nation and a former professional mixed martial arts fighter, she practiced law before entering Congress and sits on the House Transportation and Infrastructure and Agriculture Committees. Her district covers Johnson County — the densely populated Kansas City suburbs — and is one of the most competitive districts in the state.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, securing funding for Kansas City metro transportation projects, broadband expansion, and water infrastructure improvements. Davids used her Transportation Committee seat to advocate for I-435 improvements and transit infrastructure in Johnson County.',
      },
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief bill, which included direct payments, expanded child tax credits, and state and local government funding. Davids argued the relief was essential for Johnson County\'s small businesses and working families still recovering from pandemic economic disruption.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, highlighting its clean energy tax credits and drug pricing provisions as benefiting suburban Kansas City families. She touted the bill\'s Medicare prescription drug negotiation provisions as particularly important for seniors in her district.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing that Medicaid cuts and the elimination of clean energy tax credits would harm Johnson County families and roll back economic gains that clean energy investment had brought to the Kansas City metro region. As a member of the Transportation and Agriculture Committees, Davids warned that the bill\'s reductions would disproportionately impact working families and Native American communities in her district who rely on both programs.',
      },
    ],
    keyBills: [
      {
        title: 'Native American Business Incubators Program Reauthorization',
        year: 2023,
        month: 5,
        summary: 'Championed reauthorization of the Native American Business Incubators Program, supporting tribal economic development initiatives that align with her Ho-Chunk Nation heritage and her commitment to tribal economic sovereignty. The program funds business development services for Native American entrepreneurs on and near reservations.',
      },
    ],
  },

  {
    bioguideId: 'E000298',
    slug: 'ron-estes',
    name: 'Ron Estes',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Kansas',
    currentTitle: 'U.S. Representative, Kansas 4th District',
    bio: 'Ron Estes has represented Kansas\'s 4th Congressional District since 2017, winning a special election after Mike Pompeo was appointed CIA Director. A civil engineer and former Sedgwick County Treasurer and Kansas State Treasurer, he serves on the House Ways and Means Committee and the Joint Economic Committee and focuses on tax policy, aviation (important to Wichita\'s aerospace industry), and fiscal conservatism. His district includes Wichita — Kansas\'s largest city and the center of the nation\'s general aviation manufacturing industry.',
    sinceYear: 2017,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act of 2017',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the landmark Republican tax overhaul in his first year in Congress, supporting lower corporate rates and the pass-through deduction that benefits Wichita\'s many aviation manufacturing suppliers and small businesses. Estes has made tax policy one of his primary legislative focuses through his Ways and Means seat.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill making TCJA tax cuts permanent. As a Ways and Means member, Estes shaped provisions important to Wichita\'s aviation and manufacturing sectors, including R&D expensing and business investment incentives.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax would raise costs for Wichita\'s aerospace manufacturers and that its drug pricing provisions would reduce pharmaceutical innovation. Estes has consistently opposed Democratic healthcare and energy spending packages.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, having shaped its tax provisions through his Ways and Means Committee seat to preserve R&D expensing and business investment incentives critical to Wichita\'s general aviation and aerospace manufacturing sectors. Estes highlighted the bill\'s permanent extension of the 2017 TCJA as a major victory for Wichita\'s Boeing, Spirit AeroSystems, and Textron facilities that depend on predictable long-term tax policy.',
      },
    ],
    keyBills: [
      {
        title: 'General Aviation Modernization and Economic Development Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation supporting Wichita\'s general aviation manufacturing industry — home to Boeing, Spirit AeroSystems, Textron, and Cessna — through research funding, workforce development grants, and regulatory streamlining. Wichita produces more general aviation aircraft than any other city in the world, and protecting that sector is central to Estes\'s economic agenda.',
      },
    ],
  },
]

export const ksDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

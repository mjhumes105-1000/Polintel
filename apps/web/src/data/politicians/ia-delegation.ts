import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'G000386',
    slug: 'chuck-grassley',
    name: 'Chuck Grassley',
    party: 'R',
    chamber: 'Senate',
    state: 'Iowa',
    currentTitle: 'U.S. Senator from Iowa',
    bio: 'Chuck Grassley is the longest-serving Republican senator in U.S. history, first elected to the House in 1975 and to the Senate in 1980. A farmer from New Hartford, Iowa, he has chaired or served as Ranking Member on the Senate Judiciary and Finance Committees throughout his career. He is nationally recognized as a leading congressional watchdog on government oversight and whistleblower protections, and continues to represent Iowa\'s agricultural and fiscal conservative interests.',
    sinceYear: 1975,
    committees: [
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'jstx', name: 'Joint Committee on Taxation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act of 2017',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Grassley voted for the landmark Republican tax overhaul, which lowered corporate tax rates from 35% to 21% and roughly doubled the standard deduction. As a senior member of the Finance Committee, he helped negotiate key provisions including expanded pass-through deductions that benefited Iowa\'s many family farm operations.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the first major federal gun safety legislation in nearly three decades, which enhanced background checks for buyers under 21, closed the "boyfriend loophole," and funded red flag law incentives. Grassley was one of a handful of Senate Republicans to support the bipartisan compromise.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Grassley has long prioritized immigration enforcement and supported the bill as consistent with his decades-long record on border security and rule of law.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package as a senior member of both the Finance Committee and the Budget Committee, championing the bill\'s permanent extension of the 2017 tax cuts and its border security provisions. Grassley highlighted the legislation\'s expanded pass-through deductions as critical relief for Iowa\'s family farm operations.',
      },
    ],
    keyBills: [
      {
        title: 'False Claims Act Amendments (Qui Tam Whistleblower Reforms)',
        year: 2021,
        month: 3,
        summary: 'Championed updates to the False Claims Act strengthening whistleblower protections and ensuring qui tam relators can pursue fraud claims against government contractors. Grassley has been the Senate\'s leading advocate for whistleblower protections for over four decades, authoring the original 1986 False Claims Act reforms that have since recovered more than $70 billion in fraudulent claims.',
      },
      {
        title: 'Farm Bill Commodity Support Provisions',
        year: 2023,
        month: 9,
        summary: 'Advocated for Iowa-specific commodity support programs during Farm Bill reauthorization negotiations, focusing on corn, soybean, and pork price protection mechanisms. As a working farmer himself, Grassley has been a persistent voice for family farm protections and payment limits that prevent large agribusiness operations from capturing the majority of federal farm support.',
      },
    ],
  },

  {
    bioguideId: 'E000295',
    slug: 'joni-ernst',
    name: 'Joni Ernst',
    party: 'R',
    chamber: 'Senate',
    state: 'Iowa',
    currentTitle: 'U.S. Senator from Iowa',
    bio: 'Joni Ernst became Iowa\'s first female U.S. Senator when she was elected in 2014, having previously served in the Iowa State Senate and as a lieutenant colonel in the Iowa Army National Guard with a deployment to Kuwait. A former Montgomery County Auditor and Red Oak native, she chairs the Senate Small Business and Entrepreneurship Committee and sits on the Armed Services and Agriculture Committees. She is known for her fiscal conservatism and advocacy for military veterans.',
    sinceYear: 2015,
    committees: [
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, using her Armed Services seat to advocate for Iowa National Guard readiness funding and provisions supporting women veterans\' health services. Ernst has consistently championed military personnel issues through her own service as a combat veteran.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the $739 billion climate and healthcare bill, arguing its corporate minimum tax would harm Iowa manufacturers and its energy provisions would undermine the Renewable Fuel Standard — a critical policy for Iowa\'s corn and ethanol industry. She led Republican criticism that the bill\'s energy provisions were contradictory for corn-state interests.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Ernst supported the bill as part of her broader immigration enforcement agenda, which she has championed since her first Senate term.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using her seat on the Senate Small Business and Entrepreneurship Committee to advocate for provisions reducing regulatory burdens on Iowa\'s small businesses and family farms. Ernst emphasized the bill\'s border security funding as a long-overdue investment in immigration enforcement.',
      },
    ],
    keyBills: [
      {
        title: 'Make Washington Listen Act / Government Waste Oversight',
        year: 2023,
        month: 4,
        summary: 'Continued her annual tradition of releasing an "Oinker Awards" report and introducing legislation to eliminate wasteful federal spending, identifying over $900 billion in potential savings. Ernst has positioned herself as one of Congress\'s most vocal critics of government waste, building a national profile on fiscal responsibility that extends beyond Iowa\'s borders.',
      },
      {
        title: 'Hire More Heroes Act',
        year: 2022,
        month: 6,
        summary: 'Championed legislation encouraging small businesses to hire military veterans by expanding exemptions from employer mandate requirements under the Affordable Care Act for businesses hiring veteran employees. The bill targeted Iowa\'s significant veteran population and aligned with Ernst\'s dual focus on small business development and military service members.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M001215',
    slug: 'mariannette-miller-meeks',
    name: 'Mariannette Miller-Meeks',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Iowa',
    currentTitle: 'U.S. Representative, Iowa 1st District',
    bio: 'Mariannette Miller-Meeks has represented Iowa\'s 1st Congressional District since 2021, having won one of the closest House races in history — by just six votes — in 2020. A retired U.S. Army colonel and ophthalmologist who served 24 years in the military, she brings a healthcare and military perspective to the House Energy and Commerce and Veterans\' Affairs Committees. She represents southeast Iowa including Davenport, Iowa City, and Burlington.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling compromise suspending the debt limit through January 2025 in exchange for discretionary spending caps. Miller-Meeks supported the deal as a necessary step to avert default while securing meaningful spending restraint from the White House.',
      },
      {
        title: 'Lower Costs More Cures Act',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the bipartisan drug pricing reform bill, leveraging her background as a physician and Energy and Commerce Committee member. As a medical doctor, Miller-Meeks has been a leading Republican voice on healthcare policy, particularly on drug pricing transparency and rural healthcare access.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after negotiating healthcare provisions consistent with her medical background. Miller-Meeks focused on ensuring Medicaid reforms included adequate protections for Iowa\'s rural hospitals and community health centers.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, leveraging her dual roles on the Energy and Commerce and Veterans\' Affairs committees to protect rural healthcare access in southeast Iowa. Miller-Meeks highlighted the bill\'s tax relief provisions as vital for working families in the Quad Cities and Iowa City areas.',
      },
    ],
    keyBills: [
      {
        title: 'Veterans\' ACCESS Act',
        year: 2022,
        month: 7,
        summary: 'Introduced legislation expanding telehealth access for veterans in rural Iowa, drawing on her dual background as a military veteran and physician. Southeast Iowa\'s veterans often face long travel times to VA medical centers, and Miller-Meeks has championed telehealth as a bridge solution for rural veteran healthcare access.',
      },
    ],
  },

  {
    bioguideId: 'H001091',
    slug: 'ashley-hinson',
    name: 'Ashley Hinson',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Iowa',
    currentTitle: 'U.S. Representative, Iowa 2nd District',
    bio: 'Ashley Hinson has represented Iowa\'s 2nd Congressional District since 2021, having previously served in the Iowa House of Representatives and as a television news anchor in Cedar Rapids. She sits on the House Appropriations Committee, where she works on agriculture, transportation, and veterans\' funding, and has been an active member of the House Ethics Committee. She represents northeast Iowa including Cedar Rapids and Waterloo.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsso', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, including appropriations provisions she advanced through her Appropriations Committee seat for Iowa National Guard facilities and rural infrastructure in the 2nd District.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting spending caps as a way to address federal deficits without triggering an economic crisis. Hinson has consistently advocated for fiscal responsibility as a core platform plank since her 2020 campaign.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, including agricultural provisions important to northeast Iowa\'s farming communities and border security funding she championed through her committee work on the China competition select committee.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill as a member of the House Appropriations Committee, advocating for agricultural funding and infrastructure provisions critical to northeast Iowa\'s Cedar Rapids-area economy. Hinson spotlighted the bill\'s tax cuts as essential for the small businesses and manufacturers in Iowa\'s 2nd District.',
      },
    ],
    keyBills: [
      {
        title: 'Family and Small Business Taxpayer Protection Act',
        year: 2023,
        month: 1,
        summary: 'Co-sponsored legislation rescinding $71.5 billion of new IRS funding appropriated in the Inflation Reduction Act, arguing the funds would be used to increase audits of middle-class Iowans and small businesses. Hinson has been a vocal critic of expanded IRS enforcement, framing it as a threat to Iowa\'s family farms and small manufacturers.',
      },
    ],
  },

  {
    bioguideId: 'N000193',
    slug: 'zachary-nunn',
    name: 'Zachary Nunn',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Iowa',
    currentTitle: 'U.S. Representative, Iowa 3rd District',
    bio: 'Zachary Nunn has represented Iowa\'s 3rd Congressional District since 2023, flipping a competitive seat in the Des Moines suburbs. A former U.S. Air Force officer and intelligence professional with service in Iraq and Afghanistan, he sits on the House Agriculture, Financial Services, and China Competition Select Committees. His district includes Polk County (Des Moines) and several southwest Iowa counties and is one of the most competitive congressional districts in the state.',
    sinceYear: 2023,
    committees: [
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal in his first term, supporting spending caps negotiated by Speaker McCarthy. As a freshman from a swing district, Nunn balanced fiscal conservative commitments with constituent concerns about cuts to veterans\' programs and rural development funding.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after advocating for agricultural provisions protecting Iowa\'s corn and soybean producers. Nunn used his Agriculture Committee assignment to shape commodity support provisions before casting his final vote.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using his Agriculture and Financial Services committee seats to press for commodity support and rural credit provisions important to the competitive suburban-rural Des Moines district. Nunn emphasized the bill\'s border security and tax relief components as priorities for Iowa\'s 3rd District constituents.',
      },
    ],
    keyBills: [
      {
        title: 'BIOSECURE Act',
        year: 2024,
        month: 3,
        summary: 'Co-sponsored legislation restricting U.S. government contracts with Chinese biotechnology companies, drawing on his intelligence background and China Select Committee work. Nunn framed the bill as both a national security measure and protection for Iowa\'s agricultural biotech sector against foreign IP theft and data security risks.',
      },
    ],
  },

  {
    bioguideId: 'F000446',
    slug: 'randy-feenstra',
    name: 'Randy Feenstra',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Iowa',
    currentTitle: 'U.S. Representative, Iowa 4th District',
    bio: 'Randy Feenstra has represented Iowa\'s 4th Congressional District since 2021, having ousted long-serving Rep. Steve King in the 2020 Republican primary. A former Iowa State Senator and Hull native with a background in agricultural finance, he sits on the House Ways and Means and Agriculture Committees, where he focuses on trade, tax policy, and farm bill provisions critical to northwest Iowa\'s commodity crop economy.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'United States-Mexico-Canada Agreement Implementation Act',
        year: 2020,
        month: 1,
        position: 'For',
        summary: 'Supported USMCA ratification as a priority for Iowa\'s agricultural export economy. Northwest Iowa\'s pork, corn, and soybean producers depend heavily on Canadian and Mexican markets, and Feenstra has consistently championed free trade agreements that keep those borders open to agricultural exports.',
      },
      {
        title: 'Tax Cuts and Jobs Act extensions (Budget Reconciliation)',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill making TCJA tax cuts permanent, using his Ways and Means seat to advocate for pass-through deductions that benefit Iowa\'s family farms and agricultural cooperatives. Feenstra has been a consistent voice for tax certainty for farm operators.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the comprehensive Republican budget reconciliation package, having shaped its agricultural and tax provisions through his dual committee assignments. Feenstra prioritized farm commodity support programs and opposed provisions that would have reduced the Renewable Fuel Standard — critical to northwest Iowa\'s ethanol industry.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, leveraging his Ways and Means and Agriculture committee assignments to secure permanent tax relief for Iowa\'s family farms and expanded commodity support for northwest Iowa\'s corn, soybean, and pork producers. Feenstra highlighted the bill\'s Renewable Fuel Standard protections as essential to the region\'s ethanol-dependent agricultural economy.',
      },
    ],
    keyBills: [
      {
        title: 'Renewable Fuel Standard Protection Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation protecting and expanding the Renewable Fuel Standard, which mandates ethanol blending in U.S. fuel supplies. Iowa is the nation\'s largest ethanol producer, and the RFS is the single most important federal policy for Iowa\'s corn economy — Feenstra has made its defense a central legislative priority.',
      },
    ],
  },
]

export const iaDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

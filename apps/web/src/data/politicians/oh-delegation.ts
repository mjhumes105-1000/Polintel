import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'M001242',
    slug: 'bernie-moreno',
    name: 'Bernie Moreno',
    party: 'R',
    chamber: 'Senate',
    state: 'Ohio',
    currentTitle: 'U.S. Senator from Ohio',
    bio: 'Bernie Moreno was elected to the U.S. Senate from Ohio in November 2024, defeating incumbent Democratic Senator Sherrod Brown with strong support from former President Donald Trump. A Colombian-born entrepreneur, Moreno built a successful chain of luxury car dealerships in northeastern Ohio before pivoting to politics. He entered the Senate in January 2025 and sits on committees covering banking, the budget, and homeland security.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, the first bill signed into law in the 119th Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Moreno had made immigration enforcement a central plank of his Senate campaign.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Senate Republican budget reconciliation blueprint, using his Budget Committee seat to support the framework for spending cuts and tax extensions central to the Trump administration\'s legislative agenda. Moreno backed the bill as aligned with his platform of reducing government spending.',
      },
    ],
    keyBills: [
      {
        title: 'Crypto and Digital Asset Regulatory Framework',
        year: 2025,
        month: 6,
        summary: 'Championed legislation through the Banking Committee to establish a clear federal regulatory framework for digital assets and cryptocurrency markets. Moreno, who has been publicly supportive of blockchain technology, argued the bill would cement U.S. leadership in financial innovation and protect consumers.',
      },
    ],
  },

  {
    bioguideId: 'H001104',
    slug: 'jon-husted',
    name: 'Jon Husted',
    party: 'R',
    chamber: 'Senate',
    state: 'Ohio',
    currentTitle: 'U.S. Senator from Ohio',
    bio: 'Jon Husted was appointed to the U.S. Senate from Ohio in January 2025, filling the seat vacated when JD Vance became Vice President. He previously served as Ohio\'s Lieutenant Governor under Governor Mike DeWine and as Ohio\'s Secretary of State from 2011 to 2019, where he oversaw multiple election cycles. A former Ohio state House Speaker, Husted has a deep background in Ohio politics spanning more than two decades.',
    sinceYear: 2025,
    committees: [
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act shortly after being sworn in, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Husted had supported strong immigration enforcement as Ohio\'s Secretary of State and Lieutenant Governor.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Senate Republican budget reconciliation framework. Husted backed the bill as a vehicle for extending the 2017 Tax Cuts and Jobs Act provisions and reforming federal spending, priorities he had championed as a fiscal conservative in state government.',
      },
    ],
    keyBills: [
      {
        title: 'Workforce Development and Apprenticeship Expansion Act',
        year: 2025,
        month: 8,
        summary: 'Introduced legislation expanding registered apprenticeship programs and career-technical education funding, drawing on Ohio\'s history as a manufacturing state. Husted championed the bill through the HELP Committee, arguing that workforce development is central to reindustrializing the Midwest.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'L000601',
    slug: 'greg-landsman',
    name: 'Greg Landsman',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 1st District',
    bio: 'Greg Landsman has represented Ohio\'s 1st Congressional District — which includes Cincinnati — since 2023, defeating Republican incumbent Steve Chabot. He previously served on the Cincinnati City Council, where he focused on early childhood education, affordable housing, and economic development. In Congress, he sits on the House Energy and Commerce Committee and has built a reputation as a pragmatic Democrat focused on constituent services.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, one of a minority of Democrats to support the legislation. Landsman cited the need to prevent a default that would devastate Ohio families, while acknowledging the spending caps were not his first choice.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the proposed Medicaid cuts and SNAP reductions would harm Cincinnati-area families and working-class Ohioans who rely on those programs. He called the bill fiscally irresponsible in its approach to balancing the budget on the backs of vulnerable constituents.',
      },
    ],
    keyBills: [
      {
        title: 'Early Childhood Education Access Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation expanding access to pre-kindergarten programs and childcare subsidies for working families, building on his Cincinnati City Council work on early education. Landsman argued that investments in early childhood education deliver the highest long-term economic returns of any public expenditure.',
      },
    ],
  },

  {
    bioguideId: 'T000490',
    slug: 'david-j-taylor',
    name: 'David J. Taylor',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 2nd District',
    bio: 'David J. Taylor was elected to represent Ohio\'s 2nd Congressional District in 2024, succeeding Brad Wenstrup. A Cincinnati attorney and businessman, Taylor previously served in the Ohio House of Representatives. He sits on the House Agriculture and Transportation and Infrastructure Committees, focusing on rural economic development and infrastructure for the district\'s suburban and rural communities south and east of Cincinnati.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, one of his first votes in Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Taylor made border security a key campaign issue in his 2024 race.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package of tax extensions, spending cuts, and border security provisions. Taylor backed the bill as consistent with his platform of fiscal conservatism and reducing the size of federal government.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Infrastructure and Broadband Investment provisions',
        year: 2025,
        month: 7,
        summary: 'Advocated through the Transportation and Infrastructure Committee for increased rural broadband and road funding for Ohio\'s 2nd District. Taylor emphasized the economic cost of connectivity gaps in the district\'s rural counties, arguing that infrastructure investment is essential to attracting manufacturing jobs back to southern Ohio.',
      },
    ],
  },

  {
    bioguideId: 'B001281',
    slug: 'joyce-beatty',
    name: 'Joyce Beatty',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 3rd District',
    bio: 'Joyce Beatty has represented Ohio\'s 3rd Congressional District — centered on Columbus — since 2013. She previously served in the Ohio House of Representatives, including as Minority Leader, and was senior vice president for outreach and engagement at The Ohio State University. A member of the Congressional Black Caucus and a former chair of that body, she serves on the House Financial Services Committee, focusing on consumer protection, fair lending, and economic equity.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, arguing it was essential for Columbus-area communities hit hard by the pandemic. Beatty highlighted provisions for rental assistance, small business support, and expanded child tax credits that directly benefited her district\'s working-class and minority households.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its provisions for prescription drug price negotiation, clean energy investments, and healthcare subsidies. Beatty argued the bill would lower costs for Ohio families while positioning Columbus as a hub for clean energy manufacturing.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid work requirements and SNAP cuts would devastate vulnerable populations in Columbus and central Ohio. Beatty called the bill\'s approach to deficit reduction fundamentally unfair to working families.',
      },
    ],
    keyBills: [
      {
        title: 'Fair Lending for All Act',
        year: 2021,
        month: 6,
        summary: 'Introduced legislation expanding the Community Reinvestment Act\'s anti-discrimination provisions to non-bank financial institutions including mortgage companies and fintech lenders. Beatty argued that the gaps in CRA coverage had perpetuated discriminatory lending practices that stifled homeownership and wealth building in minority communities across Ohio.',
      },
    ],
  },

  {
    bioguideId: 'J000289',
    slug: 'jim-jordan',
    name: 'Jim Jordan',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 4th District',
    bio: 'Jim Jordan has represented Ohio\'s 4th Congressional District since 2007 and chairs the House Judiciary Committee. A co-founder of the House Freedom Caucus, he is one of the most prominent conservative voices in Congress and a close ally of former President Trump. Jordan was an NCAA champion wrestler at the University of Wisconsin before earning a law degree from Capital University. He gained national prominence through his aggressive questioning of witnesses in high-profile congressional investigations.',
    sinceYear: 2007,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Chair' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy as Speaker — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'Against',
        summary: 'Jordan did not vote to remove McCarthy directly but emerged as the leading candidate to replace him after the ouster, failing to secure the 217 votes needed across three rounds of balloting in October 2023. His failed Speaker bid was one of the most dramatic episodes of the 118th Congress.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, which he helped shepherd through the Judiciary Committee, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Jordan has been a leading congressional voice for aggressive immigration enforcement throughout his tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package\'s spending reductions, tax cuts, and border security provisions. As Judiciary Committee chair, Jordan helped draft immigration enforcement provisions included in the final bill.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Speech from Government Interference Act',
        year: 2023,
        month: 3,
        summary: 'Championed legislation through the Judiciary Committee prohibiting federal employees from using their official capacity to urge social media companies to restrict constitutionally protected speech. The bill grew directly out of the Judiciary Committee\'s investigation into what Republicans called government-directed content moderation.',
      },
      {
        title: 'JUDGES Act',
        year: 2024,
        month: 9,
        summary: 'Introduced legislation creating 66 new federal district court judgeships to address court backlogs across the country. Jordan argued the federal judiciary was severely understaffed relative to caseloads, with the bill passing the House with bipartisan support.',
      },
    ],
  },

  {
    bioguideId: 'L000566',
    slug: 'robert-e-latta',
    name: 'Robert E. Latta',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 5th District',
    bio: 'Robert Latta has represented Ohio\'s 5th Congressional District in northwestern Ohio since 2007. A former Ohio state senator and Wood County commissioner, he sits on the House Energy and Commerce Committee, where he has been a leading Republican voice on broadband policy, telecommunications regulation, and energy infrastructure. He has served as chair of the Energy and Commerce Subcommittee on Communications and Technology.',
    sinceYear: 2007,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'Against',
        summary: 'Voted against the CHIPS and Science Act, arguing the $52 billion semiconductor subsidy package represented industrial policy overreach and that market incentives would be more effective. Latta consistently opposed the bill\'s government-directed investment approach despite supporting domestic semiconductor manufacturing goals.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Latta has supported strong immigration enforcement throughout his tenure, particularly on border security and interior enforcement.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting provisions on tax extensions and spending reductions. Latta backed the bill as consistent with his long-standing fiscal conservative positions.',
      },
    ],
    keyBills: [
      {
        title: 'Broadband Deployment Accuracy and Technological Availability Act (DATA Act)',
        year: 2020,
        month: 3,
        summary: 'Championed legislation reforming the FCC\'s broadband coverage maps to better identify unserved and underserved areas, fixing long-standing data accuracy problems that had misdirected broadband subsidies. The bill passed with strong bipartisan support and became foundational to subsequent broadband deployment policy.',
      },
    ],
  },

  {
    bioguideId: 'R000619',
    slug: 'michael-a-rulli',
    name: 'Michael A. Rulli',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 6th District',
    bio: 'Michael Rulli was elected to represent Ohio\'s 6th Congressional District — which covers the Mahoning Valley and eastern Ohio — in a November 2024 special election following Bill Johnson\'s resignation. A businessman who operated a chain of supermarkets in northeastern Ohio, Rulli focuses on energy policy, workforce development, and the economic revitalization of the steel and manufacturing corridor along the Ohio-Pennsylvania border.',
    sinceYear: 2024,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, among his first votes as a congressman, mandating ICE detention of undocumented immigrants charged with violent crimes. Rulli made border security and immigration enforcement central themes of his 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting provisions he argued would benefit the energy and manufacturing industries in his district. Rulli emphasized the bill\'s energy permitting reforms as critical to reviving the Mahoning Valley\'s industrial economy.',
      },
    ],
    keyBills: [
      {
        title: 'Steel Industry Workforce Reinvestment Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation providing workforce retraining grants and apprenticeship funding targeted at steel, metals, and advanced manufacturing workers in industrial communities like Youngstown and Warren, Ohio. Rulli argued that federal investment in workforce development was essential to the Mahoning Valley\'s economic recovery.',
      },
    ],
  },

  {
    bioguideId: 'M001222',
    slug: 'max-l-miller',
    name: 'Max L. Miller',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 7th District',
    bio: 'Max Miller has represented Ohio\'s 7th Congressional District — covering the Akron and Canton area — since 2023. He previously served as a White House aide under President Trump and ran unsuccessfully in the 2022 Republican primary for Ohio\'s 16th District before winning the redrawn 7th in 2022. He sits on the House Ways and Means Committee and the Science, Space, and Technology Committee.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Miller has been a consistent Trump ally and immigration hawk throughout his tenure in Congress.',
      },
      {
        title: 'Tax Cuts and Jobs Act Extension — Ways and Means provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill including extension of the 2017 Tax Cuts and Jobs Act provisions, working through the Ways and Means Committee. Miller argued that allowing the tax cuts to expire would deliver a crushing blow to small businesses and middle-class families in the 7th District.',
      },
    ],
    keyBills: [
      {
        title: 'Keeping American Jobs at Home Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation through the Ways and Means Committee to strengthen penalties on companies that offshore manufacturing jobs to adversarial nations, specifically targeting supply chain dependencies on China. Miller argued the bill was necessary to protect the Akron-Canton manufacturing corridor and prevent further industrial erosion.',
      },
    ],
  },

  {
    bioguideId: 'D000626',
    slug: 'warren-davidson',
    name: 'Warren Davidson',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 8th District',
    bio: 'Warren Davidson has represented Ohio\'s 8th Congressional District in southwestern Ohio since 2016, winning a special election to fill the seat vacated by John Boehner. A West Point graduate and Army Ranger veteran, he later ran a manufacturing company. A member of the House Freedom Caucus, he sits on the House Financial Services and Foreign Affairs Committees and has become one of Congress\'s most vocal advocates for cryptocurrency and digital asset regulation.',
    sinceYear: 2016,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal, arguing the spending caps were insufficient and the bill represented a failure to make meaningful fiscal reform. Davidson has consistently opposed legislation he views as perpetuating unsustainable federal deficits.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Davidson has been a consistent supporter of strong immigration enforcement and border security measures.',
      },
      {
        title: 'FIT21 — Financial Innovation and Technology for the 21st Century Act',
        year: 2024,
        month: 5,
        position: 'For',
        summary: 'Voted for the landmark cryptocurrency regulatory framework bill, which passed the House 279–136 with bipartisan support. Davidson has been one of the leading congressional champions of clear digital asset regulation, arguing that regulatory clarity is essential to maintaining U.S. financial leadership.',
      },
    ],
    keyBills: [
      {
        title: 'Token Taxonomy Act',
        year: 2021,
        month: 4,
        summary: 'Introduced landmark legislation defining when digital tokens should be classified as securities versus commodities, addressing a longstanding regulatory ambiguity that has hampered the cryptocurrency industry. Davidson argued the bill was essential to ensuring that innovative financial technologies develop in the United States rather than overseas.',
      },
    ],
  },

  {
    bioguideId: 'K000009',
    slug: 'marcy-kaptur',
    name: 'Marcy Kaptur',
    party: 'D',
    chamber: 'House',
    district: 9,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 9th District',
    bio: 'Marcy Kaptur has represented Ohio\'s 9th Congressional District — which runs along Lake Erie from Toledo to Cleveland — since 1983, making her the longest-serving woman in the history of the U.S. House of Representatives. A Ukrainian-American from Toledo, she has been a fierce advocate for manufacturing jobs, trade enforcement against China, and steel and auto industry protections. She sits on the House Appropriations Committee and the House Budget Committee, where she has fought for Midwest industrial communities for over four decades.',
    sinceYear: 1983,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, securing investments in road, bridge, water, and broadband infrastructure for the Lake Erie corridor. Kaptur highlighted the critical state of Toledo\'s aging water infrastructure and the bill\'s potential to address the industrial legacy of the Rust Belt.',
      },
      {
        title: 'Ukraine Military Aid Package',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the supplemental Ukraine military aid package, one of the bill\'s most vocal champions given her Ukrainian heritage and Toledo\'s large Ukrainian-American community. Kaptur has been among the most consistent congressional voices calling for robust American support for Ukraine since the 2022 Russian invasion.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid and SNAP cuts would devastate working-class communities along the Lake Erie corridor. As the most senior Democrat on the Appropriations Committee, Kaptur argued the bill fundamentally undermined decades of investment in Ohio\'s industrial communities.',
      },
    ],
    keyBills: [
      {
        title: 'Great Lakes Restoration Initiative reauthorization',
        year: 2022,
        month: 7,
        summary: 'Championed reauthorization of the Great Lakes Restoration Initiative through the Appropriations Committee, securing ongoing federal funding for Lake Erie cleanup, harmful algal bloom prevention, and invasive species control. The Great Lakes region provides drinking water to over 30 million people and Kaptur has made its protection a defining priority of her career.',
      },
    ],
  },

  {
    bioguideId: 'T000463',
    slug: 'michael-r-turner',
    name: 'Michael R. Turner',
    party: 'R',
    chamber: 'House',
    district: 10,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 10th District',
    bio: 'Michael Turner has represented Ohio\'s 10th Congressional District — centered on Dayton — since 2003. He chaired the House Permanent Select Committee on Intelligence from 2023 until 2024 and has been a leading congressional voice on nuclear policy, NATO commitments, and U.S. defense posture. A former mayor of Dayton, he has been a strong advocate for Wright-Patterson Air Force Base, one of the largest Air Force installations in the country.',
    sinceYear: 2003,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Ukraine Military Aid Package',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the supplemental Ukraine military aid package, breaking with a significant portion of House Republicans. As Intelligence Committee chair, Turner had been among the most forceful Republican voices warning about Russian military capabilities and the strategic consequences of a Ukrainian defeat.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, authorizing $886 billion in defense spending and including provisions protecting Wright-Patterson Air Force Base and advancing nuclear modernization programs. Turner has consistently used his Armed Services position to fight for Dayton\'s military installations.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after confirming defense spending provisions would be maintained. Turner conditioned his support on assurances that the bill would not cut programs critical to Wright-Patterson\'s missions in aerospace and intelligence.',
      },
    ],
    keyBills: [
      {
        title: 'No First Use Nuclear Weapons Act opposition and alternative',
        year: 2023,
        month: 4,
        summary: 'Led Republican opposition to no-first-use nuclear weapon legislation, championing instead a bill affirming U.S. extended deterrence commitments to NATO allies. Turner, who has served on nuclear policy issues for two decades, argued that unilateral no-first-use declarations undermine deterrence and embolden adversaries.',
      },
    ],
  },

  {
    bioguideId: 'B001313',
    slug: 'shontel-m-brown',
    name: 'Shontel M. Brown',
    party: 'D',
    chamber: 'House',
    district: 11,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 11th District',
    bio: 'Shontel Brown has represented Ohio\'s 11th Congressional District — covering eastern Cleveland and its southern suburbs — since 2021, winning a special election after the resignation of Marcia Fudge. She previously chaired the Cuyahoga County Democratic Party. A member of the Congressional Black Caucus, she serves on the House Agriculture and Oversight Committees and the House Select Committee on the Chinese Communist Party.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, highlighting investments in Cleveland\'s aging bridges, water infrastructure, and public transit as critical priorities for the 11th District. Brown argued the bill represented the most significant federal investment in the district\'s infrastructure in a generation.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its clean energy manufacturing incentives and prescription drug price negotiation provisions. Brown argued the bill\'s clean energy investments would bring new manufacturing jobs to the Cleveland area while reducing costs for Ohio families.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid and SNAP cuts would be devastating for the 11th District\'s working-class and minority communities. Brown characterized the bill as an attack on the social safety net that Ohio families depend on.',
      },
    ],
    keyBills: [
      {
        title: 'Workforce Pipeline for Minority-Serving Institutions Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation directing federal agencies to expand workforce pipeline partnerships with historically Black colleges and universities and minority-serving institutions. Brown argued that HBCUs in Ohio and nationwide remain chronically underutilized as talent pipelines for federal agencies and contractors.',
      },
    ],
  },

  {
    bioguideId: 'B001306',
    slug: 'troy-balderson',
    name: 'Troy Balderson',
    party: 'R',
    chamber: 'House',
    district: 12,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 12th District',
    bio: 'Troy Balderson has represented Ohio\'s 12th Congressional District — north and east of Columbus — since 2018, initially winning a razor-thin special election. He previously served in the Ohio state Senate and Ohio House of Representatives. He sits on the House Energy and Commerce Committee, where he has focused on broadband deployment, energy infrastructure, and healthcare regulation for his suburban and rural district.',
    sinceYear: 2018,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'Against',
        summary: 'Voted against the CHIPS and Science Act despite Ohio being the primary beneficiary of Intel\'s announced $20 billion semiconductor plant in New Albany — located in Balderson\'s own district. He argued the bill\'s subsidy structure amounted to inappropriate corporate welfare and that tax incentives would be more effective.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Balderson has consistently supported stronger immigration enforcement during his tenure in Congress.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package of tax extensions, spending reductions, and border security provisions. Balderson backed the bill as aligned with his fiscal conservative philosophy.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Broadband Permitting Efficiency Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation streamlining federal permitting processes for broadband infrastructure deployment in rural communities, working through the Energy and Commerce Committee. The bill targeted regulatory delays that slowed broadband construction in unserved parts of Ohio\'s 12th District.',
      },
    ],
  },

  {
    bioguideId: 'S001223',
    slug: 'emilia-strong-sykes',
    name: 'Emilia Strong Sykes',
    party: 'D',
    chamber: 'House',
    district: 13,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 13th District',
    bio: 'Emilia Sykes has represented Ohio\'s 13th Congressional District — covering Akron and the surrounding Summit County — since 2023. She previously served as a member and Minority Leader of the Ohio House of Representatives, where her family has a long history of public service: her father, Vernon Sykes, is an Ohio state senator and her mother, Barbara Sykes, served in the Ohio House. She sits on the House Science, Space, and Technology and Transportation and Infrastructure Committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal, arguing the spending caps would harm social programs that working-class Akron families depend on. Sykes was among Democrats who felt the compromise conceded too much ground to Republicans on domestic discretionary spending.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid cuts and SNAP reductions would be catastrophic for Akron-area communities. Sykes emphasized that the 13th District has high rates of Medicaid reliance and that cuts to the program would destabilize the regional healthcare system.',
      },
    ],
    keyBills: [
      {
        title: 'Clean Mobility Access for Underserved Communities Act',
        year: 2023,
        month: 8,
        summary: 'Introduced legislation funding zero-emission public transit and ride-sharing programs in low-income communities, working through the Transportation and Infrastructure Committee. Sykes argued that Akron\'s transit gaps create a mobility poverty trap that prevents working families from accessing employment and economic opportunity.',
      },
    ],
  },

  {
    bioguideId: 'J000295',
    slug: 'david-p-joyce',
    name: 'David P. Joyce',
    party: 'R',
    chamber: 'House',
    district: 14,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 14th District',
    bio: 'David Joyce has represented Ohio\'s 14th Congressional District — covering Lake County and the northeastern corner of the state — since 2013. A former Geauga County prosecutor, he is one of the more moderate Republicans in the House and serves on the House Appropriations Committee, where he has focused on securing federal funding for Great Lakes protection, rural broadband, and infrastructure projects in his district. He is a co-chair of the bipartisan Congressional Cannabis Caucus.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Ukraine Military Aid Package',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the supplemental Ukraine military aid package, one of the House Republicans who crossed party lines to support the legislation. Joyce argued that abandoning Ukraine would embolden Russia and undermine NATO commitments that are essential to European stability.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, consistent with his reputation as a pragmatic appropriator willing to work across party lines to avoid fiscal crises. Joyce argued the deal\'s spending caps represented a reasonable compromise that prevented a catastrophic default.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after working through the Appropriations Committee to protect Great Lakes restoration funding and rural infrastructure programs important to his district. Joyce was among moderates who secured some adjustments before the final vote.',
      },
    ],
    keyBills: [
      {
        title: 'States Reform Act — Cannabis Decriminalization',
        year: 2023,
        month: 5,
        summary: 'Co-led bipartisan legislation descheduling cannabis from the Controlled Substances Act while allowing states to set their own marijuana policies. Joyce, a former prosecutor, argued that the current federal prohibition creates an untenable conflict with state laws and undermines law enforcement priorities.',
      },
    ],
  },

  {
    bioguideId: 'C001126',
    slug: 'mike-carey',
    name: 'Mike Carey',
    party: 'R',
    chamber: 'House',
    district: 15,
    state: 'Ohio',
    currentTitle: 'U.S. Representative, Ohio 15th District',
    bio: 'Mike Carey has represented Ohio\'s 15th Congressional District — covering central Ohio south of Columbus — since 2021, winning a special election. A former lobbyist and coal industry executive, he serves on the House Ways and Means Committee and the House Budget Committee, where he focuses on tax policy, energy, and fiscal issues. He also serves on the House Administration Committee, which oversees elections and Congressional operations.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsha', name: 'House Committee on House Administration', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Carey has been a consistent supporter of strong immigration enforcement and border security measures.',
      },
      {
        title: 'Tax Cuts and Jobs Act Extension — Ways and Means provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill including extension of the 2017 Tax Cuts and Jobs Act through the Ways and Means Committee. Carey argued that allowing the tax cuts to expire would be devastating to small businesses and families in the 15th District.',
      },
    ],
    keyBills: [
      {
        title: 'American Energy Advancement Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation through the Ways and Means Committee to preserve tax incentives for conventional energy production and remove what he characterized as discriminatory tax treatment of coal and natural gas relative to subsidized renewable energy. Carey, with his coal industry background, argued that reliable baseload power is essential to Ohio\'s industrial economy.',
      },
    ],
  },
]

export const ohDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

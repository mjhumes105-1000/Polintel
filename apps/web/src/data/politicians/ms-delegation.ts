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
    bio: 'Roger Wicker has represented Mississippi in the U.S. Senate since 2007, serving as Ranking Member of the Senate Armed Services Committee. A former House member and state senator with a background in law, he is a leading voice on defense, telecommunications, and trade policy — and one of the most senior Republicans on the Armed Services panel.',
    sinceYear: 2007,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssrules', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, Mississippi 1st District', jurisdiction: 'U.S. House of Representatives', startDate: '1995-01-04', endDate: '2007-12-31' },
      { title: 'Mississippi State Senator', jurisdiction: 'Mississippi State Senate', startDate: '1988-01-01', endDate: '1994-12-31' },
    ],
    keyMilestones: [
      { year: 1994, description: 'Elected to U.S. House for Mississippi\'s 1st Congressional District' },
      { year: 2007, description: 'Appointed to U.S. Senate following Trent Lott\'s resignation; subsequently elected to full term' },
      { year: 2015, description: 'Became Chair of the Senate Commerce, Science, and Transportation Committee' },
      { year: 2021, description: 'Became Ranking Member of Senate Armed Services Committee' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Wicker voted against the Inflation Reduction Act, arguing the $739 billion package would raise taxes on businesses during an inflationary period and harm Mississippi\'s energy and manufacturing sectors. He also objected to provisions allowing Medicare to negotiate drug prices, which he argued would reduce pharmaceutical innovation.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, including provisions protecting Mississippi\'s Camp Shelby Joint Forces Training Center and Columbus Air Force Base. As Ranking Member on Armed Services, Wicker negotiated key provisions on military readiness, nuclear modernization, and Pacific deterrence.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, the first bill signed into law in the 119th Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Wicker was an early co-sponsor, citing the need for consistent enforcement of immigration law.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2026, authorizing over $930 billion in defense spending. Wicker championed provisions increasing long-range strike capabilities and shipbuilding investments, and fought to maintain funding for Camp Shelby and Columbus AFB in the final bill.',
      },
      {
        title: 'FY2026 Budget Reconciliation — Senate Armed Services Provisions',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, including significant defense spending increases negotiated through the Armed Services Committee. Wicker secured provisions expanding the defense industrial base and increasing production of munitions critical to deterring adversaries in the Indo-Pacific.',
      },
    ],
    keyBills: [
      {
        title: 'CHIPS and Science Act — Telecom Provisions',
        year: 2022,
        month: 7,
        summary: 'Championed broadband and telecommunications provisions in the CHIPS Act, expanding rural broadband access. Mississippi has one of the lowest broadband penetration rates in the country, and Wicker leveraged his Commerce Committee position to prioritize rural connectivity programs that have since deployed hundreds of millions in Mississippi infrastructure.',
      },
      {
        title: 'Servicemember Quality of Life Improvement Act',
        year: 2024,
        month: 6,
        summary: 'Introduced legislation to improve housing, childcare, and healthcare access for military service members and their families — priorities he advanced through the Armed Services Committee. The bill addressed persistent quality-of-life concerns identified in DoD surveys and by the Military Family Advisory Network.',
      },
    ],
    topSectors: [
      { category: 'Defense & Aerospace', amount: 1200000, percentage: 35 },
      { category: 'Finance & Insurance', amount: 850000, percentage: 25 },
      { category: 'Agriculture', amount: 600000, percentage: 17 },
      { category: 'Other / Unitemized', amount: 800000, percentage: 23 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Wicker has served in Congress for over 30 years, first in the House (1995–2007) and then in the Senate.',
        'As Ranking Member on Armed Services, he shapes the annual National Defense Authorization Act and is a leading voice on Pentagon oversight.',
        'He has voted along Republican party lines on most major legislation, including opposing the Inflation Reduction Act and the American Rescue Plan.',
        'Notable exceptions include bipartisan cooperation on broadband expansion and rural infrastructure.',
      ],
      whatWeObserve: [
        'His Armed Services Ranking Member position gives him significant institutional power over defense policy, military base decisions, and weapons procurement affecting Mississippi\'s Camp Shelby and Columbus Air Force Base.',
        'Wicker\'s tenure on Commerce, Science, and Transportation has made him one of Congress\'s most vocal advocates for rural broadband — a direct constituency interest in one of America\'s least-connected states.',
        'He has maintained a more institutionalist posture than some of his Senate Republican colleagues, generally opposing efforts to circumvent traditional committee processes.',
      ],
      whatIsUnresolved: [
        'Wicker\'s position on future military aid packages and NATO commitments warrants watching given the shifting Republican consensus on Ukraine.',
        'His 2026 re-election has not been announced; he faces a decision on whether to seek a fourth full term at age 74.',
      ],
    },
  },

  {
    bioguideId: 'H001079',
    slug: 'cindy-hyde-smith',
    name: 'Cindy Hyde-Smith',
    party: 'R',
    chamber: 'Senate',
    state: 'Mississippi',
    currentTitle: 'U.S. Senator from Mississippi',
    bio: 'Cindy Hyde-Smith became Mississippi\'s first female U.S. Senator when she was appointed in April 2018 to fill the seat of Thad Cochran. A former state agricultural commissioner and state senator, she won a competitive special election in November 2018 and was re-elected in 2020. She sits on the Senate Appropriations Committee and is a strong advocate for agriculture, rural development, and water infrastructure.',
    sinceYear: 2018,
    committees: [
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssrules', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Mississippi Commissioner of Agriculture and Commerce', jurisdiction: 'State of Mississippi', startDate: '2012-01-14', endDate: '2018-04-09' },
      { title: 'Mississippi State Senator', jurisdiction: 'Mississippi State Senate', startDate: '2000-01-01', endDate: '2012-01-01' },
    ],
    keyMilestones: [
      { year: 2000, description: 'Elected to Mississippi State Senate, serving for 12 years' },
      { year: 2011, description: 'Elected Mississippi Commissioner of Agriculture and Commerce, first woman to hold the office' },
      { year: 2018, description: 'Appointed U.S. Senator by Governor Phil Bryant — first woman to represent Mississippi in the U.S. Senate' },
      { year: 2018, description: 'Won special election runoff against Mike Espy, becoming the first woman elected to the Senate from Mississippi' },
      { year: 2020, description: 'Re-elected to a full six-year term, defeating Mike Espy again with 54% of the vote' },
    ],
    keyVotes: [
      {
        title: 'Grain Standards Reauthorization Act',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Voted for her own legislation reauthorizing the USDA\'s Federal Grain Inspection Service, extending standardized grain quality testing programs critical to Mississippi\'s agricultural export economy. The bill passed with broad bipartisan support.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, citing concerns about the corporate minimum tax\'s impact on Mississippi manufacturers and objecting to Medicare drug price negotiation provisions she argued would slow pharmaceutical investment.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, the first bill signed by President Trump in his second term, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Hyde-Smith has consistently supported stronger immigration enforcement throughout her Senate tenure.',
      },
      {
        title: 'FY2026 Agriculture Appropriations',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Voted for the FY2026 agriculture appropriations bill, using her Appropriations Committee seat to secure funding for USDA rural development programs and crop insurance enhancements particularly important to Mississippi\'s cotton, soybean, and poultry producers.',
      },
      {
        title: 'Farm Bill Reauthorization',
        year: 2026,
        month: 2,
        position: 'For',
        summary: 'Voted for the 2026 Farm Bill reauthorization, helping shepherd the legislation through the Senate Agriculture Committee. The bill extended commodity support programs for Mississippi row crop farmers and maintained SNAP nutrition assistance, which Hyde-Smith supported as essential for the state\'s high food-insecurity population.',
      },
    ],
    keyBills: [
      {
        title: 'Grain Standards Reauthorization Act',
        year: 2022,
        month: 9,
        summary: 'Authored legislation extending USDA\'s Federal Grain Inspection Service authorities, ensuring standardized grain quality testing for the agricultural export market. Mississippi ships billions in grain exports annually and standardized testing is foundational to the market\'s integrity.',
      },
      {
        title: 'Rural Broadband Expansion Provisions',
        year: 2023,
        month: 5,
        summary: 'Advanced provisions through the Appropriations Committee to accelerate USDA ReConnect Program broadband grants to underserved rural Mississippi communities. The effort targeted the persistent digital divide in the Delta and hill country regions with some of the lowest broadband adoption rates in the country.',
      },
    ],
    topSectors: [
      { category: 'Agriculture', amount: 950000, percentage: 38 },
      { category: 'Finance & Insurance', amount: 600000, percentage: 24 },
      { category: 'Energy', amount: 450000, percentage: 18 },
      { category: 'Other / Unitemized', amount: 500000, percentage: 20 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Hyde-Smith has consistently voted with the Republican caucus on major legislation, including tax cuts, immigration enforcement, and opposing Democratic-led spending packages.',
        'Her Appropriations Committee seat gives her direct influence over federal spending on agriculture, rural development, and water infrastructure.',
        'She has been a strong advocate for the farm bill and SNAP reauthorization, balancing rural constituency interests with party positions on spending limits.',
      ],
      whatWeObserve: [
        'As the first woman elected to the Senate from Mississippi, Hyde-Smith represents a historically significant milestone even as her voting record places her firmly in the conservative wing of the Republican Party.',
        'Her background as Agricultural Commissioner gives her credibility and expertise on farm policy that few senators can match, making her an influential voice on the Agriculture Committee.',
        'She faced significant controversy in 2018 over comments about attending a "public hanging" — remarks she later called poor choice of words — which became a flashpoint in her special election campaign.',
      ],
      whatIsUnresolved: [
        'Her seat is up for election in 2026, with potential primary challengers from further-right factions of the Mississippi Republican Party.',
        'Her positioning on any future farm bill reauthorization — particularly SNAP funding levels — will be closely watched given tension between agricultural interests and fiscal conservatives.',
      ],
    },
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
    bio: 'Trent Kelly has represented Mississippi\'s 1st Congressional District since 2015. A retired Major General in the U.S. Army National Guard who served in Operation Iraqi Freedom, he brings hands-on military experience to his role on the House Armed Services Committee. He also focuses on agriculture, rural economic development, and veterans\' affairs for the Tennessee Valley region of north Mississippi.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'District Attorney, Lee & Monroe Counties', jurisdiction: 'Mississippi 1st Circuit Court District', startDate: '2003-01-01', endDate: '2015-06-02' },
    ],
    keyMilestones: [
      { year: 2003, description: 'Elected District Attorney for Mississippi\'s 1st Circuit Court District, serving Lee and Monroe counties' },
      { year: 2015, description: 'Won special election for Mississippi\'s 1st Congressional District following Alan Nunnelee\'s death' },
      { year: 2021, description: 'Promoted to Major General in the U.S. Army National Guard, retiring after 37 years of service' },
      { year: 2023, description: 'Appointed Deputy Republican Whip in the 118th Congress' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal suspending the debt limit in exchange for discretionary spending caps. As Deputy Republican Whip, Kelly helped secure votes within the caucus for the compromise, which passed 314–117.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, authorizing $886 billion in defense spending and including provisions for Camp Shelby Joint Forces Training Center and Mississippi National Guard readiness. Kelly used his Armed Services seat to fight for Guard and Reserve funding levels.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting increased military readiness funding and provisions benefiting Guard and Reserve forces. Camp Shelby and Keesler AFB are the district\'s largest federal employers, and Kelly has consistently defended their missions and budgets through Armed Services.',
      },
      {
        title: 'One Big Beautiful Bill — Agricultural Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, including agricultural provisions he helped shape through the Agriculture Committee. Kelly supported the bill\'s commodity support program extensions and opposed amendments that would have reduced crop insurance access for north Mississippi farmers.',
      },
      {
        title: 'FY2026 Defense Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 defense appropriations bill, securing continued funding for Camp Shelby training operations and Mississippi National Guard equipment modernization. Kelly advocated within Armed Services for Guard and Reserve parity with active-duty investment levels.',
      },
    ],
    keyBills: [
      {
        title: 'National Guard and Reserve Retirement Modernization Act',
        year: 2022,
        month: 3,
        summary: 'Championed provisions modernizing retirement benefits for National Guard and Reserve members, drawing on his 37-year Guard career. The legislation addressed a long-standing disparity between active-duty and part-time military retirement calculations that Kelly had advocated for since entering Congress.',
      },
      {
        title: 'Rural Broadband Access for Veterans Act',
        year: 2024,
        month: 7,
        summary: 'Introduced legislation prioritizing rural veterans in USDA broadband expansion programs, combining his district\'s need for connectivity with his advocacy for military families in underserved rural Mississippi communities.',
      },
    ],
    topSectors: [
      { category: 'Defense & Military', amount: 450000, percentage: 40 },
      { category: 'Agriculture', amount: 280000, percentage: 25 },
      { category: 'Finance', amount: 200000, percentage: 18 },
      { category: 'Other / Unitemized', amount: 190000, percentage: 17 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Kelly has voted with the House Republican caucus on virtually all major legislation since 2015.',
        'His Armed Services and Agriculture committee assignments reflect north Mississippi\'s dual economy of military presence and agricultural production.',
        'He has been a consistent advocate for military readiness funding, particularly for Guard and Reserve components — drawing on his own 37-year Guard career.',
      ],
      whatWeObserve: [
        'Kelly\'s military background is his most distinctive credential in Congress. He is one of the few members who has actually commanded troops at the Major General level, giving him credibility on military policy debates that most legislators lack.',
        'As Deputy Republican Whip, he has a role in maintaining House Republican unity on key votes — a position that requires balancing constituency interests with party discipline.',
        'North Mississippi\'s 1st District is one of the most reliably Republican in the country, giving Kelly significant electoral security to focus on policy rather than political survival.',
      ],
      whatIsUnresolved: [
        'His position on any potential cuts to defense spending under budget reconciliation will be a key test — balancing fiscal conservatism with his Armed Services priorities.',
      ],
    },
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
    bio: 'Bennie Thompson has represented Mississippi\'s 2nd Congressional District since 1993, making him one of the longest-serving members of the House. He chaired the House Homeland Security Committee from 2007–2011 and 2019–2023, and served as chair of the January 6th Select Committee. The 2nd District is a majority-Black district covering the Mississippi Delta — one of the poorest regions in the United States — and Thompson has spent decades fighting for federal investment, voting rights, and economic opportunity in the region.',
    sinceYear: 1993,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Ranking Member' },
    ],
    previousOffices: [
      { title: 'Mayor of Bolton, Mississippi', jurisdiction: 'Town of Bolton, MS', startDate: '1973-01-01', endDate: '1979-12-31' },
      { title: 'Hinds County Board of Supervisors', jurisdiction: 'Hinds County, Mississippi', startDate: '1980-01-01', endDate: '1993-03-30' },
    ],
    keyMilestones: [
      { year: 1973, description: 'Elected Mayor of Bolton, Mississippi at age 25 — one of the first Black mayors in Mississippi after Reconstruction' },
      { year: 1993, description: 'Won special election for Mississippi\'s 2nd Congressional District following Mike Espy\'s appointment as USDA Secretary' },
      { year: 2007, description: 'Became Chair of the House Homeland Security Committee in the 110th Congress' },
      { year: 2021, description: 'Named Chair of the House Select Committee to Investigate the January 6th Attack on the U.S. Capitol' },
      { year: 2022, description: 'Released the January 6th Committee\'s final report documenting the attack and its causes' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, which included direct payments, enhanced unemployment benefits, and billions for state and local governments. Thompson argued the bill was essential for the Delta — one of the poorest regions in the country — where the pandemic had hit disproportionately hard.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, securing investments in road, bridge, and broadband upgrades for the Mississippi Delta. Thompson highlighted the Delta\'s decades-long infrastructure deficit and the law\'s potential to improve rural connectivity and economic opportunity.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid work requirements and SNAP cuts would devastate Mississippi\'s Delta region — which has the highest food insecurity rate in the country and where over 40% of residents rely on Medicaid. Thompson called the bill "an assault on the most vulnerable."',
      },
      {
        title: 'Against FY2026 Continuing Resolution with Spending Cuts',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing cuts to FEMA disaster preparedness programs and reductions in community development block grants that disproportionately affect the Delta\'s flood-prone rural communities.',
      },
    ],
    keyBills: [
      {
        title: 'January 6th Committee Final Report',
        year: 2022,
        month: 12,
        summary: 'As chair of the House Select Committee to Investigate the January 6th Attack on the U.S. Capitol, Thompson led an 18-month investigation producing a final report documenting the planning and execution of the attack. The committee referred four criminal counts against former President Trump to the Justice Department and proposed bipartisan legislative reforms to strengthen democratic processes.',
      },
      {
        title: 'Delta Health and Economic Opportunity Act',
        year: 2024,
        month: 4,
        summary: 'Introduced legislation targeting persistent health and economic disparities in the Mississippi Delta, combining expanded Medicaid access, rural hospital stabilization funding, and workforce development grants. The Delta has some of the worst health outcomes in the nation — including high rates of diabetes, heart disease, and infant mortality — and Thompson has pursued federal remedies for decades.',
      },
    ],
    topSectors: [
      { category: 'Labor & Public Sector Unions', amount: 350000, percentage: 42 },
      { category: 'Civil Rights & Advocacy', amount: 200000, percentage: 24 },
      { category: 'Individual Contributors', amount: 180000, percentage: 22 },
      { category: 'Other / Unitemized', amount: 100000, percentage: 12 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Thompson has represented one of the poorest congressional districts in the United States for over 30 years, consistently advocating for federal investment in the Mississippi Delta.',
        'His chairing of the January 6th Select Committee was the defining legislative act of his career, placing him at the center of the most significant investigation of a sitting president\'s conduct since Watergate.',
        'He has been a reliable vote for Democratic priorities including the Affordable Care Act, the American Rescue Plan, and the Infrastructure Investment and Jobs Act.',
      ],
      whatWeObserve: [
        'Thompson\'s longevity in a competitive institutional environment reflects both his district\'s strong Democratic composition and his skill at leveraging seniority for constituent benefits.',
        'His Homeland Security Committee role gives him oversight over immigration, FEMA, TSA, and cybersecurity — issues that directly affect the Delta\'s poverty-driven vulnerability to natural disasters.',
        'The January 6th investigation made him a nationally prominent figure, though the political consequences of that visibility in a state as conservative as Mississippi remain complex.',
      ],
      whatIsUnresolved: [
        'Thompson announced in early 2024 that he would not seek re-election, but later reversed that decision. His long-term retirement plans remain uncertain.',
        'The future of Homeland Security committee leadership — including whether Thompson will chair or remain ranking member — depends on 2026 election outcomes.',
      ],
    },
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
    bio: 'Michael Guest has represented Mississippi\'s 3rd Congressional District since 2019. A former federal prosecutor and district attorney, he brings a law-enforcement background to the House Ethics and Homeland Security Committees. He made national news in 2023 when he voted to remove Speaker Kevin McCarthy — one of the eight Republicans who triggered the ouster — citing concerns over McCarthy\'s last-minute spending deal with Democrats.',
    sinceYear: 2019,
    committees: [
      { slug: 'hset', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'District Attorney, Rankin & Scott Counties', jurisdiction: 'Mississippi 20th Circuit Court District', startDate: '2011-01-01', endDate: '2019-01-03' },
      { title: 'Assistant U.S. Attorney', jurisdiction: 'U.S. Department of Justice, Southern District of Mississippi', startDate: '2002-01-01', endDate: '2011-01-01' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Joined the U.S. Department of Justice as an Assistant U.S. Attorney, prosecuting federal crimes in Mississippi\'s Southern District' },
      { year: 2011, description: 'Elected District Attorney for Rankin and Scott counties, serving eight years' },
      { year: 2018, description: 'Elected to U.S. House for Mississippi\'s 3rd District in his first run for federal office' },
      { year: 2023, description: 'Voted to remove Speaker Kevin McCarthy — one of eight Republicans who triggered the historic ouster' },
      { year: 2024, description: 'Survived a primary challenge from the right, winning with 57% against a Trump-backed challenger' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy as Speaker — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Was one of eight Republicans who voted for the motion to vacate the chair, removing Kevin McCarthy as Speaker of the House. Guest cited McCarthy\'s last-minute $1.7 trillion spending deal with Democrats as a betrayal of conservative fiscal commitments. The unprecedented ouster triggered a three-week Speaker vacancy resolved by Mike Johnson\'s election.',
      },
      {
        title: 'For Mike Johnson as Speaker',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Voted to elect Rep. Mike Johnson (R-LA) as Speaker of the House following Kevin McCarthy\'s ouster. Guest supported Johnson as a conservative alternative who he believed would be more disciplined on spending — and whose election united the fractured Republican conference after weeks of internal turmoil.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. As a former federal prosecutor and district attorney, Guest brought direct prosecutorial experience to his advocacy for the bill, noting the operational challenges that inconsistent immigration enforcement creates for local law enforcement.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after securing border security funding provisions aligned with his Homeland Security committee work. Guest was among members who conditioned support on inclusion of stronger enforcement measures.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 continuing resolution funding federal operations through the remainder of the fiscal year. Guest supported the measure after leadership incorporated spending reductions in non-defense discretionary programs, consistent with his fiscal conservative positioning since the McCarthy vote.',
      },
    ],
    keyBills: [
      {
        title: 'Law Enforcement Officers Safety Act Modernization',
        year: 2021,
        month: 6,
        summary: 'Championed updates to LEOSA, which allows qualified current and retired law enforcement officers to carry concealed firearms across state lines. Guest\'s district attorney background drove his advocacy for the bill, which he argued reduced dangerous gaps in officer protection when traveling between jurisdictions.',
      },
      {
        title: 'Federal Prosecutorial Integrity Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation establishing clearer standards for federal prosecutorial conduct and expanding oversight mechanisms for the Department of Justice\'s U.S. Attorney offices. Drawing on his nine years as a federal and state prosecutor, Guest argued the bill would improve accountability and public confidence in federal law enforcement.',
      },
    ],
    topSectors: [
      { category: 'Legal & Law Enforcement', amount: 380000, percentage: 38 },
      { category: 'Agriculture', amount: 250000, percentage: 25 },
      { category: 'Finance', amount: 190000, percentage: 19 },
      { category: 'Other / Unitemized', amount: 180000, percentage: 18 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Guest has voted with the House Republican caucus on most major legislation, but his vote to remove Speaker McCarthy marks a significant break with party leadership.',
        'His law enforcement background informs his priorities on the Ethics and Homeland Security committees, with particular focus on border security and prosecutorial standards.',
        'He represents a deep-red district centered on Rankin County — one of the fastest-growing suburban counties in Mississippi — and has faced no meaningful Democratic opposition.',
      ],
      whatWeObserve: [
        'The McCarthy ouster vote was the most consequential and politically risky decision of Guest\'s congressional career. He cited principle over political calculation and survived a primary challenge from the right in 2024.',
        'His Ethics Committee assignment is notable — it is one of the least sought-after assignments in Congress due to the political sensitivity of investigating colleagues. Taking it signals a degree of institutional commitment.',
        'Guest\'s background as a federal prosecutor gives him a methodical, evidence-focused approach to policy that differs from many colleagues who came from business or political backgrounds.',
      ],
      whatIsUnresolved: [
        'His relationship with House Republican leadership following the McCarthy vote remains watched — he supported Mike Johnson as Speaker but has maintained independence on procedural issues.',
      ],
    },
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
    bio: 'Mike Ezell has represented Mississippi\'s 4th Congressional District since 2023, succeeding the retiring Steven Palazzo. A former two-term Jackson County Sheriff with 30 years in law enforcement, he brings a deep public safety background to the House Natural Resources and Homeland Security Committees. His district covers the Gulf Coast and southern Mississippi, home to Keesler Air Force Base, the Port of Gulfport, and a significant fishing and energy industry.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsnr', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Jackson County Sheriff', jurisdiction: 'Jackson County, Mississippi', startDate: '2012-01-01', endDate: '2022-12-31' },
    ],
    keyMilestones: [
      { year: 1991, description: 'Began career with the Jackson County Sheriff\'s Office, serving over 20 years before becoming Sheriff' },
      { year: 2011, description: 'Elected Jackson County Sheriff, serving two four-year terms (2012–2020)' },
      { year: 2022, description: 'Won the Republican primary for Mississippi\'s 4th Congressional District with 56%, succeeding retiring Rep. Steven Palazzo' },
      { year: 2023, description: 'Sworn in to 118th Congress; assigned to House Natural Resources and Homeland Security Committees' },
      { year: 2024, description: 'Re-elected to the 119th Congress without a Democratic opponent, reflecting the district\'s strong Republican lean' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal suspending the debt limit through January 2025 in exchange for discretionary spending caps. The bill passed 314–117 with broad Republican support. Ezell backed it as a necessary step to avoid default while extracting spending concessions from the White House.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, authorizing $886 billion in defense spending. Ezell supported provisions protecting Keesler Air Force Base — one of the 4th District\'s largest employers — and funding for Gulf Coast military readiness and coastal infrastructure.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, the first bill signed into law in the 119th Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. As a former sheriff who managed a county jail, Ezell brought firsthand immigration enforcement experience to his advocacy for the bill.',
      },
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2025,
        month: 7,
        position: 'For',
        summary: 'Voted for the NDAA FY2025, authorizing $923 billion in defense spending. Key priorities for the 4th District included continued investment in Keesler AFB\'s cyber training mission and maintenance of Gulf Coast maritime defense infrastructure through the Port of Gulfport.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the continuing resolution funding the federal government through the remainder of FY2026. Ezell supported the measure to protect defense appropriations for Keesler Air Force Base and maintain federal fisheries and coastal management programs critical to the 4th District\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Gulf Coast Fisheries and Ocean Energy Protection provisions',
        year: 2023,
        month: 9,
        summary: 'Introduced and advocated for provisions in the Natural Resources Committee protecting Gulf Coast commercial and recreational fishing industries from proposed NOAA regulatory changes. Ezell argued the rules would impose unsustainable compliance costs on the 4th District\'s fishing fleet and threaten thousands of jobs along the Mississippi Sound.',
      },
      {
        title: 'Keesler AFB Expansion and Cyber Training Authorization',
        year: 2025,
        month: 4,
        summary: 'Worked within the Armed Services and Homeland Security Committees to secure language in the NDAA expanding Keesler Air Force Base\'s cyber training capacity. The effort aims to grow Keesler\'s role as the Air Force\'s primary cyber training hub, bringing additional personnel and economic activity to Biloxi.',
      },
    ],
    topSectors: [
      { category: 'Energy & Oil/Gas', amount: 320000, percentage: 36 },
      { category: 'Agriculture & Fisheries', amount: 220000, percentage: 25 },
      { category: 'Defense & Aerospace', amount: 180000, percentage: 20 },
      { category: 'Other / Unitemized', amount: 170000, percentage: 19 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Ezell has voted with the House Republican caucus on all major legislation in his first two terms, reflecting both his personal conservatism and his district\'s strong Republican composition.',
        'His Natural Resources assignment is a direct fit for the 4th District — home to the Gulf Coast\'s fishing industry, offshore oil and gas operations, and federal lands along the Mississippi Sound.',
        'His Homeland Security Committee role aligns with his law enforcement background and gives him a platform on border security policy, a priority issue for his district and his pre-congressional career.',
      ],
      whatWeObserve: [
        'Ezell is a first-generation congressman who rose through county-level law enforcement rather than the usual political pipeline of law or business. His Sheriff background gives him operational credibility on public safety issues that sets him apart from colleagues who have primarily been lawyers or legislators.',
        'The 4th District\'s economy is unusually sensitive to federal environmental and energy policy — from offshore drilling regulations to NOAA fisheries management — making his Natural Resources seat particularly valuable for constituents.',
        'Keesler Air Force Base in Biloxi is one of the district\'s largest employers, and Ezell has consistently supported defense spending and military readiness funding.',
      ],
      whatIsUnresolved: [
        'As a relatively junior member without a leadership position, Ezell\'s ability to shape legislation depends on coalition-building within the Natural Resources and Homeland Security committees.',
        'The future of Gulf Coast energy development policy — including federal offshore leasing decisions — will be a defining issue for his district and his committee work.',
      ],
    },
  },
]

export const msDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

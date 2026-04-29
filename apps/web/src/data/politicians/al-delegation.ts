import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'T000278',
    slug: 'tommy-tuberville',
    name: 'Tommy Tuberville',
    party: 'R',
    chamber: 'Senate',
    state: 'Alabama',
    currentTitle: 'U.S. Senator from Alabama',
    bio: 'Tommy Tuberville has represented Alabama in the U.S. Senate since 2021, defeating incumbent Democrat Doug Jones after decades as a college football coach at Auburn, Mississippi State, and Texas Tech. He made national headlines in 2023 for blocking over 400 military promotions for nearly a year — the most extensive military hold in modern history — to protest DoD\'s policy providing travel funds for service members seeking abortions. He serves on the Agriculture, Aging, HELP, and Veterans\' Affairs Committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Military Promotions Hold — Resolved',
        year: 2024,
        month: 1,
        position: 'Against',
        summary: 'Ended his unprecedented nine-month hold on military promotions after the Senate voted to advance nominees individually — a process that confirmed over 400 generals, admirals, and senior officers delayed since February 2023. Tuberville argued throughout that the hold was necessary to force a Senate vote on prohibiting DoD\'s abortion travel policy, but ultimately released the hold without achieving the statutory change he sought.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Tuberville has been a consistent advocate for strong border security measures throughout his Senate tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its pro-life provisions and agricultural supports important to Alabama\'s farming communities. Tuberville used his Agriculture Committee seat to advocate for commodity support programs for Alabama\'s poultry, peanut, and cotton industries.',
      },
    ],
    keyBills: [
      {
        title: 'No Taxpayer Funding for Abortion Through DOD Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation prohibiting the Department of Defense from using appropriated funds to pay for travel expenses related to abortion services for service members and their dependents. This bill was the proximate cause of Tuberville\'s nine-month military promotions hold, which he used to force Senate consideration of the measure.',
      },
      {
        title: 'College Football Playoff Oversight Act',
        year: 2023,
        month: 10,
        summary: 'Introduced legislation asserting congressional oversight over the College Football Playoff selection process, building on his coaching background and his argument that the CFP\'s governance structure lacks transparency and fair access for conferences outside the Power Five. Tuberville advocated for a formalized, merit-based bracket system.',
      },
    ],
  },

  {
    bioguideId: 'B001319',
    slug: 'katie-boyd-britt',
    name: 'Katie Boyd Britt',
    party: 'R',
    chamber: 'Senate',
    state: 'Alabama',
    currentTitle: 'U.S. Senator from Alabama',
    bio: 'Katie Boyd Britt has represented Alabama in the U.S. Senate since 2023, having won the seat vacated by Richard Shelby\'s retirement. A former chief of staff to Senator Shelby and former president of the Business Council of Alabama, she became the youngest Republican woman ever elected to the Senate at age 41. She rose to national prominence — and criticism — for delivering the Republican response to President Biden\'s State of the Union in 2024. She serves on the Banking, Judiciary, and Rules Committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssra', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Britt has made border security and immigration enforcement central to her political identity and was among the earliest Senate co-sponsors of the legislation.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting Alabama\'s military installations including Redstone Arsenal and Fort Novosel (formerly Fort Rucker). Britt has emphasized Alabama\'s defense economy as a priority issue and worked to maintain funding for the installations that anchor the state\'s federal presence.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using her Banking Committee seat to advocate for financial regulatory provisions she argued would expand capital access for Alabama\'s small businesses and community banks. Britt championed the bill\'s pro-family provisions including expanded child tax credit and child care support.',
      },
    ],
    keyBills: [
      {
        title: 'More Opportunities for Moms to Succeed Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation expanding federal childcare and family support programs for working mothers, reflecting the "pro-family conservatism" brand Britt has been developing as part of a broader Republican effort to appeal to suburban women voters. The bill provided tax credits for employer-sponsored childcare and expanded home visiting programs for new mothers.',
      },
      {
        title: 'Stop Child Abuse in Immigration Detention Act',
        year: 2023,
        month: 8,
        summary: 'Introduced legislation strengthening oversight and accountability for the treatment of unaccompanied minors in immigration detention facilities, drawing on her Judiciary Committee work on border-related issues. Britt argued robust child protection standards must accompany strong enforcement measures.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'B001212',
    slug: 'barry-moore',
    name: 'Barry Moore',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 1st District',
    bio: 'Barry Moore has represented Alabama\'s 1st Congressional District — Mobile and southwest Alabama — since 2021, having previously represented the 2nd District before redistricting. A former Alabama state legislator and farmer, he serves on the Judiciary and Agriculture Committees and is a member of the House Freedom Caucus. He has focused on immigration enforcement, agricultural interests, and reducing federal regulatory burdens on Alabama\'s energy and manufacturing sectors.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal as a Freedom Caucus member who argued the spending concessions were inadequate. Moore has consistently opposed bipartisan spending compromises he views as insufficiently conservative and prioritizes structural fiscal reform over near-term debt limit resolutions.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Moore has been a consistent advocate for strict immigration enforcement and has co-sponsored multiple pieces of legislation strengthening border security throughout his tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its agricultural provisions and spending reductions he argued would benefit Alabama\'s farming communities and reduce inflationary pressure on the state\'s economy. Moore used his Agriculture Committee seat to advocate for commodity support and rural development provisions.',
      },
    ],
    keyBills: [
      {
        title: 'Gulf Coast Economic Development and Energy Independence Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation expanding offshore oil and gas leasing in the Gulf of Mexico and streamlining permitting for natural gas export facilities, priorities for Mobile\'s port economy and Alabama\'s energy sector. Moore argued that expanding domestic energy production is essential to both energy security and economic growth in southwest Alabama.',
      },
      {
        title: 'Protecting Alabama Agriculture from Federal Overreach Act',
        year: 2024,
        month: 4,
        summary: 'Championed legislation limiting EPA\'s ability to impose new wetlands regulations that Moore argued would impose excessive compliance costs on Alabama farmers and forestry operations without proportionate environmental benefit. The bill addressed Clean Water Act jurisdiction questions that have created uncertainty for Alabama\'s agricultural landowners.',
      },
    ],
  },

  {
    bioguideId: 'F000481',
    slug: 'shomari-figures',
    name: 'Shomari Figures',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 2nd District',
    bio: 'Shomari Figures has represented Alabama\'s 2nd Congressional District — the Black Belt counties of central Alabama and the Mobile area\'s Black communities — since 2025. A former U.S. Department of Justice attorney and aide to Attorney General Merrick Garland, he won the seat created by Alabama\'s court-ordered redistricting to include a second majority-minority district. He serves on the Agriculture and Transportation Committees and has focused on economic justice, voting rights, and federal investment in historically underserved communities.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill in one of his first major floor votes, arguing its Medicaid cuts and SNAP reductions would devastate Alabama\'s Black Belt — one of the poorest and most medically underserved regions in the country. Figures drew on his DOJ background to argue the bill\'s provisions would reverse progress toward equity in healthcare and nutrition access.',
      },
      {
        title: 'FY2026 Appropriations — Rural Development',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing cuts to USDA rural development programs and community development block grants that he argued would eliminate critical infrastructure and economic development resources for Black Belt counties with some of the nation\'s highest poverty rates.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting provisions protecting Maxwell-Gunter Air Force Base in Montgomery — the district\'s largest employer — and maintaining federal presence in the region. Figures argued defense investment at Maxwell-Gunter creates economic opportunities that extend beyond the base into surrounding communities.',
      },
    ],
    keyBills: [
      {
        title: 'Black Belt Infrastructure and Economic Opportunity Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation directing federal infrastructure and economic development investment to the historically impoverished counties of Alabama\'s Black Belt, drawing on the 10-20-30 formula championed by Rep. Clyburn. Figures argued that the region\'s persistent poverty — rooted in its history as the heart of the antebellum cotton economy — requires targeted federal intervention.',
      },
      {
        title: 'Voting Rights Advancement Act — Co-sponsorship',
        year: 2025,
        month: 4,
        summary: 'Co-sponsored legislation restoring Section 5 preclearance requirements for states and counties with recent histories of voting rights violations, drawing on his DOJ civil rights background. Figures argued Alabama\'s redistricting fight — which required two Supreme Court decisions and a court order — demonstrates precisely why federal voting rights enforcement remains essential.',
      },
    ],
  },

  {
    bioguideId: 'R000575',
    slug: 'mike-rogers',
    name: 'Mike Rogers',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 3rd District',
    bio: 'Mike Rogers has represented Alabama\'s 3rd Congressional District — Anniston, Auburn, and east Alabama — since 2003 and chairs the House Armed Services Committee. A former Calhoun County Commissioner and attorney, he is one of the most powerful members of the House Republican caucus by virtue of his committee chairmanship, overseeing the annual National Defense Authorization Act and Pentagon oversight. His district is home to Anniston Army Depot and Fort McClellan, and he has been one of Alabama\'s most prominent advocates for defense investment.',
    sinceYear: 2003,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Chair' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Led the House Armed Services Committee\'s development of the $886 billion NDAA FY2024 as Chairman, managing the bicameral conference process and securing provisions protecting Alabama installations including Anniston Army Depot and Redstone Arsenal. Rogers\' chairmanship put him at the center of the nation\'s annual defense policy process.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Led the NDAA FY2026 as Armed Services Chairman, authorizing over $930 billion in defense spending and advancing major provisions on nuclear modernization, Pacific deterrence, and military readiness. Rogers championed significant investments in Alabama\'s defense infrastructure including Redstone Arsenal\'s missile defense mission.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Armed Services chairmanship to ensure defense spending levels in the package met his standards for military readiness. Rogers was among the most influential members in shaping the bill\'s defense investment provisions.',
      },
    ],
    keyBills: [
      {
        title: 'National Defense Authorization Act — Annual Authorization',
        year: 2024,
        month: 12,
        summary: 'As Armed Services Committee Chairman, Rogers leads the annual NDAA authorization process — the most significant piece of defense legislation Congress passes. The FY2025 and FY2026 NDAAs he shepherded through the Committee authorized historic levels of defense investment, including provisions specifically protecting Alabama\'s defense installations and advancing nuclear modernization programs centered at Redstone Arsenal.',
      },
      {
        title: 'Army Depot and Defense Industrial Base Security Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation through the Armed Services Committee strengthening oversight of the defense industrial base and ensuring adequate sustainment funding for Army depots like Anniston. Rogers has spent two decades advocating for depot-level maintenance funding, arguing that a strong organic industrial base is essential to military readiness and cannot be outsourced to contractors.',
      },
    ],
  },

  {
    bioguideId: 'A000055',
    slug: 'robert-b-aderholt',
    name: 'Robert B. Aderholt',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 4th District',
    bio: 'Robert Aderholt has represented Alabama\'s 4th Congressional District — north Alabama including Gadsden, Decatur, and Jasper — since 1997 and is the most senior member of Alabama\'s House delegation. A graduate of Birmingham-Southern College and Samford law, he serves on the House Appropriations Committee and is one of the longest-serving members of that panel. His Appropriations seat has allowed him to direct significant federal investment to north Alabama\'s aerospace, manufacturing, and agricultural economy.',
    sinceYear: 1997,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting Redstone Arsenal in his district — which hosts NASA\'s Marshall Space Flight Center, the Missile Defense Agency, and the Army Futures Command\'s aviation development arm. Aderholt has been Redstone Arsenal\'s most consistent congressional champion for nearly three decades.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting it as a necessary compromise that extracted meaningful spending constraints. Aderholt has generally supported bipartisan funding agreements when they include fiscal restraint provisions, reflecting his pragmatic appropriator\'s perspective on governance.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Appropriations Committee experience to evaluate the bill\'s fiscal impact. Aderholt supported provisions protecting defense and agricultural spending critical to the 4th District while endorsing the overall spending reduction framework.',
      },
    ],
    keyBills: [
      {
        title: 'Redstone Arsenal Mission Expansion and Space Defense Provisions',
        year: 2024,
        month: 11,
        summary: 'Secured through the Appropriations Committee provisions expanding Redstone Arsenal\'s role in space defense, missile defense integration, and Army aviation modernization. Aderholt has spent nearly three decades using his Appropriations seat to grow Redstone\'s mission, transforming it from a Cold War-era chemical weapons depot into one of the nation\'s most strategically important defense installations.',
      },
      {
        title: 'North Alabama Rural Development Appropriations',
        year: 2023,
        month: 6,
        summary: 'Directed significant USDA rural development funding to north Alabama communities through the appropriations process, targeting water and sewer infrastructure improvements in rural Etowah, Winston, and Walker Counties. Aderholt has leveraged his Appropriations seniority to bring consistent federal investment to his district\'s rural communities throughout his tenure.',
      },
    ],
  },

  {
    bioguideId: 'P000609',
    slug: 'gary-j-palmer',
    name: 'Gary J. Palmer',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 6th District',
    bio: 'Gary Palmer has represented Alabama\'s 6th Congressional District — suburban Birmingham including Hoover, Vestavia Hills, and Shelby County — since 2015. A former president of the Alabama Policy Institute, a conservative think tank, he serves on the Energy and Commerce and Oversight Committees and serves as Republican Policy Committee Chairman. His institutional position in House Republican leadership and his think tank background make him one of the most policy-focused members of the Alabama delegation.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the bipartisan infrastructure law, arguing its price tag was excessive and it contained too many provisions expanding the federal government\'s role in areas better left to states and private markets. Palmer\'s think tank background informs his principled opposition to government spending growth even on popular bipartisan initiatives.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Palmer has consistently supported strong immigration enforcement measures as part of his rule-of-law conservatism.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Republican Policy Committee Chairman role to help develop the policy case for the legislation. Palmer was among the members most actively involved in educating the Republican conference on the bill\'s provisions and building support for its final passage.',
      },
    ],
    keyBills: [
      {
        title: 'American Energy Independence Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation expanding domestic oil, gas, and coal production by streamlining federal permitting and rolling back Biden administration leasing restrictions. Palmer, drawing on his Energy and Commerce Committee assignment and his think tank background, argued that affordable energy is foundational to American manufacturing competitiveness and national security.',
      },
      {
        title: 'Federal Regulatory Budget Act',
        year: 2022,
        month: 9,
        summary: 'Championed legislation establishing an annual cap on the total cost of new federal regulations, requiring agencies to repeal existing regulations worth an equal or greater amount before issuing new rules. The bill reflected Palmer\'s longstanding think tank-derived argument that regulatory accumulation imposes a hidden tax on the American economy.',
      },
    ],
  },

  {
    bioguideId: 'S001185',
    slug: 'terri-a-sewell',
    name: 'Terri A. Sewell',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 7th District',
    bio: 'Terri Sewell has represented Alabama\'s 7th Congressional District — the Black Belt counties of central Alabama, Tuscaloosa, and parts of Birmingham — since 2011. A Harvard Law graduate who clerked on the federal bench and worked on Wall Street before entering politics, she became the first Black woman elected to Congress from Alabama. She serves on the Ways and Means Committee and the House Administration Committee and has focused on voting rights — particularly for the Selma-to-Montgomery march corridor — rural healthcare, and Black Belt economic development.',
    sinceYear: 2011,
    committees: [
      { slug: 'hsha', name: 'House Committee on House Administration', chamber: 'House', role: 'Member' },
      { slug: 'jspr', name: 'Joint Committee on Printing', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, emphasizing its importance for Alabama\'s Black Belt — one of the most economically distressed rural regions in the country — where pandemic disruptions compounded pre-existing poverty and healthcare deficits. Sewell highlighted the bill\'s rural hospital stabilization and community health center funding.',
      },
      {
        title: 'John Lewis Voting Rights Advancement Act',
        year: 2021,
        month: 8,
        position: 'For',
        summary: 'Was a lead sponsor of the John Lewis Voting Rights Advancement Act, restoring and strengthening the Voting Rights Act\'s Section 5 preclearance requirements. Sewell, who represents Selma — site of Bloody Sunday — has championed voting rights as the central cause of her congressional career and dedicated the bill to her mentor and predecessor John Lewis.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts would eliminate coverage for hundreds of thousands of Alabama residents and its SNAP reductions would increase food insecurity in a district where food poverty is already among the nation\'s worst. Sewell called the bill an attack on the communities she was sent to Washington to protect.',
      },
    ],
    keyBills: [
      {
        title: 'John Lewis Voting Rights Advancement Act',
        year: 2021,
        month: 5,
        summary: 'Led House passage of the legislation named for her late mentor and predecessor, restoring the Voting Rights Act\'s preclearance formula to cover jurisdictions with recent voting rights violations. Sewell\'s personal connection to Selma and the Civil Rights Movement gives her singular moral authority on voting rights, and she has made the legislation\'s advancement the defining priority of her congressional tenure.',
      },
      {
        title: 'Rural Hospital Stabilization Act',
        year: 2023,
        month: 3,
        summary: 'Championed legislation providing emergency stabilization grants and operational support for rural hospitals serving Medicaid-dependent populations in states that declined Medicaid expansion. Alabama\'s Black Belt has experienced severe rural hospital closures, and Sewell\'s bill targeted the facilities most at risk of closure in high-poverty, low-insurance counties like those in her district.',
      },
    ],
  },

  {
    bioguideId: 'S001220',
    slug: 'dale-w-strong',
    name: 'Dale W. Strong',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Alabama',
    currentTitle: 'U.S. Representative, Alabama 5th District',
    bio: 'Dale Strong has represented Alabama\'s 5th Congressional District — Huntsville, Madison County, and the Tennessee Valley — since 2023, succeeding Mo Brooks. A former Madison County Commission Chairman, he serves on the Appropriations and Homeland Security Committees. His district is dominated by the Redstone Arsenal complex, NASA\'s Marshall Space Flight Center, and Huntsville\'s rapidly growing aerospace and technology economy — making it one of the most defense-intensive districts in the country.',
    sinceYear: 2023,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, prioritizing provisions protecting Redstone Arsenal and NASA Marshall Space Flight Center — the anchors of Huntsville\'s $15 billion federal presence. Strong used his Appropriations seat to advocate for missile defense funding, space exploration investment, and Army aviation modernization programs centered on his district.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Strong has supported stronger immigration enforcement measures throughout his tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Appropriations Committee seat to advocate for provisions protecting defense and space exploration funding critical to Huntsville\'s economy. Strong conditioned his support on maintaining adequate investment levels for Redstone Arsenal and the Space Launch System program at Marshall.',
      },
    ],
    keyBills: [
      {
        title: 'Space Exploration and Missile Defense Investment Act',
        year: 2024,
        month: 6,
        summary: 'Championed appropriations provisions increasing funding for NASA\'s Space Launch System and Artemis moon program managed at Marshall Space Flight Center, and for the Missile Defense Agency programs headquartered at Redstone Arsenal. Strong has positioned himself as the primary congressional champion for Huntsville\'s federal complex, continuing the work of his predecessor Richard Shelby.',
      },
      {
        title: 'Tennessee Valley Authority Oversight and Modernization Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation modernizing TVA\'s governance structure and expanding its authority to invest in nuclear energy and grid resilience improvements benefiting the Tennessee Valley\'s energy consumers. Strong argued that TVA\'s unique federal utility model requires updated authorities to meet the electricity demands of Huntsville\'s rapidly growing technology sector.',
      },
    ],
  },
]

export const alDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

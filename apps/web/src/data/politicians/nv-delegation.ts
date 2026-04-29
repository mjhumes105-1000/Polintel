import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001113',
    slug: 'catherine-cortez-masto',
    name: 'Catherine Cortez Masto',
    party: 'D',
    chamber: 'Senate',
    state: 'Nevada',
    currentTitle: 'U.S. Senator from Nevada',
    bio: 'Catherine Cortez Masto made history in 2016 when she became the first Latina elected to the United States Senate. A former two-term Nevada Attorney General who built a national reputation fighting mortgage fraud and sex trafficking, she has served Nevada in the Senate since 2017. She sits on the Senate Finance, Banking, Energy, and Indian Affairs Committees, focusing on housing, clean energy, tribal issues, and Nevada\'s economy. She won a closely-watched 2022 re-election race that was seen as a bellwether for Senate control.',
    sinceYear: 2017,
    committees: [
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, highlighting its clean energy tax credits as critical to Nevada\'s growing solar and geothermal industry, and its prescription drug pricing provisions as relief for Nevada\'s large senior population. Nevada\'s abundant sun and geothermal resources make it a natural beneficiary of clean energy investment incentives.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, securing funding for Nevada highway improvements, broadband expansion, and water infrastructure — critical in an arid state facing increasing drought pressure. Cortez Masto championed the law\'s provisions for the Colorado River Basin and rural Nevada broadband.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the $52 billion semiconductor investment bill, arguing it would bring manufacturing jobs to Nevada and reduce dependence on foreign chip supply chains. She worked to ensure the bill included provisions supporting workforce development programs accessible to Nevada\'s diverse working-class communities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seats on the Senate Finance and Energy Committees, arguing its repeal of clean energy tax credits would kill solar and geothermal jobs in a state with the best renewable energy potential in the nation. Cortez Masto warned the bill\'s Medicaid cuts and housing assistance reductions would devastate Nevada\'s large hospitality workforce, which still relies heavily on federal safety-net programs.',
      },
    ],
    keyBills: [
      {
        title: 'Housing Is Infrastructure Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation investing $45 billion in affordable housing construction and preservation, addressing Nevada\'s severe housing affordability crisis. The Las Vegas metro area has experienced some of the fastest housing price appreciation in the nation, and Cortez Masto has made housing access a central issue for Nevada\'s working families and hospitality workforce.',
      },
      {
        title: 'Tribal Access to Justice Act',
        year: 2022,
        month: 9,
        summary: 'Championed legislation expanding tribal court jurisdiction over non-Native defendants in cases of domestic violence and sexual assault on tribal lands. Drawing on her AG experience prosecuting sex trafficking and her Banking and Indian Affairs committee work, Cortez Masto has been a persistent Senate advocate for tribal public safety and justice resources.',
      },
    ],
  },

  {
    bioguideId: 'R000608',
    slug: 'jacky-rosen',
    name: 'Jacky Rosen',
    party: 'D',
    chamber: 'Senate',
    state: 'Nevada',
    currentTitle: 'U.S. Senator from Nevada',
    bio: 'Jacky Rosen was elected to the U.S. Senate from Nevada in 2018, defeating Republican incumbent Dean Heller, after previously serving one term in the U.S. House representing Nevada\'s 3rd District. A former synagogue president and software application developer with a background in computing, she sits on the Senate Armed Services, Commerce, Foreign Relations, and Small Business Committees. She has been a bipartisan voice on cybersecurity, veterans\' issues, and healthcare, and won re-election in 2024.',
    sinceYear: 2017,
    committees: [
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the first major federal gun safety legislation in decades, which enhanced background checks, closed the boyfriend loophole, and funded red flag law implementation. Rosen has been a vocal gun safety advocate since representing Las Vegas-area constituents in the aftermath of the October 2017 Route 91 Harvest music festival mass shooting.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its healthcare provisions including the cap on insulin costs and Medicare drug price negotiation — policies she argued would directly benefit Nevada\'s seniors and uninsured working families. Nevada historically has had one of the highest uninsured rates in the nation.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the $52 billion semiconductor investment bill, using her technology background as a software developer to advocate for workforce training provisions that would prepare Nevada workers for high-tech manufacturing jobs. She viewed the bill as essential to American competitiveness with China.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seat on the Senate Armed Services and Commerce Committees, warning that its Medicaid cuts would leave hundreds of thousands of Nevada residents without coverage in a state with one of the nation\'s highest uninsured rates. Rosen also criticized the bill\'s rollback of cybersecurity workforce grants she had championed, calling it a step backward for both national security and Nevada\'s technology sector.',
      },
    ],
    keyBills: [
      {
        title: 'Bipartisan Cybersecurity Workforce Enhancement Act',
        year: 2023,
        month: 5,
        summary: 'Co-led legislation expanding cybersecurity workforce training programs through community colleges and vocational schools, drawing on her software development background and Commerce Committee work. Nevada\'s technology sector and the Las Vegas hospitality industry\'s digital infrastructure make cybersecurity workforce development a natural priority.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'T000468',
    slug: 'dina-titus',
    name: 'Dina Titus',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Nevada',
    currentTitle: 'U.S. Representative, Nevada 1st District',
    bio: 'Dina Titus has represented Nevada\'s 1st Congressional District since 2013 and has served in Congress continuously since 2009. A political science professor who taught at UNLV for 30 years and a former Nevada State Senate Majority Leader, she sits on the House Foreign Affairs and Transportation and Infrastructure Committees. Her district covers downtown Las Vegas and the urban core, including the Strip\'s casino and hospitality corridor, and she has been a consistent advocate for gaming industry workers, veterans, and Nevada\'s diverse immigrant communities.',
    sinceYear: 2009,
    committees: [
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, which included direct payments and expanded unemployment benefits critical to Las Vegas\'s hospitality workforce — one of the hardest-hit sectors by the pandemic. Nevada\'s economy is uniquely dependent on tourism and entertainment, making federal COVID relief especially vital for Titus\'s constituents.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, using her Transportation Committee seat to advocate for Las Vegas transit and highway improvements. She championed funding for the Boulder City rail corridor study and I-15 expansion projects critical to managing Las Vegas\'s rapid growth.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, citing its healthcare and clean energy provisions as benefiting Las Vegas\'s working-class hospitality workforce. Titus highlighted the bill\'s Medicare drug pricing caps and ACA subsidy extensions as directly improving health coverage for Nevada\'s large service sector workforce.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seat on the House Transportation and Infrastructure Committee, arguing its Medicaid cuts and SNAP reductions would devastate Las Vegas\'s low-wage hospitality and casino workers who form the economic backbone of Nevada\'s 1st District. Titus also condemned the bill\'s rollback of clean energy incentives as harmful to Nevada\'s solar development prospects and its elimination of downwinder healthcare funds as a betrayal of nuclear test victims in rural Nevada.',
      },
    ],
    keyBills: [
      {
        title: 'Radiation Exposure Compensation Act Expansion',
        year: 2023,
        month: 6,
        summary: 'Championed expansion of the Radiation Exposure Compensation Act to include Nevada \"downwinder\" communities affected by above-ground nuclear testing at the Nevada Test Site in the 1950s and 1960s. Communities in rural Nevada and southern Utah experienced elevated cancer rates from nuclear fallout, and Titus has long advocated for compensation and healthcare for affected families.',
      },
    ],
  },

  {
    bioguideId: 'A000369',
    slug: 'mark-e-amodei',
    name: 'Mark E. Amodei',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Nevada',
    currentTitle: 'U.S. Representative, Nevada 2nd District',
    bio: 'Mark Amodei has represented Nevada\'s 2nd Congressional District since 2011, winning a special election to succeed Dean Heller. A University of Nevada and McGeorge School of Law graduate from Carson City who served in the Nevada State Legislature, he sits on the House Appropriations and Natural Resources Committees. Nevada\'s 2nd District covers the vast rural interior of the state including Reno, Carson City, and enormous stretches of federal land — making public lands management, water rights, and mining policy central to his legislative work.',
    sinceYear: 2011,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting spending caps as a necessary fiscal discipline measure. Amodei has generally supported pragmatic budget compromises through his Appropriations Committee work, reflecting his district\'s need for federal investment in infrastructure and federal land management.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, having shaped its natural resources and public lands provisions through his committee work. Amodei focused particularly on federal land transfer provisions relevant to Nevada, which has the highest percentage of federally owned land of any state.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seats on the House Appropriations and Natural Resources Committees, highlighting provisions accelerating federal land transfers and streamlining mining and energy permitting on the vast federal holdings that cover more than 80% of Nevada. Amodei also backed the bill\'s tax cut extensions as critical relief for Reno and Carson City\'s small businesses and the rural communities that form the core of Nevada\'s 2nd District.',
      },
    ],
    keyBills: [
      {
        title: 'Nevada Public Land Management Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation streamlining federal land management decisions affecting Nevada\'s counties, which depend on federal land revenues and face complex regulatory frameworks for economic development. The bill sought to accelerate permitting for mining, grazing, and energy development on the federal lands that constitute over 80% of Nevada\'s total area.',
      },
    ],
  },

  {
    bioguideId: 'L000590',
    slug: 'susie-lee',
    name: 'Susie Lee',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Nevada',
    currentTitle: 'U.S. Representative, Nevada 3rd District',
    bio: 'Susie Lee has represented Nevada\'s 3rd Congressional District since 2019, having previously led a nonprofit focused on at-risk youth. She serves on the House Appropriations and Natural Resources Committees, focusing on education, healthcare, and Colorado River water policy critical to the Las Vegas metro area. Her district covers the southern and eastern Las Vegas suburbs including Henderson, and she has built a reputation as a pragmatic moderate focused on constituent services and bipartisan problem-solving.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, championing provisions for Lake Mead water storage and Colorado River drought resilience funding — existential concerns for Las Vegas, which draws 90% of its water supply from Lake Mead. Lee used her Natural Resources Committee seat to advocate for southern Nevada\'s water security.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, highlighting its drought relief and western water provisions alongside its healthcare cost reduction measures. She worked to ensure the bill\'s water conservation funding reached southern Nevada\'s water reclamation infrastructure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seats on the House Appropriations and Natural Resources Committees, warning that its elimination of western water conservation funding would directly threaten Lake Mead water levels that supply 90% of Las Vegas\'s water. Lee also condemned the bill\'s Medicaid cuts as deeply harmful to Henderson and the southern Las Vegas suburbs, where working families rely on ACA coverage in large numbers.',
      },
    ],
    keyBills: [
      {
        title: 'Colorado River Drought Contingency Plan funding provisions',
        year: 2023,
        month: 8,
        summary: 'Advocated for emergency Drought Contingency Plan funding through the Appropriations Committee, securing resources for Lake Mead water level stabilization and conservation infrastructure. Las Vegas\'s long-term viability depends on Colorado River water allocation, and Lee has made water security her signature natural resources priority.',
      },
    ],
  },

  {
    bioguideId: 'H001066',
    slug: 'steven-horsford',
    name: 'Steven Horsford',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Nevada',
    currentTitle: 'U.S. Representative, Nevada 4th District',
    bio: 'Steven Horsford has represented Nevada\'s 4th Congressional District since 2013 (with a break from 2015–2019) and was re-elected in 2018. A former Nevada State Senate Majority Leader and Reno native, he serves on the House Ways and Means Committee, where he focuses on tax equity, child welfare policy, and economic opportunity for working families. His district covers the rural northern and eastern portions of Nevada as well as portions of the Las Vegas metro\'s diverse northern suburbs.',
    sinceYear: 2013,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, which he argued was essential for Nevada\'s devastated hospitality and gaming industry workforce. The 4th District\'s large working-class Latino and African American communities were disproportionately affected by the economic fallout of the pandemic.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, using his Ways and Means position to highlight its tax equity provisions including expanded Child Tax Credit access and ACA premium subsidies. Horsford has been a consistent advocate for tax policies that benefit Nevada\'s working-class and middle-class families.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from his seat on the House Ways and Means Committee, arguing its Medicaid cuts and reduction of ACA subsidies would hit Nevada\'s 4th District disproportionately hard given the district\'s large Latino and working-class communities that gained coverage under the ACA. Horsford also condemned the bill\'s elimination of the expanded Child Tax Credit as a betrayal of families he has spent his career fighting for.',
      },
    ],
    keyBills: [
      {
        title: 'Child Tax Credit Expansion Act',
        year: 2023,
        month: 2,
        summary: 'Co-sponsored legislation through the Ways and Means Committee to make permanent the expanded Child Tax Credit enacted in the American Rescue Plan, which reduced child poverty in Nevada significantly during its brief period of full refundability. Horsford has made child poverty reduction a signature legislative priority, arguing the expanded CTC was one of the most effective anti-poverty tools in American history.',
      },
    ],
  },
]

export const nvDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

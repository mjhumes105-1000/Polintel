import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001075',
    slug: 'bill-cassidy',
    name: 'Bill Cassidy',
    party: 'R',
    chamber: 'Senate',
    state: 'Louisiana',
    currentTitle: 'U.S. Senator from Louisiana',
    bio: 'Bill Cassidy has represented Louisiana in the U.S. Senate since 2015, having previously served in the House since 2009. A physician by training who spent years working in Louisiana\'s safety-net hospital system, he chairs the Senate Committee on Health, Education, Labor, and Pensions (HELP) in the 119th Congress. Cassidy is known for his bipartisan instincts — he was one of seven Republican senators who voted to convict former President Trump at the second impeachment trial — and his expertise in healthcare, energy, and hurricane recovery policy.',
    sinceYear: 2009,
    committees: [
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Conviction of President Trump — Second Impeachment Trial',
        year: 2021,
        month: 2,
        position: 'For',
        summary: 'Cassidy voted to convict former President Trump at his second Senate impeachment trial, one of only seven Republicans to do so. He cited Trump\'s role in inciting the January 6th Capitol attack and argued the evidence presented by House managers supported conviction. The Louisiana Republican Party censured him days later, but Cassidy stood by his vote.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the first significant federal gun safety legislation in nearly three decades. Cassidy was one of the key Republican negotiators on the bill, helping to assemble the bipartisan coalition that passed enhanced background checks for young gun buyers, mental health crisis response funding, and incentives for state red flag laws.',
      },
      {
        title: 'One Big Beautiful Bill — HELP Committee Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, having shaped its HELP Committee provisions as committee chair. Cassidy worked to ensure the bill\'s Medicaid restructuring included sufficient transition protections, though he ultimately supported its passage as part of the larger reconciliation package.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, having shaped its healthcare provisions as Chair of the Senate HELP Committee to include protections for Louisiana\'s large safety-net hospital system. Cassidy, a physician who spent years working in Louisiana\'s charity hospital system, argued the bill\'s Medicaid restructuring would improve efficiency while preserving coverage for vulnerable Louisianans dependent on the state\'s healthcare infrastructure.',
      },
    ],
    keyBills: [
      {
        title: 'Social Security Fairness Act',
        year: 2023,
        month: 9,
        summary: 'Co-authored bipartisan legislation repealing the Windfall Elimination Provision and Government Pension Offset, which reduce Social Security benefits for retired public employees including teachers and firefighters. Louisiana has a large population of affected retirees and Cassidy has championed the reform for years, finally securing passage in December 2024.',
      },
      {
        title: 'Gulf Coast Ecosystem Restoration provisions — RESTORE Act',
        year: 2022,
        month: 6,
        summary: 'Continued his long-running advocacy for Louisiana\'s coastal restoration through RESTORE Act funding derived from Deepwater Horizon penalties. Louisiana is losing a football field of coastal land every 100 minutes, and Cassidy has used his Energy and Finance Committee positions to secure sustained federal investment in the state\'s coastal restoration master plan.',
      },
    ],
  },

  {
    bioguideId: 'K000393',
    slug: 'john-kennedy',
    name: 'John Kennedy',
    party: 'R',
    chamber: 'Senate',
    state: 'Louisiana',
    currentTitle: 'U.S. Senator from Louisiana',
    bio: 'John Kennedy has served as Louisiana\'s junior U.S. Senator since 2017. A former Louisiana State Treasurer who switched from Democrat to Republican in 2007, he is known for his sharp-tongued questioning of witnesses at Senate hearings and for colorful attacks on government waste and bureaucratic overreach. He sits on the Appropriations, Banking, Budget, and Judiciary Committees and is a prominent conservative voice on fiscal policy, though he has occasionally broken with party leadership on spending matters.',
    sinceYear: 2017,
    committees: [
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Kennedy was one of a small number of Senate Republicans to vote against the bipartisan debt ceiling deal, arguing it did not cut spending sufficiently and that the spending caps negotiated by Speaker McCarthy were too weak. His vote reflected his consistent prioritization of fiscal hawkishness over bipartisan compromise.',
      },
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax cut package in his first year in the Senate, supporting the corporate tax rate reduction from 35% to 21% and the doubling of the standard deduction. Kennedy argued the bill would stimulate business investment in Louisiana and reduce the tax burden on middle-class families.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Kennedy has been a persistent advocate for strict immigration enforcement and frequently uses his Judiciary Committee seat to question administration officials about border security failures.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, championing its spending cuts and tax relief provisions through his Budget and Appropriations Committee seats as the kind of fiscal discipline Louisiana taxpayers have demanded for years. Kennedy highlighted the bill\'s border security funding and reductions in non-defense discretionary spending as long-overdue correctives to what he characterized as years of reckless federal overspending.',
      },
    ],
    keyBills: [
      {
        title: 'CARES Act — Small Business Provisions advocacy',
        year: 2020,
        month: 3,
        summary: 'While supporting the CARES Act, Kennedy was a vocal critic of its implementation, particularly the initial exclusion of independent contractors and gig workers from the Paycheck Protection Program. He pushed for PPP modifications that ultimately extended the program to self-employed individuals, an important fix for Louisiana\'s large oil and gas contractor workforce.',
      },
      {
        title: 'Protecting America\'s First Responders Act',
        year: 2022,
        month: 8,
        summary: 'Introduced legislation expanding federal support for law enforcement officers injured in the line of duty, including enhanced disability benefits and medical coverage. Kennedy has been a consistent advocate for public safety funding and frequently uses his Appropriations seat to direct federal law enforcement resources to Louisiana.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'S001176',
    slug: 'steve-scalise',
    name: 'Steve Scalise',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Louisiana',
    currentTitle: 'U.S. Representative, Louisiana 1st District',
    bio: 'Steve Scalise has served as House Majority Leader since January 2023 and has represented Louisiana\'s 1st Congressional District — covering Jefferson Parish and the New Orleans suburbs — since winning a special election in May 2008. A former computer science student who became an insurance professional and state legislator, he survived a near-fatal shooting at the congressional baseball practice in June 2017 and was diagnosed with multiple myeloma in 2023, returning to the Capitol after cancer treatment. He was briefly elected Speaker in October 2023 but withdrew within days when he could not secure enough Republican floor votes.',
    sinceYear: 2008,
    committees: [
      { slug: 'hslead', name: 'House Majority Leader — Floor Leadership', chamber: 'House', role: 'Chair' },
    ],
    previousOffices: [
      { title: 'Louisiana State Senator, 9th District', jurisdiction: 'Louisiana State Senate', startDate: '2007-01-01', endDate: '2008-05-03' },
      { title: 'Louisiana State Representative, 82nd District', jurisdiction: 'Louisiana House of Representatives', startDate: '1995-01-09', endDate: '2007-01-01' },
    ],
    keyMilestones: [
      { year: 1995, description: 'Elected to Louisiana House of Representatives at age 29; began a 12-year state legislative career focused on tax policy and economic development' },
      { year: 2008, description: 'Won special election for Louisiana\'s 1st Congressional District following Bobby Jindal\'s election as Governor, defeating Democrat Jim Harlan with 67%' },
      { year: 2017, description: 'Was critically wounded at the congressional baseball practice in Alexandria, Virginia, when a gunman opened fire; underwent multiple surgeries and returned to the Capitol six weeks later' },
      { year: 2023, description: 'Elected Speaker of the House on October 11, but withdrew on October 12 after it became clear he could not win a floor vote — the second Speaker nominee to fail in two weeks' },
      { year: 2023, description: 'Announced a diagnosis of multiple myeloma (blood cancer), underwent treatment in late 2023, and returned to the Capitol in January 2024 after achieving remission' },
      { year: 2025, description: 'Led House Republican floor operations as Majority Leader through the passage of the One Big Beautiful Bill — the most significant Republican legislation since the 2017 Tax Cuts and Jobs Act' },
    ],
    keyVotes: [
      {
        title: 'Against Affordable Care Act',
        year: 2010,
        month: 3,
        position: 'Against',
        summary: 'Voted against the Affordable Care Act as a second-term member, consistent with his record as one of the House\'s most reliable conservatives on healthcare. Scalise has voted for ACA repeal legislation in every session it has come to the floor.',
      },
      {
        title: 'For: Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul as House Whip, playing a central role in securing the votes needed for passage. Scalise worked through the Republican conference to build the coalition that passed the bill on a party-line vote, demonstrating the vote-counting skills that defined his rise through House leadership.',
      },
      {
        title: 'Against Certifying 2020 Electoral Results',
        year: 2021,
        month: 1,
        position: 'Against',
        summary: 'Voted to object to certification of Pennsylvania\'s and Arizona\'s electoral votes on January 6–7, one of 147 Republicans to do so after the Capitol attack. As Whip at the time, Scalise had coordinated the Republican objection strategy and was among the most senior House Republicans to vote against certification.',
      },
      {
        title: 'For: One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'As Majority Leader, managed House floor operations for the passage of the Republican reconciliation bill, coordinating with Speaker Johnson and committee chairs to navigate the narrow majority. Scalise\'s role included extensive member outreach to hold together a coalition of moderates (concerned about Medicaid cuts) and hardliners (demanding deeper spending reductions) to pass the bill by a thin margin.',
      },
    ],
    keyBills: [
      {
        title: 'American Energy Independence and Security Act provisions',
        year: 2023,
        month: 3,
        summary: 'Led House Republican efforts on energy permitting reform as Majority Leader, advocating for expanded offshore drilling, streamlined pipeline approvals, and rollback of Biden-era energy regulations. Louisiana\'s Gulf Coast economy — oil, gas, and petrochemical industry — makes energy policy central to Scalise\'s constituent interests and a key pillar of his leadership agenda.',
      },
      {
        title: 'Protecting Americans from Foreign Adversary Controlled Applications Act (TikTok)',
        year: 2024,
        month: 3,
        summary: 'Managed House passage of the legislation forcing ByteDance to divest TikTok or face a U.S. ban, which passed 352–65. Scalise used his Majority Leader role to bring the bill to the floor on an accelerated timeline, reflecting bipartisan concern about Chinese data collection on American users.',
      },
    ],
    topSectors: [
      { category: 'Energy & Oil and Gas', amount: 1200000, percentage: 38 },
      { category: 'Defense & Aerospace', amount: 720000, percentage: 23 },
      { category: 'Finance & Insurance', amount: 640000, percentage: 20 },
      { category: 'Individual Contributors', amount: 600000, percentage: 19 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Scalise has compiled one of the most consistently conservative voting records in the House across his 16-year tenure, rarely breaking with the Republican conference on major legislation.',
        'His two near-death experiences — the 2017 shooting and the 2023 cancer diagnosis — have defined public perceptions of him as a figure of resilience and created a personal narrative distinct from his policy record.',
        'As Whip and then Majority Leader, he has been the Republican conference\'s primary vote counter — the member most responsible for building coalitions and knowing where his members stand.',
      ],
      whatWeObserve: [
        'Scalise\'s failed Speaker bid in 2023 revealed the limits of his influence within a fractured Republican conference. Despite his seniority and relationships, he could not overcome opposition from members aligned with far-right figures and Trump himself.',
        'His energy policy positions are directly shaped by Louisiana\'s oil and gas economy — one of the most fossil-fuel-dependent state economies in the country. This gives him genuine constituent rationale for positions critics frame as industry capture.',
        'His recovery from cancer and return to leadership has reinforced a narrative of personal toughness that transcends policy and gives him bipartisan goodwill unusual in the current congressional environment.',
      ],
      whatIsUnresolved: [
        'Scalise\'s cancer remains in remission but creates ongoing uncertainty about his long-term political trajectory. His path to the Speakership — denied twice — remains a defining unfulfilled ambition.',
      ],
    },
  },

  {
    bioguideId: 'C001125',
    slug: 'troy-a-carter',
    name: 'Troy A. Carter',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Louisiana',
    currentTitle: 'U.S. Representative, Louisiana 2nd District',
    bio: 'Troy A. Carter has represented Louisiana\'s 2nd Congressional District — covering New Orleans and parts of Baton Rouge — since 2021, winning a special election to succeed Cedric Richmond. A former New Orleans City Councilman and Louisiana state legislator, he is one of Louisiana\'s two Democratic House members and focuses on coastal restoration, environmental justice, hurricane recovery, and economic opportunity in the majority-Black district. He sits on the Energy and Commerce and Homeland Security Committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion infrastructure law, highlighting its importance for New Orleans\' aging water infrastructure, highway improvements, and broadband expansion. Carter also emphasized the bill\'s coastal resilience investments as essential for a city that remains highly vulnerable to hurricane flooding despite the post-Katrina levee improvements.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its environmental justice provisions and clean energy investments as critical for New Orleans\' predominantly Black communities that have historically borne disproportionate pollution burdens from the petrochemical industry. He highlighted the bill\'s climate funding as essential for coastal Louisiana\'s long-term survival.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid cuts and SNAP reductions would devastate New Orleans\' low-income communities where food insecurity and lack of health insurance are persistent challenges. Carter called the bill an attack on his district\'s most vulnerable residents.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation package, arguing that Medicaid cuts and the rollback of clean energy tax credits would cause serious harm to New Orleans\'s majority-Black communities that already face disproportionate pollution burdens and healthcare access gaps. Carter, a member of the House Energy and Commerce Committee, warned the bill\'s elimination of environmental justice funding would leave coastal Louisiana communities more vulnerable to the climate impacts already threatening the 2nd District\'s long-term survival.',
      },
    ],
    keyBills: [
      {
        title: 'Coastal Communities Ocean Plastic Reduction Act',
        year: 2022,
        month: 8,
        summary: 'Introduced legislation supporting coastal communities\' efforts to reduce plastic pollution entering waterways and the Gulf of Mexico. New Orleans\' position at the mouth of the Mississippi River makes it a focal point for plastic pollution flowing from the nation\'s interior, and Carter has used his Energy and Commerce seat to champion Gulf water quality.',
      },
      {
        title: 'Hurricane Recovery Equity Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation reforming FEMA disaster assistance programs to address documented racial disparities in federal hurricane recovery assistance. Research has shown that majority-Black communities in Louisiana received significantly less per-capita FEMA assistance after Hurricanes Katrina, Harvey, and Ida than comparable majority-white communities, and Carter\'s bill establishes equity audits and corrective mechanisms.',
      },
    ],
  },

  {
    bioguideId: 'H001077',
    slug: 'clay-higgins',
    name: 'Clay Higgins',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Louisiana',
    currentTitle: 'U.S. Representative, Louisiana 3rd District',
    bio: 'Clay Higgins has represented Louisiana\'s 3rd Congressional District — covering Lafayette and the Acadiana region — since 2017. A former law enforcement officer and viral YouTube crime-fighting spokesman for the St. Landry Parish Sheriff\'s Office, he sits on the House Armed Services and Oversight Committees and a January 6th-focused select subcommittee. Higgins is one of the House\'s most vocally conservative members, known for pointed floor speeches and sharp questioning of executive branch officials.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsqj', name: 'House Select Subcommittee to Investigate the Remaining Questions Surrounding January 6, 2021', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Motion to Vacate — Kevin McCarthy',
        year: 2023,
        month: 10,
        position: 'Against',
        summary: 'Voted to retain Kevin McCarthy as Speaker, arguing that removing the Speaker would create chaos and embolden Democrats. Higgins expressed frustration with his conservative colleagues who voted to oust McCarthy, viewing their action as counterproductive to advancing the conservative legislative agenda.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his career-long focus on public safety and immigration enforcement. Higgins drew on his law enforcement background to argue that consistent immigration enforcement is essential for protecting American communities from violent crime.',
      },
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2024,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2025, supporting provisions important to Louisiana\'s military installations including Barksdale Air Force Base and Fort Johnson (formerly Fort Polk). As a member of Armed Services, Higgins has been an advocate for maintaining full military readiness funding and opposing any reductions in force structure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, backing its border security funding and spending efficiency measures through his Armed Services and Oversight Committee work as a law enforcement professional turned legislator. Higgins argued the bill\'s tax cut extensions and reduced regulatory burden would revitalize Lafayette\'s Acadiana energy economy and deliver fiscal accountability that his constituents have long demanded.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Law Enforcement Officers Act',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation establishing mandatory minimum sentences for assaults on federal, state, and local law enforcement officers. Drawing on his 20-year law enforcement career in Louisiana, Higgins has consistently championed legislation he argues will deter violence against police and improve officer safety.',
      },
      {
        title: 'Border Security Investigation provisions',
        year: 2023,
        month: 9,
        summary: 'Used his Oversight Committee position to investigate the Biden administration\'s border security policies, including a site visit to the southern border and publication of reports documenting encounters between law enforcement and individuals on the terrorist watch list. Higgins made border security one of his most visible oversight priorities.',
      },
    ],
  },

  {
    bioguideId: 'J000299',
    slug: 'mike-johnson',
    name: 'Mike Johnson',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Louisiana',
    currentTitle: 'Speaker of the House',
    bio: 'Mike Johnson has served as Speaker of the U.S. House of Representatives since October 2023, elected after Kevin McCarthy became the first Speaker ousted mid-session in American history. A constitutional lawyer from Shreveport and longtime Louisiana state legislator, he entered Congress in 2017 and was little known nationally before his elevation to Speaker. He played a central role in Republican efforts to challenge the 2020 presidential election and was a principal architect of the amicus brief that 126 House Republicans signed supporting the Texas lawsuit to overturn results in four states.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsar', name: 'House Speaker — Presiding Officer', chamber: 'House', role: 'Chair' },
    ],
    previousOffices: [
      { title: 'Louisiana State Representative, 8th District', jurisdiction: 'Louisiana House of Representatives', startDate: '2004-01-12', endDate: '2016-01-11' },
      { title: 'Constitutional Lawyer & Partner, Freedom Guard', jurisdiction: 'Shreveport, Louisiana', startDate: '2002-01-01', endDate: '2016-11-01' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected to Louisiana House of Representatives; began building a record on religious liberty and constitutional law issues' },
      { year: 2016, description: 'Elected to U.S. House for Louisiana\'s 4th Congressional District, succeeding retiring Rep. John Fleming' },
      { year: 2021, description: 'Voted against certifying the 2020 presidential election results for Pennsylvania and Arizona, one of 147 Republicans to do so after the January 6th attack' },
      { year: 2023, description: 'Elected Speaker of the House on October 25 on the fourth ballot, ending a three-week vacancy after Kevin McCarthy\'s historic ouster — the first Speaker removed mid-session in U.S. history' },
      { year: 2024, description: 'Brought the $95 billion Ukraine-Israel-Taiwan national security supplemental to the House floor over objections from the House Freedom Caucus, passing with bipartisan support' },
      { year: 2025, description: 'Presided over House passage of the One Big Beautiful Bill, the Republican reconciliation bill combining tax cuts, Medicaid work requirements, and border enforcement spending' },
    ],
    keyVotes: [
      {
        title: 'Against Certifying 2020 Electoral Results',
        year: 2021,
        month: 1,
        position: 'Against',
        summary: 'Voted to object to the certification of Pennsylvania\'s and Arizona\'s electoral votes on January 6–7, 2021, following the attack on the Capitol. Johnson had previously organized an amicus brief signed by 126 House Republicans supporting Texas\'s lawsuit to overturn results in Georgia, Michigan, Pennsylvania, and Wisconsin. His January 6 vote became central to the debate over his fitness for Speaker.',
      },
      {
        title: 'For: Ukraine-Israel-Taiwan National Security Supplemental',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Brought the $95 billion national security supplemental to the House floor after months of blockage by hardline members, allowing it to pass 311–112 with strong bipartisan support. Johnson\'s decision to advance the bill over Freedom Caucus objections — and opposition from former President Trump — was his most consequential and controversial act as Speaker, drawing calls for his removal that ultimately failed.',
      },
      {
        title: 'For: Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act as part of the first wave of legislation in the 119th Congress. Johnson prioritized immigration enforcement as the first action of the new session and helped organize the rapid passage of the bill in coordination with the Senate.',
      },
      {
        title: 'For: One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Presided over and voted for the Republican budget reconciliation bill — the flagship legislative priority of the Trump second term — combining $4.5 trillion in tax cut extensions, Medicaid work requirements, border enforcement spending, and reductions to clean energy programs. Johnson navigated a fractious House Republican conference to deliver the bill on a near-party-line vote.',
      },
    ],
    keyBills: [
      {
        title: 'FISA Section 702 Reauthorization',
        year: 2024,
        month: 4,
        summary: 'Managed the House reauthorization of Section 702 of the Foreign Intelligence Surveillance Act — the NSA\'s primary authority to collect communications of foreign targets — over opposition from both the Freedom Caucus (concerned about domestic surveillance) and progressive Democrats (concerned about civil liberties). Johnson ultimately passed a clean reauthorization without a warrant requirement, a significant intelligence community victory.',
      },
      {
        title: 'FY2025 Government Funding Continuing Resolution',
        year: 2024,
        month: 12,
        summary: 'After an initial continuing resolution collapsed due to Freedom Caucus opposition, Johnson assembled a second package that avoided a government shutdown. The episode illustrated the difficulty of managing a four-seat House majority and the persistent leverage of the hardline faction that had helped make him Speaker.',
      },
    ],
    topSectors: [
      { category: 'Legal & Religious Liberty Organizations', amount: 480000, percentage: 32 },
      { category: 'Defense & Aerospace', amount: 420000, percentage: 28 },
      { category: 'Finance & Real Estate', amount: 360000, percentage: 24 },
      { category: 'Individual Contributors', amount: 240000, percentage: 16 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Johnson\'s legislative record before becoming Speaker was primarily focused on religious liberty litigation and conservative constitutional arguments rather than major legislation.',
        'As Speaker, he has demonstrated more pragmatism than his pre-Speaker record suggested — most notably on Ukraine aid — while remaining reliably aligned with the Trump agenda on taxes, immigration, and social issues.',
        'He voted against certifying the 2020 election and organized Republican support for the Texas election lawsuit, positions that defined his entry into the national conversation.',
      ],
      whatWeObserve: [
        'Johnson\'s elevation to Speaker was the product of exhaustion — he was the fourth nominee after McCarthy, Scalise, and Emmer all failed — rather than a planned leadership trajectory. His survival and relative effectiveness have surprised both allies and critics.',
        'His decision to bring Ukraine aid to the floor was the most politically courageous act of his speakership, risking his position to advance a foreign policy priority he believed was essential to U.S. security.',
        'Managing a four-seat majority with a fractious Freedom Caucus has required Johnson to negotiate constantly within his own conference — a dynamic that has defined every Speaker since Boehner.',
      ],
      whatIsUnresolved: [
        'Whether Johnson can hold the Speaker\'s gavel through 2026 — and whether Republicans maintain their House majority — will depend heavily on the legislative success of the Trump agenda and the political environment heading into the midterms.',
      ],
    },
  },

  {
    bioguideId: 'L000595',
    slug: 'julia-letlow',
    name: 'Julia Letlow',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Louisiana',
    currentTitle: 'U.S. Representative, Louisiana 5th District',
    bio: 'Julia Letlow has represented Louisiana\'s 5th Congressional District — covering northeastern Louisiana including Monroe — since 2021. She was elected in a special election to fill the seat won by her late husband, Luke Letlow, who died of COVID-19 complications before being sworn in. A communications scholar with a PhD from the University of Louisiana at Monroe, she sits on the Appropriations and Education and Workforce Committees and focuses on rural healthcare, broadband access, and education policy.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting its education reform provisions she helped shape through the Education and Workforce Committee. Letlow backed the bill\'s career and technical education funding while using her Appropriations seat to advocate for maintaining rural hospital and telehealth funding critical to her district.',
      },
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2024,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2025, supporting defense funding important to Barksdale Air Force Base in Bossier City and Fort Johnson (formerly Fort Polk) in Vernon Parish — major employers in Louisiana\'s 5th District. She used her Appropriations position to advocate for military construction funding at these installations.',
      },
      {
        title: 'CARES Act Implementation — Rural Provisions',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Supported rural healthcare and broadband provisions in COVID-19 relief legislation, consistent with her focus on northeastern Louisiana\'s persistent infrastructure and healthcare access gaps. Letlow has emphasized rural telehealth as a critical solution for a district where many residents live more than an hour from the nearest specialist.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using her dual Appropriations and Education and Workforce Committee positions to advocate for maintaining rural healthcare telehealth funding and career-technical education grants within the bill\'s overall spending framework. Letlow argued the bill\'s tax cut extensions and spending efficiency measures would benefit northeastern Louisiana\'s rural parishes while reducing the federal deficit that strains the programs her constituents depend on.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Health Care Access Act',
        year: 2022,
        month: 7,
        summary: 'Introduced legislation expanding telehealth coverage under Medicare and Medicaid for rural communities, permanently extending pandemic-era flexibilities that allowed patients in underserved areas to receive specialist consultations remotely. Letlow argued telehealth transformed healthcare access for her district\'s rural parishes and that allowing pandemic provisions to expire would reverse significant progress.',
      },
      {
        title: 'BOLD Infrastructure for Alzheimer\'s Act — Appropriations Provisions',
        year: 2023,
        month: 11,
        summary: 'Secured Appropriations funding for the BOLD Infrastructure for Alzheimer\'s program, which establishes public health infrastructure for Alzheimer\'s disease and dementia detection and care coordination. Letlow has championed Alzheimer\'s research and caregiver support as a priority reflecting her district\'s older rural population and the significant burden of dementia on Louisiana families.',
      },
    ],
  },

  {
    bioguideId: 'F000110',
    slug: 'cleo-fields',
    name: 'Cleo Fields',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Louisiana',
    currentTitle: 'U.S. Representative, Louisiana 6th District',
    bio: 'Cleo Fields has represented Louisiana\'s 6th Congressional District — covering Baton Rouge and the majority-Black communities of the Florida Parishes — since 2025, returning to Congress more than two decades after his initial service in the 1990s. A former Louisiana state senator and gubernatorial candidate, Fields was one of the first Black members of Congress from Louisiana and is now one of only two Democratic members of the state\'s delegation. He sits on the House Financial Services Committee and focuses on economic opportunity, civil rights, and community investment.',
    sinceYear: 1993,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing the Medicaid and SNAP cuts would devastate Baton Rouge\'s low-income communities and reverse economic progress in majority-Black neighborhoods that have historically been underserved. Fields called the bill an assault on the safety net that working families in his district depend on.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing that mandatory detention without due process conflicts with fundamental constitutional rights and that the bill\'s approach to immigration enforcement would harm Louisiana\'s immigrant communities. Fields emphasized the need for comprehensive immigration reform rather than enforcement-only legislation.',
      },
      {
        title: 'Community Reinvestment Act Strengthening provisions',
        year: 2025,
        month: 6,
        position: 'For',
        summary: 'Supported Democratic efforts through the Financial Services Committee to strengthen the Community Reinvestment Act and expand bank lending obligations in underserved communities. Fields has focused his Financial Services work on closing the racial wealth gap and expanding access to credit and capital in Baton Rouge\'s historically redlined neighborhoods.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation package, arguing that Medicaid cuts and SNAP reductions would compound the poverty and health disparities already entrenched in Baton Rouge\'s majority-Black communities and the Florida Parishes. Fields, using his Financial Services Committee platform, also raised alarms about the bill\'s rollback of clean energy investments that had begun attracting economic development dollars to Louisiana\'s historically underserved 6th District.',
      },
    ],
    keyBills: [
      {
        title: 'Economic Opportunity Zones Enhancement Act',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation strengthening reporting and accountability requirements for Opportunity Zone investments to ensure they benefit existing low-income residents rather than primarily serving as tax shelters for wealthy investors. Fields argued that OZ investments in Baton Rouge had largely bypassed the communities they were intended to help and proposed reforms to redirect capital to authentic community development.',
      },
      {
        title: 'Broadband Equity for Historically Black Communities Act',
        year: 2025,
        month: 9,
        summary: 'Introduced legislation directing NTIA and FCC to prioritize broadband deployment in Historically Black Colleges and Universities communities and historically redlined neighborhoods when distributing federal broadband funding. Fields used his Financial Services platform to connect digital equity with the broader economic justice agenda he has championed throughout his political career.',
      },
    ],
  },
]

export const laDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

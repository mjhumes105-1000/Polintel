import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'Y000064',
    slug: 'todd-young',
    name: 'Todd Young',
    party: 'R',
    chamber: 'Senate',
    state: 'Indiana',
    currentTitle: 'U.S. Senator from Indiana',
    bio: 'Todd Young has represented Indiana in the U.S. Senate since 2017, having previously served three terms in the House. A Marine Corps veteran with a law degree from Indiana University, he co-authored the CHIPS and Science Act and serves on the Senate Finance and Commerce Committees. Young is known for a pragmatic, deal-making style and has focused on workforce development, innovation policy, and veterans\' issues.',
    sinceYear: 2017,
    committees: [
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Young was a principal co-author of the CHIPS and Science Act, voting for the landmark legislation that provided $52 billion for domestic semiconductor manufacturing and $200 billion for scientific R&D. He worked across the aisle with Senate Majority Leader Chuck Schumer to assemble the bipartisan coalition needed for passage, arguing it was critical to competing with China in advanced technology.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, criticizing provisions in the climate and healthcare package as poorly targeted tax increases that would burden Indiana\'s manufacturing sector. He objected in particular to the book minimum tax on corporations, which he argued would reduce investment in U.S. factories.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, including provisions supporting Indiana\'s Camp Atterbury Joint Maneuver Training Center and Crane Naval Surface Warfare Center. Young used his Commerce and Intelligence seats to advance cybersecurity and workforce provisions in the bill.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, citing provisions extending the 2017 TCJA tax cuts as essential to Indiana\'s manufacturing and innovation economy. As a member of the Senate Finance Committee, Young highlighted the bill\'s R&D expensing provisions as a boost for Indiana semiconductor and tech companies attracted by the CHIPS Act.',
      },
    ],
    keyBills: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        summary: 'Co-authored the CHIPS and Science Act with Sen. Chuck Schumer, authorizing $52 billion in semiconductor manufacturing incentives and $200 billion in science and technology funding. The bill attracted major chip investment commitments to the United States and was designed to counter China\'s state-subsidized technology industry.',
      },
      {
        title: 'Endless Frontier Act (predecessor to CHIPS)',
        year: 2021,
        month: 5,
        summary: 'Introduced the Endless Frontier Act alongside Rep. Ro Khanna, proposing a major expansion of the National Science Foundation\'s technology directorate and reshoring of advanced manufacturing. This bill evolved into the CHIPS and Science Act and established Young as Congress\'s leading voice on industrial policy and innovation competitiveness.',
      },
    ],
  },

  {
    bioguideId: 'B001299',
    slug: 'jim-banks',
    name: 'Jim Banks',
    party: 'R',
    chamber: 'Senate',
    state: 'Indiana',
    currentTitle: 'U.S. Senator from Indiana',
    bio: 'Jim Banks was elected to the U.S. Senate from Indiana in 2024, having previously served four terms in the House where he chaired the Republican Study Committee and was a prominent voice on defense and immigration policy. A Navy Reserve officer who deployed to Afghanistan, Banks has consistently championed military readiness, border security, and conservative social policy. He is one of the most reliably conservative voices in the Indiana delegation.',
    sinceYear: 2017,
    committees: [
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, the first bill signed in the 119th Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Banks had been a longtime advocate for stricter immigration enforcement in the House and was an early supporter of the measure in the Senate.',
      },
      {
        title: 'Against Bipartisan Border Security Framework',
        year: 2024,
        month: 2,
        position: 'Against',
        summary: 'Voted against the bipartisan border security legislation negotiated by Sens. Lankford, Murphy, and Sinema, arguing it provided too much administrative flexibility to the executive branch on immigration enforcement. Banks argued only a return to Title 42-era policies and wall construction would meaningfully reduce illegal crossings.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting increased defense spending and provisions for military readiness. Banks championed language strengthening service member standards and opposing DEI-related Pentagon initiatives, which he had made a signature issue during his time on the House Armed Services Committee.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, emphasizing its border security funding and immigration enforcement provisions as long-overdue correctives for Indiana and the nation. As a member of the Senate Armed Services Committee, Banks also highlighted increased defense spending in the package as critical to military readiness and national security.',
      },
    ],
    keyBills: [
      {
        title: 'Stopping New Amnesty Program Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation to block Biden administration administrative actions granting work authorizations to certain undocumented immigrants, arguing they exceeded executive authority. The bill was part of Banks\'s broader effort to use Congress\'s oversight power to constrain executive immigration discretion.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M001214',
    slug: 'frank-j-mrvan',
    name: 'Frank J. Mrvan',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 1st District',
    bio: 'Frank Mrvan has represented Indiana\'s 1st Congressional District — the northwest corner of the state anchored by Hammond and Gary — since 2021. A former Lake County Council President with deep roots in Calumet Region labor politics, he serves on the House Appropriations Committee and focuses on protecting steelworker jobs, infrastructure investment, and veterans\' services for one of Indiana\'s most industrialized districts.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, highlighting its significance for northwest Indiana\'s aging roads, bridges, and port infrastructure. The 1st District is home to the Indiana Harbor, one of the nation\'s busiest steel-producing ports, and Mrvan argued the investment would protect manufacturing jobs and modernize the region\'s freight network.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing provisions supporting domestic steel manufacturing and union-made clean energy products. The bill\'s domestic content requirements for electric vehicles and energy equipment were particularly important to northwest Indiana\'s steelworkers, who produce much of the nation\'s flat-rolled steel.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican reconciliation bill, arguing Medicaid cuts and SNAP reductions would harm working families in the Calumet Region. Mrvan highlighted that thousands of Lake County residents rely on both programs and that the bill\'s changes to Medicaid work requirements would disrupt access to healthcare for steelworkers between jobs.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that Medicaid cuts would strip coverage from thousands of northwest Indiana steelworkers and their families who cycle between union jobs and periods of unemployment. As a member of the House Appropriations Committee, Mrvan argued the bill gutted the safety-net investments that sustain the Calumet Region\'s working-class communities.',
      },
    ],
    keyBills: [
      {
        title: 'Buy American Improvement Act',
        year: 2022,
        month: 3,
        summary: 'Championed legislation strengthening Buy American requirements for federally funded infrastructure projects, ensuring domestic steel and manufactured goods are used in highway, bridge, and transit construction. The bill directly addressed the interests of northwest Indiana\'s steel industry, which supplies the national infrastructure market.',
      },
    ],
  },

  {
    bioguideId: 'Y000067',
    slug: 'rudy-yakym-iii',
    name: 'Rudy Yakym III',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 2nd District',
    bio: 'Rudy Yakym III has represented Indiana\'s 2nd Congressional District — covering South Bend and Elkhart County — since winning a 2022 special election to fill the seat of the late Jackie Walorski. A businessman and former Notre Dame graduate with a background in financial services, he serves on the House Ways and Means Committee and focuses on trade, manufacturing, and fiscal policy relevant to Elkhart\'s major RV industry.',
    sinceYear: 2022,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act Extension provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted to extend provisions of the 2017 Tax Cuts and Jobs Act through the House Republican reconciliation bill, arguing that allowing them to expire would amount to a tax increase on Indiana families and small businesses. As a Ways and Means Committee member, Yakym helped shape the tax title of the legislation.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes, a priority for the conservative 2nd District. Yakym has supported stricter immigration enforcement as part of his overall policy agenda.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, highlighting tax cut extensions he helped craft through the House Ways and Means Committee as vital to South Bend and Elkhart County\'s small business and RV manufacturing sectors. Yakym argued that making TCJA provisions permanent would give Indiana businesses the long-term certainty needed for capital investment and job creation.',
      },
    ],
    keyBills: [
      {
        title: 'RV Industry Trade Provisions',
        year: 2023,
        month: 7,
        summary: 'Advocated within the Ways and Means Committee for trade policies protecting the recreational vehicle manufacturing industry centered in Elkhart County — the "RV Capital of the World." Elkhart produces the vast majority of American-made RVs, and Yakym has worked to ensure trade agreements and tariff structures do not disadvantage this key constituency.',
      },
    ],
  },

  {
    bioguideId: 'S001188',
    slug: 'marlin-a-stutzman',
    name: 'Marlin A. Stutzman',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 3rd District',
    bio: 'Marlin Stutzman returned to Congress in 2025 to represent Indiana\'s 3rd District, having previously served from 2010 to 2017 — including two Senate primary campaigns. A Fort Wayne-area farmer with deep roots in agriculture and conservative fiscal policy, he sits on the House Budget and Financial Services Committees. Stutzman is known as a staunch advocate for reducing federal spending and agricultural interests in northeast Indiana.',
    sinceYear: 2010,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its provisions extending the 2017 tax cuts, reducing Medicaid spending, and cutting non-defense discretionary programs. Stutzman has long championed fiscal restraint and supported the bill as a vehicle for the spending discipline he has advocated since his first congressional tenure.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating federal detention of undocumented immigrants charged with violent crimes. Stutzman has been a consistent advocate for stronger immigration enforcement throughout his political career.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using his House Budget Committee seat to champion the bill\'s spending discipline and reductions in non-defense discretionary programs. Stutzman emphasized provisions curbing federal outlays and extending the 2017 tax cuts as essential for northeast Indiana\'s farm families and small businesses facing rising costs.',
      },
    ],
    keyBills: [
      {
        title: 'Farm Program Payment Limitation Reform',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation to reform payment limits on federal farm program subsidies, reflecting his longtime interest in directing agricultural support to working family farms rather than large corporate operations. Stutzman, a farmer himself, has pursued similar reforms across his congressional tenures.',
      },
    ],
  },

  {
    bioguideId: 'B001307',
    slug: 'james-r-baird',
    name: 'James R. Baird',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 4th District',
    bio: 'James Baird has represented Indiana\'s 4th Congressional District — covering Lafayette and the Purdue University area — since 2019. A retired Purdue entomology professor and former Indiana state representative, he brings a scientific background to the House Agriculture, Science and Technology, and Foreign Affairs Committees. Baird focuses on agricultural research, rural broadband, and workforce development tied to Purdue\'s land-grant mission.',
    sinceYear: 2019,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, emphasizing the bill\'s significance for Purdue University\'s research enterprise and Indiana\'s growing semiconductor workforce. The legislation\'s R&D provisions directly supported the kind of university-industry partnerships that anchor the 4th District\'s knowledge economy.',
      },
      {
        title: 'Farm Bill Reauthorization Support',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Voted to advance farm bill reauthorization through the House Agriculture Committee, supporting commodity support programs for corn and soybean farmers who make up a large share of the 4th District\'s rural economy. Baird pushed for provisions expanding agricultural research funding tied to land-grant universities like Purdue.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, citing its extended tax cuts and regulatory relief as critical to Purdue University\'s research partnerships with Indiana\'s growing technology and agricultural sectors. Baird highlighted provisions through his Agriculture and Science committees that he argued would reduce the regulatory burden on the 4th District\'s corn, soybean, and advanced manufacturing industries.',
      },
    ],
    keyBills: [
      {
        title: 'Agricultural Research and Extension Improvement Act',
        year: 2021,
        month: 9,
        summary: 'Introduced legislation increasing investment in USDA cooperative extension programs that link land-grant universities with farmers and rural communities. Drawing on his 30-year career as a Purdue professor, Baird argued that extension programs are among the highest-return federal investments in agricultural productivity and rural quality of life.',
      },
    ],
  },

  {
    bioguideId: 'S000929',
    slug: 'victoria-spartz',
    name: 'Victoria Spartz',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 5th District',
    bio: 'Victoria Spartz has represented Indiana\'s 5th Congressional District — suburban Hamilton County north of Indianapolis — since 2021. Born in Ukraine, she is a CPA and former Indiana state senator who brings a distinctive perspective on fiscal policy and foreign affairs. A fierce critic of Ukrainian government corruption as well as Russian aggression, she gained national attention for her nuanced and sometimes contrarian stance on U.S. aid to Ukraine. She serves on the Joint Economic Committee.',
    sinceYear: 2021,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Ukraine Aid Package — Present Vote',
        year: 2024,
        month: 4,
        position: 'Present',
        summary: 'Voted "present" on the $61 billion Ukraine supplemental aid package, a notable departure from both Republican opponents and Democratic supporters. Spartz, who was born in Ukraine and has visited the country during wartime, argued the package lacked sufficient oversight and anti-corruption safeguards to ensure funds were used effectively.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the debt ceiling deal suspending the debt limit in exchange for discretionary spending caps, supporting the measure as a step toward fiscal discipline even though she preferred deeper cuts. Spartz has consistently emphasized deficit reduction as a top priority.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its tax and spending provisions as consistent with her longstanding fiscal conservatism. Spartz had previously threatened to withhold support unless the bill contained more aggressive deficit reduction measures.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, arguing through her Joint Economic Committee platform that the bill\'s tax relief and spending efficiency measures would rein in deficits harmful to Hamilton County\'s suburban families and small business owners. Spartz, who grew up in Soviet-era Ukraine, used the vote to highlight what she described as the dangers of unchecked government spending to long-term economic freedom.',
      },
    ],
    keyBills: [
      {
        title: 'HALT Fentanyl Act',
        year: 2023,
        month: 5,
        summary: 'Co-sponsored legislation permanently scheduling fentanyl analogues as Schedule I controlled substances under the Controlled Substances Act. Spartz has been an active voice on the opioid crisis affecting Hamilton County and suburban Indianapolis communities.',
      },
    ],
  },

  {
    bioguideId: 'S001229',
    slug: 'jefferson-shreve',
    name: 'Jefferson Shreve',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 6th District',
    bio: 'Jefferson Shreve has represented Indiana\'s 6th Congressional District — a sprawling rural district covering central and southeast Indiana — since 2025. A businessman and entrepreneur who founded and sold Storage Express, he previously ran unsuccessfully for Indianapolis mayor in 2023 before winning the House seat. He serves on the Foreign Affairs and Transportation and Infrastructure Committees, focusing on rural economic development and trade.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill in his first major legislative vote, supporting the tax cut extensions and spending reductions consistent with his fiscally conservative campaign platform. Shreve emphasized provisions he argued would benefit small business owners and rural communities in the 6th District.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act as one of his first votes in Congress, supporting mandatory ICE detention of undocumented immigrants charged with violent crimes. Immigration enforcement was a key issue in his 2024 campaign.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, emphasizing tax cut extensions and spending reductions as foundational to economic growth for the rural 6th District\'s small business owners and agricultural producers. Shreve, drawing on his entrepreneurial background, highlighted the bill\'s relief for pass-through businesses through his work on the Transportation and Infrastructure Committee and argued fiscal restraint was essential to keeping federal costs from crowding out private investment.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Infrastructure Investment provisions',
        year: 2025,
        month: 3,
        summary: 'Advocated through the Transportation and Infrastructure Committee for rural road and bridge funding targeted to Indiana\'s 6th District, one of the most geographically expansive districts in the state. Shreve has emphasized that rural infrastructure access is foundational to agricultural commerce and economic opportunity in the district.',
      },
    ],
  },

  {
    bioguideId: 'C001072',
    slug: 'andre-carson',
    name: 'André Carson',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 7th District',
    bio: 'André Carson has represented Indiana\'s 7th Congressional District — Indianapolis and its inner suburbs — since winning a 2008 special election. One of two Muslim members of Congress, he is a former Indianapolis Police detective and Marion County Sheriff\'s deputy who has focused on intelligence oversight, transportation infrastructure, and civil liberties. He serves on the House Intelligence Committee and the Transportation and Infrastructure Committee, and has been a consistent voice for criminal justice reform and urban investment.',
    sinceYear: 2008,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, highlighting its importance for Indianapolis\'s aging road, transit, and water infrastructure. Carson championed transit provisions supporting IndyGo\'s rapid transit expansion and lead pipe replacement funding for older Indianapolis neighborhoods.',
      },
      {
        title: 'Reauthorization of Section 702 FISA',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against reauthorization of Section 702 of the Foreign Intelligence Surveillance Act, citing concerns about warrantless surveillance of American citizens. As an Intelligence Committee member, Carson has consistently pushed for stronger civil liberties protections in intelligence authorities and opposed searches of U.S. persons\' data collected under 702.',
      },
      {
        title: 'American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, emphasizing direct payments, rental assistance, and local government funding that benefited Indianapolis residents disproportionately affected by the pandemic. Indianapolis\'s communities of color — heavily represented in the 7th District — experienced some of the worst COVID health and economic impacts.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that Medicaid cuts and clean energy rollbacks would devastate Indianapolis\'s urban communities and put thousands of 7th District residents at risk of losing healthcare coverage. As a member of the House Intelligence and Transportation Committees, Carson also raised concerns that the bill\'s reductions to transit and broadband funding would set back Indianapolis\'s infrastructure modernization.',
      },
    ],
    keyBills: [
      {
        title: 'Security Clearance Improvement Act',
        year: 2022,
        month: 6,
        summary: 'Introduced legislation reforming the federal security clearance process to reduce the backlog of pending adjudications and address racial disparities in clearance outcomes. Carson drew on his Intelligence Committee experience and law enforcement background to identify systemic inefficiencies affecting both national security and workforce diversity in the intelligence community.',
      },
    ],
  },

  {
    bioguideId: 'M001233',
    slug: 'mark-b-messmer',
    name: 'Mark B. Messmer',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 8th District',
    bio: 'Mark Messmer has represented Indiana\'s 8th Congressional District — covering the southwestern corner of the state including Terre Haute and Evansville — since 2025. A former Indiana state senator who served as President Pro Tempore of the Indiana Senate, he brings extensive legislative experience to the House Agriculture, Armed Services, and Education and Workforce Committees. He is focused on agriculture, defense manufacturing, and workforce training in a district with significant coal and energy industry presence.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting provisions extending the 2017 tax cuts and reducing regulatory burdens on energy producers. Messmer has emphasized energy production and agricultural support as core priorities for the 8th District.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in one of his first votes in Congress, supporting mandatory detention of undocumented immigrants charged with violent crimes. Border security was a key issue in his 2024 campaign.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, supporting its provisions reducing regulatory burdens on Indiana\'s energy producers and extending the 2017 tax cuts for southwestern Indiana\'s manufacturing and coal communities. Messmer used his seats on the Agriculture and Education and Workforce Committees to advocate for retaining agricultural support programs and workforce training funding within the bill\'s spending framework.',
      },
    ],
    keyBills: [
      {
        title: 'Apprenticeship and Workforce Training provisions',
        year: 2025,
        month: 3,
        summary: 'Advocated through the Education and Workforce Committee for expanded apprenticeship programs and vocational training funding, drawing on his Indiana Senate experience developing workforce policy. The 8th District has significant need for skilled trade workers in manufacturing, construction, and energy production.',
      },
    ],
  },

  {
    bioguideId: 'H001093',
    slug: 'erin-houchin',
    name: 'Erin Houchin',
    party: 'R',
    chamber: 'House',
    district: 9,
    state: 'Indiana',
    currentTitle: 'U.S. Representative, Indiana 9th District',
    bio: 'Erin Houchin has represented Indiana\'s 9th Congressional District — the southeastern corner of the state including Columbus and New Albany — since 2023. A former Indiana state senator who worked in banking and financial services, she serves on the Rules, Budget, and Energy and Commerce Committees — an unusually powerful freshman assignment on Rules that reflects her close ties to House Republican leadership. She focuses on fiscal conservatism, technology regulation, and rural economic opportunity.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the debt ceiling deal suspending the limit in exchange for discretionary spending caps. As a member of the Budget Committee, Houchin supported the agreement as a step toward the fiscal restraint she had championed during her Indiana Senate tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill after helping advance it through the Rules Committee. Houchin supported the bill\'s tax and spending provisions and used her Rules Committee seat to shape the terms under which the legislation reached the floor.',
      },
      {
        title: 'AI Regulatory Framework Discussion Draft',
        year: 2024,
        month: 9,
        position: 'For',
        summary: 'Supported a House Energy and Commerce Committee discussion draft establishing a federal framework for artificial intelligence regulation, emphasizing innovation-friendly guardrails. Houchin has been active on technology policy through her Energy and Commerce assignment, focusing on ensuring federal AI rules do not stifle the tech industry in Indiana.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package after helping advance it through the Rules Committee, using her triple committee assignment on Rules, Budget, and Energy and Commerce to shape the bill\'s final form. Houchin highlighted the tax cut extensions and Medicaid efficiency reforms as essential fiscal corrections for southeastern Indiana\'s families and small businesses.',
      },
    ],
    keyBills: [
      {
        title: 'Digital Asset Market Structure provisions',
        year: 2023,
        month: 7,
        summary: 'Championed digital asset and cryptocurrency regulatory clarity through the Energy and Commerce Committee, drawing on her financial services background. Houchin argued that clear federal rules for digital assets would protect consumers while enabling financial innovation.',
      },
    ],
  },
]

export const inDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

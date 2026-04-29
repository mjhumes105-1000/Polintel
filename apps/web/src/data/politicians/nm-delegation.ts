import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'H001046',
    slug: 'martin-heinrich',
    name: 'Martin Heinrich',
    party: 'D',
    chamber: 'Senate',
    state: 'New Mexico',
    currentTitle: 'U.S. Senator from New Mexico',
    bio: 'Martin Heinrich has served New Mexico in the U.S. Senate since 2013, having previously represented Albuquerque in the U.S. House. A mechanical engineer by training and former Albuquerque City Councilor, he serves as Ranking Member on the Senate Energy and Natural Resources Committee and sits on the Intelligence and Appropriations Committees. He has been a leading Senate voice on public lands conservation, clean energy development, and intelligence oversight, and is closely aligned with New Mexico\'s significant outdoor economy and national laboratory presence.',
    sinceYear: 2009,
    committees: [
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, which he helped shape through the Energy Committee to include major clean energy tax credits and historic investments in solar, wind, and geothermal development. Heinrich has been one of the Senate\'s leading advocates for transitioning New Mexico\'s economy from oil and gas dependence toward renewable energy development.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, securing funding for New Mexico highways, the Albuquerque to Santa Fe passenger rail corridor, and broadband expansion in rural tribal communities. Heinrich used his Appropriations seat to ensure New Mexico-specific provisions reached the final bill.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the $52 billion semiconductor investment bill, arguing it would generate high-skill jobs at New Mexico\'s national laboratories — Sandia National Laboratories and Los Alamos National Laboratory — and in the state\'s emerging technology manufacturing sector.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package as Ranking Member on the Senate Energy and Natural Resources Committee, arguing its repeal of clean energy investment tax credits would reverse billions in solar, wind, and geothermal development already underway in New Mexico. Heinrich warned the bill\'s Medicaid cuts would gut healthcare access across the state\'s rural communities and tribal lands.',
      },
    ],
    keyBills: [
      {
        title: 'Outdoor Recreation Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation expanding access to federal public lands for outdoor recreation and supporting the outdoor economy — New Mexico\'s second-largest economic sector. Heinrich has been a consistent advocate for the conservation and responsible use of New Mexico\'s remarkable public lands, including the Rio Grande del Norte National Monument and the Greater Chaco region.',
      },
      {
        title: 'New Mexico National Laboratories Workforce Act',
        year: 2022,
        month: 8,
        summary: 'Introduced legislation supporting workforce development pipelines from New Mexico universities to Sandia and Los Alamos National Laboratories. The labs are among New Mexico\'s largest employers and critical to the nation\'s nuclear weapons stockpile stewardship program, and Heinrich has consistently worked to strengthen their funding and workforce through appropriations and authorization processes.',
      },
    ],
  },

  {
    bioguideId: 'L000570',
    slug: 'ben-ray-lujan',
    name: 'Ben Ray Luján',
    party: 'D',
    chamber: 'Senate',
    state: 'New Mexico',
    currentTitle: 'U.S. Senator from New Mexico',
    bio: 'Ben Ray Luján was elected to the U.S. Senate from New Mexico in 2020 after serving six terms in the U.S. House representing the state\'s 3rd District. A native of Nambé, New Mexico, and a member of a prominent northern New Mexico political family, he previously chaired the Democratic Congressional Campaign Committee during the party\'s 2018 wave. He sits on the Commerce, Agriculture, and Indian Affairs Committees and focuses on rural broadband, tribal sovereignty, healthcare access, and infrastructure for New Mexico\'s diverse communities.',
    sinceYear: 2009,
    committees: [
      { slug: 'scnc', name: 'United States Senate Caucus on International Narcotics Control', chamber: 'Senate', role: 'Member' },
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law after advocating extensively for its rural broadband provisions, which are particularly important for New Mexico\'s tribal nations and rural Hispanic communities that remain among the least-connected in the country. Luján survived a major stroke in January 2022 and returned to the Senate to continue his advocacy for the bill\'s implementation.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its healthcare provisions including ACA subsidy extensions and Medicare drug pricing reform that he argued would most benefit New Mexico\'s large uninsured and underinsured population, which includes many tribal and rural residents.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the semiconductor investment bill, arguing it would drive economic opportunity to New Mexico through investments in the state\'s national laboratories and support growth of a tech-manufacturing corridor near Albuquerque.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package as Ranking Member on the Senate Energy and Natural Resources Committee, warning that its rollback of clean energy tax credits would devastate New Mexico\'s growing solar and wind industries. Luján argued the bill\'s Medicaid cuts would disproportionately harm the state\'s large uninsured rural and tribal populations who depend on ACA coverage.',
      },
    ],
    keyBills: [
      {
        title: 'Tribal Connectivity Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation establishing a dedicated tribal broadband fund and streamlining spectrum access for tribal nations deploying their own wireless networks. Nearly a third of homes on tribal lands in New Mexico lack any broadband access, and Luján has made closing the tribal digital divide one of his signature legislative priorities since his House tenure.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'S001218',
    slug: 'melanie-a-stansbury',
    name: 'Melanie A. Stansbury',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'New Mexico',
    currentTitle: 'U.S. Representative, New Mexico 1st District',
    bio: 'Melanie Stansbury has represented New Mexico\'s 1st Congressional District since 2021, winning a special election to succeed Deb Haaland who became Secretary of the Interior. A former New Mexico State Representative and policy analyst with a background in natural resource management, she sits on the House Natural Resources and Oversight Committees. Her district covers Albuquerque — New Mexico\'s largest city — and she focuses on clean energy transition, tribal sovereignty, and economic opportunity for working families.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, particularly celebrating its clean energy investment provisions that she argued would accelerate New Mexico\'s transition away from fossil fuel dependence. Albuquerque\'s national laboratories and tech sector stand to benefit from clean energy and scientific research investment.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, using her Natural Resources Committee work to advocate for funding addressing Albuquerque\'s aging water infrastructure and Rio Grande ecosystem restoration. She highlighted the legislation\'s importance for New Mexico\'s water-stressed communities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seat on the House Natural Resources Committee, warning that its rollback of clean energy provisions would stall solar deployment and harm Albuquerque\'s national laboratory jobs tied to renewable energy research. Stansbury highlighted the bill\'s deep Medicaid cuts as an existential threat to New Mexico\'s most vulnerable families in one of the nation\'s poorest states.',
      },
    ],
    keyBills: [
      {
        title: 'Tribal Sacred Sites Protection Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation strengthening federal protections for tribal sacred sites on public lands, addressing longstanding concerns from New Mexico\'s 23 sovereign tribal nations and pueblos. Stansbury has prioritized tribal consultation and sovereignty as foundational to responsible federal land management in a state where tribal lands constitute a significant portion of the landscape.',
      },
    ],
  },

  {
    bioguideId: 'V000136',
    slug: 'gabe-vasquez',
    name: 'Gabe Vasquez',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'New Mexico',
    currentTitle: 'U.S. Representative, New Mexico 2nd District',
    bio: 'Gabe Vasquez was elected to New Mexico\'s 2nd Congressional District in 2022, defeating Republican incumbent Yvette Herrell in a competitive race. A former Las Cruces City Councilor and environmental advocate with a background in community organizing, he serves on the House Agriculture and Armed Services Committees. His district covers southern New Mexico — including Las Cruces, Roswell, and the Permian Basin oil country — and he focuses on border community priorities, water access, and White Sands economic development.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act implementation',
        year: 2023,
        month: 4,
        position: 'For',
        summary: 'Supported and advocated for infrastructure law funding reaching southern New Mexico\'s communities, particularly for the US-Mexico border crossings at Santa Teresa and Columbus that are critical to the district\'s trade economy. Vasquez has focused on ensuring infrastructure investments reach New Mexico\'s underserved border communities.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing its Medicaid work requirements and SNAP cuts would harm southern New Mexico\'s border communities where poverty rates are high and federal assistance programs serve a critical safety net function. Vasquez was particularly critical of proposed cuts to agricultural support programs he argued would harm the district\'s pecan and chile farming operations.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from his seat on the House Agriculture Committee, arguing its SNAP cuts and Medicaid reductions would devastate southern New Mexico\'s high-poverty border communities and harm the pecan and chile farmers who depend on agricultural safety-net programs. Vasquez also decried the bill\'s clean energy rollbacks as a setback for rural economic diversification in a district grappling with the declining Permian Basin oil economy.',
      },
    ],
    keyBills: [
      {
        title: 'Border Community Water Security Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation addressing severe water scarcity in southern New Mexico\'s border communities, particularly the colonias — unincorporated communities along the US-Mexico border that often lack basic water and sewer infrastructure. The bill sought federal investment in water system construction and conservation in one of the most water-stressed regions of the American Southwest.',
      },
    ],
  },

  {
    bioguideId: 'L000273',
    slug: 'teresa-leger-fernandez',
    name: 'Teresa Leger Fernandez',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'New Mexico',
    currentTitle: 'U.S. Representative, New Mexico 3rd District',
    bio: 'Teresa Leger Fernandez has represented New Mexico\'s 3rd Congressional District since 2021, succeeding Ben Ray Luján who moved to the Senate. A civil rights attorney who spent decades advocating for voting rights and tribal sovereignty, she is a member of the House Rules Committee and the Natural Resources Committee. Her district covers the vast northern and western portions of New Mexico, including Santa Fe, Taos, Gallup, and large portions of the Navajo Nation, and she focuses on tribal sovereignty, voting rights, and economic justice.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'John Lewis Voting Rights Advancement Act',
        year: 2021,
        month: 8,
        position: 'For',
        summary: 'Voted for the John Lewis Voting Rights Advancement Act, which would have restored key provisions of the Voting Rights Act weakened by Supreme Court decisions. As a civil rights attorney who spent her career fighting for voting rights in Native American and Hispanic communities, Leger Fernandez was one of the bill\'s most vocal House advocates.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, championing provisions for Navajo Nation water infrastructure and rural broadband that directly address longstanding federal infrastructure deficits in her district. The Navajo Nation — the largest tribal land area in the US — still lacks basic water access for thousands of households.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, highlighting its tribal energy provisions and healthcare subsidies. Leger Fernandez focused on the bill\'s tribal energy loan guarantee programs as critical to enabling tribal nations to develop their own solar and wind resources on sovereign lands.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 reconciliation package from her seat on the House Rules Committee, arguing the bill\'s Medicaid cuts and elimination of tribal energy loan guarantees would cause immediate, severe harm to the Navajo Nation and Pueblo communities that make up a large portion of her district. Leger Fernandez highlighted the bill\'s clean energy rollbacks as a direct attack on tribal sovereignty efforts to develop renewable resources on sovereign lands.',
      },
    ],
    keyBills: [
      {
        title: 'Navajo Water Security Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation addressing the Navajo Nation\'s water rights settlement and infrastructure investment, working to ensure federal trust responsibility for water access is fulfilled for New Mexico\'s largest tribal nation. Tens of thousands of Navajo Nation residents lack running water in their homes — one of the most acute infrastructure deficits in the United States — and Leger Fernandez has made Navajo water access a flagship legislative priority.',
      },
    ],
  },
]

export const nmDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

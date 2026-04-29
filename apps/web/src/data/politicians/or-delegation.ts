import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'W000779',
    slug: 'ron-wyden',
    name: 'Ron Wyden',
    party: 'D',
    chamber: 'Senate',
    state: 'Oregon',
    currentTitle: 'U.S. Senator from Oregon',
    bio: 'Ron Wyden has served in the U.S. Senate since 1996 and previously in the House since 1981, making him one of the longest-serving members of Congress from Oregon. He served as Chair of the Senate Finance Committee from 2021 to 2025 and is now the committee\'s Ranking Member. A longtime advocate for privacy rights, healthcare access, and trade policy, Wyden is known for his annual town hall meetings in every Oregon county and his use of Senate procedure — including holds — to block legislation he considers a threat to civil liberties.',
    sinceYear: 1981,
    committees: [
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'jstx', name: 'Joint Committee on Taxation', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'As Senate Finance Committee Chair, Wyden was a chief architect of the Inflation Reduction Act, negotiating its healthcare, climate, and tax provisions. He authored the bill\'s landmark Medicare drug price negotiation authority, which he had championed for decades, and shepherded the $369 billion climate and clean energy investment package through the Finance Committee.',
      },
      {
        title: 'USA FREEDOM Act Reauthorization',
        year: 2020,
        month: 5,
        position: 'Against',
        summary: 'Wyden voted against the reauthorization of the USA FREEDOM Act, consistent with his decades-long opposition to warrantless surveillance. He has been one of the Senate\'s most persistent critics of NSA bulk collection programs since the Snowden revelations in 2013 and argued the reauthorization preserved authorities that violated Americans\' Fourth Amendment rights.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing its tax cuts disproportionately benefited the wealthy while its Medicaid cuts and SNAP reductions would harm Oregon\'s most vulnerable residents. As Finance Ranking Member, Wyden led Senate Democratic opposition to the bill\'s revenue provisions.',
      },
    ],
    keyBills: [
      {
        title: 'Inflation Reduction Act — Medicare Drug Negotiation',
        year: 2022,
        month: 8,
        summary: 'Wyden was the primary Senate author of the Medicare drug price negotiation provisions in the Inflation Reduction Act, allowing the federal government to negotiate prices directly with pharmaceutical companies for the first time. He had championed this reform for over two decades and the IRA\'s passage represented the culmination of his Finance Committee work on prescription drug affordability.',
      },
      {
        title: 'SAFE Banking Act — Cannabis Finance',
        year: 2023,
        month: 9,
        summary: 'Co-authored legislation allowing banks to provide financial services to state-legal cannabis businesses without federal penalty — a critical issue for Oregon\'s legal cannabis industry. Wyden argued that forcing cannabis businesses to operate on a cash-only basis created public safety risks and denied small business owners access to credit and standard banking services.',
      },
    ],
  },

  {
    bioguideId: 'M001176',
    slug: 'jeff-merkley',
    name: 'Jeff Merkley',
    party: 'D',
    chamber: 'Senate',
    state: 'Oregon',
    currentTitle: 'U.S. Senator from Oregon',
    bio: 'Jeff Merkley has represented Oregon in the U.S. Senate since 2009, having previously served as Speaker of the Oregon House of Representatives. He is the Ranking Member of the Senate Budget Committee and serves on the Appropriations, Environment, and Joint Printing Committees. Merkley has been a leading progressive voice on climate change, housing affordability, and campaign finance reform, and was the only sitting senator to endorse Bernie Sanders in the 2016 presidential primary.',
    sinceYear: 2009,
    committees: [
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'jspr', name: 'Joint Committee on Printing', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, which Merkley argued was necessary to restore Oregon\'s economy and support the state\'s hard-hit hospitality, tourism, and small business sectors. He used his Appropriations seat to push for housing stability assistance and childcare funding in the final bill.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its landmark climate and clean energy investments as the most significant climate legislation in American history. Merkley has been one of the Senate\'s most persistent climate advocates and viewed the bill\'s $369 billion in clean energy investment as a critical down payment on addressing the climate crisis.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill as Senate Budget Ranking Member, arguing the bill\'s $5 trillion in tax cuts primarily benefited corporations and the ultra-wealthy while the Medicaid and nutrition cuts devastated Oregon\'s most vulnerable communities. Merkley led Democratic messaging framing the bill as a "wealth transfer" from working families to billionaires.',
      },
    ],
    keyBills: [
      {
        title: 'Climate Accountability and Resilience Act',
        year: 2023,
        month: 7,
        summary: 'Introduced comprehensive climate legislation requiring the federal government to account for the full social cost of carbon in all spending and regulatory decisions, and setting enforceable emissions reduction targets. Merkley framed the bill as building the institutional framework necessary to implement the Paris Agreement commitments and ensure long-term climate accountability.',
      },
      {
        title: 'For the People Act — Voting and Campaign Finance Reform',
        year: 2021,
        month: 3,
        summary: 'Was a lead Senate sponsor of the For the People Act, the comprehensive democracy reform bill that passed the House but failed to advance in the Senate. Merkley has been a consistent advocate for campaign finance reform and voting rights expansion, and Oregon\'s automatic voter registration system — which he championed as a state legislator — became a national model adopted in the federal legislation.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'B001278',
    slug: 'suzanne-bonamici',
    name: 'Suzanne Bonamici',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 1st District',
    bio: 'Suzanne Bonamici has represented Oregon\'s 1st Congressional District — covering Washington County and the northern Portland suburbs — since 2012. A former Oregon state legislator and attorney, she sits on the House Education and Workforce Committee and the Science, Space, and Technology Committee. Bonamici is a national leader on STEM education, career and technical training, and ocean plastic pollution, and has championed legislation making Oregon a model for equity-focused education reform.',
    sinceYear: 2012,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, citing its school reopening funds, childcare stabilization grants, and college student aid provisions that directly benefited her district\'s education sector. Bonamici highlighted the bill\'s $125 billion for K-12 schools as essential for supporting students who experienced significant learning loss during the pandemic.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the bipartisan semiconductor legislation, which includes major science funding through the National Science Foundation and Department of Energy. Oregon\'s semiconductor industry — anchored by Intel\'s massive Washington County campus — stands to benefit directly from both the chip manufacturing incentives and the expanded R&D investment in the bill.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing its education funding cuts and Pell Grant restrictions would harm students in Oregon\'s 1st District and undermine the workforce development programs she has championed. She highlighted the bill\'s elimination of school-based health services as particularly harmful for underserved children.',
      },
    ],
    keyBills: [
      {
        title: 'STEAM Act — Science, Technology, Engineering, Arts, and Mathematics Education',
        year: 2022,
        month: 9,
        summary: 'Has been a leading champion of integrating arts and design into STEM education, authoring legislation expanding STEAM programs in Title I schools and community colleges. Bonamici argues that creative and analytical skills are complementary and that STEAM education better prepares students for the innovation economy, a view supported by her district\'s semiconductor and technology employers.',
      },
      {
        title: 'Break Free From Plastic Pollution Act',
        year: 2023,
        month: 4,
        summary: 'Introduced comprehensive legislation to reduce single-use plastic pollution by shifting responsibility for plastic waste management from consumers to producers. The bill establishes producer responsibility programs, phases out unnecessary single-use plastics, and sets national recycled content standards — building on Oregon\'s long tradition of bottle deposit and recycling programs.',
      },
    ],
  },

  {
    bioguideId: 'B000668',
    slug: 'cliff-bentz',
    name: 'Cliff Bentz',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 2nd District',
    bio: 'Cliff Bentz has represented Oregon\'s 2nd Congressional District — the massive, predominantly rural eastern and southern Oregon district — since 2021. A former Oregon state representative and attorney specializing in water law, he sits on the House Natural Resources Committee and Energy and Commerce Committee. Bentz is the sole Republican in Oregon\'s congressional delegation and focuses on water rights, public land management, timber policy, and energy development critical to the ranching, farming, and resource industries that dominate his vast district.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal suspending the debt limit in exchange for discretionary spending caps. Bentz supported the bill as a necessary compromise that restrained federal spending growth while avoiding a catastrophic default that would have harmed eastern Oregon\'s agricultural credit markets.',
      },
      {
        title: 'One Big Beautiful Bill — Natural Resources Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its provisions expanding domestic energy production on federal lands and streamlining environmental permitting. Bentz has been a consistent critic of what he calls excessive NEPA bureaucracy that delays timber harvests, mining permits, and energy development on the federal lands dominating his district.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its methane fees and clean energy mandates would raise energy costs for eastern Oregon\'s rural communities and undermine domestic energy production. He objected to the bill\'s expansion of federal regulatory authority over water and land use practices affecting ranchers in the 2nd District.',
      },
    ],
    keyBills: [
      {
        title: 'Western Water Security Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation addressing chronic water shortages across Oregon\'s arid eastern counties by reforming federal water storage and delivery infrastructure, strengthening irrigation district water rights, and reducing regulatory barriers to water banking. Bentz\'s background in water law gave him deep expertise on the complex legal framework governing western water rights.',
      },
      {
        title: 'Resilient Federal Forests Act — Oregon Provisions',
        year: 2023,
        month: 3,
        summary: 'Championed provisions within the Resilient Federal Forests Act expanding active forest management and timber harvesting on federal lands to reduce catastrophic wildfire risk. Eastern Oregon has experienced devastating wildfires in recent years and Bentz argues that environmentally-sound timber harvesting reduces fuel loads while sustaining rural communities dependent on the forest products industry.',
      },
    ],
  },

  {
    bioguideId: 'D000635',
    slug: 'maxine-dexter',
    name: 'Maxine Dexter',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 3rd District',
    bio: 'Maxine Dexter has represented Oregon\'s 3rd Congressional District — covering Portland east of the Willamette and inner suburban communities — since 2025, succeeding the long-serving Earl Blumenauer. A pulmonologist and physician by training, she served in the Oregon State Senate before her election to Congress. Dexter brings a public health and climate lens to her work on the Natural Resources and Veterans\' Affairs Committees, with particular focus on air quality, wildfire smoke impacts, and healthcare access for Oregon veterans.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid cuts would create severe coverage gaps for Portland\'s uninsured and underinsured populations. As a physician, Dexter highlighted the public health consequences of stripping coverage from low-income Oregonians who depend on expanded Medicaid for preventive and primary care.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing mandatory detention provisions would cause significant harm to immigrant communities in Portland without evidence that detention reduces crime. She expressed concern about the bill\'s impact on asylum seekers and undocumented residents with deep community ties in Oregon\'s 3rd District.',
      },
      {
        title: 'FY2026 Interior and Environment Appropriations',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Supported appropriations protecting EPA air quality monitoring programs, wildfire smoke research funding, and National Forest management resources critical for Oregon\'s environmental health. Dexter used her Natural Resources Committee assignment to advocate for increased wildfire research funding, connecting her medical expertise on respiratory disease to public lands management.',
      },
    ],
    keyBills: [
      {
        title: 'Clean Air, Healthy Communities Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation expanding EPA wildfire smoke monitoring networks and funding research on the long-term respiratory health impacts of smoke exposure. As a pulmonologist, Dexter has documented firsthand the surge in respiratory illness during wildfire season in the Pacific Northwest and advocates for treating wildfire smoke as a major public health emergency requiring federal action.',
      },
      {
        title: 'Veterans Environmental Exposure Health Act',
        year: 2025,
        month: 8,
        summary: 'Introduced legislation expanding VA health services for veterans experiencing respiratory and other health conditions linked to environmental exposures during military service, building on the PACT Act. Dexter drew on her clinical background and Veterans\' Affairs Committee work to identify gaps in VA healthcare coverage for exposure-related conditions.',
      },
    ],
  },

  {
    bioguideId: 'H001094',
    slug: 'val-t-hoyle',
    name: 'Val T. Hoyle',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 4th District',
    bio: 'Val T. Hoyle has represented Oregon\'s 4th Congressional District — covering Eugene, Corvallis, and the southern coast — since 2023. A former Oregon state representative and Oregon Labor Commissioner, she brings a strong labor and workers\' rights background to her seats on the Natural Resources and Transportation and Infrastructure Committees. Hoyle\'s district includes the University of Oregon, Oregon State University, and significant timber and fishing industries along the southern coast.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Supported the $1.2 trillion infrastructure law as a state commissioner and carried that priority into Congress. Hoyle has highlighted the law\'s transformative impact on Oregon\'s 4th District including highway safety improvements, broadband expansion into rural coastal communities, and port upgrades on the southern Oregon coast.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing its Medicaid work requirements and SNAP cuts would harm Eugene and the southern coast\'s significant low-income populations. Hoyle used her Labor Commissioner experience to argue the work requirement provisions were administratively unworkable and would cause churning in Medicaid coverage without improving employment outcomes.',
      },
      {
        title: 'PACT Act — Veterans Toxic Exposure',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the PACT Act expanding VA healthcare eligibility for veterans exposed to burn pits and other toxic substances during service. Hoyle\'s district includes a significant veteran population and she has been a consistent advocate for expanding VA services to address the backlog of burn pit and toxic exposure claims.',
      },
    ],
    keyBills: [
      {
        title: 'Oregon Coastal Fishing Communities Support Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation expanding NOAA economic assistance programs for coastal fishing communities facing income disruption from regulatory changes and ocean acidification. The 4th District\'s southern coast fishing industry has faced severe challenges from Dungeness crab fishery closures due to harmful algal blooms, and Hoyle has advocated for federal support to help fishing families weather the transition.',
      },
      {
        title: 'Timber Community Transition and Workforce Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation establishing federal workforce transition assistance for timber workers in communities facing mill closures and reduced federal timber harvests. Drawing on her Labor Commissioner background, Hoyle designed the bill to provide retraining grants, income bridging, and community economic diversification support for timber-dependent Oregon towns.',
      },
    ],
  },

  {
    bioguideId: 'B001326',
    slug: 'janelle-s-bynum',
    name: 'Janelle S. Bynum',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 5th District',
    bio: 'Janelle S. Bynum has represented Oregon\'s 5th Congressional District — covering the southern Portland suburbs, Clackamas County, and the northern Willamette Valley — since 2025. A former Oregon state representative and attorney, she flipped the competitive district by defeating the incumbent Republican in 2024. Bynum sits on the House Financial Services Committee and is the first Black woman elected to Congress from Oregon. She focuses on economic opportunity, healthcare access, and housing affordability.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing its Medicaid cuts and housing subsidy reductions would reverse economic progress in her competitive suburban district. Bynum highlighted the bill\'s elimination of down payment assistance programs as particularly damaging for first-time homebuyers in the high-cost Portland metro area.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing mandatory detention without adequate due process would harm immigrant communities in her district and that the bill conflated criminal status with immigration status in constitutionally problematic ways.',
      },
      {
        title: 'FY2026 Continuing Resolution — Housing Provisions',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing cuts to HUD community development block grants and affordable housing programs affecting Clackamas County. Bynum argued the housing funding reductions would exacerbate the housing affordability crisis in Oregon\'s 5th District, where housing costs have risen sharply and homeownership rates have declined.',
      },
    ],
    keyBills: [
      {
        title: 'Community Reinvestment Act Modernization',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation strengthening the Community Reinvestment Act framework to ensure banks are meeting the credit needs of underserved communities in rapidly suburbanizing areas like Clackamas County. Bynum argued that growing Oregon suburbs with diverse populations face the same credit access barriers as urban communities and should receive stronger CRA coverage.',
      },
      {
        title: 'First-Generation Homebuyer Assistance Act',
        year: 2025,
        month: 9,
        summary: 'Introduced legislation creating down payment assistance grants for first-generation homebuyers — those whose parents did not own a home — to address generational wealth gaps rooted in historical housing discrimination. The bill targets communities like those in her district where the legacy of redlining continues to affect homeownership rates by race.',
      },
    ],
  },

  {
    bioguideId: 'S001226',
    slug: 'andrea-salinas',
    name: 'Andrea Salinas',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Oregon',
    currentTitle: 'U.S. Representative, Oregon 6th District',
    bio: 'Andrea Salinas has represented Oregon\'s 6th Congressional District — a newly drawn district covering the mid-Willamette Valley including Salem, McMinnville, and the northern coast — since 2023. A former Oregon state representative, she is one of the first Latinas elected to Congress from Oregon. Salinas sits on the Agriculture and Science, Space, and Technology Committees, reflecting her district\'s agricultural heritage and tech-connected economy. She focuses on farmworker protections, rural healthcare, and climate-resilient agriculture.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing its SNAP cuts would devastate farmworker families in the Willamette Valley who depend on nutrition assistance. Salinas highlighted that her district\'s agricultural workers — who pick the hazelnuts, grapes, and berries that Oregon is known for — are among the most economically vulnerable and most reliant on federal nutrition and healthcare programs.',
      },
      {
        title: 'Farm Workforce Modernization Act',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Voted for the Farm Workforce Modernization Act, which creates a new agricultural visa program and offers a path to legal status for undocumented farmworkers who have worked in U.S. agriculture for a specified period. Salinas argued the bill was essential for the Willamette Valley\'s labor-intensive fruit, vegetable, and wine grape industries that depend on a stable agricultural workforce.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Supported the Inflation Reduction Act\'s climate and clean energy provisions including investments in climate-smart agriculture that benefit Oregon\'s farmers adapting to drought and heat stress. Salinas also backed the bill\'s prescription drug pricing reforms as essential for her district\'s rural healthcare access.',
      },
    ],
    keyBills: [
      {
        title: 'Farmworker Housing Improvement Act',
        year: 2023,
        month: 10,
        summary: 'Introduced legislation expanding USDA farm labor housing grant programs to address the chronic shortage of safe, affordable housing for agricultural workers in the Willamette Valley. Salinas drew on her experience as a state legislator documenting substandard farmworker housing conditions to design targeted improvements to the federal farm labor housing program.',
      },
      {
        title: 'Rural Health Equity Act',
        year: 2024,
        month: 5,
        summary: 'Introduced legislation addressing healthcare access gaps in Oregon\'s rural and agricultural communities, including provisions expanding community health center funding, increasing rural health workforce incentives, and ensuring language-accessible healthcare services for non-English-speaking patients. The bill targeted the persistent disparities in rural healthcare quality documented in her district\'s agricultural communities.',
      },
    ],
  },
]

export const orDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

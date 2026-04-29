import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'S001150',
    slug: 'adam-schiff',
    name: 'Adam Schiff',
    party: 'D',
    chamber: 'Senate',
    state: 'California',
    currentTitle: 'U.S. Senator from California',
    bio: 'Adam Schiff served 24 years in the House before winning a 2024 Senate race, earning national prominence as lead House impeachment manager in both Trump trials and as chair of the House Intelligence Committee.',
    photoUrl: 'https://www.congress.gov/img/member/677d870dfdb6cf36bbb649b3_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'senate-judiciary', name: 'Senate Judiciary Committee', chamber: 'Senate', role: 'Member', description: 'Oversees federal judicial nominations, immigration law, antitrust enforcement, and constitutional issues. One of the Senate\'s most powerful committees, handling everything from Supreme Court confirmations to criminal justice reform.' },
      { slug: 'senate-intelligence', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member', description: 'Provides congressional oversight of the CIA, NSA, FBI intelligence operations, and all 17 U.S. intelligence agencies. Reviews classified programs and foreign threats to national security.' },
    ],
    notableVote: {
      title: 'Vote Against Pete Hegseth Confirmation for Defense Secretary',
      year: 2025,
      summary: 'Schiff voted against confirming Pete Hegseth as Secretary of Defense in January 2025, citing concerns about Hegseth\'s qualifications and conduct — one of his first significant Senate floor votes.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Schiff, a member of the Senate Judiciary Committee, voted against the FY2026 reconciliation package, warning that its Medicaid cuts would strip healthcare from millions of Californians and that gutting clean energy incentives would undermine his state\'s climate leadership.' },
    ],
    notableBill: {
      title: 'Protecting Democracy Act',
      year: 2025,
      summary: 'Schiff introduced legislation to strengthen democratic guardrails and executive accountability, building on his years as lead impeachment manager and HPSCI chair combating what he views as authoritarian erosion of institutional norms.',
    },
    topSectors: [
      { category: 'Individual Contributors', amount: 28000000, percentage: 72 },
      { category: 'Small-Dollar Donors', amount: 7000000, percentage: 18 },
      { category: 'PACs', amount: 4000000, percentage: 10 },
    ],
  },

  {
    bioguideId: 'P000145',
    slug: 'alex-padilla',
    name: 'Alex Padilla',
    party: 'D',
    chamber: 'Senate',
    state: 'California',
    currentTitle: 'U.S. Senator from California',
    bio: 'Alex Padilla was appointed to the Senate in 2021 by Governor Newsom to fill Kamala Harris\'s seat, becoming the first Latino Senator from California and a leading voice on immigration, voting rights, and environmental justice.',
    photoUrl: 'https://www.congress.gov/img/member/p000145_200.jpg',
    sinceYear: 2021,
    committees: [
      { slug: 'senate-intelligence', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member', description: 'Provides congressional oversight of the CIA, NSA, FBI intelligence operations, and all 17 U.S. intelligence agencies. Reviews classified programs and foreign threats to national security.' },
      { slug: 'senate-judiciary', name: 'Senate Judiciary Committee', chamber: 'Senate', role: 'Member', description: 'Oversees federal judicial nominations, immigration law, antitrust enforcement, and constitutional issues. One of the Senate\'s most powerful committees, handling everything from Supreme Court confirmations to criminal justice reform.' },
    ],
    notableVote: {
      title: 'Against 2025 Budget Reconciliation Cuts to Medicaid',
      year: 2025,
      summary: 'Padilla strongly opposed Republican budget reconciliation proposals in 2025 that would have cut Medicaid funding, warning that millions of Californians — including many in immigrant communities — depend on the program for healthcare coverage.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Padilla, a member of both the Senate Judiciary and Intelligence Committees, opposed the FY2026 reconciliation bill, arguing that proposed Medicaid cuts would devastate immigrant communities and low-income families across California who rely on the program for basic healthcare.' },
    ],
    notableBill: {
      title: 'Dream and Promise Act',
      year: 2023,
      summary: 'Padilla co-sponsored and championed the Dream and Promise Act to provide a pathway to citizenship for DACA recipients and TPS holders, reflecting his district\'s large immigrant population.',
    },
    topSectors: [
      { category: 'Individual Contributors', amount: 12000000, percentage: 60 },
      { category: 'Small-Dollar Donors', amount: 5000000, percentage: 25 },
      { category: 'Labor PACs', amount: 3000000, percentage: 15 },
    ],
  },

  // ── HOUSE — DISTRICTS 1–52 ─────────────────────────────────────────────────

  {
    bioguideId: 'L000566',
    slug: 'doug-lamalfa',
    name: 'Doug LaMalfa',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'California',
    currentTitle: "U.S. Representative, California's 1st Congressional District",
    bio: 'Doug LaMalfa is a rice farmer and conservative stalwart representing California\'s rural northern interior — he is one of Congress\'s loudest advocates for water rights, wildfire policy, and rolling back environmental regulations that affect agriculture.',
    photoUrl: 'https://www.congress.gov/img/member/l000566_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-agriculture', name: 'House Agriculture Committee', chamber: 'House', role: 'Member', description: 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableVote: {
      title: 'No on Inflation Reduction Act',
      year: 2022,
      summary: 'LaMalfa voted against the IRA, opposing its climate spending provisions and arguing they would raise energy costs for rural Californians.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'LaMalfa, a member of the House Agriculture and Natural Resources Committees, backed the FY2026 reconciliation package, emphasizing its tax relief for Northern California\'s farming and timber communities and its rollback of costly environmental regulations that he argued stifled rural economies.' },
    ],
    notableBill: {
      title: 'Forest Management and Wildfire Prevention Act',
      year: 2023,
      summary: 'Introduced legislation to streamline timber harvesting and prescribed burns on federal lands to reduce catastrophic wildfire risk in Northern California.',
    },
    topSectors: [
      { category: 'Agriculture & Farm Bureaus', amount: 420000, percentage: 40 },
      { category: 'Individual Contributors', amount: 310000, percentage: 30 },
      { category: 'Energy & Natural Resources', amount: 310000, percentage: 30 },
    ],
  },

  {
    bioguideId: 'H001068',
    slug: 'jared-huffman',
    name: 'Jared Huffman',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'California',
    currentTitle: "U.S. Representative, California's 2nd Congressional District",
    bio: 'Jared Huffman, a former California Assembly member and environmental attorney, is Ranking Member of the House Natural Resources Committee and one of Congress\'s most consistent voices for public lands protection and clean energy transition.',
    photoUrl: 'https://www.congress.gov/img/member/h001068_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Ranking Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Public Lands Water Security Act',
      year: 2023,
      summary: 'Huffman introduced legislation to strengthen protections for watershed lands in national forests, critical to Northern California\'s water supply.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act',
      year: 2022,
      summary: 'Huffman strongly supported the IRA\'s historic investment in clean energy, calling it the most significant climate legislation in American history.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Huffman, Ranking Member of the House Natural Resources Committee, voted against the FY2026 reconciliation bill, warning that its rollback of clean energy tax credits would devastate California\'s renewable energy sector and that proposed cuts to public lands protections threatened his North Coast district\'s forests and watersheds.' },
    ],
    topSectors: [
      { category: 'Environmental Groups', amount: 380000, percentage: 35 },
      { category: 'Individual Contributors', amount: 490000, percentage: 45 },
      { category: 'Small-Dollar Donors', amount: 218000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'K000401',
    slug: 'kevin-kiley',
    name: 'Kevin Kiley',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'California',
    currentTitle: "U.S. Representative, California's 3rd Congressional District",
    bio: 'Kevin Kiley, a former California Assemblyman and school board attorney, rose to national attention by leading the unsuccessful 2021 recall against Governor Newsom — he now uses his House seat to mount a sustained legislative critique of California\'s Democratic governance.',
    photoUrl: 'https://www.congress.gov/img/member/k000401_200.jpg',
    sinceYear: 2023,
    committees: [
      { slug: 'house-agriculture', name: 'House Agriculture Committee', chamber: 'House', role: 'Member', description: 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'No Rogue Rulemakings Act',
      year: 2023,
      summary: 'Kiley introduced legislation to subject major agency rules to congressional approval, part of his broader effort to rein in administrative state overreach.',
    },
    notableVote: {
      title: 'No on Continuing Resolution (fiscal hawk)',
      year: 2023,
      summary: 'Kiley joined the House Freedom Caucus bloc in opposing government funding stopgaps, demanding deeper spending cuts.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Kiley, a member of the House Agriculture Committee, supported the FY2026 reconciliation bill as a long-overdue effort to reduce federal spending and eliminate regulatory burdens on California\'s rural agricultural communities, highlighting border security provisions he said would reduce strain on Northern California law enforcement.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 920000, percentage: 58 },
      { category: 'Small-Dollar Donors', amount: 480000, percentage: 30 },
      { category: 'Agriculture & Rural', amount: 190000, percentage: 12 },
    ],
  },

  {
    bioguideId: 'T000460',
    slug: 'mike-thompson',
    name: 'Mike Thompson',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'California',
    currentTitle: "U.S. Representative, California's 4th Congressional District",
    bio: 'Mike Thompson, a Vietnam veteran and Napa Valley wine industry ally, has spent over two decades on Ways & Means working on gun safety legislation and tax policy — he co-authored the first gun safety bill to pass the House in nearly three decades.',
    photoUrl: 'https://www.congress.gov/img/member/116_rp_ca_5_thompson_mike_200.jpg',
    sinceYear: 1999,
    committees: [
      { slug: 'house-ways-and-means', name: 'House Ways & Means Committee', chamber: 'House', role: 'Member', description: 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.' },
    ],
    notableBill: {
      title: 'Bipartisan Background Checks Act',
      year: 2021,
      summary: 'Thompson authored the Bipartisan Background Checks Act, which passed the House in 2021 and would close the gun-show loophole — the first major gun safety legislation to advance in the House in decades.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act — Healthcare and Tax provisions',
      year: 2022,
      summary: 'Thompson supported the IRA\'s Medicare drug negotiation provisions, a longtime Ways & Means priority.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Thompson, a senior Ways & Means Committee member, voted against the FY2026 reconciliation bill, arguing that its proposed changes to Medicare drug pricing protections would raise prescription costs for seniors in his Napa Valley district and that its tax provisions disproportionately benefited the wealthy over working families.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 850000, percentage: 50 },
      { category: 'Wine & Agriculture Interests', amount: 340000, percentage: 20 },
      { category: 'Healthcare', amount: 510000, percentage: 30 },
    ],
  },

  {
    bioguideId: 'M001177',
    slug: 'tom-mcclintock',
    name: 'Tom McClintock',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'California',
    currentTitle: "U.S. Representative, California's 5th Congressional District",
    bio: 'Tom McClintock is one of California\'s most ideologically consistent libertarian-leaning conservatives, opposing federal spending expansions and environmental regulations affecting Sierra Nevada timber and water management since 2009.',
    photoUrl: 'https://www.congress.gov/img/member/m001177_200.jpg',
    sinceYear: 2009,
    committees: [
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
    ],
    notableVote: {
      title: 'No on CHIPS and Science Act',
      year: 2022,
      summary: 'McClintock opposed the CHIPS Act as corporate welfare, maintaining his consistent opposition to targeted industrial subsidies regardless of national security framing.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'McClintock, a House Natural Resources and Judiciary Committee member, enthusiastically backed the FY2026 reconciliation bill, calling it a critical step toward fiscal discipline and praising provisions that would reduce federal land-use restrictions burdening Sierra Nevada timber operators in his district.' },
    ],
    notableBill: {
      title: 'Protecting Access to Public Lands Act',
      year: 2023,
      summary: 'Introduced legislation opposing Biden administration conservation designations that would restrict timber harvesting on federal lands in his district.',
    },
    topSectors: [
      { category: 'Individual Contributors', amount: 620000, percentage: 50 },
      { category: 'Timber & Natural Resources', amount: 250000, percentage: 20 },
      { category: 'Conservative PACs', amount: 370000, percentage: 30 },
    ],
  },

  {
    bioguideId: 'B001287',
    slug: 'ami-bera',
    name: 'Ami Bera',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'California',
    currentTitle: "U.S. Representative, California's 6th Congressional District",
    bio: 'Ami Bera, a physician and the longest-serving Indian American in congressional history, sits on both the Foreign Affairs and Science committees, focusing on global health diplomacy, pandemic preparedness, and U.S.-India relations.',
    photoUrl: 'https://www.congress.gov/img/member/b001287_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
    ],
    notableBill: {
      title: 'Global Health Security Act',
      year: 2023,
      summary: 'Bera introduced legislation to strengthen U.S. capacity to detect and respond to emerging pandemic threats, drawing on his medical background and Foreign Affairs work.',
    },
    notableVote: {
      title: 'For Ukraine Security Supplemental',
      year: 2024,
      summary: 'Bera supported the $61 billion Ukraine aid package, arguing that democratic allies must be sustained against authoritarian aggression.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Bera, a physician and House Foreign Affairs and Science Committee member, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would harm the diverse Sacramento-area communities in his district and that gutting pandemic preparedness funding undermined the global health security work he championed on Foreign Affairs.' },
    ],
    topSectors: [
      { category: 'Healthcare & Medical', amount: 520000, percentage: 38 },
      { category: 'Individual Contributors', amount: 480000, percentage: 35 },
      { category: 'Tech Industry', amount: 372000, percentage: 27 },
    ],
  },

  {
    bioguideId: 'M001163',
    slug: 'doris-matsui',
    name: 'Doris Matsui',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'California',
    currentTitle: "U.S. Representative, California's 7th Congressional District",
    bio: 'Doris Matsui, who succeeded her late husband Bob Matsui in representing Sacramento in 2005, has become a senior voice on energy and health policy through her Energy & Commerce seat, championing broadband access and telehealth expansion.',
    photoUrl: 'https://www.congress.gov/img/member/m001163_200.jpg',
    sinceYear: 2005,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
    ],
    notableBill: {
      title: 'Telehealth Expansion Act',
      year: 2023,
      summary: 'Matsui introduced legislation to permanently extend pandemic-era telehealth flexibilities, making remote patient consultations a permanent feature of Medicare.',
    },
    notableVote: {
      title: 'For CHIPS and Science Act',
      year: 2022,
      summary: 'Matsui supported the CHIPS Act semiconductor investment, highlighting the importance of domestic manufacturing for Sacramento\'s tech corridor.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Matsui, a senior House Energy & Commerce Committee member, opposed the FY2026 reconciliation bill, warning that its rollback of telehealth funding and Medicaid coverage would reverse years of progress in expanding healthcare access for Sacramento\'s seniors and low-income residents.' },
    ],
    topSectors: [
      { category: 'Healthcare & Pharma', amount: 480000, percentage: 42 },
      { category: 'Telecom & Tech', amount: 340000, percentage: 30 },
      { category: 'Individual Contributors', amount: 320000, percentage: 28 },
    ],
  },

  {
    bioguideId: 'G000559',
    slug: 'john-garamendi',
    name: 'John Garamendi',
    party: 'D',
    chamber: 'House',
    district: 8,
    state: 'California',
    currentTitle: "U.S. Representative, California's 8th Congressional District",
    bio: 'John Garamendi, a former California Insurance Commissioner and Lieutenant Governor, uses his Armed Services and Transportation seats to advocate for Travis and Beale Air Force Bases, Port of Stockton infrastructure, and military readiness investments.',
    photoUrl: 'https://www.congress.gov/img/member/g000559_200.jpg',
    sinceYear: 2009,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Buy America Improvement Act',
      year: 2022,
      summary: 'Garamendi authored Buy America provisions in the Infrastructure Investment and Jobs Act, requiring domestically produced materials in federally funded projects.',
    },
    notableVote: {
      title: 'For Bipartisan Infrastructure Law',
      year: 2021,
      summary: 'A lead proponent of the $1.2 trillion infrastructure bill, Garamendi championed its port modernization and water infrastructure components for his delta district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Garamendi, a House Armed Services and Transportation Committee member, voted against the FY2026 reconciliation bill, arguing that cuts to infrastructure programs would harm Port of Stockton modernization efforts and that reductions to military base community programs would undermine Travis and Beale Air Force Bases in his district.' },
    ],
    topSectors: [
      { category: 'Defense Contractors', amount: 390000, percentage: 32 },
      { category: 'Labor & Unions', amount: 370000, percentage: 30 },
      { category: 'Individual Contributors', amount: 465000, percentage: 38 },
    ],
  },

  {
    bioguideId: 'H001090',
    slug: 'josh-harder',
    name: 'Josh Harder',
    party: 'D',
    chamber: 'House',
    district: 9,
    state: 'California',
    currentTitle: "U.S. Representative, California's 9th Congressional District",
    bio: 'Josh Harder, a venture capitalist turned congressman representing the Central Valley\'s Modesto area, focuses his Agriculture and Education seats on water security for farmers, school funding, and workforce training programs for a district that is both rural and rapidly growing.',
    photoUrl: 'https://www.congress.gov/img/member/h001090_200.jpg',
    sinceYear: 2019,
    committees: [
      { slug: 'house-agriculture', name: 'House Agriculture Committee', chamber: 'House', role: 'Member', description: 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'Central Valley Water Security Act',
      year: 2023,
      summary: 'Harder introduced legislation to fund new water storage and conservation projects in the San Joaquin Valley, addressing chronic drought impacts on Central Valley agriculture.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Harder supported the $1.9 trillion COVID relief package, pointing to its expanded child tax credits and small business relief as essential for Modesto-area families.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Harder, a House Agriculture Committee member representing the Central Valley\'s Modesto area, voted against the FY2026 reconciliation bill, warning that Medicaid cuts would harm farmworker families in his district and that proposed reductions to SNAP and agricultural support programs would destabilize the Central Valley farming economy.' },
    ],
    topSectors: [
      { category: 'Agriculture', amount: 410000, percentage: 34 },
      { category: 'Individual Contributors', amount: 485000, percentage: 40 },
      { category: 'Small-Dollar Donors', amount: 315000, percentage: 26 },
    ],
  },

  {
    bioguideId: 'D000623',
    slug: 'mark-desaulnier',
    name: 'Mark DeSaulnier',
    party: 'D',
    chamber: 'House',
    district: 10,
    state: 'California',
    currentTitle: "U.S. Representative, California's 10th Congressional District",
    bio: 'Mark DeSaulnier, a former Contra Costa County Supervisor and state legislator, brings a worker-centric perspective to the Education, Transportation, and Oversight committees, focusing on worker safety, public transit funding for the Bay Area, and government accountability.',
    photoUrl: 'https://www.congress.gov/img/member/115_rp_ca_11_desaulnier_mark_200.jpg',
    sinceYear: 2015,
    committees: [
      { slug: 'house-education-workforce', name: 'House Education & the Workforce Committee', chamber: 'House', role: 'Member', description: 'Covers K-12 and higher education, labor law, workplace safety, and pension policy. Writes reauthorizations of laws like ESEA and the Higher Education Act.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Worker Flexibility and Small Business Protection Act',
      year: 2022,
      summary: 'DeSaulnier introduced legislation strengthening worker classification protections, building on California\'s AB 5 model at the federal level.',
    },
    notableVote: {
      title: 'For Bipartisan Infrastructure Law',
      year: 2021,
      summary: 'DeSaulnier championed the infrastructure bill\'s BART and Bay Area transit funding provisions as critical to reducing Highway 680 and I-80 congestion.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'DeSaulnier, a House Education & Workforce and Transportation Committee member, voted against the FY2026 reconciliation bill, contending that cuts to worker safety programs and public transit investment would harm Contra Costa County commuters and undermine the labor protections he has championed throughout his career.' },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 410000, percentage: 38 },
      { category: 'Individual Contributors', amount: 380000, percentage: 35 },
      { category: 'Transportation Industry', amount: 290000, percentage: 27 },
    ],
  },

  {
    bioguideId: 'P000197',
    slug: 'nancy-pelosi',
    name: 'Nancy Pelosi',
    party: 'D',
    chamber: 'House',
    district: 11,
    state: 'California',
    currentTitle: "U.S. Representative, California's 11th Congressional District",
    bio: 'Nancy Pelosi, the only woman ever to serve as Speaker of the House, remains the most powerful figure in California\'s congressional delegation — her post-Speaker role as Speaker Emerita gives her continued influence over Democratic caucus strategy and fundraising without committee obligations.',
    photoUrl: 'https://www.congress.gov/img/member/p000197_200.jpg',
    sinceYear: 1987,
    committees: [],
    keyMilestones: [
      { year: 2003, description: 'Becomes House Minority Leader — first woman to lead a congressional party' },
      { year: 2007, description: 'Elected Speaker of the House — first woman in American history' },
      { year: 2019, description: 'Re-elected Speaker of the House for a second term' },
      { year: 2023, description: 'Steps down from leadership; named Speaker Emerita' },
    ],
    notableBill: {
      title: 'Democracy Protection Act (119th Congress)',
      year: 2025,
      summary: 'Pelosi has championed democracy protection legislation in the 119th Congress, continuing her post-Speaker focus on safeguarding electoral integrity and democratic institutions against what she describes as authoritarian threats.',
    },
    notableVote: {
      title: 'Against Republican Rules Package — 119th Congress',
      year: 2025,
      summary: 'Pelosi voted against the House Republican rules package at the start of the 119th Congress, arguing it undermined minority rights and stacked the procedural deck against Democratic amendments.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Pelosi, the Speaker Emerita representing San Francisco, voted against the FY2026 reconciliation bill and used her platform to rally Democratic opposition, calling it a generational assault on Medicaid, clean energy, and the social contract that her San Francisco constituents depend on.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 6500000, percentage: 65 },
      { category: 'Securities & Investment', amount: 1500000, percentage: 15 },
      { category: 'Tech Industry', amount: 2000000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'S001243',
    slug: 'lateefah-simon',
    name: 'Lateefah Simon',
    party: 'D',
    chamber: 'House',
    district: 12,
    state: 'California',
    currentTitle: "U.S. Representative, California's 12th Congressional District",
    bio: 'Lateefah Simon, a civil rights attorney and MacArthur Fellow who previously chaired the Bay Area Rapid Transit Board, succeeded Barbara Lee in representing Oakland and Berkeley in 2025, bringing a criminal justice reform and transit equity focus to Congress.',
    photoUrl: 'https://www.congress.gov/img/member/67745f940b34857ecc909197_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Second Chance Act Reauthorization',
      year: 2025,
      summary: 'Simon co-sponsored reauthorization of the Second Chance Act, which funds reentry programs for people leaving incarceration — a direct extension of her decade-long criminal justice work.',
    },
    notableVote: {
      title: 'Against Republican Continuing Resolution with spending cuts',
      year: 2025,
      summary: 'Simon opposed House Republican stopgap spending bills that would have cut community development and social service funding critical to her Oakland district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Simon, a House Judiciary and Transportation Committee member representing Oakland and Berkeley, voted against the FY2026 reconciliation bill, arguing that its Medicaid cuts would devastate low-income communities and that reductions to reentry and justice programs would reverse the criminal justice reforms she has championed throughout her career.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1200000, percentage: 52 },
      { category: 'Small-Dollar Donors', amount: 810000, percentage: 35 },
      { category: 'Labor & Progressive PACs', amount: 300000, percentage: 13 },
    ],
  },

  {
    bioguideId: 'G000612',
    slug: 'adam-gray',
    name: 'Adam Gray',
    party: 'D',
    chamber: 'House',
    district: 13,
    state: 'California',
    currentTitle: "U.S. Representative, California's 13th Congressional District",
    bio: 'Adam Gray, a former California Assemblyman from Merced, flipped this competitive Central Valley seat in 2024 after a razor-thin loss in 2022 — he focuses on water policy, agricultural interests, and bipartisan solutions for his swing district.',
    photoUrl: 'https://www.congress.gov/img/member/67742a160b34857ecc9090bf_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-agriculture', name: 'House Agriculture Committee', chamber: 'House', role: 'Member', description: 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'San Joaquin Valley Water Reliability Act',
      year: 2025,
      summary: 'Gray introduced legislation to fund surface water storage projects in the San Joaquin Valley, addressing persistent drought vulnerability for Central Valley farmers.',
    },
    notableVote: {
      title: 'Bipartisan votes on agricultural water policy',
      year: 2025,
      summary: 'Gray has taken a bipartisan approach on water infrastructure votes, reflecting his competitive district\'s prioritization of agricultural reliability over partisan positioning.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Gray, a House Agriculture and Transportation Committee member representing the competitive Merced-area district, voted against the FY2026 reconciliation bill, arguing that cuts to Medicaid and agricultural assistance programs would harm the Central Valley farmworker families and rural communities he was elected to represent.' },
    ],
    topSectors: [
      { category: 'Agriculture', amount: 480000, percentage: 40 },
      { category: 'Individual Contributors', amount: 420000, percentage: 35 },
      { category: 'Small-Dollar Donors', amount: 300000, percentage: 25 },
    ],
  },

  {
    bioguideId: 'S001193',
    slug: 'eric-swalwell',
    name: 'Eric Swalwell',
    party: 'D',
    chamber: 'House',
    district: 14,
    state: 'California',
    currentTitle: "U.S. Representative, California's 14th Congressional District",
    bio: 'Eric Swalwell, a former Dublin City Council member and Alameda County prosecutor, sits on both the Intelligence and Judiciary committees — he gained national attention as a sharp questioner in impeachment proceedings and as a brief 2020 presidential candidate.',
    photoUrl: 'https://www.congress.gov/img/member/s001193_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-intelligence', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member', description: 'Provides oversight of U.S. intelligence agencies including the CIA, NSA, and DIA. Reviews classified programs and authorizes intelligence community spending.' },
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
    ],
    notableBill: {
      title: 'Ban Assault Weapons Now Act',
      year: 2023,
      summary: 'Swalwell reintroduced his signature legislation to ban assault-style weapons, offering a buyback program for currently owned firearms.',
    },
    notableVote: {
      title: 'Voted for both Trump impeachments',
      year: 2021,
      summary: 'Swalwell voted to impeach President Trump on both occasions and served as a House manager in the second impeachment trial.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Swalwell, a House Intelligence and Judiciary Committee member, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would hurt Alameda County families and that reductions to intelligence oversight funding undermined the national security priorities he has championed on the Intelligence Committee.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1100000, percentage: 55 },
      { category: 'Tech Industry', amount: 600000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 300000, percentage: 15 },
    ],
  },

  {
    bioguideId: 'M001225',
    slug: 'kevin-mullin',
    name: 'Kevin Mullin',
    party: 'D',
    chamber: 'House',
    district: 15,
    state: 'California',
    currentTitle: "U.S. Representative, California's 15th Congressional District",
    bio: 'Kevin Mullin, former Speaker pro Tempore of the California State Assembly, represents Silicon Valley\'s southern corridor and uses his Science & Technology and Transportation seats to advance tech workforce development and Bay Area transit modernization.',
    photoUrl: 'https://www.congress.gov/img/member/m001225_200.jpg',
    sinceYear: 2023,
    committees: [
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'AI Workforce Development Act',
      year: 2024,
      summary: 'Mullin introduced legislation to fund community college AI skills training programs, addressing workforce displacement risks in his tech-concentrated district.',
    },
    notableVote: {
      title: 'For CHIPS and Science Act',
      year: 2022,
      summary: 'Though elected in 2022, Mullin championed CHIPS Act implementation as directly beneficial to semiconductor firms along the Peninsula.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Mullin, a House Science and Transportation Committee member representing Silicon Valley\'s southern corridor, voted against the FY2026 reconciliation bill, warning that cuts to federal R&D investment and clean energy programs would undermine innovation infrastructure that underpins the tech economy in his district.' },
    ],
    topSectors: [
      { category: 'Tech Industry', amount: 680000, percentage: 45 },
      { category: 'Individual Contributors', amount: 530000, percentage: 35 },
      { category: 'Small-Dollar Donors', amount: 300000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'L000610',
    slug: 'sam-liccardo',
    name: 'Sam Liccardo',
    party: 'D',
    chamber: 'House',
    district: 16,
    state: 'California',
    currentTitle: "U.S. Representative, California's 16th Congressional District",
    bio: 'Sam Liccardo, the former Mayor of San Jose who oversaw the city\'s growth into a global tech hub, won the competitive open seat race for Silicon Valley\'s heart in 2024, bringing an urban policy and innovation economy perspective to his Judiciary and Foreign Affairs seats.',
    photoUrl: 'https://www.congress.gov/img/member/6774305d0b34857ecc90910d_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'Smart Cities Innovation Act',
      year: 2025,
      summary: 'Liccardo introduced legislation to fund federal grants for cities piloting AI-powered public services, drawing directly on his mayoral experience with San Jose\'s smart city initiatives.',
    },
    notableVote: {
      title: 'Against broad deregulation of tech platforms',
      year: 2025,
      summary: 'Liccardo has taken a nuanced position on tech regulation, opposing blanket deregulation while supporting targeted rules for AI accountability.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Liccardo, a House Judiciary and Foreign Affairs Committee member and former San Jose Mayor, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would undo the community health investments he championed as mayor and that reductions to workforce development funding would harm Silicon Valley\'s working-class residents.' },
    ],
    topSectors: [
      { category: 'Tech Industry', amount: 1400000, percentage: 52 },
      { category: 'Individual Contributors', amount: 900000, percentage: 33 },
      { category: 'Small-Dollar Donors', amount: 400000, percentage: 15 },
    ],
  },

  {
    bioguideId: 'K000389',
    slug: 'ro-khanna',
    name: 'Ro Khanna',
    party: 'D',
    chamber: 'House',
    district: 17,
    state: 'California',
    currentTitle: "U.S. Representative, California's 17th Congressional District",
    bio: 'Ro Khanna, a Silicon Valley attorney and former Commerce Department official, represents the heart of the tech industry and has become a nationally visible progressive voice on tech ethics, economic inequality, worker rights in the gig economy, and foreign policy restraint.',
    photoUrl: 'https://www.congress.gov/img/member/k000389_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
      { slug: 'house-oversight', name: 'House Oversight & Accountability Committee', chamber: 'House', role: 'Member', description: 'The primary investigative committee of the House, with broad authority to investigate the executive branch, federal programs, and government waste, fraud, and abuse.' },
    ],
    notableBill: {
      title: 'National Economic Security and Reform Act (ESAR)',
      year: 2023,
      summary: 'Khanna introduced legislation to rein in foreign tax havens and close loopholes benefiting tech multinationals — a notable break from his district\'s typical industry alignment.',
    },
    notableVote: {
      title: 'Against Authorization for Use of Military Force expansions',
      year: 2023,
      summary: 'Khanna consistently voted against open-ended military authorization bills, championing congressional war powers reclamation.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Khanna, a House Armed Services, Science, and Oversight Committee member representing the heart of Silicon Valley, voted against the FY2026 reconciliation bill, arguing that its deep cuts to social safety-net programs would harm tech workers and gig economy employees while its tax cuts overwhelmingly benefited corporations and the ultra-wealthy.' },
    ],
    topSectors: [
      { category: 'Tech Industry', amount: 1200000, percentage: 48 },
      { category: 'Individual Contributors', amount: 900000, percentage: 36 },
      { category: 'Small-Dollar Donors', amount: 400000, percentage: 16 },
    ],
  },

  {
    bioguideId: 'L000397',
    slug: 'zoe-lofgren',
    name: 'Zoe Lofgren',
    party: 'D',
    chamber: 'House',
    district: 18,
    state: 'California',
    currentTitle: "U.S. Representative, California's 18th Congressional District",
    bio: 'Zoe Lofgren is the Ranking Member of the House Science, Space & Technology Committee and one of Congress\'s leading authorities on immigration law — she has been deeply involved in every major tech policy debate from SOPA to DACA, and sat on both Trump impeachment committees.',
    photoUrl: 'https://www.congress.gov/img/member/671024d7ec807bca66057fcb_200.jpg',
    sinceYear: 1995,
    committees: [
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Ranking Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
    ],
    notableBill: {
      title: 'America\'s College Promise Act',
      year: 2022,
      summary: 'Lofgren co-sponsored legislation for two years of tuition-free community college, expanding workforce training pipelines for her tech-sector district.',
    },
    notableVote: {
      title: 'Voted against SOPA (Stop Online Piracy Act)',
      year: 2012,
      summary: 'Lofgren was one of the most vocal House opponents of SOPA, helping lead the legislative defeat of the bill following the internet-wide protest.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Lofgren, Ranking Member of the House Science Committee representing San Jose, voted against the FY2026 reconciliation bill, warning that cuts to federal science and research funding would cripple U.S. technological competitiveness and that Medicaid reductions would harm lower-income immigrant communities throughout her Silicon Valley district.' },
    ],
    topSectors: [
      { category: 'Tech Industry', amount: 820000, percentage: 50 },
      { category: 'Individual Contributors', amount: 490000, percentage: 30 },
      { category: 'Labor & Immigration Advocacy', amount: 330000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'P000613',
    slug: 'jimmy-panetta',
    name: 'Jimmy Panetta',
    party: 'D',
    chamber: 'House',
    district: 19,
    state: 'California',
    currentTitle: "U.S. Representative, California's 19th Congressional District",
    bio: 'Jimmy Panetta, son of CIA Director and Defense Secretary Leon Panetta and himself a Navy JAG officer and federal prosecutor, sits on Ways & Means and Armed Services — using both to protect Monterey Bay\'s agricultural economy and Fort Hunter Liggett\'s military mission.',
    photoUrl: 'https://www.congress.gov/img/member/116_rp_ca_20_panetta_jimmy_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-ways-and-means', name: 'House Ways & Means Committee', chamber: 'House', role: 'Member', description: 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.' },
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
    ],
    notableBill: {
      title: 'Farm Workforce Modernization Act',
      year: 2021,
      summary: 'Panetta championed the Farm Workforce Modernization Act, which would create a pathway to legal status for agricultural workers — critical for Salinas Valley\'s farming economy.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act',
      year: 2022,
      summary: 'Panetta supported the IRA, highlighting its agricultural conservation programs and drought resilience investments for his coastal farming district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Panetta, a Ways & Means and Armed Services Committee member representing Monterey Bay\'s agricultural coast, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would devastate farmworker families in the Salinas Valley and that reductions to agricultural conservation programs would harm his district\'s drought-stressed farming economy.' },
    ],
    topSectors: [
      { category: 'Agriculture & Wine', amount: 420000, percentage: 35 },
      { category: 'Defense', amount: 340000, percentage: 28 },
      { category: 'Individual Contributors', amount: 440000, percentage: 37 },
    ],
  },

  {
    bioguideId: 'F000480',
    slug: 'vince-fong',
    name: 'Vince Fong',
    party: 'R',
    chamber: 'House',
    district: 20,
    state: 'California',
    currentTitle: "U.S. Representative, California's 20th Congressional District",
    bio: 'Vince Fong, a former California Assemblyman and longtime aide to Kevin McCarthy, won a 2024 special election to fill McCarthy\'s Kern County seat — he brings a Central Valley agriculture and energy production perspective to his Transportation and Natural Resources assignments.',
    photoUrl: 'https://www.congress.gov/img/member/669ff04f5d19788d1f2034aa_200.jpg',
    sinceYear: 2024,
    committees: [
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'American Energy Expansion Act',
      year: 2024,
      summary: 'Fong co-sponsored legislation to expand oil and natural gas leasing on federal lands in the San Joaquin Valley, a top priority for Kern County\'s energy sector.',
    },
    notableVote: {
      title: 'For lower-spending continuing resolutions',
      year: 2024,
      summary: 'Fong has supported Republican fiscal positions, voting for spending reductions aligned with his predecessor McCarthy\'s fiscal legacy.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Fong, a House Transportation and Natural Resources Committee member representing Kern County\'s energy-producing heartland, backed the FY2026 reconciliation bill, highlighting provisions to expand oil and gas leasing on federal lands and spending cuts he said would reduce the regulatory costs burdening California\'s Central Valley energy producers.' },
    ],
    topSectors: [
      { category: 'Oil & Gas', amount: 480000, percentage: 42 },
      { category: 'Agriculture', amount: 340000, percentage: 30 },
      { category: 'Individual Contributors', amount: 320000, percentage: 28 },
    ],
  },

  {
    bioguideId: 'C001059',
    slug: 'jim-costa',
    name: 'Jim Costa',
    party: 'D',
    chamber: 'House',
    district: 21,
    state: 'California',
    currentTitle: "U.S. Representative, California's 21st Congressional District",
    bio: 'Jim Costa, a third-generation San Joaquin Valley farmer and one of Congress\'s most bipartisan Democrats, uses his Agriculture and Natural Resources seats to fight for Central Valley water rights, dairy industry protections, and agricultural trade policy.',
    photoUrl: 'https://www.congress.gov/img/member/6973c909ded7781a35cc1fd7_200.jpg',
    sinceYear: 2005,
    committees: [
      { slug: 'house-agriculture', name: 'House Agriculture Committee', chamber: 'House', role: 'Member', description: 'Writes farm bills that govern agricultural subsidies, crop insurance, nutrition programs including SNAP, and rural development. Critical for farming states and food policy nationwide.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'Water Accountability Act',
      year: 2023,
      summary: 'Costa introduced legislation to reform water banking and accounting in the Sacramento-San Joaquin Delta, addressing the fundamental tension between Northern California water supply and San Joaquin Valley farming.',
    },
    notableVote: {
      title: 'For USMCA Trade Agreement',
      year: 2020,
      summary: 'Costa supported the United States-Mexico-Canada Agreement, citing its improved agricultural trade provisions for California dairy and produce exports.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Costa, a House Agriculture and Natural Resources Committee member and third-generation San Joaquin Valley farmer, voted against the FY2026 reconciliation bill, expressing concern that cuts to agricultural safety-net programs and water infrastructure funding would leave Central Valley farmers and dairy producers without critical federal backstops during drought years.' },
    ],
    topSectors: [
      { category: 'Agriculture & Dairy', amount: 580000, percentage: 45 },
      { category: 'Water & Utilities', amount: 310000, percentage: 24 },
      { category: 'Individual Contributors', amount: 400000, percentage: 31 },
    ],
  },

  {
    bioguideId: 'V000129',
    slug: 'david-valadao',
    name: 'David Valadao',
    party: 'R',
    chamber: 'House',
    district: 22,
    state: 'California',
    currentTitle: "U.S. Representative, California's 22nd Congressional District",
    bio: 'David Valadao, a dairy farmer from Kings County, is one of the most politically endangered California Republicans — he won his seat back in 2022 after losing in 2018, and his Appropriations seat lets him deliver tangible water infrastructure and healthcare wins for his heavily Latino district.',
    photoUrl: 'https://www.congress.gov/img/member/v000129_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-appropriations', name: 'House Appropriations Committee', chamber: 'House', role: 'Member', description: 'Controls discretionary federal spending through 12 annual appropriations subcommittees. Members with seats here have significant leverage over agency budgets and priorities.' },
    ],
    notableVote: {
      title: 'Voted to Certify 2020 Election Results',
      year: 2021,
      summary: 'Valadao was one of ten House Republicans to vote to impeach President Trump after January 6th, and one of the few to survive the subsequent Republican primary.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Valadao, a House Appropriations Committee member representing a heavily Latino Kings County dairy district, backed the FY2026 reconciliation bill, emphasizing tax relief for agricultural operators and border security measures he said would reduce fentanyl trafficking affecting rural Central Valley communities.' },
    ],
    notableBill: {
      title: 'SNAP Access for Agriculture Workers Act',
      year: 2023,
      summary: 'Valadao pushed for expanded SNAP access for his low-income farmworker constituents as part of Farm Bill negotiations.',
    },
    topSectors: [
      { category: 'Agriculture & Dairy', amount: 620000, percentage: 45 },
      { category: 'Individual Contributors', amount: 490000, percentage: 36 },
      { category: 'Healthcare', amount: 260000, percentage: 19 },
    ],
  },

  {
    bioguideId: 'O000019',
    slug: 'jay-obernolte',
    name: 'Jay Obernolte',
    party: 'R',
    chamber: 'House',
    district: 23,
    state: 'California',
    currentTitle: "U.S. Representative, California's 23rd Congressional District",
    bio: 'Jay Obernolte, a video game developer with a master\'s degree in AI from UCLA, is Congress\'s only active game developer and one of its most technically credentialed members — he brings genuine AI expertise to his Science & Technology and Armed Services seats.',
    photoUrl: 'https://www.congress.gov/img/member/o000019_200.jpg',
    sinceYear: 2021,
    committees: [
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'AI Governance Preparedness Act',
      year: 2023,
      summary: 'Obernolte introduced legislation to establish a federal framework for AI risk assessment, drawing on his technical background to craft technically informed regulation.',
    },
    notableVote: {
      title: 'For National Defense Authorization Act — AI provisions',
      year: 2024,
      summary: 'Obernolte championed provisions in the FY2025 NDAA expanding military AI adoption while establishing oversight guardrails.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Obernolte, a House Science and Armed Services Committee member with AI expertise, supported the FY2026 reconciliation bill, arguing its spending reductions and tax relief would free up private capital for the technology innovation he championed and reduce the deficit burden on California\'s Inland Empire communities.' },
    ],
    topSectors: [
      { category: 'Tech & Defense Industries', amount: 580000, percentage: 42 },
      { category: 'Individual Contributors', amount: 430000, percentage: 31 },
      { category: 'Entertainment & Gaming', amount: 380000, percentage: 27 },
    ],
  },

  {
    bioguideId: 'C001112',
    slug: 'salud-carbajal',
    name: 'Salud Carbajal',
    party: 'D',
    chamber: 'House',
    district: 24,
    state: 'California',
    currentTitle: "U.S. Representative, California's 24th Congressional District",
    bio: 'Salud Carbajal, a Marine Corps veteran and former Santa Barbara County Supervisor, uses his Armed Services and Transportation seats to protect Vandenberg Space Force Base, advocate for coastal infrastructure investment, and advance immigration reform for Central Coast farmworkers.',
    photoUrl: 'https://www.congress.gov/img/member/115_rp_ca_24_carbajal_salud_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Coast Guard Authorization Act provisions — Offshore Infrastructure',
      year: 2024,
      summary: 'Carbajal secured provisions in the Coast Guard Authorization Act strengthening offshore oil spill response and coastal resilience funding for the Central Coast.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Carbajal supported the $1.9T COVID relief package, highlighting its agricultural worker assistance and small business provisions for Santa Barbara County.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Carbajal, a Marine Corps veteran and Armed Services and Transportation Committee member, voted against the FY2026 reconciliation bill, warning that Medicaid cuts would harm farmworkers along the Central Coast and that reductions to Vandenberg Space Force Base support programs would undermine the military mission he has prioritized throughout his tenure.' },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 390000, percentage: 34 },
      { category: 'Defense', amount: 310000, percentage: 27 },
      { category: 'Individual Contributors', amount: 450000, percentage: 39 },
    ],
  },

  {
    bioguideId: 'R000599',
    slug: 'raul-ruiz',
    name: 'Raul Ruiz',
    party: 'D',
    chamber: 'House',
    district: 25,
    state: 'California',
    currentTitle: "U.S. Representative, California's 25th Congressional District",
    bio: 'Raul Ruiz, a Harvard-trained emergency physician who grew up in a farmworker family in the Coachella Valley, uses his Energy & Commerce and Natural Resources seats to address healthcare access for underserved desert communities and the environmental justice impacts of the Salton Sea.',
    photoUrl: 'https://www.congress.gov/img/member/66e1aec832c796cea99fe06f_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'Salton Sea Restoration Act',
      year: 2023,
      summary: 'Ruiz introduced legislation providing federal funding to address dust pollution and ecological collapse at the Salton Sea, which threatens public health in his Coachella Valley district.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act — Healthcare provisions',
      year: 2022,
      summary: 'Ruiz strongly supported the IRA\'s Medicare drug negotiation provisions, noting that high drug costs disproportionately harm the uninsured and underinsured in his district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Ruiz, a Harvard-trained emergency physician and Energy & Commerce Committee member, voted against the FY2026 reconciliation bill, warning that Medicaid cuts would cause a healthcare crisis in the Coachella Valley\'s underserved desert communities and that rollbacks of clean energy programs would worsen air quality for the vulnerable populations he has treated throughout his medical career.' },
    ],
    topSectors: [
      { category: 'Healthcare & Medical', amount: 620000, percentage: 48 },
      { category: 'Individual Contributors', amount: 420000, percentage: 33 },
      { category: 'Environmental Groups', amount: 250000, percentage: 19 },
    ],
  },

  {
    bioguideId: 'B001285',
    slug: 'julia-brownley',
    name: 'Julia Brownley',
    party: 'D',
    chamber: 'House',
    district: 26,
    state: 'California',
    currentTitle: "U.S. Representative, California's 26th Congressional District",
    bio: 'Julia Brownley, a former California Assemblywoman representing the Ventura County coast, focuses her Transportation seat on highway safety, veterans access to healthcare through the VA system, and clean energy transition for her coastal Southern California district.',
    photoUrl: 'https://www.congress.gov/img/member/68000188f22eaf56065817e8_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'VA MISSION Act — Community Care provisions',
      year: 2018,
      summary: 'Brownley was an author of community care expansion provisions in the VA MISSION Act, improving veteran access to private-sector healthcare outside the VA system.',
    },
    notableVote: {
      title: 'For Bipartisan Infrastructure Law',
      year: 2021,
      summary: 'Brownley championed infrastructure investments for the US-101 corridor and Ventura County flood control projects included in the $1.2T infrastructure package.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Brownley, a House Transportation Committee member representing Ventura County\'s coastal communities, voted against the FY2026 reconciliation bill, arguing that cuts to VA healthcare programs would harm veterans throughout her district and that reductions to transportation funding would set back US-101 safety improvements she had long championed.' },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 360000, percentage: 34 },
      { category: 'Individual Contributors', amount: 420000, percentage: 40 },
      { category: 'Healthcare', amount: 270000, percentage: 26 },
    ],
  },

  {
    bioguideId: 'W000827',
    slug: 'george-whitesides',
    name: 'George Whitesides',
    party: 'D',
    chamber: 'House',
    district: 27,
    state: 'California',
    currentTitle: "U.S. Representative, California's 27th Congressional District",
    bio: 'George Whitesides, the former CEO of Virgin Galactic and a NASA Chief of Staff, flipped this competitive Santa Clarita-area seat in 2024, bringing extraordinary space industry credibility to his Science & Technology and Armed Services assignments.',
    photoUrl: 'https://www.congress.gov/img/member/68dc43db199559bad714973d_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
    ],
    notableBill: {
      title: 'Commercial Space Competitiveness Act',
      year: 2025,
      summary: 'Whitesides introduced legislation to streamline FAA commercial launch licensing and strengthen U.S. competitiveness in the global commercial space launch market.',
    },
    notableVote: {
      title: 'For NASA Reauthorization provisions',
      year: 2025,
      summary: 'Whitesides supported funding for NASA\'s Artemis moon program and commercial crew partnerships, drawing on his decade leading a commercial spaceflight company.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Whitesides, a former Virgin Galactic CEO and member of the House Science and Armed Services Committees, voted against the FY2026 reconciliation bill, arguing that proposed cuts to NASA and federal R&D budgets would undermine the commercial space industry in his Santa Clarita-area district and cede technological leadership to China.' },
    ],
    topSectors: [
      { category: 'Aerospace & Defense', amount: 980000, percentage: 48 },
      { category: 'Individual Contributors', amount: 720000, percentage: 35 },
      { category: 'Small-Dollar Donors', amount: 350000, percentage: 17 },
    ],
  },

  {
    bioguideId: 'C001080',
    slug: 'judy-chu',
    name: 'Judy Chu',
    party: 'D',
    chamber: 'House',
    district: 28,
    state: 'California',
    currentTitle: "U.S. Representative, California's 28th Congressional District",
    bio: 'Judy Chu, the first Chinese American woman elected to Congress and chair of the Congressional Asian Pacific American Caucus, uses her Ways & Means and Oversight seats to advance small business tax policy, Asian American anti-discrimination legislation, and government transparency.',
    photoUrl: 'https://www.congress.gov/img/member/c001080_200.jpg',
    sinceYear: 2009,
    committees: [
      { slug: 'house-ways-and-means', name: 'House Ways & Means Committee', chamber: 'House', role: 'Member', description: 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.' },
      { slug: 'house-oversight', name: 'House Oversight & Accountability Committee', chamber: 'House', role: 'Member', description: 'The primary investigative committee of the House, with broad authority to investigate the executive branch, federal programs, and government waste, fraud, and abuse.' },
    ],
    notableBill: {
      title: 'COVID-19 Hate Crimes Act',
      year: 2021,
      summary: 'Chu introduced the COVID-19 Hate Crimes Act, which passed with overwhelming bipartisan support and directed the DOJ to improve hate crime data reporting following the surge in anti-Asian violence.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Chu championed the ARP\'s small business provisions and child tax credit expansion as essential for Alhambra and Monterey Park\'s working-class families.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Chu, the first Chinese American woman in Congress and a Ways & Means Committee member, voted against the FY2026 reconciliation bill, arguing that its tax provisions tilted toward the wealthy while Medicaid cuts would devastate the working-class Asian American families in Alhambra and Monterey Park who depend on public health coverage.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 510000, percentage: 45 },
      { category: 'Small Business & Trade', amount: 340000, percentage: 30 },
      { category: 'Labor & Progressive Groups', amount: 280000, percentage: 25 },
    ],
  },

  {
    bioguideId: 'R000618',
    slug: 'luz-rivas',
    name: 'Luz Rivas',
    party: 'D',
    chamber: 'House',
    district: 29,
    state: 'California',
    currentTitle: "U.S. Representative, California's 29th Congressional District",
    bio: 'Luz Rivas, founder of the STEM education nonprofit Ynvisible and a former California state legislator, represents the San Fernando Valley and focuses her Science & Technology and Education seats on STEM equity, broadband access, and community college investment for working-class Latino families.',
    photoUrl: 'https://www.congress.gov/img/member/67745d860b34857ecc90916d_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
      { slug: 'house-education-workforce', name: 'House Education & the Workforce Committee', chamber: 'House', role: 'Member', description: 'Covers K-12 and higher education, labor law, workplace safety, and pension policy. Writes reauthorizations of laws like ESEA and the Higher Education Act.' },
    ],
    notableBill: {
      title: 'STEM Education Equity Act',
      year: 2025,
      summary: 'Rivas introduced legislation to fund STEM enrichment programs in Title I schools, drawing on her nonprofit background building science education access for underserved youth.',
    },
    notableVote: {
      title: 'Against budget cuts to Pell Grant programs',
      year: 2025,
      summary: 'Rivas opposed Republican efforts to reduce Pell Grant funding, arguing that cuts would devastate college access for first-generation students in her district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Rivas, a House Science and Education Committee member and STEM education founder representing the San Fernando Valley, voted against the FY2026 reconciliation bill, warning that cuts to Pell Grants and Title I education funding would shut out first-generation Latino students in her district and that reductions to federal R&D investment would undermine the STEM pipeline she has built her career advancing.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 820000, percentage: 50 },
      { category: 'Education & Nonprofit', amount: 490000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 330000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'F000486',
    slug: 'laura-friedman',
    name: 'Laura Friedman',
    party: 'D',
    chamber: 'House',
    district: 30,
    state: 'California',
    currentTitle: "U.S. Representative, California's 30th Congressional District",
    bio: 'Laura Friedman, a former Glendale City Council member and California Assemblywoman known for her pedestrian safety and transit legislation at the state level, brings that same transportation and environmental focus to her House Energy & Commerce and Transportation seats representing the eastern San Fernando Valley.',
    photoUrl: 'https://www.congress.gov/img/member/677427070b34857ecc9090a1_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
      { slug: 'house-transportation', name: 'House Transportation & Infrastructure Committee', chamber: 'House', role: 'Member', description: 'Oversees surface transportation, aviation, maritime, rail, pipelines, and water infrastructure. Authorizes the Highway Trust Fund and major public works investment.' },
    ],
    notableBill: {
      title: 'Safe Streets for All Act (federal version)',
      year: 2025,
      summary: 'Friedman introduced federal legislation to fund pedestrian infrastructure improvements and road safety redesigns, building on her signature California Assembly work reducing traffic fatalities.',
    },
    notableVote: {
      title: 'Against cuts to EPA clean air programs',
      year: 2025,
      summary: 'Friedman opposed rollbacks to EPA air quality standards, arguing that communities in the San Gabriel Valley already suffer disproportionate pollution burdens.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Friedman, a House Energy & Commerce and Transportation Committee member representing the eastern San Fernando Valley, voted against the FY2026 reconciliation bill, arguing that its rollback of clean energy incentives and EPA standards would worsen air quality for communities already burdened by refinery pollution and that Medicaid cuts would harm the working-class families in her district.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 900000, percentage: 52 },
      { category: 'Environmental & Transit Groups', amount: 520000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 310000, percentage: 18 },
    ],
  },

  {
    bioguideId: 'C001123',
    slug: 'gilbert-cisneros',
    name: 'Gilbert Cisneros',
    party: 'D',
    chamber: 'House',
    district: 31,
    state: 'California',
    currentTitle: "U.S. Representative, California's 31st Congressional District",
    bio: 'Gilbert Cisneros, a Navy veteran and lottery jackpot winner turned education philanthropist, won back a competitive Inland Empire seat in 2024, using his Armed Services and Education seats to advocate for veterans\' benefits, defense jobs at Joint Base March, and workforce training investment.',
    photoUrl: 'https://www.congress.gov/img/member/6807d8d63e52ea7df920ef05_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-education-workforce', name: 'House Education & the Workforce Committee', chamber: 'House', role: 'Member', description: 'Covers K-12 and higher education, labor law, workplace safety, and pension policy. Writes reauthorizations of laws like ESEA and the Higher Education Act.' },
    ],
    notableBill: {
      title: 'PACT Act Implementation Oversight',
      year: 2025,
      summary: 'Cisneros led oversight efforts ensuring veterans in his district received timely benefits under the PACT Act covering toxic exposure claims.',
    },
    notableVote: {
      title: 'For National Defense Authorization Act',
      year: 2025,
      summary: 'Cisneros supported the FY2025 NDAA, highlighting provisions protecting March Air Reserve Base\'s mission and expanding veteran transition assistance.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Cisneros, a Navy veteran and Armed Services and Education Committee member representing the Inland Empire, voted against the FY2026 reconciliation bill, warning that Medicaid cuts would harm veterans and working families in his district and that reductions to education and workforce training programs would undermine the economic mobility he has championed for Riverside County residents.' },
    ],
    topSectors: [
      { category: 'Defense & Veterans Groups', amount: 520000, percentage: 38 },
      { category: 'Individual Contributors', amount: 680000, percentage: 50 },
      { category: 'Small-Dollar Donors', amount: 165000, percentage: 12 },
    ],
  },

  {
    bioguideId: 'S000344',
    slug: 'brad-sherman',
    name: 'Brad Sherman',
    party: 'D',
    chamber: 'House',
    district: 32,
    state: 'California',
    currentTitle: "U.S. Representative, California's 32nd Congressional District",
    bio: 'Brad Sherman, a CPA and tax attorney who has represented the San Fernando Valley since 1997, is a senior member of both Financial Services and Foreign Affairs — he is particularly known for sharp oversight of Wall Street, opposition to bank deregulation, and hawkish positions on Iran sanctions.',
    photoUrl: 'https://www.congress.gov/img/member/s000344_200.jpg',
    sinceYear: 1997,
    committees: [
      { slug: 'house-financial-services', name: 'House Financial Services Committee', chamber: 'House', role: 'Member', description: 'Regulates banking, housing, consumer finance, securities markets, and international monetary policy. Oversees the Federal Reserve, SEC, FDIC, and Fannie Mae and Freddie Mac.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'Too Big to Fail, Too Big to Exist Act',
      year: 2023,
      summary: 'Sherman reintroduced his perennial legislation to break up the largest U.S. banks, arguing that institutions whose failure would require a bailout should not be allowed to exist.',
    },
    notableVote: {
      title: 'Against major bank deregulation provisions',
      year: 2018,
      summary: 'Sherman was a prominent opponent of the Economic Growth, Regulatory Relief, and Consumer Protection Act, arguing it weakened post-2008 financial safeguards.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Sherman, a CPA and senior Financial Services and Foreign Affairs Committee member representing the San Fernando Valley, voted against the FY2026 reconciliation bill, arguing that its tax cuts were fiscally reckless and that proposed reductions to consumer financial protections would leave San Fernando Valley homeowners and small business owners vulnerable to predatory practices.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 780000, percentage: 55 },
      { category: 'Financial Industry', amount: 420000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 210000, percentage: 15 },
    ],
  },

  {
    bioguideId: 'A000371',
    slug: 'pete-aguilar',
    name: 'Pete Aguilar',
    party: 'D',
    chamber: 'House',
    district: 33,
    state: 'California',
    currentTitle: "U.S. Representative, California's 33rd Congressional District",
    bio: 'Pete Aguilar, the House Democratic Caucus Chair and the highest-ranking Latino in congressional Democratic leadership, leverages his Appropriations seat and leadership role to fight for Inland Empire infrastructure, immigration reform, and to coordinate Democratic opposition to Republican budget cuts in 2025.',
    photoUrl: 'https://www.congress.gov/img/member/a000371_200.jpg',
    sinceYear: 2015,
    committees: [
      { slug: 'house-appropriations', name: 'House Appropriations Committee', chamber: 'House', role: 'Member', description: 'Controls discretionary federal spending through 12 annual appropriations subcommittees. Members with seats here have significant leverage over agency budgets and priorities.' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected House Democratic Caucus Chair — highest-ranking Latino in congressional leadership' },
    ],
    notableBill: {
      title: 'Dream and Promise Act',
      year: 2021,
      summary: 'Aguilar was a lead co-sponsor and floor advocate for the Dream and Promise Act, which would provide a pathway to citizenship for 4 million DACA recipients and TPS holders.',
    },
    notableVote: {
      title: 'Led Democratic Opposition to Republican Budget Reconciliation Cuts — 119th Congress',
      year: 2025,
      summary: 'As Democratic Caucus Chair, Aguilar organized and led unified Democratic opposition to the Republican budget reconciliation package in 2025, publicly condemning cuts to Medicaid and other safety-net programs as harmful to working families across the country.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Aguilar, the House Democratic Caucus Chair and a senior Appropriations Committee member, led the unified Democratic vote against the FY2026 reconciliation bill, calling it a direct attack on Medicaid, food assistance, and clean energy investments that his Inland Empire constituents depend on and organizing floor speeches to highlight its harm to working-class Latino families.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1400000, percentage: 52 },
      { category: 'Labor & Unions', amount: 700000, percentage: 26 },
      { category: 'Small-Dollar Donors', amount: 600000, percentage: 22 },
    ],
  },

  {
    bioguideId: 'G000585',
    slug: 'jimmy-gomez',
    name: 'Jimmy Gomez',
    party: 'D',
    chamber: 'House',
    district: 34,
    state: 'California',
    currentTitle: "U.S. Representative, California's 34th Congressional District",
    bio: 'Jimmy Gomez, a former California Assemblyman who grew up in a farmworker family in Southeast Los Angeles, is a Ways & Means member and progressive champion on economic security, immigrant rights, and universal basic income experimentation.',
    photoUrl: 'https://www.congress.gov/img/member/115_rp_ca_34_gomez_jimmy_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-ways-and-means', name: 'House Ways & Means Committee', chamber: 'House', role: 'Member', description: 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.' },
      { slug: 'house-oversight', name: 'House Oversight & Accountability Committee', chamber: 'House', role: 'Member', description: 'The primary investigative committee of the House, with broad authority to investigate the executive branch, federal programs, and government waste, fraud, and abuse.' },
    ],
    notableBill: {
      title: 'American Families Act (Child Tax Credit expansion)',
      year: 2023,
      summary: 'Gomez championed making the enhanced Child Tax Credit — expanded temporarily by the American Rescue Plan — permanent, calling it the most effective anti-poverty tool in modern U.S. policy.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Gomez was a vocal advocate for the $1.9T COVID relief package, particularly the expanded child tax credit that cut child poverty in half in its first year.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Gomez, a Ways & Means and Oversight Committee member representing Southeast Los Angeles, voted against the FY2026 reconciliation bill, warning that its Medicaid cuts and rollback of the Child Tax Credit would devastate the working-class farmworker families in his district and reverse the poverty reduction he has made the centerpiece of his legislative career.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 620000, percentage: 50 },
      { category: 'Labor & Progressive Groups', amount: 370000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 250000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'T000474',
    slug: 'norma-torres',
    name: 'Norma Torres',
    party: 'D',
    chamber: 'House',
    district: 35,
    state: 'California',
    currentTitle: "U.S. Representative, California's 35th Congressional District",
    bio: 'Norma Torres, a former 911 dispatcher and Pomona Mayor who immigrated from Guatemala, uses her Appropriations and Foreign Affairs seats to champion Central American security funding, anti-human trafficking legislation, and Inland Empire infrastructure investment.',
    photoUrl: 'https://www.congress.gov/img/member/t000474_200.jpg',
    sinceYear: 2015,
    committees: [
      { slug: 'house-appropriations', name: 'House Appropriations Committee', chamber: 'House', role: 'Member', description: 'Controls discretionary federal spending through 12 annual appropriations subcommittees. Members with seats here have significant leverage over agency budgets and priorities.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'Northern Triangle and Border Stabilization Act',
      year: 2022,
      summary: 'Torres introduced legislation to fund anti-corruption and economic development programs in Guatemala, Honduras, and El Salvador to address root causes of migration.',
    },
    notableVote: {
      title: 'For Consolidated Appropriations Act',
      year: 2024,
      summary: 'Torres used her Appropriations seat to secure funding for Pomona-area transportation and community development projects.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Torres, a House Appropriations and Foreign Affairs Committee member representing Pomona and the Inland Empire, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would harm the immigrant communities she immigrated from Guatemala to represent and that slashing Central American aid programs would worsen the root-cause conditions driving migration.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 580000, percentage: 46 },
      { category: 'Labor & Unions', amount: 380000, percentage: 30 },
      { category: 'Central America Policy Groups', amount: 300000, percentage: 24 },
    ],
  },

  {
    bioguideId: 'L000582',
    slug: 'ted-lieu',
    name: 'Ted Lieu',
    party: 'D',
    chamber: 'House',
    district: 36,
    state: 'California',
    currentTitle: "U.S. Representative, California's 36th Congressional District",
    bio: 'Ted Lieu, an Air Force Judge Advocate and computer science graduate, has become one of Congress\'s sharpest voices on AI regulation, cybersecurity, and DOJ oversight — his Judiciary and Foreign Affairs seats give him platforms on the most consequential legal and technology debates of the era.',
    photoUrl: 'https://www.congress.gov/img/member/l000582_200.jpg',
    sinceYear: 2015,
    committees: [
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'AI Oversight Act',
      year: 2023,
      summary: 'Lieu introduced legislation establishing a congressional AI advisory commission to evaluate risks and recommend governance frameworks — notable for being written in part with an AI system, which he disclosed publicly.',
    },
    notableVote: {
      title: 'Voted for both Trump impeachments',
      year: 2021,
      summary: 'Lieu voted to impeach President Trump on both occasions and was an outspoken advocate for congressional accountability mechanisms.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Lieu, an Air Force veteran and House Judiciary and Foreign Affairs Committee member representing the South Bay, voted against the FY2026 reconciliation bill, arguing that its Medicaid cuts would harm Los Angeles County residents and using his Judiciary seat to highlight constitutional concerns about the bill\'s scope and the lack of proper committee review.' },
    ],
    topSectors: [
      { category: 'Tech Industry', amount: 780000, percentage: 46 },
      { category: 'Individual Contributors', amount: 590000, percentage: 35 },
      { category: 'Small-Dollar Donors', amount: 320000, percentage: 19 },
    ],
  },

  {
    bioguideId: 'K000400',
    slug: 'sydney-kamlager-dove',
    name: 'Sydney Kamlager-Dove',
    party: 'D',
    chamber: 'House',
    district: 37,
    state: 'California',
    currentTitle: "U.S. Representative, California's 37th Congressional District",
    bio: 'Sydney Kamlager-Dove, a former California Assemblywoman and State Senator, represents Culver City and Inglewood with a focus on racial equity, criminal justice reform, housing, and U.S. foreign policy in Africa and the Middle East through her Foreign Affairs and Science seats.',
    photoUrl: 'https://www.congress.gov/img/member/k000400_200.jpg',
    sinceYear: 2023,
    committees: [
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
    ],
    notableBill: {
      title: 'INVEST in America\'s Communities Act',
      year: 2023,
      summary: 'Kamlager-Dove introduced legislation to direct federal infrastructure grants toward historically disinvested communities, requiring equity assessments in transportation funding decisions.',
    },
    notableVote: {
      title: 'Against Ukraine-Israel-Taiwan supplemental (progressive bloc)',
      year: 2024,
      summary: 'Kamlager-Dove was among a small group of progressive Democrats who voted against the supplemental aid package, citing concerns about unconditional military aid to Israel.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Kamlager-Dove, a House Foreign Affairs and Science Committee member representing Culver City and Inglewood, voted against the FY2026 reconciliation bill, arguing that its Medicaid and housing assistance cuts would devastate the low-income Black and Latino communities in her district and that clean energy rollbacks would worsen environmental inequities in the communities she represents.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 820000, percentage: 52 },
      { category: 'Labor & Progressive Groups', amount: 470000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 280000, percentage: 18 },
    ],
  },

  {
    bioguideId: 'S001156',
    slug: 'linda-sanchez',
    name: 'Linda Sánchez',
    party: 'D',
    chamber: 'House',
    district: 38,
    state: 'California',
    currentTitle: "U.S. Representative, California's 38th Congressional District",
    bio: 'Linda Sánchez, who entered Congress in 2003 alongside her sister Loretta Sánchez (the only sisters ever to serve simultaneously in Congress), is a senior Ways & Means member and longtime labor rights champion representing working-class communities in Los Angeles\'s southeastern suburbs.',
    photoUrl: 'https://www.congress.gov/img/member/116_rp_ca_38_snchez_linda_200.jpg',
    sinceYear: 2003,
    committees: [
      { slug: 'house-ways-and-means', name: 'House Ways & Means Committee', chamber: 'House', role: 'Member', description: 'The oldest House committee, with exclusive jurisdiction over taxation, trade, Social Security, Medicare, and unemployment insurance. All tax legislation must originate here.' },
    ],
    notableBill: {
      title: 'Social Security 2100 Act',
      year: 2023,
      summary: 'Sánchez championed the Social Security 2100 Act, which would expand benefits and extend the program\'s solvency by applying the payroll tax to higher earners.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Sánchez supported the ARP\'s expanded unemployment insurance and child tax credit, calling them essential lifelines for Whittier and Downey working families.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Sánchez, a senior Ways & Means Committee member representing southeastern Los Angeles\'s working-class suburbs, voted against the FY2026 reconciliation bill, warning that its tax provisions would slash Social Security\'s funding base and that Medicaid cuts would strip coverage from Whittier and Downey families who make up the backbone of her district.' },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 520000, percentage: 44 },
      { category: 'Individual Contributors', amount: 420000, percentage: 36 },
      { category: 'Small-Dollar Donors', amount: 240000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'T000472',
    slug: 'mark-takano',
    name: 'Mark Takano',
    party: 'D',
    chamber: 'House',
    district: 39,
    state: 'California',
    currentTitle: "U.S. Representative, California's 39th Congressional District",
    bio: 'Mark Takano, a former high school English teacher and the first openly gay person of color elected to Congress, is the Ranking Member of the House Veterans Affairs Committee and a senior Education Committee member representing Riverside — he focuses on veteran healthcare access and public school funding.',
    photoUrl: 'https://www.congress.gov/img/member/t000472_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-education-workforce', name: 'House Education & the Workforce Committee', chamber: 'House', role: 'Member', description: 'Covers K-12 and higher education, labor law, workplace safety, and pension policy. Writes reauthorizations of laws like ESEA and the Higher Education Act.' },
    ],
    keyMilestones: [
      { year: 2021, description: 'Chairs House Veterans Affairs Committee — leads passage of PACT Act on toxic exposure' },
    ],
    notableBill: {
      title: 'PACT Act (Sergeant First Class Heath Robinson Honoring Our Promise to Address Comprehensive Toxics Act)',
      year: 2022,
      summary: 'Takano was the House author of the PACT Act, the largest expansion of VA benefits in decades — covering toxic exposure from burn pits and Agent Orange for approximately 5 million veterans.',
    },
    notableVote: {
      title: 'For American Rescue Plan',
      year: 2021,
      summary: 'Takano supported the ARP, highlighting its education funding stabilization provisions for Riverside Unified School District.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Takano, Ranking Member of the House Veterans Affairs Committee and an Education Committee member representing Riverside, voted against the FY2026 reconciliation bill, warning that proposed cuts to VA healthcare programs would harm the large veteran population in his district and that reductions to education funding would undermine Riverside Unified\'s schools.' },
    ],
    topSectors: [
      { category: 'Labor & Education Groups', amount: 480000, percentage: 40 },
      { category: 'Individual Contributors', amount: 420000, percentage: 35 },
      { category: 'Veterans Organizations', amount: 300000, percentage: 25 },
    ],
  },

  {
    bioguideId: 'K000397',
    slug: 'young-kim',
    name: 'Young Kim',
    party: 'R',
    chamber: 'House',
    district: 40,
    state: 'California',
    currentTitle: "U.S. Representative, California's 40th Congressional District",
    bio: 'Young Kim, one of the first Korean American women elected to Congress, represents a competitive Orange County district and uses her Foreign Affairs, Financial Services, and Science seats to strengthen U.S.-Korea economic ties, advance financial literacy, and support semiconductor manufacturing.',
    photoUrl: 'https://www.congress.gov/img/member/k000397_200.jpg',
    sinceYear: 2021,
    committees: [
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
      { slug: 'house-financial-services', name: 'House Financial Services Committee', chamber: 'House', role: 'Member', description: 'Regulates banking, housing, consumer finance, securities markets, and international monetary policy. Oversees the Federal Reserve, SEC, FDIC, and Fannie Mae and Freddie Mac.' },
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
    ],
    notableBill: {
      title: 'Korean American WWII Veterans Congressional Gold Medal Act',
      year: 2022,
      summary: 'Kim authored legislation to award the Congressional Gold Medal to Korean American veterans who served in the U.S. military during World War II, honoring their overlooked contributions.',
    },
    notableVote: {
      title: 'For CHIPS and Science Act',
      year: 2022,
      summary: 'Kim was one of the few Republicans to support the CHIPS Act, arguing that semiconductor manufacturing investment directly benefits California\'s defense and tech industries.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Kim, a House Foreign Affairs, Financial Services, and Science Committee member representing a competitive Orange County district, backed the FY2026 reconciliation bill, emphasizing its tax relief for small businesses and financial sector regulatory streamlining she said would benefit the entrepreneurs and Korean American business owners throughout her district.' },
    ],
    topSectors: [
      { category: 'Financial & Tech Industries', amount: 680000, percentage: 45 },
      { category: 'Individual Contributors', amount: 530000, percentage: 35 },
      { category: 'Korean American Community', amount: 300000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'C000059',
    slug: 'ken-calvert',
    name: 'Ken Calvert',
    party: 'R',
    chamber: 'House',
    district: 41,
    state: 'California',
    currentTitle: "U.S. Representative, California's 41st Congressional District",
    bio: 'Ken Calvert, the longest-serving California Republican in Congress and Chair of the Defense Appropriations Subcommittee, controls the single largest discretionary spending account in the federal budget — using it to protect March Air Reserve Base and attract defense contracts to the Riverside-Corona area.',
    photoUrl: 'https://www.congress.gov/img/member/c000059_200.jpg',
    sinceYear: 1993,
    committees: [
      { slug: 'house-appropriations', name: 'House Appropriations Committee', chamber: 'House', role: 'Chair', description: 'Controls discretionary federal spending through 12 annual appropriations subcommittees. Members with seats here have significant leverage over agency budgets and priorities.' },
    ],
    keyMilestones: [
      { year: 2023, description: 'Becomes Chair of the Defense Appropriations Subcommittee — controls the largest discretionary federal spending account' },
    ],
    notableBill: {
      title: 'Defense Appropriations — Space Force Investment provisions',
      year: 2024,
      summary: 'Calvert secured major Space Force infrastructure investments at Vandenberg and Patrick Space Force Bases through the FY2024 Defense Appropriations bill.',
    },
    notableVote: {
      title: 'For Cut-and-Grow approach to military spending',
      year: 2023,
      summary: 'Calvert navigated the difficult balance between fiscal conservative demands for cuts and the defense community\'s need for investment, ultimately clearing defense appropriations.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Calvert, Chair of the Defense Appropriations Subcommittee, backed the FY2026 reconciliation bill, highlighting its spending discipline on domestic programs and arguing that reallocating resources toward defense priorities would strengthen March Air Reserve Base and the Riverside-area defense contractors that anchor his district\'s economy.' },
    ],
    topSectors: [
      { category: 'Defense Contractors', amount: 980000, percentage: 52 },
      { category: 'Real Estate', amount: 450000, percentage: 24 },
      { category: 'Individual Contributors', amount: 450000, percentage: 24 },
    ],
  },

  {
    bioguideId: 'G000598',
    slug: 'robert-garcia',
    name: 'Robert Garcia',
    party: 'D',
    chamber: 'House',
    district: 42,
    state: 'California',
    currentTitle: "U.S. Representative, California's 42nd Congressional District",
    bio: 'Robert Garcia, the first openly LGBTQ immigrant elected to Congress and former Mayor of Long Beach, sits on Armed Services and Oversight — he uses the Port of Long Beach\'s global significance to advance supply chain policy and speaks from personal experience as an immigrant who naturalized in 2009.',
    photoUrl: 'https://www.congress.gov/img/member/g000598_200.jpg',
    sinceYear: 2023,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-oversight', name: 'House Oversight & Accountability Committee', chamber: 'House', role: 'Member', description: 'The primary investigative committee of the House, with broad authority to investigate the executive branch, federal programs, and government waste, fraud, and abuse.' },
    ],
    notableBill: {
      title: 'Port Security and Supply Chain Resilience Act',
      year: 2023,
      summary: 'Garcia introduced legislation to strengthen cybersecurity at major U.S. seaports and fund supply chain data infrastructure, building on his experience overseeing the Port of Long Beach.',
    },
    notableVote: {
      title: 'For Ukraine Security Supplemental',
      year: 2024,
      summary: 'Garcia supported the $61B Ukraine aid package, citing the defense manufacturing jobs it supports in Long Beach\'s shipbuilding sector.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Garcia, a House Armed Services and Oversight Committee member and former Long Beach Mayor, voted against the FY2026 reconciliation bill, arguing that Medicaid cuts would harm immigrants and working-class port workers who power the Long Beach economy and that proposed supply chain deregulation would undermine the port security standards he has championed.' },
    ],
    topSectors: [
      { category: 'Labor & Ports', amount: 520000, percentage: 38 },
      { category: 'Individual Contributors', amount: 620000, percentage: 45 },
      { category: 'Small-Dollar Donors', amount: 235000, percentage: 17 },
    ],
  },

  {
    bioguideId: 'W000187',
    slug: 'maxine-waters',
    name: 'Maxine Waters',
    party: 'D',
    chamber: 'House',
    district: 43,
    state: 'California',
    currentTitle: "U.S. Representative, California's 43rd Congressional District",
    bio: 'Maxine Waters, one of the most recognizable progressives in Congress and Ranking Member of the House Financial Services Committee, has spent three decades fighting for affordable housing, consumer financial protection, and debt relief for developing nations — her "reclaiming my time" moment became a cultural phenomenon.',
    photoUrl: 'https://www.congress.gov/img/member/w000187_200.jpg',
    sinceYear: 1991,
    committees: [
      { slug: 'house-financial-services', name: 'House Financial Services Committee', chamber: 'House', role: 'Ranking Member', description: 'Regulates banking, housing, consumer finance, securities markets, and international monetary policy. Oversees the Federal Reserve, SEC, FDIC, and Fannie Mae and Freddie Mac.' },
    ],
    keyMilestones: [
      { year: 2019, description: 'Chairs House Financial Services Committee — first Black woman to chair a major House committee' },
    ],
    notableBill: {
      title: 'Ending Homelessness Act',
      year: 2023,
      summary: 'Waters introduced sweeping legislation to dramatically increase federal housing vouchers and affordable housing construction, addressing what she calls a national housing emergency.',
    },
    notableVote: {
      title: 'Against Dodd-Frank rollbacks',
      year: 2018,
      summary: 'Waters was the most prominent opponent of the Economic Growth, Regulatory Relief, and Consumer Protection Act, arguing it gutted key post-financial-crisis consumer protections.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Waters, Ranking Member of the House Financial Services Committee, voted against the FY2026 reconciliation bill, arguing that its cuts to affordable housing programs would worsen the homelessness crisis in her South Los Angeles district and that its financial deregulation provisions would strip away the consumer protections she has spent three decades building.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 860000, percentage: 50 },
      { category: 'Labor & Housing Advocates', amount: 520000, percentage: 30 },
      { category: 'Small-Dollar Donors', amount: 350000, percentage: 20 },
    ],
  },

  {
    bioguideId: 'B001300',
    slug: 'nanette-barragan',
    name: 'Nanette Barragán',
    party: 'D',
    chamber: 'House',
    district: 44,
    state: 'California',
    currentTitle: "U.S. Representative, California's 44th Congressional District",
    bio: 'Nanette Barragán, a former civil rights attorney who represents the refinery-dense communities of Watts, Compton, and Carson, uses her Energy & Commerce seat to fight for environmental justice, clean air protections, and healthcare access for working-class South Los Angeles communities.',
    photoUrl: 'https://www.congress.gov/img/member/b001300_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
    ],
    notableBill: {
      title: 'Environmental Justice For All Act',
      year: 2023,
      summary: 'Barragán introduced comprehensive environmental justice legislation requiring federal agencies to assess health impacts on frontline communities before approving new industrial facilities.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act — Environmental Justice provisions',
      year: 2022,
      summary: 'Barragán championed the IRA\'s environmental justice investments, particularly its funding for pollution reduction in fence-line communities like those in her district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Barragán, a House Energy & Commerce Committee member representing refinery-dense Watts, Compton, and Carson, voted against the FY2026 reconciliation bill, calling its rollback of clean energy standards and EPA enforcement funding a direct assault on the health of fence-line communities in her district who already suffer disproportionate pollution exposure.' },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 420000, percentage: 38 },
      { category: 'Individual Contributors', amount: 390000, percentage: 35 },
      { category: 'Environmental Groups', amount: 300000, percentage: 27 },
    ],
  },

  {
    bioguideId: 'T000488',
    slug: 'derek-tran',
    name: 'Derek Tran',
    party: 'D',
    chamber: 'House',
    district: 45,
    state: 'California',
    currentTitle: "U.S. Representative, California's 45th Congressional District",
    bio: 'Derek Tran, a Vietnamese American consumer protection attorney and the son of refugees, flipped this Orange County seat in a stunning 2024 upset against incumbent Michelle Steel — he brings a worker advocacy and military service community perspective to his Armed Services assignment.',
    photoUrl: 'https://www.congress.gov/img/member/6774606d0b34857ecc9091a9_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
    ],
    notableBill: {
      title: 'Vietnamese American Veterans Recognition Act',
      year: 2025,
      summary: 'Tran introduced legislation to formally recognize the service of Vietnamese Americans who served in the U.S. military following the fall of Saigon, honoring his district\'s large Vietnamese American community.',
    },
    notableVote: {
      title: 'Against cuts to veterans healthcare',
      year: 2025,
      summary: 'Tran opposed Republican budget amendments that would have reduced VA community care funding, citing the large veteran population in Orange County.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Tran, a consumer protection attorney and Armed Services Committee member representing Orange County\'s large Vietnamese American community, voted against the FY2026 reconciliation bill, warning that Medicaid cuts would harm refugees and working-class immigrant families in his district and that reductions to VA community care would betray the veterans he has made the focus of his first term.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1600000, percentage: 58 },
      { category: 'Labor & Progressive Groups', amount: 700000, percentage: 25 },
      { category: 'Small-Dollar Donors', amount: 480000, percentage: 17 },
    ],
  },

  {
    bioguideId: 'C001110',
    slug: 'lou-correa',
    name: 'Lou Correa',
    party: 'D',
    chamber: 'House',
    district: 46,
    state: 'California',
    currentTitle: "U.S. Representative, California's 46th Congressional District",
    bio: 'Lou Correa, a former California State Senator representing Santa Ana, takes a centrist-pragmatic approach on the Judiciary Committee, where he focuses on immigration enforcement reform, port-of-entry drug interdiction, and balanced approaches to asylum policy that can attract bipartisan support.',
    photoUrl: 'https://www.congress.gov/img/member/115_rp_ca_46_correa_j_200.jpg',
    sinceYear: 2017,
    committees: [
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
    ],
    notableBill: {
      title: 'Ports of Entry Drug Interdiction Act',
      year: 2023,
      summary: 'Correa introduced legislation to increase technology and personnel at southern border ports of entry to intercept fentanyl — a more bipartisan approach to border security than wall-focused alternatives.',
    },
    notableVote: {
      title: 'For bipartisan border security compromise discussions',
      year: 2024,
      summary: 'Correa engaged constructively in bipartisan border security negotiations, breaking from some progressive Democrats to support increased enforcement resources alongside humanitarian protections.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Correa, a centrist House Judiciary Committee member representing Santa Ana, voted against the FY2026 reconciliation bill, arguing that while he supported targeted border security improvements, the bill\'s Medicaid cuts would cause unacceptable harm to the working-class Latino families in his Orange County district.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 560000, percentage: 48 },
      { category: 'Labor & Unions', amount: 360000, percentage: 31 },
      { category: 'Small-Dollar Donors', amount: 250000, percentage: 21 },
    ],
  },

  {
    bioguideId: 'M001244',
    slug: 'dave-min',
    name: 'Dave Min',
    party: 'D',
    chamber: 'House',
    district: 47,
    state: 'California',
    currentTitle: "U.S. Representative, California's 47th Congressional District",
    bio: 'Dave Min, a law professor and former California State Senator who flipped this competitive Newport Beach-area seat in 2024, brings financial regulatory expertise from his UCLA Law faculty position to his Armed Services and Judiciary assignments in Congress.',
    photoUrl: 'https://www.congress.gov/img/member/67744ed90b34857ecc909155_200.jpg',
    sinceYear: 2025,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
    ],
    notableBill: {
      title: 'Coastal Military Installation Climate Resilience Act',
      year: 2025,
      summary: 'Min introduced legislation to fund climate adaptation infrastructure at coastal military installations, including Camp Pendleton\'s coastal facilities vulnerable to sea-level rise.',
    },
    notableVote: {
      title: 'Against Republican immigration enforcement bills',
      year: 2025,
      summary: 'Min opposed broadly written immigration enforcement legislation, arguing it would harm legal immigrants and DACA recipients in his Orange County district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Min, a law professor and Armed Services and Judiciary Committee member representing Newport Beach and competitive Orange County, voted against the FY2026 reconciliation bill, arguing that its Medicaid cuts would harm working-class families in his district and using his financial regulatory expertise to warn that its deregulatory provisions posed systemic risks to consumers.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1800000, percentage: 60 },
      { category: 'Small-Dollar Donors', amount: 750000, percentage: 25 },
      { category: 'Labor & Democratic Groups', amount: 450000, percentage: 15 },
    ],
  },

  {
    bioguideId: 'I000056',
    slug: 'darrell-issa',
    name: 'Darrell Issa',
    party: 'R',
    chamber: 'House',
    district: 48,
    state: 'California',
    currentTitle: "U.S. Representative, California's 48th Congressional District",
    bio: 'Darrell Issa, a car alarm magnate and one of Congress\'s wealthiest members, returned to the House in 2021 after previously serving as the most aggressive House investigator of the Obama administration — he continues his oversight work on Judiciary while also focusing on intellectual property and foreign affairs.',
    photoUrl: 'https://www.congress.gov/img/member/i000056_200.jpg',
    sinceYear: 2021,
    committees: [
      { slug: 'house-judiciary', name: 'House Judiciary Committee', chamber: 'House', role: 'Member', description: 'Handles federal criminal law, civil rights, immigration, antitrust, intellectual property, and constitutional amendments. Conducts impeachment proceedings and oversees the Justice Department.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'PREVAIL Act (Patent Review reforms)',
      year: 2023,
      summary: 'Issa introduced legislation to reform the Patent Trial and Appeal Board process, strengthening patent holder protections — reflecting his background as an inventor and manufacturer.',
    },
    notableVote: {
      title: 'For government shutdown negotiations (spending hawk)',
      year: 2023,
      summary: 'Issa supported aggressive spending cut positions during House Republican internal debates over government funding levels.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Issa, a House Judiciary and Foreign Affairs Committee member representing San Diego\'s North County, backed the FY2026 reconciliation bill, calling it a necessary correction to runaway federal spending and highlighting border security provisions he said would reduce illegal crossings near his district\'s proximity to the U.S.-Mexico border.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1200000, percentage: 60 },
      { category: 'Tech & IP Industries', amount: 480000, percentage: 24 },
      { category: 'Defense', amount: 320000, percentage: 16 },
    ],
  },

  {
    bioguideId: 'L000593',
    slug: 'mike-levin',
    name: 'Mike Levin',
    party: 'D',
    chamber: 'House',
    district: 49,
    state: 'California',
    currentTitle: "U.S. Representative, California's 49th Congressional District",
    bio: 'Mike Levin, an environmental attorney representing the San Diego-Orange County coastal corridor from Dana Point to Del Mar, uses his Energy & Commerce and Natural Resources seats to champion offshore wind development, clean energy transition, and Camp Pendleton\'s environmental stewardship.',
    photoUrl: 'https://www.congress.gov/img/member/l000593_200.jpg',
    sinceYear: 2019,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
      { slug: 'house-natural-resources', name: 'House Natural Resources Committee', chamber: 'House', role: 'Member', description: 'Has jurisdiction over federal public lands, national parks, forests, minerals, water, and energy development on federal property. Shapes policy for more than 600 million acres of public land.' },
    ],
    notableBill: {
      title: 'Offshore Wind Development Act',
      year: 2023,
      summary: 'Levin introduced legislation to accelerate federal offshore wind lease approvals and streamline environmental review for California offshore wind projects.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act — Clean Energy provisions',
      year: 2022,
      summary: 'Levin championed the IRA\'s offshore wind and clean energy tax credit provisions as directly applicable to Southern California\'s emerging offshore wind corridor.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Levin, a House Energy & Commerce and Natural Resources Committee member representing the San Diego-Orange County coastal corridor, voted against the FY2026 reconciliation bill, warning that its rollback of offshore wind tax incentives would kill thousands of clean energy jobs in his coastal district and that Medicaid cuts would harm the working families along the Dana Point to Del Mar coastline.' },
    ],
    topSectors: [
      { category: 'Clean Energy & Environmental', amount: 490000, percentage: 38 },
      { category: 'Individual Contributors', amount: 510000, percentage: 40 },
      { category: 'Small-Dollar Donors', amount: 280000, percentage: 22 },
    ],
  },

  {
    bioguideId: 'P000608',
    slug: 'scott-peters',
    name: 'Scott Peters',
    party: 'D',
    chamber: 'House',
    district: 50,
    state: 'California',
    currentTitle: "U.S. Representative, California's 50th Congressional District",
    bio: 'Scott Peters, a former San Diego City Councilman and environmental lawyer, is a key Energy & Commerce member known for his centrist, bipartisan approach to drug pricing reform, energy policy, and biotech regulation — his district includes some of the world\'s leading biomedical research institutions.',
    photoUrl: 'https://www.congress.gov/img/member/p000608_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-energy-commerce', name: 'House Energy & Commerce Committee', chamber: 'House', role: 'Member', description: 'The broadest House committee, covering health, energy, environment, telecommunications, consumer protection, and interstate commerce. Writes major legislation including the Affordable Care Act.' },
      { slug: 'house-science-space-technology', name: 'House Science, Space & Technology Committee', chamber: 'House', role: 'Member', description: 'Oversees federal R&D investment, NASA, NOAA, NIST, and science education policy. Shapes America\'s competitiveness in technology, energy research, and space exploration.' },
    ],
    notableBill: {
      title: 'Elijah E. Cummings Lower Drug Costs Now Act — bipartisan provisions',
      year: 2021,
      summary: 'Peters was a key negotiator on bipartisan drug pricing legislation, working to find a compromise between the House progressive approach and Senate centrist concerns.',
    },
    notableVote: {
      title: 'For Inflation Reduction Act — Drug Pricing',
      year: 2022,
      summary: 'Peters supported the IRA\'s Medicare drug negotiation provisions after helping shape them, calling it a necessary compromise to lower costs for San Diego seniors.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Peters, a centrist Energy & Commerce Committee member representing San Diego\'s biomedical research corridor, voted against the FY2026 reconciliation bill, arguing that its changes to Medicare drug pricing frameworks would reverse negotiated savings for seniors and create uncertainty for the biotech and pharmaceutical companies at the heart of his district\'s innovation economy.' },
    ],
    topSectors: [
      { category: 'Biotech & Pharma', amount: 680000, percentage: 46 },
      { category: 'Individual Contributors', amount: 540000, percentage: 37 },
      { category: 'Clean Energy', amount: 250000, percentage: 17 },
    ],
  },

  {
    bioguideId: 'J000305',
    slug: 'sara-jacobs',
    name: 'Sara Jacobs',
    party: 'D',
    chamber: 'House',
    district: 51,
    state: 'California',
    currentTitle: "U.S. Representative, California's 51st Congressional District",
    bio: 'Sara Jacobs, granddaughter of Qualcomm founder Irwin Jacobs and a former USAID diplomat, brings a global conflict prevention and human rights lens to her Armed Services and Foreign Affairs seats representing San Diego — she is one of Congress\'s loudest voices on civilian protection in armed conflict.',
    photoUrl: 'https://www.congress.gov/img/member/j000305_200.jpg',
    sinceYear: 2021,
    committees: [
      { slug: 'house-armed-services', name: 'House Armed Services Committee', chamber: 'House', role: 'Member', description: 'Authorizes the defense budget and military policy through the annual NDAA. Oversees the Pentagon, all military branches, nuclear weapons, and military construction.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'Civilian Harm Mitigation and Transparency Act',
      year: 2023,
      summary: 'Jacobs introduced legislation requiring the Pentagon to publicly report civilian casualty investigations and implement a standing civilian protection review process.',
    },
    notableVote: {
      title: 'Against unconditional weapons transfers to Israel',
      year: 2024,
      summary: 'Jacobs was among a group of Democratic members expressing concern about civilian harm in Gaza and calling for conditions on weapons transfers.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Jacobs, a former USAID diplomat and Armed Services and Foreign Affairs Committee member representing San Diego, voted against the FY2026 reconciliation bill, arguing that cuts to international humanitarian assistance programs would worsen civilian harm in conflict zones and that Medicaid reductions would hurt the veterans and military families she serves in San Diego\'s defense community.' },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 1100000, percentage: 55 },
      { category: 'Small-Dollar Donors', amount: 540000, percentage: 27 },
      { category: 'Defense & Security', amount: 360000, percentage: 18 },
    ],
  },

  {
    bioguideId: 'V000130',
    slug: 'juan-vargas',
    name: 'Juan Vargas',
    party: 'D',
    chamber: 'House',
    district: 52,
    state: 'California',
    currentTitle: "U.S. Representative, California's 52nd Congressional District",
    bio: 'Juan Vargas, a former Jesuit seminarian and San Diego City Councilman representing the U.S.-Mexico border region, uses his Financial Services and Foreign Affairs seats to champion cross-border economic development, remittance access for immigrant workers, and deeper U.S.-Mexico diplomatic ties.',
    photoUrl: 'https://www.congress.gov/img/member/v000130_200.jpg',
    sinceYear: 2013,
    committees: [
      { slug: 'house-financial-services', name: 'House Financial Services Committee', chamber: 'House', role: 'Member', description: 'Regulates banking, housing, consumer finance, securities markets, and international monetary policy. Oversees the Federal Reserve, SEC, FDIC, and Fannie Mae and Freddie Mac.' },
      { slug: 'house-foreign-affairs', name: 'House Foreign Affairs Committee', chamber: 'House', role: 'Member', description: 'Reviews U.S. foreign policy, international aid, arms sales, and diplomatic relations. Works alongside the Senate Foreign Relations Committee but lacks treaty confirmation power.' },
    ],
    notableBill: {
      title: 'Remittance Access Act',
      year: 2023,
      summary: 'Vargas introduced legislation to cap remittance fees, making it cheaper for immigrant workers in his border district to send money to family members in Mexico and Central America.',
    },
    notableVote: {
      title: 'For Farm Workforce Modernization Act',
      year: 2021,
      summary: 'Vargas supported the Farm Workforce Modernization Act, which would provide legal status for agricultural workers — essential for the Imperial Valley farming economy in his district.',
    },
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Vargas, a House Financial Services and Foreign Affairs Committee member representing the U.S.-Mexico border, voted against the FY2026 reconciliation bill, arguing that its Medicaid cuts would devastate the border communities and immigrant workers in the Imperial Valley and that its remittance fee provisions would harm the farmworkers in his district who send money to family in Mexico.' },
    ],
    topSectors: [
      { category: 'Financial Services', amount: 480000, percentage: 38 },
      { category: 'Agriculture & Border Economy', amount: 360000, percentage: 29 },
      { category: 'Individual Contributors', amount: 415000, percentage: 33 },
    ],
  },
]

export const caDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((data) => [data.slug, buildCongressProfile(data)])
)

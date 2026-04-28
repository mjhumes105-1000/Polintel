import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001288',
    slug: 'cory-booker',
    name: 'Cory Booker',
    party: 'D',
    chamber: 'Senate',
    state: 'New Jersey',
    currentTitle: 'U.S. Senator from New Jersey',
    bio: 'Cory Booker has served as a U.S. Senator from New Jersey since 2013, when he was elected in a special election following the death of Frank Lautenberg. A Yale Law graduate who began his career as a tenant rights lawyer in Newark, he served as Mayor of Newark from 2006 to 2013 — transforming the city\'s finances and championing public safety reform. He ran for president in 2020, was a leading voice on criminal justice reform and food security, and co-authored the First Step Act with Republican Senator Tim Scott.',
    sinceYear: 2013,
    committees: [
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Mayor of Newark, New Jersey', jurisdiction: 'City of Newark, NJ', startDate: '2006-07-01', endDate: '2013-10-31' },
      { title: 'Newark City Councilman, Central Ward', jurisdiction: 'Newark City Council', startDate: '1998-07-01', endDate: '2002-06-30' },
    ],
    keyMilestones: [
      { year: 1998, description: 'Elected to Newark City Council; began high-profile work on housing and tenant rights in the Central Ward' },
      { year: 2006, description: 'Elected Mayor of Newark, beginning an eight-year tenure focused on crime reduction and economic development' },
      { year: 2013, description: 'Won special election to U.S. Senate following Frank Lautenberg\'s death — first Black senator from New Jersey' },
      { year: 2018, description: 'Co-authored the First Step Act with Sen. Tim Scott and Jared Kushner — the most significant federal criminal justice reform in a generation' },
      { year: 2020, description: 'Ran for president, suspending campaign in January 2020 before the Iowa caucuses' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief law, which included direct payments, enhanced unemployment, and billions for state and local governments. Booker championed provisions expanding the Child Tax Credit, which he framed as the most significant anti-poverty action in a generation for New Jersey families.',
      },
      {
        title: 'First Step Act',
        year: 2018,
        month: 12,
        position: 'For',
        summary: 'Was a principal Senate author of the landmark bipartisan criminal justice reform law, passing 87–12. Booker worked with Sen. Tim Scott and Jared Kushner to reduce mandatory minimums for nonviolent drug offenses and expand earned-time credits — the most significant federal prison reform in decades.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill and delivered a marathon floor speech exceeding 12 hours opposing Medicaid cuts. He argued the bill would strip coverage from millions of low-income Americans and communities of color in New Jersey, where over 1.8 million residents rely on Medicaid.',
      },
      {
        title: 'Against FY2026 Budget Reconciliation — Healthcare Provisions',
        year: 2026,
        month: 2,
        position: 'Against',
        summary: 'Voted against Senate budget reconciliation instructions that included Medicaid per-capita cap provisions. Booker argued from the Judiciary and Agriculture Committees that proposed healthcare and SNAP changes would create hunger and coverage gaps in New Jersey\'s urban communities and rural food-insecure households.',
      },
    ],
    keyBills: [
      {
        title: 'First Step Act — Criminal Justice Reform',
        year: 2018,
        month: 12,
        summary: 'Principal Senate author of the First Step Act, reducing mandatory minimums for nonviolent drug offenses, expanding earned-time credits for federal prisoners, and requiring inmates to be housed closer to their families. The law passed with 87 votes across both parties and was signed by President Trump — Booker\'s signature bipartisan achievement.',
      },
      {
        title: 'Food Insecurity and Hunger Reduction Act',
        year: 2024,
        month: 6,
        summary: 'Introduced legislation from his Agriculture Committee seat to expand SNAP access and food pantry support for food-insecure households. New Jersey has significant hidden food insecurity in suburban communities, and Booker has been one of the Senate\'s leading voices on hunger as both a public health and economic issue.',
      },
    ],
    topSectors: [
      { category: 'Technology & Venture Capital', amount: 4200000, percentage: 32 },
      { category: 'Finance & Investment', amount: 3500000, percentage: 27 },
      { category: 'Legal & Lobbying', amount: 2100000, percentage: 16 },
      { category: 'Individual Contributors', amount: 3300000, percentage: 25 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Booker has consistently voted with the Senate Democratic caucus on major legislation and has been one of the Senate\'s most vocal advocates on criminal justice reform, food security, and civil rights.',
        'His First Step Act co-authorship stands as his most significant bipartisan legislative achievement — a genuine cross-aisle deal that reformed mandatory minimums and earned broad support from conservative groups including Koch-affiliated organizations.',
        'He opposed the Inflation Reduction Act\'s drug pricing provisions as inadequate and has pushed for stronger Medicare negotiation authority.',
      ],
      whatWeObserve: [
        'Booker is one of the Senate\'s most prominent progressive voices on criminal justice and poverty, but his actual legislative record shows more pragmatic bipartisanship than his public profile suggests — particularly on the First Step Act.',
        'His New Jersey base includes significant pharmaceutical industry presence (the state has one of the highest concentrations of pharma companies in the world), which creates constituency tension with his public health advocacy.',
        'His 2020 presidential campaign ended before voting began, limiting his national platform. He has remained one of the more visible Senate Democrats on cable news and social media.',
      ],
      whatIsUnresolved: [
        'Booker is up for re-election in 2026. His political future — including any potential future presidential run — depends on his Senate performance and the evolving national Democratic landscape.',
      ],
    },
  },

  {
    bioguideId: 'K000394',
    slug: 'andy-kim',
    name: 'Andy Kim',
    party: 'D',
    chamber: 'Senate',
    state: 'New Jersey',
    currentTitle: 'U.S. Senator from New Jersey',
    bio: 'Andy Kim served three terms representing New Jersey\'s 3rd Congressional District before winning the 2024 Senate race to fill the seat vacated by Bob Menendez\'s federal conviction and resignation. A Rhodes Scholar, Oxford graduate, and former National Security Council director under Presidents Obama and Trump, he was the first Korean-American elected to Congress from New Jersey. He gained national attention in January 2021 for personally helping to clean up the Capitol building following the January 6th attack.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, New Jersey 3rd District', jurisdiction: 'U.S. House of Representatives', startDate: '2019-01-03', endDate: '2025-01-03' },
      { title: 'Director of Afghanistan on the NSC', jurisdiction: 'National Security Council, White House', startDate: '2013-01-01', endDate: '2016-01-01' },
      { title: 'U.S. State Department Official', jurisdiction: 'U.S. Department of State', startDate: '2011-01-01', endDate: '2013-01-01' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress for NJ-3, flipping a Republican-held seat — the first Korean-American elected to Congress from New Jersey' },
      { year: 2021, description: 'Photographed helping clean up the Capitol on the night of January 6th — image became iconic symbol of the attack\'s aftermath' },
      { year: 2023, description: 'Announced Senate campaign without the backing of the New Jersey Democratic Party machine, challenging the traditional patronage-based primary process' },
      { year: 2024, description: 'Won Democratic Senate primary with 66%, and general election with 56%, replacing the seat held by convicted former Sen. Bob Menendez' },
      { year: 2025, description: 'Sworn in as New Jersey\'s first Korean-American U.S. Senator' },
    ],
    keyVotes: [
      {
        title: 'National Security Supplemental — Ukraine, Israel, and Taiwan Aid',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion national security supplemental as a House member, drawing on his NSC background directing Afghanistan policy. Kim was one of the most vocal House advocates for the package, arguing from firsthand experience that abandoning allied democracies would embolden adversaries in both Europe and the Indo-Pacific.',
      },
      {
        title: 'Against Pete Hegseth Confirmation — Secretary of Defense',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against confirming Pete Hegseth as Secretary of Defense — his first consequential Senate vote. Kim argued from his Armed Services Committee seat that managing the 3-million-person Defense Department requires operational experience, and that Hegseth\'s background in media did not prepare him for the role.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing the mandatory detention provisions lacked due process protections and could harm immigrant communities in New Jersey, including Korean-American and diverse immigrant populations in the state\'s suburban districts.',
      },
      {
        title: 'Senate Armed Services Committee — FY2026 NDAA Markup',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the Senate Armed Services Committee\'s FY2026 NDAA markup, including provisions on Indo-Pacific deterrence and allied security assistance programs. Kim applied his NSC expertise to shape language on Afghanistan and South Asia policy, and advocated for increased investment in cyber and intelligence capabilities.',
      },
    ],
    keyBills: [
      {
        title: 'South Korea–United States Alliance Strengthening Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation reinforcing the U.S.-South Korea alliance framework and supporting extended deterrence commitments on the Korean Peninsula. As the first Korean-American senator from New Jersey, Kim drew on both personal heritage and national security expertise in arguing for sustained U.S. commitment to alliance security in Northeast Asia.',
      },
      {
        title: 'Veterans Mental Health Parity Act provisions',
        year: 2026,
        month: 2,
        summary: 'Championed provisions through the Armed Services Committee expanding mental health parity requirements for veterans, combining his foreign policy background with constituent service for New Jersey\'s large veteran population.',
      },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 8500000, percentage: 55 },
      { category: 'Technology & Defense', amount: 3100000, percentage: 20 },
      { category: 'Finance', amount: 2400000, percentage: 16 },
      { category: 'Other / Unitemized', amount: 1400000, percentage: 9 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Kim\'s Senate win without party machine backing was nationally significant, demonstrating the viability of small-dollar, grassroots-funded campaigns in major Democratic primaries.',
        'His national security background — NSC director, State Department, U.S. Army research — is rare in Congress. He brings genuine operational expertise on foreign policy, Afghanistan, and Indo-Pacific strategy.',
        'As a House member, he consistently voted with House Democrats and was seen as a moderate on economic issues while being firmly progressive on national security.',
      ],
      whatWeObserve: [
        'Kim\'s Capitol cleanup moment transcended politics and cemented his identity as an institutional defender rather than a partisan combatant — an image he has carefully cultivated.',
        'His primary win over the machine-backed candidate signals a shift in New Jersey Democratic politics, potentially opening the path for more independent candidacies.',
        'His Armed Services and Foreign Relations committee assignments are well-matched to his background, but as a freshman senator he will need to build seniority before gaining major legislative influence.',
      ],
      whatIsUnresolved: [
        'How Kim positions himself within the Senate Democratic caucus — particularly on defense spending and foreign policy — will define his Senate tenure and determine his long-term influence.',
      ],
    },
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'N000188',
    slug: 'donald-norcross',
    name: 'Donald Norcross',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 1st District',
    bio: 'Donald Norcross has represented New Jersey\'s 1st Congressional District since 2014. A former electrician and president of the Southern New Jersey Building Trades Council, he is one of the few members of Congress to have worked in the skilled trades. He serves on the House Armed Services Committee and is a leading advocate for union labor, defense manufacturing, and workforce training in South Jersey — including the Delaware River shipyards and defense contractors that are major employers in his district.',
    sinceYear: 2014,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey State Senator, 5th District', jurisdiction: 'New Jersey State Senate', startDate: '2010-11-01', endDate: '2014-11-12' },
      { title: 'President, Southern NJ Building Trades Council', jurisdiction: 'AFL-CIO, Southern New Jersey', startDate: '2000-01-01', endDate: '2014-01-01' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected to New Jersey State Senate; began building a legislative record on labor and workforce issues' },
      { year: 2014, description: 'Won special election for NJ-1 following the departure of Rob Andrews; became the first from a trades background to represent the district in decades' },
      { year: 2019, description: 'Named co-chair of the House Armed Services Committee\'s Subcommittee on Readiness, increasing his influence over military personnel and base policy' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, which funded bridge replacements, rail upgrades, and water infrastructure in the Philadelphia–South Jersey corridor. Norcross highlighted the Delaware River crossings and Camden waterfront transit improvements that would directly benefit NJ-1 commuters.',
      },
      {
        title: 'NDAA FY2024 — Defense Manufacturing Provisions',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2024 NDAA, using his Armed Services Committee seat to protect defense manufacturing jobs in South Jersey. The district\'s shipyards and defense contractors are among the largest private employers in Camden and Burlington counties, and Norcross fought to maintain ship maintenance and construction contract funding.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill from his Armed Services and Education and Workforce Committee seats, citing the bill\'s rollback of apprenticeship and workforce training programs that he argued undermine the very pathway he himself used to enter the skilled trades and public life.',
      },
      {
        title: 'FY2026 Defense Manufacturing Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 defense appropriations measure, securing funding for South Jersey defense contractors and Delaware River shipyard maintenance contracts. Norcross used his Armed Services committee position to advocate for continued investment in the maritime industrial base critical to his district\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Worker Organizing and Empowerment Act provisions',
        year: 2021,
        month: 3,
        summary: 'Championed provisions strengthening the National Labor Relations Act and expanding workers\' rights to organize, reflecting his two decades leading the Southern NJ Building Trades Council. The bill passed the House but stalled in the Senate — a pattern Norcross has continued to push on through the Education and Workforce Committee.',
      },
      {
        title: 'Shipyard Workforce Development Act',
        year: 2024,
        month: 5,
        summary: 'Introduced legislation to fund apprenticeship and training programs for skilled trades workers at U.S. shipyards, directly addressing workforce shortages at the Delaware River facilities that are central to NJ-1\'s defense industrial base. Drew on his own background as a trained electrician and trades union president.',
      },
    ],
    topSectors: [
      { category: 'Labor Unions', amount: 650000, percentage: 42 },
      { category: 'Defense & Manufacturing', amount: 420000, percentage: 27 },
      { category: 'Individual Contributors', amount: 480000, percentage: 31 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Norcross has voted with House Democrats on nearly all major legislation and is a consistent advocate for union labor, workforce training, and defense manufacturing.',
        'His Armed Services Committee work focuses on military readiness and defense industry issues relevant to South Jersey\'s defense contractor base.',
        'He has been a reliable supporter of infrastructure investment, voting for the Infrastructure Investment and Jobs Act and other major public works legislation.',
      ],
      whatWeObserve: [
        'Norcross is closely associated with the South Jersey Democratic political organization run by his brother, state party leader George Norcross — a relationship that has generated scrutiny but also significant organizational strength.',
        'As one of the few members of Congress who physically worked a skilled trade before entering politics, he brings an authentic perspective on workforce policy that differentiates him from most of his colleagues.',
        'NJ-1 includes the Camden waterfront, historically one of New Jersey\'s most economically distressed areas. Norcross has been a consistent advocate for federal investment in economic revitalization there.',
      ],
      whatIsUnresolved: [
        'The political future of the Norcross political organization in South Jersey — and how its influence shapes Donald\'s congressional tenure — remains an ongoing area of observation.',
      ],
    },
  },

  {
    bioguideId: 'V000133',
    slug: 'jeff-van-drew',
    name: 'Jeff Van Drew',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 2nd District',
    bio: 'Jeff Van Drew has represented New Jersey\'s 2nd Congressional District since 2019. Elected as a Democrat, he switched to the Republican Party in December 2019 in opposition to the first impeachment of President Trump — one of the most dramatic party switches in recent congressional history. He serves on the House Armed Services Committee and focuses on veterans\' issues and the shore economy of South Jersey, including Atlantic City\'s hospitality industry and the Cape May fishing fleet.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey State Senator, 1st District', jurisdiction: 'New Jersey State Senate', startDate: '2008-01-13', endDate: '2019-01-03' },
      { title: 'New Jersey State Assemblyman, 1st District', jurisdiction: 'New Jersey General Assembly', startDate: '2002-01-01', endDate: '2008-01-13' },
      { title: 'Dentist & small business owner', jurisdiction: 'Dennis Township, New Jersey', startDate: '1978-01-01', endDate: '2002-01-01' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected to New Jersey General Assembly representing Cape May County\'s 1st District' },
      { year: 2008, description: 'Elevated to New Jersey State Senate, building a record as a conservative Democrat in South Jersey' },
      { year: 2018, description: 'Elected to Congress for NJ-2, flipping a Democratic seat in one of New Jersey\'s most competitive districts' },
      { year: 2019, description: 'Switched from Democrat to Republican in opposition to Trump impeachment; met with President Trump at the White House before announcing the switch' },
      { year: 2020, description: 'Re-elected as a Republican with 52% — first elected Republican from NJ-2 since 2010' },
      { year: 2024, description: 'Re-elected to the 119th Congress with 55%, consolidating his position as an incumbent Republican in the competitive district' },
    ],
    keyVotes: [
      {
        title: 'Against First Trump Impeachment',
        year: 2019,
        month: 12,
        position: 'Against',
        summary: 'Voted against the first impeachment of President Trump as a Democrat — one of only two Democrats to do so — then immediately switched parties, meeting with Trump at the White House before announcing his switch. He called the impeachment politically motivated and said he would be "100% a Trump guy." The switch transformed a marginal Democratic seat into a safe Republican one.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Van Drew has consistently supported immigration enforcement since switching parties and has been among the more vocal House Republicans on border security issues.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting its Medicaid work requirements and spending reductions. Van Drew backed the bill as consistent with his position as a Trump-aligned Republican focused on fiscal conservatism and border enforcement.',
      },
      {
        title: 'FY2026 Defense and Veterans Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 defense and veterans appropriations measure, supporting funding for Joint Base McGuire-Dix-Lakehurst and VA healthcare programs for South Jersey\'s large veteran population. Veterans\' issues have been central to Van Drew\'s legislative identity on both the Armed Services and Veterans\' Affairs Committees.',
      },
    ],
    keyBills: [
      {
        title: 'Shore Tourism and Coastal Economy Protection Act',
        year: 2023,
        month: 7,
        summary: 'Advocated for federal protections of Atlantic City\'s hospitality industry and South Jersey\'s coastal economy, opposing offshore wind regulations he argued would harm the fishing fleet and tourism sector. The bill sought to require more thorough economic impact assessments before federal offshore energy leasing decisions affecting the Jersey Shore.',
      },
      {
        title: 'Cape May Fisheries Regulatory Relief Act',
        year: 2024,
        month: 9,
        summary: 'Introduced legislation seeking regulatory relief for Cape May County\'s commercial fishing fleet, arguing NOAA catch limits had become economically unsustainable for small operators in one of New Jersey\'s oldest fishing communities.',
      },
    ],
    topSectors: [
      { category: 'Defense & Aerospace', amount: 480000, percentage: 38 },
      { category: 'Real Estate & Hospitality', amount: 320000, percentage: 25 },
      { category: 'Finance', amount: 250000, percentage: 20 },
      { category: 'Other / Unitemized', amount: 210000, percentage: 17 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Since switching parties, Van Drew has voted almost entirely along Republican lines and has been a consistent supporter of President Trump.',
        'His party switch in 2019 was one of the most significant in modern congressional history, representing a personal and political gamble that paid off electorally in 2020 and 2022.',
        'He focuses primarily on issues directly affecting South Jersey: veterans, defense, the shore economy, and offshore energy.',
      ],
      whatWeObserve: [
        'Van Drew\'s party switch reflects the broader ideological realignment of working-class coastal communities in South Jersey — areas that voted for Obama twice, then shifted toward Trump in 2016 and 2020.',
        'His district (NJ-2) includes Atlantic City and Cape May County — economically distinct from suburban and urban New Jersey, with a conservative cultural profile that makes it a competitive swing district.',
        'Having been a dentist and state legislator before Congress, Van Drew brings a different background than many colleagues — more small-business owner than political professional.',
      ],
      whatIsUnresolved: [
        'NJ-2 remains a competitive district. Van Drew\'s re-election margins suggest incumbency advantage, but the seat will remain contested if he retires or becomes vulnerable.',
      ],
    },
  },

  {
    bioguideId: 'C001136',
    slug: 'herb-conaway',
    name: 'Herb Conaway',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 3rd District',
    bio: 'Herb Conaway won New Jersey\'s 3rd Congressional District in 2024, succeeding Andy Kim who vacated the seat to run for Senate. A physician (internal medicine) and longtime New Jersey state legislator from Burlington County, he served 22 years in the New Jersey General Assembly before his congressional election. He focuses on healthcare access, veterans\' issues, and the Fort Dix/McGuire-Dix-Lakehurst military community, which is the largest National Guard base in the United States.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey Assemblyman, 7th District', jurisdiction: 'New Jersey General Assembly', startDate: '2002-01-14', endDate: '2025-01-03' },
      { title: 'Practicing Physician (Internal Medicine)', jurisdiction: 'Burlington County, New Jersey', startDate: '1990-01-01', endDate: '2025-01-01' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected to New Jersey General Assembly, beginning a 22-year state legislative career' },
      { year: 2010, description: 'Became Chair of the New Jersey Assembly Health and Human Services Committee, shaping state healthcare policy' },
      { year: 2024, description: 'Won Democratic primary and general election for NJ-3, succeeding Andy Kim in a competitive Burlington County district' },
      { year: 2025, description: 'Sworn in to 119th Congress; assigned to Veterans\' Affairs and Armed Services Committees reflecting his district\'s large military population' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill in his first months in Congress. As a practicing internist, Conaway framed his opposition in clinical terms — describing the health consequences of Medicaid coverage loss for his district\'s residents and military families relying on VA and Tricare programs.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing the mandatory detention provisions lacked adequate due process protections. Burlington County has significant immigrant communities, and Conaway argued the bill would create fear without addressing root causes of immigration.',
      },
      {
        title: 'NDAA FY2026 — Joint Base McGuire-Dix-Lakehurst Provisions',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, including provisions protecting Joint Base McGuire-Dix-Lakehurst — the largest National Guard installation in the United States and the single largest employer in his district. Conaway advocated through Armed Services for maintained training capacity and healthcare staffing at the base.',
      },
      {
        title: 'Veterans Health Care Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for FY2026 veterans\' health appropriations, using his Veterans\' Affairs Committee seat and physician background to advocate for adequate VA healthcare staffing. NJ-3\'s large veteran population — concentrated near Joint Base MDL — makes VA access a core constituency concern.',
      },
    ],
    keyBills: [
      {
        title: 'PACT Act Implementation — NJ Veterans\' Benefits Outreach',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation improving outreach to New Jersey veterans about PACT Act benefits for toxic exposure — including those related to burn pits and Agent Orange. His physician background informed the bill\'s focus on early medical screening and proactive enrollment for veterans who may not know they qualify for expanded VA coverage.',
      },
      {
        title: 'Rural and Military Community Healthcare Access Act',
        year: 2025,
        month: 10,
        summary: 'Introduced legislation combining his Veterans\' Affairs and Armed Services committee positions to address healthcare access gaps in rural and military community areas of Burlington County, including telemedicine expansion for veterans in underserved parts of his district.',
      },
    ],
    topSectors: [
      { category: 'Healthcare & Medical', amount: 520000, percentage: 40 },
      { category: 'Individual Contributors', amount: 420000, percentage: 32 },
      { category: 'Labor', amount: 360000, percentage: 28 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Conaway is a freshman member with limited congressional voting record; his prior 22-year state legislative tenure shows a consistently moderate-to-progressive Democratic profile.',
        'His physician background informs his healthcare policy positions — he has been an outspoken critic of Medicaid work requirements on clinical grounds, not just political ones.',
        'NJ-3 is a competitive swing district (Burlington County) that requires ongoing attention to maintain Democratic margins.',
      ],
      whatWeObserve: [
        'Conaway brings two distinct credentials to Congress: medical expertise and legislative experience. The combination is rare and gives him credibility on health policy debates that physician-legislators have historically leveraged effectively.',
        'His district\'s large military presence — including Joint Base McGuire-Dix-Lakehurst, the largest National Guard installation in the U.S. — makes his Armed Services and Veterans\' Affairs assignments particularly valuable for constituency service.',
        'As a successor to Andy Kim, he inherits both a competitive district and a high-profile predecessor\'s reputation to distinguish himself from.',
      ],
      whatIsUnresolved: [
        'As a freshman member in a competitive district, Conaway\'s re-election in 2026 will be closely contested. His ability to build a district-specific profile separate from party-wide dynamics will determine his political longevity.',
      ],
    },
  },

  {
    bioguideId: 'S000522',
    slug: 'chris-smith',
    name: 'Chris Smith',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 4th District',
    bio: 'Chris Smith has represented New Jersey\'s 4th Congressional District since 1981, making him one of the longest-serving members of Congress and the longest-serving Republican in the New Jersey delegation. He co-chairs the Congressional Pro-Life Caucus and is recognized across party lines as Congress\'s leading advocate on human trafficking, human rights, and veterans\' benefits. His 2000 Trafficking Victims Protection Act remains the foundational federal anti-trafficking law.',
    sinceYear: 1981,
    committees: [
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Executive Director, New Jersey Right to Life', jurisdiction: 'New Jersey Right to Life Committee', startDate: '1976-01-01', endDate: '1980-12-31' },
    ],
    keyMilestones: [
      { year: 1980, description: 'Elected to Congress at age 27, defeating a Democratic incumbent — beginning one of the longest congressional tenures in New Jersey history' },
      { year: 2000, description: 'Authored and passed the Trafficking Victims Protection Act — landmark law creating the first comprehensive federal anti-trafficking framework' },
      { year: 2008, description: 'Led passage of the Tom Lantos and Henry Hyde United States Global Leadership Against HIV/AIDS, Tuberculosis, and Malaria Reauthorization Act' },
      { year: 2013, description: 'Chaired the House Foreign Affairs Subcommittee on Africa, Global Health, Global Human Rights and International Organizations' },
      { year: 2024, description: 'Became one of the longest-serving members in House history, surpassing 40 years of continuous service' },
    ],
    keyVotes: [
      {
        title: 'Trafficking Victims Protection Act Reauthorization',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Championed the latest reauthorization of the TVPA, the law he originally authored in 2000. Smith has steered every reauthorization through Congress — expanding victim services, criminal penalties, and international reporting requirements with each cycle. The 2022 version strengthened survivor support and expanded law enforcement tools.',
      },
      {
        title: 'Tom Lantos and Henry Hyde HIV/AIDS, Tuberculosis, and Malaria Reauthorization Act',
        year: 2018,
        month: 9,
        position: 'For',
        summary: 'Voted for the reauthorization of the landmark global health law he had championed for years, continuing PEPFAR and other U.S. global health commitments. Smith has been one of the most consistent Republican advocates for global health investment, a position that has sometimes put him at odds with the fiscal conservative wing of his party.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act. Smith framed support for the bill through his anti-trafficking lens, arguing that stronger enforcement of immigration law and mandatory detention for violent offenders reduces the vulnerability of migrants — particularly women and children — to trafficking networks that exploit irregular immigration pathways.',
      },
      {
        title: 'FY2026 State Department and Foreign Operations Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the State Department and foreign operations appropriations bill, securing maintained funding for anti-trafficking programs, PEPFAR, and international religious freedom initiatives — the three pillars of his 45-year foreign policy record on the Foreign Affairs Committee.',
      },
    ],
    keyBills: [
      {
        title: 'Trafficking Victims Protection Act (original)',
        year: 2000,
        month: 10,
        summary: 'Authored and passed the foundational federal anti-trafficking law, which criminalized human trafficking for the first time, created victim protection and assistance programs, and established international trafficking-in-persons reporting requirements. Signed by President Clinton in 2000, the law has been reauthorized and expanded under every subsequent president and is considered the global gold standard anti-trafficking framework.',
      },
      {
        title: 'Frederick Douglass Trafficking Victims Prevention and Protection Reauthorization Act',
        year: 2022,
        month: 1,
        summary: 'Introduced the latest iteration of the TVPA reauthorization, expanding survivor support services, strengthening criminal penalties for trafficking offenses, and increasing resources for the State Department\'s Office to Monitor and Combat Trafficking in Persons. Smith has led every TVPA reauthorization since the original 2000 law.',
      },
    ],
    topSectors: [
      { category: 'Pro-Life & Religious Organizations', amount: 380000, percentage: 35 },
      { category: 'Defense & Aerospace', amount: 290000, percentage: 27 },
      { category: 'Individual Contributors', amount: 410000, percentage: 38 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Smith is one of the House\'s most senior members, serving since 1981 and developing a policy legacy that spans anti-trafficking, veterans\' affairs, pro-life legislation, and global health.',
        'The Trafficking Victims Protection Act is the clearest example of lasting bipartisan legislation authored by a member of the current House — it has been signed by presidents of both parties and expanded with each reauthorization.',
        'He has maintained a consistently conservative voting record while carving out specific bipartisan causes — human trafficking, HIV/AIDS, and veterans\' benefits — that have given him cross-party credibility.',
      ],
      whatWeObserve: [
        'Smith\'s longevity is remarkable: he has served under eight presidents and witnessed the full arc of the post-Reagan Republican Party. His institutional knowledge and committee seniority are assets that few members can match.',
        'His focus on human trafficking has elevated an issue that was largely invisible in federal policy before the TVPA. His advocacy has shaped international law, State Department priorities, and prosecution standards worldwide.',
        'As a veteran of 40+ years in Congress, Smith\'s influence comes from relationships and expertise rather than leadership titles — a different model of congressional power than most members pursue.',
      ],
      whatIsUnresolved: [
        'Smith\'s eventual retirement will be a significant moment for NJ-4 — a seat that has been Republican for over four decades. His successor\'s identity will reveal the district\'s current political composition.',
      ],
    },
  },

  {
    bioguideId: 'G000583',
    slug: 'josh-gottheimer',
    name: 'Josh Gottheimer',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 5th District',
    bio: 'Josh Gottheimer has represented New Jersey\'s 5th Congressional District since 2017. He co-chairs the bipartisan Problem Solvers Caucus and is one of the House\'s most prominent centrist Democrats, repeatedly brokering cross-partisan deals on infrastructure, defense, and fiscal policy. A former Microsoft policy director and Clinton White House speechwriter, he is a vocal critic of the SALT deduction cap — a signature issue for New Jersey\'s high-income, high-tax suburban base.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Policy Director, Microsoft Corporation', jurisdiction: 'Washington D.C.', startDate: '2009-01-01', endDate: '2016-01-01' },
      { title: 'Speechwriter & Special Advisor, Clinton White House', jurisdiction: 'Executive Office of the President', startDate: '1999-01-01', endDate: '2001-01-01' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Defeated incumbent Republican Scott Garrett in NJ-5 — a district Garrett had held since 2003 — by 4 points' },
      { year: 2019, description: 'Became co-chair of the bipartisan Problem Solvers Caucus, a 58-member group that has brokered several major bipartisan deals' },
      { year: 2021, description: 'Played a pivotal role in passing the Infrastructure Investment and Jobs Act, working across the aisle through the Problem Solvers Caucus' },
      { year: 2023, description: 'Led Democratic effort to restore the SALT deduction cap — one of the most politically charged tax issues for high-tax states like New Jersey' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Was one of the most active negotiators in passing the $1.2 trillion bipartisan infrastructure law, working through the Problem Solvers Caucus. Gottheimer helped broker the deal separating the infrastructure bill from the Build Back Better social spending package — a sequencing maneuver that nearly collapsed both bills but ultimately allowed the infrastructure law to pass with Republican votes.',
      },
      {
        title: 'National Security Supplemental — Ukraine Aid',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion national security supplemental, bucking progressive opposition within his party. Gottheimer argued from his centrist position that sustained support for Ukraine was both a moral obligation and a strategic imperative, consistent with the Problem Solvers Caucus\'s bipartisan foreign policy positions.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, opposing the SALT deduction cap\'s continuation under the bill\'s tax title. Gottheimer had made SALT restoration a defining issue of his congressional career, and he rejected the bill\'s tax provisions as insufficient for New Jersey\'s high-property-tax suburban districts.',
      },
      {
        title: 'SALT Deduction Cap Negotiation — FY2026 Tax Title',
        year: 2026,
        month: 2,
        position: 'For',
        summary: 'Voted for the FY2026 tax reconciliation package after securing increased SALT deduction caps for high-tax states. Gottheimer had organized a coalition of New York and New Jersey moderates who made SALT relief a condition of their votes, ultimately extracting a compromise that raised the cap significantly above the $10,000 level set in 2017.',
      },
    ],
    keyBills: [
      {
        title: 'SALT Marriage Penalty Elimination Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation raising the cap on state and local tax deductions — capped at $10,000 by the 2017 Tax Cuts and Jobs Act — which disproportionately affects high-income, high-tax states like New Jersey. Bergen County homeowners pay some of the highest property taxes in the country, making SALT restoration a direct financial issue for Gottheimer\'s constituents.',
      },
      {
        title: 'Bipartisan Debt Ceiling Framework — Problem Solvers Proposal',
        year: 2023,
        month: 4,
        summary: 'Led the Problem Solvers Caucus in drafting a bipartisan debt ceiling framework, seeking to build cross-partisan consensus before the default deadline. While the final Fiscal Responsibility Act was brokered separately, the Problem Solvers framework established principles that influenced the final deal\'s structure.',
      },
    ],
    topSectors: [
      { category: 'Finance & Investment', amount: 2100000, percentage: 38 },
      { category: 'Technology', amount: 1400000, percentage: 25 },
      { category: 'Legal & Lobbying', amount: 1000000, percentage: 18 },
      { category: 'Individual Contributors', amount: 1100000, percentage: 19 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Gottheimer votes with Democrats on most legislation but has a significant record of breaking with the party on fiscal issues, particularly opposing progressive spending bills as too costly.',
        'His role in the Problem Solvers Caucus has produced genuine bipartisan outcomes, including the infrastructure law — but critics argue the caucus functions more as a moderate Democratic PR vehicle than a true bipartisan coalition.',
        'He has been one of the most vocal House Democrats on SALT restoration, aligning with his district\'s suburban, high-income, high-property-tax constituency.',
      ],
      whatWeObserve: [
        'Gottheimer represents one of the most expensive congressional districts in the country — Bergen and Passaic counties have median home values well above national averages, making the SALT cap a pocketbook issue for his constituents rather than a abstract policy debate.',
        'His bipartisan reputation is genuine but carefully managed. He has maintained good relationships with moderate Republicans while rarely breaking with Democrats on culture-war or social issues.',
        'NJ-5 is a competitive suburban district where Gottheimer has built personal brand loyalty — his margins have improved with each election despite the district\'s Republican-leaning history.',
      ],
      whatIsUnresolved: [
        'SALT restoration remains his primary legislative priority and an ongoing challenge. The cap\'s future will be determined in 2025 tax legislation, where Gottheimer\'s leverage depends on the House\'s narrow margins.',
      ],
    },
  },

  {
    bioguideId: 'P000034',
    slug: 'frank-pallone',
    name: 'Frank Pallone',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 6th District',
    bio: 'Frank Pallone has represented New Jersey\'s 6th Congressional District since 1988. He is the Ranking Member of the House Energy and Commerce Committee — one of the most powerful and broad-jurisdictional committees in Congress — overseeing healthcare, energy, technology, and consumer protection. A principal author of the Affordable Care Act, he is one of the most senior House Democrats and a leading voice on pharmaceutical pricing, broadband access, and environmental protection for the Jersey Shore.',
    sinceYear: 1988,
    committees: [
      { slug: 'hsec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Ranking Member' },
    ],
    previousOffices: [
      { title: 'New Jersey State Senator, 11th District', jurisdiction: 'New Jersey State Senate', startDate: '1983-01-01', endDate: '1988-11-08' },
      { title: 'Long Branch City Councilman', jurisdiction: 'Long Branch City Council, NJ', startDate: '1982-01-01', endDate: '1988-01-01' },
    ],
    keyMilestones: [
      { year: 1988, description: 'Won special election to Congress following the death of Rep. James Howard — beginning one of the longest continuous House tenures from New Jersey' },
      { year: 2009, description: 'Became Chair of the House Energy and Commerce Health Subcommittee, playing a central role in drafting the Affordable Care Act' },
      { year: 2019, description: 'Became Chair of the full House Energy and Commerce Committee in the 116th Congress' },
      { year: 2023, description: 'Became Ranking Member of Energy and Commerce after Republicans took the House majority' },
    ],
    keyVotes: [
      {
        title: 'Affordable Care Act',
        year: 2010,
        month: 3,
        position: 'For',
        summary: 'Was a principal House author of the ACA through the Energy and Commerce Committee, shaping insurance market reforms, Medicaid expansion, essential health benefits, and pre-existing condition protections. The law extended coverage to over 20 million previously uninsured Americans and remains the most significant domestic legislation Pallone has shaped.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law and used his Energy and Commerce chairmanship to shape broadband, clean water, and energy provisions. Pallone secured funding for NJ lead pipe replacement and Jersey Shore coastal protection programs through the committee process.',
      },
      {
        title: 'Against One Big Beautiful Bill — Medicaid Provisions',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Led House Democratic opposition to the reconciliation bill from the Energy and Commerce Ranking Member seat, where Medicaid jurisdiction gave him an authoritative platform. Pallone argued the work requirements and per-capita caps would structurally transform Medicaid from an open-ended entitlement to a block grant, stripping coverage from over 10 million Americans.',
      },
      {
        title: 'Against FY2026 Energy and Commerce Reconciliation Instructions',
        year: 2026,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Energy and Commerce Committee\'s FY2026 reconciliation instructions that included Medicaid cuts and rollbacks of broadband subsidy programs. Pallone argued from 36 years of committee expertise that the proposals would reverse decades of bipartisan progress on healthcare access and digital equity.',
      },
    ],
    keyBills: [
      {
        title: 'Affordable Care Act — Key Provisions Author',
        year: 2010,
        month: 3,
        summary: 'Principal drafter of the ACA through the House Energy and Commerce Committee. Pallone shaped the law\'s insurance market reforms, Medicaid expansion, essential health benefits requirements, and pre-existing condition protections — the core architecture of coverage expansion that has been the law of the land for 15 years.',
      },
      {
        title: 'Broadband DATA Act',
        year: 2020,
        month: 3,
        summary: 'Authored legislation requiring the FCC to develop more accurate broadband availability maps — a prerequisite for targeting infrastructure investment. The law corrected longstanding flaws in FCC mapping that had overstated rural broadband access and misallocated hundreds of millions in federal deployment funds.',
      },
    ],
    topSectors: [
      { category: 'Healthcare & Pharma', amount: 1800000, percentage: 38 },
      { category: 'Technology & Telecom', amount: 1200000, percentage: 25 },
      { category: 'Individual Contributors', amount: 1700000, percentage: 37 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Pallone has been one of the most consequential healthcare legislators in modern Congress, co-authoring the ACA and serving as the leading House voice for Medicaid and consumer health protections.',
        'Energy and Commerce is the broadest jurisdictional committee in the House, covering pharmaceutical pricing, broadband, climate policy, and consumer financial protection — all areas where Pallone has been active.',
        'He has voted with House Democrats on nearly all major legislation since 1988 and has been a reliable progressive on environmental, healthcare, and consumer issues.',
      ],
      whatWeObserve: [
        'Pallone\'s role as Ranking Member on Energy and Commerce gives him the most powerful minority position of any NJ House member — with direct access to hearings, the ability to force procedural debates, and a platform on pharmaceutical pricing that will be central to any 2025 health policy debate.',
        'New Jersey\'s pharmaceutical industry (home to major drug company headquarters) creates constituent complexity for Pallone — he has pushed for Medicare drug price negotiation while also representing a state where the industry employs tens of thousands.',
        'With 36+ years in Congress, Pallone is one of the institutional pillars of the House Democratic caucus. His institutional memory spans from the Reagan era through the present.',
      ],
      whatIsUnresolved: [
        'Pallone has discussed retirement without committing to a timeline. His eventual departure would create a major reshuffling of Energy and Commerce leadership that could affect healthcare policy for years.',
      ],
    },
  },

  {
    bioguideId: 'K000398',
    slug: 'tom-kean-jr',
    name: 'Tom Kean Jr.',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 7th District',
    bio: 'Tom Kean Jr. has represented New Jersey\'s 7th Congressional District since 2023. The son of former Governor Tom Kean Sr. and a former New Jersey State Senate Republican leader, he is a moderate Republican who served over a decade in Trenton before entering Congress. He serves on the House Select Committee on Intelligence and Foreign Affairs Committee, reflecting a foreign-policy focus shaped by his father\'s legacy and his own state-level work. He represents one of the most competitive congressional districts in the country.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsin', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey State Senate Republican Leader', jurisdiction: 'New Jersey State Senate', startDate: '2008-01-01', endDate: '2023-01-03' },
      { title: 'New Jersey State Senator, 21st District', jurisdiction: 'New Jersey State Senate', startDate: '2002-01-01', endDate: '2023-01-03' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected to New Jersey State Senate; began 21-year state legislative career' },
      { year: 2008, description: 'Became Senate Republican Leader — the most senior Republican in the New Jersey legislature for 15 years' },
      { year: 2020, description: 'Lost to Democratic incumbent Tom Malinowski in NJ-7 by under 5,000 votes in first congressional run' },
      { year: 2022, description: 'Defeated Tom Malinowski in a rematch by under 3,000 votes — one of the closest House races of 2022' },
      { year: 2024, description: 'Re-elected with 55%, consolidating incumbency advantage in the competitive Morris/Somerset/Union County district' },
    ],
    keyVotes: [
      {
        title: 'National Security Supplemental — Ukraine, Israel, and Taiwan Aid',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion national security supplemental — breaking with the MAGA wing of his party that opposed the package. Kean framed his support through his Intelligence Committee work and his father\'s legacy as a moderate Republican internationalist. His vote was among the clearest signals of his moderate foreign policy positioning.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his general Republican conference alignment on immigration enforcement. Kean balanced his moderate profile with support for border security measures popular with NJ-7\'s more conservative exurban voters in Morris and Somerset counties.',
      },
      {
        title: 'Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, consistent with his institutionalist Republican positioning. As a first-term member in a competitive district, Kean backed the compromise to demonstrate fiscal responsibility while avoiding a default that would have harmed his district\'s financial services and investment management employers.',
      },
      {
        title: 'FY2026 Intelligence Authorization Act',
        year: 2026,
        month: 2,
        position: 'For',
        summary: 'Voted for the FY2026 Intelligence Authorization Act through the Permanent Select Committee on Intelligence, including provisions addressing Chinese Communist Party cyber threats to critical infrastructure. Kean has been one of the more active freshman members on intelligence oversight, using classified briefings to inform his public advocacy on counterintelligence.',
      },
    ],
    keyBills: [
      {
        title: 'Countering CCP Influence in Critical Infrastructure provisions',
        year: 2024,
        month: 6,
        summary: 'Introduced provisions targeting Chinese Communist Party influence in U.S. telecommunications, critical infrastructure, and data systems — advancing legislation through the Intelligence Committee based on classified work on CCP technology infiltration. Kean has been a leading Republican voice on economic counterintelligence.',
      },
      {
        title: 'Morris County Transportation Modernization Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation targeting federal infrastructure investment to commuter rail and bus rapid transit improvements in Morris and Somerset counties, addressing a persistent gap in transit access that affects his district\'s connection to New York City employment centers.',
      },
    ],
    topSectors: [
      { category: 'Finance & Investment', amount: 1100000, percentage: 38 },
      { category: 'Defense & Technology', amount: 700000, percentage: 24 },
      { category: 'Individual Contributors', amount: 1100000, percentage: 38 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Kean has voted with Republicans on most major legislation but shown independence on foreign policy — most visibly on Ukraine aid.',
        'His Intelligence Committee assignment gives him access to classified information on national security threats that most members lack, and positions him as a credible voice on counterintelligence and foreign policy.',
        'NJ-7 is the most competitive congressional district in New Jersey; Kean\'s margins are driven by incumbency advantage and moderate positioning rather than partisan lean.',
      ],
      whatWeObserve: [
        'Kean\'s family legacy — his father Tom Kean Sr. was one of New Jersey\'s most respected governors — opens doors but also creates high expectations. He has worked to establish a distinct identity while benefiting from the family name in a district that his father won multiple times.',
        'His 15 years as Senate Republican Leader in New Jersey gave him deep institutional skills and a statewide network that congressional candidates from outside politics rarely have.',
        'NJ-7 includes some of the wealthiest suburbs in America — Morris County communities like Mendham and Chester, and Somerset County exurbs — whose residents have complex relationships with both parties\' current directions.',
      ],
      whatIsUnresolved: [
        'Kean\'s positioning on the Trump agenda — particularly where he diverges — will define whether he can hold NJ-7 long-term or faces a primary challenge from the right.',
      ],
    },
  },

  {
    bioguideId: 'M001226',
    slug: 'rob-menendez',
    name: 'Rob Menendez',
    party: 'D',
    chamber: 'House',
    district: 8,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 8th District',
    bio: 'Rob Menendez has represented New Jersey\'s 8th Congressional District since 2023. The son of former U.S. Senator Bob Menendez, he is the first Filipino-American congressman from New Jersey and serves on the House Transportation and Infrastructure Committee and Foreign Affairs Committee. His Hudson County district — covering Jersey City, Hoboken, and surrounding communities — is one of the most diverse in the country, with large Latino, Filipino, and South Asian immigrant populations.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsti', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Hudson County Freeholder', jurisdiction: 'Hudson County Board of County Commissioners', startDate: '2020-01-01', endDate: '2023-01-03' },
      { title: 'Jersey City Public Schools Board of Education', jurisdiction: 'Jersey City Public Schools', startDate: '2017-01-01', endDate: '2020-01-01' },
    ],
    keyMilestones: [
      { year: 2017, description: 'Elected to Jersey City Board of Education, beginning his political career in local government' },
      { year: 2020, description: 'Elected Hudson County Freeholder, expanding his policy focus to county-level transportation and social services' },
      { year: 2022, description: 'Won Democratic primary for NJ-8 with strong support from the Hudson County Democratic machine; won general election comfortably' },
      { year: 2023, description: 'Sworn in as first Filipino-American congressman from New Jersey; assigned to Transportation and Foreign Affairs Committees' },
      { year: 2023, description: 'Father Bob Menendez indicted on federal bribery charges, creating political complications Rob managed by maintaining distance from the case' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law as a House member before his Senate run. Menendez highlighted funding for NJ Transit and Hudson-Bergen Light Rail expansion — critical infrastructure for a district where over 60% of residents commute without a car, among the highest transit dependency rates in the country.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing mandatory detention provisions would harm immigrant communities in Hudson County — one of the most ethnically diverse counties in America. NJ-8 includes large populations from Latin America, the Philippines, South Asia, and beyond, and Menendez framed his opposition in direct terms of his constituents\' safety and community trust.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, citing Medicaid cuts that would affect Hudson County\'s large immigrant and low-income population. Jersey City and surrounding communities have high rates of Medicaid enrollment, and Menendez argued the coverage reductions would devastate healthcare access for working families in his district.',
      },
      {
        title: 'FY2026 Transportation and Infrastructure Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 transportation appropriations bill, securing funding for NJ Transit capital improvements and Hudson-Bergen Light Rail maintenance. Menendez has consistently prioritized transit funding through his Transportation and Infrastructure Committee seat, arguing that public transit is the economic backbone of his car-light district.',
      },
    ],
    keyBills: [
      {
        title: 'Hudson-Bergen Light Rail Expansion and NJ Transit Funding Act',
        year: 2023,
        month: 9,
        summary: 'Advocated through the Transportation and Infrastructure Committee for NJ Transit capital grants and Hudson-Bergen Light Rail expansion, critical infrastructure for NJ-8\'s transit-dependent population. The district has among the lowest car ownership rates in New Jersey, making public transit investment a direct economic necessity rather than an optional amenity.',
      },
      {
        title: 'Immigrant Community Trust and Safety Act',
        year: 2024,
        month: 5,
        summary: 'Introduced legislation establishing clearer boundaries between local law enforcement and federal immigration enforcement, designed to maintain trust between police and immigrant communities in dense urban areas. Menendez drew on Hudson County\'s experience as a sanctuary county in arguing that community trust increases — not decreases — overall public safety.',
      },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 480000, percentage: 40 },
      { category: 'Individual Contributors', amount: 360000, percentage: 30 },
      { category: 'Transportation & Infrastructure', amount: 360000, percentage: 30 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Menendez has voted with House Democrats consistently in his first two terms, with particular focus on immigration, transit infrastructure, and labor issues.',
        'His Transportation Committee work is directly relevant to Hudson County\'s transit-dependent economy — NJ-8 residents use public transit at among the highest rates of any congressional district outside New York City.',
        'He has maintained political distance from his father\'s federal bribery case while representing the same Hudson County base.',
      ],
      whatWeObserve: [
        'Rob Menendez\'s political identity is simultaneously complicated and clarified by his father\'s fall. He has worked to establish a distinct, community-rooted reputation rather than trading on the Menendez name.',
        'NJ-8 is one of the most reliably Democratic districts in New Jersey, and Menendez\'s electoral security allows him to focus on legislative work rather than political survival.',
        'His Filipino-American background resonates with one of New Jersey\'s fastest-growing immigrant communities, particularly in Hudson and Bergen counties.',
      ],
      whatIsUnresolved: [
        'The long-term political impact of his father\'s conviction on his own career remains an open question, particularly if he seeks statewide office in the future.',
      ],
    },
  },

  {
    bioguideId: 'P000621',
    slug: 'nellie-pou',
    name: 'Nellie Pou',
    party: 'D',
    chamber: 'House',
    district: 9,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 9th District',
    bio: 'Nellie Pou won New Jersey\'s 9th Congressional District in 2024, filling the seat left vacant by the death of longtime Representative Bill Pascrell Jr. A former New Jersey State Assemblywoman who served over 20 years in Trenton and a Passaic County Freeholder, she is the first Latina to represent the district, which covers Bergen and Passaic counties and includes significant Latino, Dominican, and South American immigrant populations.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsti', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey State Assemblywoman, 35th District', jurisdiction: 'New Jersey General Assembly', startDate: '2002-01-01', endDate: '2024-11-01' },
      { title: 'Passaic County Freeholder', jurisdiction: 'Passaic County Board of Chosen Freeholders', startDate: '1996-01-01', endDate: '2002-01-01' },
    ],
    keyMilestones: [
      { year: 1996, description: 'Elected to Passaic County Board of Freeholders, entering elected politics' },
      { year: 2002, description: 'Elected to New Jersey General Assembly, representing the Passaic County-based 35th District for over 20 years' },
      { year: 2015, description: 'Became Majority Conference Leader in the New Jersey Assembly — one of the highest-ranking Latinas in New Jersey state government' },
      { year: 2024, description: 'Won the special election and subsequent general election for NJ-9 following Bill Pascrell\'s death in August 2024' },
      { year: 2025, description: 'Sworn in as first Latina to represent NJ-9, beginning congressional service on Homeland Security and Transportation committees' },
    ],
    keyVotes: [
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act in her first weeks in Congress, consistent with representing Passaic County\'s large Dominican, Puerto Rican, and South American immigrant community. Pou argued the mandatory detention provisions would create fear in immigrant households and undermine trust between local police and residents — a trust built over years of community policing in Paterson and other Passaic County cities.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing Medicaid cuts would devastate Passaic County\'s large low-income and immigrant population. Paterson — one of the most economically stressed cities in New Jersey — has high Medicaid enrollment, and Pou framed the vote as a direct threat to healthcare access for her constituents.',
      },
      {
        title: 'FY2026 Homeland Security Appropriations',
        year: 2025,
        month: 11,
        position: 'Against',
        summary: 'Voted against the FY2026 Homeland Security appropriations bill from her Homeland Security Committee seat, objecting to provisions expanding immigration detention capacity and reducing asylum processing resources. Pou argued the bill would harm Passaic County\'s immigrant communities without improving actual public safety outcomes.',
      },
      {
        title: 'FY2026 Transportation and Infrastructure Priorities',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 transportation appropriations measure, securing funding for bus rapid transit corridors in Bergen and Passaic counties and NJ Transit improvements connecting her district\'s dense urban centers to New York City. Pou has made transit investment a central priority through her Transportation Committee assignment.',
      },
    ],
    keyBills: [
      {
        title: 'Passaic County Transit Connectivity Act',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation targeting federal transit investment to bus rapid transit corridors in Passaic and Bergen counties, improving connections from Paterson, Clifton, and Hackensack to NJ Transit rail lines and New York City employment centers. The district\'s working-class commuters rely heavily on bus transit that has historically been underfunded relative to rail infrastructure.',
      },
      {
        title: 'Immigrant Family Protection and Due Process Act',
        year: 2026,
        month: 1,
        summary: 'Introduced legislation establishing enhanced due process protections for immigrants in removal proceedings, including guaranteed access to legal counsel for detained individuals and expanded administrative review. Pou drew on Passaic County\'s large immigrant population and her 20 years of state legislative advocacy for immigrant rights.',
      },
    ],
    topSectors: [
      { category: 'Individual Contributors', amount: 580000, percentage: 48 },
      { category: 'Labor Unions', amount: 380000, percentage: 32 },
      { category: 'Other / Unitemized', amount: 240000, percentage: 20 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Pou is a freshman member with a limited congressional record; her 20+ year state legislative career shows a consistently progressive Democratic profile focused on immigrant rights, labor, and healthcare.',
        'Her committee assignments on Homeland Security and Transportation are well-matched to her district\'s priorities — immigration enforcement and transit access to New York City are both central constituency concerns.',
        'She voted with House Democrats on all major votes in her first months, consistent with her state legislative record.',
      ],
      whatWeObserve: [
        'Pou\'s election represents a demographic shift in NJ-9 — the district, long represented by the Irish-Italian Catholic Pascrell, has a rapidly growing Latino majority that Pou directly reflects.',
        'Her 20-year state legislative background gives her institutional knowledge that freshman members typically lack. She knows how to navigate legislatures, build coalitions, and deliver constituent services.',
        'NJ-9 is a reliably Democratic district, giving her electoral security to build a congressional record without immediate reelection pressure.',
      ],
      whatIsUnresolved: [
        'As a freshman with strong local credentials, Pou\'s arc in Congress will depend on the committee assignments and policy niches she develops over the next several terms.',
      ],
    },
  },

  {
    bioguideId: 'M001229',
    slug: 'lamonica-mciver',
    name: 'LaMonica McIver',
    party: 'D',
    chamber: 'House',
    district: 10,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 10th District',
    bio: 'LaMonica McIver won the 2024 special election for New Jersey\'s 10th Congressional District following the death of Donald Payne Jr. She is the first woman to represent the majority-Black district, which covers Newark, Irvington, and parts of Essex and Union counties. A former Newark city councilwoman, she brings a background in community organizing and urban policy to the House Homeland Security and Small Business Committees.',
    sinceYear: 2024,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hssb', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Newark City Councilwoman, South Ward', jurisdiction: 'Newark City Council', startDate: '2018-07-01', endDate: '2024-10-15' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Newark City Council for the South Ward, representing one of Newark\'s most populated and economically stressed communities' },
      { year: 2024, description: 'Won special election for NJ-10 following Donald Payne Jr.\'s death — first woman elected from the district in its history' },
      { year: 2024, description: 'Won the general election for NJ-10, securing a full term in the 119th Congress' },
    ],
    keyVotes: [
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act in her first full months in Congress. Newark and Essex County have significant immigrant communities, and McIver argued the mandatory detention provisions would increase fear among residents and undermine the community-police relationships that have been central to Newark\'s public safety improvements under Mayor Ras Baraka.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid and SNAP cuts would devastate Newark — a city where approximately 25% of residents live below the poverty line and federal safety net programs are foundational to household economic stability. McIver framed her opposition as defending the most economically vulnerable congressional district in New Jersey.',
      },
      {
        title: 'FY2026 Small Business Administration Appropriations',
        year: 2025,
        month: 11,
        position: 'For',
        summary: 'Voted for the FY2026 SBA appropriations measure and used her Small Business Committee seat to protect SBIC and 7(a) loan program funding for Newark\'s minority-owned business community. Newark\'s economic revitalization has been driven significantly by small business growth, particularly in the Ironbound district and along Broad Street.',
      },
      {
        title: 'FY2026 Homeland Security — Community Programs',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 Homeland Security bill from her committee seat, opposing provisions she argued would redirect grant funding away from community violence intervention programs toward enforcement-only approaches. McIver has been an advocate for the community safety model that contributed to Newark\'s sustained crime reduction.',
      },
    ],
    keyBills: [
      {
        title: 'Newark Economic Empowerment and Housing Act',
        year: 2024,
        month: 10,
        summary: 'Introduced legislation combining Community Development Block Grant expansions with HUD funding for Newark\'s affordable housing programs — addressing a city where rapid property value appreciation has begun displacing long-term residents. McIver drew on her South Ward city council experience to design the bill\'s neighborhood-specific targeting approach.',
      },
      {
        title: 'Minority Business Enterprise Contracting Enhancement Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation from her Small Business Committee seat to expand federal contracting set-asides and SBA certification programs for minority-owned businesses. Newark has a rapidly growing Black and Latino small business community that has historically faced barriers to federal contracting opportunities.',
      },
    ],
    topSectors: [
      { category: 'Labor & Public Sector', amount: 420000, percentage: 45 },
      { category: 'Individual Contributors', amount: 310000, percentage: 33 },
      { category: 'Other / Unitemized', amount: 210000, percentage: 22 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'McIver is one of the newest members of Congress, having won a special election in 2024. Her congressional record is limited to her first months in office.',
        'Her Newark City Council background focused on public safety, housing, and community development — priorities that translate directly to her district\'s federal policy needs.',
        'She has voted with House Democrats on all major votes, consistent with representing one of the most Democratic districts in New Jersey.',
      ],
      whatWeObserve: [
        'NJ-10 is among the most economically distressed congressional districts in the northeastern United States. Newark has a poverty rate of approximately 25% and significant reliance on federal Medicaid, SNAP, and housing assistance.',
        'McIver\'s election as the first woman from NJ-10 is a significant milestone for a district with a long history of male Black political representation, starting with her predecessor Donald Payne Jr. and his father Donald Payne Sr.',
        'Her Small Business Committee assignment is particularly relevant: Newark\'s economic revitalization has been driven in part by small business growth, and SBA programs are important capital access tools for the district.',
      ],
      whatIsUnresolved: [
        'As a very new member, McIver\'s ability to build a legislative record and develop policy influence will unfold over her first full terms. NJ-10\'s safe Democratic composition gives her runway to grow.',
      ],
    },
  },

  {
    bioguideId: 'M001246',
    slug: 'analilia-mejia',
    name: 'Analilia Mejia',
    party: 'D',
    chamber: 'House',
    district: 11,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 11th District',
    bio: 'Analilia Mejia represents New Jersey\'s 11th Congressional District, succeeding Mikie Sherrill who departed to run for Governor of New Jersey. A labor organizer and progressive activist, she previously served as Executive Director of New Jersey Working Families Alliance and has been a leading voice for workers\' rights and progressive policy in New Jersey politics. The 11th District covers parts of Morris and Essex counties, including Montclair and Parsippany.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hssb', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Executive Director, New Jersey Working Families Alliance', jurisdiction: 'New Jersey Working Families Alliance', startDate: '2018-01-01', endDate: '2024-01-01' },
      { title: 'Political Director, New Jersey Working Families Party', jurisdiction: 'New Jersey Working Families Party', startDate: '2014-01-01', endDate: '2018-01-01' },
    ],
    keyMilestones: [
      { year: 2014, description: 'Became Political Director of New Jersey Working Families Party, building statewide progressive organizing infrastructure' },
      { year: 2018, description: 'Became Executive Director of New Jersey Working Families Alliance, leading campaigns for minimum wage increases and paid leave' },
      { year: 2025, description: 'Elected to Congress for NJ-11, succeeding Mikie Sherrill; first progressive labor organizer to represent the suburban Morris County district' },
    ],
    keyVotes: [
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing the mandatory detention provisions threatened immigrant workers who are central to NJ-11\'s service economy — from construction trades to healthcare to hospitality. As a former labor organizer, Mejia framed immigration enforcement as inseparable from labor rights: vulnerable workers cannot organize if they fear deportation.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, opposing what she called an assault on working families and the social safety net. Mejia argued from her Education and Workforce Committee seat that the bill\'s Medicaid changes and education funding reductions would harm both the working-class communities and the middle-class suburbs of NJ-11.',
      },
      {
        title: 'PRO Act — Education and Workforce Committee Vote',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Voted in the Education and Workforce Committee for PRO Act provisions strengthening workers\' rights to organize and collectively bargain. Mejia was among the legislation\'s most vocal advocates, drawing on a career spent organizing for higher wages and benefits before entering politics.',
      },
      {
        title: 'Against FY2026 Education Appropriations Cuts',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 education appropriations bill from her Education and Workforce Committee seat, opposing reductions to Title I funding for high-need schools and workforce training program cuts. NJ-11 includes working-class communities in Parsippany and surrounding areas where federal education investment is significant.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting the Right to Organize (PRO) Act provisions',
        year: 2025,
        month: 3,
        summary: 'Led advocacy for PRO Act provisions through the Education and Workforce Committee, strengthening workers\' rights to organize, collectively bargain, and participate in strikes. Mejia brought firsthand organizing experience — having run campaigns for minimum wage increases and paid family leave as Executive Director of NJ Working Families Alliance — to her committee work on labor law.',
      },
      {
        title: 'Paid Family Leave Federal Standards Act',
        year: 2025,
        month: 8,
        summary: 'Introduced legislation establishing federal paid family and medical leave standards based on New Jersey\'s state program — which Mejia had championed during her state legislative advocacy career. The bill proposed 12 weeks of paid leave for all workers, drawing on New Jersey\'s years of implementation experience as a model for federal policy.',
      },
    ],
    topSectors: [
      { category: 'Labor & Progressive Orgs', amount: 490000, percentage: 50 },
      { category: 'Individual Contributors', amount: 340000, percentage: 35 },
      { category: 'Other / Unitemized', amount: 150000, percentage: 15 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Mejia is a freshman member whose pre-congressional career was in labor organizing and progressive advocacy rather than elected office — an unusual background for a House member from a traditionally moderate suburban district.',
        'Her Education and Workforce Committee assignment is directly relevant to her background in labor organizing and workers\' rights.',
        'She has voted with House progressives on all major votes in her first months in Congress.',
      ],
      whatWeObserve: [
        'Mejia represents a district (NJ-11) with a more moderate historical profile than her own progressive politics. Mikie Sherrill, her predecessor, was known as a centrist. Mejia\'s election suggests the district has shifted leftward or that the primary electorate is significantly more progressive than the general.',
        'Her labor organizing background is uncommon in Congress and gives her a different perspective on workforce policy from colleagues who came from legal or business backgrounds.',
        'NJ-11\'s economic diversity — from affluent Morris County suburbs to working-class communities — creates both opportunities and challenges for a progressive policy agenda.',
      ],
      whatIsUnresolved: [
        'Whether Mejia can hold NJ-11 in 2026 general election against a competitive Republican opponent will be the first real test of her congressional viability in a district that has been competitive in the past.',
      ],
    },
  },

  {
    bioguideId: 'W000822',
    slug: 'bonnie-watson-coleman',
    name: 'Bonnie Watson Coleman',
    party: 'D',
    chamber: 'House',
    district: 12,
    state: 'New Jersey',
    currentTitle: 'U.S. Representative, New Jersey 12th District',
    bio: 'Bonnie Watson Coleman has represented New Jersey\'s 12th Congressional District since 2015. The first Black congresswoman elected from New Jersey, she previously served 16 years in the New Jersey General Assembly — including as Majority Leader. She sits on the House Appropriations Committee, one of the most powerful assignments in Congress, and focuses on healthcare, housing, civil rights, and federal spending priorities for the Trenton and Princeton corridor.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New Jersey General Assembly, 15th District', jurisdiction: 'New Jersey General Assembly', startDate: '1998-01-01', endDate: '2015-01-03' },
      { title: 'New Jersey Assembly Majority Leader', jurisdiction: 'New Jersey General Assembly', startDate: '2006-01-01', endDate: '2010-01-01' },
      { title: 'Chair, New Jersey Democratic State Committee', jurisdiction: 'New Jersey Democratic Party', startDate: '2010-01-01', endDate: '2013-01-01' },
    ],
    keyMilestones: [
      { year: 1998, description: 'Elected to New Jersey General Assembly; began 16-year state legislative career' },
      { year: 2006, description: 'Became New Jersey Assembly Majority Leader — one of the highest-ranking Black women in New Jersey state government' },
      { year: 2010, description: 'Became Chair of the New Jersey Democratic State Committee' },
      { year: 2014, description: 'Elected to Congress — first Black congresswoman elected from New Jersey' },
      { year: 2021, description: 'Was among the Capitol members sheltering from the January 6th attack and tested positive for COVID-19 shortly after — an event that heightened her concerns about congressional security and public health' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief law and used her Appropriations Committee seat to advocate for the law\'s state and local government funding, which provided critical relief to Trenton and Mercer County. Watson Coleman highlighted Trenton\'s acute pandemic stress — particularly among essential workers and residents in high-poverty neighborhoods.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law and secured Appropriations Committee language directing funding to Trenton\'s aging water infrastructure and lead pipe replacement program. Trenton has significant legacy infrastructure from its industrial past, making federal water investment a direct public health priority.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill from her Appropriations Committee seat, arguing the healthcare and education cuts represented an abandonment of the most vulnerable Americans. Watson Coleman used her committee platform to document the specific dollar impacts on Trenton and NJ-12\'s federal funding streams.',
      },
      {
        title: 'FY2026 HUD and Community Development Appropriations',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for FY2026 HUD appropriations, securing Community Development Block Grants for Trenton and Section 8 housing voucher funding for NJ-12. Watson Coleman used her Appropriations seniority to fight proposed cuts to CDBG — a foundational funding source for Trenton\'s housing and economic development programs — securing maintained allocations in the final bill.',
      },
    ],
    keyBills: [
      {
        title: 'Trenton Housing and Community Development Appropriations',
        year: 2023,
        month: 6,
        summary: 'Used her Appropriations Committee seat to secure Community Development Block Grants and HUD funding for Trenton — New Jersey\'s capital and one of its most economically stressed cities. Watson Coleman has consistently delivered federal investment in Trenton\'s housing rehabilitation, neighborhood revitalization, and community health programs through a decade of Appropriations work.',
      },
      {
        title: 'Medicaid and CHIP Reauthorization and Expansion Act provisions',
        year: 2024,
        month: 9,
        summary: 'Championed provisions through Appropriations to extend and strengthen Medicaid and CHIP funding, ensuring coverage stability for low-income families in Mercer and Middlesex counties. Watson Coleman has been among the most consistent House voices defending Medicaid from restructuring proposals throughout her congressional career.',
      },
    ],
    topSectors: [
      { category: 'Labor & Unions', amount: 580000, percentage: 42 },
      { category: 'Individual Contributors', amount: 480000, percentage: 35 },
      { category: 'Healthcare', amount: 320000, percentage: 23 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Watson Coleman has voted with House Democrats consistently and has been a progressive voice on healthcare, civil rights, and federal spending.',
        'Her Appropriations Committee seat — earned after a decade of seniority building — is among the most powerful positions held by any NJ House member, giving her direct influence over federal spending across multiple agencies.',
        'She has been a consistent advocate for Trenton and Central New Jersey\'s communities, which include significant low-income populations alongside the Princeton University corridor\'s wealth.',
      ],
      whatWeObserve: [
        'Watson Coleman\'s historic status as the first Black congresswoman from New Jersey gives her symbolic importance alongside legislative influence. She has used her platform to spotlight issues of racial equity, housing, and economic justice.',
        'The Appropriations Committee is one of the few congressional assignments where seniority directly translates to power — members with years on the committee can direct federal spending in ways that newer members cannot. Watson Coleman\'s decade of service is a genuine institutional asset.',
        'NJ-12\'s geography is unusual — it stretches from urban Trenton through Princeton to suburban Middlesex County, creating a diverse constituency that requires attention to both urban and suburban priorities.',
      ],
      whatIsUnresolved: [
        'Watson Coleman has discussed retirement without committing to a timeline. Her departure would mark a significant generational transition in the NJ delegation and open a safe Democratic seat to a new generation of candidates.',
      ],
    },
  },
]

export const njDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

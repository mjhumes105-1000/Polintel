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
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Booker voted against the Republican budget reconciliation bill and delivered a marathon floor speech opposing Medicaid cuts. He argued the bill would disproportionately harm low-income Americans and communities of color in New Jersey and nationwide. The speech lasted over 12 hours, one of the longest Senate floor speeches in recent history.',
    },
    notableBill: {
      title: 'First Step Act — Criminal Justice Reform',
      year: 2018,
      summary: 'Booker was a principal Senate author of the First Step Act, the landmark bipartisan criminal justice reform law that reduced mandatory minimum sentences for nonviolent drug offenses, expanded earned-time credits for federal prisoners, and required federal prisons to house inmates closer to their families. The law passed with 87 votes and was signed by President Trump.',
    },
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
    notableVote: {
      title: 'Against Pete Hegseth Confirmation',
      year: 2025,
      summary: 'Kim voted against confirming Pete Hegseth as Secretary of Defense, citing concerns about Hegseth\'s qualifications, management experience, and conduct. As a member of the Armed Services Committee with a national security background, Kim argued the Defense Department required experienced leadership and that Hegseth\'s television career did not prepare him to manage a 3-million person institution.',
    },
    notableBill: {
      title: 'National Security Supplemental — Ukraine and Taiwan Aid',
      year: 2024,
      summary: 'Kim voted for the $95 billion national security supplemental providing aid to Ukraine, Israel, and Taiwan, drawing on his national security background and experience directing Afghanistan policy at the NSC. He was one of the House\'s most vocal advocates for the package, which faced months of delay due to Republican opposition.',
    },
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
    notableVote: {
      title: 'For Infrastructure Investment and Jobs Act',
      year: 2021,
      summary: 'Norcross voted for the $1.2 trillion bipartisan infrastructure law, which included significant funding for bridges, rail, and water infrastructure in the Philadelphia-South Jersey corridor. His South Jersey district includes aging Delaware River crossings and rail lines that directly benefited from the legislation.',
    },
    notableBill: {
      title: 'Worker Organizing and Empowerment Act provisions',
      year: 2021,
      summary: 'Norcross championed provisions strengthening the National Labor Relations Act and expanding workers\' rights to organize, reflecting his union background and his district\'s significant organized labor base. The bill passed the House but stalled in the Senate.',
    },
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
    notableVote: {
      title: 'Against First Trump Impeachment',
      year: 2019,
      summary: 'Van Drew voted against the first impeachment of President Trump in December 2019 — one of only two Democrats to do so — then switched parties, saying the impeachment was politically motivated and that he would be "100% a Trump guy." His party switch transformed a marginal Democratic seat into a Republican one.',
    },
    notableBill: {
      title: 'Atlantic City and Shore Economy Protection Act',
      year: 2023,
      summary: 'Van Drew has been a consistent advocate for federal support of Atlantic City\'s hospitality industry and South Jersey\'s coastal economy, including opposition to federal regulations affecting offshore fishing and advocacy for tourism-related federal spending. His district\'s economy is heavily dependent on the shore, making these issues central to his legislative agenda.',
    },
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
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Conaway voted against the Republican budget reconciliation bill, arguing that Medicaid cuts would harm the 3rd District\'s large veteran and military family population. As a physician, he framed his opposition in clinical terms — describing the health consequences of coverage loss for his district\'s residents.',
    },
    notableBill: {
      title: 'PACT Act Implementation — NJ Veterans\' Benefits',
      year: 2025,
      summary: 'Conaway has been active in ensuring New Jersey veterans receive benefits under the 2022 PACT Act, which expanded VA eligibility for veterans exposed to burn pits and toxic chemicals. His Veterans\' Affairs Committee assignment and physician background position him to advocate for robust implementation of the law.',
    },
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
    notableVote: {
      title: 'For Trafficking Victims Protection Reauthorization Act',
      year: 2022,
      summary: 'Smith championed the reauthorization of the Trafficking Victims Protection Act, a cause he has led for over two decades. The law, first passed in 2000, established criminal penalties for human trafficking, created federal victim protection programs, and built international anti-trafficking enforcement mechanisms. Smith is widely credited with making human trafficking a bipartisan issue.',
    },
    notableBill: {
      title: 'Trafficking Victims Protection Act (original)',
      year: 2000,
      summary: 'Smith authored and passed the original Trafficking Victims Protection Act of 2000 — the foundational federal law criminalizing human trafficking, establishing victim protection and assistance programs, and creating international trafficking-in-persons reporting requirements. The law has been reauthorized and expanded multiple times and is considered the gold standard global anti-trafficking framework.',
    },
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
    notableVote: {
      title: 'For Infrastructure Investment and Jobs Act',
      year: 2021,
      summary: 'Gottheimer was one of the most active negotiators in passing the $1.2 trillion bipartisan infrastructure law, working through the Problem Solvers Caucus to build the House coalition. He helped broker the deal that allowed the infrastructure bill to pass separately from the Build Back Better social spending bill, a sequencing dispute that nearly collapsed both.',
    },
    notableBill: {
      title: 'SALT Marriage Penalty Elimination Act',
      year: 2024,
      summary: 'Gottheimer championed the SALT Marriage Penalty Elimination Act, seeking to raise the cap on state and local tax deductions — capped at $10,000 by the 2017 Tax Cuts and Jobs Act — which disproportionately affects high-income, high-tax states like New Jersey. The SALT cap has been his signature legislative priority since 2017.',
    },
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
    notableVote: {
      title: 'Against One Big Beautiful Bill — Medicaid Cuts',
      year: 2025,
      summary: 'Pallone led House Democratic opposition to the Republican reconciliation bill from the Energy and Commerce Committee ranking seat, where jurisdiction over Medicaid gave him an influential platform. He argued the Medicaid work requirements and per-capita cap would strip coverage from millions of Americans and fundamentally restructure a program serving 80 million people.',
    },
    notableBill: {
      title: 'Affordable Care Act — Key Provisions Author',
      year: 2010,
      summary: 'Pallone was a principal drafter of the Affordable Care Act through the House Energy and Commerce Committee, shaping the law\'s insurance market reforms, Medicaid expansion, essential health benefits requirements, and pre-existing condition protections. The law, signed by President Obama in 2010, extended coverage to over 20 million previously uninsured Americans.',
    },
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
    notableVote: {
      title: 'For Ukraine Aid Package',
      year: 2024,
      summary: 'Kean voted for the $95 billion national security supplemental providing aid to Ukraine and Israel — breaking with the MAGA wing of the Republican Party that opposed the package. His vote reflected his moderate foreign policy positioning, his Intelligence Committee work, and the more moderate profile of his suburban New Jersey district.',
    },
    notableBill: {
      title: 'Countering CCP Influence in Critical Infrastructure provisions',
      year: 2024,
      summary: 'Through his Intelligence Committee work, Kean has been active on legislation targeting Chinese Communist Party influence in U.S. critical infrastructure, telecommunications, and data systems — a bipartisan national security priority that aligns with his committee\'s classified work.',
    },
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
    notableVote: {
      title: 'Against Laken Riley Act',
      year: 2025,
      summary: 'Menendez voted against the Laken Riley Act, arguing the mandatory detention provisions would harm immigrant communities in Hudson County — one of the most ethnically diverse counties in America, with large populations of immigrants from Latin America, the Philippines, South Asia, and beyond. He framed his opposition in terms of his district\'s community composition.',
    },
    notableBill: {
      title: 'Hudson-Bergen Light Rail Expansion and NJ Transit Funding',
      year: 2023,
      summary: 'Menendez has been an active advocate through the Transportation Committee for NJ Transit funding and Hudson-Bergen Light Rail expansion, critical infrastructure for his district\'s dense, transit-dependent population. The district has among the lowest car ownership rates in New Jersey.',
    },
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
    notableVote: {
      title: 'Against Laken Riley Act',
      year: 2025,
      summary: 'Pou voted against the Laken Riley Act in her first weeks in Congress, consistent with her representing Passaic County\'s large Dominican, Puerto Rican, and South American immigrant population. She argued the mandatory detention provisions would create fear in immigrant communities and undermine the trust between local law enforcement and residents.',
    },
    notableBill: {
      title: 'Passaic County Transit and Infrastructure Priorities',
      year: 2025,
      summary: 'Through her Transportation Committee assignment, Pou has advocated for transit improvements serving Passaic and Bergen counties, including bus rapid transit corridors connecting the district\'s dense urban centers to New York City employment centers.',
    },
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
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'McIver voted against the Republican budget reconciliation bill, arguing its Medicaid and SNAP cuts would devastate Newark and Essex County, where federal safety net programs serve a significant share of the population. Newark has one of the highest poverty rates of any large U.S. city, making federal support programs foundational to her district\'s economy.',
    },
    notableBill: {
      title: 'Newark and Urban Community Development priorities',
      year: 2024,
      summary: 'McIver has been an advocate for federal community development block grants and Small Business Administration programs serving Newark\'s small business community — particularly minority-owned businesses in a city that has seen significant economic revitalization alongside persistent poverty.',
    },
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
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Mejia voted against the Republican budget reconciliation bill, opposing what she characterized as an attack on working families and the social safety net in a district that includes both affluent suburbs and working-class communities with significant healthcare and education needs.',
    },
    notableBill: {
      title: 'Protecting the Right to Organize Act provisions',
      year: 2025,
      summary: 'Drawing on her labor organizing background, Mejia has been an advocate for PRO Act provisions strengthening workers\' rights to organize and collectively bargain, making her one of the most labor-identified members of the NJ delegation.',
    },
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
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Watson Coleman voted against the Republican reconciliation bill from her Appropriations Committee seat, arguing the cuts to healthcare and education funding represented a betrayal of the most vulnerable Americans. The Appropriations Committee gives her a direct role in federal spending decisions, making her opposition particularly substantive.',
    },
    notableBill: {
      title: 'Trenton Housing and Community Development Initiative',
      year: 2023,
      summary: 'Watson Coleman has consistently secured Community Development Block Grants and Housing and Urban Development funding for Trenton through her Appropriations Committee work. The district includes Trenton — New Jersey\'s capital and one of its most economically stressed cities — where federal housing and community development investment is foundational to the local economy.',
    },
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

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
    bio: 'Cory Booker has served as a U.S. Senator from New Jersey since 2013, when he was elected in a special election following the death of Frank Lautenberg. He previously served as Mayor of Newark. A prominent progressive voice, he ran for president in 2020 and has been a leading advocate on criminal justice reform, poverty, and food security.',
    sinceYear: 2013,
    committees: [
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Booker voted against the Republican budget reconciliation bill, delivering a marathon floor speech in opposition to Medicaid cuts and arguing the bill would harm low-income Americans disproportionately in states like New Jersey.',
    },
    notableBill: {
      title: 'EQUAL Act — Drug Sentencing Reform',
      year: 2021,
      summary: 'Booker championed the Eliminating a Quantifiably Unjust Application of the Law (EQUAL) Act, which passed the House in 2021 and would eliminate the sentencing disparity between crack and powder cocaine, a long-standing criminal justice reform priority.',
    },
    topSectors: [
      { category: 'Technology & Venture Capital', amount: 4200000, percentage: 32 },
      { category: 'Finance & Investment', amount: 3500000, percentage: 27 },
      { category: 'Legal & Lobbying', amount: 2100000, percentage: 16 },
      { category: 'Individual Contributors', amount: 3300000, percentage: 25 },
    ],
  },

  {
    bioguideId: 'K000394',
    slug: 'andy-kim',
    name: 'Andy Kim',
    party: 'D',
    chamber: 'Senate',
    state: 'New Jersey',
    currentTitle: 'U.S. Senator from New Jersey',
    bio: 'Andy Kim served three terms representing New Jersey\'s 3rd Congressional District before winning the 2024 Senate race to fill the seat vacated by Bob Menendez\'s conviction and resignation. A former National Security Council director and State Department official, he was the first Korean-American senator from New Jersey. He gained national attention for personally helping clean up the Capitol after January 6, 2021.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    notableVote: {
      title: 'Against Pete Hegseth Confirmation',
      year: 2025,
      summary: 'Kim voted against confirming Pete Hegseth as Secretary of Defense, citing concerns about Hegseth\'s qualifications and conduct — one of his first Senate votes after taking office in January 2025.',
    },
    notableBill: {
      title: 'National Security supplemental — Ukraine aid',
      year: 2024,
      summary: 'Kim voted for the $95 billion national security supplemental package providing aid to Ukraine, Israel, and Taiwan, drawing on his national security background and foreign policy expertise.',
    },
    topSectors: [
      { category: 'Individual Contributors', amount: 8500000, percentage: 55 },
      { category: 'Technology & Defense', amount: 3100000, percentage: 20 },
      { category: 'Finance', amount: 2400000, percentage: 16 },
      { category: 'Other / Unitemized', amount: 1400000, percentage: 9 },
    ],
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
    bio: 'Donald Norcross has represented New Jersey\'s 1st Congressional District since 2014. A former electrician and union leader, he serves on the House Armed Services Committee and is a leading voice on labor and defense manufacturing issues in South Jersey.',
    sinceYear: 2014,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Norcross voted against the Republican reconciliation bill, arguing cuts to Medicaid and SNAP would harm working families and union members in South Jersey\'s Camden area.',
    },
    topSectors: [
      { category: 'Labor Unions', amount: 650000, percentage: 42 },
      { category: 'Defense & Manufacturing', amount: 420000, percentage: 27 },
      { category: 'Individual Contributors', amount: 480000, percentage: 31 },
    ],
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
    bio: 'Jeff Van Drew has represented New Jersey\'s 2nd Congressional District since 2019. He was elected as a Democrat but switched to the Republican Party in December 2019, citing opposition to the first impeachment of President Trump. He serves on the House Armed Services Committee and focuses on veterans\' issues and South Jersey\'s shore economy.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against First Trump Impeachment',
      year: 2019,
      summary: 'Van Drew voted against the first impeachment of President Trump in December 2019, then switched from the Democratic Party to the Republican Party, citing his belief that the impeachment was politically motivated.',
    },
    topSectors: [
      { category: 'Defense & Aerospace', amount: 480000, percentage: 38 },
      { category: 'Real Estate', amount: 320000, percentage: 25 },
      { category: 'Finance', amount: 250000, percentage: 20 },
      { category: 'Other / Unitemized', amount: 210000, percentage: 17 },
    ],
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
    bio: 'Herb Conaway won New Jersey\'s 3rd Congressional District in 2024, succeeding Andy Kim who vacated the seat to run for Senate. A physician and longtime New Jersey state legislator, he focuses on healthcare access, veterans\' issues, and the Fort Dix military community.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Conaway voted against the Republican budget reconciliation bill in his first congressional term, arguing that Medicaid cuts would harm the 3rd District\'s large veteran and military family population.',
    },
    topSectors: [
      { category: 'Healthcare & Medical', amount: 520000, percentage: 40 },
      { category: 'Individual Contributors', amount: 420000, percentage: 32 },
      { category: 'Labor', amount: 360000, percentage: 28 },
    ],
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
    bio: 'Chris Smith has represented New Jersey\'s 4th Congressional District since 1981, making him one of the longest-serving members of Congress. He co-chairs the Congressional Pro-Life Caucus and is a leading advocate on human rights, human trafficking, and veterans\' benefits. His longevity gives him significant seniority on key committees.',
    sinceYear: 1981,
    committees: [
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'For Trafficking Victims Protection Reauthorization Act',
      year: 2022,
      summary: 'Smith championed the reauthorization of the Trafficking Victims Protection Act, a cause he has led for over two decades, establishing federal anti-trafficking protections and international enforcement mechanisms.',
    },
    notableBill: {
      title: 'Trafficking Victims Protection Act (original)',
      year: 2000,
      summary: 'Smith authored and passed the original Trafficking Victims Protection Act of 2000, the landmark federal law establishing criminal penalties for human trafficking and creating victim protection and assistance programs.',
    },
    topSectors: [
      { category: 'Pro-Life & Religious Organizations', amount: 380000, percentage: 35 },
      { category: 'Defense & Aerospace', amount: 290000, percentage: 27 },
      { category: 'Individual Contributors', amount: 410000, percentage: 38 },
    ],
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
    bio: 'Josh Gottheimer has represented New Jersey\'s 5th Congressional District since 2017. He co-chairs the bipartisan Problem Solvers Caucus and is a centrist Democrat who has brokered several cross-partisan deals, including the Infrastructure Investment and Jobs Act. He is a vocal critic of the SALT deduction cap.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'For Infrastructure Investment and Jobs Act',
      year: 2021,
      summary: 'Gottheimer was a key negotiator and voted for the $1.2 trillion bipartisan infrastructure law, working across the aisle through the Problem Solvers Caucus to build the coalition that passed the bill.',
    },
    topSectors: [
      { category: 'Finance & Investment', amount: 2100000, percentage: 38 },
      { category: 'Technology', amount: 1400000, percentage: 25 },
      { category: 'Legal & Lobbying', amount: 1000000, percentage: 18 },
      { category: 'Individual Contributors', amount: 1100000, percentage: 19 },
    ],
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
    bio: 'Frank Pallone has represented New Jersey\'s 6th Congressional District since 1988. He is the Ranking Member of the House Energy and Commerce Committee — one of the most powerful committees in the House — overseeing healthcare, energy, technology, and consumer protection policy.',
    sinceYear: 1988,
    committees: [
      { slug: 'hsec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Ranking Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill — Medicaid Cuts',
      year: 2025,
      summary: 'Pallone led House Democratic opposition to the Republican reconciliation bill from the Energy and Commerce Committee ranking seat, arguing the Medicaid work requirements and cuts would strip coverage from millions of Americans.',
    },
    notableBill: {
      title: 'Affordable Care Act — Author of Key Provisions',
      year: 2010,
      summary: 'Pallone was a principal author of the Affordable Care Act through the Energy and Commerce Committee, shaping the law\'s insurance market reforms, Medicaid expansion, and consumer protections.',
    },
    topSectors: [
      { category: 'Healthcare & Pharma', amount: 1800000, percentage: 38 },
      { category: 'Technology & Telecom', amount: 1200000, percentage: 25 },
      { category: 'Individual Contributors', amount: 1700000, percentage: 37 },
    ],
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
    bio: 'Tom Kean Jr. has represented New Jersey\'s 7th Congressional District since 2023. The son of former Governor Tom Kean Sr., he is a moderate Republican who served over a decade in the New Jersey State Senate before narrowly winning the competitive 7th District. He serves on the House Select Committee on Intelligence.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsin', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'For Ukraine Aid Package',
      year: 2024,
      summary: 'Kean voted for the $95 billion national security supplemental providing aid to Ukraine and Israel, breaking with the MAGA wing of the Republican Party and reflecting his more moderate foreign policy stance.',
    },
    topSectors: [
      { category: 'Finance & Investment', amount: 1100000, percentage: 38 },
      { category: 'Defense & Technology', amount: 700000, percentage: 24 },
      { category: 'Individual Contributors', amount: 1100000, percentage: 38 },
    ],
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
    bio: 'Rob Menendez has represented New Jersey\'s 8th Congressional District since 2023. The son of former Senator Bob Menendez, he is the first Filipino-American congressman from New Jersey. He serves on the House Transportation and Infrastructure Committee and focuses on transit, immigration, and his district\'s large Latino and immigrant community.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsti', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsfr', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against Laken Riley Act',
      year: 2025,
      summary: 'Menendez voted against the Laken Riley Act, arguing the mandatory detention provisions would harm immigrant communities in Hudson County — one of the most diverse counties in the country.',
    },
    topSectors: [
      { category: 'Labor & Unions', amount: 480000, percentage: 40 },
      { category: 'Individual Contributors', amount: 360000, percentage: 30 },
      { category: 'Transportation & Infrastructure', amount: 360000, percentage: 30 },
    ],
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
    bio: 'Nellie Pou won New Jersey\'s 9th Congressional District in 2024, filling the seat left vacant by the death of longtime Representative Bill Pascrell Jr. A former New Jersey State Assemblywoman and Passaic County Freeholder, she is the first Latina to represent the district, which covers Bergen and Passaic counties.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsti', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against Laken Riley Act',
      year: 2025,
      summary: 'Pou voted against the Laken Riley Act in her first weeks in Congress, consistent with her background representing Passaic County\'s large immigrant and Latino population.',
    },
    topSectors: [
      { category: 'Individual Contributors', amount: 580000, percentage: 48 },
      { category: 'Labor Unions', amount: 380000, percentage: 32 },
      { category: 'Other / Unitemized', amount: 240000, percentage: 20 },
    ],
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
    bio: 'LaMonica McIver won the 2024 special election for New Jersey\'s 10th Congressional District, which covers Newark and parts of Essex County. She succeeded the late Donald Payne Jr. and is the first woman to represent the majority-Black district, which includes New Jersey\'s largest city.',
    sinceYear: 2024,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hssb', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'McIver voted against the Republican reconciliation bill, arguing its Medicaid and SNAP cuts would devastate Newark and Essex County, where federal safety net programs are relied upon by a significant share of the population.',
    },
    topSectors: [
      { category: 'Labor & Public Sector', amount: 420000, percentage: 45 },
      { category: 'Individual Contributors', amount: 310000, percentage: 33 },
      { category: 'Other / Unitemized', amount: 210000, percentage: 22 },
    ],
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
    bio: 'Analilia Mejia represents New Jersey\'s 11th Congressional District, which covers parts of Morris and Essex counties. A labor organizer and progressive activist, she previously served as Executive Director of New Jersey Working Families Alliance before her election to Congress.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hssb', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Mejia voted against the Republican reconciliation bill, opposing what she called an attack on working families and the social safety net in a district that includes both suburban communities and significant low-income populations.',
    },
    topSectors: [
      { category: 'Labor & Progressive Orgs', amount: 490000, percentage: 50 },
      { category: 'Individual Contributors', amount: 340000, percentage: 35 },
      { category: 'Other / Unitemized', amount: 150000, percentage: 15 },
    ],
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
    bio: 'Bonnie Watson Coleman has represented New Jersey\'s 12th Congressional District since 2015. The first Black congresswoman elected from New Jersey, she previously served in the New Jersey General Assembly for 15 years. She sits on the House Appropriations Committee and focuses on healthcare, housing, and civil rights.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    notableVote: {
      title: 'Against One Big Beautiful Bill',
      year: 2025,
      summary: 'Watson Coleman voted against the Republican reconciliation bill from her Appropriations seat, arguing the cuts to healthcare and education funding represented a fundamental betrayal of the most vulnerable Americans.',
    },
    topSectors: [
      { category: 'Labor & Unions', amount: 580000, percentage: 42 },
      { category: 'Individual Contributors', amount: 480000, percentage: 35 },
      { category: 'Healthcare', amount: 320000, percentage: 23 },
    ],
  },
]

export const njDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'S000148',
    slug: 'chuck-schumer',
    name: 'Chuck Schumer',
    party: 'D',
    chamber: 'Senate',
    state: 'New York',
    currentTitle: 'Senate Minority Leader',
    bio: 'Chuck Schumer has served in the Senate since 1999 and has led the Senate Democratic Caucus since 2017, serving as Majority Leader during the 117th Congress when Democrats passed the American Rescue Plan, Infrastructure Investment and Jobs Act, CHIPS and Science Act, and Inflation Reduction Act. Now Senate Minority Leader in the 119th Congress, he remains the most powerful Democrat in the upper chamber.',
    sinceYear: 1999,
    committees: [
      { slug: 'ssrul', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
      { slug: 'ssjud', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, New York 10th District', jurisdiction: 'U.S. House of Representatives', startDate: '1981-01-03', endDate: '1999-01-03' },
    ],
    keyMilestones: [
      { year: 1980, description: 'Elected to Congress at age 29 after two terms in the New York State Assembly' },
      { year: 1998, description: 'Elected to U.S. Senate, defeating incumbent Alfonse D\'Amato' },
      { year: 2017, description: 'Became Senate Democratic Leader following Harry Reid\'s retirement' },
      { year: 2021, description: 'Became Senate Majority Leader after Georgia runoff elections gave Democrats the 50th vote' },
      { year: 2023, description: 'Returned to Minority Leader role as Republicans took the Senate majority' },
    ],
    keyVotes: [
      { title: 'American Rescue Plan', year: 2021, month: 3, position: 'For', summary: 'Shepherded the $1.9 trillion COVID relief package through a 50-50 Senate using reconciliation. The bill provided $1,400 stimulus checks, extended enhanced unemployment benefits, and funded vaccine distribution — one of the largest economic interventions in American history.' },
      { title: 'Infrastructure Investment and Jobs Act', year: 2021, month: 11, position: 'For', summary: 'Co-negotiated and delivered the $1.2 trillion bipartisan infrastructure law, engineering a rare 69-30 Senate vote by building a coalition of moderate Republicans and all 50 Democrats.' },
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'For', summary: 'Championed the CHIPS Act as Senate Majority Leader and a co-author, having pushed for domestic semiconductor investment for years before the COVID chip shortage created political momentum.' },
      { title: 'Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Negotiated the final deal with Sen. Joe Manchin that revived the sweeping climate, healthcare, and tax legislation, delivering the largest climate investment in U.S. history after months of failed efforts.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Led Senate Democratic opposition to the Republican reconciliation package, calling it the "largest cut to the social safety net in American history" and arguing it would hurt millions of working families while giving tax breaks to the wealthy.' },
    ],
    keyBills: [
      { title: 'CHIPS and Science Act', year: 2022, month: 7, summary: 'Co-authored the landmark legislation providing $52 billion in subsidies for domestic semiconductor manufacturing and $200 billion in science R&D funding — a defining achievement of the 117th Congress that has attracted more than $200 billion in private chip fab investment.' },
      { title: 'Inflation Reduction Act', year: 2022, month: 8, summary: 'Negotiated and delivered the IRA providing $369 billion in clean energy investment, allowing Medicare to negotiate drug prices, and imposing a 15% corporate minimum tax — after a year of failed negotiations with Manchin and Sinema.' },
    ],
  },

  {
    bioguideId: 'G000555',
    slug: 'kirsten-gillibrand',
    name: 'Kirsten Gillibrand',
    party: 'D',
    chamber: 'Senate',
    state: 'New York',
    currentTitle: 'U.S. Senator from New York',
    bio: 'Kirsten Gillibrand was appointed to Hillary Clinton\'s Senate seat in 2009 and has since won election twice. She served as Chair of the Senate Armed Services Personnel Subcommittee and is best known for her crusade against sexual assault in the military, her work expanding healthcare for 9/11 first responders, and a 2019 presidential campaign.',
    sinceYear: 2009,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'ssag', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, New York 20th District', jurisdiction: 'U.S. House of Representatives', startDate: '2007-01-04', endDate: '2009-01-23' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected to Congress for NY-20, a swing district' },
      { year: 2009, description: 'Appointed to Senate by Governor David Paterson to fill Hillary Clinton\'s seat' },
      { year: 2019, description: 'Ran for president; suspended campaign in August 2019' },
      { year: 2022, description: 'Re-elected to Senate with 56% of the vote' },
    ],
    keyVotes: [
      { title: 'Military Justice Improvement Act', year: 2021, month: 12, position: 'For', summary: 'Championed landmark legislation removing sexual assault cases from the military chain of command after more than a decade of advocacy. The bill passed 73-25, the first major overhaul of the military justice system.' },
      { title: 'PACT Act — 9/11 First Responders', year: 2022, month: 8, position: 'For', summary: 'Was the lead Senate sponsor of the PACT Act expanding healthcare for toxic burn pit veterans, having previously championed the James Zadroga 9/11 Health and Compensation Act for first responders.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, arguing its Medicaid cuts and rollback of clean energy credits would harm New York families and the state\'s growing clean energy sector.' },
    ],
    keyBills: [
      { title: 'Military Justice Improvement Act', year: 2021, month: 12, summary: 'After nine years of advocacy, achieved passage of legislation removing sexual assault prosecutions from military chain of command — a fundamental reform to military justice she has championed since 2013, when she released the documentary "The Invisible War."' },
      { title: 'Child Tax Credit Enhancement Act', year: 2023, month: 4, summary: 'Led legislation to make the enhanced Child Tax Credit ($3,600 per child) permanent, arguing the temporary expansion in the American Rescue Plan cut child poverty by 40% before its expiration in 2021.' },
    ],
  },

  // ── U.S. HOUSE — Districts 1–26 ───────────────────────────────────────────

  {
    bioguideId: 'L000598',
    slug: 'nick-lalota',
    name: 'Nick LaLota',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 1,
    currentTitle: 'U.S. Representative, New York 1st District',
    bio: 'Nick LaLota is a Navy Reserve officer and former Suffolk County legislator who won Long Island\'s 1st District in 2022. He serves on the Armed Services and Ethics Committees and is a moderate Republican who has broken with his party on some issues including the January 6 investigation.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress for NY-1' },
    ],
    keyVotes: [
      { title: 'January 6 Criminal Referrals', year: 2023, month: 1, position: 'For', summary: 'Voted to refer four former Trump officials to the DOJ for prosecution related to January 6th, one of a small number of Republicans to support the referrals.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package while pushing for provisions maintaining the SALT deduction cap increase — a critical issue for his high-tax Long Island constituents.' },
    ],
    keyBills: [
      { title: 'SALT Deduction Relief Act', year: 2023, month: 5, summary: 'Championed legislation raising the $10,000 SALT deduction cap, arguing the 2017 limitation unfairly punishes middle-class homeowners in high-tax states like New York.' },
      { title: 'Long Island Sound Restoration Act', year: 2025, month: 4, summary: 'Introduced legislation increasing EPA funding for Long Island Sound cleanup and nitrogen reduction programs, protecting the Sound\'s shellfish and fishing industries.' },
    ],
  },

  {
    bioguideId: 'G000597',
    slug: 'andrew-garbarino',
    name: 'Andrew Garbarino',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 2,
    currentTitle: 'U.S. Representative, New York 2nd District',
    bio: 'Andrew Garbarino is a former New York state assemblyman who has represented Long Island\'s 2nd District since 2021. He serves on the Homeland Security and Financial Services Committees and is a moderate Republican focused on SALT tax relief, flood insurance reform, and Long Island\'s suburban concerns.',
    sinceYear: 2021,
    committees: [
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress for NY-2' },
    ],
    keyVotes: [
      { title: 'SALT Deduction Cap Increase', year: 2024, month: 5, position: 'For', summary: 'Championed legislation raising the SALT deduction cap from $10,000 to $20,000 for married filers, a key issue for his Long Island constituents who pay among the highest property taxes in the United States.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after securing provisions raising the SALT deduction cap for his constituents, working in a coalition of New York and New Jersey Republicans who made SALT relief their condition for support.' },
    ],
    keyBills: [
      { title: 'SALT Deduction Fairness Act', year: 2023, month: 4, summary: 'Introduced bipartisan legislation raising the SALT deduction cap to $100,000 for individuals and $200,000 for joint filers, leading a coalition of blue-state Republicans and Democrats.' },
      { title: 'National Flood Insurance Program Reform Act', year: 2025, month: 3, summary: 'Championed NFIP reform legislation stabilizing flood insurance premiums for Long Island homeowners who have faced dramatic rate increases under the Risk Rating 2.0 overhaul.' },
    ],
  },

  {
    bioguideId: 'S001201',
    slug: 'tom-suozzi',
    name: 'Tom Suozzi',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 3,
    currentTitle: 'U.S. Representative, New York 3rd District',
    bio: 'Tom Suozzi won a February 2024 special election to reclaim New York\'s 3rd District, the seat vacated by expelled Rep. George Santos. A former Nassau County Executive and prior House member (2017-23), he ran unsuccessfully for Governor in 2022 before returning to Congress as a centrist Democrat focused on immigration enforcement, SALT reform, and fiscal responsibility.',
    sinceYear: 2024,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Nassau County Executive', jurisdiction: 'Nassau County, New York', startDate: '2002-01-01', endDate: '2017-12-31' },
      { title: 'U.S. Representative, New York 3rd District', jurisdiction: 'U.S. House of Representatives', startDate: '2017-01-03', endDate: '2023-01-03' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected Nassau County Executive' },
      { year: 2016, description: 'Elected to Congress; served 2017-2023' },
      { year: 2024, description: 'Won special election to reclaim NY-3 vacated by expelled Rep. George Santos' },
    ],
    keyVotes: [
      { title: 'Bipartisan Border Security Act', year: 2024, month: 2, position: 'For', summary: 'Was one of the Democrats most vocally supporting the Senate bipartisan border deal, having campaigned partly on a platform of stricter immigration enforcement — an unusual stance for a NY Democrat but one he argues reflects Long Island voter concerns.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package despite his centrist positioning, opposing Medicaid cuts and arguing the SALT provisions were insufficient for Nassau County homeowners.' },
    ],
    keyBills: [
      { title: 'SALT Deduction Cap Elimination Act', year: 2024, month: 5, summary: 'Introduced legislation fully eliminating the SALT deduction cap for households earning under $500,000, making him a leading voice on the issue his Long Island constituents rank as their top financial concern.' },
      { title: 'Bipartisan Immigration Enforcement Act', year: 2025, month: 3, summary: 'Introduced a rare Democratic-led bill strengthening interior immigration enforcement for convicted criminals, reflecting his position that Democrats must take enforcement seriously to rebuild trust with swing voters.' },
    ],
  },

  {
    bioguideId: 'G000602',
    slug: 'laura-gillen',
    name: 'Laura Gillen',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 4,
    currentTitle: 'U.S. Representative, New York 4th District',
    bio: 'Laura Gillen flipped Long Island\'s 4th District in 2024, defeating Republican incumbent Anthony D\'Esposito. A former Hempstead Town Supervisor, she brings local government experience to the Transportation and Infrastructure and Education and Workforce Committees, focusing on Long Island infrastructure and SALT deduction reform.',
    sinceYear: 2025,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hewf', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Hempstead Town Supervisor', jurisdiction: 'Town of Hempstead, New York', startDate: '2018-01-01', endDate: '2021-12-31' },
    ],
    keyMilestones: [
      { year: 2017, description: 'Elected Town of Hempstead Supervisor, the first Democrat in the role in 108 years' },
      { year: 2024, description: 'Elected to Congress, flipping NY-4 in a competitive Long Island race' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, opposing Medicaid cuts and arguing the SALT provisions were inadequate for Long Island homeowners with some of the highest property taxes in the nation.' },
    ],
    keyBills: [
      { title: 'Long Island Sound Transit Modernization Act', year: 2025, month: 4, summary: 'Championed legislation increasing federal investment in Long Island Rail Road electrification and capacity expansion, addressing the chronic overcrowding and reliability issues that Long Island commuters face.' },
      { title: 'SALT Fairness Act', year: 2025, month: 5, summary: 'Introduced bipartisan SALT deduction legislation, a top constituent priority in Nassau County where property tax bills routinely exceed $20,000.' },
    ],
  },

  {
    bioguideId: 'M001137',
    slug: 'gregory-meeks',
    name: 'Gregory Meeks',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 5,
    currentTitle: 'U.S. Representative, New York 5th District',
    bio: 'Gregory Meeks has represented Queens since 1998 and serves as Ranking Member of the House Foreign Affairs Committee. He is the most senior Black member of the New York delegation and a key voice on foreign policy, trade, and Caribbean diplomatic relations, with deep ties to both Queens\' diverse communities and the Jamaican and Haitian diaspora.',
    sinceYear: 1998,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Ranking Member' },
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 1998, description: 'Elected to Congress in a special election' },
      { year: 2021, description: 'Became Chairman of the House Foreign Affairs Committee' },
      { year: 2023, description: 'Became Ranking Member of Foreign Affairs after Republicans took the majority' },
    ],
    keyVotes: [
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'For', summary: 'As Foreign Affairs Ranking Member, led Democratic support for the $61 billion Ukraine security package, arguing abandoning Ukraine would embolden authoritarian regimes globally and undermine the international rules-based order.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to foreign assistance programs he views as essential to U.S. global influence and democracy promotion.' },
    ],
    keyBills: [
      { title: 'Caribbean Basin Security Initiative Expansion', year: 2023, month: 7, summary: 'Championed legislation expanding U.S. security and development assistance to Caribbean nations, strengthening relationships with the large Caribbean diaspora communities in Queens that he represents.' },
      { title: 'Africa Growth and Opportunity Act Renewal', year: 2025, month: 3, summary: 'Led legislation renewing and expanding AGOA trade preferences for sub-Saharan African nations, arguing the program is both economically beneficial and a key tool of U.S. strategic competition with China in Africa.' },
    ],
  },

  {
    bioguideId: 'M001188',
    slug: 'grace-meng',
    name: 'Grace Meng',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 6,
    currentTitle: 'U.S. Representative, New York 6th District',
    bio: 'Grace Meng has represented the Queens 6th District since 2013 and is the first Asian-American elected to Congress from New York. She serves on the Appropriations Committee and is the Democratic Congressional Campaign Committee chair. She focuses on AAPI community concerns, anti-hate crime legislation, child nutrition, and small business issues.',
    sinceYear: 2013,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Congress, the first Asian-American from New York in the House' },
      { year: 2023, description: 'Named Chair of the Democratic Congressional Campaign Committee' },
    ],
    keyVotes: [
      { title: 'COVID-19 Hate Crimes Act', year: 2021, month: 5, position: 'For', summary: 'Led House passage of the COVID-19 Hate Crimes Act, which passed 364-62, directing DOJ and HHS to address the surge of anti-Asian hate crimes during the pandemic.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to federal nutrition programs she has championed through Appropriations and Medicaid reductions that would harm Queens\' immigrant communities.' },
    ],
    keyBills: [
      { title: 'COVID-19 Hate Crimes Act', year: 2021, month: 5, summary: 'Led the bipartisan anti-hate crime legislation through the House after the surge of anti-Asian violence during the pandemic. The bill passed 364-62 and was signed into law, directing law enforcement resources to address hate crimes.' },
      { title: 'AAPI Heritage Month Education Act', year: 2025, month: 5, summary: 'Championed legislation providing federal resources for K-12 AAPI history and heritage curriculum development, addressing the historical underrepresentation of Asian-American contributions in school curricula.' },
    ],
  },

  {
    bioguideId: 'V000081',
    slug: 'nydia-velazquez',
    name: 'Nydia Velázquez',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 7,
    currentTitle: 'U.S. Representative, New York 7th District',
    bio: 'Nydia Velázquez has represented Brooklyn and Lower Manhattan since 1993, making her the first Puerto Rican woman elected to Congress. She serves as Ranking Member of the House Small Business Committee and sits on Natural Resources, focusing on Puerto Rico\'s recovery, small business access to capital, and protecting New York Harbor.',
    sinceYear: 1993,
    committees: [
      { slug: 'hsmbu', name: 'House Committee on Small Business', chamber: 'House', role: 'Ranking Member' },
      { slug: 'hnr', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 1992, description: 'Elected to Congress, becoming the first Puerto Rican woman elected to the U.S. House' },
    ],
    keyVotes: [
      { title: 'Puerto Rico Status Act', year: 2022, month: 12, position: 'For', summary: 'Co-led advocacy for a binding Puerto Rico status plebiscite, arguing the 3.2 million U.S. citizens in Puerto Rico deserve a democratic say in their political status after 125 years of territorial governance.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing Small Business provisions she argued would reduce capital access for minority-owned small businesses and Medicaid cuts affecting Puerto Rico.' },
    ],
    keyBills: [
      { title: 'Puerto Rico Recovery Opportunity and Welfare Act', year: 2023, month: 5, summary: 'Introduced comprehensive legislation extending federal Earned Income Tax Credit, Medicaid parity, and Social Security benefits to Puerto Rico on the same terms as U.S. states, addressing the territory\'s structural economic disadvantage.' },
      { title: 'Small Business Lending Access Act', year: 2025, month: 4, summary: 'Championed legislation expanding SBA microloan programs and community development financial institution lending in underserved urban communities, drawing on her experience as Small Business Committee Ranking Member.' },
    ],
  },

  {
    bioguideId: 'J000294',
    slug: 'hakeem-jeffries',
    name: 'Hakeem Jeffries',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 8,
    currentTitle: 'House Minority Leader',
    bio: 'Hakeem Jeffries became House Minority Leader in January 2023, the first Black American to lead a major party caucus in Congress. A former Brooklyn state assemblyman and corporate litigator, he represents Central Brooklyn\'s 8th District and is widely seen as a pragmatic leader who has maintained party discipline while managing the ideologically diverse House Democratic Caucus through two consecutive cycles of minority status.',
    sinceYear: 2013,
    committees: [],
    previousOffices: [
      { title: 'New York State Assembly Member', jurisdiction: 'New York State Assembly', startDate: '2007-01-01', endDate: '2012-12-31' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected to New York State Assembly' },
      { year: 2012, description: 'Elected to Congress for NY-8, Brooklyn' },
      { year: 2019, description: 'Elected Chair of the House Democratic Caucus' },
      { year: 2023, description: 'Elected House Minority Leader, the first Black American to lead either party\'s congressional caucus' },
    ],
    keyVotes: [
      { title: 'Speaker Kevin McCarthy Removal', year: 2023, month: 10, position: 'Against', summary: 'Voted against the motion to vacate Speaker McCarthy alongside all Democrats, arguing the chaos served the interests of extremists and House Democrats should not enable the dysfunction.' },
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'For', summary: 'Engineered a rare procedural gambit bringing the Ukraine, Israel, and Taiwan supplemental aid package to the floor, delivering the majority of Democratic votes needed for passage after the Speaker\'s own conference fractured.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Led unified Democratic opposition to the Republican reconciliation package, holding all but a handful of Democrats together in opposition to what he characterized as Medicaid cuts to fund tax breaks for billionaires.' },
    ],
    keyBills: [
      { title: 'Supreme Court Ethics Act', year: 2023, month: 7, summary: 'Led House Democratic efforts to pass ethics and financial disclosure requirements for Supreme Court justices, responding to revelations of undisclosed gifts and travel for Justices Thomas and Alito.' },
      { title: 'Protecting the Right to Vote Act', year: 2025, month: 2, summary: 'Introduced comprehensive voting rights legislation as his signature minority legislative priority, combining Section 5 preclearance restoration with automatic voter registration and early voting minimums.' },
    ],
  },

  {
    bioguideId: 'C001067',
    slug: 'yvette-clarke',
    name: 'Yvette Clarke',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 9,
    currentTitle: 'U.S. Representative, New York 9th District',
    bio: 'Yvette Clarke has represented Central Brooklyn\'s 9th District since 2007 and is the daughter of Jamaican immigrants who founded the Congressional Caribbean Caucus. She serves on the Energy and Commerce Committee and focuses on climate policy, broadband access, and Caribbean relations, as well as cybersecurity and consumer protection in her capacity on Energy and Commerce.',
    sinceYear: 2007,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected to Congress for NY-11 (now NY-9 after redistricting)' },
    ],
    keyVotes: [
      { title: 'Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Championed the IRA\'s clean energy provisions, including community solar and environmental justice investments that benefit Brooklyn\'s urban heat island communities.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing rollback of clean energy credits and Medicaid cuts that would harm the Caribbean-American and working-class communities of Central Brooklyn.' },
    ],
    keyBills: [
      { title: 'Caribbean Basin Security Initiative', year: 2023, month: 6, summary: 'Championed expanded U.S. security and development cooperation with Caribbean nations through the Congressional Caribbean Caucus she founded, strengthening ties with the large Caribbean diaspora in her Brooklyn district.' },
      { title: 'Broadband Equity Act', year: 2025, month: 4, summary: 'Introduced legislation expanding BEAD grant program implementation oversight and requiring equitable broadband deployment plans prioritizing low-income urban neighborhoods that remain digitally underserved.' },
    ],
  },

  {
    bioguideId: 'G000599',
    slug: 'daniel-goldman',
    name: 'Daniel Goldman',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 10,
    currentTitle: 'U.S. Representative, New York 10th District',
    bio: 'Daniel Goldman became a household name as lead House impeachment counsel during Trump\'s first impeachment in 2019, then won the Manhattan-Brooklyn 10th District in 2022. A former federal prosecutor and heir to the Levi Strauss fortune, he serves on the Homeland Security Committee and Judiciary Committee and is a frequent spokesperson on Trump legal matters.',
    sinceYear: 2023,
    committees: [
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2019, description: 'Served as lead House impeachment counsel during Trump\'s first impeachment inquiry' },
      { year: 2022, description: 'Elected to Congress for NY-10' },
    ],
    keyVotes: [
      { title: 'Against Articles of Impeachment — Secretary Mayorkas', year: 2024, month: 2, position: 'Against', summary: 'Vigorously opposed the impeachment of DHS Secretary Mayorkas from his Judiciary Committee seat, arguing Republicans were weaponizing impeachment for policy disagreements rather than high crimes.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, leading Judiciary Committee opposition to immigration enforcement provisions he argued violated constitutional due process rights.' },
    ],
    keyBills: [
      { title: 'Presidential Accountability Act', year: 2024, month: 7, summary: 'Introduced legislation clarifying that presidents can be held criminally liable for acts committed while in office, responding to the Supreme Court\'s Trump v. United States immunity ruling.' },
      { title: 'Foreign Interference Election Prevention Act', year: 2025, month: 3, summary: 'Championed legislation expanding FARA enforcement and requiring campaigns to report foreign national contacts to FBI within 72 hours, drawing on his prosecutorial experience with foreign influence operations.' },
    ],
  },

  {
    bioguideId: 'M000317',
    slug: 'nicole-malliotakis',
    name: 'Nicole Malliotakis',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 11,
    currentTitle: 'U.S. Representative, New York 11th District',
    bio: 'Nicole Malliotakis represents Staten Island and a slice of Southern Brooklyn and is the only Republican member of Congress from New York City. The daughter of Cuban and Greek immigrants, she serves on the Ways and Means Committee and focuses on SALT tax relief, crime, immigration enforcement, and small business issues for one of New York City\'s most politically competitive areas.',
    sinceYear: 2021,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress, becoming the only Republican in New York City\'s congressional delegation' },
    ],
    keyVotes: [
      { title: 'SALT Deduction Cap Increase', year: 2025, month: 4, position: 'For', summary: 'Led New York Republicans in demanding SALT deduction relief as a condition for supporting the reconciliation package, representing the single most important financial issue for Staten Island homeowners.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after securing significant increases in the SALT deduction cap and border security provisions consistent with her constituents\' concerns about crime and immigration.' },
    ],
    keyBills: [
      { title: 'SALT Fairness for Americans Act', year: 2023, month: 3, summary: 'Championed bipartisan SALT legislation raising the cap substantially for middle-income homeowners in high-tax areas, making this the central legislative priority of her Ways and Means assignment.' },
      { title: 'Stopping Criminal Organizations and Gangs Act', year: 2025, month: 4, summary: 'Introduced legislation enhancing federal prosecution resources for gangs operating across state lines, a priority for Staten Island communities concerned about crime spillover from migrant gang activity.' },
    ],
  },

  {
    bioguideId: 'N000002',
    slug: 'jerry-nadler',
    name: 'Jerry Nadler',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 12,
    currentTitle: 'U.S. Representative, New York 12th District',
    bio: 'Jerry Nadler is one of the most senior members of Congress, having served since 1992, and served as Chairman of the House Judiciary Committee from 2019 to 2023. He led both of Trump\'s House impeachment proceedings and has been a leading Democratic voice on civil liberties, LGBTQ rights, judicial independence, and criminal justice reform for three decades.',
    sinceYear: 1993,
    committees: [
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Ranking Member' },
    ],
    previousOffices: [
      { title: 'New York State Assembly Member', jurisdiction: 'New York State Assembly', startDate: '1977-01-01', endDate: '1992-12-31' },
    ],
    keyMilestones: [
      { year: 1976, description: 'Elected to New York State Assembly' },
      { year: 1992, description: 'Elected to Congress' },
      { year: 2019, description: 'Became Chairman of the House Judiciary Committee; led both Trump impeachment proceedings' },
      { year: 2023, description: 'Became Ranking Member of Judiciary after Republicans took the majority' },
    ],
    keyVotes: [
      { title: 'First Trump Impeachment', year: 2019, month: 12, position: 'For', summary: 'Led the House Judiciary Committee\'s impeachment proceedings against President Trump on charges of abuse of power and obstruction of Congress related to Ukraine pressure campaign.' },
      { title: 'Second Trump Impeachment', year: 2021, month: 1, position: 'For', summary: 'Led the House Judiciary Committee\'s rapid impeachment proceedings following the January 6 Capitol attack, with articles of impeachment for incitement of insurrection passing 232-197 — the first president impeached twice.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, leading Judiciary Committee Democratic opposition to immigration provisions he argued violated due process and civil liberties.' },
    ],
    keyBills: [
      { title: 'Prohibiting Punishment of Acquitted Conduct Act', year: 2023, month: 4, summary: 'Championed bipartisan legislation barring judges from considering conduct for which defendants were acquitted at sentencing — addressing a federal sentencing practice he views as fundamentally unjust.' },
      { title: 'Supreme Court Term Limits and Ethics Act', year: 2025, month: 3, summary: 'Introduced legislation through his Judiciary Ranking Member role imposing 18-year term limits on Supreme Court justices and binding ethical disclosure requirements, after revelations of undisclosed gifts to Justices Thomas and Alito.' },
    ],
  },

  {
    bioguideId: 'E000297',
    slug: 'adriano-espaillat',
    name: 'Adriano Espaillat',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 13,
    currentTitle: 'U.S. Representative, New York 13th District',
    bio: 'Adriano Espaillat succeeded Charles Rangel in representing Harlem and Northern Manhattan in 2017, becoming the first Dominican-American elected to Congress. He serves on the Appropriations Committee and focuses on immigrant rights, affordable housing, Columbia University partnership programs, and the economic development of Upper Manhattan\'s diverse communities.',
    sinceYear: 2017,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York State Senator', jurisdiction: 'New York State Senate', startDate: '2010-01-01', endDate: '2016-12-31' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Congress, the first Dominican-American in the history of the U.S. House' },
    ],
    keyVotes: [
      { title: 'Against Title 42 Extension', year: 2022, month: 11, position: 'Against', summary: 'Opposed Title 42 public health deportation authority used to turn away asylum-seekers at the border, arguing it violated international refugee law and denied due process to people with legitimate asylum claims.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing immigration enforcement provisions harmful to Northern Manhattan\'s large undocumented immigrant community and Medicaid cuts affecting the district\'s low-income residents.' },
    ],
    keyBills: [
      { title: 'American Dream and Promise Act', year: 2023, month: 3, summary: 'Championed legislation providing permanent legal status and a path to citizenship for DACA recipients and long-term TPS holders, reflecting his district\'s large Dominican-American immigrant community.' },
      { title: 'New York Community Reinvestment Act', year: 2025, month: 5, summary: 'Introduced legislation strengthening CRA requirements for banks operating in upper Manhattan, ensuring community reinvestment in Harlem and Washington Heights neighborhoods experiencing rapid gentrification.' },
    ],
  },

  {
    bioguideId: 'O000172',
    slug: 'alexandria-ocasio-cortez',
    name: 'Alexandria Ocasio-Cortez',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 14,
    currentTitle: 'U.S. Representative, New York 14th District',
    bio: 'Alexandria Ocasio-Cortez made history in 2018 as the youngest woman ever elected to Congress at age 29, defeating 10-term incumbent Joe Crowley in a primary upset that shocked the political world. The South Bronx and Queens representative is the most prominent progressive Democrat in the House, a prolific fundraiser who has become a global political brand, and is a leading voice on climate, economic inequality, immigration, and working-class issues.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Defeated 10-term incumbent Joe Crowley in the Democratic primary; became youngest woman elected to Congress at 29' },
      { year: 2019, description: 'Introduced the Green New Deal resolution, making climate justice a mainstream Democratic priority' },
      { year: 2022, description: 'Re-elected with 71% of the vote; raised over $14M in the cycle' },
    ],
    keyVotes: [
      { title: 'Against Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Voted for the IRA while calling it insufficient, arguing the climate spending must be paired with elimination of fossil fuel subsidies and a wealth tax. Was a leading voice for the Green New Deal\'s more ambitious vision.' },
      { title: 'Against Fiscal Responsibility Act', year: 2023, month: 5, position: 'Against', summary: 'Voted against the bipartisan debt ceiling deal, arguing the spending caps and work requirements for SNAP benefits were unjust austerity that would harm working-class families.' },
      { title: 'DOGE Oversight Resolution', year: 2025, month: 3, position: 'For', summary: 'Led progressive Oversight Committee efforts to investigate DOGE activities, including Elon Musk\'s access to Treasury payment systems and potential conflicts of interest with his private business holdings.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Was among the most vocal opponents of the reconciliation package, leading rallies and social media campaigns against Medicaid cuts and characterizing the bill as "class warfare" on working people.' },
    ],
    keyBills: [
      { title: 'Green New Deal Resolution', year: 2019, month: 2, summary: 'Introduced the landmark Green New Deal resolution with Sen. Ed Markey, calling for a 10-year national mobilization to decarbonize the economy and guarantee jobs, healthcare, and housing. Though non-binding, it fundamentally shifted the Democratic Party\'s climate agenda.' },
      { title: 'Billionaire Wealth Tax Act', year: 2025, month: 3, summary: 'Introduced legislation imposing a 2% annual tax on wealth above $50 million, the signature progressive tax proposal that has attracted broad support within the Democratic caucus even as it faces Republican opposition.' },
    ],
  },

  {
    bioguideId: 'T000486',
    slug: 'ritchie-torres',
    name: 'Ritchie Torres',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 15,
    currentTitle: 'U.S. Representative, New York 15th District',
    bio: 'Ritchie Torres represents the Bronx\'s 15th District, the poorest congressional district in the United States, and is one of the first LGBTQ members of color elected to Congress. A former New York City Councilman who grew up in a NYCHA housing project, he serves on the Financial Services Committee and has become an unusually outspoken Democratic critic of the far-left and a strong supporter of Israel.',
    sinceYear: 2021,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York City Council Member', jurisdiction: 'New York City Council', startDate: '2013-01-01', endDate: '2020-12-31' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to New York City Council at 24' },
      { year: 2020, description: 'Elected to Congress, one of the first two openly gay Black men elected to Congress' },
    ],
    keyVotes: [
      { title: 'Iron Dome Supplemental Funding', year: 2021, month: 9, position: 'For', summary: 'Was the lone progressive Bronx Democrat to vote for $1 billion in Iron Dome replenishment funding for Israel when progressive colleagues temporarily blocked it, becoming a target of progressive criticism.' },
      { title: 'Israel Security Assistance', year: 2024, month: 4, position: 'For', summary: 'Voted for the emergency Israel security assistance package and has been one of the House\'s most vocal Democratic defenders of Israel, breaking sharply with his Squad-aligned colleagues on this issue.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing Medicaid and SNAP cuts that would devastate his constituents in what remains the poorest congressional district in the United States.' },
    ],
    keyBills: [
      { title: 'NYCHA Repair and Renovation Act', year: 2023, month: 7, summary: 'Championed federal investment in New York City Housing Authority infrastructure, addressing the $40 billion backlog of repairs in the public housing system where he grew up.' },
      { title: 'Antisemitism Awareness Act', year: 2025, month: 3, summary: 'Championed legislation requiring the Department of Education to use the IHRA definition of antisemitism in Title VI civil rights enforcement, responding to campus antisemitism following the October 7 Hamas attack.' },
    ],
  },

  {
    bioguideId: 'L000606',
    slug: 'george-latimer',
    name: 'George Latimer',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 16,
    currentTitle: 'U.S. Representative, New York 16th District',
    bio: 'George Latimer won the Westchester 16th District in August 2024, defeating incumbent Rep. Jamaal Bowman in the most expensive House primary in U.S. history — spending over $25 million, largely funded by pro-Israel PACs. The former Westchester County Executive is a centrist Democrat who broke with Bowman on Israel and focuses on SALT tax relief, local government funding, and housing affordability.',
    sinceYear: 2025,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Westchester County Executive', jurisdiction: 'Westchester County, New York', startDate: '2018-01-01', endDate: '2024-12-31' },
      { title: 'New York State Senator', jurisdiction: 'New York State Senate', startDate: '2013-01-01', endDate: '2017-12-31' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected Westchester County Executive' },
      { year: 2024, description: 'Defeated Rep. Jamaal Bowman in the most expensive House primary in U.S. history; won with 58%' },
    ],
    keyVotes: [
      { title: 'Israel Security Assistance', year: 2025, month: 2, position: 'For', summary: 'Voted for Israel security assistance in his first months in Congress, consistent with the pro-Israel positions that defined his primary campaign against Bowman.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing Medicaid cuts while pushing for SALT provisions that would benefit his Westchester constituents who pay some of the highest property taxes in the nation.' },
    ],
    keyBills: [
      { title: 'Westchester Commuter Rail Modernization Act', year: 2025, month: 4, summary: 'Championed federal investment in Metro-North Railroad infrastructure upgrades and Penn Station access improvements for Westchester commuters through his Transportation Committee assignment.' },
      { title: 'SALT Deduction for Working Families Act', year: 2025, month: 5, summary: 'Introduced legislation raising the SALT deduction cap specifically for middle-income households, framing it as tax fairness for the Westchester homeowners who pay $20,000+ in annual property taxes.' },
    ],
  },

  {
    bioguideId: 'L000599',
    slug: 'michael-lawler',
    name: 'Michael Lawler',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 17,
    currentTitle: 'U.S. Representative, New York 17th District',
    bio: 'Michael Lawler is a former New York state assemblyman who won the Hudson Valley 17th District in 2022 and is one of the most competitive House Republicans in the country — winning re-election in 2024 in a heavily Biden district. He serves on the Foreign Affairs Committee and is a moderate Republican who has been willing to criticize Trump on certain issues while maintaining a broadly conservative voting record.',
    sinceYear: 2023,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to New York State Assembly' },
      { year: 2022, description: 'Elected to Congress for NY-17, one of the most competitive districts in the country' },
    ],
    keyVotes: [
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'For', summary: 'Voted for the $61 billion Ukraine security assistance package, breaking with the isolationist faction of House Republicans and arguing that abandoning Ukraine would embolden adversaries.' },
      { title: 'SALT Deduction Increase', year: 2025, month: 4, position: 'For', summary: 'Was a key negotiator in the SALT caucus demanding deduction cap increases as a condition for supporting the reconciliation package, representing the single biggest financial concern of his competitive suburban district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after securing substantial SALT deduction increases, allowing him to deliver a tangible benefit to his competitive district\'s homeowners.' },
    ],
    keyBills: [
      { title: 'SALT Relief Act', year: 2023, month: 4, summary: 'Championed bipartisan SALT deduction legislation, leading a coalition of blue-state Republicans who made SALT cap relief a condition for supporting any major Republican fiscal legislation.' },
      { title: 'Hudson Valley Transportation Investment Act', year: 2025, month: 5, summary: 'Championed federal transportation grants for the I-84 corridor improvements and Metro-North and NJ Transit connectivity projects critical for Hudson Valley residents commuting to New York City.' },
    ],
  },

  {
    bioguideId: 'R000579',
    slug: 'patrick-ryan',
    name: 'Patrick Ryan',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 18,
    currentTitle: 'U.S. Representative, New York 18th District',
    bio: 'Patrick Ryan is an Army veteran and former Ulster County Executive who won New York\'s 18th District in 2022 in a special election, then won re-election to the full term. He serves on the Armed Services Committee and has been a model for how Democrats campaign on abortion rights, veteran issues, and economic issues in swing districts.',
    sinceYear: 2022,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Ulster County Executive', jurisdiction: 'Ulster County, New York', startDate: '2019-01-01', endDate: '2022-08-23' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Won special election in NY-18; subsequently won the full-term general election' },
    ],
    keyVotes: [
      { title: 'NDAA FY2025', year: 2024, month: 12, position: 'For', summary: 'Supported the defense authorization act, championing through Armed Services Committee provisions for veteran mental health and addressing military housing quality issues he prioritizes as a veteran.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing Medicaid cuts he argued would harm Hudson Valley families and veteran healthcare reductions from VA budget adjustments.' },
    ],
    keyBills: [
      { title: 'Hudson Valley Veterans Service Act', year: 2023, month: 6, summary: 'Championed federal investment in VA telehealth and mental health services for veterans in the Hudson Valley, where rural geography limits access to VA facilities.' },
      { title: 'Hudson River Valley National Heritage Area Expansion Act', year: 2025, month: 4, summary: 'Introduced legislation expanding the Hudson River Valley National Heritage Area and increasing NPS funding for the region\'s historic sites and outdoor recreation economy.' },
    ],
  },

  {
    bioguideId: 'R000622',
    slug: 'josh-riley',
    name: 'Josh Riley',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 19,
    currentTitle: 'U.S. Representative, New York 19th District',
    bio: 'Josh Riley flipped New York\'s 19th District in November 2024, defeating Republican incumbent Marc Molinaro in a highly competitive race for the Southern Tier and Catskills seat. A former aide to Governor Cuomo and trial attorney, he won by focusing on abortion rights, healthcare, and economic issues in a district that has been a reliable bellwether.',
    sinceYear: 2025,
    committees: [
      { slug: 'hag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2024, description: 'Elected to Congress for NY-19, flipping a competitive swing district' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing SNAP cuts that would harm his rural district\'s food-insecure families and Medicaid reductions affecting the Southern Tier\'s health system.' },
    ],
    keyBills: [
      { title: 'Southern Tier Economic Revival Act', year: 2025, month: 4, summary: 'Introduced legislation creating federal economic development grants and workforce training programs for Southern Tier communities that lost manufacturing jobs over the past three decades.' },
      { title: 'Small Farm Sustainability Act', year: 2025, month: 7, summary: 'Championed legislation expanding USDA direct loan programs and crop insurance options for small farms under 500 acres through his Agriculture Committee assignment, addressing the needs of NY-19\'s agricultural communities.' },
    ],
  },

  {
    bioguideId: 'T000469',
    slug: 'paul-tonko',
    name: 'Paul Tonko',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 20,
    currentTitle: 'U.S. Representative, New York 20th District',
    bio: 'Paul Tonko has represented the Albany-area 20th District since 2009 and is a former New York state energy policy official who chairs the Environment and Climate Change Subcommittee on Energy and Commerce. He focuses on clean energy transition, semiconductor manufacturing, and the state capital\'s government and healthcare economy.',
    sinceYear: 2009,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York State Assembly Member', jurisdiction: 'New York State Assembly', startDate: '1983-01-01', endDate: '2007-12-31' },
      { title: 'President, New York State Energy Research and Development Authority', jurisdiction: 'NYSERDA', startDate: '2007-01-01', endDate: '2008-12-31' },
    ],
    keyMilestones: [
      { year: 1982, description: 'Elected to New York State Assembly; served 13 terms' },
      { year: 2008, description: 'Elected to Congress for NY-21 (now NY-20)' },
    ],
    keyVotes: [
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'For', summary: 'Championed the CHIPS Act as a direct economic benefit for the Capital Region, which includes GlobalFoundries\' major semiconductor fab in Malta, NY — one of the facilities the CHIPS Act was designed to support and expand.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing the rollback of clean energy credits he helped shape through the IRA and Medicaid cuts affecting his district\'s large healthcare and government sector workforce.' },
    ],
    keyBills: [
      { title: 'CHIPS for America Expansion Act', year: 2023, month: 8, summary: 'Championed legislation expanding the CHIPS Act to include more research and development facilities and workforce training programs, building on GlobalFoundries\' planned expansion in his district.' },
      { title: 'Addiction Treatment and Recovery Act', year: 2025, month: 4, summary: 'Introduced bipartisan legislation expanding coverage and access to medication-assisted treatment for opioid use disorder — a public health crisis in the Capital Region and Southern Adirondack communities of NY-20.' },
    ],
  },

  {
    bioguideId: 'S001196',
    slug: 'elise-stefanik',
    name: 'Elise Stefanik',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 21,
    currentTitle: 'U.S. Representative, New York 21st District',
    bio: 'Elise Stefanik served as House Republican Conference Chair — the third-highest leadership position — from 2021 to 2024, before returning to her backbench role following the 2024 elections. The youngest woman ever elected to Congress when first elected in 2014, she serves on the Armed Services Committee and focuses on Fort Drum, North Country economic development, and agricultural policy for her large upstate district.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2014, description: 'Elected to Congress at 30, the youngest woman elected to Congress at the time' },
      { year: 2021, description: 'Elected House Republican Conference Chair after Liz Cheney was removed' },
      { year: 2024, description: 'Stepped down from Conference Chair after 2024 elections; nominated for UN Ambassador but not confirmed' },
    ],
    keyVotes: [
      { title: 'Liz Cheney Conference Chair Removal', year: 2021, month: 5, position: 'For', summary: 'Led the effort to remove Liz Cheney as Conference Chair, arguing her continued criticism of Trump was electorally damaging to House Republicans. Was then elected as Cheney\'s replacement.' },
      { title: 'NDAA FY2025 — Fort Drum Provisions', year: 2024, month: 12, position: 'For', summary: 'Championed Armed Services Committee provisions protecting Fort Drum\'s 10th Mountain Division basing, infrastructure investment, and military family housing in the NDAA.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked through Armed Services to protect Fort Drum operations and secured Agriculture Committee provisions for North Country dairy farmers.' },
    ],
    keyBills: [
      { title: 'Fort Drum Investment Act', year: 2023, month: 6, summary: 'Championed Armed Services earmarks and authorization for Fort Drum infrastructure modernization, family housing improvements, and 10th Mountain Division training facilities — protecting the 10,000+ jobs Fort Drum provides to the North Country economy.' },
      { title: 'North Country Dairy Farm Relief Act', year: 2025, month: 4, summary: 'Introduced legislation expanding USDA dairy margin protection payments and milk market order reforms for the small dairy operations that define NY-21\'s agricultural economy.' },
    ],
  },

  {
    bioguideId: 'M001231',
    slug: 'john-mannion',
    name: 'John Mannion',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 22,
    currentTitle: 'U.S. Representative, New York 22nd District',
    bio: 'John Mannion is a former high school teacher and state senator who flipped the Syracuse-area 22nd District in 2024, defeating Republican incumbent Brandon Williams. He serves on the Agriculture and Transportation Committees, focusing on Central New York manufacturing revitalization, rural healthcare, and agricultural issues.',
    sinceYear: 2025,
    committees: [
      { slug: 'hag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York State Senator', jurisdiction: 'New York State Senate', startDate: '2021-01-01', endDate: '2024-12-31' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to New York State Senate' },
      { year: 2024, description: 'Elected to Congress for NY-22, flipping the competitive Central New York district' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing SNAP and Medicaid cuts that would harm Central New York\'s rural communities and the cuts to manufacturing incentive programs he ran on expanding.' },
    ],
    keyBills: [
      { title: 'Central New York Manufacturing Renaissance Act', year: 2025, month: 3, summary: 'Introduced legislation expanding Opportunity Zone incentives and federal manufacturing loan guarantees for the Onondaga and Oneida county manufacturing corridors that have lost tens of thousands of industrial jobs since 1980.' },
      { title: 'Rural Hospital Sustainability Act', year: 2025, month: 6, summary: 'Championed legislation increasing Medicare reimbursement rates for rural critical access hospitals in Central New York counties facing closure from thin operating margins and physician shortages.' },
    ],
  },

  {
    bioguideId: 'L000600',
    slug: 'nick-langworthy',
    name: 'Nick Langworthy',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 23,
    currentTitle: 'U.S. Representative, New York 23rd District',
    bio: 'Nick Langworthy served as Chair of the New York Republican Party before winning the Western New York 23rd District in a 2022 special election. He serves on the Financial Services Committee and focuses on the economic revitalization of Western New York, particularly manufacturing, agricultural trade, and the Niagara Falls and Buffalo economies.',
    sinceYear: 2023,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Chair, New York Republican Party', jurisdiction: 'New York Republican Party', startDate: '2019-01-01', endDate: '2022-12-31' },
    ],
    keyMilestones: [
      { year: 2019, description: 'Elected Chair of the New York Republican Party' },
      { year: 2022, description: 'Won special election for NY-23' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; secured Financial Services provisions expanding access to capital for Western New York manufacturers and negotiated protections for Niagara Falls energy infrastructure.' },
    ],
    keyBills: [
      { title: 'Niagara Power Economic Benefits Act', year: 2023, month: 7, summary: 'Championed legislation ensuring the economic benefits of Niagara Power Authority\'s low-cost hydroelectric power flow to Western New York manufacturing businesses rather than being sold out-of-market.' },
      { title: 'Western New York Manufacturing Revival Act', year: 2025, month: 3, summary: 'Introduced legislation creating federal manufacturing reinvestment grants and workforce training programs for Buffalo and Southern Tier manufacturing communities.' },
    ],
  },

  {
    bioguideId: 'T000478',
    slug: 'claudia-tenney',
    name: 'Claudia Tenney',
    party: 'R',
    chamber: 'House',
    state: 'New York',
    district: 24,
    currentTitle: 'U.S. Representative, New York 24th District',
    bio: 'Claudia Tenney won the Central New York 24th District in 2022 after a competitive re-election battle, and previously served 2017-2019. She serves on the Ways and Means Committee and focuses on tax policy, manufacturing, and reducing regulations on small businesses in the Utica-Rome corridor.',
    sinceYear: 2021,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'First elected to Congress' },
      { year: 2018, description: 'Lost re-election in an extremely close race' },
      { year: 2020, description: 'Won re-election to the House; certified after a months-long recount' },
    ],
    keyVotes: [
      { title: 'Tax Cuts and Jobs Act Extension', year: 2025, month: 5, position: 'For', summary: 'Championed making TCJA provisions permanent through Ways and Means, arguing the business tax cuts have been crucial for small manufacturers in Central New York.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; negotiated Ways and Means provisions benefiting small manufacturers in the Mohawk Valley who rely on the pass-through business deduction.' },
    ],
    keyBills: [
      { title: 'Made in America Manufacturing Act', year: 2023, month: 5, summary: 'Introduced legislation expanding domestic manufacturing tax credits and reducing tariffs on inputs for U.S. manufacturers, arguing Central New York\'s manufacturing base depends on a level playing field against foreign subsidies.' },
      { title: 'Main Street Business Relief Act', year: 2025, month: 4, summary: 'Championed legislation cutting compliance costs for small businesses with under 25 employees, a priority for the Utica and Rome area small business communities she has long represented.' },
    ],
  },

  {
    bioguideId: 'M001206',
    slug: 'joseph-morelle',
    name: 'Joseph Morelle',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 25,
    currentTitle: 'U.S. Representative, New York 25th District',
    bio: 'Joseph Morelle has represented the Rochester area since 2019 and served previously in the New York State Assembly for 25 years. He serves on the Rules Committee, giving him an influential position in determining what legislation reaches the House floor, and focuses on education, photonics manufacturing, and the University of Rochester research economy.',
    sinceYear: 2019,
    committees: [
      { slug: 'hrules', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York State Assembly Member', jurisdiction: 'New York State Assembly', startDate: '1991-01-01', endDate: '2018-12-31' },
    ],
    keyMilestones: [
      { year: 1990, description: 'Elected to New York State Assembly; served until 2018' },
      { year: 2018, description: 'Won special election for NY-25 to succeed Louise Slaughter' },
    ],
    keyVotes: [
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'For', summary: 'Strongly supported the CHIPS Act as a direct economic benefit for Rochester\'s photonics and optics manufacturing cluster and the University of Rochester\'s research programs.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing education funding cuts that would affect University of Rochester research grants and Medicaid reductions harming Rochester\'s working-class communities.' },
    ],
    keyBills: [
      { title: 'National Photonics Initiative Act', year: 2023, month: 8, summary: 'Championed legislation investing in photonics and integrated optical manufacturing R&D at AIM Photonics — the Albany-Rochester research consortium — building the next generation of chips and sensing technologies.' },
      { title: 'Rochester Digital Equity Act', year: 2025, month: 4, summary: 'Introduced legislation prioritizing broadband deployment and digital literacy programs in Rochester\'s low-income neighborhoods, addressing one of the nation\'s starkest digital divides in a legacy mid-sized city.' },
    ],
  },

  {
    bioguideId: 'K000402',
    slug: 'timothy-kennedy',
    name: 'Timothy Kennedy',
    party: 'D',
    chamber: 'House',
    state: 'New York',
    district: 26,
    currentTitle: 'U.S. Representative, New York 26th District',
    bio: 'Timothy Kennedy won a February 2024 special election to succeed Rep. Brian Higgins, who resigned to lead Highmark, a Pittsburgh-based healthcare network. A former New York state senator from Buffalo, Kennedy serves on the Transportation and Infrastructure Committee and focuses on the Niagara Falls redevelopment, Buffalo Billion economic investments, and Great Lakes environmental protection.',
    sinceYear: 2024,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'New York State Senator', jurisdiction: 'New York State Senate', startDate: '2011-01-01', endDate: '2024-02-26' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected to New York State Senate for SD-63 (Buffalo area)' },
      { year: 2024, description: 'Won special election for NY-26 to succeed Brian Higgins' },
    ],
    keyVotes: [
      { title: 'Great Lakes Restoration Initiative', year: 2024, month: 9, position: 'For', summary: 'Championed Great Lakes Restoration Initiative funding through the Transportation Committee, protecting Lake Erie water quality and the regional fishing and recreation economy.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing transportation formula cuts that would reduce federal investment in Buffalo and Niagara Falls infrastructure and Medicaid reductions affecting Western New York families.' },
    ],
    keyBills: [
      { title: 'Niagara Falls Revitalization Act', year: 2024, month: 6, summary: 'Championed federal investment in Niagara Falls tourism infrastructure, downtown redevelopment, and international bridge improvements, building on New York\'s Buffalo Billion economic development investments.' },
      { title: 'Great Lakes Plastic Pollution Reduction Act', year: 2025, month: 4, summary: 'Introduced legislation expanding Great Lakes plastic pollution monitoring and reduction programs through the EPA\'s Great Lakes National Program Office, protecting Lake Erie\'s fisheries and drinking water for Buffalo.' },
    ],
  },
]

export const nyDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'S001217',
    slug: 'rick-scott',
    name: 'Rick Scott',
    party: 'R',
    chamber: 'Senate',
    state: 'Florida',
    currentTitle: 'U.S. Senator from Florida',
    bio: 'Rick Scott served as Florida\'s Governor from 2011 to 2019, presiding over a period of strong job growth and fiscal austerity, before winning a razor-thin Senate race against incumbent Bill Nelson. In the Senate he has been a vocal hawk on China policy, Cuba sanctions, and government spending, and chaired the National Republican Senatorial Committee during the 2022 midterms.',
    sinceYear: 2019,
    committees: [
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssci', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Governor of Florida', jurisdiction: 'State of Florida', startDate: '2011-01-04', endDate: '2019-01-08' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected Governor of Florida, defeating Democrat Alex Sink by less than 1%' },
      { year: 2014, description: 'Re-elected Governor, defeating former Governor Charlie Crist' },
      { year: 2018, description: 'Won U.S. Senate seat, defeating Democratic incumbent Bill Nelson by 0.12%' },
      { year: 2022, description: 'Chaired NRSC; Senate Republicans fell short of takeover amid headwinds' },
    ],
    keyVotes: [
      { title: 'Against American Rescue Plan', year: 2021, month: 3, position: 'Against', summary: 'Voted against the $1.9 trillion COVID relief package, arguing it was excessive spending that would fuel inflation. Scott has consistently opposed large deficit-expanding packages and warned of the inflationary consequences months before CPI spiked to 40-year highs.' },
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'Against', summary: 'One of a minority of Republicans who opposed the CHIPS Act, arguing the semiconductor subsidies amounted to corporate welfare. Scott preferred tax-based incentives over direct manufacturing grants.' },
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Enthusiastically supported the first bill signed in the 119th Congress, which requires ICE to detain undocumented immigrants charged with theft or violent crimes. Scott has made border security a signature Senate issue.' },
      { title: 'No Taxation on Tips Act', year: 2025, month: 3, position: 'For', summary: 'Co-sponsored and voted for legislation eliminating federal income taxes on tips, a signature Trump campaign promise. Scott argued the policy would provide direct economic relief to Florida\'s large hospitality and service workforce.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package extending Trump-era tax cuts and adding border security spending. Scott advocated for deeper spending offsets in committee negotiations, reflecting his longstanding focus on deficit reduction.' },
    ],
    keyBills: [
      { title: 'HAVEN Act — Chinese Military Company Sanctions', year: 2023, month: 6, summary: 'Introduced legislation to expand sanctions on companies linked to the People\'s Liberation Army operating in the U.S. Scott is among the Senate\'s most hawkish voices on Chinese Communist Party economic and military threats.' },
      { title: 'Freedom to Fish Act', year: 2024, month: 2, summary: 'Introduced legislation to protect recreational and commercial fishing access in Florida\'s coastal waters from new federal marine monument designations. Fishing is a multi-billion-dollar industry for Florida\'s coastal communities.' },
    ],
  },

  {
    bioguideId: 'M001244',
    slug: 'ashley-moody',
    name: 'Ashley Moody',
    party: 'R',
    chamber: 'Senate',
    state: 'Florida',
    currentTitle: 'U.S. Senator from Florida',
    bio: 'Ashley Moody served as Florida Attorney General from 2019 to 2025, building a reputation as a combative conservative litigant who led multi-state lawsuits against Biden administration policies on immigration, vaccines, and energy. Governor Ron DeSantis appointed her to the Senate seat vacated when Marco Rubio was confirmed as Secretary of State in January 2025.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssjud', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'sshs', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Attorney General of Florida', jurisdiction: 'State of Florida', startDate: '2019-01-08', endDate: '2025-01-06' },
      { title: 'Circuit Court Judge', jurisdiction: '13th Judicial Circuit, Hillsborough County', startDate: '2011-01-01', endDate: '2018-12-31' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected State Attorney for the 13th Judicial Circuit in Hillsborough County' },
      { year: 2018, description: 'Elected Florida Attorney General, defeating Democrat Sean Shaw' },
      { year: 2022, description: 'Re-elected AG, defeating Democrat Nikki Fried' },
      { year: 2025, description: 'Appointed to the U.S. Senate by Governor DeSantis following Rubio\'s departure' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Among the first Senate votes of her tenure; supported mandatory ICE detention for undocumented immigrants charged with theft or violent crimes. Immigration enforcement was a central issue in her AG career.' },
      { title: 'Confirmation of Cabinet Nominees', year: 2025, month: 2, position: 'For', summary: 'Voted to confirm Trump\'s full cabinet slate, including controversial nominees like Robert Kennedy Jr. for HHS and Pete Hegseth for Defense. Moody was a reliable vote for the administration in her early months.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican budget reconciliation package extending Trump tax cuts and including significant border security funding. As a former multistate coalition leader against Biden immigration policies, Moody was a vocal advocate for the enforcement provisions.' },
    ],
    keyBills: [
      { title: 'Anti-Cartel Enforcement Act', year: 2025, month: 5, summary: 'Introduced legislation to designate Mexican drug cartels as foreign terrorist organizations and expand DOJ and DHS authority to prosecute cartel-linked money laundering in the United States. Moody championed anti-cartel prosecutions as AG.' },
      { title: 'Protecting Kids on Social Media Act', year: 2025, month: 9, summary: 'Co-sponsored bipartisan legislation requiring age verification for social media platforms and barring algorithmic content promotion to minors. Moody investigated social media companies\' impact on children as AG.' },
    ],
  },

  // ── U.S. HOUSE — Districts 1–28 ───────────────────────────────────────────

  {
    bioguideId: 'P000622',
    slug: 'jimmy-patronis',
    name: 'Jimmy Patronis',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 1,
    currentTitle: 'U.S. Representative, Florida 1st District',
    bio: 'Jimmy Patronis won a February 2025 special election to represent Florida\'s Panhandle 1st District, succeeding Matt Gaetz who resigned to pursue (and ultimately withdrew from) the Attorney General nomination. Patronis had served as Florida\'s Chief Financial Officer since 2017 and previously served on the Florida Public Service Commission.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2017, description: 'Appointed Florida Chief Financial Officer by Governor Rick Scott; subsequently elected and re-elected to the position' },
      { year: 2025, description: 'Won special election for FL-1 following Matt Gaetz\'s resignation; takes office April 2025' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 4, position: 'For', summary: 'Voted for the landmark immigration enforcement bill in one of his first votes as a new Member. The Panhandle district strongly supports strict border enforcement.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package extending the 2017 tax cuts and cutting discretionary spending. Panhandle Florida has large defense and military installations that Patronis works to protect in budget negotiations.' },
    ],
    keyBills: [
      { title: 'Military Retirees Tax Relief Act', year: 2025, month: 6, summary: 'Introduced legislation to exempt military retirement pay from federal income taxes, a priority for Florida\'s large veteran and military retiree community concentrated around Pensacola and Eglin AFB.' },
      { title: 'Protecting Florida\'s Fishermen Act', year: 2025, month: 8, summary: 'Introduced legislation to limit new federal regulatory restrictions on Gulf of Mexico commercial and recreational fishing, an economically vital industry for the FL-1 Panhandle region.' },
    ],
  },

  {
    bioguideId: 'D000628',
    slug: 'neal-dunn',
    name: 'Neal Dunn',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 2,
    currentTitle: 'U.S. Representative, Florida 2nd District',
    bio: 'Neal Dunn is a urologic surgeon and Army veteran who has represented the Big Bend region of North Florida since 2017. He sits on the Energy and Commerce Committee, where he focuses on rural healthcare access, and has championed telehealth expansion for medically underserved areas.',
    sinceYear: 2017,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Congress for Florida\'s 2nd Congressional District' },
    ],
    keyVotes: [
      { title: 'Against Affordable Care Act Expansion', year: 2022, month: 12, position: 'Against', summary: 'Opposed ACA subsidy extensions, arguing the spending was inflationary and that market-based healthcare reforms were preferable.' },
      { title: 'Telehealth Extension Act', year: 2023, month: 11, position: 'For', summary: 'Supported extending pandemic-era telehealth flexibilities, a priority for his rural North Florida district where specialist access is limited.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the budget reconciliation package, supporting provisions to restructure Medicaid while expanding rural health access programs he prioritizes on Energy and Commerce.' },
    ],
    keyBills: [
      { title: 'RURAL Act — Healthcare Access', year: 2023, month: 5, summary: 'Championed legislation expanding rural health clinic reimbursement rates and telehealth access in underserved North Florida communities.' },
      { title: 'Veterans\' Telehealth Improvement Act', year: 2025, month: 3, summary: 'Introduced legislation extending VA telehealth services to rural veterans who lack access to VA medical centers — a priority for his district with a large veteran population.' },
    ],
  },

  {
    bioguideId: 'C001039',
    slug: 'kat-cammack',
    name: 'Kat Cammack',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 3,
    currentTitle: 'U.S. Representative, Florida 3rd District',
    bio: 'Kat Cammack represents North Central Florida\'s 3rd District and has been one of the most vocal conservative voices in the House since her 2020 election. A former deputy sheriff and congressional staffer, she sits on the Energy and Commerce Committee and has been a consistent critic of big-tech censorship and Biden-era immigration policy.',
    sinceYear: 2021,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress, becoming one of the youngest Republican women ever elected to the House' },
    ],
    keyVotes: [
      { title: 'Against COVID Vaccine Mandates', year: 2021, month: 11, position: 'Against', summary: 'Opposed Biden executive vaccine mandates for federal contractors and employees, arguing they violated bodily autonomy and would hurt military readiness.' },
      { title: 'Protecting Free Speech on Campus Act', year: 2023, month: 3, position: 'For', summary: 'Voted for legislation conditioning federal grants on universities protecting free speech rights for students and faculty. Cammack is a vocal critic of campus speech restrictions.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package including energy deregulation provisions she championed on Energy and Commerce.' },
    ],
    keyBills: [
      { title: 'No Funds for Social Media Censorship Act', year: 2023, month: 6, summary: 'Introduced legislation prohibiting federal agencies from using public funds to coordinate with social media companies on content moderation decisions. Cammack was among the first to publicize the "Twitter Files" revelations.' },
      { title: 'Protect American Agriculture from Foreign Adversaries Act', year: 2025, month: 2, summary: 'Championed legislation restricting Chinese entities from purchasing U.S. agricultural land, a bipartisan priority that passed the House.' },
    ],
  },

  {
    bioguideId: 'B001314',
    slug: 'aaron-bean',
    name: 'Aaron Bean',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 4,
    currentTitle: 'U.S. Representative, Florida 4th District',
    bio: 'Aaron Bean represents the Jacksonville-area 4th District and previously served 18 years in the Florida Legislature. He sits on the Education and Workforce Committee and focuses on school choice, workforce development, and reducing regulatory burdens on small businesses.',
    sinceYear: 2023,
    committees: [
      { slug: 'hewf', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress after 18 years in the Florida State Legislature' },
    ],
    keyVotes: [
      { title: 'CHOICE Act — School Vouchers', year: 2023, month: 9, position: 'For', summary: 'Supported federal education savings account legislation expanding school choice to low-income families. Bean championed school choice in the Florida Legislature.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Education and Workforce provisions restructuring student loan programs and expanding apprenticeship funding.' },
    ],
    keyBills: [
      { title: 'Supporting Children\'s Access to Responsive Education (SCORE) Act', year: 2023, month: 10, summary: 'Introduced legislation to expand federal support for private school scholarships and learning pod education models, building on Florida\'s widely replicated school choice model.' },
      { title: 'Small Business Regulatory Relief Act', year: 2025, month: 4, summary: 'Championed legislation requiring agencies to conduct cost-benefit analyses before issuing rules affecting small businesses with fewer than 50 employees.' },
    ],
  },

  {
    bioguideId: 'R000609',
    slug: 'john-rutherford',
    name: 'John Rutherford',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 5,
    currentTitle: 'U.S. Representative, Florida 5th District',
    bio: 'John Rutherford served as Sheriff of Duval County (Jacksonville) for 12 years before winning the 5th Congressional District in 2016. He sits on the House Appropriations Committee and focuses on law enforcement support, border security, and transportation infrastructure for the Jacksonville corridor.',
    sinceYear: 2017,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected Duval County Sheriff; served three terms' },
      { year: 2016, description: 'Elected to Congress for Florida\'s 5th Congressional District' },
    ],
    keyVotes: [
      { title: 'COPS Hiring Program Funding', year: 2023, month: 9, position: 'For', summary: 'Secured funding for the COPS Hiring Program through Appropriations, supporting law enforcement agencies recruiting and retaining officers after post-pandemic staffing shortages.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; negotiated Appropriations provisions for the Jacksonville seaport and Naval Station Mayport, critical economic anchors for his district.' },
    ],
    keyBills: [
      { title: 'Law Enforcement Body Camera Act', year: 2023, month: 3, summary: 'Introduced bipartisan legislation to expand federal grant funding for body-worn camera programs for local law enforcement agencies, drawing on his experience as Duval County Sheriff.' },
      { title: 'Jaxport Modernization Act', year: 2025, month: 5, summary: 'Secured authorization and appropriations for deepening and widening the Jacksonville port channel, supporting the port\'s ambitions to become a top-five East Coast container hub.' },
    ],
  },

  {
    bioguideId: 'F000484',
    slug: 'randy-fine',
    name: 'Randy Fine',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 6,
    currentTitle: 'U.S. Representative, Florida 6th District',
    bio: 'Randy Fine won a January 2025 special election for Florida\'s 6th District, the Space Coast seat vacated when Michael Waltz became National Security Advisor. Fine, a former Florida State Representative, is a strong ally of both the space industry and Israel, and has championed legislation benefiting Kennedy Space Center and Cape Canaveral.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsc', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Florida House of Representatives; served until 2024' },
      { year: 2025, description: 'Won FL-6 special election; sworn in January 2025' },
    ],
    keyVotes: [
      { title: 'NASA Authorization Act 2025', year: 2025, month: 6, position: 'For', summary: 'Voted for NASA reauthorization, including provisions protecting Artemis program lunar mission funding and Space Launch System contracts centered at Kennedy Space Center in his district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; secured committee attention to protecting the commercial space launch regulatory framework critical to the Brevard County space economy.' },
    ],
    keyBills: [
      { title: 'Space Coast Jobs Act', year: 2025, month: 4, summary: 'Introduced legislation streamlining FAA commercial launch licensing timelines and creating tax credits for space industry R&D investment, supporting the Brevard County aerospace cluster.' },
      { title: 'Combating Anti-Semitism in Schools Act', year: 2025, month: 5, summary: 'Co-introduced legislation requiring K-12 schools receiving federal funds to adopt and enforce the IHRA definition of anti-Semitism, an issue Fine championed in the Florida legislature.' },
    ],
  },

  {
    bioguideId: 'M001216',
    slug: 'cory-mills',
    name: 'Cory Mills',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 7,
    currentTitle: 'U.S. Representative, Florida 7th District',
    bio: 'Cory Mills is a combat veteran and former defense contractor who won Florida\'s 7th District in 2022. He personally evacuated American civilians from Sudan in 2023 and has been a visible presence on foreign policy matters involving conflict zones. He sits on the Armed Services Committee and is known for his hawkish stance on China and Iran.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress; first combat veteran elected from this district' },
      { year: 2023, description: 'Personally led private citizen evacuation of Americans stranded in Sudan' },
    ],
    keyVotes: [
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'Against', summary: 'Voted against the $61 billion Ukraine security assistance package, arguing the U.S. should not provide open-ended aid without clear accountability mechanisms and strategic objectives.' },
      { title: 'NDAA FY2026', year: 2025, month: 12, position: 'For', summary: 'Supported the defense authorization act, which included provisions he championed expanding training programs for allied special operations forces and increasing Pacific deterrence capabilities.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including defense spending increases and border security funding. Mills advocated for provisions targeting Chinese military-linked technology from U.S. defense supply chains.' },
    ],
    keyBills: [
      { title: 'Holding Iran Accountable Act', year: 2023, month: 10, summary: 'Introduced sanctions legislation targeting Iranian oil revenue financing Hamas and Hezbollah, introduced days after the October 7 Hamas attack on Israel.' },
      { title: 'American Hostage Recovery Act', year: 2024, month: 3, summary: 'Championed legislation establishing a dedicated interagency task force to accelerate recovery of American citizens held abroad. Mills has personal experience with hostage situations from his contractor background.' },
    ],
  },

  {
    bioguideId: 'H001099',
    slug: 'mike-haridopolos',
    name: 'Mike Haridopolos',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 8,
    currentTitle: 'U.S. Representative, Florida 8th District',
    bio: 'Mike Haridopolos served as President of the Florida State Senate from 2010 to 2012 before returning to private life. He won the Brevard County-area 8th District in 2024 after incumbent Bill Posey retired. Haridopolos brings deep experience in state legislative policy and focuses on defense, space, and reducing federal regulatory overreach.',
    sinceYear: 2025,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected President of the Florida State Senate' },
      { year: 2024, description: 'Elected to Congress for FL-8 following Bill Posey\'s retirement' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package; supported transportation and infrastructure provisions benefiting the I-95 corridor and Space Coast development in his district.' },
    ],
    keyBills: [
      { title: 'Indian River Lagoon Restoration Act', year: 2025, month: 4, summary: 'Introduced legislation to increase federal RESTORE Act funding for water quality and habitat restoration in the Indian River Lagoon, the most biodiverse estuary in North America, which borders FL-8.' },
      { title: 'Port Canaveral Infrastructure Investment Act', year: 2025, month: 7, summary: 'Championed federal investment in Port Canaveral dredging and terminal modernization, supporting the port\'s cruise and cargo industries and military sealift operations.' },
    ],
  },

  {
    bioguideId: 'S001200',
    slug: 'darren-soto',
    name: 'Darren Soto',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 9,
    currentTitle: 'U.S. Representative, Florida 9th District',
    bio: 'Darren Soto represents Central Florida\'s 9th District, home to one of the largest Puerto Rican communities in the continental U.S. A former Florida state legislator of Puerto Rican descent, he serves on the Energy and Commerce Committee and focuses on healthcare access, Puerto Rico reconstruction, and clean energy.',
    sinceYear: 2017,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Congress, becoming the first member of Congress of Puerto Rican descent from Florida' },
    ],
    keyVotes: [
      { title: 'Puerto Rico Status Act', year: 2022, month: 12, position: 'For', summary: 'Led advocacy for the Puerto Rico Status Act, which would have provided a binding plebiscite on statehood or independence. It passed the House with bipartisan support but stalled in the Senate.' },
      { title: 'Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Voted for the IRA, supporting its climate provisions including clean energy tax credits that benefit Florida solar installers and the state\'s growing EV market.' },
      { title: 'Against Rescinding Puerto Rico Medicaid Funds', year: 2025, month: 3, position: 'Against', summary: 'Vigorously opposed reconciliation provisions that would cap and reduce Medicaid funding to Puerto Rico, which relies disproportionately on the federal-territorial matching rate for its healthcare system.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, citing harmful cuts to Medicaid that would disproportionately affect Puerto Rican communities in Central Florida and on the island.' },
    ],
    keyBills: [
      { title: 'Puerto Rico Hospital Infrastructure Rebuild Act', year: 2023, month: 6, summary: 'Introduced legislation to provide federal matching funds for reconstructing Puerto Rico\'s hospital infrastructure, much of which was damaged or destroyed by Hurricane Maria in 2017 and still has not been fully rebuilt.' },
      { title: 'CLEAN Future Act — Florida Solar Provisions', year: 2025, month: 3, summary: 'Championed incentives for community solar programs and solar-plus-storage installations in low- and moderate-income communities in Central Florida, where electricity rates are among the highest in the region.' },
    ],
  },

  {
    bioguideId: 'F000476',
    slug: 'maxwell-frost',
    name: 'Maxwell Frost',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 10,
    currentTitle: 'U.S. Representative, Florida 10th District',
    bio: 'Maxwell Frost made history in 2022 as the first member of Generation Z elected to Congress, winning Orlando\'s 10th District at age 25. An Afro-Cuban-American activist and former March for Our Lives national organizing director, he is one of the most progressive members of the House and focuses on gun violence prevention, housing affordability, and criminal justice reform.',
    sinceYear: 2023,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress at age 25, becoming the first Gen Z member of Congress in U.S. history' },
    ],
    keyVotes: [
      { title: 'Bipartisan Background Checks Act', year: 2023, month: 3, position: 'For', summary: 'A vocal advocate for the universal background check bill, drawing on his experience as a gun control activist before entering Congress.' },
      { title: 'Against Debt Ceiling Deal Cuts', year: 2023, month: 5, position: 'Against', summary: 'Voted against the Fiscal Responsibility Act debt ceiling deal, arguing the spending caps would harm housing and social safety net programs that benefit Orlando\'s working-class communities.' },
      { title: 'SAVE Act — Voter ID', year: 2025, month: 4, position: 'Against', summary: 'Opposed the SAVE Act requiring documentary proof of citizenship to register to vote, arguing it would disenfranchise millions of eligible citizens who lack passports or birth certificates.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, leading House progressive protests against Medicaid cuts that he said would harm Central Florida families.' },
    ],
    keyBills: [
      { title: 'Housing is Infrastructure Act', year: 2023, month: 5, summary: 'Introduced legislation to provide $150 billion in federal investment in affordable housing construction and preservation, addressing Orlando\'s acute housing cost crisis.' },
      { title: 'Assault Weapons Ban of 2025', year: 2025, month: 2, summary: 'Co-introduced legislation to ban the manufacture and sale of assault-style weapons and high-capacity magazines, a cause he championed before Congress as March for Our Lives organizing director.' },
    ],
  },

  {
    bioguideId: 'W000806',
    slug: 'daniel-webster',
    name: 'Daniel Webster',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 11,
    currentTitle: 'U.S. Representative, Florida 11th District',
    bio: 'Daniel Webster is a veteran Florida politician who served in both chambers of the Florida Legislature, including as Florida House Speaker, before winning Congress in 2010. He challenged John Boehner for Speaker in 2015 and is a member of the House Freedom Caucus who focuses on transportation infrastructure and limiting federal spending.',
    sinceYear: 2011,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsa', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 1980, description: 'Elected to Florida House of Representatives; served until 1998' },
      { year: 1998, description: 'Elected to Florida State Senate; served until 2008' },
      { year: 2010, description: 'Elected to U.S. Congress for the 8th District (now 11th after redistricting)' },
      { year: 2015, description: 'Challenged John Boehner for House Speaker, winning 12 votes as the Freedom Caucus alternative' },
    ],
    keyVotes: [
      { title: 'Against Speaker Kevin McCarthy', year: 2023, month: 1, position: 'Against', summary: 'Joined Freedom Caucus members in opposing McCarthy\'s speakership bid in multiple initial rounds, demanding rules changes to increase member power before ultimately voting for McCarthy.' },
      { title: 'IIJA — Infrastructure Law', year: 2021, month: 11, position: 'Against', summary: 'Voted against the bipartisan infrastructure law, arguing its spending was excessive and would not sufficiently reduce regulatory burdens on transportation projects.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package after leadership included provisions limiting regulatory requirements for transportation project approvals — a Webster priority.' },
    ],
    keyBills: [
      { title: 'ONTIME Act — Infrastructure Permitting Reform', year: 2023, month: 7, summary: 'Introduced legislation to impose mandatory timelines on federal environmental review processes for infrastructure projects, reducing the multi-year delays that frequently inflate project costs.' },
      { title: 'FAST-41 Extension', year: 2025, month: 2, summary: 'Championed extending FAST-41 one federal permitting coordination framework for major infrastructure projects, building on the Transportation Committee authority he has held for years.' },
    ],
  },

  {
    bioguideId: 'B001257',
    slug: 'gus-bilirakis',
    name: 'Gus Bilirakis',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 12,
    currentTitle: 'U.S. Representative, Florida 12th District',
    bio: 'Gus Bilirakis has represented the Tampa Bay area since 2007, succeeding his father Michael Bilirakis who held the seat for 20 years. He serves on the Energy and Commerce Committee and the Veterans\' Affairs Committee, focusing on healthcare access, veterans\' benefits, and telecommunications policy for seniors.',
    sinceYear: 2007,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
      { slug: 'hva', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected to Congress, succeeding his father Michael Bilirakis' },
    ],
    keyVotes: [
      { title: 'PACT Act — Veterans Burn Pits', year: 2022, month: 8, position: 'For', summary: 'Supported the landmark PACT Act expanding VA healthcare to veterans exposed to toxic burn pits and agent orange, addressing a cause he championed for years on the Veterans\' Affairs Committee.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; ensured Energy and Commerce provisions maintained telehealth access for Medicare beneficiaries — a priority for the large retiree population in his district.' },
    ],
    keyBills: [
      { title: 'SENIORS Act — Telehealth Access', year: 2023, month: 9, summary: 'Introduced bipartisan legislation making permanent the Medicare telehealth flexibilities enacted during COVID-19, benefiting the large senior population in the Tampa Bay corridor.' },
      { title: 'Strengthening Oversight of Healthcare Providers Act', year: 2025, month: 3, summary: 'Championed transparency requirements for hospital billing and price posting, a bipartisan healthcare transparency initiative through the Energy and Commerce Committee.' },
    ],
  },

  {
    bioguideId: 'L000596',
    slug: 'anna-paulina-luna',
    name: 'Anna Paulina Luna',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 13,
    currentTitle: 'U.S. Representative, Florida 13th District',
    bio: 'Anna Paulina Luna represents the Pinellas County beaches-area 13th District, flipping a longtime Democratic seat in 2022. A first-generation American of Mexican and Jewish heritage, Air Force veteran, and social media personality, she sits on the Oversight Committee and has been one of the most outspoken members in pushing for transparency on government corruption and FBI conduct.',
    sinceYear: 2023,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress, flipping FL-13 after two failed runs against Charlie Crist' },
    ],
    keyVotes: [
      { title: 'Select Subcommittee on Weaponization of Federal Government', year: 2023, month: 1, position: 'For', summary: 'Voted to establish the subcommittee investigating alleged FBI and DOJ targeting of political opponents, and became one of its most active members.' },
      { title: 'Articles of Impeachment against DHS Secretary Mayorkas', year: 2024, month: 2, position: 'For', summary: 'Voted for the articles of impeachment against Secretary Alejandro Mayorkas, the first time a cabinet member was impeached in nearly 150 years.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including border security provisions she championed. Luna also secured coastal infrastructure funding for Pinellas County\'s storm-vulnerable communities.' },
    ],
    keyBills: [
      { title: 'FISA Reform and Reauthorization Act', year: 2024, month: 4, summary: 'Co-introduced legislation adding warrant requirements before FBI can query Section 702 surveillance data for Americans, a civil liberties reform effort that garnered bipartisan support.' },
      { title: 'No Taxpayer Funding for Censorship Act', year: 2025, month: 2, summary: 'Introduced legislation prohibiting federal agencies from funding or coordinating third-party organizations that facilitate social media content censorship decisions.' },
    ],
  },

  {
    bioguideId: 'C001066',
    slug: 'kathy-castor',
    name: 'Kathy Castor',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 14,
    currentTitle: 'U.S. Representative, Florida 14th District',
    bio: 'Kathy Castor has represented Tampa since 2007 and served as Chair of the House Select Committee on the Climate Crisis from 2019 to 2023. She is a senior Democrat on the Energy and Commerce Committee and focuses on climate policy, healthcare affordability, and consumer protection, bringing a progressive voice to a competitive Florida market.',
    sinceYear: 2007,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Elected to Congress for Florida\'s 11th District (now 14th after redistricting)' },
      { year: 2019, description: 'Named first-ever Chair of the House Select Committee on the Climate Crisis' },
    ],
    keyVotes: [
      { title: 'Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Was a vocal champion of the IRA\'s $369 billion in climate spending, calling it the most significant climate legislation in U.S. history. Florida is one of the states most vulnerable to climate-driven sea level rise and extreme weather.' },
      { title: 'American Clean Future Act', year: 2021, month: 3, position: 'For', summary: 'Supported comprehensive climate legislation targeting net-zero emissions by 2050, including a clean electricity standard and investments in coastal resilience for Florida.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, citing rollbacks of IRA clean energy credits and Medicaid cuts harmful to Tampa Bay families.' },
    ],
    keyBills: [
      { title: 'Climate Crisis Action Plan', year: 2020, month: 6, summary: 'Released a sweeping 500-page climate action plan as Chair of the House Select Committee on the Climate Crisis, providing the legislative blueprint that shaped much of the Inflation Reduction Act.' },
      { title: 'Kids Online Safety Act', year: 2025, month: 3, summary: 'Co-sponsored bipartisan legislation requiring social media platforms to implement safety features for minors and establish duty-of-care requirements, a Castor priority on Energy and Commerce.' },
    ],
  },

  {
    bioguideId: 'L000597',
    slug: 'laurel-lee',
    name: 'Laurel Lee',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 15,
    currentTitle: 'U.S. Representative, Florida 15th District',
    bio: 'Laurel Lee served as Florida Secretary of State from 2019 to 2022, overseeing the state\'s elections administration, before winning the new 15th Congressional District created by Florida\'s 2022 redistricting. She serves on the Judiciary and Homeland Security Committees and focuses on election integrity, immigration enforcement, and judicial reform.',
    sinceYear: 2023,
    committees: [
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2019, description: 'Appointed Florida Secretary of State; resigned 2022 to run for Congress' },
      { year: 2022, description: 'Elected to Congress for the newly created FL-15' },
    ],
    keyVotes: [
      { title: 'SAVE Act — Voter ID', year: 2025, month: 4, position: 'For', summary: 'Strongly supported the SAVE Act requiring documentary proof of citizenship for voter registration, drawing on her experience administering Florida\'s elections as Secretary of State.' },
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the immigration enforcement bill as an early priority; Lee has made immigration enforcement a core issue consistent with her Homeland Security Committee work.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Judiciary provisions strengthening immigration courts and Homeland Security provisions for border technology infrastructure.' },
    ],
    keyBills: [
      { title: 'Election Security and Safeguarding Act', year: 2023, month: 4, summary: 'Introduced legislation to establish federal standards for post-election audits and chain-of-custody procedures for ballots, drawing on her experience running Florida\'s election system.' },
      { title: 'No Sanctuary for Criminals Act', year: 2025, month: 2, summary: 'Championed legislation prohibiting federal grants to jurisdictions with sanctuary policies limiting cooperation with ICE, a priority she advanced on the Judiciary and Homeland Security Committees.' },
    ],
  },

  {
    bioguideId: 'B001260',
    slug: 'vern-buchanan',
    name: 'Vern Buchanan',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 16,
    currentTitle: 'U.S. Representative, Florida 16th District',
    bio: 'Vern Buchanan has represented the Sarasota area since 2007 and is one of the wealthiest members of Congress, having built a large automotive dealership empire before entering politics. He serves on the Ways and Means Committee, where he focuses on tax policy, trade, and healthcare.',
    sinceYear: 2007,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Won FL-13 in one of the closest House races in modern history (369 votes)' },
      { year: 2021, description: 'Became Ranking Member of Ways and Means Health Subcommittee' },
    ],
    keyVotes: [
      { title: 'Tax Cuts and Jobs Act Extension', year: 2025, month: 5, position: 'For', summary: 'Was a leading Ways and Means voice for making the 2017 Tax Cuts and Jobs Act provisions permanent, arguing that allowing them to expire would constitute the largest tax increase in American history.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; negotiated Ways and Means provisions extending business deductions and protecting Medicare reimbursement rates for Florida\'s large physician community.' },
    ],
    keyBills: [
      { title: 'Protecting Seniors Access to Medicare Act', year: 2023, month: 6, summary: 'Championed legislation preventing automatic Medicare payment cuts and protecting physician reimbursement rates, a priority for the large retiree community in his Sarasota-area district.' },
      { title: 'Small Business Tax Relief Act', year: 2025, month: 3, summary: 'Introduced legislation expanding the 20% qualified business income deduction for pass-through entities — a key provision of the 2017 tax law benefiting small business owners.' },
    ],
  },

  {
    bioguideId: 'S001214',
    slug: 'greg-steube',
    name: 'Greg Steube',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 17,
    currentTitle: 'U.S. Representative, Florida 17th District',
    bio: 'Greg Steube represents Southwest Florida\'s 17th District and is a member of the House Judiciary Committee and a former Florida state senator and Army JAG officer. One of the House\'s most conservative members, he focuses on gun rights, fiscal restraint, and anti-regulatory legislation. He returned to Congress after a serious fall injury in 2023.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress after serving in the Florida Senate' },
      { year: 2023, description: 'Suffered serious injuries from a fall at his home; returned to Congress after recovery' },
    ],
    keyVotes: [
      { title: 'Against Universal Background Checks', year: 2022, month: 6, position: 'Against', summary: 'Opposed the Bipartisan Safer Communities Act, one of nine House Republicans to vote against the bill, arguing any expansion of firearms background checks infringes on Second Amendment rights.' },
      { title: 'Articles of Impeachment — Alejandro Mayorkas', year: 2024, month: 2, position: 'For', summary: 'Voted to impeach DHS Secretary Mayorkas for allegedly willful failure to enforce immigration law, a Judiciary Committee priority he championed.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package, having negotiated provisions rolling back Biden-era agency regulations through the Judiciary Committee.' },
    ],
    keyBills: [
      { title: 'Second Amendment Protection Act', year: 2023, month: 2, summary: 'Introduced legislation repealing the requirement for licensed firearms dealers to conduct background checks at gun shows, arguing the checks impede the constitutional right to bear arms.' },
      { title: 'Defund Censorship Act', year: 2025, month: 3, summary: 'Championed legislation withholding federal funds from universities and federal agencies that maintain DEI offices or programs, framing it as a free speech and equal opportunity issue.' },
    ],
  },

  {
    bioguideId: 'F000472',
    slug: 'scott-franklin',
    name: 'Scott Franklin',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 18,
    currentTitle: 'U.S. Representative, Florida 18th District',
    bio: 'Scott Franklin is a Navy veteran and entrepreneur who represents the Lakeland-area 18th District and sits on the Armed Services and Veterans\' Affairs Committees. He is a member of the moderate Main Street Caucus while maintaining consistently conservative voting record, particularly on defense and veterans issues.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hva', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress, defeating 16-year incumbent Democrat Darren Soto in the newly drawn district' },
    ],
    keyVotes: [
      { title: 'PACT Act — Veterans Burn Pits', year: 2022, month: 8, position: 'For', summary: 'Voted for the landmark veteran healthcare expansion, a bipartisan priority he championed through his Armed Services and Veterans\' Affairs Committee assignments.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; secured provisions protecting VA healthcare funding and MacDill Air Force Base operations in the Lakeland area.' },
    ],
    keyBills: [
      { title: 'Veteran Transition Support Act', year: 2023, month: 5, summary: 'Introduced legislation expanding employment counseling and job-placement services through the VA for veterans within two years of separation, targeting the difficult transition-to-civilian-workforce period.' },
      { title: 'Strengthening America\'s Defense Workforce Act', year: 2025, month: 4, summary: 'Championed legislation creating pathways for transitioning military personnel into defense contractor positions, addressing workforce shortages in the defense industrial base.' },
    ],
  },

  {
    bioguideId: 'D000032',
    slug: 'byron-donalds',
    name: 'Byron Donalds',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 19,
    currentTitle: 'U.S. Representative, Florida 19th District',
    bio: 'Byron Donalds represents Southwest Florida\'s 19th District including Naples and Fort Myers. One of the most prominent Black conservatives in Congress, he received a historic 20 votes in the January 2023 Speaker\'s race before ultimately supporting Kevin McCarthy, and has emerged as a rising national Republican figure with presidential-level name recognition and is a candidate for Florida Governor in 2026.',
    sinceYear: 2021,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress for Florida\'s 19th District' },
      { year: 2023, description: 'Received 20 historic Speaker votes as a conservative alternative during the 15-ballot Speaker\'s race' },
      { year: 2025, description: 'Announced campaign for Governor of Florida (2026 race), positioning as DeSantis\'s heir' },
    ],
    keyVotes: [
      { title: 'Speaker\'s Race — Multiple Ballots', year: 2023, month: 1, position: 'Against', summary: 'Voted against Kevin McCarthy across multiple ballots, backing himself as an alternative and pushing for rules reforms to increase backbench power before ultimately switching to McCarthy on ballot 15.' },
      { title: 'CBDC Anti-Surveillance State Act', year: 2024, month: 5, position: 'For', summary: 'Championed legislation prohibiting the Federal Reserve from issuing a retail central bank digital currency, arguing government digital money would enable financial surveillance of citizens.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Financial Services provisions rolling back Dodd-Frank regulations he views as harming community banks and small investors in Southwest Florida.' },
    ],
    keyBills: [
      { title: 'CBDC Anti-Surveillance State Act', year: 2024, month: 5, summary: 'Introduced the CBDC Anti-Surveillance State Act, banning the development and issuance of a Federal Reserve retail digital dollar. The bill attracted wide conservative support and passed the House Financial Services Committee.' },
      { title: 'Protecting Americans\' Financial Privacy Act', year: 2025, month: 3, summary: 'Championed restrictions on IRS and FinCEN access to Americans\' financial transaction data without a warrant, framing financial privacy as a constitutional right.' },
    ],
  },

  {
    bioguideId: 'C001127',
    slug: 'sheila-cherfilus-mccormick',
    name: 'Sheila Cherfilus-McCormick',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 20,
    currentTitle: 'U.S. Representative, Florida 20th District',
    bio: 'Sheila Cherfilus-McCormick won a January 2022 special election to succeed the late Alcee Hastings in the Broward/Palm Beach 20th District, becoming the second Haitian-American elected to Congress. A healthcare executive, she serves on the Foreign Affairs Committee and focuses on healthcare access, Haitian American community concerns, and Caribbean diplomatic relations.',
    sinceYear: 2022,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hva', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Won special election to succeed late Rep. Alcee Hastings; became second Haitian-American in Congress' },
    ],
    keyVotes: [
      { title: 'Haiti Assistance and Accountability Act', year: 2024, month: 3, position: 'For', summary: 'Led advocacy for emergency humanitarian and security assistance for Haiti as the country descended into gang-controlled chaos, drawing on her close ties to the Haitian-American community in South Florida.' },
      { title: 'Medicare for All Act', year: 2023, month: 5, position: 'For', summary: 'Co-sponsored single-payer healthcare legislation, a cause consistent with her background running healthcare companies focused on underserved communities.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, citing devastating cuts to Medicaid that would harm Broward County\'s large low-income and immigrant communities.' },
    ],
    keyBills: [
      { title: 'HAITI Act — Targeted Sanctions', year: 2024, month: 4, summary: 'Introduced legislation to impose sanctions on Haitian gang leaders and their international financial supporters, seeking U.S. leverage to restore stability to the country.' },
      { title: 'HEROES Act — Caribbean Disaster Relief', year: 2025, month: 6, summary: 'Championed legislation establishing a standing Caribbean disaster pre-positioning program through FEMA, enabling faster response when hurricanes hit the Caribbean and reducing displacement to South Florida.' },
    ],
  },

  {
    bioguideId: 'M001199',
    slug: 'brian-mast',
    name: 'Brian Mast',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 21,
    currentTitle: 'U.S. Representative, Florida 21st District',
    bio: 'Brian Mast lost both legs serving as an Army Explosive Ordnance Disposal technician in Afghanistan in 2010. Elected to Congress in 2016, he chairs the House Foreign Affairs Committee and has been a strong supporter of Israel while occasionally breaking with Republicans on gun control and water quality. His Palm Beach County district includes Mar-a-Lago.',
    sinceYear: 2017,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Chair' },
    ],
    previousOffices: [
      { title: 'U.S. Army EOD Technician', jurisdiction: 'United States Army', startDate: '2000-01-01', endDate: '2010-12-31' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Lost both legs in IED explosion in Afghanistan while serving as Army EOD technician' },
      { year: 2016, description: 'Elected to Congress for FL-18 (now FL-21)' },
      { year: 2023, description: 'Named Chairman of the House Foreign Affairs Committee' },
    ],
    keyVotes: [
      { title: 'Israel Security Assistance Support Act', year: 2024, month: 4, position: 'For', summary: 'Led the Foreign Affairs Committee\'s markup of standalone Israel security assistance, advancing $14.1 billion in military aid for Israel in the wake of the October 7 Hamas attack.' },
      { title: 'Bipartisan Safer Communities Act', year: 2022, month: 6, position: 'For', summary: 'One of the few Republicans to vote for the bipartisan gun safety bill; Mast has been willing to break with his party on gun control issues since the Parkland school shooting, which occurred in his district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package and worked through the Foreign Affairs Committee to ensure it did not reduce the foreign military financing accounts critical to Israel and regional allies.' },
    ],
    keyBills: [
      { title: 'Israel Security Assistance Support Act', year: 2024, month: 4, summary: 'Introduced and shepherded standalone Israel security assistance legislation through the Foreign Affairs Committee, providing $14.1 billion in emergency military aid following the October 7 Hamas attack.' },
      { title: 'Lake Okeechobee Relief Act', year: 2023, month: 7, summary: 'Championed federal investment in the Herbert Hoover Dike and Everglades restoration, addressing the harmful algae blooms from Lake Okeechobee discharges that devastate the St. Lucie and Caloosahatchee estuaries in his district.' },
    ],
  },

  {
    bioguideId: 'F000462',
    slug: 'lois-frankel',
    name: 'Lois Frankel',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 22,
    currentTitle: 'U.S. Representative, Florida 22nd District',
    bio: 'Lois Frankel has represented the Palm Beach area since 2013 and previously served as Mayor of West Palm Beach and in the Florida Legislature. Chair of the Democratic Women\'s Caucus, she sits on the Appropriations Committee and focuses on domestic violence prevention, women\'s healthcare, and foreign policy.',
    sinceYear: 2013,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Mayor of West Palm Beach', jurisdiction: 'City of West Palm Beach', startDate: '2003-01-01', endDate: '2011-12-31' },
    ],
    keyMilestones: [
      { year: 1986, description: 'Elected to Florida House of Representatives' },
      { year: 2003, description: 'Elected Mayor of West Palm Beach' },
      { year: 2012, description: 'Elected to U.S. Congress for the Palm Beach-area district' },
    ],
    keyVotes: [
      { title: 'Violence Against Women Act Reauthorization', year: 2022, month: 3, position: 'For', summary: 'Championed the bipartisan VAWA reauthorization expanding protections for domestic violence survivors and closing the "boyfriend loophole" in federal gun law, a cause she has led for years.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, opposing cuts to women\'s healthcare programs and domestic violence prevention services funded through Appropriations.' },
    ],
    keyBills: [
      { title: 'Keeping All Students Safe Act', year: 2023, month: 3, summary: 'Championed legislation establishing federal safety standards limiting the use of physical restraint and seclusion in schools, protecting vulnerable students with disabilities.' },
      { title: 'FemTech Access Act', year: 2025, month: 2, summary: 'Introduced legislation requiring NIH to increase research funding for women\'s health technology and reproductive health innovations, addressing decades of underfunding in women\'s health research.' },
    ],
  },

  {
    bioguideId: 'M001217',
    slug: 'jared-moskowitz',
    name: 'Jared Moskowitz',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 23,
    currentTitle: 'U.S. Representative, Florida 23rd District',
    bio: 'Jared Moskowitz served as Florida\'s Emergency Management Director under both Rick Scott and Ron DeSantis, overseeing COVID response and hurricane relief, before winning the Broward-area 23rd District in 2022. Known for his sharp and rapid social media presence, he sits on the Financial Services and Oversight Committees and has become a prominent Democratic communicator.',
    sinceYear: 2023,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Florida Director of Emergency Management', jurisdiction: 'State of Florida', startDate: '2019-01-01', endDate: '2022-12-31' },
    ],
    keyMilestones: [
      { year: 2019, description: 'Appointed Director of the Florida Division of Emergency Management by Governor DeSantis' },
      { year: 2022, description: 'Elected to Congress for FL-23 in Broward County' },
    ],
    keyVotes: [
      { title: 'Emergency Management Authorization Act', year: 2023, month: 6, position: 'For', summary: 'Championed legislation modernizing FEMA\'s grant programs and disaster declaration processes, drawing on his experience running Florida\'s emergency management apparatus through multiple hurricanes.' },
      { title: 'Against DOGE Oversight Cuts', year: 2025, month: 3, position: 'Against', summary: 'Was among the most outspoken critics of DOGE-driven federal workforce reductions, using Oversight Committee hearings to question Elon Musk\'s access to government systems and USAID cuts.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, raising concerns about Financial Services provisions reducing Fannie Mae and Freddie Mac oversight that he argued could destabilize Florida\'s already stressed housing market.' },
    ],
    keyBills: [
      { title: 'FEMA Modernization Act', year: 2023, month: 8, summary: 'Introduced comprehensive FEMA reform legislation streamlining disaster declarations, expediting aid delivery, and establishing pre-positioned supply caches in hurricane-prone regions based on his firsthand experience running Florida\'s emergency management.' },
      { title: 'No Dark Money in Elections Act', year: 2025, month: 4, summary: 'Introduced legislation requiring 501(c)(4) "dark money" groups that run political ads to disclose their donors, a democratic transparency priority.' },
    ],
  },

  {
    bioguideId: 'W000808',
    slug: 'frederica-wilson',
    name: 'Frederica Wilson',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 24,
    currentTitle: 'U.S. Representative, Florida 24th District',
    bio: 'Frederica Wilson has represented South Florida\'s Miami-Dade and Broward county 24th District since 2011 and is known as the "5000 Role Models of Excellence" founder for her mentoring work with young Black men. A former Florida state senator, she serves on the Transportation and Foreign Affairs Committees and advocates for infrastructure investment, Caribbean relations, and civil rights.',
    sinceYear: 2011,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected to Congress; founded 5000 Role Models of Excellence to mentor young Black men' },
    ],
    keyVotes: [
      { title: 'Infrastructure Investment and Jobs Act', year: 2021, month: 11, position: 'For', summary: 'Supported the bipartisan infrastructure law, which included funding for Miami-Dade transit improvements and highway projects in her South Florida district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, opposing transportation funding cuts and the Medicaid reductions that would harm her majority-minority South Florida district.' },
    ],
    keyBills: [
      { title: 'Miami Gardens Transportation Investment Act', year: 2023, month: 9, summary: 'Championed federal transportation grants for the Hard Rock Stadium transit corridor and Palmetto Expressway improvements in her district, addressing some of South Florida\'s worst traffic bottlenecks.' },
      { title: 'Haiti Security and Development Act', year: 2025, month: 5, summary: 'Championed legislation providing targeted U.S. support for Haitian security forces and civil society organizations, reflecting her district\'s large Haitian-American population\'s deep concern for Haiti\'s stability.' },
    ],
  },

  {
    bioguideId: 'W000797',
    slug: 'debbie-wasserman-schultz',
    name: 'Debbie Wasserman Schultz',
    party: 'D',
    chamber: 'House',
    state: 'Florida',
    district: 25,
    currentTitle: 'U.S. Representative, Florida 25th District',
    bio: 'Debbie Wasserman Schultz has represented South Florida since 2005 and served as Democratic National Committee Chair from 2011 to 2016. A former Florida state legislator, she sits on the Appropriations Committee and focuses on healthcare, cancer research funding, and women\'s issues — themes shaped by her own breast cancer diagnosis and treatment.',
    sinceYear: 2005,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected to U.S. Congress for FL-20 (now 25th after redistricting)' },
      { year: 2011, description: 'Named Chair of the Democratic National Committee by President Obama' },
      { year: 2016, description: 'Resigned as DNC Chair amid controversy over handling of 2016 primary' },
    ],
    keyVotes: [
      { title: 'Affordable Care Act', year: 2010, month: 3, position: 'For', summary: 'Voted for the ACA and has been one of its most vocal defenders, having fought to protect pre-existing condition protections after her own breast cancer diagnosis.' },
      { title: 'Research to Accelerate Cures and Equity Act', year: 2022, month: 12, position: 'For', summary: 'Championed bipartisan legislation expanding NIH cancer research funding, a priority shaped by her own experience as a cancer survivor.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, arguing it would gut healthcare spending that directly affects her South Florida constituents and cancer research programs she has championed for 20 years.' },
    ],
    keyBills: [
      { title: 'HEAR Her Act — Maternal Mortality', year: 2023, month: 4, summary: 'Led legislation expanding maternal mortality awareness and requiring healthcare providers to inform pregnant patients of warning signs, a public health priority she has championed throughout her congressional career.' },
      { title: 'Cancer Research Funding Act', year: 2025, month: 3, summary: 'Introduced legislation protecting and increasing NIH cancer research funding at the National Cancer Institute, directly opposing proposed cuts in the DOGE-era federal spending review.' },
    ],
  },

  {
    bioguideId: 'D000600',
    slug: 'mario-diaz-balart',
    name: 'Mario Diaz-Balart',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 26,
    currentTitle: 'U.S. Representative, Florida 26th District',
    bio: 'Mario Diaz-Balart has represented South Florida\'s Cuban-American communities since 2003, making him one of the longest-serving Hispanic members of Congress. He sits on the Appropriations Committee and is the most senior Republican appropriator in the Florida delegation, known for his hawkish stance on Cuba, Venezuela, and Nicaragua while occasionally working across the aisle on immigration reform.',
    sinceYear: 2003,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Florida State Representative', jurisdiction: 'Florida House of Representatives', startDate: '1988-01-01', endDate: '1992-12-31' },
      { title: 'Florida State Senator', jurisdiction: 'Florida State Senate', startDate: '1992-01-01', endDate: '2002-12-31' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected to U.S. Congress, joining his brother Lincoln Diaz-Balart as concurrent Florida House members' },
    ],
    keyVotes: [
      { title: 'Cuba Sanctions Strengthening Act', year: 2023, month: 7, position: 'For', summary: 'Championed tighter sanctions on Cuba\'s military and security services, targeting the regime\'s revenue streams that fund its suppression of political dissent.' },
      { title: 'Bipartisan Border Security Act', year: 2024, month: 2, position: 'Against', summary: 'Voted against the Senate bipartisan border deal that Trump opposed, despite having previously supported comprehensive immigration reform.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package and used his Appropriations seat to protect funding for U.S. democracy promotion programs in Cuba, Venezuela, and Nicaragua — his signature foreign policy issues.' },
    ],
    keyBills: [
      { title: 'LIBRE Act — Cuban Political Prisoners', year: 2023, month: 11, summary: 'Introduced legislation imposing targeted sanctions on Cuban officials responsible for imprisoning participants in the July 2021 pro-democracy protests, the largest in Cuban history.' },
      { title: 'HEROES Act — Western Hemisphere Democracy', year: 2025, month: 5, summary: 'Championed appropriations for democracy, rule-of-law, and civil society programs in Cuba, Venezuela, and Nicaragua through the Appropriations State and Foreign Operations Subcommittee.' },
    ],
  },

  {
    bioguideId: 'S000168',
    slug: 'maria-salazar',
    name: 'Maria Salazar',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 27,
    currentTitle: 'U.S. Representative, Florida 27th District',
    bio: 'Maria Salazar is a veteran Spanish-language TV journalist who represented networks in Miami covering Latin American dictatorships before winning Congress in 2020. Born in Miami of Cuban descent, she has been a leading House Republican voice on immigration reform, advocating for a humane path to legal status for undocumented immigrants while maintaining strong border security positions.',
    sinceYear: 2021,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hewf', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress for FL-27 after two failed prior bids' },
      { year: 2021, description: 'Introduced the "Dignity Act" immigration reform legislation' },
    ],
    keyVotes: [
      { title: 'Dignity Act — Immigration Reform', year: 2023, month: 5, position: 'For', summary: 'Introduced and championed her signature "Dignity Act" providing earned legal status for undocumented immigrants who pass criminal background checks and pay a fee, while strengthening border security — a rare Republican-led comprehensive immigration proposal.' },
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the immigration enforcement bill while emphasizing that comprehensive reform addressing the legal pathways she has championed is still needed.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked through Foreign Affairs Committee to ensure democracy promotion funding for Latin American countries was maintained.' },
    ],
    keyBills: [
      { title: 'Dignity Act', year: 2021, month: 5, summary: 'Introduced landmark immigration reform legislation providing earned legal status (not citizenship) for the approximately 11 million undocumented immigrants already in the country, paired with mandatory E-Verify, border technology investment, and agricultural guest worker reforms.' },
      { title: 'Protect Venezuelan Democrats Act', year: 2025, month: 3, summary: 'Introduced sanctions legislation targeting Maduro regime officials and their Cuban security advisors, drawing on her two decades covering the Venezuelan dictatorship\'s descent.' },
    ],
  },

  {
    bioguideId: 'G000593',
    slug: 'carlos-gimenez',
    name: 'Carlos Gimenez',
    party: 'R',
    chamber: 'House',
    state: 'Florida',
    district: 28,
    currentTitle: 'U.S. Representative, Florida 28th District',
    bio: 'Carlos Gimenez served as Miami-Dade County Mayor from 2011 to 2021, running one of the nation\'s largest county governments, before winning Congress in 2020. A Cuban-American who arrived in the U.S. as a child refugee and worked as a Miami-Dade firefighter for 26 years, he sits on the Armed Services and Homeland Security Committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Mayor of Miami-Dade County', jurisdiction: 'Miami-Dade County', startDate: '2011-01-01', endDate: '2020-12-31' },
      { title: 'Miami-Dade County Commissioner', jurisdiction: 'Miami-Dade County', startDate: '2002-01-01', endDate: '2011-12-31' },
    ],
    keyMilestones: [
      { year: 1985, description: 'Joined Miami-Dade Fire Rescue; rose to rank of Captain' },
      { year: 2011, description: 'Elected Miami-Dade County Mayor following impeachment of predecessor Carlos Alvarez' },
      { year: 2020, description: 'Elected to Congress, defeating incumbent Debbie Mucarsel-Powell' },
    ],
    keyVotes: [
      { title: 'Southern Border and Approaches Campaign Act', year: 2023, month: 9, position: 'For', summary: 'Championed legislation formalizing military-civilian coordination for southern border security operations, drawing on his experience managing county-federal coordination as Miami-Dade Mayor.' },
      { title: 'Cuba Policy Sanctions Act', year: 2024, month: 5, position: 'For', summary: 'Co-sponsored legislation expanding travel and trade restrictions on Cuba\'s military-controlled economy, reflecting his family\'s direct experience with Cuban repression.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; secured Armed Services provisions protecting Homestead Air Reserve Base and the 2nd Fleet command in the Miami area.' },
    ],
    keyBills: [
      { title: 'GUARD Act — National Guard Border Deployment', year: 2023, month: 4, summary: 'Introduced legislation formalizing National Guard deployment authority for border security operations and ensuring reimbursement to states for Guard members sent to support federal border enforcement.' },
      { title: 'PortMiami Security Enhancement Act', year: 2025, month: 3, summary: 'Championed federal security investment and Coast Guard assets for PortMiami, the world\'s busiest cruise port and a critical trade gateway, drawing on his county executive experience managing the port.' },
    ],
  },
]

export const flDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001056',
    slug: 'john-cornyn',
    name: 'John Cornyn',
    party: 'R',
    chamber: 'Senate',
    state: 'Texas',
    currentTitle: 'U.S. Senator from Texas',
    bio: 'John Cornyn has served in the Senate since 2002 after serving as Texas Attorney General and on the Texas Supreme Court. He is the Senate Majority Whip in the 119th Congress and one of the chamber\'s most influential Republicans, with deep expertise in intelligence, judiciary, and immigration matters. He ran unsuccessfully for Senate Majority Leader in 2024 before accepting the Whip position.',
    sinceYear: 2002,
    committees: [
      { slug: 'ssin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'ssjud', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas Attorney General', jurisdiction: 'State of Texas', startDate: '1999-01-01', endDate: '2002-12-31' },
      { title: 'Texas Supreme Court Justice', jurisdiction: 'Texas Supreme Court', startDate: '1990-01-01', endDate: '1997-12-31' },
    ],
    keyMilestones: [
      { year: 1990, description: 'Elected to Texas Supreme Court' },
      { year: 1998, description: 'Elected Texas Attorney General' },
      { year: 2002, description: 'Elected to U.S. Senate' },
      { year: 2007, description: 'Elected Senate Republican Whip; served until 2013' },
      { year: 2019, description: 'Re-elected Senate Majority Whip' },
      { year: 2025, description: 'Became Senate Majority Whip in the 119th Congress' },
    ],
    keyVotes: [
      { title: 'Bipartisan Safer Communities Act', year: 2022, month: 6, position: 'For', summary: 'Co-authored the Bipartisan Safer Communities Act, the most significant gun legislation in nearly 30 years, working with Sen. Chris Murphy. The deal cleared background check enhancements, mental health funding, and the "boyfriend loophole" while stopping short of universal background checks — a politically risky move for which Cornyn received backlash from some Texas Republicans.' },
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'For', summary: 'Voted for the CHIPS Act to boost semiconductor manufacturing in the U.S., arguing it was a national security and economic competitiveness necessity. Texas has been a major beneficiary, with TSMC and Samsung expansions choosing Texas sites.' },
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the Laken Riley Act as an early 119th Congress priority. Cornyn had long advocated for comprehensive immigration enforcement reform through the Judiciary Committee.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'As Majority Whip, was the key vote-counter and dealmaker for the Republican reconciliation package. Secured provisions important to Texas energy producers, including rollbacks of methane regulations and protection of oil and gas tax provisions.' },
    ],
    keyBills: [
      { title: 'CHIPS and Science Act — Co-sponsor', year: 2022, month: 6, summary: 'Was a leading Republican proponent of the CHIPS Act, arguing semiconductor independence from China was a national security imperative. Texas-based TSMC and Samsung announced major U.S. chip fab expansions following the law\'s passage.' },
      { title: 'Bipartisan Safer Communities Act', year: 2022, month: 6, summary: 'Co-authored the landmark gun safety compromise that enhanced background checks, added mental health funding, and closed the boyfriend loophole — negotiating a bill that could pass a 60-vote Senate threshold.' },
    ],
  },

  {
    bioguideId: 'C001098',
    slug: 'ted-cruz',
    name: 'Ted Cruz',
    party: 'R',
    chamber: 'Senate',
    state: 'Texas',
    currentTitle: 'U.S. Senator from Texas',
    bio: 'Ted Cruz, a Harvard Law graduate and former Supreme Court litigator, has been a dominant figure in conservative politics since winning the Texas Senate seat in 2012. He ran for president in 2016 and 2024, chairs the Senate Committee on Commerce, Science, and Transportation, and is one of the Senate\'s most prolific floor orators on constitutional issues, China policy, and energy deregulation.',
    sinceYear: 2013,
    committees: [
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssjud', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas Solicitor General', jurisdiction: 'Texas Office of the Attorney General', startDate: '2003-01-01', endDate: '2008-12-31' },
    ],
    keyMilestones: [
      { year: 2003, description: 'Appointed Texas Solicitor General; argued 9 cases before the U.S. Supreme Court' },
      { year: 2012, description: 'Won Senate race, defeating Lt. Gov. David Dewhurst in primary and Paul Sadler in general' },
      { year: 2016, description: 'Ran for president; won Iowa caucuses, dropped out after Indiana primary' },
      { year: 2024, description: 'Narrowly defeated Democrat Colin Allred by 5 points in a competitive re-election' },
      { year: 2025, description: 'Named Chair of Senate Commerce, Science, and Transportation Committee' },
    ],
    keyVotes: [
      { title: 'January 6 Electoral Vote Objection', year: 2021, month: 1, position: 'Against', summary: 'Led a group of Republican senators in objecting to Pennsylvania and Arizona electoral votes on January 6, 2021, following the Capitol riot. Cruz argued Congress should have appointed an electoral commission to audit the results.' },
      { title: 'Against Ukraine Aid', year: 2024, month: 4, position: 'Against', summary: 'Voted against the $61 billion Ukraine security assistance package, arguing the administration lacked a clear strategy for achieving U.S. objectives and that European allies should bear more of the burden.' },
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Supported the Laken Riley Act as the first major immigration enforcement legislation of the 119th Congress, consistent with his years-long advocacy for stricter border enforcement.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package and used his Commerce Committee chairmanship to include provisions deregulating AI development, protecting Texas energy companies from clean energy mandates, and expanding broadband in rural Texas.' },
    ],
    keyBills: [
      { title: 'TAKE IT DOWN Act — Online Exploitation', year: 2025, month: 3, summary: 'Co-authored bipartisan legislation signed into law by President Trump requiring online platforms to remove non-consensual intimate images (including deepfakes) within 48 hours of notification. The bill was championed by Melania Trump and represents a rare bipartisan Cruz success.' },
      { title: 'AI LEAD Act — Artificial Intelligence Deregulation', year: 2025, month: 8, summary: 'Introduced legislation through his Commerce Committee chairmanship to preempt state-level AI regulations with a federal light-touch framework, arguing a patchwork of state laws would disadvantage American AI companies versus Chinese competitors.' },
    ],
  },

  // ── U.S. HOUSE — Districts ─────────────────────────────────────────────────

  {
    bioguideId: 'M001224',
    slug: 'nathaniel-moran',
    name: 'Nathaniel Moran',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 1,
    currentTitle: 'U.S. Representative, Texas 1st District',
    bio: 'Nathaniel Moran is a former Smith County Judge who won the deep-red East Texas 1st District in 2022, succeeding retiring incumbent Louie Gohmert. He serves on the Foreign Affairs Committee and focuses on agricultural trade, border security, and rural infrastructure.',
    sinceYear: 2023,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected Smith County Judge; served until 2022' },
      { year: 2022, description: 'Elected to Congress for TX-1' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the immigration enforcement bill consistent with the strong border security views of his East Texas district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the Republican reconciliation package including agricultural provisions protecting East Texas farmers and forestry operations.' },
    ],
    keyBills: [
      { title: 'Rural Hospital Sustainability Act', year: 2023, month: 9, summary: 'Championed legislation providing emergency loan guarantees and Medicare reimbursement increases for rural critical access hospitals in East Texas facing closure from thin operating margins.' },
      { title: 'Agricultural Trade Reciprocity Act', year: 2025, month: 5, summary: 'Introduced legislation requiring the USDA to condition agricultural import agreements on reciprocal access for Texas beef, poultry, and cotton producers in foreign markets.' },
    ],
  },

  {
    bioguideId: 'C001120',
    slug: 'dan-crenshaw',
    name: 'Dan Crenshaw',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 2,
    currentTitle: 'U.S. Representative, Texas 2nd District',
    bio: 'Dan Crenshaw is a former Navy SEAL who lost his right eye to an IED in Afghanistan and won the Houston-area 2nd District in 2018. He serves on the Energy and Commerce Committee and the Homeland Security Committee, and has become a major Republican media presence, known for his pushback against what he calls "victimhood culture" and his hawkish foreign policy views.',
    sinceYear: 2019,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress; went viral after Saturday Night Live made a joke about his eye patch' },
      { year: 2020, description: 'Named to House Permanent Select Committee on Intelligence' },
    ],
    keyVotes: [
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'For', summary: 'Bucked the growing GOP isolationist faction to vote for the $61 billion Ukraine security assistance package, arguing abandoning Ukraine would embolden adversaries and damage U.S. credibility with allies.' },
      { title: 'NDAA FY2026', year: 2025, month: 12, position: 'For', summary: 'Supported the defense authorization act, championing provisions expanding special operations forces training and Pacific deterrence capabilities he prioritized on the Intelligence Committee.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; used his Energy and Commerce seat to advance natural gas export deregulation benefiting Houston-area LNG operators.' },
    ],
    keyBills: [
      { title: 'Chip War Act — China Technology Controls', year: 2023, month: 5, summary: 'Introduced legislation expanding export controls on semiconductor equipment and AI chips bound for Chinese military-linked entities, building on the CHIPS Act export control framework.' },
      { title: 'LNG Export Freedom Act', year: 2025, month: 3, summary: 'Championed legislation overturning Biden\'s pause on new LNG export terminal approvals, arguing the pause harmed U.S. energy allies in Europe and benefited Russian natural gas.' },
    ],
  },

  {
    bioguideId: 'S001224',
    slug: 'keith-self',
    name: 'Keith Self',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 3,
    currentTitle: 'U.S. Representative, Texas 3rd District',
    bio: 'Keith Self is a retired Army colonel and former Collin County Judge who won the affluent suburban Dallas 3rd District in 2022. He is a member of the House Freedom Caucus and serves on the Foreign Affairs Committee, taking a skeptical view of overseas aid and advocating for fiscal austerity.',
    sinceYear: 2023,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected Collin County Judge; served until 2022' },
      { year: 2022, description: 'Elected to Congress for TX-3' },
    ],
    keyVotes: [
      { title: 'Against Ukraine Aid', year: 2024, month: 4, position: 'Against', summary: 'Voted against the $61 billion Ukraine assistance package, arguing U.S. taxpayer money should not fund an open-ended overseas commitment without measurable objectives.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after securing spending cut provisions he had demanded as a Freedom Caucus member, including caps on discretionary spending growth.' },
    ],
    keyBills: [
      { title: 'Balanced Budget Amendment Act', year: 2023, month: 6, summary: 'Introduced a constitutional amendment requiring Congress to pass a balanced budget each year, a Freedom Caucus fiscal priority.' },
      { title: 'Israel Security Assistance Act', year: 2024, month: 3, summary: 'Championed standalone emergency Israel security assistance separate from Ukraine aid, reflecting his support for Israel while opposing the linked Ukraine-Israel-Taiwan package.' },
    ],
  },

  {
    bioguideId: 'F000246',
    slug: 'pat-fallon',
    name: 'Pat Fallon',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 4,
    currentTitle: 'U.S. Representative, Texas 4th District',
    bio: 'Pat Fallon is a former Texas state senator who won the Sherman-area 4th District in 2020 and serves on the Armed Services Committee. He is a vocal critic of Biden administration policies and has focused on military readiness, border security, and limiting government regulation.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Texas State Senate for SD 30' },
      { year: 2020, description: 'Elected to U.S. Congress for TX-4' },
    ],
    keyVotes: [
      { title: 'NDAA FY2026 — Woke Military Provisions', year: 2025, month: 12, position: 'For', summary: 'Voted for the defense authorization act including provisions reversing Biden-era diversity, equity, and inclusion requirements in the military, a cause he championed on the Armed Services Committee.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked on Oversight Committee provisions requiring rigorous audits of federal agency spending and waste reduction accountability mechanisms.' },
    ],
    keyBills: [
      { title: 'Military Readiness Enhancement Act', year: 2023, month: 4, summary: 'Introduced legislation requiring the Pentagon to report annually on combat readiness metrics separated from diversity metrics, arguing military readiness has been deprioritized under Biden administration DEI requirements.' },
      { title: 'Hold China Accountable Act', year: 2025, month: 2, summary: 'Introduced legislation expanding tariffs on Chinese goods and restricting Chinese government-linked entities from accessing U.S. capital markets.' },
    ],
  },

  {
    bioguideId: 'G000589',
    slug: 'lance-gooden',
    name: 'Lance Gooden',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 5,
    currentTitle: 'U.S. Representative, Texas 5th District',
    bio: 'Lance Gooden is a former Texas state representative who has held the 5th District since 2019. He serves on the Financial Services Committee and focuses on financial regulation, China investment restrictions, and rural Texas infrastructure. His district east of Dallas includes Kaufman and Henderson counties.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Texas House of Representatives' },
      { year: 2018, description: 'Elected to U.S. Congress for TX-5' },
    ],
    keyVotes: [
      { title: 'Restrict Act — TikTok', year: 2023, month: 3, position: 'For', summary: 'Supported legislation giving the executive branch authority to restrict or ban TikTok and other technology products from foreign adversary nations.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Financial Services provisions restricting Chinese investment in U.S. real estate and critical infrastructure near military installations.' },
    ],
    keyBills: [
      { title: 'No Chinese Investment in American Agriculture Act', year: 2023, month: 7, summary: 'Championed legislation prohibiting Chinese government-linked entities from purchasing agricultural land near U.S. military bases, addressing national security concerns over foreign land acquisition.' },
      { title: 'Community Bank Regulatory Relief Act', year: 2025, month: 4, summary: 'Introduced legislation exempting community banks under $10 billion in assets from certain Basel III capital requirements, arguing the rules disadvantage smaller lenders serving rural Texas communities.' },
    ],
  },

  {
    bioguideId: 'E000071',
    slug: 'jake-ellzey',
    name: 'Jake Ellzey',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 6,
    currentTitle: 'U.S. Representative, Texas 6th District',
    bio: 'Jake Ellzey is a Navy fighter pilot and Texas state representative who won a 2021 special election to succeed Ron Wright, the first sitting member of Congress to die of COVID-19. He represents the Midlothian-area 6th District south of Fort Worth and sits on the Armed Services Committee.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Texas House of Representatives' },
      { year: 2021, description: 'Won special election for TX-6, defeating Trump-backed Susan Wright' },
    ],
    keyVotes: [
      { title: 'NDAA FY2024', year: 2023, month: 12, position: 'For', summary: 'Voted for the defense authorization act, supporting aviation readiness provisions important to his fighter pilot background and the military installations in the Dallas-Fort Worth metroplex.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; prioritized Armed Services provisions maintaining Naval Air Station Joint Reserve Base Fort Worth operations in his district.' },
    ],
    keyBills: [
      { title: 'Fifth-Generation Fighter Readiness Act', year: 2023, month: 8, summary: 'Introduced legislation increasing procurement funding for F-35 and F/A-18 aircraft parts and expanding pilot training programs to address the military\'s growing fighter pilot shortage.' },
      { title: 'Rural Infrastructure Modernization Act', year: 2025, month: 3, summary: 'Championed federal grants for water system upgrades and broadband expansion in the semi-rural suburban communities of TX-6 that have grown rapidly with Dallas-Fort Worth metro expansion.' },
    ],
  },

  {
    bioguideId: 'F000468',
    slug: 'lizzie-fletcher',
    name: 'Lizzie Fletcher',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 7,
    currentTitle: 'U.S. Representative, Texas 7th District',
    bio: 'Lizzie Fletcher won the Houston-area 7th District in 2018, flipping a seat that had been Republican since 1967. A former civil trial lawyer and political newcomer, she serves on the Energy and Commerce Committee and focuses on energy policy, healthcare, and manufacturing jobs for the Houston energy corridor.',
    sinceYear: 2019,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress, flipping TX-7 for the first time since 1966' },
    ],
    keyVotes: [
      { title: 'Inflation Reduction Act', year: 2022, month: 8, position: 'For', summary: 'Voted for the IRA\'s energy provisions, arguing the clean energy investments would create manufacturing jobs in Houston\'s energy sector and accelerate LNG and hydrogen development alongside renewable energy.' },
      { title: 'CHIPS and Science Act', year: 2022, month: 7, position: 'For', summary: 'Supported semiconductor investment legislation benefiting Texas chip manufacturers and the University of Houston\'s advanced manufacturing programs.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, arguing rollbacks of clean energy credits would harm Houston energy-transition jobs and that Medicaid cuts would hurt uninsured Texans.' },
    ],
    keyBills: [
      { title: 'Houston Energy Transition Act', year: 2023, month: 5, summary: 'Introduced legislation creating federal partnerships with Houston energy companies to develop carbon capture, hydrogen, and LNG export infrastructure, framing Houston as the global capital of the energy transition.' },
      { title: 'Bipartisan Hydrogen Hub Investment Act', year: 2025, month: 4, summary: 'Championed federal investment in the Gulf Coast hydrogen hub, a DOE-designated project that would make Texas a center for clean hydrogen production exported globally.' },
    ],
  },

  {
    bioguideId: 'L000603',
    slug: 'morgan-luttrell',
    name: 'Morgan Luttrell',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 8,
    currentTitle: 'U.S. Representative, Texas 8th District',
    bio: 'Morgan Luttrell is a Navy SEAL veteran and neuroscientist who won the Montgomery County-area 8th District in 2022. He serves on the Armed Services and Veterans\' Affairs Committees and has focused on traumatic brain injury research and veteran mental health — issues he has written about from personal experience recovering from a helicopter crash.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hva', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress for TX-8' },
    ],
    keyVotes: [
      { title: 'PACT Act — Veterans Burn Pits', year: 2023, month: 5, position: 'For', summary: 'Championed expansion of the PACT Act to reach more veterans with toxic exposure claims, drawing on personal experience with military health injuries.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; prioritized protection of VA mental health funding and TBI research programs he has championed through Veterans\' Affairs.' },
    ],
    keyBills: [
      { title: 'BRAVE Act — Brain Injury Research', year: 2023, month: 7, summary: 'Introduced legislation expanding DoD and VA funding for traumatic brain injury research and treatment protocols, drawing on his academic neuroscience background and personal experience surviving a military helicopter crash.' },
      { title: 'Veterans Mental Health Access Improvement Act', year: 2025, month: 3, summary: 'Championed expanding VA mental health provider capacity and telehealth access for veterans in rural Texas who lack access to VA medical centers.' },
    ],
  },

  {
    bioguideId: 'G000553',
    slug: 'al-green',
    name: 'Al Green',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 9,
    currentTitle: 'U.S. Representative, Texas 9th District',
    bio: 'Al Green has represented the Houston-area 9th District since 2005 and was the first member of Congress to call for President Trump\'s impeachment, introducing articles of impeachment three times before the formal proceedings began. A former civil rights lawyer and judge, he serves on the Financial Services Committee and focuses on fair housing, predatory lending, and racial equity.',
    sinceYear: 2005,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected to Congress' },
      { year: 2017, description: 'First member of Congress to introduce articles of impeachment against President Trump' },
    ],
    keyVotes: [
      { title: 'First Articles of Impeachment — Trump', year: 2017, month: 11, position: 'For', summary: 'Introduced the first articles of impeachment against President Trump, becoming the lone initiator of what would later become a formal House inquiry. Green\'s resolution received over 50 co-sponsors.' },
      { title: 'Dodd-Frank Rollback', year: 2018, month: 3, position: 'Against', summary: 'Voted against the Economic Growth, Regulatory Relief, and Consumer Protection Act, arguing it weakened fair lending protections that protect minority communities from discriminatory bank practices.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, arguing cuts to Community Development Financial Institutions and affordable housing programs would devastate the low-income Houston communities he represents.' },
    ],
    keyBills: [
      { title: 'FDIC Diversity and Inclusion Act', year: 2023, month: 6, summary: 'Championed legislation requiring the FDIC and federal banking regulators to track and report on diversity in financial institution lending and employment, a long-standing focus of his Financial Services Committee work.' },
      { title: 'Preserving Houston\'s Affordable Housing Act', year: 2025, month: 4, summary: 'Introduced legislation expanding Section 8 housing vouchers and Community Development Block Grant funding for Houston\'s growing homeless and low-income housing crisis.' },
    ],
  },

  {
    bioguideId: 'M001157',
    slug: 'michael-mccaul',
    name: 'Michael McCaul',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 10,
    currentTitle: 'U.S. Representative, Texas 10th District',
    bio: 'Michael McCaul has represented the Austin-to-Houston 10th District since 2005 and is the former Chairman of the House Foreign Affairs Committee, a role he held for six years. One of the House\'s most experienced voices on national security and China policy, he has been a consistent advocate for strong deterrence of both China and Russia.',
    sinceYear: 2005,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Assistant Attorney, Western District of Texas', jurisdiction: 'U.S. Department of Justice', startDate: '1999-01-01', endDate: '2002-12-31' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected to Congress' },
      { year: 2013, description: 'Became Chairman of the House Homeland Security Committee; led for six years' },
      { year: 2023, description: 'Became Chairman of the House Foreign Affairs Committee' },
      { year: 2025, description: 'Succeeded by Brian Mast as Foreign Affairs Chairman; remains senior member' },
    ],
    keyVotes: [
      { title: 'Ukraine Aid Package', year: 2024, month: 4, position: 'For', summary: 'Was the lead Republican floor manager for the $61 billion Ukraine security assistance package, arguing defeat of Ukraine would embolden China in Taiwan and trigger broader global instability.' },
      { title: 'TSMC Sanctions Protection Act', year: 2023, month: 8, position: 'For', summary: 'Championed protections for TSMC\'s U.S. chip manufacturing investment from Chinese retaliation, advancing U.S. semiconductor independence.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked on Foreign Affairs Committee provisions maintaining Taiwan security assistance and Indo-Pacific deterrence funding.' },
    ],
    keyBills: [
      { title: 'Taiwan Policy Act', year: 2022, month: 6, summary: 'Led the bipartisan Taiwan Policy Act providing $4.5 billion in security assistance to Taiwan and upgrading U.S.-Taiwan diplomatic relations, the most comprehensive Taiwan policy reform in 40 years.' },
      { title: 'Taking Back Our Hostages Act', year: 2024, month: 3, summary: 'Introduced legislation strengthening interagency coordination for negotiating the release of American hostages held abroad, drawing on his intelligence and national security committee experience.' },
    ],
  },

  {
    bioguideId: 'P000048',
    slug: 'august-pfluger',
    name: 'August Pfluger',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 11,
    currentTitle: 'U.S. Representative, Texas 11th District',
    bio: 'August Pfluger is a retired Air Force fighter pilot and former NSC staff director who won the Midland-Odessa 11th District in 2020. He serves on the Energy and Commerce Committee and the Homeland Security Committee, focusing on energy production, border security, and the Permian Basin energy economy that dominates his sprawling West Texas district.',
    sinceYear: 2021,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
      { slug: 'hhs', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected to Congress; won with 80% of the vote in deep-red TX-11' },
    ],
    keyVotes: [
      { title: 'Permian Basin Energy Production Freedom Act', year: 2023, month: 6, position: 'For', summary: 'Championed legislation rolling back Biden administration restrictions on oil and gas leasing on federal land, arguing the Permian Basin produces 20% of U.S. oil and restricting it harms national energy security.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; led Energy and Commerce efforts to eliminate the methane fee on oil and gas producers and restore Permian Basin leasing rights.' },
    ],
    keyBills: [
      { title: 'American Energy Independence Act', year: 2023, month: 3, summary: 'Introduced comprehensive legislation expanding offshore and onshore oil and gas leasing, streamlining permitting for Permian Basin wells, and opening new areas to energy exploration.' },
      { title: 'LNG Allies Act', year: 2025, month: 2, summary: 'Championed legislation requiring DOE to approve LNG export permits for NATO and Indo-Pacific security partners within 30 days, addressing European energy security concerns and supporting Permian Basin natural gas producers.' },
    ],
  },

  {
    bioguideId: 'G000601',
    slug: 'craig-goldman',
    name: 'Craig Goldman',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 12,
    currentTitle: 'U.S. Representative, Texas 12th District',
    bio: 'Craig Goldman is a former Texas state representative who won the Fort Worth-area 12th District in 2024, succeeding retiring incumbent Kay Granger. He serves on the Financial Services Committee and focuses on business-friendly policies, financial regulation reform, and maintaining the defense contracting economy centered around Fort Worth\'s Lockheed Martin plant.',
    sinceYear: 2025,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Texas House of Representatives; served until 2024' },
      { year: 2024, description: 'Elected to Congress for TX-12, succeeding Kay Granger' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked to protect defense procurement funding for Lockheed Martin\'s F-35 program at Naval Air Station Fort Worth, a major economic driver in his district.' },
    ],
    keyBills: [
      { title: 'Fort Worth Defense Workforce Act', year: 2025, month: 3, summary: 'Championed legislation expanding apprenticeship programs for defense contractor manufacturing positions at Lockheed Martin and Bell Textron facilities in the Fort Worth area.' },
      { title: 'Community Development Financial Institution Reform Act', year: 2025, month: 7, summary: 'Introduced legislation streamlining CDFI certification to help more Texas community lenders access federal capital for small business and affordable housing lending.' },
    ],
  },

  {
    bioguideId: 'J000304',
    slug: 'ronny-jackson',
    name: 'Ronny Jackson',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 13,
    currentTitle: 'U.S. Representative, Texas 13th District',
    bio: 'Ronny Jackson is a retired Rear Admiral and physician who served as White House physician to Presidents Obama, Trump, and briefly Biden before winning the Panhandle-area 13th District in 2020. He serves on the Armed Services and Agriculture Committees and is one of Trump\'s most vocal congressional defenders.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'White House Physician', jurisdiction: 'Executive Office of the President', startDate: '2006-01-01', endDate: '2019-12-31' },
    ],
    keyMilestones: [
      { year: 2006, description: 'Became White House physician; served Presidents Bush, Obama, and Trump' },
      { year: 2018, description: 'Nominated by President Trump for VA Secretary; withdrew amid conduct allegations' },
      { year: 2020, description: 'Elected to Congress for TX-13' },
    ],
    keyVotes: [
      { title: 'Against Biden Cabinet Confirmations', year: 2021, month: 2, position: 'Against', summary: 'Voted against most Biden cabinet nominees, was particularly vocal about HHS Secretary Becerra, whom he criticized for supporting abortion policies and lacking medical training.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; championed Agriculture Committee provisions protecting Texas wheat and cotton farmers from commodity program cuts.' },
    ],
    keyBills: [
      { title: 'Protecting Farmers\' Access to Water Act', year: 2023, month: 8, summary: 'Championed legislation limiting EPA authority to regulate agricultural water usage in the Texas Panhandle, protecting the Ogallala Aquifer-dependent farming operations that dominate TX-13.' },
      { title: 'Veteran Healthcare Freedom Act', year: 2025, month: 4, summary: 'Introduced legislation expanding Choice program access and telehealth options for veterans in rural West Texas, where the nearest VA facility can be hours away.' },
    ],
  },

  {
    bioguideId: 'W000814',
    slug: 'randy-weber',
    name: 'Randy Weber',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 14,
    currentTitle: 'U.S. Representative, Texas 14th District',
    bio: 'Randy Weber has represented the Southeast Texas coast and Galveston area since 2013 and serves on the Transportation and Infrastructure and Science, Space, and Technology Committees. A former HVAC contractor and state legislator, he focuses on energy infrastructure, NASA\'s Johnson Space Center, and hurricane resilience for Texas\'s vulnerable Gulf Coast.',
    sinceYear: 2013,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hst', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2008, description: 'Elected to Texas State House' },
      { year: 2012, description: 'Elected to U.S. Congress for TX-14' },
    ],
    keyVotes: [
      { title: 'NASA Authorization Act 2025', year: 2025, month: 6, position: 'For', summary: 'Championed NASA reauthorization provisions protecting Johnson Space Center\'s mission control and astronaut training roles as America returns to the Moon.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; secured Science Committee provisions maintaining NASA Johnson funding and Transportation provisions for Galveston seawall and Port of Texas City improvements.' },
    ],
    keyBills: [
      { title: 'Ike Dike Act — Coastal Spine', year: 2023, month: 9, summary: 'Championed legislation funding the Galveston Bay coastal storm risk management system ("Ike Dike"), a $34 billion barrier system to protect the Texas Gulf Coast from the next major hurricane.' },
      { title: 'Space Act Amendments', year: 2025, month: 5, summary: 'Championed clarifications to commercial space launch liability framework that protect Johnson Space Center contractors and simplify regulations for the commercial crew industry.' },
    ],
  },

  {
    bioguideId: 'D000594',
    slug: 'monica-de-la-cruz',
    name: 'Monica De La Cruz',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 15,
    currentTitle: 'U.S. Representative, Texas 15th District',
    bio: 'Monica De La Cruz flipped the historically Democratic Rio Grande Valley 15th District in 2022, becoming the first Republican to hold the seat. A businesswoman and daughter of immigrants, she serves on the Financial Services Committee and focuses on economic development and border security in her predominantly Hispanic district.',
    sinceYear: 2023,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress, flipping a historically blue South Texas district that had been held by Democrats for generations' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the immigration enforcement bill while calling for comprehensive immigration reform that addresses the labor needs of South Texas agriculture and the legal pathways that many district residents rely on.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked to ensure border community economic development programs in the Rio Grande Valley were not cut in discretionary spending reductions.' },
    ],
    keyBills: [
      { title: 'Rio Grande Valley Economic Development Act', year: 2023, month: 7, summary: 'Introduced legislation creating federal enterprise zones and infrastructure investment incentives for the four Rio Grande Valley counties, addressing persistent poverty in one of the poorest regions of the United States.' },
      { title: 'Agricultural Guest Worker Modernization Act', year: 2025, month: 4, summary: 'Championed reforms to the H-2A agricultural guest worker program reducing processing delays and streamlining renewals for South Texas farm and ranch operations that depend on seasonal labor.' },
    ],
  },

  {
    bioguideId: 'E000299',
    slug: 'veronica-escobar',
    name: 'Veronica Escobar',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 16,
    currentTitle: 'U.S. Representative, Texas 16th District',
    bio: 'Veronica Escobar has represented El Paso since 2019 and was one of the first two Latina women elected to Congress from Texas. A former El Paso County Judge, she serves on the Judiciary and Armed Services Committees and is a leading Democratic voice on immigration reform, border community issues, and binational trade.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'El Paso County Judge', jurisdiction: 'El Paso County', startDate: '2011-01-01', endDate: '2018-12-31' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress, becoming one of the first Latinas elected from Texas' },
    ],
    keyVotes: [
      { title: 'For Pathway to Citizenship Act', year: 2021, month: 3, position: 'For', summary: 'Championed comprehensive immigration reform legislation providing an 8-year path to citizenship for DACA recipients and long-term undocumented residents, a priority for El Paso\'s large immigrant community.' },
      { title: 'Against Border Wall Funding', year: 2023, month: 9, position: 'Against', summary: 'Opposed emergency border wall construction funding, arguing physical barriers are less effective than technology-based solutions and cause environmental and binational trade disruptions.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing immigration enforcement provisions she argued criminalized asylum-seekers and Medicaid cuts affecting Fort Bliss soldiers and El Paso working families.' },
    ],
    keyBills: [
      { title: 'El Paso-Juárez Trade Corridor Enhancement Act', year: 2023, month: 5, summary: 'Championed legislation expanding border crossing capacity and pre-clearance programs at the El Paso ports of entry, which process $100 billion in trade annually.' },
      { title: 'Protecting Family Unity Act', year: 2025, month: 3, summary: 'Introduced legislation establishing protections against family separation at the border during immigration enforcement operations, responding to resumed enforcement actions.' },
    ],
  },

  {
    bioguideId: 'S000250',
    slug: 'pete-sessions',
    name: 'Pete Sessions',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 17,
    currentTitle: 'U.S. Representative, Texas 17th District',
    bio: 'Pete Sessions served 22 years in Congress (1997–2019), including as Chairman of the National Republican Congressional Committee and later Chairman of the Rules Committee, before a redistricting-driven defeat. He returned to Congress in 2023 representing the Waco-area 17th District and serves on the Financial Services and Oversight Committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, Texas 5th District', jurisdiction: 'U.S. House of Representatives', startDate: '1997-01-07', endDate: '2019-01-03' },
    ],
    keyMilestones: [
      { year: 1996, description: 'First elected to Congress' },
      { year: 2009, description: 'Became Chairman of the National Republican Congressional Committee' },
      { year: 2017, description: 'Became Chairman of the House Rules Committee' },
      { year: 2018, description: 'Lost re-election amid suburban Dallas wave; later ran and won in Waco area' },
      { year: 2022, description: 'Returned to Congress representing TX-17' },
    ],
    keyVotes: [
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; leveraged his experience on Financial Services and Oversight to negotiate provisions addressing federal real property management and rural development funding for the Waco-area district.' },
    ],
    keyBills: [
      { title: 'Baylor University Research Funding Act', year: 2023, month: 9, summary: 'Championed federal research partnership funding for Baylor University\'s medical and engineering programs, strengthening the Waco area\'s growing innovation ecosystem.' },
      { title: 'Federal Property Management Reform Act', year: 2025, month: 3, summary: 'Introduced legislation requiring federal agencies to divest underutilized federal real estate, generating proceeds for deficit reduction and returning valuable property to local tax rolls.' },
    ],
  },

  {
    bioguideId: 'M001245',
    slug: 'christian-menefee',
    name: 'Christian Menefee',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 18,
    currentTitle: 'U.S. Representative, Texas 18th District',
    bio: 'Christian Menefee served as Harris County Attorney from 2021 to 2025, becoming one of the youngest chief law enforcement officers in Texas, before winning the Houston 18th District held for decades by the late Sheila Jackson Lee. He serves on the Natural Resources Committee and focuses on environmental justice, economic mobility, and civil rights.',
    sinceYear: 2025,
    committees: [
      { slug: 'hnr', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Harris County Attorney', jurisdiction: 'Harris County, Texas', startDate: '2021-01-01', endDate: '2024-12-31' },
    ],
    keyMilestones: [
      { year: 2020, description: 'Elected Harris County Attorney at 32, the youngest in Texas history' },
      { year: 2024, description: 'Won Democratic primary for TX-18; elected to Congress in November' },
    ],
    keyVotes: [
      { title: 'Against Rollback of Environmental Justice Regulations', year: 2025, month: 4, position: 'Against', summary: 'Led Democratic opposition to executive actions eliminating EPA Environmental Justice programs, arguing Houston\'s historically Black neighborhoods along the ship channel bear disproportionate pollution burdens.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, citing cuts to Medicaid that would harm the large uninsured population in Harris County and rollbacks of environmental protections critical to Houston\'s air quality.' },
    ],
    keyBills: [
      { title: 'Houston Environmental Justice Act', year: 2025, month: 4, summary: 'Introduced legislation creating targeted EPA enforcement resources and community health monitoring in fence-line communities near Houston\'s petrochemical complex, building on his county attorney litigation background.' },
      { title: 'Climate Resilience Infrastructure Act', year: 2025, month: 9, summary: 'Championed federal investment in flood mitigation infrastructure for Houston neighborhoods that experienced catastrophic flooding in hurricanes Harvey, Imelda, and subsequent storms.' },
    ],
  },

  {
    bioguideId: 'A000375',
    slug: 'jodey-arrington',
    name: 'Jodey Arrington',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 19,
    currentTitle: 'U.S. Representative, Texas 19th District',
    bio: 'Jodey Arrington represents the Lubbock-area 19th District and chairs the House Budget Committee, one of the most influential fiscal positions in Congress. He focuses on deficit reduction, entitlement reform, and agricultural policy for the cotton and dairy farming communities of West Texas.',
    sinceYear: 2017,
    committees: [
      { slug: 'hbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Chair' },
    ],
    previousOffices: [
      { title: 'Texas Tech University System Chancellor\'s Staff', jurisdiction: 'Texas Tech University', startDate: '2014-01-01', endDate: '2016-12-31' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Congress for TX-19' },
      { year: 2023, description: 'Named Chairman of the House Budget Committee' },
    ],
    keyVotes: [
      { title: 'Fiscal Responsibility Act — Debt Ceiling', year: 2023, month: 5, position: 'For', summary: 'As Budget Committee Chairman, was the key architect of the debt ceiling deal\'s spending caps and work requirements, negotiating the framework with the White House.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Led Budget Committee development of the reconciliation framework, setting the spending cut targets and revenue baseline that shaped the final package. Arrington argued it was the largest spending reduction in decades.' },
    ],
    keyBills: [
      { title: 'Government Accountability and Reform Act', year: 2023, month: 6, summary: 'Championed legislation creating automatic spending sequestration if Congress fails to pass individual appropriations bills, establishing fiscal discipline mechanisms through his Budget Committee chairmanship.' },
      { title: 'West Texas Agricultural Water Security Act', year: 2025, month: 3, summary: 'Introduced legislation expanding federal cost-share programs for agricultural water efficiency improvements in the Ogallala Aquifer region of West Texas, addressing declining water table that threatens the region\'s farming future.' },
    ],
  },

  {
    bioguideId: 'C001091',
    slug: 'joaquin-castro',
    name: 'Joaquin Castro',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 20,
    currentTitle: 'U.S. Representative, Texas 20th District',
    bio: 'Joaquin Castro has represented San Antonio\'s 20th District since 2013 and is the identical twin of former Housing Secretary and 2020 presidential candidate Julián Castro. He serves on the Foreign Affairs and Intelligence Committees and is a prominent Democratic voice on Latino community issues, immigration, and U.S.-Mexico relations.',
    sinceYear: 2013,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hpsci', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas State Representative', jurisdiction: 'Texas House of Representatives', startDate: '2003-01-01', endDate: '2012-12-31' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Congress while his twin Julián was serving as Mayor of San Antonio' },
    ],
    keyVotes: [
      { title: 'For U.S.-Mexico Security Partnership', year: 2023, month: 4, position: 'For', summary: 'Championed supplemental funding for U.S.-Mexico law enforcement cooperation against drug cartels, arguing cross-border cooperation is more effective than walls in addressing fentanyl trafficking.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing immigration enforcement provisions affecting San Antonio\'s immigrant community and Medicaid cuts that would harm the city\'s large uninsured population.' },
    ],
    keyBills: [
      { title: 'LIBRE Act — Immigration Reform', year: 2023, month: 5, summary: 'Co-introduced comprehensive immigration reform legislation providing a path to citizenship for DACA recipients and TPS holders, addressing the large undocumented population in San Antonio.' },
      { title: 'U.S.-Mexico Economic Partnership Act', year: 2025, month: 4, summary: 'Championed legislation strengthening USMCA implementation and expanding binational economic development in border regions, arguing the U.S.-Mexico relationship is the most important bilateral partnership in the Western Hemisphere.' },
    ],
  },

  {
    bioguideId: 'R000614',
    slug: 'chip-roy',
    name: 'Chip Roy',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 21,
    currentTitle: 'U.S. Representative, Texas 21st District',
    bio: 'Chip Roy represents the Austin-adjacent 21st District stretching from the Hill Country to San Antonio\'s suburbs. A former chief of staff to Ted Cruz and Texas Solicitor General, he is a founding member of the House Freedom Caucus and one of Congress\'s most unapologetically confrontational fiscal conservatives, regularly voting against spending bills he deems insufficiently austere.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjud', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hrules', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress for TX-21' },
      { year: 2023, description: 'Became a member of the House Rules Committee; used position to force votes on spending reforms' },
    ],
    keyVotes: [
      { title: 'Against Consolidated Appropriations Acts', year: 2022, month: 3, position: 'Against', summary: 'Voted against the $1.5 trillion omnibus appropriations bill, one of Roy\'s consistent positions opposing large consolidated spending packages that he argues prevent meaningful fiscal accountability.' },
      { title: 'Speaker McCarthy Motion to Vacate', year: 2023, month: 10, position: 'For', summary: 'Filed and voted for the motion to vacate Speaker McCarthy, arguing he broke promises on border security and spending cuts. Roy was among the most vocal advocates for removing McCarthy.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after leadership added stronger spending rescission provisions he demanded. Roy negotiated as a member of both the Freedom Caucus and Rules Committee.' },
    ],
    keyBills: [
      { title: 'One Big Beautiful Bill — Spending Cuts', year: 2025, month: 3, summary: 'Was a key negotiator in shaping the House Freedom Caucus spending cut demands incorporated into the 2025 reconciliation framework, insisting on real reductions rather than accounting maneuvers.' },
      { title: 'Stop the Invasion Act', year: 2023, month: 2, summary: 'Introduced legislation invoking the constitutional invasion clause to authorize Texas to repel the influx of migrants crossing the southern border, challenging the federal government\'s exclusive authority over immigration.' },
    ],
  },

  {
    bioguideId: 'N000026',
    slug: 'troy-nehls',
    name: 'Troy Nehls',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 22,
    currentTitle: 'U.S. Representative, Texas 22nd District',
    bio: 'Troy Nehls is a former Fort Bend County Sheriff who has represented the suburban Houston 22nd District since 2021. A vocal Trump ally, he serves on the Transportation and Infrastructure Committee and focuses on law enforcement issues, border security, and infrastructure for his rapidly growing suburban district.',
    sinceYear: 2021,
    committees: [
      { slug: 'htai', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Fort Bend County Sheriff', jurisdiction: 'Fort Bend County, Texas', startDate: '2013-01-01', endDate: '2020-12-31' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected Fort Bend County Sheriff; served two terms' },
      { year: 2020, description: 'Elected to Congress for TX-22' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Strongly supported immigration enforcement legislation, drawing on his experience as Fort Bend County Sheriff dealing with transnational gang activity in the Houston suburbs.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; negotiated Transportation provisions for the Grand Parkway and US-59 interchange improvements in Fort Bend County, among the fastest-growing in the United States.' },
    ],
    keyBills: [
      { title: 'Thin Blue Line Act', year: 2023, month: 3, summary: 'Introduced legislation providing enhanced federal protections for law enforcement officers and increasing penalties for crimes targeting police, drawing on his law enforcement career.' },
      { title: 'Fort Bend Transportation Modernization Act', year: 2025, month: 5, summary: 'Championed federal grants for highway expansion and transit improvements in Fort Bend County, which has added over 200,000 residents in the past decade.' },
    ],
  },

  {
    bioguideId: 'V000134',
    slug: 'beth-van-duyne',
    name: 'Beth Van Duyne',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 24,
    currentTitle: 'U.S. Representative, Texas 24th District',
    bio: 'Beth Van Duyne served as Mayor of Irving, Texas and as a Trump administration HUD official before winning the Dallas-Fort Worth suburban 24th District in 2020. She serves on the Ways and Means Committee and focuses on tax policy, housing, and the business-friendly policies that support the corporate headquarters economy of her North Texas district.',
    sinceYear: 2021,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Mayor of Irving, Texas', jurisdiction: 'City of Irving, Texas', startDate: '2011-01-01', endDate: '2017-12-31' },
      { title: 'Regional Administrator, HUD Region VI', jurisdiction: 'U.S. Department of Housing and Urban Development', startDate: '2017-01-01', endDate: '2020-12-31' },
    ],
    keyMilestones: [
      { year: 2010, description: 'Elected Mayor of Irving' },
      { year: 2017, description: 'Appointed HUD Region VI Administrator by President Trump' },
      { year: 2020, description: 'Elected to Congress for TX-24' },
    ],
    keyVotes: [
      { title: 'Tax Cuts and Jobs Act Extension', year: 2025, month: 5, position: 'For', summary: 'Championed making TCJA provisions permanent through Ways and Means, arguing the business tax cuts have been central to attracting corporate relocations to the Dallas-Fort Worth Metroplex.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Ways and Means provisions on business R&D expensing and the qualified opportunity zone incentives important to DFW real estate development.' },
    ],
    keyBills: [
      { title: 'Opportunity Zone Enhancement Act', year: 2023, month: 7, summary: 'Championed legislation extending and expanding Opportunity Zone tax incentives for investment in distressed communities in Dallas and Tarrant counties.' },
      { title: 'Housing Supply Improvement Act', year: 2025, month: 3, summary: 'Introduced legislation providing federal incentive grants to localities that reform zoning to allow more housing units, addressing the Dallas-Fort Worth housing affordability crisis despite rapid population growth.' },
    ],
  },

  {
    bioguideId: 'W000816',
    slug: 'roger-williams',
    name: 'Roger Williams',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 25,
    currentTitle: 'U.S. Representative, Texas 25th District',
    bio: 'Roger Williams is an auto dealer and former Texas Secretary of State who has represented the Austin-area 25th District since 2013. He chairs the House Small Business Committee and focuses on reducing regulatory burdens, supporting small businesses, and tax policy for the growing Austin technology and healthcare economy.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsmbu', name: 'House Committee on Small Business', chamber: 'House', role: 'Chair' },
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas Secretary of State', jurisdiction: 'State of Texas', startDate: '2004-01-01', endDate: '2007-12-31' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Congress for TX-25' },
      { year: 2023, description: 'Named Chairman of the House Small Business Committee' },
    ],
    keyVotes: [
      { title: 'SECURE Small Business Loans Act', year: 2023, month: 7, position: 'For', summary: 'Championed legislation reducing regulatory barriers for SBA 7(a) and 504 loans through his Small Business Committee chairmanship, making capital more accessible to Texas entrepreneurs.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package including Small Business Committee provisions expanding access to capital deductions and reducing Federal compliance costs for small businesses.' },
    ],
    keyBills: [
      { title: 'Main Street Tax Certainty Act', year: 2023, month: 4, summary: 'Introduced legislation making permanent the 20% pass-through deduction from the TCJA, which Williams argued is the most significant small business tax relief in decades.' },
      { title: 'Small Business Regulatory Fairness Act', year: 2025, month: 3, summary: 'Championed legislation requiring agencies to publish small business regulatory impacts at least 90 days before implementation, ensuring small businesses have time to adapt to new compliance requirements.' },
    ],
  },

  {
    bioguideId: 'G000603',
    slug: 'brandon-gill',
    name: 'Brandon Gill',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 26,
    currentTitle: 'U.S. Representative, Texas 26th District',
    bio: 'Brandon Gill is a former attorney who won the Denton County-area 26th District in 2024, succeeding retiring incumbent Michael Burgess. One of the youngest members of the 119th Congress, he serves on the Oversight Committee and focuses on government accountability, border security, and supporting the aerospace and defense employers in his fast-growing suburban district.',
    sinceYear: 2025,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2024, description: 'Elected to Congress for TX-26 at 28 years old' },
    ],
    keyVotes: [
      { title: 'Laken Riley Act', year: 2025, month: 1, position: 'For', summary: 'Voted for the Laken Riley Act as one of his first congressional votes, consistent with the strong border security views of Denton County.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; pushed through Oversight Committee provisions requiring audits of federal programs funded through the Inflation Reduction Act.' },
    ],
    keyBills: [
      { title: 'DOGE Accountability Act', year: 2025, month: 4, summary: 'Introduced legislation requiring DOGE (Department of Government Efficiency) to publish detailed public reporting of all federal contracts canceled, workers terminated, and savings identified, ensuring public transparency for spending reform.' },
      { title: 'Denton County Defense Corridor Act', year: 2025, month: 7, summary: 'Championed federal workforce training grants for the aerospace and defense manufacturing companies in the Dallas-Fort Worth Alliance corridor in his district.' },
    ],
  },

  {
    bioguideId: 'C001115',
    slug: 'michael-cloud',
    name: 'Michael Cloud',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 27,
    currentTitle: 'U.S. Representative, Texas 27th District',
    bio: 'Michael Cloud has represented the Corpus Christi-area 27th District since 2018 and serves on the Energy and Commerce Committee. He focuses on energy production from the Eagle Ford Shale and offshore Gulf operations, border security, and limited government. A Freedom Caucus member, he regularly opposes large spending packages.',
    sinceYear: 2018,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Won special election for TX-27, filling the seat vacated by Blake Farenthold\'s resignation' },
    ],
    keyVotes: [
      { title: 'Against Infrastructure Investment and Jobs Act', year: 2021, month: 11, position: 'Against', summary: 'Voted against the bipartisan infrastructure law, arguing it represented excessive spending and would expand federal involvement in areas that should be left to states and the private sector.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package after Energy and Commerce provisions deregulating offshore oil and gas production were included — a top priority for Corpus Christi\'s energy economy.' },
    ],
    keyBills: [
      { title: 'Eagle Ford Energy Freedom Act', year: 2023, month: 5, summary: 'Introduced legislation streamlining permitting for Eagle Ford Shale operations and offshore Gulf of Mexico energy production, arguing regulatory delays cost Texas jobs and reduce domestic energy supply.' },
      { title: 'Port of Corpus Christi Export Expansion Act', year: 2025, month: 4, summary: 'Championed dredging authorization and infrastructure investment for the Port of Corpus Christi, the nation\'s third-largest port by tonnage and a critical export gateway for Texas energy.' },
    ],
  },

  {
    bioguideId: 'C001063',
    slug: 'henry-cuellar',
    name: 'Henry Cuellar',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 28,
    currentTitle: 'U.S. Representative, Texas 28th District',
    bio: 'Henry Cuellar has represented the Laredo-area 28th District since 2005 and is one of the most conservative Democrats in the House, having narrowly survived a progressive primary challenge from Jessica Cisneros twice. He sits on the Appropriations Committee and focuses on border trade, binational economic development, and bipartisan compromise on immigration enforcement.',
    sinceYear: 2005,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas Secretary of State', jurisdiction: 'State of Texas', startDate: '1999-01-01', endDate: '2000-12-31' },
    ],
    keyMilestones: [
      { year: 2004, description: 'Elected to Congress' },
      { year: 2024, description: 'Indicted on federal bribery charges; continued to seek re-election and won' },
    ],
    keyVotes: [
      { title: 'Bipartisan Border Security Act', year: 2024, month: 2, position: 'For', summary: 'One of the lead Democratic negotiators and supporters of the Senate bipartisan border deal, arguing effective border management requires both enforcement and legal pathway reform.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the Republican reconciliation package, arguing the border security provisions went too far in criminalizing asylum while the Medicaid cuts would harm Laredo\'s predominantly low-income, uninsured population.' },
    ],
    keyBills: [
      { title: 'Laredo International Trade Corridor Act', year: 2023, month: 6, summary: 'Championed legislation expanding the Laredo port of entry, the busiest land port in the Western Hemisphere, processing over $300 billion in annual trade — much of it Texas manufacturing supply chain goods.' },
      { title: 'Southern Border Security Technology Act', year: 2025, month: 4, summary: 'Introduced bipartisan legislation funding surveillance technology, sensor networks, and AI-driven monitoring at the southern border as an alternative to physical wall construction.' },
    ],
  },

  {
    bioguideId: 'G000587',
    slug: 'sylvia-garcia',
    name: 'Sylvia Garcia',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 29,
    currentTitle: 'U.S. Representative, Texas 29th District',
    bio: 'Sylvia Garcia has represented the Northeast Houston 29th District since 2019 and previously served as a Harris County Commissioner and Texas State Senator. She serves on the Financial Services Committee and focuses on consumer financial protection, affordable housing, and economic justice for the predominantly Latino working-class communities in her district.',
    sinceYear: 2019,
    committees: [
      { slug: 'hjfs', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas State Senator', jurisdiction: 'Texas State Senate', startDate: '2013-01-01', endDate: '2018-12-31' },
      { title: 'Harris County Commissioner', jurisdiction: 'Harris County', startDate: '2003-01-01', endDate: '2012-12-31' },
    ],
    keyMilestones: [
      { year: 2018, description: 'Elected to Congress for TX-29' },
    ],
    keyVotes: [
      { title: 'Against Rollback of CFPB Authority', year: 2023, month: 6, position: 'Against', summary: 'Opposed legislation weakening the Consumer Financial Protection Bureau\'s authority over payday lenders and debt collectors, arguing these protections are vital for working-class Latino families in her district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to Medicaid that would harm her constituents and rollbacks of CFPB consumer protection enforcement she has championed on Financial Services.' },
    ],
    keyBills: [
      { title: 'Predatory Loan Prevention Act', year: 2023, month: 4, summary: 'Introduced legislation capping payday and installment loan interest rates at 36% annually, protecting the working-class communities in TX-29 from high-cost short-term lending.' },
      { title: 'Affordable Housing Investment Act', year: 2025, month: 5, summary: 'Championed legislation expanding the Low-Income Housing Tax Credit and Community Development Block Grants for Houston-area affordable housing construction and preservation.' },
    ],
  },

  {
    bioguideId: 'C001130',
    slug: 'jasmine-crockett',
    name: 'Jasmine Crockett',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 30,
    currentTitle: 'U.S. Representative, Texas 30th District',
    bio: 'Jasmine Crockett has represented Dallas\'s 30th District since 2023, succeeding Eddie Bernice Johnson. A civil rights attorney and former Texas state representative, she serves on the Oversight Committee and the House Agriculture Committee, and has become one of the most prominent progressive voices in the Texas Democratic delegation and a frequent viral presence in committee hearings.',
    sinceYear: 2023,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas State Representative', jurisdiction: 'Texas House of Representatives', startDate: '2021-01-01', endDate: '2022-12-31' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress for TX-30' },
    ],
    keyVotes: [
      { title: 'Voting Rights Advancement Act', year: 2023, month: 6, position: 'For', summary: 'Championed the Voting Rights Advancement Act, which would restore and expand preclearance requirements for states with histories of voting discrimination, a cause central to her civil rights background.' },
      { title: 'Against DOGE Workforce Reductions', year: 2025, month: 3, position: 'Against', summary: 'Became one of the most vocal Oversight Committee critics of DOGE-driven federal workforce cuts, using congressional hearings as platforms for pointed cross-examination that went viral across social media.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to SNAP nutrition benefits she argued would harm food-insecure families in Dallas and the agricultural workers in her Agriculture Committee portfolio.' },
    ],
    keyBills: [
      { title: 'Ending Prison Gerrymandering Act', year: 2023, month: 5, summary: 'Introduced legislation requiring the Census Bureau to count incarcerated people at their last known home address rather than the prison location, addressing a practice that inflates rural Republican districts at the expense of urban communities of color.' },
      { title: 'Farm to Family Nutrition Act', year: 2025, month: 4, summary: 'Championed legislation expanding SNAP benefit amounts and simplifying recertification processes, working through her Agriculture Committee assignment to protect nutrition programs for low-income Dallas families.' },
    ],
  },

  {
    bioguideId: 'C001051',
    slug: 'john-carter',
    name: 'John Carter',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 31,
    currentTitle: 'U.S. Representative, Texas 31st District',
    bio: 'John Carter has represented the Killeen-area 31st District since 2003 and sits on the Appropriations Committee, where he serves on the Defense Subcommittee. His district is home to Fort Cavazos (formerly Fort Hood), the largest active duty military post in the Western world, making military funding and veteran support his central priorities.',
    sinceYear: 2003,
    committees: [
      { slug: 'hap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2002, description: 'Elected to Congress for TX-31' },
    ],
    keyVotes: [
      { title: 'Defense Appropriations — Fort Cavazos Funding', year: 2024, month: 7, position: 'For', summary: 'Secured military construction and facilities investment for Fort Cavazos through the Appropriations Defense Subcommittee, maintaining the post\'s status as the largest military installation in the Western Hemisphere.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; leveraged his Appropriations position to protect defense construction and military family housing funding at Fort Cavazos and other Central Texas installations.' },
    ],
    keyBills: [
      { title: 'Fort Cavazos Transformation Act', year: 2023, month: 7, summary: 'Championed legislation and Appropriations earmarks for infrastructure improvements at Fort Cavazos following the renaming from Fort Hood, including modernized training facilities and family housing renovations.' },
      { title: 'Killeen-Temple Transportation Corridor Act', year: 2025, month: 5, summary: 'Introduced legislation for federal transportation investment along the US-190 corridor between Killeen and Temple, addressing severe traffic congestion caused by Fort Cavazos and Baylor Scott & White health system growth.' },
    ],
  },

  {
    bioguideId: 'J000310',
    slug: 'julie-johnson',
    name: 'Julie Johnson',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 32,
    currentTitle: 'U.S. Representative, Texas 32nd District',
    bio: 'Julie Johnson is a former Texas state representative and trial attorney who won the suburban Dallas 32nd District in 2024, flipping a seat held by Republicans since 2003. The first openly LGBTQ member elected to Congress from Texas, she serves on the Armed Services and Small Business Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsmbu', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas State Representative', jurisdiction: 'Texas House of Representatives', startDate: '2018-01-01', endDate: '2024-12-31' },
    ],
    keyMilestones: [
      { year: 2017, description: 'Elected to Texas House of Representatives' },
      { year: 2024, description: 'Elected to Congress for TX-32, first openly LGBTQ member of Congress from Texas' },
    ],
    keyVotes: [
      { title: 'Against LGBTQ Discrimination in Military', year: 2025, month: 3, position: 'Against', summary: 'Opposed executive actions reinstating policies restricting transgender military service, arguing they harm combat-ready service members and violate the non-discrimination principle.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing Medicaid cuts affecting Dallas-area families and Small Business provisions she argued would disadvantage small business owners who rely on healthcare marketplace plans.' },
    ],
    keyBills: [
      { title: 'LGBTQ Business Equal Access Act', year: 2025, month: 4, summary: 'Introduced legislation prohibiting discrimination against LGBTQ-owned businesses in SBA loan programs and federal contracting, building on her Texas state legislative experience.' },
      { title: 'North Texas Defense Innovation Act', year: 2025, month: 7, summary: 'Championed legislation expanding defense technology research partnerships with University of Texas at Dallas and Southern Methodist University, supporting the growing defense-tech sector in her suburban Dallas district.' },
    ],
  },

  {
    bioguideId: 'V000131',
    slug: 'marc-veasey',
    name: 'Marc Veasey',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 33,
    currentTitle: 'U.S. Representative, Texas 33rd District',
    bio: 'Marc Veasey has represented the Fort Worth-area 33rd District since 2013 and is a co-chair of the Congressional Voting Rights Caucus. A former Texas state representative, he serves on the Armed Services Committee and focuses on voting rights, defense manufacturing, and the economic needs of the diverse working-class communities in his district.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsar', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2012, description: 'Elected to Congress for the newly drawn TX-33' },
    ],
    keyVotes: [
      { title: 'John Lewis Voting Rights Advancement Act', year: 2021, month: 8, position: 'For', summary: 'Led advocacy for the John Lewis Voting Rights Advancement Act, co-authoring the legislation as co-chair of the Voting Rights Caucus.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to community development programs and the rollback of Lockheed F-35 workforce protections he has championed on Armed Services.' },
    ],
    keyBills: [
      { title: 'Voting Rights Advancement Act', year: 2023, month: 3, summary: 'Co-introduced legislation restoring the Voting Rights Act\'s preclearance formula for states with recent voting discrimination histories, a cause he has led since the Supreme Court\'s Shelby County decision.' },
      { title: 'Fort Worth Defense Manufacturing Revitalization Act', year: 2025, month: 4, summary: 'Championed federal workforce training grants for defense manufacturing apprenticeships at Lockheed Martin and Bell Textron facilities in Fort Worth.' },
    ],
  },

  {
    bioguideId: 'G000581',
    slug: 'vicente-gonzalez',
    name: 'Vicente Gonzalez',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 34,
    currentTitle: 'U.S. Representative, Texas 34th District',
    bio: 'Vicente Gonzalez represents the Rio Grande Valley 34th District, one of the most heavily Hispanic districts in the United States. He serves on the Foreign Affairs Committee and focuses on U.S.-Mexico trade, agricultural policy for South Texas farming communities, and immigration reform.',
    sinceYear: 2017,
    committees: [
      { slug: 'hfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2016, description: 'Elected to Congress for TX-15; moved to TX-34 after redistricting' },
    ],
    keyVotes: [
      { title: 'Bipartisan Border Security Act', year: 2024, month: 2, position: 'For', summary: 'Supported the Senate bipartisan border deal, arguing the Rio Grande Valley needs practical enforcement solutions that also provide legal pathways for the agricultural workers and asylum seekers crossing his district.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, opposing cuts to SNAP and Medicaid that his South Texas border district relies on heavily and agricultural program reductions affecting Valley farmers.' },
    ],
    keyBills: [
      { title: 'Rio Grande Valley Water Security Act', year: 2023, month: 7, summary: 'Introduced legislation protecting South Texas water rights and expanding water recycling infrastructure in the Rio Grande Valley, addressing chronic water supply challenges for the region\'s agriculture.' },
      { title: 'South Texas Trade Facilitation Act', year: 2025, month: 5, summary: 'Championed legislation expanding Border Patrol agricultural inspection capacity and pre-clearance programs at Valley ports of entry, facilitating faster movement of produce and manufactured goods.' },
    ],
  },

  {
    bioguideId: 'C001131',
    slug: 'greg-casar',
    name: 'Greg Casar',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 35,
    currentTitle: 'U.S. Representative, Texas 35th District',
    bio: 'Greg Casar won the Austin-to-San Antonio 35th District in 2022 and is one of the most progressive members of the House freshman class. A former Austin City Council member who championed the $15 minimum wage and worker protections, he serves on the Oversight Committee and Natural Resources Committee and focuses on labor rights, climate, and housing affordability.',
    sinceYear: 2023,
    committees: [
      { slug: 'hov', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hnr', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Austin City Council Member', jurisdiction: 'City of Austin', startDate: '2015-01-01', endDate: '2022-12-31' },
    ],
    keyMilestones: [
      { year: 2014, description: 'Elected Austin City Council Member at 25; championed $15 minimum wage' },
      { year: 2022, description: 'Elected to Congress for TX-35' },
    ],
    keyVotes: [
      { title: 'THRIVE Act — Labor Rights', year: 2023, month: 4, position: 'For', summary: 'Championed labor rights legislation protecting collective bargaining rights and expanding union organizing protections, building on his city council minimum wage work.' },
      { title: 'Housing is a Human Right Act', year: 2024, month: 9, position: 'For', summary: 'Co-introduced legislation establishing a federal right to housing and creating emergency rental assistance for families at imminent risk of eviction.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Organized House progressive opposition to the reconciliation package, leading Oversight Committee resistance to DOGE accountability rollbacks and Medicaid cuts.' },
    ],
    keyBills: [
      { title: 'PRO Act Expansion', year: 2023, month: 5, summary: 'Co-championed the Protecting the Right to Organize Act expanding federal protections for union organizing, card check elections, and banning right-to-work state preemption of federal labor law.' },
      { title: 'Public Lands Climate Resilience Act', year: 2025, month: 3, summary: 'Introduced legislation through his Natural Resources assignment expanding federal drought planning and wildfire resilience investment in Central Texas public lands.' },
    ],
  },

  {
    bioguideId: 'B001291',
    slug: 'brian-babin',
    name: 'Brian Babin',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 36,
    currentTitle: 'U.S. Representative, Texas 36th District',
    bio: 'Brian Babin is a dentist and former Woodville city councilman who has represented the Southeast Texas 36th District since 2015. He chairs the House Science, Space, and Technology Committee and focuses on space exploration policy, energy production, and transportation for his Gulf Coast and inland Southeast Texas district.',
    sinceYear: 2015,
    committees: [
      { slug: 'hst', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Chair' },
    ],
    keyMilestones: [
      { year: 2014, description: 'Elected to Congress for TX-36' },
      { year: 2023, description: 'Named Chairman of the House Science, Space, and Technology Committee' },
    ],
    keyVotes: [
      { title: 'NASA Authorization Act 2025', year: 2025, month: 6, position: 'For', summary: 'Led Science Committee markup of NASA reauthorization, including provisions protecting the Artemis lunar program and commercial crew partnerships with Johnson Space Center contractors.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; worked through Science Committee to maintain NASA mission funding and research investment at Texas universities.' },
    ],
    keyBills: [
      { title: 'American Science and Innovation Act', year: 2023, month: 7, summary: 'Championed comprehensive science funding authorization through his committee, increasing funding for STEM education, DOE national laboratories, and NIST advanced manufacturing research.' },
      { title: 'Space Commerce Acceleration Act', year: 2025, month: 4, summary: 'Introduced legislation through his Science Committee chairmanship streamlining FAA commercial space launch licensing and creating a federal framework for space traffic management.' },
    ],
  },

  {
    bioguideId: 'D000399',
    slug: 'lloyd-doggett',
    name: 'Lloyd Doggett',
    party: 'D',
    chamber: 'House',
    state: 'Texas',
    district: 37,
    currentTitle: 'U.S. Representative, Texas 37th District',
    bio: 'Lloyd Doggett is one of the most senior Democrats in the House, having served in Congress since 1995 after serving on the Texas Supreme Court. He serves on the Ways and Means Committee and has been a leading progressive voice on tax policy, healthcare, drug pricing reform, and immigration. He was also the first senior Democrat to publicly call on President Biden to withdraw from the 2024 presidential race.',
    sinceYear: 1995,
    committees: [
      { slug: 'hwm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    previousOffices: [
      { title: 'Texas Supreme Court Justice', jurisdiction: 'Texas Supreme Court', startDate: '1989-01-01', endDate: '1994-12-31' },
      { title: 'Texas State Senator', jurisdiction: 'Texas State Senate', startDate: '1973-01-01', endDate: '1985-12-31' },
    ],
    keyMilestones: [
      { year: 1972, description: 'Elected to Texas State Senate at 26 years old' },
      { year: 1988, description: 'Elected to Texas Supreme Court' },
      { year: 1994, description: 'Elected to U.S. Congress' },
      { year: 2024, description: 'First senior Democrat to publicly call for President Biden to withdraw from the presidential race' },
    ],
    keyVotes: [
      { title: 'Inflation Reduction Act — Drug Pricing', year: 2022, month: 8, position: 'For', summary: 'Championed the IRA provisions allowing Medicare to negotiate drug prices, a cause he has pursued for 20 years on the Ways and Means Committee. Called the provisions "a down payment" on the broader drug pricing reforms he seeks.' },
      { title: 'For Biden Withdrawal — Informal Advocacy', year: 2024, month: 7, position: 'For', summary: 'Became the first sitting senior House Democrat to publicly call for President Biden to step aside, catalyzing a cascade of similar statements that ultimately led to Biden\'s withdrawal from the 2024 race.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'Against', summary: 'Voted against the reconciliation package, arguing the Medicaid cuts would leave millions of Texans uninsured and the tax provisions would benefit the wealthy at the expense of working families.' },
    ],
    keyBills: [
      { title: 'Medicare Drug Price Negotiation Expansion Act', year: 2023, month: 6, summary: 'Introduced legislation expanding the Medicare drug price negotiation authorized in the Inflation Reduction Act to cover more drugs faster and extend the benefit to private insurance plans.' },
      { title: 'No Tax Breaks for Outsourcing Act', year: 2025, month: 3, summary: 'Championed legislation through Ways and Means closing corporate tax loopholes that incentivize moving jobs and profits offshore, building on his decades of tax fairness advocacy.' },
    ],
  },

  {
    bioguideId: 'H001095',
    slug: 'wesley-hunt',
    name: 'Wesley Hunt',
    party: 'R',
    chamber: 'House',
    state: 'Texas',
    district: 38,
    currentTitle: 'U.S. Representative, Texas 38th District',
    bio: 'Wesley Hunt is a West Point graduate, Army Apache helicopter pilot, and oil industry executive who won the newly drawn 38th District in 2022. He serves on the Energy and Commerce and Intelligence Committees and has emerged as a rising Republican star focused on energy independence, China competition, and veterans issues.',
    sinceYear: 2023,
    committees: [
      { slug: 'hec', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
      { slug: 'hpsci', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    keyMilestones: [
      { year: 2022, description: 'Elected to Congress for the newly created TX-38 in the Houston suburbs' },
    ],
    keyVotes: [
      { title: 'American Energy Dominance Act', year: 2023, month: 7, position: 'For', summary: 'Championed legislation rolling back Biden-era energy restrictions, arguing American energy dominance is both an economic and national security imperative.' },
      { title: 'NDAA FY2026', year: 2025, month: 12, position: 'For', summary: 'Supported the defense authorization act, championing through his Intelligence Committee role expanded signals intelligence and cyber capabilities for countering Chinese espionage.' },
      { title: 'FY2026 Budget Reconciliation', year: 2026, month: 4, position: 'For', summary: 'Voted for the reconciliation package; used his Energy and Commerce seat to advance natural gas infrastructure deregulation and protect Houston-area LNG producers from new environmental requirements.' },
    ],
    keyBills: [
      { title: 'Restricting Chinese Access to American Energy Infrastructure Act', year: 2023, month: 8, summary: 'Introduced legislation prohibiting Chinese government-linked entities from acquiring stakes in U.S. energy infrastructure, including pipelines, refineries, and LNG terminals.' },
      { title: 'Veterans Innovation and Technology Act', year: 2025, month: 4, summary: 'Championed legislation providing VA access to private-sector technology partnerships for AI-driven mental health screening and adaptive rehabilitation technology for combat veterans.' },
    ],
  },
]

export const txDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

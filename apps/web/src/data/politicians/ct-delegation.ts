import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001277',
    slug: 'richard-blumenthal',
    name: 'Richard Blumenthal',
    party: 'D',
    chamber: 'Senate',
    state: 'Connecticut',
    currentTitle: 'U.S. Senator from Connecticut',
    bio: 'Richard Blumenthal has represented Connecticut in the U.S. Senate since 2011, following twenty years as the state\'s Attorney General. A Yale-educated lawyer and Vietnam-era veteran, he serves as Ranking Member of the Senate Veterans\' Affairs Committee and is a member of the Armed Services and Homeland Security Committees. Blumenthal has been a leading voice on veterans\' healthcare, consumer protection, gun safety, and antitrust enforcement, drawing on his AG background to pursue aggressive corporate accountability.',
    sinceYear: 2011,
    committees: [
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'scnc', name: 'United States Senate Caucus on International Narcotics Control', chamber: 'Senate', role: 'Member' },
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'PACT Act — Toxic Exposure Veterans Compensation',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the PACT Act, the largest expansion of VA healthcare eligibility in decades, extending benefits to veterans exposed to burn pits and other toxic substances. As a senior member of the Veterans\' Affairs Committee, Blumenthal was instrumental in moving the legislation — particularly after a high-profile procedural failure that temporarily collapsed the bill\'s prospects in July 2022.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the first significant federal gun safety legislation in nearly thirty years. Blumenthal, who represents the state where the Sandy Hook Elementary School massacre occurred, has been one of the Senate\'s most persistent advocates for gun violence prevention and viewed the bill as a necessary first step, though he argued for stronger measures.',
      },
      {
        title: 'American Innovation and Choice Online Act',
        year: 2022,
        month: 4,
        position: 'For',
        summary: 'Supported bipartisan antitrust legislation targeting anti-competitive practices by major technology platforms, drawing on his twenty-year record as Connecticut\'s Attorney General challenging corporate misconduct. Blumenthal has been one of the Senate\'s leading advocates for stronger tech regulation and has used his Judiciary and Commerce assignments to advance digital consumer protection.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that its Medicaid cuts and VA healthcare funding reductions would harm Connecticut\'s veterans and low-income residents who depend on those programs. As Ranking Member of the Senate Veterans\' Affairs Committee, Blumenthal raised particular alarm about provisions he argued would degrade care for the tens of thousands of Connecticut veterans who rely on VA services.',
      },
    ],
    keyBills: [
      {
        title: 'KIDS Online Safety Act',
        year: 2023,
        month: 7,
        summary: 'Co-authored landmark legislation establishing duty-of-care requirements for online platforms used by minors, mandating privacy protections, restricting addictive design features, and requiring age verification. Blumenthal championed the bill as a direct response to evidence that social media algorithms and features are contributing to the mental health crisis among American teenagers.',
      },
      {
        title: 'No FAKES Act — Artificial Intelligence and Likeness Protection',
        year: 2023,
        month: 10,
        summary: 'Co-authored legislation creating a federal right of publicity protecting individuals from unauthorized use of their likeness, voice, or image in AI-generated content. Blumenthal framed the bill as essential consumer protection for the AI era, preventing deepfake manipulation of public figures and private individuals alike.',
      },
    ],
  },

  {
    bioguideId: 'M001169',
    slug: 'christopher-murphy',
    name: 'Christopher Murphy',
    party: 'D',
    chamber: 'Senate',
    state: 'Connecticut',
    currentTitle: 'U.S. Senator from Connecticut',
    bio: 'Christopher Murphy has represented Connecticut in the U.S. Senate since 2013, having previously served three terms in the House. He is a member of the Foreign Relations, Health, Education, Labor, and Pensions, and Appropriations Committees. Murphy became the Senate\'s leading advocate for gun violence prevention legislation following the Sandy Hook massacre — which occurred in his former congressional district — and brokered the bipartisan Safer Communities Act in 2022. He is also a prominent voice on foreign policy, particularly opposing U.S. military support for the Saudi-led war in Yemen.',
    sinceYear: 2007,
    committees: [
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Murphy was the Senate\'s lead Democratic negotiator of the Bipartisan Safer Communities Act, spending weeks in intense closed-door negotiations with Republican Senators Cornyn, Collins, and others. His persistence — including a 15-hour Senate floor speech following the Uvalde massacre — was widely credited with creating the political momentum necessary to break a decades-long Senate impasse on gun legislation.',
      },
      {
        title: 'War Powers Resolution — Yemen',
        year: 2019,
        month: 4,
        position: 'For',
        summary: 'Co-sponsored the War Powers Resolution directing the President to cease U.S. military involvement in the Saudi-led war in Yemen without congressional authorization. Murphy has been the Senate\'s most persistent critic of the U.S.-Saudi relationship and the Yemen war, arguing the conflict has created catastrophic humanitarian conditions and that U.S. involvement requires explicit congressional approval.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its healthcare provisions including the Medicare drug price negotiation authority and the cap on out-of-pocket drug costs for Medicare beneficiaries. Murphy has been a consistent advocate for pharmaceutical price reform and used his HELP Committee assignment to push for strong drug pricing provisions.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, calling its Medicaid cuts and clean energy rollbacks a "catastrophe" for Connecticut families and the state\'s economy. As a member of the Senate HELP and Appropriations Committees, Murphy specifically condemned the bill\'s reductions to mental health funding and community health center support that he has championed for years as part of his gun violence prevention agenda.',
      },
    ],
    keyBills: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        summary: 'Murphy was the principal Democratic author and negotiator of the Bipartisan Safer Communities Act, the first significant federal gun safety legislation since 1994. The law enhanced background checks for buyers under 21, funded crisis intervention programs, closed the "boyfriend loophole" in domestic violence firearms restrictions, and incentivized state red flag laws — the result of Murphy\'s years of advocacy following the Sandy Hook massacre in Newtown, Connecticut.',
      },
      {
        title: 'Mental Health Reform Act',
        year: 2023,
        month: 6,
        summary: 'Introduced comprehensive mental health legislation through the HELP Committee expanding crisis response infrastructure, increasing community mental health center funding, and strengthening parity enforcement requiring insurers to cover mental health care equally to physical health. Murphy has consistently linked gun violence prevention to mental health system failures and advocates for treating both as public health emergencies.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'L000557',
    slug: 'john-b-larson',
    name: 'John B. Larson',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Connecticut',
    currentTitle: 'U.S. Representative, Connecticut 1st District',
    bio: 'John B. Larson has represented Connecticut\'s 1st Congressional District — covering Hartford — since 1999 and is the longest-serving member of Connecticut\'s House delegation. A former state senator who rose to Democratic Caucus Chair in the House, he sits on the Ways and Means Committee where he has championed Social Security expansion and tax equity. Larson\'s Hartford district is one of the poorest cities in New England and he has focused on urban revitalization, healthcare access, and workforce development throughout his tenure.',
    sinceYear: 1999,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, citing Hartford\'s need for direct payments, enhanced unemployment benefits, and emergency aid for Connecticut\'s hardest-hit communities. The bill\'s expanded Child Tax Credit was of particular importance to Hartford, where child poverty rates are among the highest in New England.',
      },
      {
        title: 'Affordable Care Act — Passage',
        year: 2010,
        month: 3,
        position: 'For',
        summary: 'As House Democratic Caucus Chair, Larson was instrumental in managing the political dynamics of the ACA\'s passage, whipping votes within the caucus and communicating the bill\'s benefits to the public. He has consistently been a champion of universal healthcare coverage and uses his Ways and Means seat to defend and expand the ACA\'s coverage provisions.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing the Medicaid cuts would harm Hartford\'s poorest residents who depend on the program for healthcare. Larson has been a persistent opponent of any Medicaid restructuring and used his Ways and Means platform to highlight the bill\'s projected coverage losses for Connecticut families.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid cuts and Social Security administrative reductions would devastate Hartford\'s low-income residents — among the poorest in New England — who depend on those programs for basic healthcare and retirement security. As a Ways and Means Committee member and the principal House champion of Social Security expansion, Larson condemned what he called the bill\'s systematic dismantling of the safety net to finance tax cuts for the wealthy.',
      },
    ],
    keyBills: [
      {
        title: 'Social Security 2100 Act',
        year: 2023,
        month: 1,
        summary: 'Introduced the Social Security 2100 Act, comprehensive legislation expanding Social Security benefits — including a 2% across-the-board benefit increase — and extending solvency for 75 years by raising the payroll tax cap. Larson has championed Social Security expansion as his signature legislative priority and has introduced the bill in multiple Congresses, arguing it is essential for middle-class retirement security.',
      },
      {
        title: 'Telehealth Extension and Expansion Act',
        year: 2022,
        month: 3,
        summary: 'Used his Ways and Means seat to champion permanent extension of pandemic-era Medicare telehealth flexibilities, which dramatically expanded access to mental health and specialist care in Connecticut\'s underserved urban and rural communities. Larson argued telehealth had transformed healthcare access for Hartford\'s low-income patients and that allowing the temporary provisions to expire would create immediate coverage gaps.',
      },
    ],
  },

  {
    bioguideId: 'C001069',
    slug: 'joe-courtney',
    name: 'Joe Courtney',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Connecticut',
    currentTitle: 'U.S. Representative, Connecticut 2nd District',
    bio: 'Joe Courtney has represented Connecticut\'s 2nd Congressional District — covering eastern Connecticut including New London and Groton — since 2007. He sits on the Armed Services and Education and Workforce Committees and is the leading congressional champion of the submarine industrial base, which is centered in his district at the Electric Boat shipyard in Groton — the nation\'s primary builder of nuclear submarines. Courtney has secured billions in submarine construction funding and is instrumental in the AUKUS agreement\'s submarine technology provisions.',
    sinceYear: 2007,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024 — Submarine Provisions',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, which included historic investments in submarine construction capacity at Electric Boat in Groton. Courtney negotiated provisions accelerating Virginia-class submarine production and funding expansion of shipyard infrastructure, reflecting the strategic priority of submarine dominance in the AUKUS alliance framework.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS Act, supporting its defense-related semiconductor manufacturing provisions and naval electronics supply chain investments. Courtney argued Connecticut\'s submarine manufacturing supply chain depends on domestic semiconductor production and that the bill\'s defense microelectronics provisions would directly benefit Electric Boat\'s component suppliers.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing the education funding cuts would harm Connecticut\'s community college workforce training programs and the Medicaid reductions would affect working families in eastern Connecticut\'s manufacturing communities. He objected to reductions in apprenticeship and career training funding that support the skilled trades pipeline for the submarine industry.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that its education and workforce training cuts would undermine the pipeline of skilled workers that Electric Boat\'s submarine expansion in Groton depends on. As a senior Armed Services Committee member representing the home of the nation\'s primary nuclear submarine builder, Courtney also flagged concerns that the bill\'s broader fiscal path could destabilize defense procurement budgets critical to the 2nd District\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Submarine Industrial Base Expansion legislation',
        year: 2023,
        month: 5,
        summary: 'Led congressional efforts to secure funding for Electric Boat workforce expansion and physical plant modernization in support of increased Virginia-class and Columbia-class submarine production rates. Courtney has championed the submarine industrial base as both a national security necessity and an economic anchor for eastern Connecticut, working on both sides of the aisle to maintain bipartisan support for submarine funding.',
      },
      {
        title: 'AUKUS Implementation legislation — Submarine Technology Transfer',
        year: 2023,
        month: 3,
        summary: 'Championed legislation enabling the submarine technology transfer provisions of the AUKUS partnership, which would see Australia purchase Virginia-class submarines built at Electric Boat and receive U.S. nuclear propulsion technology. Courtney argued the arrangement would simultaneously strengthen the alliance, create jobs in Groton, and sustain the submarine industrial base through increased production volume.',
      },
    ],
  },

  {
    bioguideId: 'D000216',
    slug: 'rosa-l-delauro',
    name: 'Rosa L. DeLauro',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Connecticut',
    currentTitle: 'U.S. Representative, Connecticut 3rd District',
    bio: 'Rosa L. DeLauro has represented Connecticut\'s 3rd Congressional District — covering New Haven and the shoreline — since 1991 and is the Ranking Member of the House Committee on Appropriations. One of the most powerful members of the House, she has used her Appropriations position to advocate for nutrition programs, healthcare access, and worker protections throughout her career. DeLauro is a leading champion of the Child Tax Credit, having authored the expanded version included in the American Rescue Plan, and has fought for decades to increase the minimum wage and strengthen food safety oversight.',
    sinceYear: 1991,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Ranking Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act — Child Tax Credit',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the American Rescue Plan, which included DeLauro\'s landmark expansion of the Child Tax Credit to $3,000 per child ($3,600 for children under 6) and made it fully refundable. The expanded CTC cut child poverty nearly in half during 2021 and DeLauro called it the most significant anti-poverty legislation for children since the creation of Medicaid.',
      },
      {
        title: 'Against One Big Beautiful Bill — Appropriations Ranking Member',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'As Appropriations Ranking Member, DeLauro led House Democratic opposition to the Republican reconciliation bill, publishing detailed analyses of how the Medicaid cuts, SNAP reductions, and discretionary spending decreases would harm Connecticut communities. She argued the bill dismantled the safety net to fund tax cuts that primarily benefited the ultra-wealthy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'As Appropriations Ranking Member, DeLauro led House Democratic opposition to the FY2026 budget reconciliation bill, releasing detailed state-by-state analyses showing the Medicaid and SNAP cuts would strip food and healthcare coverage from tens of thousands of New Haven-area residents. She was particularly outspoken against the bill\'s elimination of the expanded Child Tax Credit provisions she has championed since their 2021 enactment, calling it a direct assault on families who had finally been lifted out of poverty.',
      },
      {
        title: 'Inflation Reduction Act — Nutrition Provisions',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its healthcare and energy provisions and arguing for their complementarity with her longstanding nutrition and food safety priorities. DeLauro has consistently linked food security, healthcare access, and economic opportunity as interconnected pillars of family wellbeing.',
      },
    ],
    keyBills: [
      {
        title: 'Child Tax Credit Expansion — American Rescue Plan provisions',
        year: 2021,
        month: 3,
        summary: 'DeLauro was the primary House author of the expanded Child Tax Credit included in the American Rescue Plan, a reform she had championed for nearly two decades. The expanded CTC delivered monthly payments to families with children and cut child poverty from 14.2% to 7.4% in one year — the most dramatic reduction in child poverty in American history, though it lapsed after 2021 when the Senate failed to extend it.',
      },
      {
        title: 'Food Safety Modernization Act implementation provisions',
        year: 2023,
        month: 4,
        summary: 'DeLauro has been the House\'s most persistent advocate for strong FDA food safety enforcement, using her Appropriations position to fund FDA inspection capacity and push for full implementation of the Food Safety Modernization Act. She has championed infant formula safety standards following the 2022 baby formula crisis and has consistently fought for stronger food labeling and contamination prevention requirements.',
      },
    ],
  },

  {
    bioguideId: 'H001047',
    slug: 'james-a-himes',
    name: 'James A. Himes',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Connecticut',
    currentTitle: 'U.S. Representative, Connecticut 4th District',
    bio: 'James A. Himes has represented Connecticut\'s 4th Congressional District — covering Greenwich, Stamford, and Bridgeport — since 2009. He serves as Ranking Member of the House Permanent Select Committee on Intelligence and is a member of the Financial Services Committee. A Harvard- and Oxford-educated former Goldman Sachs banker and HUD official, he brings Wall Street and national security expertise to his roles. Himes has been a leading Democratic voice on intelligence oversight, financial regulation, and technology policy.',
    sinceYear: 2009,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Ranking Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'FISA Reauthorization — Section 702',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'As Intelligence Committee Ranking Member, Himes supported reauthorization of Section 702 of FISA, which authorizes foreign intelligence surveillance. He argued the program is essential for detecting and disrupting terrorist threats and foreign intelligence operations, while advocating for reforms to strengthen civil liberties protections and minimize collection of U.S. persons\' communications.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, supporting its corporate minimum tax and clean energy investment provisions. Himes, representing one of the wealthiest districts in the country, argued the bill\'s corporate tax provisions were fair and that the clean energy investments would benefit Connecticut\'s growing offshore wind and clean technology industries.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing the tax cuts disproportionately benefited the ultra-wealthy while the Medicaid and SNAP cuts harmed Bridgeport\'s low-income communities. As a former banker, Himes provided particular credibility when he argued the bill\'s fiscal projections were unrealistic and that the debt implications were more severe than advertised.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid cuts would severely harm Bridgeport\'s low-income residents while its tax provisions overwhelmingly benefited the ultra-wealthy constituents in Greenwich who already pay historically low effective tax rates. As Ranking Member of the House Intelligence Committee, Himes also raised national security concerns about the bill\'s approach to classified program funding and its implications for the intelligence community\'s operating budget.',
      },
    ],
    keyBills: [
      {
        title: 'AI Transparency and Accountability Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation establishing disclosure requirements for AI systems used in consequential decisions including credit, employment, and housing, building on his financial services and intelligence oversight experience. Himes argued that as AI becomes embedded in financial markets and national security systems, Congress needs accountability frameworks to prevent discriminatory outcomes and adversarial exploitation.',
      },
      {
        title: 'Systemic Risk Designation Reform',
        year: 2022,
        month: 5,
        summary: 'Worked on Financial Services Committee legislation reforming the FSOC designation process for systemically important financial institutions, drawing on his Goldman Sachs background to craft technically sound reforms. Himes sought to improve the transparency and predictability of the SIFI designation process while ensuring the financial stability oversight regime remains effective.',
      },
    ],
  },

  {
    bioguideId: 'H001081',
    slug: 'jahana-hayes',
    name: 'Jahana Hayes',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Connecticut',
    currentTitle: 'U.S. Representative, Connecticut 5th District',
    bio: 'Jahana Hayes has represented Connecticut\'s 5th Congressional District — covering the Naugatuck Valley and northwestern Connecticut including Waterbury and Danbury — since 2019. A former 2016 National Teacher of the Year, she sits on the Agriculture and Education and Workforce Committees. Hayes is the first Black woman elected to Congress from Connecticut and brings a distinctive educator\'s perspective to legislation on school nutrition, early childhood education, and workforce training. Her district\'s diverse communities — including significant Puerto Rican, immigrant, and working-class populations — shape her focus on economic opportunity and community investment.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan — Education Provisions',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the American Rescue Plan, championing its $125 billion Elementary and Secondary School Emergency Relief Fund and expanded child nutrition provisions. As a former teacher and member of the Education Committee, Hayes highlighted the bill\'s school reopening investments and its Child Nutrition Waivers allowing schools to continue serving free meals to all students regardless of income.',
      },
      {
        title: 'Against One Big Beautiful Bill — SNAP and Education Cuts',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its SNAP cuts would eliminate free school meals for hundreds of thousands of Connecticut children and that the Medicaid reductions would harm Waterbury and Danbury\'s working-class families. Hayes used her Agriculture Committee platform to highlight that the bill\'s SNAP work requirements would cause significant coverage churning without improving economic outcomes.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its SNAP cuts and elimination of the Community Eligibility Provision would force thousands of Connecticut children in Waterbury and Danbury schools to lose access to free school meals. As a member of the Agriculture and Education Committees and a former National Teacher of the Year, Hayes condemned the bill\'s rollback of school nutrition programs as a direct attack on students\' ability to learn in high-poverty communities.',
      },
      {
        title: 'Farm Bill — Nutrition Title provisions',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Supported strong nutrition title provisions in Farm Bill negotiations, advocating for maintaining SNAP benefit levels and expanding the Summer EBT program that provides grocery benefits to low-income children during summer months when school meals are unavailable. Hayes drew on her teaching experience to document the relationship between food insecurity and academic outcomes in her district\'s schools.',
      },
    ],
    keyBills: [
      {
        title: 'Nourish Act — School Nutrition Modernization',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation permanently establishing Community Eligibility Provision access for high-poverty schools, allowing schools serving low-income communities to provide free meals to all students without individual applications. Hayes argued that universal free school meals eliminate the stigma and administrative burden of means-testing while ensuring no child goes hungry during the school day.',
      },
      {
        title: 'Teacher Loan Forgiveness Enhancement Act',
        year: 2022,
        month: 4,
        summary: 'Introduced legislation expanding and simplifying the Teacher Loan Forgiveness program to incentivize educators to work in high-need schools and shortage subject areas. Drawing on her National Teacher of the Year experience and conversations with Connecticut educators, Hayes targeted the program\'s complex eligibility rules and limited loan forgiveness amounts as barriers that deter teachers from pursuing the benefit.',
      },
    ],
  },
]

export const ctDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

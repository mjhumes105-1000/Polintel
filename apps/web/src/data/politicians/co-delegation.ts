import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001267',
    slug: 'michael-f-bennet',
    name: 'Michael F. Bennet',
    party: 'D',
    chamber: 'Senate',
    state: 'Colorado',
    currentTitle: 'U.S. Senator from Colorado',
    bio: 'Michael Bennet has represented Colorado in the U.S. Senate since 2009, when he was appointed by Governor Bill Ritter to fill the seat vacated by Ken Salazar. A former Denver Public Schools superintendent and business executive, he ran for president in 2020 before withdrawing before the New Hampshire primary. Bennet serves on the Senate Finance and Intelligence Committees and has been a leading voice on education reform, public lands conservation, and bipartisan immigration legislation.',
    sinceYear: 2009,
    committees: [
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'ssra', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, highlighting investments in Colorado\'s roads, bridges, water systems, and broadband. Bennet was part of the bipartisan "Gang of 10" senators who helped negotiate the final framework, and he emphasized the bill\'s importance for Western water infrastructure amid ongoing drought conditions.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, particularly praising its clean energy investments and Medicare drug price negotiation provisions. Bennet highlighted the bill\'s benefits for Colorado\'s growing clean energy sector and argued the prescription drug savings would help Colorado seniors on fixed incomes.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation package, citing deep cuts to Medicaid, SNAP, and education programs he argued would harm Colorado families. Bennet specifically criticized provisions he said would undermine Colorado\'s public lands management and reduce conservation funding.',
      },
    ],
    keyBills: [
      {
        title: 'American Recovery and Reinvestment in Public Lands Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation expanding funding for wildfire mitigation, forest restoration, and water conservation on Western public lands. Colorado\'s economy and water supply are deeply dependent on healthy public lands, and Bennet used his Agriculture Committee seat to advance the bill\'s forest management provisions.',
      },
      {
        title: 'RISE and SHINE Act — Child Tax Credit Expansion',
        year: 2022,
        month: 5,
        summary: 'Introduced legislation making permanent the expanded Child Tax Credit established in the American Rescue Plan and extending its coverage to the youngest children. Bennet made the expanded CTC one of his signature issues, publishing extensive research on its dramatic reduction in child poverty during its one-year operation.',
      },
    ],
  },

  {
    bioguideId: 'H000273',
    slug: 'john-w-hickenlooper',
    name: 'John W. Hickenlooper',
    party: 'D',
    chamber: 'Senate',
    state: 'Colorado',
    currentTitle: 'U.S. Senator from Colorado',
    bio: 'John Hickenlooper has represented Colorado in the U.S. Senate since 2021, having previously served as Governor from 2011 to 2019 and as Mayor of Denver from 2003 to 2011. A former geologist and brewpub entrepreneur, he built his political career on pragmatic, business-friendly governance. He serves on the Energy and Natural Resources, HELP, Small Business, and Commerce Committees and has focused on innovation, clean energy, and bipartisan deal-making.',
    sinceYear: 2021,
    committees: [
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, emphasizing investments in Colorado\'s transportation network, broadband expansion, and water infrastructure. Hickenlooper\'s history as Denver\'s mayor gave him direct experience with the infrastructure deficits the legislation was designed to address.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, highlighting Colorado\'s position as a hub for aerospace, defense technology, and quantum computing. Hickenlooper argued the legislation would strengthen American technological leadership and attract semiconductor and advanced manufacturing investment to Colorado\'s Front Range.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation package, citing its cuts to small business programs, clean energy incentives, and healthcare coverage. Hickenlooper was particularly critical of provisions reducing the Advanced Energy Manufacturing Tax Credit that had attracted clean energy investment to Colorado.',
      },
    ],
    keyBills: [
      {
        title: 'Endless Frontier Act — Science and Innovation Provisions',
        year: 2021,
        month: 5,
        summary: 'Co-sponsored legislation to dramatically increase federal investment in basic research and technology development, including quantum computing, artificial intelligence, and biotechnology. Hickenlooper championed the bill\'s provisions for regional technology hubs, which would benefit Colorado\'s growing innovation economy centered on the Denver-Boulder corridor.',
      },
      {
        title: 'Colorado Outdoor Recreation and Economy Act',
        year: 2022,
        month: 9,
        summary: 'Introduced legislation expanding wilderness protection and recreation access on Colorado public lands, reflecting the outdoor recreation economy\'s critical role in the state. The bill designated new wilderness areas, protected key trail corridors, and improved management of heavily used public lands in mountain communities.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'D000197',
    slug: 'diana-degette',
    name: 'Diana DeGette',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 1st District',
    bio: 'Diana DeGette has represented Denver\'s 1st Congressional District since 1997 and is the most senior member of Colorado\'s delegation. She serves as the senior Democratic member on the House Energy and Commerce Committee, where she has been a leading force on pharmaceutical pricing, biomedical research funding, and FDA oversight. She is widely credited with co-authoring the Stem Cell Research Enhancement Act and has championed FDA modernization and drug pricing transparency throughout her career.',
    sinceYear: 1997,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its historic authorization for Medicare to negotiate prescription drug prices — a reform DeGette had championed for over two decades. She called the drug pricing provisions a long-overdue correction that would finally reduce costs for Denver seniors.',
      },
      {
        title: 'Lower Drug Costs Now Act',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for legislation expanding Medicare\'s drug price negotiation authority beyond the ten drugs initially authorized in the IRA. As a senior Energy and Commerce member, DeGette has sustained her two-decade fight to bring down prescription drug costs that she argues impose impossible burdens on Colorado patients.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, citing rollbacks of pharmaceutical regulations and Medicaid cuts she argued would reverse hard-won healthcare gains. DeGette specifically criticized provisions weakening FDA\'s drug approval process that she said prioritized industry interests over patient safety.',
      },
    ],
    keyBills: [
      {
        title: 'Stem Cell Research Enhancement Act',
        year: 2023,
        month: 3,
        summary: 'Re-introduced her landmark legislation expanding federal funding for embryonic stem cell research, building on the bill she first co-authored in 2005. DeGette has maintained her decades-long advocacy for biomedical research funding, arguing that federal investment in stem cell science will produce medical breakthroughs benefiting millions of patients.',
      },
      {
        title: 'Securing a Strong Retirement Act — Biomedical Provisions',
        year: 2022,
        month: 6,
        summary: 'Championed provisions in broader retirement and healthcare legislation increasing NIH funding for age-related diseases including Alzheimer\'s, cancer, and cardiovascular disease. DeGette has consistently prioritized biomedical research investment as a cornerstone of American scientific leadership and long-term healthcare cost reduction.',
      },
    ],
  },

  {
    bioguideId: 'N000191',
    slug: 'joe-neguse',
    name: 'Joe Neguse',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 2nd District',
    bio: 'Joe Neguse has represented Colorado\'s 2nd Congressional District — covering Boulder, Fort Collins, and Colorado\'s mountain communities — since 2019. The son of Eritrean refugees and a graduate of CU Boulder Law, he rose quickly to serve as a House Democratic impeachment manager during Donald Trump\'s second impeachment trial in 2021. He serves on the Natural Resources, Rules, and Judiciary Committees and has focused on public lands conservation, climate action, and democratic reform.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Second Impeachment of Donald Trump',
        year: 2021,
        month: 1,
        position: 'For',
        summary: 'Voted to impeach President Trump for incitement of insurrection following the January 6th Capitol attack, then served as one of nine House impeachment managers during the Senate trial. Neguse\'s lead role in the Senate presentation — particularly his argument on presidential accountability — drew wide attention as one of the most compelling arguments made by managers.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, emphasizing investments in Colorado\'s mountain transportation infrastructure, broadband, and water systems. Neguse highlighted the bill\'s benefits for his district\'s wildfire-damaged communities and pressed for provisions specifically supporting forest restoration and watershed protection.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its cuts to public lands management and clean energy investment would harm Colorado\'s outdoor recreation economy and accelerate climate-driven wildfire risk. Neguse called the bill "a betrayal of the West" and organized opposition among public lands advocates.',
      },
    ],
    keyBills: [
      {
        title: 'Colorado Wilderness Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation designating over one million acres of new wilderness in Colorado and expanding protections for key wildlife corridors and watersheds. The bill reflected Neguse\'s priority of permanently protecting Colorado\'s most ecologically significant landscapes from development and energy extraction.',
      },
      {
        title: 'THRIVE Act — Clean Economy Investment',
        year: 2021,
        month: 3,
        summary: 'Co-introduced the THRIVE Act, a $10 trillion climate and jobs investment framework that formed the basis for Democratic negotiations over the Build Back Better agenda. Neguse championed the bill\'s clean energy, environmental justice, and public lands provisions as a comprehensive approach to the climate crisis.',
      },
    ],
  },

  {
    bioguideId: 'H001100',
    slug: 'jeff-hurd',
    name: 'Jeff Hurd',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 3rd District',
    bio: 'Jeff Hurd has represented Colorado\'s 3rd Congressional District — the state\'s vast Western Slope and southern tier — since 2025, succeeding Lauren Boebert who moved to run in the 4th District. An attorney from Grand Junction with a background in natural resources and water law, he serves on the Natural Resources, Science, and Transportation Committees. His district encompasses Colorado\'s energy-producing Western Slope, major ski resort communities, and large swaths of federal public land.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, one of his first major floor votes as a freshman representative. Hurd supported the bill as a baseline immigration enforcement measure for his border-adjacent district that includes communities along major smuggling corridors.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting provisions expanding oil and gas leasing on federal lands and reducing regulatory burdens on Western energy producers. Hurd\'s district contains significant natural gas and oil shale resources, making energy policy a central constituency concern.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 continuing resolution, supporting provisions protecting transportation infrastructure funding critical to his district\'s rural communities. Hurd emphasized the importance of federal highway funding for the rural roads and mountain passes that form essential transportation arteries in the 3rd District.',
      },
    ],
    keyBills: [
      {
        title: 'Western Water Security Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation strengthening water rights protections for Western states and streamlining Bureau of Reclamation permitting for water storage projects. Drawing on his water law background, Hurd argued that the Colorado River basin\'s chronic shortage demands federal support for water storage and conservation infrastructure.',
      },
      {
        title: 'Energy Development on Federal Lands Certainty Act',
        year: 2025,
        month: 4,
        summary: 'Co-introduced legislation requiring the Bureau of Land Management to set predictable timelines for oil and gas leasing decisions on federal lands. Hurd argued that permitting uncertainty imposes costs on Western Slope energy producers and undermines the energy security rationale for expanding domestic production.',
      },
    ],
  },

  {
    bioguideId: 'B000825',
    slug: 'lauren-boebert',
    name: 'Lauren Boebert',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 4th District',
    bio: 'Lauren Boebert has represented Colorado\'s 4th Congressional District — covering the Eastern Plains and San Luis Valley — since 2025, having previously represented the 3rd District from 2021 to 2025. A restaurateur and gun rights activist from Garfield County, she is one of the most prominent members of the House Freedom Caucus and a consistent provocateur in House Republican politics. She serves on the Natural Resources and Oversight Committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy as Speaker — Multiple Rounds',
        year: 2023,
        month: 1,
        position: 'Against',
        summary: 'Voted against Kevin McCarthy in multiple Speaker ballots, helping force a historic 15-round Speaker election before ultimately supporting McCarthy\'s election. Boebert was among the small group of House Freedom Caucus members who used the Speaker fight to extract procedural concessions, including changes to the motion to vacate threshold.',
      },
      {
        title: 'Against Foreign Aid Package — Ukraine, Israel, Taiwan',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the $95 billion supplemental foreign aid package providing assistance to Ukraine, Israel, and Taiwan. Boebert argued the funds should be redirected to domestic border security and that U.S. taxpayers should not bear the cost of foreign conflicts.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Border security and immigration enforcement have been central issues for Boebert throughout her congressional tenure.',
      },
    ],
    keyBills: [
      {
        title: 'Fire Our Enemies Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation prohibiting the federal government from purchasing goods made by Chinese state-owned enterprises or companies affiliated with the Chinese military. Boebert framed the bill as a necessary economic decoupling from an adversary that she argued is actively undermining American security and sovereignty.',
      },
      {
        title: 'Protecting Our Kids Act — Against',
        year: 2022,
        month: 6,
        summary: 'Opposed and spoke against the Protecting Our Kids Act gun control package, arguing its red flag law provisions and magazine capacity restrictions violated Second Amendment rights. Boebert has been one of the most vocal gun rights advocates in Congress, citing her personal background as a gun owner and operator of a Second Amendment-themed restaurant.',
      },
    ],
  },

  {
    bioguideId: 'C001137',
    slug: 'jeff-crank',
    name: 'Jeff Crank',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 5th District',
    bio: 'Jeff Crank has represented Colorado\'s 5th Congressional District — anchored by Colorado Springs and home to Fort Carson, Peterson Space Force Base, and NORAD — since 2025. A longtime conservative activist and former American for Prosperity state director, he serves on the Armed Services and Natural Resources Committees. His district is one of the most militarily significant in the country, and he has focused on defense readiness, Space Force modernization, and reducing federal regulatory burdens.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act as one of his first floor votes as a freshman representative, supporting mandatory ICE detention for undocumented immigrants charged with violent crimes. Immigration enforcement has been a consistent priority issue throughout Crank\'s political career.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its defense spending provisions and tax reductions he argued would stimulate Colorado Springs\' military-adjacent economy. Crank used his Armed Services seat to advocate for Fort Carson and Peterson SFB funding levels in the reconciliation bill\'s defense provisions.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting increased investment in Space Force capabilities and missile defense infrastructure centered on Colorado Springs. Crank advocated for provisions modernizing NORAD and the Colorado Space Force installations that are central to American strategic defense.',
      },
    ],
    keyBills: [
      {
        title: 'Space Force Modernization and Innovation Act',
        year: 2025,
        month: 5,
        summary: 'Introduced legislation accelerating Space Force acquisition of next-generation satellite communications and space domain awareness capabilities. With Peterson Space Force Base and Schriever Space Force Base in his district, Crank positioned Space Force modernization as both a national security and economic priority for Colorado Springs.',
      },
      {
        title: 'Military Base Community Partnership Act',
        year: 2025,
        month: 8,
        summary: 'Championed legislation strengthening coordination between military installations and surrounding civilian communities on infrastructure, transportation, and workforce development. The bill addressed longstanding challenges at Colorado Springs\' ring of installations where rapid growth has strained regional infrastructure.',
      },
    ],
  },

  {
    bioguideId: 'C001121',
    slug: 'jason-crow',
    name: 'Jason Crow',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 6th District',
    bio: 'Jason Crow has represented Colorado\'s 6th Congressional District — Aurora and the Denver southeast suburbs — since 2019, flipping a longtime Republican seat. An Army Ranger who served three combat tours in Afghanistan and Iraq, he won the Bronze Star with Valor before becoming an attorney and entering politics. He serves on the Intelligence and Armed Services Committees, where he has focused on veterans\' care, military readiness, and national security in an era of great power competition.',
    sinceYear: 2019,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, supporting provisions protecting Colorado\'s military installations and expanding benefits for veterans\' mental health care. As an Army Ranger combat veteran, Crow has been a credible voice on military readiness and the intersection of modern warfare with intelligence operations.',
      },
      {
        title: 'Foreign Aid Package — Ukraine, Israel, Taiwan',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion supplemental foreign aid package, arguing that supporting democratic allies facing aggression is essential to American security. Crow drew on his combat experience to make the case that abandoning Ukraine would embolden adversaries and ultimately cost more in American lives and treasure.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, citing cuts to veterans\' healthcare and Medicaid that he argued would directly harm Aurora\'s large veteran population. Crow argued the bill\'s Medicaid work requirements would eliminate coverage for thousands of veterans who rely on Medicaid to supplement VA benefits.',
      },
    ],
    keyBills: [
      {
        title: 'Veterans\' Mental Health and Suicide Prevention Act',
        year: 2022,
        month: 8,
        summary: 'Championed legislation expanding access to mental health services for veterans experiencing PTSD and suicide risk, drawing on the epidemic of veteran suicide that has claimed more lives than combat in recent conflicts. Crow\'s combat background gave him direct credibility on the bill\'s provisions expanding community-based mental health resources.',
      },
      {
        title: 'Artificial Intelligence and National Security Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation establishing guardrails for the Defense Department\'s use of artificial intelligence in military decision-making, requiring human oversight for lethal autonomous systems. As an Intelligence Committee member, Crow has been at the forefront of congressional efforts to govern emerging technologies in national security contexts.',
      },
    ],
  },

  {
    bioguideId: 'P000620',
    slug: 'brittany-pettersen',
    name: 'Brittany Pettersen',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 7th District',
    bio: 'Brittany Pettersen has represented Colorado\'s 7th Congressional District — Jefferson County\'s suburban communities west of Denver — since 2023. A former Colorado state senator, she became the lead Democratic voice on addiction and mental health policy in the state legislature before bringing those priorities to Congress. She serves on the House Financial Services Committee and has focused on behavioral health, economic security, and supporting Colorado\'s working families.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Consolidated Appropriations Act — Behavioral Health Provisions',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the year-end spending package, supporting provisions expanding mental health parity enforcement and substance use disorder treatment funding. Pettersen has made behavioral health her signature legislative priority, and the package included investments in community mental health centers that serve Jefferson County\'s high-need populations.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts would devastate community health centers that provide addiction and mental health services to Jefferson County residents. Pettersen was among the most vocal opponents of the bill\'s behavioral health funding reductions.',
      },
      {
        title: 'FY2026 Appropriations — Mental Health Provisions',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing cuts to SAMHSA — the Substance Abuse and Mental Health Services Administration — that she argued would eliminate addiction treatment services for thousands of Coloradans. Pettersen made the SAMHSA cuts a centerpiece of her opposition to the spending plan.',
      },
    ],
    keyBills: [
      {
        title: 'Mental Health Matters Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation expanding mental health parity enforcement, requiring insurers to cover mental health and substance use disorder treatment at the same level as medical and surgical care. Pettersen drew on her state legislative experience shepherding Colorado\'s mental health parity law to bring the same framework to federal insurance regulation.',
      },
      {
        title: 'Community Mental Health Infrastructure Investment Act',
        year: 2024,
        month: 4,
        summary: 'Championed legislation providing capital grants for community mental health centers in underserved suburban and rural communities, addressing the behavioral health facility shortage that limits access to care even when insurance coverage exists. Jefferson County\'s suburban communities face acute provider shortages that Pettersen has made a priority issue.',
      },
    ],
  },

  {
    bioguideId: 'E000300',
    slug: 'gabe-evans',
    name: 'Gabe Evans',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Colorado',
    currentTitle: 'U.S. Representative, Colorado 8th District',
    bio: 'Gabe Evans has represented Colorado\'s 8th Congressional District — a competitive swing district north of Denver including Greeley and Fort Collins\' eastern suburbs — since 2025, flipping a seat held by Democrat Yadira Caraveo. A former Army helicopter pilot and Colorado state trooper, he serves on the Homeland Security and Energy and Commerce Committees. His district\'s diverse mix of agriculture, energy, and suburban communities has shaped his focus on border security, energy production, and public safety.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, a priority issue for his Homeland Security Committee assignment and his district which borders key agricultural areas with significant immigrant labor populations. Evans emphasized his law enforcement background in supporting the bill.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its energy production incentives and border security funding. Evans argued the bill\'s oil and gas provisions would benefit Weld County\'s energy economy — one of the nation\'s largest oil-producing counties — and create jobs in his district.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the continuing resolution funding the federal government through the remainder of FY2026, supporting provisions protecting energy regulatory programs important to his district\'s oil and gas industry and agricultural export infrastructure.',
      },
    ],
    keyBills: [
      {
        title: 'American Energy First Act',
        year: 2025,
        month: 4,
        summary: 'Co-sponsored legislation streamlining permitting for oil and gas production on federal and state lands, a priority for Weld County\'s energy sector. Evans argued that reducing permitting delays would lower energy costs for consumers while growing Colorado\'s tax base.',
      },
      {
        title: 'Public Safety and Immigration Enforcement Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation strengthening information-sharing between local law enforcement and ICE, building on his Homeland Security Committee assignment and his background as a Colorado state trooper. Evans drew on firsthand experience with the operational challenges of immigration enforcement for local and state agencies.',
      },
    ],
  },
]

export const coDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

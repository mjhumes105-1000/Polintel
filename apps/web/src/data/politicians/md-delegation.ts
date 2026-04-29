import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'V000128',
    slug: 'chris-van-hollen',
    name: 'Chris Van Hollen',
    party: 'D',
    chamber: 'Senate',
    state: 'Maryland',
    currentTitle: 'U.S. Senator from Maryland',
    bio: 'Chris Van Hollen has represented Maryland in the U.S. Senate since 2017, having previously served in the House for 14 years where he chaired the DCCC and served as House Budget Committee Ranking Member. A graduate of Swarthmore and Harvard Law, he has focused on fiscal policy, foreign relations, and voting rights. He serves on the Appropriations, Banking, Budget, and Foreign Relations Committees, and has been a leading critic of foreign governments\' human rights records, including on Gaza and Ethiopia.',
    sinceYear: 2003,
    committees: [
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, emphasizing investments in Maryland\'s transportation network, Chesapeake Bay restoration, and broadband expansion. Van Hollen highlighted the bill\'s Amtrak corridor funding as essential for the Northeast Corridor\'s economic productivity and Maryland\'s commuter rail system.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its prescription drug negotiation provisions and clean energy investments. Van Hollen argued the bill would reduce Maryland families\' energy costs, lower drug prices for seniors, and create clean energy jobs in Maryland\'s growing renewable sector.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation package, citing massive Medicaid cuts, SNAP reductions, and rollbacks of clean energy investments he argued would harm Maryland\'s economy and low-income residents. Van Hollen was particularly critical of provisions reducing Chesapeake Bay restoration funding.',
      },
    ],
    keyBills: [
      {
        title: 'Ethiopia Peace and Democracy Act',
        year: 2022,
        month: 6,
        summary: 'Championed legislation imposing targeted sanctions on Ethiopian and Eritrean officials responsible for atrocities during the Tigray conflict. Van Hollen drew international attention to the conflict through Senate Foreign Relations work, authoring bipartisan legislation that ultimately influenced the Biden administration\'s Ethiopia policy.',
      },
      {
        title: 'For the People Act — Senate Consideration',
        year: 2021,
        month: 6,
        summary: 'Was a leading advocate for S.1, the Senate Democrats\' comprehensive voting rights and election reform package. Van Hollen argued the bill was essential to protecting democratic participation against state-level voter suppression efforts and worked to find procedural paths around the Senate filibuster.',
      },
    ],
  },

  {
    bioguideId: 'A000382',
    slug: 'angela-d-alsobrooks',
    name: 'Angela D. Alsobrooks',
    party: 'D',
    chamber: 'Senate',
    state: 'Maryland',
    currentTitle: 'U.S. Senator from Maryland',
    bio: 'Angela Alsobrooks has represented Maryland in the U.S. Senate since 2025, defeating former Governor Larry Hogan in a competitive race to succeed Ben Cardin. A former Prince George\'s County Executive and State\'s Attorney, she is the first Black woman to represent Maryland in the U.S. Senate. She serves on the Banking, Environment and Public Works, Aging, and HELP Committees and has focused on economic opportunity, environmental justice, and healthcare access.',
    sinceYear: 2025,
    committees: [
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill in one of her first major Senate votes, arguing its Medicaid cuts would devastate Prince George\'s County\'s diverse, working-class communities that rely heavily on the program. Alsobrooks drew on her County Executive experience overseeing local health services to argue that the cuts would overwhelm safety-net providers.',
      },
      {
        title: 'FY2026 Budget Resolution — Democratic Alternative',
        year: 2025,
        month: 4,
        position: 'For',
        summary: 'Voted for the Democratic budget alternative, which maintained current healthcare, housing, and environmental spending levels. Alsobrooks argued that the Republican budget framework placed disproportionate fiscal burdens on working families and communities of color while cutting taxes for the wealthy.',
      },
      {
        title: 'Chesapeake Bay Program Reauthorization',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Voted for legislation reauthorizing and expanding the Chesapeake Bay Program, which coordinates federal, state, and local efforts to restore the Bay\'s water quality. Alsobrooks, using her Environment Committee seat, championed the bill as essential to both Maryland\'s environment and its blue crab and seafood industries.',
      },
    ],
    keyBills: [
      {
        title: 'Affordable Housing and Community Investment Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation expanding Low-Income Housing Tax Credits and HUD community development grants, drawing on her experience as Prince George\'s County Executive overseeing affordable housing initiatives. Alsobrooks argued that the housing affordability crisis requires sustained federal investment in production of affordable units in high-cost metro areas like the DC region.',
      },
      {
        title: 'Environmental Justice in Every Community Act',
        year: 2025,
        month: 8,
        summary: 'Championed legislation directing EPA to prioritize environmental justice enforcement in communities facing disproportionate pollution burdens, using her Environment Committee seat to advance the bill. Alsobrooks highlighted Prince George\'s County\'s environmental challenges — including industrial pollution near majority-Black communities — as examples of the systemic inequities the bill addresses.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'H001052',
    slug: 'andy-harris',
    name: 'Andy Harris',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 1st District',
    bio: 'Andy Harris has represented Maryland\'s 1st Congressional District — the Eastern Shore and rural western Maryland — since 2011. A physician and anesthesiologist, he is the only Republican in Maryland\'s congressional delegation and one of the most conservative members of the entire House. He serves on the Appropriations Committee and has focused on reducing federal spending, opposing the ACA, supporting Chesapeake Bay watermen\'s interests, and championing Second Amendment rights.',
    sinceYear: 2011,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'Against',
        summary: 'Voted against the $1.9 trillion COVID relief package, arguing it was excessive, inflationary, and included provisions unrelated to pandemic recovery. Harris was among the most vocal critics of the legislation in the House, objecting to its state and local government aid as a bailout for poorly managed Democratic states.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Harris has consistently supported strict immigration enforcement and border security measures throughout his tenure as Maryland\'s lone Republican House member.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Appropriations seat to advocate for provisions he argued would reduce wasteful spending while protecting programs important to Maryland\'s 1st District including agricultural supports and Chesapeake Bay commercial fishing regulations.',
      },
    ],
    keyBills: [
      {
        title: 'Chesapeake Bay Watermen Support Act',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation protecting Maryland\'s commercial watermen from EPA regulations he argued would impose unsustainable costs on crabbers and oystermen whose livelihoods depend on the Chesapeake Bay. Harris has consistently used his Appropriations seat to defend the Eastern Shore\'s fishing economy from regulatory overreach.',
      },
      {
        title: 'Medical Liability Reform Act',
        year: 2022,
        month: 7,
        summary: 'Championed federal medical malpractice reform legislation, drawing on his background as an anesthesiologist to argue that excessive liability exposure increases healthcare costs for patients and drives defensive medicine practices. Harris has been one of Congress\'s most consistent advocates for medical liability reform from a physician\'s perspective.',
      },
    ],
  },

  {
    bioguideId: 'O000176',
    slug: 'johnny-olszewski-jr',
    name: 'Johnny Olszewski, Jr.',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 2nd District',
    bio: 'Johnny Olszewski Jr. has represented Maryland\'s 2nd Congressional District — Baltimore County and Harford County — since 2025, succeeding Dutch Ruppersberger. A former Baltimore County Executive, he is the youngest person ever elected Baltimore County Executive and built a reputation for pragmatic governance and environmental priorities. He serves on the Small Business and Foreign Affairs Committees and has focused on economic development, Chesapeake Bay restoration, and trade policy.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, citing cuts to Medicaid, environmental programs, and small business development grants that he argued would undermine Baltimore County\'s economic recovery and environmental health. Olszewski drew on his County Executive experience to argue the cuts would shift costs to local governments unprepared to absorb them.',
      },
      {
        title: 'FY2026 Appropriations — Chesapeake Bay',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing proposed reductions to Chesapeake Bay cleanup funding and EPA enforcement capacity. Olszewski, whose Baltimore County borders the Bay watershed, argued that restoring the Bay is both an environmental and economic priority for Maryland\'s tourism and seafood industries.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting provisions protecting Aberdeen Proving Ground — a major employer in his district — and NSA operations at Fort Meade, the nation\'s largest intelligence employer, which anchors the Baltimore region\'s defense and intelligence economy.',
      },
    ],
    keyBills: [
      {
        title: 'Small Business Export Assistance Act',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation expanding USDA and Commerce Department technical assistance for small businesses seeking to enter international markets, building on his Foreign Affairs Committee assignment. Olszewski argued that Maryland\'s small manufacturers are underserved by current export promotion programs that favor larger companies.',
      },
      {
        title: 'Chesapeake Bay Restoration Acceleration Act',
        year: 2025,
        month: 5,
        summary: 'Championed legislation providing emergency supplemental funding for Chesapeake Bay Program nutrient reduction projects, accelerating cleanup timelines at risk from agricultural runoff and climate-driven storm events. Olszewski highlighted the Bay\'s economic importance to Maryland\'s fishing, tourism, and real estate industries.',
      },
    ],
  },

  {
    bioguideId: 'E000301',
    slug: 'sarah-elfreth',
    name: 'Sarah Elfreth',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 3rd District',
    bio: 'Sarah Elfreth has represented Maryland\'s 3rd Congressional District — covering Annapolis, parts of Howard County, and portions of Baltimore — since 2025. A former Maryland State Senator and Anne Arundel County Executive candidate, she is a progressive Democrat focused on climate, healthcare, and democratic reform. She serves on the Armed Services and Natural Resources Committees and has emphasized Chesapeake Bay protection, clean energy investment, and expanding access to healthcare.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its clean energy rollbacks would cost Maryland thousands of green jobs and its Medicaid cuts would harm Annapolis-area residents who gained coverage under the ACA. Elfreth was particularly critical of provisions gutting the Inflation Reduction Act\'s clean energy manufacturing credits.',
      },
      {
        title: 'FY2026 Defense Appropriations — Naval Academy',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Supported provisions in the FY2026 defense appropriations protecting the U.S. Naval Academy in Annapolis, the largest federal employer in her district. Elfreth used her Armed Services Committee seat to advocate for Naval Academy facility investments and midshipman support programs.',
      },
      {
        title: 'Chesapeake and Atlantic Coastal Bays Protection Act',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Voted for legislation strengthening Clean Water Act protections for Chesapeake Bay tributaries and tidal wetlands, a priority for her Annapolis-area district where the Bay and its watershed define the region\'s environment and economy. Elfreth championed the bill through the Natural Resources Committee.',
      },
    ],
    keyBills: [
      {
        title: 'Clean Energy and Jobs Act — Maryland Provisions',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation expanding the Investment Tax Credit for offshore wind development, targeting the potential for large-scale projects in Maryland\'s federal waters that could power hundreds of thousands of homes. Maryland has committed to significant offshore wind development, and Elfreth argued federal tax incentives are essential to making the projects economically viable.',
      },
      {
        title: 'Chesapeake Bay Blue Carbon Act',
        year: 2025,
        month: 8,
        summary: 'Championed legislation establishing a federal program to restore and protect Chesapeake Bay tidal wetlands as carbon sequestration assets, combining climate and environmental restoration goals. The bill would create market mechanisms allowing Bay watershed landowners to earn carbon credits for wetland restoration projects.',
      },
    ],
  },

  {
    bioguideId: 'I000058',
    slug: 'glenn-ivey',
    name: 'Glenn Ivey',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 4th District',
    bio: 'Glenn Ivey has represented Maryland\'s 4th Congressional District — Prince George\'s County — since 2023, winning a primary to succeed retiring Rep. Anthony Brown. A former Prince George\'s County State\'s Attorney, he serves on the Appropriations and Ethics Committees. His district, bordering Washington DC, is one of the wealthiest majority-Black counties in America, and Ivey has focused on economic equity, federal contracting access, and government accountability.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsso', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Consolidated Appropriations Act FY2024',
        year: 2024,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2024 government funding package, using his Appropriations seat to advocate for federal contracting programs that benefit Prince George\'s County\'s significant federal contractor workforce and for domestic violence services funded through VAWA appropriations.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would harm Prince George\'s County working families while its tax cuts would disproportionately benefit the wealthy. Ivey called the bill fiscally irresponsible and morally unjustifiable.',
      },
      {
        title: 'FY2026 Appropriations — Federal Workforce',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing its deep cuts to federal agency workforces that directly affect Prince George\'s County residents who work for the federal government and contractors supporting federal operations. Ivey argued that federal workforce reductions would devastate the county\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Minority Business Development Agency Expansion Act',
        year: 2024,
        month: 5,
        summary: 'Championed legislation expanding MBDA resources and geographic reach to serve minority-owned businesses in high-growth suburban counties like Prince George\'s. Ivey argued that the DC metro\'s affluent minority communities are underserved by federal business development programs that focus primarily on rural areas and urban cores.',
      },
      {
        title: 'Federal Contractor Transparency and Accountability Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation improving disclosure requirements for federal contractors\' diversity, wages, and labor practices, drawing on his Appropriations Committee seat and Prince George\'s County\'s large federal contracting economy. Ivey argued that taxpayer-funded contracts should advance workforce equity and accountability standards.',
      },
    ],
  },

  {
    bioguideId: 'H000874',
    slug: 'steny-h-hoyer',
    name: 'Steny H. Hoyer',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 5th District',
    bio: 'Steny Hoyer has represented Maryland\'s 5th Congressional District since 1981 and is the most senior member of Maryland\'s congressional delegation. A former House Majority Leader and Majority Whip who served in House leadership for more than two decades, he is one of the most institutionally experienced members of Congress. He serves on the Appropriations Committee and remains an influential voice on defense, federal workforce issues, and bipartisan cooperation, though he announced he would not seek re-election in 2026.',
    sinceYear: 1981,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, playing a key role as House Majority Leader in managing the floor strategy that produced final passage. Hoyer highlighted investments in Maryland\'s transportation network, Amtrak corridor, and federal facilities in his district anchored by Joint Base Andrews and Patuxent River Naval Air Station.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its benefits for Maryland seniors through Medicare drug price negotiation and its clean energy investments. As House Majority Leader through 2023, Hoyer had been central to the multi-year negotiation process that produced the final bill.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, warning of its consequences for federal workers — a major constituency in his district — and for Medicaid beneficiaries across Maryland. Hoyer invoked his four-decade legislative experience to argue the bill represented a fundamental departure from the social contract.',
      },
    ],
    keyBills: [
      {
        title: 'Federal Employee Pay Equity Act',
        year: 2023,
        month: 3,
        summary: 'Championed legislation providing federal civilian employees with a 5.2% pay increase to address wage erosion relative to the private sector. Hoyer has been the leading congressional advocate for federal employee pay throughout his career, representing a district with one of the highest concentrations of federal workers in the country.',
      },
      {
        title: 'NDAA — Patuxent River Naval Air Station Provisions',
        year: 2024,
        month: 12,
        summary: 'Used his Appropriations seat to secure provisions in the NDAA and defense appropriations protecting and expanding the mission of Patuxent River Naval Air Station — the Navy\'s primary aircraft testing and evaluation center and one of Maryland\'s most significant defense employers.',
      },
    ],
  },

  {
    bioguideId: 'M001232',
    slug: 'april-mcclain-delaney',
    name: 'April McClain Delaney',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 6th District',
    bio: 'April McClain Delaney has represented Maryland\'s 6th Congressional District — Montgomery County\'s western suburbs and Frederick County — since 2025. The wife of former Rep. John Delaney, she has a background in non-profit leadership and international development. She serves on the Science, Space, and Technology and Agriculture Committees and has focused on research investment, rural agricultural support, and bipartisan solutions to healthcare access and economic opportunity.',
    sinceYear: 2025,
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
        summary: 'Voted against the Republican reconciliation bill, citing cuts to NIH research funding and agricultural support programs that she argued would harm both Maryland\'s biomedical research sector and Frederick County\'s farming communities. McClain Delaney was particularly critical of R&D investment reductions that threaten Maryland\'s position as a biomedical research hub.',
      },
      {
        title: 'FY2026 Science Appropriations',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing proposed cuts to NIH, NSF, and NASA that she argued would undermine American scientific leadership and harm Maryland\'s research economy anchored by the NIH campus in Bethesda and NASA\'s Goddard Space Flight Center in Greenbelt.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting provisions protecting Fort Detrick\'s medical research mission and NIH-DoD collaborative research programs that are central to her district\'s biomedical economy and national biosecurity infrastructure.',
      },
    ],
    keyBills: [
      {
        title: 'Biomedical Research Investment and Innovation Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation increasing NIH base funding authorization by 7% annually for five years, building on her Science Committee assignment and her district\'s deep connection to the NIH campus. McClain Delaney argued that sustained research investment is the most effective long-term strategy for reducing healthcare costs and maintaining American leadership in medicine.',
      },
      {
        title: 'Beginning Farmer Support and Agricultural Opportunity Act',
        year: 2025,
        month: 8,
        summary: 'Championed legislation expanding USDA loan programs and technical assistance for beginning farmers, particularly in high-cost states like Maryland where land prices create barriers to new agricultural entrants. The bill addressed the generational transition challenge facing Maryland\'s farming communities in Frederick and western Montgomery counties.',
      },
    ],
  },

  {
    bioguideId: 'M000687',
    slug: 'kweisi-mfume',
    name: 'Kweisi Mfume',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 7th District',
    bio: 'Kweisi Mfume has represented Maryland\'s 7th Congressional District — Baltimore and its western suburbs — since 2020, returning to a seat he previously held from 1987 to 1996. Between his congressional tenures he served as president and CEO of the NAACP from 1996 to 2004. He serves on the Oversight and Foreign Affairs Committees and has focused on civil rights enforcement, economic justice for Baltimore, and holding corporations and government accountable for racial equity commitments.',
    sinceYear: 1987,
    committees: [
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, emphasizing its importance for Baltimore\'s working-class communities that suffered disproportionate economic losses during the pandemic. Mfume highlighted the bill\'s child tax credit expansion, rental assistance, and small business support as critical lifelines for Baltimore residents.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, praising investments in Baltimore\'s aging water and sewer systems, transportation infrastructure, and broadband access. Mfume specifically highlighted the bill\'s provisions addressing lead pipe replacement as a public health priority for Baltimore\'s older housing stock.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, calling its Medicaid cuts "an assault on Baltimore\'s most vulnerable" and arguing that rolling back SNAP would increase food insecurity in a city already facing significant poverty. Mfume invoked his NAACP leadership experience in arguing the bill would reverse decades of civil rights progress on economic equity.',
      },
    ],
    keyBills: [
      {
        title: 'Justice in Policing Act — Re-introduction',
        year: 2023,
        month: 3,
        summary: 'Co-sponsored the re-introduction of the Justice in Policing Act, landmark legislation establishing a national database of police misconduct, banning chokeholds and no-knock warrants in federal law enforcement, and ending qualified immunity for police officers. Mfume\'s return to Congress was motivated in part by the need to address persistent civil rights challenges in law enforcement.',
      },
      {
        title: 'Baltimore Bridge and Port Recovery Act',
        year: 2024,
        month: 4,
        summary: 'Introduced emergency legislation providing federal resources for the reconstruction of the Francis Scott Key Bridge following its collapse in March 2024, and for the reopening of the Port of Baltimore which is essential to the regional economy. Mfume coordinated with the Biden administration and Maryland state officials to expedite federal assistance.',
      },
    ],
  },

  {
    bioguideId: 'R000606',
    slug: 'jamie-raskin',
    name: 'Jamie Raskin',
    party: 'D',
    chamber: 'House',
    district: 8,
    state: 'Maryland',
    currentTitle: 'U.S. Representative, Maryland 8th District',
    bio: 'Jamie Raskin has represented Maryland\'s 8th Congressional District — Montgomery County — since 2017. A constitutional law professor and former Maryland state senator, he served as the lead impeachment manager for Donald Trump\'s second impeachment trial in 2021 and was a senior member of the January 6th Select Committee. He is the Ranking Member of the House Judiciary Committee and has become one of the most prominent progressive voices on constitutional democracy, voting rights, and government accountability.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Ranking Member' },
    ],
    keyVotes: [
      {
        title: 'Second Impeachment of Donald Trump — Lead Manager',
        year: 2021,
        month: 1,
        position: 'For',
        summary: 'Voted to impeach President Trump for incitement of insurrection and served as the lead House manager during the Senate trial — delivering the opening argument weeks after losing his son Tommy to suicide and while himself recovering from colorectal cancer treatment. Raskin\'s emotional and legally rigorous presentation drew wide praise across party lines.',
      },
      {
        title: 'For the People Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the comprehensive voting rights and election reform package, which would have established automatic voter registration, expanded early voting, and limited partisan gerrymandering. As a constitutional law scholar, Raskin made the legal and democratic theory case for the legislation on the House floor.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, using his Judiciary Ranking Member position to argue the legislation undermined constitutional processes and would harm Montgomery County\'s diverse, middle-class communities. Raskin specifically criticized provisions he argued would consolidate executive power beyond constitutional limits.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Our Democracy Act',
        year: 2021,
        month: 9,
        summary: 'Championed comprehensive legislation strengthening checks and balances, limiting presidential self-pardon authority, expanding whistleblower protections, and tightening the Hatch Act\'s political activity restrictions. Raskin drew on his constitutional law expertise to draft the most comprehensive democracy reform legislation since Watergate-era reforms.',
      },
      {
        title: 'Electoral Count Reform Act — House Version',
        year: 2022,
        month: 9,
        summary: 'Led House consideration of legislation clarifying the Electoral Count Act\'s procedures for certifying presidential election results, drawing directly on lessons learned from the January 6th attack. Raskin worked with the January 6th Committee to translate its findings into concrete legal reforms that ultimately passed as part of the year-end omnibus.',
      },
    ],
  },
]

export const mdDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

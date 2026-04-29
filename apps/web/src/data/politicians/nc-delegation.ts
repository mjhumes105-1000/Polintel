import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'T000476',
    slug: 'thom-tillis',
    name: 'Thom Tillis',
    party: 'R',
    chamber: 'Senate',
    state: 'North Carolina',
    currentTitle: 'U.S. Senator from North Carolina',
    bio: 'Thom Tillis has served as a U.S. Senator from North Carolina since 2015, having previously been the Speaker of the North Carolina House of Representatives from 2011 to 2014. He serves on the Senate Judiciary, Banking, and Veterans\' Affairs Committees, where he has focused on immigration reform, financial regulation, and veterans\' healthcare. Tillis was re-elected in 2020 after a competitive race against Democrat Cal Cunningham.',
    sinceYear: 2015,
    committees: [
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing the corporate minimum tax would harm North Carolina manufacturers and that Medicare drug price negotiation provisions would reduce pharmaceutical innovation. Tillis was among Senate Republicans who uniformly opposed the bill.',
      },
      {
        title: 'PACT Act — Toxic Exposure Benefits for Veterans',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act, expanding healthcare and benefits eligibility for veterans exposed to burn pits and other toxic substances. Tillis worked on the Veterans\' Affairs Committee to advance the legislation.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Tillis has been a complicated figure on immigration — sometimes working on bipartisan reform but consistently supporting enforcement measures.',
      },
    ],
    keyBills: [
      {
        title: 'Bipartisan Background Checks Act',
        year: 2022,
        month: 6,
        summary: 'Was one of the lead Republican negotiators on the Bipartisan Safer Communities Act, the most significant federal gun legislation enacted in nearly 30 years. Tillis worked with Senator Chris Murphy to craft a package that enhanced background checks, encouraged red flag laws, and closed the boyfriend loophole while attracting the ten Republican votes needed to overcome a filibuster.',
      },
    ],
  },

  {
    bioguideId: 'B001305',
    slug: 'ted-budd',
    name: 'Ted Budd',
    party: 'R',
    chamber: 'Senate',
    state: 'North Carolina',
    currentTitle: 'U.S. Senator from North Carolina',
    bio: 'Ted Budd was elected to the U.S. Senate from North Carolina in 2022, having previously represented North Carolina\'s 13th Congressional District in the House from 2017 to 2023. A gunsmith and small business owner, he was endorsed by former President Trump in his Senate race. He serves on the Senate Commerce, Intelligence, and Small Business Committees, focusing on technology policy, financial regulation, and entrepreneurship.',
    sinceYear: 2017,
    committees: [
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act in the House, objecting to the corporate minimum tax, Medicare drug price negotiations, and what he characterized as excessive climate spending. Budd consistently opposed Democratic-led economic legislation throughout his House tenure.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, one of his early Senate votes, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Immigration enforcement has been a consistent priority for Budd.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Senate Republican budget reconciliation framework, supporting spending cuts and tax extensions consistent with his fiscal conservative platform. Budd backed the bill as essential to restoring fiscal discipline and extending the 2017 Tax Cuts and Jobs Act.',
      },
    ],
    keyBills: [
      {
        title: 'American Financial Technology Modernization Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation through the Senate Banking Committee to establish clearer regulatory guardrails for financial technology companies, arguing that regulatory uncertainty was driving innovation offshore. Budd\'s small business background informed his view that regulatory overreach disproportionately harms smaller fintech competitors.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'D000230',
    slug: 'donald-g-davis',
    name: 'Donald G. Davis',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 1st District',
    bio: 'Donald Davis has represented North Carolina\'s 1st Congressional District — covering the northeastern coastal plain — since 2023. A retired U.S. Air Force lieutenant colonel and a former state senator, he is one of a small number of veterans in the Democratic caucus. He serves on the House Agriculture and Armed Services Committees, focusing on rural economic development, veterans\' issues, and the agricultural communities that form the backbone of his district.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, one of a minority of Democrats to support the legislation. Davis argued that preventing a default was essential for rural North Carolina communities whose agricultural loans and federal program payments would have been jeopardized by a U.S. credit downgrade.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, using his Armed Services seat to advocate for personnel provisions affecting the 1st District\'s many military families and veterans. Davis emphasized provisions improving housing allowances and military family support programs.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the Medicaid and SNAP cuts would devastate the 1st District\'s rural and low-income communities. Davis noted that northeastern North Carolina has some of the state\'s highest rates of Medicaid enrollment and food insecurity.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Veterans Healthcare Access Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation expanding VA telehealth capacity and mobile health unit deployment to rural counties in eastern North Carolina. Davis, drawing on his Air Force background, argued that geographic barriers to VA care were creating an unacceptable healthcare gap for the 1st District\'s large veteran population.',
      },
    ],
  },

  {
    bioguideId: 'R000305',
    slug: 'deborah-k-ross',
    name: 'Deborah K. Ross',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 2nd District',
    bio: 'Deborah Ross has represented North Carolina\'s 2nd Congressional District — covering Raleigh and the Research Triangle — since 2021. A former North Carolina state House member and ACLU of North Carolina director, she serves on the House Judiciary and Science, Space, and Technology Committees. She has focused on civil liberties, technology policy, and the innovation economy of the Research Triangle — one of the nation\'s most concentrated technology and biomedical clusters.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsso', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, supporting provisions for direct payments, rental assistance, and vaccine distribution that she argued were critical to the Research Triangle\'s economic recovery. Ross highlighted the impact on small businesses and university research programs in the 2nd District.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, arguing the semiconductor investment and research funding would directly benefit Research Triangle institutions including Duke University, NC State, and UNC. Ross used her Science Committee seat to champion the bill\'s R&D provisions.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, citing proposed cuts to research funding and Medicaid. Ross argued the bill\'s research budget reductions would undermine the 2nd District\'s biomedical and technology innovation ecosystem.',
      },
    ],
    keyBills: [
      {
        title: 'Research Investment to Spark the Economy (RISE) Act',
        year: 2023,
        month: 3,
        summary: 'Championed legislation through the Science Committee to expand federal basic research funding and streamline grant processes for emerging technology areas. Ross argued that sustained federal investment in foundational research is the root cause of the Research Triangle\'s economic success and cannot be taken for granted.',
      },
    ],
  },

  {
    bioguideId: 'M001210',
    slug: 'gregory-f-murphy',
    name: 'Gregory F. Murphy',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 3rd District',
    bio: 'Greg Murphy has represented North Carolina\'s 3rd Congressional District — covering the coastal plain and Outer Banks — since 2019, winning a special election following the death of Walter Jones. A urologist and kidney transplant specialist, he is one of the few physicians in the House and serves on the Ways and Means and Veterans\' Affairs Committees. He has focused on healthcare policy, veterans\' benefits, and the needs of the military communities near Marine Corps Air Station Cherry Point.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsha', name: 'House Committee on House Administration', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing as a physician that Medicare drug price negotiation provisions would reduce pharmaceutical innovation and harm patients who depend on new drug development. Murphy was among the most vocal physician-members opposing the healthcare provisions.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Murphy has consistently supported strong immigration enforcement, particularly regarding public safety impacts in eastern North Carolina.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package\'s tax extensions and healthcare reform provisions. Murphy backed the bill\'s modifications to Medicaid, arguing they would improve program integrity while protecting access for truly eligible beneficiaries.',
      },
    ],
    keyBills: [
      {
        title: 'Medicare Advantage Value-Based Care Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation through the Ways and Means Committee to expand value-based care arrangements in Medicare Advantage, drawing on his clinical background as a transplant specialist. Murphy argued that fee-for-service incentives drive up costs without improving outcomes and that shifting to quality-based payment models would save Medicare billions.',
      },
    ],
  },

  {
    bioguideId: 'F000477',
    slug: 'valerie-p-foushee',
    name: 'Valerie P. Foushee',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 4th District',
    bio: 'Valerie Foushee has represented North Carolina\'s 4th Congressional District — encompassing Chapel Hill, Durham, and much of the Research Triangle — since 2023. She previously served in the North Carolina State Senate and on the Orange County Board of Commissioners. She sits on the House Transportation and Infrastructure and Science, Space, and Technology Committees, focusing on infrastructure investment and research funding for the university-rich 4th District.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Supported the CHIPS and Science Act as a state senator during the legislative process that led to its passage. After arriving in Congress in 2023, Foushee used her Science Committee seat to champion implementation funding that directly benefits North Carolina universities including UNC-Chapel Hill and Duke.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the proposed cuts to research funding, Medicaid, and student loan programs would devastate the 4th District\'s universities and the lower-income communities surrounding them. Foushee was particularly critical of proposed NIH funding reductions.',
      },
    ],
    keyBills: [
      {
        title: 'University Research Security and Innovation Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation through the Science Committee to strengthen security protocols protecting federally funded university research from foreign adversary theft while reducing compliance burdens on researchers. Foushee argued that both under-regulation and over-regulation threaten North Carolina\'s research universities.',
      },
    ],
  },

  {
    bioguideId: 'A000370',
    slug: 'alma-s-adams',
    name: 'Alma S. Adams',
    party: 'D',
    chamber: 'House',
    district: 12,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 12th District',
    bio: 'Alma Adams has represented North Carolina\'s 12th Congressional District — centered on Charlotte — since 2014. Before Congress, she served in the North Carolina General Assembly for 20 years and was a professor of art education at Bennett College, an HBCU in Greensboro. She co-chairs the Congressional HBCU Caucus and sits on the House Agriculture and Education and Workforce Committees, focusing on minority-serving institutions, nutrition programs, and workforce development.',
    sinceYear: 2014,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, supporting provisions that included $2.7 billion for historically Black colleges and universities — the largest single federal investment in HBCUs in history. Adams had been among the most vocal advocates for HBCU-specific funding in the relief negotiations.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, highlighting investments in Charlotte\'s public transit, broadband, and water infrastructure. Adams emphasized that the bill\'s rural broadband provisions would also benefit historically underserved communities across North Carolina.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing the SNAP cuts and Medicaid work requirements would harm Charlotte\'s low-income and minority communities. Adams was particularly critical of proposed cuts to SNAP, which she argued directly undercut her work on the Agriculture Committee.',
      },
    ],
    keyBills: [
      {
        title: 'HBCU Historic Building Restoration and Campus Revitalization Act',
        year: 2022,
        month: 5,
        summary: 'Introduced legislation funding restoration of historic buildings and campus infrastructure at historically Black colleges and universities, addressing the significant deferred maintenance backlog at many HBCUs. Adams, a former HBCU professor, argued that crumbling campus infrastructure undermines the competitiveness of HBCUs in recruiting students and faculty.',
      },
    ],
  },

  {
    bioguideId: 'R000603',
    slug: 'david-rouzer',
    name: 'David Rouzer',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 7th District',
    bio: 'David Rouzer has represented North Carolina\'s 7th Congressional District — covering the Cape Fear region and southeastern coastal counties — since 2015. A former North Carolina state senator and USDA rural development official, he serves on the House Agriculture, Transportation and Infrastructure, and Science Committees. He focuses on agriculture, coastal water management, and the needs of Fort Liberty (formerly Fort Bragg) and other military installations in his district.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Farm Bill Reauthorization',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Was an active advocate through the Agriculture Committee for farm bill reauthorization, supporting commodity support programs critical to the tobacco, sweet potato, and hog farming industries that dominate the 7th District\'s rural economy. North Carolina ranks first nationally in sweet potato production and Rouzer has consistently fought to protect that industry.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Rouzer has consistently supported strong immigration enforcement, including measures affecting the agricultural workforce in southeastern North Carolina.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its agricultural provisions and spending reductions. Rouzer backed the bill after working to protect commodity support programs and crop insurance provisions important to the 7th District\'s farming communities.',
      },
    ],
    keyBills: [
      {
        title: 'Coastal Storm Damage Reduction Investment Act',
        year: 2023,
        month: 6,
        summary: 'Championed legislation through the Transportation and Infrastructure Committee to increase federal investment in coastal flood control, beach nourishment, and hurricane damage reduction infrastructure along the North Carolina coast. Rouzer argued the Cape Fear region faces increasing storm surge threats and that federal cost-sharing formulas systematically underinvest in coastal protection.',
      },
    ],
  },

  {
    bioguideId: 'H001067',
    slug: 'richard-hudson',
    name: 'Richard Hudson',
    party: 'R',
    chamber: 'House',
    district: 9,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 9th District',
    bio: 'Richard Hudson has represented North Carolina\'s 9th Congressional District — covering the Charlotte exurbs and Cabarrus County — since 2013. He chaired the National Republican Congressional Committee (NRCC) for the 118th Congress, playing a central role in the Republican effort to maintain their House majority. He serves on the House Energy and Commerce Committee, where he has focused on energy policy, telecommunications, and healthcare regulation.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Immigration enforcement has been a consistent priority for Hudson throughout his congressional tenure.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting military installations in his district including Fort Liberty. Hudson has consistently backed strong defense spending and military readiness through his decade in Congress.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package of tax extensions and spending reductions. Hudson backed the bill as a vehicle for extending the 2017 Tax Cuts and Jobs Act and advancing the legislative agenda he had campaigned for as NRCC chair.',
      },
    ],
    keyBills: [
      {
        title: 'Concealed Carry Reciprocity Act',
        year: 2021,
        month: 2,
        summary: 'Introduced legislation requiring states to recognize each other\'s concealed carry permits, allowing lawful gun owners to carry across state lines. Hudson has championed this legislation in multiple Congresses as a Second Amendment priority, arguing that patchwork state laws create legal traps for law-abiding gun owners traveling interstate.',
      },
    ],
  },

  {
    bioguideId: 'H001101',
    slug: 'pat-harrigan',
    name: 'Pat Harrigan',
    party: 'R',
    chamber: 'House',
    district: 10,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 10th District',
    bio: 'Pat Harrigan was elected to represent North Carolina\'s 10th Congressional District — covering the Piedmont foothills west of Charlotte — in 2024. A retired Army Special Forces officer who served multiple tours in Iraq and Afghanistan and lost both legs in combat, he is one of the most distinguished military veterans in the 119th Congress. He serves on the House Armed Services and Science, Space, and Technology Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Harrigan made border security and immigration enforcement central themes of his 2024 campaign.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2026, using his Armed Services Committee seat to advocate for Special Operations Forces personnel provisions and wounded warrior support programs. Harrigan\'s combat wounds and recovery experience have made him a particularly credible voice on military medical care and adaptive rehabilitation.',
      },
    ],
    keyBills: [
      {
        title: 'Wounded Warrior Healthcare Access Expansion Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation expanding access to specialized prosthetics, adaptive sports programs, and mental health services for wounded veterans at VA medical centers. Drawing on his personal experience recovering from combat wounds, Harrigan argued that VA rehabilitation programs remain chronically underfunded relative to the population of post-9/11 veterans with service-connected disabilities.',
      },
    ],
  },

  {
    bioguideId: 'E000246',
    slug: 'chuck-edwards',
    name: 'Chuck Edwards',
    party: 'R',
    chamber: 'House',
    district: 11,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 11th District',
    bio: 'Chuck Edwards has represented North Carolina\'s 11th Congressional District — covering the western mountain counties including Asheville — since 2023, defeating incumbent Madison Cawthorn in the 2022 Republican primary. A former North Carolina state senator, he serves on the House Appropriations and Budget Committees. His district was among the hardest hit by Hurricane Helene in September 2024, and disaster recovery has since become a defining focus of his congressional work.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Hurricane Helene Disaster Relief supplemental',
        year: 2024,
        month: 10,
        position: 'For',
        summary: 'Voted for emergency supplemental appropriations for Hurricane Helene disaster relief, using his Appropriations Committee seat to ensure western North Carolina received priority federal recovery funding. The storm caused catastrophic damage across the 11th District, and Edwards became the leading congressional advocate for the region\'s reconstruction.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Edwards has been a consistent supporter of strong immigration enforcement throughout his political career.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting provisions for tax extensions and spending reductions while working through Appropriations to protect disaster recovery funding for western North Carolina. Edwards secured assurances that Helene recovery programs would not be disrupted by the bill\'s spending cuts.',
      },
    ],
    keyBills: [
      {
        title: 'Western North Carolina Recovery and Resilience Act',
        year: 2025,
        month: 2,
        summary: 'Introduced comprehensive legislation authorizing long-term federal recovery investment for western North Carolina communities devastated by Hurricane Helene, including infrastructure reconstruction, housing grants, small business loans, and agricultural recovery programs. Edwards framed the bill as addressing the largest natural disaster in North Carolina\'s recorded history.',
      },
    ],
  },

  {
    bioguideId: 'F000450',
    slug: 'virginia-foxx',
    name: 'Virginia Foxx',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 5th District',
    bio: 'Virginia Foxx has represented North Carolina\'s 5th Congressional District — covering the northwestern Piedmont and mountain foothills — since 2005. She chaired the House Education and Workforce Committee from 2023 to 2025 and previously chaired the House Rules Committee. A former college president and Watauga County Board of Education member, she has been a leading Republican voice on higher education policy, accreditation reform, and reducing federal regulation of education.',
    sinceYear: 2005,
    committees: [
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Chair' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'College Cost Transparency and Student Protection Act',
        year: 2023,
        month: 9,
        position: 'For',
        summary: 'Voted for legislation she helped draft through the Education and Workforce Committee requiring colleges to provide standardized, plain-language financial aid offers and strengthening accreditation accountability standards. Foxx argued the higher education accreditation system had become a cartel that protected failing institutions from accountability.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Foxx has been a consistent supporter of strong immigration enforcement throughout her congressional career.',
      },
      {
        title: 'One Big Beautiful Bill — Rules Committee processing',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'As Rules Committee chair, Foxx managed the floor procedures for the House Republican budget reconciliation bill, a pivotal role in bringing the legislation to a vote. She voted for the final bill after shepherding it through the procedural gauntlet of the narrowly divided House.',
      },
    ],
    keyBills: [
      {
        title: 'FAFSA Simplification and Higher Education Accountability Act',
        year: 2023,
        month: 11,
        summary: 'Championed legislation building on the FAFSA Simplification Act to further reform the financial aid application process and strengthen institutional accountability standards. Foxx, who earned her bachelor\'s degree later in life while working, has consistently argued that federal student aid policy must prioritize value and outcome over credential inflation.',
      },
    ],
  },

  {
    bioguideId: 'M001240',
    slug: 'addison-p-mcdowell',
    name: 'Addison P. McDowell',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 6th District',
    bio: 'Addison McDowell was elected to represent North Carolina\'s 6th Congressional District in 2024, succeeding Kathy Manning. A businessman and Republican Party activist from Greensboro, McDowell is a first-term member who serves on the House Budget, Natural Resources, and Transportation and Infrastructure Committees. His district covers the Piedmont Triad region, including Greensboro, High Point, and parts of the surrounding counties.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, one of his first votes as a congressman, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. McDowell made immigration enforcement a central issue in his 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package of tax extensions, spending reductions, and border security provisions. McDowell backed the bill as consistent with his campaign platform of fiscal conservatism.',
      },
    ],
    keyBills: [
      {
        title: 'Piedmont Triad Manufacturing Workforce Initiative',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation funding apprenticeship and skills training programs tailored to the furniture, textiles, and advanced manufacturing industries of the Piedmont Triad. McDowell argued that the Greensboro-High Point area\'s industrial heritage creates a natural foundation for advanced manufacturing revival if federal workforce programs are aligned to its specific sector needs.',
      },
    ],
  },

  {
    bioguideId: 'H001102',
    slug: 'mark-harris',
    name: 'Mark Harris',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 8th District',
    bio: 'Mark Harris was elected to represent North Carolina\'s 8th Congressional District — covering Concord, Monroe, and the Charlotte suburbs — in 2024. A Baptist pastor and frequent Republican candidate, Harris previously ran for the same seat in 2018 and was declared the winner before the election was voided due to an absentee ballot fraud investigation. He serves on the House Agriculture, Education and Workforce, and Judiciary Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, among his first votes in Congress, mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Harris made immigration enforcement and border security central themes of his 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the package of tax extensions, spending reductions, and border security provisions. Harris backed the bill as aligned with his conservative political philosophy and his constituents\' priorities.',
      },
    ],
    keyBills: [
      {
        title: 'Parental Rights in Education Protection Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation through the Education and Workforce Committee codifying parental notification rights in K-12 public schools receiving federal funding, including requirements that schools notify parents of changes to their children\'s names, pronouns, or participation in certain programs. Harris, a pastor, argued the bill reflects the primacy of parental authority over children\'s education.',
      },
    ],
  },

  {
    bioguideId: 'K000405',
    slug: 'brad-knott',
    name: 'Brad Knott',
    party: 'R',
    chamber: 'House',
    district: 13,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 13th District',
    bio: 'Brad Knott was elected to represent North Carolina\'s 13th Congressional District — covering the Raleigh exurbs and Johnston, Harnett, and Lee counties — in 2024, succeeding Jeff Jackson. A former federal prosecutor with the U.S. Attorney\'s Office for the Eastern District of North Carolina, Knott brings a law enforcement background to the House Judiciary, Homeland Security, and Transportation and Infrastructure Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsso', name: 'House Committee on Ethics', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Knott, as a former federal prosecutor, brought firsthand law enforcement perspective to his advocacy for the bill, arguing that consistent immigration enforcement is essential to public safety.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting the border security and spending reduction provisions. Knott backed the bill as consistent with his campaign platform of fiscal conservatism and strong enforcement of federal law.',
      },
    ],
    keyBills: [
      {
        title: 'Federal Prosecutor Workload and Court Backlog Relief Act',
        year: 2025,
        month: 7,
        summary: 'Introduced legislation through the Judiciary Committee to create additional federal magistrate judge positions and expand U.S. Attorney office staffing in high-caseload districts. Knott, drawing on his prosecutorial experience, argued that federal court backlogs undermine justice and strain the resources of already-overburdened U.S. Attorney offices.',
      },
    ],
  },

  {
    bioguideId: 'M001236',
    slug: 'tim-moore',
    name: 'Tim Moore',
    party: 'R',
    chamber: 'House',
    district: 14,
    state: 'North Carolina',
    currentTitle: 'U.S. Representative, North Carolina 14th District',
    bio: 'Tim Moore was elected to represent North Carolina\'s 14th Congressional District — a new district covering the Piedmont area between Charlotte and Greensboro — in 2024. He previously served as Speaker of the North Carolina House of Representatives from 2015 to 2024, making him one of the most prominent state legislative leaders to enter Congress in the 119th class. He serves on the House Budget and Financial Services Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Moore had supported immigration enforcement measures during his decade as NC House Speaker and carried those priorities into his federal legislative work.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill. Moore, with his decade of experience managing North Carolina\'s state budget as House Speaker, brought a state government finance perspective to the debate, arguing that federal spending reform was long overdue.',
      },
    ],
    keyBills: [
      {
        title: 'State Financial Innovations Act',
        year: 2025,
        month: 8,
        summary: 'Introduced legislation through the Financial Services Committee creating a federal framework allowing states greater flexibility to experiment with regulatory sandbox programs for financial technology innovation. Drawing on North Carolina\'s experience as a fintech-friendly state under his speakership, Moore argued that state-level experimentation should be the primary driver of financial regulatory modernization.',
      },
    ],
  },
]

export const ncDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

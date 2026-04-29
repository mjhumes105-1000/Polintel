import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'G000359',
    slug: 'lindsey-graham',
    name: 'Lindsey Graham',
    party: 'R',
    chamber: 'Senate',
    state: 'South Carolina',
    currentTitle: 'U.S. Senator from South Carolina',
    bio: 'Lindsey Graham has represented South Carolina in the U.S. Senate since 2003, having previously served in the House from 1995 to 2003. A retired Air Force Reserve Colonel and JAG officer, he sits on the Senate Judiciary and Appropriations Committees and chairs the Senate Budget Committee. Graham has been one of the most prominent figures in Republican foreign policy debates, oscillating between hawkish internationalism and accommodation of Donald Trump\'s nationalist impulses — a tension that has defined his career since 2016.',
    sinceYear: 1995,
    committees: [
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Brett Kavanaugh Confirmation',
        year: 2018,
        month: 10,
        position: 'For',
        summary: 'Voted to confirm Brett Kavanaugh to the Supreme Court and delivered a nationally televised denunciation of the confirmation process that became one of the defining moments of his political career. Graham\'s aggressive defense of Kavanaugh marked a dramatic alignment with Trump that transformed his political standing among South Carolina conservatives.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Graham has been a consistent advocate for strong border security enforcement and supported the bill as an essential baseline step toward restoring order at the southern border.',
      },
      {
        title: 'FY2026 Budget Resolution — Senate Budget Committee',
        year: 2025,
        month: 4,
        position: 'For',
        summary: 'As Budget Committee Chairman, Graham shepherded the FY2026 budget resolution through the Senate, establishing the framework for the Republican reconciliation package. His chairmanship put him at the center of the fiscal debate, balancing defense spending increases with the spending cuts demanded by fiscal conservatives.',
      },
    ],
    keyBills: [
      {
        title: 'No Amnesty Act — Immigration Enforcement',
        year: 2023,
        month: 5,
        summary: 'Championed legislation toughening the legal standard for asylum claims and increasing penalties for illegal re-entry, reflecting his long-standing position that immigration reform requires enforcement-first measures before any path to legalization. Graham had co-authored the 2013 Gang of Eight comprehensive immigration bill but shifted to enforcement-first positioning thereafter.',
      },
      {
        title: 'Lindsey Graham Budget Framework — Defense and Reconciliation',
        year: 2025,
        month: 3,
        summary: 'As Senate Budget Committee Chairman, developed the budget resolution framework authorizing the FY2026 reconciliation process, including a significant increase in defense spending and instructions for $1.5 trillion in spending reductions over ten years. Graham used his chairmanship to advocate for defense investment levels higher than many House Republicans proposed.',
      },
    ],
  },

  {
    bioguideId: 'S001184',
    slug: 'tim-scott',
    name: 'Tim Scott',
    party: 'R',
    chamber: 'Senate',
    state: 'South Carolina',
    currentTitle: 'U.S. Senator from South Carolina',
    bio: 'Tim Scott has represented South Carolina in the U.S. Senate since 2013, having been appointed by Governor Nikki Haley to fill the seat vacated by Jim DeMint. He previously served in the House and on the Charleston City Council. Scott ran for the Republican presidential nomination in 2024 before suspending his campaign and endorsing Donald Trump. He chairs the Senate Banking Committee and has focused on opportunity zones, police reform, economic empowerment, and school choice.',
    sinceYear: 2011,
    committees: [
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Chair' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul after successfully negotiating the inclusion of Opportunity Zone provisions he had championed for years. The Opportunity Zone program became Scott\'s signature legislative achievement, designating low-income census tracts for preferential capital gains tax treatment to attract private investment.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Scott has supported strong immigration enforcement throughout his Senate tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Banking Committee chairmanship to advocate for financial regulatory provisions he argued would expand capital access in underserved communities. Scott championed the bill\'s Opportunity Zone expansion and school choice provisions as essential to his economic empowerment agenda.',
      },
    ],
    keyBills: [
      {
        title: 'Opportunity Zones — Tax Cuts and Jobs Act Provisions',
        year: 2017,
        month: 10,
        summary: 'Authored the Opportunity Zone provisions included in the Tax Cuts and Jobs Act, creating preferential capital gains tax treatment for investments in designated low-income census tracts. The program has attracted over $75 billion in private investment to distressed communities and stands as Scott\'s most consequential legislative achievement.',
      },
      {
        title: 'Justice Act — Police Reform',
        year: 2020,
        month: 6,
        summary: 'Introduced the JUSTICE Act as Senate Republicans\' alternative to Democratic police reform legislation following George Floyd\'s murder, proposing increased data collection on use-of-force incidents, body camera requirements, and anti-lynching legislation while stopping short of qualified immunity reform. The bill did not advance past Senate debate but established Scott as the Republican Party\'s primary voice on policing reform.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M000194',
    slug: 'nancy-mace',
    name: 'Nancy Mace',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 1st District',
    bio: 'Nancy Mace has represented South Carolina\'s 1st Congressional District — Charleston and the Lowcountry — since 2021, defeating incumbent Democrat Joe Cunningham. The first woman to graduate from The Citadel, she has carved out an independent streak within House Republican politics, including calling for Donald Trump\'s resignation after January 6th before later reconciling with him. She serves on the Veterans\' Affairs, Oversight, and Armed Services Committees.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy — Speaker Vote',
        year: 2023,
        month: 1,
        position: 'Against',
        summary: 'Voted against Kevin McCarthy in multiple rounds of the Speaker election before ultimately supporting his election on the 15th ballot. Mace was among Republicans who used the speaker fight to extract procedural concessions, including stronger motions to vacate thresholds and changes to committee assignment processes.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting Joint Base Charleston — the district\'s largest employer — and the Port of Charleston\'s military logistics mission. Mace used her Armed Services seat to advocate for South Carolina military installations and coastal defense infrastructure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill after securing modifications to veterans\' healthcare provisions she argued were inadequate in the original draft. Mace has been a consistent advocate for veterans\' benefits on the Veterans\' Affairs Committee and conditioned her support on protecting VA healthcare funding.',
      },
    ],
    keyBills: [
      {
        title: 'SAFER Banking Act — Cannabis Provisions',
        year: 2023,
        month: 9,
        summary: 'Co-sponsored the SAFER Banking Act allowing cannabis businesses to access banking services in states where marijuana is legal, positioning herself as an unusual conservative voice for cannabis reform. Mace argued the lack of banking access for legal cannabis businesses creates public safety problems by forcing cash-only operations.',
      },
      {
        title: 'Veterans Mental Health and Suicide Prevention Act',
        year: 2022,
        month: 7,
        summary: 'Championed legislation expanding VA mental health services for veterans experiencing trauma-related disorders and suicide risk, drawing on her Veterans\' Affairs Committee assignment. The Charleston area has a significant veteran population, and Mace has made veteran mental healthcare a signature constituent service issue.',
      },
    ],
  },

  {
    bioguideId: 'W000795',
    slug: 'joe-wilson',
    name: 'Joe Wilson',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 2nd District',
    bio: 'Joe Wilson has represented South Carolina\'s 2nd Congressional District — Columbia and the Midlands — since 2001. A retired Army National Guard Colonel and attorney, he is best known nationally for shouting "You lie!" at President Obama during a 2009 joint address to Congress. He serves on the Armed Services, Education, and Foreign Affairs Committees and has been a consistent conservative voice on military readiness, education reform, and confronting adversaries including China, Iran, and Russia.',
    sinceYear: 2001,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting Fort Jackson — the Army\'s largest training base, located in his district — and Shaw Air Force Base. Wilson has been a consistent advocate for South Carolina military installations through his Armed Services Committee seat across his more than two-decade tenure.',
      },
      {
        title: 'Foreign Aid Package — Ukraine, Israel, Taiwan',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion supplemental foreign aid package, taking a hawkish position in line with his Foreign Affairs Committee work. Wilson argued that failing to support democratic allies facing authoritarian aggression would embolden adversaries and ultimately threaten American security.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Wilson has consistently supported strong immigration enforcement measures throughout his congressional career.',
      },
    ],
    keyBills: [
      {
        title: 'Fort Jackson Expansion and Modernization Act',
        year: 2023,
        month: 6,
        summary: 'Championed provisions in the NDAA and Armed Services Committee work authorizing infrastructure investments at Fort Jackson to expand its training capacity and modernize facilities for the Army\'s growing recruiter training mission. Fort Jackson trains approximately 50% of all Army recruits, and Wilson has been its most consistent congressional advocate for over two decades.',
      },
      {
        title: 'Countering Communist China Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation establishing a comprehensive framework for countering Chinese economic espionage, military-civil fusion activities, and influence operations in the United States. Wilson has been a leading House voice on China as a strategic competitor and authored multiple bills targeting Chinese government entities and affiliated institutions.',
      },
    ],
  },

  {
    bioguideId: 'B001325',
    slug: 'sheri-biggs',
    name: 'Sheri Biggs',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 3rd District',
    bio: 'Sheri Biggs has represented South Carolina\'s 3rd Congressional District — the Upstate and western Piedmont region — since 2025, succeeding Jeff Duncan. A physician and anesthesiologist who practiced in Anderson County, she serves on the Homeland Security, Science, and Foreign Affairs Committees. Her district is home to significant manufacturing, textile heritage, and the BMW manufacturing plant in Greer, and she has focused on healthcare policy, manufacturing competitiveness, and national security.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes as one of her first floor votes. Biggs has supported strict immigration enforcement as a priority consistent with her district\'s conservative orientation and her Homeland Security Committee assignment.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its healthcare regulatory provisions and manufacturing incentives that she argued would benefit the Upstate\'s growing advanced manufacturing economy. Biggs used her physician background to advocate for provisions reducing healthcare regulatory burdens on private practice.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the FY2026 continuing resolution, supporting provisions she argued would maintain manufacturing-related federal programs while reducing overall discretionary spending. As a freshman, Biggs has generally aligned with House Republican leadership on funding and procedural votes.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Patient Access to Anesthesia Care Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation preserving physician supervision requirements for Certified Registered Nurse Anesthetists in federal healthcare programs, drawing on her background as an anesthesiologist. Biggs argued that weakening physician oversight requirements for complex anesthesia procedures would compromise patient safety.',
      },
      {
        title: 'Manufacturing Competitiveness and Workforce Development Act',
        year: 2025,
        month: 7,
        summary: 'Championed legislation expanding STEM apprenticeship programs and vocational training in advanced manufacturing, targeting the workforce needs of Upstate South Carolina\'s growing auto, aerospace, and industrial sector. The district\'s BMW plant and growing supplier network have created sustained demand for skilled technical workers that current workforce programs have not kept pace with.',
      },
    ],
  },

  {
    bioguideId: 'T000480',
    slug: 'william-r-timmons-iv',
    name: 'William R. Timmons IV',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 4th District',
    bio: 'William Timmons has represented South Carolina\'s 4th Congressional District — Greenville and Spartanburg — since 2019. A former South Carolina state senator and attorney who studied at Oxford and Georgetown Law, he serves on the Financial Services and Oversight Committees. His district is one of the fastest-growing in the Southeast, anchored by Greenville\'s booming manufacturing and technology economy, and he has focused on economic development, financial services reform, and fiscal conservatism.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting it as a necessary step to extract meaningful — if insufficient — spending concessions. Timmons has positioned himself as a fiscal conservative who is willing to support bipartisan compromises when they deliver substantive policy gains.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Timmons has consistently supported strong immigration enforcement measures throughout his congressional tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its financial services deregulation provisions and tax reductions that he argued would accelerate Greenville\'s already robust economic growth. Timmons used his Financial Services Committee seat to advocate for provisions reducing compliance burdens on regional banks serving his district\'s dynamic business community.',
      },
    ],
    keyBills: [
      {
        title: 'CBDC Anti-Surveillance State Act',
        year: 2024,
        month: 5,
        summary: 'Co-sponsored legislation prohibiting the Federal Reserve from issuing a Central Bank Digital Currency without explicit congressional authorization, arguing that a CBDC would give the federal government unprecedented surveillance power over Americans\' financial transactions. Timmons used his Financial Services Committee seat to raise concerns about the privacy implications of government-issued digital currency.',
      },
      {
        title: 'Community Bank Regulatory Relief Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation reducing regulatory compliance burdens on community banks with under $10 billion in assets, arguing that Dodd-Frank reporting requirements designed for systemically important institutions impose disproportionate costs on regional lenders that serve Greenville\'s small business community.',
      },
    ],
  },

  {
    bioguideId: 'N000190',
    slug: 'ralph-norman',
    name: 'Ralph Norman',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 5th District',
    bio: 'Ralph Norman has represented South Carolina\'s 5th Congressional District — the Midlands and Piedmont including Rock Hill and Sumter — since 2017, winning a special election. A real estate developer and businessman, he is a member of the House Freedom Caucus and serves on the Budget, Rules, and Financial Services Committees. He is one of the most consistently conservative members of the House, regularly voting against bipartisan spending agreements he views as insufficient in their fiscal restraint.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the debt ceiling deal, arguing it suspended borrowing limits with insufficient spending concessions. Norman has been among the most consistent "no" votes on any deal that does not include what he considers meaningful structural spending reform, reflecting his Freedom Caucus commitment to hard fiscal constraints.',
      },
      {
        title: 'Against Kevin McCarthy — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Voted to remove Speaker Kevin McCarthy, one of eight Republicans who triggered the historic ouster. Norman cited McCarthy\'s bipartisan spending deal as a betrayal of the commitments made during the January Speaker fight and argued the House needed leadership willing to hold a firm line on fiscal conservatism.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill after initially expressing concerns that spending cuts were insufficient. Norman ultimately supported the package as the most significant step toward fiscal consolidation available, while continuing to argue that more aggressive deficit reduction is necessary.',
      },
    ],
    keyBills: [
      {
        title: 'Balanced Budget Amendment — Annual Advocacy',
        year: 2023,
        month: 2,
        summary: 'Re-introduced the Balanced Budget Amendment to the Constitution, legislation requiring the federal government to balance its budget annually or obtain a supermajority of Congress to run a deficit. Norman has championed the amendment throughout his tenure as the cornerstone of his fiscal conservative agenda.',
      },
      {
        title: 'No Budget, No Pay Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation withholding congressional salaries when Congress fails to pass a budget by the statutory deadline, creating a direct financial incentive for timely budget passage. Norman argued the current system allows members of Congress to benefit from government funding while failing at their most basic fiscal responsibility.',
      },
    ],
  },

  {
    bioguideId: 'C000537',
    slug: 'james-e-clyburn',
    name: 'James E. Clyburn',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 6th District',
    bio: 'James Clyburn has represented South Carolina\'s 6th Congressional District — Columbia, Orangeburg, and the Lowcountry — since 1993. He served as House Majority Whip from 2007 to 2011 and 2019 to 2023, the highest position ever held by an African American in the House at the time of his first election as Whip. A pivotal figure in Joe Biden\'s 2020 primary victory through his South Carolina endorsement, he serves on the Appropriations Committee and remains a powerful voice on civil rights, healthcare equity, and rural economic development.',
    sinceYear: 1993,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, emphasizing its direct payments, expanded child tax credit, and state and local government support for South Carolina\'s rural and historically Black communities that bore disproportionate pandemic burdens. Clyburn had been a leading advocate for robust relief funding and used his Majority Whip position to secure Democratic votes.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, securing investments in rural broadband, water systems, and transportation infrastructure for South Carolina\'s 6th District — one of the most rural and economically distressed districts in the Southeast. Clyburn used his Appropriations seat to advocate for rural development provisions targeting historically underserved communities.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts would eliminate healthcare coverage for tens of thousands of South Carolina residents and its SNAP reductions would increase food insecurity in a district with among the highest poverty rates in the country. Clyburn called the bill a threat to the social safety net he has spent three decades building.',
      },
    ],
    keyBills: [
      {
        title: '10-20-30 Rural Investment Formula',
        year: 2021,
        month: 4,
        summary: 'Championed the inclusion of his 10-20-30 formula in major legislation, requiring that 10% of federal program funds flow to counties where 20% or more of the population has lived below the poverty line for 30 years. Clyburn authored the provision to direct federal investment toward persistently poor rural counties — including many in his district — that have historically been left behind by formula-based distribution.',
      },
      {
        title: 'Dignity in Aging Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation strengthening Medicaid long-term care coverage and expanding home and community-based services for elderly and disabled South Carolinians. Clyburn argued that his district\'s large elderly population — often lacking the resources for private long-term care — deserves federal support to age with dignity in their communities.',
      },
    ],
  },

  {
    bioguideId: 'F000478',
    slug: 'russell-fry',
    name: 'Russell Fry',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'South Carolina',
    currentTitle: 'U.S. Representative, South Carolina 7th District',
    bio: 'Russell Fry has represented South Carolina\'s 7th Congressional District — the Grand Strand, Pee Dee, and northeast Horry County coast — since 2023, defeating incumbent Tom Rice in a primary after Rice voted for Donald Trump\'s impeachment. A former South Carolina state representative and attorney, he serves on the Judiciary and Energy and Commerce Committees and has focused on border security, reducing government regulation, and defending conservative social positions. His district includes Myrtle Beach, one of the nation\'s top tourist destinations.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Immigration enforcement was central to Fry\'s primary campaign against Tom Rice and remains a priority issue for his conservative Grand Strand constituency.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal, arguing it did not make sufficient spending reductions and suspended the debt limit with only minimal fiscal reform. Fry has positioned himself as a fiscal hawk and has opposed bipartisan spending agreements he views as inadequate.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its spending reductions, tax cuts, and border security provisions that align with his central campaign commitments. Fry used his Energy and Commerce Committee seat to advocate for provisions reducing energy regulatory burdens that he argued increase costs for Myrtle Beach\'s tourism and hospitality businesses.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Speech from Government Interference Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation prohibiting federal employees from pressuring social media companies to remove constitutionally protected speech, building on his Judiciary Committee work on First Amendment issues. Fry argued that federal government coordination with platforms to moderate content constitutes unconstitutional viewpoint discrimination.',
      },
      {
        title: 'Grand Strand Tourism and Coastal Economy Protection Act',
        year: 2024,
        month: 5,
        summary: 'Championed provisions protecting Myrtle Beach and Horry County\'s tourism economy from offshore energy development zones and new coastal regulations. Fry argued that any federal energy leasing or environmental regulations in the Grand Strand region must account for tourism\'s dominant role in the local economy.',
      },
    ],
  },
]

export const scDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

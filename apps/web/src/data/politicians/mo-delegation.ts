import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'H001089',
    slug: 'josh-hawley',
    name: 'Josh Hawley',
    party: 'R',
    chamber: 'Senate',
    state: 'Missouri',
    currentTitle: 'U.S. Senator from Missouri',
    bio: 'Josh Hawley has represented Missouri in the U.S. Senate since 2019, having previously served as Missouri Attorney General. A Yale Law graduate and former Supreme Court clerk who developed a distinctive populist-nationalist brand, he became nationally prominent — and controversial — for his raised fist salute to the January 6th protesters and his lone objection to the Electoral College certification. He has focused on antitrust action against Big Tech, protecting working-class communities, and child online safety.',
    sinceYear: 2019,
    committees: [
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Electoral College Certification — Pennsylvania',
        year: 2021,
        month: 1,
        position: 'Against',
        summary: 'Was the only senator to object to Pennsylvania\'s Electoral College votes after the January 6th Capitol attack — the sole senator to maintain his objection through the violence. The decision cost Hawley his Simon & Schuster book deal and drew widespread condemnation, but he defended the objection as a legitimate constitutional process.',
      },
      {
        title: 'Kids Online Safety Act',
        year: 2024,
        month: 7,
        position: 'For',
        summary: 'Co-authored and voted for the Kids Online Safety Act, landmark legislation requiring social media platforms to mitigate harmful content for minors and giving parents new oversight tools. The bill passed the Senate 91–3, and Hawley\'s partnership with Democratic Sen. Richard Blumenthal on the legislation was one of his most significant bipartisan achievements.',
      },
      {
        title: 'Against Foreign Aid — Ukraine',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the supplemental foreign aid package for Ukraine, Israel, and Taiwan, arguing that American resources should be directed to domestic priorities and that the Ukraine war does not serve U.S. national interests. Hawley has been among the Senate\'s most vocal critics of sustained U.S. military aid to Ukraine.',
      },
    ],
    keyBills: [
      {
        title: 'AMERICA Act — Antitrust Reform',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation strengthening antitrust enforcement against dominant technology platforms, targeting anti-competitive acquisition strategies that Hawley argued stifle competition and harm American workers. The bill reflected his populist-conservative critique of corporate consolidation as distinct from traditional free-market Republican positions.',
      },
      {
        title: 'Kids Online Safety Act',
        year: 2024,
        month: 2,
        summary: 'Co-authored landmark legislation with Sen. Richard Blumenthal requiring social media platforms to implement features protecting minors from harmful content, allowing parents to monitor and limit usage, and establishing a "duty of care" standard for platforms. The legislation passed with overwhelming bipartisan support and became one of the most significant tech regulation bills in years.',
      },
    ],
  },

  {
    bioguideId: 'S001227',
    slug: 'eric-schmitt',
    name: 'Eric Schmitt',
    party: 'R',
    chamber: 'Senate',
    state: 'Missouri',
    currentTitle: 'U.S. Senator from Missouri',
    bio: 'Eric Schmitt has represented Missouri in the U.S. Senate since 2023, having previously served as Missouri Attorney General from 2019 to 2023. As AG, he became nationally known for leading a multi-state coalition suing China over COVID-19 and challenging Biden administration policies on immigration and vaccine mandates. In the Senate, he serves on the Armed Services, Judiciary, and Commerce Committees and has positioned himself as a hawkish conservative on China, immigration, and fiscal issues.',
    sinceYear: 2023,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Immigration enforcement was a signature issue of Schmitt\'s time as Missouri AG, where he led multiple lawsuits challenging Biden administration border policies, and the vote aligned with his central political identity.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, supporting provisions protecting Missouri\'s military installations including Whiteman Air Force Base and Fort Leonard Wood. Schmitt used his Armed Services Committee seat to advocate for B-21 Raider stealth bomber production funding critical to Whiteman\'s long-term mission.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting its defense spending increases and tax reductions. Schmitt championed provisions aligned with his China hawkishness, including restrictions on federal procurement from Chinese-affiliated companies.',
      },
    ],
    keyBills: [
      {
        title: 'Holding China Accountable for COVID-19 Act',
        year: 2023,
        month: 3,
        summary: 'Introduced Senate legislation building on the multi-state lawsuit he led as AG, establishing mechanisms to hold China accountable for pandemic-related damages through asset seizure and sanctions. Schmitt has made confronting China\'s economic and security threats a central pillar of his Senate work.',
      },
      {
        title: 'RESTRICT Act — Counter-Opposition',
        year: 2023,
        month: 9,
        summary: 'Opposed and worked to narrow the RESTRICT Act\'s surveillance provisions while supporting its core TikTok-related national security authority. Schmitt argued the original bill granted excessive executive power over internet communications and pushed for narrower targeted authority against specific Chinese-controlled platforms.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'B001324',
    slug: 'wesley-bell',
    name: 'Wesley Bell',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 1st District',
    bio: 'Wesley Bell has represented Missouri\'s 1st Congressional District — covering St. Louis and its northern suburbs — since 2025. A former St. Louis County Prosecutor elected in 2018 on a platform of criminal justice reform, he ran against Rep. Cori Bush in the 2024 Democratic primary and won decisively, backed by AIPAC and moderate Democrats. He serves on the Armed Services and Oversight Committees and has positioned himself as a pragmatic progressive focused on public safety and economic opportunity in the St. Louis metro.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts would devastate St. Louis\'s safety-net hospitals and eliminate coverage for hundreds of thousands of Missouri residents. Bell, who campaigned on pragmatic governance, drew a clear line against cuts to healthcare coverage he argued were incompatible with the district\'s needs.',
      },
      {
        title: 'FY2026 Appropriations — Community Development',
        year: 2026,
        month: 3,
        position: 'Against',
        summary: 'Voted against the FY2026 continuing resolution, citing cuts to community development block grants and HUD programs that support St. Louis neighborhood revitalization efforts. Bell argued the spending reductions would reverse progress in distressed north St. Louis communities that depend on federal community development investment.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the FY2026 NDAA, supporting provisions protecting Scott Air Force Base in the broader St. Louis metro and military manufacturing investments important to Missouri\'s defense industrial base. Bell\'s Armed Services seat gave him a platform to advocate for the region\'s significant defense sector.',
      },
    ],
    keyBills: [
      {
        title: 'Second Chance and Community Safety Act',
        year: 2025,
        month: 5,
        summary: 'Introduced legislation expanding reentry programs for formerly incarcerated individuals, combining job training, housing assistance, and substance use treatment to reduce recidivism. Bell drew on his experience as St. Louis County Prosecutor to design a bill combining accountability with rehabilitation pathways that he argued are essential to reducing violent crime.',
      },
      {
        title: 'Urban Infrastructure Investment Act',
        year: 2025,
        month: 8,
        summary: 'Championed legislation directing additional infrastructure investment to legacy cities like St. Louis with aging water systems, crumbling roads, and deferred transit maintenance. Bell argued that federal infrastructure formula funding systematically underinvests in urban cores relative to their population and economic significance.',
      },
    ],
  },

  {
    bioguideId: 'W000812',
    slug: 'ann-wagner',
    name: 'Ann Wagner',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 2nd District',
    bio: 'Ann Wagner has represented Missouri\'s 2nd Congressional District — St. Louis\'s affluent western suburbs — since 2013. A former U.S. Ambassador to Luxembourg and Republican National Committee co-chair, she brings a diplomatic and political operations background to the House Financial Services Committee and the Intelligence Committee. She is known for championing anti-human trafficking legislation and has authored several major bills addressing trafficking, child exploitation, and online predation.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'FOSTA-SESTA Act',
        year: 2018,
        month: 3,
        position: 'For',
        summary: 'Authored and championed FOSTA-SESTA, landmark legislation making it easier to prosecute websites that facilitate sex trafficking and allowing trafficking survivors to sue platforms that knowingly facilitated their exploitation. The bill passed 97–2 in the Senate after Wagner negotiated a bicameral compromise, and it became one of the most significant internet law changes since the Communications Decency Act.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting provisions protecting Missouri\'s defense installations and advancing the intelligence reform priorities she pursues through her Intelligence Committee seat. Wagner has consistently been a strong supporter of defense spending and intelligence community modernization.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its financial regulatory relief provisions and tax reductions. Wagner used her Financial Services Committee position to advocate for community bank regulatory relief she argued would expand credit access in Missouri\'s suburban and rural communities.',
      },
    ],
    keyBills: [
      {
        title: 'FOSTA-SESTA — Fight Online Sex Trafficking Act',
        year: 2018,
        month: 1,
        summary: 'Authored the House version of FOSTA-SESTA, which amended Section 230 of the Communications Decency Act to remove liability protections for websites that knowingly facilitate sex trafficking. Wagner spent years building bipartisan coalitions for the legislation and it stands as the defining legislative achievement of her congressional career.',
      },
      {
        title: 'Strengthening the Opposition to CSAM Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation increasing penalties for child sexual abuse material production and distribution and expanding NCMEC\'s (National Center for Missing and Exploited Children) technology tools to detect and report CSAM online. Wagner has maintained child exploitation as a signature issue across her entire congressional tenure.',
      },
    ],
  },

  {
    bioguideId: 'O000177',
    slug: 'robert-f-onder-jr',
    name: 'Robert F. Onder, Jr.',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 3rd District',
    bio: 'Robert Onder has represented Missouri\'s 3rd Congressional District — covering St. Charles County and exurban St. Louis — since 2025. A physician and former Missouri state senator, he is a prominent social conservative who championed Missouri\'s trigger law banning abortion following the Dobbs decision. He serves on the Education and Workforce, Judiciary, and Transportation Committees and has focused on healthcare policy, constitutional originalism, and reducing regulatory burdens on small businesses.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, one of his first major floor votes as a freshman representative. Onder has been a consistent advocate for strict immigration enforcement throughout his political career.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its pro-life provisions including Hyde Amendment codification and Medicaid defunding of abortion providers. Onder, who championed Missouri\'s trigger law as a state senator, made the bill\'s abortion-related provisions a priority in his floor advocacy.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the continuing resolution funding the federal government through the end of FY2026, supporting provisions that maintained funding for transportation infrastructure important to St. Charles County\'s rapidly growing communities and reduced spending on programs he viewed as regulatory overreach.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Life in Healthcare Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation expanding conscience protections for healthcare providers who object to participating in abortion procedures, building on his background as a physician and his longtime advocacy for pro-life healthcare policies. Onder argued robust conscience protections are essential to protecting medical professionals\' First Amendment rights.',
      },
      {
        title: 'Medical Provider Regulatory Relief Act',
        year: 2025,
        month: 6,
        summary: 'Championed legislation reducing CMS regulatory reporting burdens on small medical practices, drawing on his experience as a practicing physician navigating federal healthcare compliance requirements. Onder argued that administrative burdens consume physician time that should be spent on patient care.',
      },
    ],
  },

  {
    bioguideId: 'A000379',
    slug: 'mark-alford',
    name: 'Mark Alford',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 4th District',
    bio: 'Mark Alford has represented Missouri\'s 4th Congressional District — a large rural district covering central Missouri including Jefferson City and Columbia — since 2023. A former television news anchor and reporter with KCTV and KSHB in Kansas City, he serves on the Appropriations and Small Business Committees. He has focused on fiscal conservatism, supporting rural communities, and reducing government waste — themes that defined his journalism career covering government and politics in Missouri.',
    sinceYear: 2023,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal suspending the debt limit through early 2025 in exchange for discretionary spending caps. As a freshman member focused on fiscal responsibility, Alford supported the measure as an important — if incomplete — step toward reining in federal spending.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Alford has been a consistent supporter of stronger immigration enforcement throughout his tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Appropriations seat to advocate for provisions protecting rural infrastructure and agricultural programs important to his central Missouri district. Alford supported the bill\'s spending reductions as necessary steps toward fiscal sustainability.',
      },
    ],
    keyBills: [
      {
        title: 'DOGE Accountability and Transparency Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation requiring detailed public reporting on federal agency staffing changes and contract cancellations implemented through the Department of Government Efficiency initiative. Alford\'s journalism background informed his emphasis on transparency as essential to accountability in government reform.',
      },
      {
        title: 'Rural Small Business Growth Act',
        year: 2024,
        month: 7,
        summary: 'Championed legislation expanding SBA loan programs and technical assistance for small businesses in rural communities, drawing on his Small Business Committee assignment and his district\'s predominantly rural economic base. Alford argued rural small businesses face unique capital access challenges that standard SBA programs do not adequately address.',
      },
    ],
  },

  {
    bioguideId: 'C001061',
    slug: 'emanuel-cleaver',
    name: 'Emanuel Cleaver',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 5th District',
    bio: 'Emanuel Cleaver has represented Missouri\'s 5th Congressional District — Kansas City — since 2005. An ordained United Methodist minister and former Kansas City Mayor, he served as chairman of the Congressional Black Caucus from 2011 to 2013. He serves on the House Financial Services Committee and has been a consistent voice for affordable housing, predatory lending regulation, economic justice, and community reinvestment in Kansas City\'s historically underserved neighborhoods.',
    sinceYear: 2005,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, emphasizing its rental assistance and small business support provisions for Kansas City\'s minority-owned businesses and low-income neighborhoods that bore the brunt of pandemic economic disruption. Cleaver argued the package was essential to preventing a wave of evictions and business closures in Kansas City\'s urban core.',
      },
      {
        title: 'Dodd-Frank Wall Street Reform Preservation',
        year: 2022,
        month: 3,
        position: 'For',
        summary: 'Voted to preserve key Dodd-Frank consumer protection provisions, opposing Republican-backed efforts to weaken CFPB authority and predatory lending rules. Cleaver, who has served on Financial Services for two decades, has been a consistent advocate for consumer financial protections that he argues prevent the kind of predatory practices that devastated Black homeownership before the 2008 crisis.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts would eliminate coverage for tens of thousands of Kansas City residents and its SNAP reductions would increase food insecurity in communities already struggling with poverty. Cleaver invoked his ministerial background in calling the bill morally indefensible.',
      },
    ],
    keyBills: [
      {
        title: 'Green New Deal for Public Housing',
        year: 2022,
        month: 8,
        summary: 'Championed legislation investing in energy efficiency upgrades and climate resilience improvements for public housing developments, combining environmental and economic justice goals. Cleaver argued that Kansas City\'s aging public housing stock imposes high energy costs on low-income residents and represents a public health hazard that federal investment could remedy.',
      },
      {
        title: 'Community Reinvestment Act Modernization Act',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation updating the Community Reinvestment Act to require banks to meet updated standards for lending in low- and moderate-income communities, including digital banking services. Cleaver has spent two decades on Financial Services advocating for robust CRA enforcement to ensure banks serve all communities, not just profitable ones.',
      },
    ],
  },

  {
    bioguideId: 'G000546',
    slug: 'sam-graves',
    name: 'Sam Graves',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 6th District',
    bio: 'Sam Graves has represented Missouri\'s 6th Congressional District — covering northwest Missouri and Kansas City\'s northern suburbs — since 2001 and chairs the House Transportation and Infrastructure Committee. A farmer and Air National Guard veteran, he has used his Transportation Committee chairmanship to shape major infrastructure legislation including the INVEST in America Act. He also serves on the Armed Services Committee and is a leading advocate for rural transportation, waterway infrastructure, and agricultural aviation.',
    sinceYear: 2001,
    committees: [
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Chair' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the bipartisan infrastructure law, arguing its overall price tag was excessive and it included provisions expanding the federal role in transportation policy in ways that encroached on state prerogatives. Despite his Transportation Committee leadership, Graves consistently opposed the Democratic framework for the legislation.',
      },
      {
        title: 'Water Resources Development Act 2022',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Voted for the WRDA 2022, which authorized Army Corps of Engineers projects including critical Missouri River navigation improvements and flood control infrastructure. As Transportation Committee Chairman, Graves prioritized Missouri River waterway maintenance as essential to agricultural shipping in his district.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its spending reductions and transportation policy provisions he helped shape through his Committee chairmanship. Graves advocated for maintaining highway formula funding for rural states while endorsing the bill\'s overall fiscal consolidation framework.',
      },
    ],
    keyBills: [
      {
        title: 'INVEST in America Act — Republican Alternative',
        year: 2021,
        month: 6,
        summary: 'Developed the House Republican alternative to the surface transportation reauthorization, proposing a $400 billion infrastructure package focused on roads, bridges, and waterways without the EV charging, climate, and equity provisions included in the Democratic version. Graves used the process to articulate a conservative vision for federal transportation investment that prioritized traditional infrastructure over what he called "progressive agenda items."',
      },
      {
        title: 'Surface Transportation Reauthorization Act',
        year: 2023,
        month: 3,
        summary: 'Led Transportation Committee work on the surface transportation reauthorization extending federal highway, transit, and rail programs. Graves prioritized rural highway funding formulas, waterway infrastructure, and reducing regulatory barriers to infrastructure project delivery in the Republican-led package.',
      },
    ],
  },

  {
    bioguideId: 'B001316',
    slug: 'eric-burlison',
    name: 'Eric Burlison',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 7th District',
    bio: 'Eric Burlison has represented Missouri\'s 7th Congressional District — Springfield and southwest Missouri — since 2023, succeeding Billy Long. A former Missouri state representative known for his libertarian-leaning conservatism, he serves on the Transportation and Oversight Committees. He has been a consistent fiscal hawk and critic of government spending growth, having built his state legislative career opposing tax increases and regulatory expansion in Missouri\'s most staunchly conservative region.',
    sinceYear: 2023,
    committees: [
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the debt ceiling deal, arguing it did not make sufficient spending reductions and extended borrowing authority without meaningful structural reform. Burlison\'s hardline fiscal conservatism reflects his libertarian-leaning background and his district\'s skepticism of any compromise with Democratic spending priorities.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Burlison has been a consistent advocate for stricter immigration enforcement and border security throughout his political career.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill after initially expressing concerns about its overall price tag, ultimately supporting it as a significant step toward fiscal consolidation. Burlison used his Oversight Committee seat to push for stronger accountability provisions in the legislation\'s government efficiency section.',
      },
    ],
    keyBills: [
      {
        title: 'No Federal Funding for Critical Race Theory Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation prohibiting federal education grants from being used to fund curricula that Burlison characterized as critical race theory instruction. The bill reflected his district\'s intense focus on parental rights in education and his background as a state legislator who championed similar restrictions in Missouri.',
      },
      {
        title: 'Government Accountability and Transparency Enhancement Act',
        year: 2024,
        month: 6,
        summary: 'Introduced legislation through the Oversight Committee strengthening inspector general independence and expanding whistleblower protections for federal employees who report waste, fraud, and abuse. Burlison framed government accountability as a prerequisite for fiscal responsibility and consistent with his libertarian emphasis on limiting government power.',
      },
    ],
  },

  {
    bioguideId: 'S001195',
    slug: 'jason-smith',
    name: 'Jason Smith',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Missouri',
    currentTitle: 'U.S. Representative, Missouri 8th District',
    bio: 'Jason Smith has represented Missouri\'s 8th Congressional District — the rural Bootheel and southeast Missouri — since 2013 and chairs the House Ways and Means Committee. He has used the chairmanship to lead Republican tax policy, including conducting negotiations over prescription drug pricing with the Senate and overseeing the extension of the 2017 Tax Cuts and Jobs Act. A native of Salem, Missouri who was first elected to the Missouri House at age 21, he is one of the most powerful members of the House Republican caucus.',
    sinceYear: 2013,
    committees: [
      { slug: 'jstx', name: 'Joint Committee on Taxation', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Chair' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act as a leading Republican critic of its corporate minimum tax and Medicare drug pricing provisions. As the Ways and Means Ranking Member, Smith was the Republicans\' chief tax policy spokesperson opposing the bill, arguing its corporate minimum tax would harm Missouri manufacturers.',
      },
      {
        title: 'Tax Cuts and Jobs Act Extension — One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Led the Ways and Means Committee\'s development of the tax provisions in the Republican reconciliation bill, including the permanent extension of the 2017 TCJA individual tax rates and the expanded child tax credit. Smith\'s chairmanship positioned him as the architect of the largest tax policy package since the TCJA itself.',
      },
      {
        title: 'No Tax on Tips Act',
        year: 2025,
        month: 3,
        position: 'For',
        summary: 'Championed legislation eliminating federal income taxes on service worker tips, advancing the proposal through the Ways and Means Committee. The bill fulfilled a Trump campaign promise and Smith used his Committee chairmanship to fast-track the popular provision.',
      },
    ],
    keyBills: [
      {
        title: 'Tax Cuts and Jobs Act Extension',
        year: 2025,
        month: 1,
        summary: 'Led Ways and Means Committee development of legislation making permanent the 2017 Tax Cuts and Jobs Act individual and business tax provisions set to expire in 2025. The effort was the central domestic legislative priority of the 119th Congress, and Smith\'s chairmanship put him at the center of the multi-year battle over America\'s tax code.',
      },
      {
        title: 'No Tax on Tips Act',
        year: 2025,
        month: 3,
        summary: 'Introduced and advanced legislation through Ways and Means eliminating federal income taxes on tips received by food service, hospitality, and personal service workers. Smith argued the policy would provide immediate financial relief to millions of working-class Americans and honored a commitment made to service workers during the 2024 campaign.',
      },
    ],
  },
]

export const moDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

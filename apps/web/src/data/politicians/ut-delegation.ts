import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'L000577',
    slug: 'mike-lee',
    name: 'Mike Lee',
    party: 'R',
    chamber: 'Senate',
    state: 'Utah',
    currentTitle: 'U.S. Senator from Utah',
    bio: 'Mike Lee has represented Utah in the U.S. Senate since 2011, having defeated incumbent Sen. Bob Bennett in the Republican convention. A constitutional conservative and Harvard Law-trained attorney who clerked for Supreme Court Justice Samuel Alito, he chairs the Senate Energy and Natural Resources Committee and is closely associated with the Senate Freedom Caucus. He is one of Congress\'s most vocal advocates for limiting federal power and has made originalist constitutional interpretation a hallmark of his legislative career.',
    sinceYear: 2011,
    committees: [
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Bipartisan Infrastructure Law',
        year: 2021,
        month: 8,
        position: 'Against',
        summary: 'Lee was one of 19 Senate Republicans to vote against the $1.2 trillion Infrastructure Investment and Jobs Act, arguing the legislation was too expensive and represented a federal overreach into infrastructure traditionally managed at the state level. He objected to the bill\'s addition to the national debt and its expansion of federal regulatory reach.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, which he characterized as an unconstitutional expansion of federal power over energy markets and a tax increase on American businesses. Lee argued the bill\'s climate provisions would harm Utah\'s energy development interests and its corporate minimum tax would burden Utah\'s growing technology sector.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Lee has long advocated for strict immigration enforcement rooted in rule-of-law principles and was an early supporter of the legislation.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package as Chair of the Senate Energy and Natural Resources Committee, championing its rollback of federal clean energy mandates and acceleration of domestic oil, gas, and mineral development on Utah\'s vast federal lands. Lee also praised the bill\'s deep spending cuts as a meaningful step toward reducing the federal deficit, a signature constitutional priority he has pursued throughout his Senate career.',
      },
    ],
    keyBills: [
      {
        title: 'REINS Act (Regulations from the Executive in Need of Scrutiny)',
        year: 2023,
        month: 1,
        summary: 'Championed legislation requiring congressional approval of any major federal regulation with an economic impact over $100 million before it takes effect. Lee has introduced the REINS Act repeatedly over his Senate career, arguing that executive agencies have accumulated regulatory power that the Constitution assigns to Congress.',
      },
      {
        title: 'Article I Project Legislative Agenda',
        year: 2022,
        month: 3,
        summary: 'Advanced a package of constitutional separation-of-powers reforms aimed at restoring congressional authority ceded to the executive branch over decades. The agenda included war powers reform, regulatory reform, and budget process changes — reflecting Lee\'s consistent focus on limiting presidential power regardless of which party holds the White House.',
      },
    ],
  },

  {
    bioguideId: 'C001114',
    slug: 'john-r-curtis',
    name: 'John R. Curtis',
    party: 'R',
    chamber: 'Senate',
    state: 'Utah',
    currentTitle: 'U.S. Senator from Utah',
    bio: 'John Curtis was elected to the U.S. Senate from Utah in 2024 after serving three terms in the U.S. House representing Utah\'s 3rd District. A former mayor of Provo and businessman, he is known as one of the House Republican caucus\'s leading voices on climate and clean energy policy, founding the Conservative Climate Caucus. He brings a pragmatic center-right approach to energy, foreign affairs, and small business policy, and sits on the Senate Foreign Relations and Commerce Committees.',
    sinceYear: 2017,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the $52 billion semiconductor manufacturing and R&D investment bill, arguing it was essential to U.S. competitiveness with China and beneficial to Utah\'s growing technology and advanced manufacturing sector. Curtis has consistently supported technology and innovation investment as economic priorities.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, which he viewed as a responsible compromise extracting spending caps while avoiding a catastrophic U.S. default. Curtis supported the deal as consistent with his fiscally responsible approach to governance.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in the Senate after having supported similar immigration enforcement measures during his House tenure. Curtis has supported stronger immigration enforcement while also calling for comprehensive reform that addresses visa processing backlogs.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seat on the Senate Environment and Public Works Committee, backing its permitting reform and domestic energy provisions as market-driven approaches to energy policy more in line with his Conservative Climate Caucus philosophy than the mandates he has long opposed. Curtis supported the bill\'s tax cut extensions as critical to Utah\'s small business growth and tech sector competitiveness.',
      },
    ],
    keyBills: [
      {
        title: 'Conservative Climate Solutions Act',
        year: 2023,
        month: 4,
        summary: 'As founder of the House Conservative Climate Caucus, Curtis championed market-based approaches to reducing carbon emissions including nuclear energy investment, carbon capture technology funding, and permitting reform to accelerate clean energy deployment on federal lands. The legislation reflected his view that conservatives must engage on climate policy rather than cede the issue to Democrats.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M001213',
    slug: 'blake-d-moore',
    name: 'Blake D. Moore',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Utah',
    currentTitle: 'U.S. Representative, Utah 1st District',
    bio: 'Blake Moore has represented Utah\'s 1st Congressional District since 2021, succeeding Rob Bishop. A former trade finance executive and Ogden native, he serves on the House Ways and Means Committee, where he focuses on tax, trade, and fiscal policy affecting Utah\'s northern counties. Moore represents a swath of Utah from Ogden and Logan through the rural west desert, and has positioned himself as a pragmatic problem-solver within the Republican conference.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, using his Budget Committee experience to evaluate the trade-offs between spending caps and default risk. Moore has consistently emphasized fiscal discipline as a priority issue for his district.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, having shaped its tax provisions through his Ways and Means Committee assignment. Moore advocated for TCJA permanence and pass-through deduction extensions that benefit Utah\'s many small business owners.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seats on the House Ways and Means and Budget Committees, emphasizing that its permanent extension of the 2017 Tax Cuts and Jobs Act and enhanced pass-through deductions would deliver lasting tax relief to northern Utah\'s dense concentration of small businesses and family-owned manufacturing firms. Moore also supported the bill\'s fiscal consolidation measures as consistent with the spending discipline he has championed throughout his House career.',
      },
    ],
    keyBills: [
      {
        title: 'Tax Relief for American Families and Workers Act',
        year: 2024,
        month: 1,
        summary: 'Co-sponsored legislation expanding the child tax credit and extending business R&D expensing provisions through Ways and Means Committee. The bill passed the House with strong bipartisan support and reflected Moore\'s focus on family-friendly tax policy and support for Utah\'s innovative technology and manufacturing sectors.',
      },
    ],
  },

  {
    bioguideId: 'M001228',
    slug: 'celeste-maloy',
    name: 'Celeste Maloy',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Utah',
    currentTitle: 'U.S. Representative, Utah 2nd District',
    bio: 'Celeste Maloy was elected to Utah\'s 2nd Congressional District in a November 2023 special election, succeeding Chris Stewart who resigned for family health reasons. A lawyer who previously worked as legal counsel to Rep. Stewart, she serves on the House Natural Resources and Appropriations Committees and focuses on water rights, public lands, and federal land management issues critical to Utah\'s vast second district, which covers much of central and southern Utah including St. George and rural communities.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Maloy supported the bill as part of her commitment to stronger immigration enforcement and border security.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, emphasizing provisions related to federal land management and water infrastructure funding relevant to Utah\'s rural 2nd District communities. Her Natural Resources Committee role allowed her to shape relevant provisions.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from her seats on the House Natural Resources and Appropriations Committees, highlighting provisions that streamline federal land management permitting and support water infrastructure investment critical to Washington County and southern Utah\'s rapidly growing communities. Maloy also backed the bill\'s border security funding as an important step toward restoring rule of law at the southern border.',
      },
    ],
    keyBills: [
      {
        title: 'Colorado River Water Security Act',
        year: 2024,
        month: 5,
        summary: 'Championed legislation addressing the ongoing Colorado River water shortage, which directly affects Utah\'s Washington County and southwestern communities dependent on Lake Powell. Maloy has made water rights and western water management a signature legislative priority, reflecting the existential importance of water access for her district\'s growing communities.',
      },
    ],
  },

  {
    bioguideId: 'K000403',
    slug: 'mike-kennedy',
    name: 'Mike Kennedy',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Utah',
    currentTitle: 'U.S. Representative, Utah 3rd District',
    bio: 'Mike Kennedy was elected to Utah\'s 3rd Congressional District in 2024, succeeding John Curtis who moved to the Senate. A physician and attorney with a background in family medicine, he previously served in the Utah State Legislature for nine years. He serves on the House Natural Resources, Science, Space and Technology, and Transportation Committees, representing Utah County (Provo, Orem) and several rural central Utah counties.',
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
        summary: 'Voted for the Laken Riley Act in his first months in office, consistent with his support for stricter immigration enforcement expressed during his 2024 campaign. Kennedy has prioritized rule-of-law immigration policy as part of his conservative platform.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill as a freshman member, supporting its fiscal consolidation provisions and tax cut extensions. Kennedy brings his healthcare background to deliberations on Medicaid reform provisions in the bill.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seat on the House Natural Resources Committee, supporting its domestic energy provisions and federal land management reforms as beneficial to central and southern Utah\'s rural economies. Kennedy, a physician, also backed the bill\'s Medicaid work requirements as a sustainability measure consistent with his healthcare philosophy, arguing they encourage self-sufficiency while protecting Utah County\'s most vulnerable residents.',
      },
    ],
    keyBills: [
      {
        title: 'Precision Medicine and Health Data Protection Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation promoting precision medicine research while establishing patient data privacy guardrails, drawing on his medical background and Science Committee assignment. Utah County\'s significant biotech and health technology industry makes health innovation policy a natural legislative focus for Kennedy.',
      },
    ],
  },

  {
    bioguideId: 'O000086',
    slug: 'burgess-owens',
    name: 'Burgess Owens',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Utah',
    currentTitle: 'U.S. Representative, Utah 4th District',
    bio: 'Burgess Owens has represented Utah\'s 4th Congressional District since 2021, succeeding Democrat Ben McAdams. A former NFL safety who played on the New York Jets and Oakland Raiders Super Bowl teams, he was raised in Tallahassee and later became a businessman and conservative commentator in Utah. He sits on the House Education and Workforce and Transportation Committees and is a vocal advocate for school choice, parental rights in education, and free market principles.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Parents Bill of Rights Act',
        year: 2023,
        month: 3,
        position: 'For',
        summary: 'Voted for legislation requiring public schools to give parents access to curriculum materials, the right to speak at school board meetings, and notification of violence or criminal activity on school grounds. Owens has been one of the House\'s most vocal advocates for parental rights in education, reflecting the strong parental empowerment sentiment in Utah\'s large LDS community.',
      },
      {
        title: 'Against Student Loan Forgiveness',
        year: 2023,
        month: 6,
        position: 'Against',
        summary: 'Opposed President Biden\'s student loan forgiveness executive action, arguing it was unconstitutional and unfair to Americans who had repaid their loans or never attended college. Owens has framed debt forgiveness as a regressive wealth transfer that rewards poor financial decisions at the expense of working-class taxpayers.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its education and workforce provisions including expanded school choice mechanisms. Owens has made school choice one of his signature issues and worked through the Education Committee to strengthen relevant provisions in the bill.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seat on the House Education and Workforce Committee, championing its expansion of education savings accounts and school choice funding as a breakthrough for Utah County families seeking alternatives to traditional public schools. Owens also backed the bill\'s tax cut extensions and border security provisions as delivering on core conservative commitments for his constituents in Utah\'s 4th District.',
      },
    ],
    keyBills: [
      {
        title: 'Supporting Children Having Open Opportunities for Learning (SCHOOL) Act',
        year: 2023,
        month: 2,
        summary: 'Championed legislation expanding school choice by allowing federal education funds to follow students to the school of their family\'s choosing, including private and charter schools. Owens has argued that competition improves educational outcomes and that low-income and minority families especially deserve the ability to choose alternatives to underperforming public schools.',
      },
    ],
  },
]

export const utDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

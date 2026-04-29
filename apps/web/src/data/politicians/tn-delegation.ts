import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001243',
    slug: 'marsha-blackburn',
    name: 'Marsha Blackburn',
    party: 'R',
    chamber: 'Senate',
    state: 'Tennessee',
    currentTitle: 'U.S. Senator from Tennessee',
    bio: 'Marsha Blackburn has served in the U.S. Senate since 2019, having previously represented Tennessee\'s 7th Congressional District in the House for eight terms. A longtime conservative voice on cultural, tech, and national security issues, she has been particularly vocal on Internet privacy, online child safety, and opposition to social media companies she views as ideologically biased. She serves on the Judiciary, Commerce, and Veterans\' Affairs Committees and is one of the most nationally prominent conservative women in elected office.',
    sinceYear: 2019,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax would harm Tennessee\'s manufacturing base and that its climate provisions represented government overreach into the energy market. Blackburn has consistently opposed major Democratic spending legislation throughout her Senate tenure.',
      },
      {
        title: 'KOSA (Kids Online Safety Act)',
        year: 2024,
        month: 7,
        position: 'For',
        summary: 'Voted for the Kids Online Safety Act, which she co-authored with Senator Richard Blumenthal, imposing new duties on social media platforms to protect minors from harmful content. The bill passed 91–3 and represented a bipartisan achievement for Blackburn, who has made online child safety one of her signature issues.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Blackburn has been a consistent advocate for stricter immigration enforcement and was an early co-sponsor of the bill.',
      },
    ],
    keyBills: [
      {
        title: 'KOSA (Kids Online Safety Act)',
        year: 2024,
        month: 7,
        summary: 'Co-authored the Kids Online Safety Act, which passed the Senate 91–3 in July 2024, requiring social media platforms to implement safety features and parental controls to protect minors from harmful content including eating disorder promotion, self-harm, and trafficking. Blackburn and Blumenthal\'s multi-year bipartisan effort represented the most significant federal social media safety legislation to advance in years.',
      },
      {
        title: 'American Privacy Rights Act — Senate Provisions',
        year: 2024,
        month: 4,
        summary: 'Co-sponsored a bipartisan comprehensive federal data privacy framework establishing consumer rights over personal data and limits on what companies can collect and share. Blackburn has made consumer data privacy a cross-partisan issue, arguing it cuts across traditional partisan lines and that Republicans should lead on protecting citizens from Big Tech surveillance.',
      },
    ],
  },

  {
    bioguideId: 'H000601',
    slug: 'bill-hagerty',
    name: 'Bill Hagerty',
    party: 'R',
    chamber: 'Senate',
    state: 'Tennessee',
    currentTitle: 'U.S. Senator from Tennessee',
    bio: 'Bill Hagerty has represented Tennessee in the U.S. Senate since 2021, following his service as U.S. Ambassador to Japan under President Trump. A venture capital and private equity executive with extensive business experience in Asia, he serves on the Banking, Foreign Relations, and Rules Committees. His background in Japanese diplomacy and international finance informs his focus on trade policy, financial regulation, and Indo-Pacific security. He is considered a close ally of President Trump and played a key role in advancing several administration priorities in his first term.',
    sinceYear: 2021,
    committees: [
      { slug: 'jspr', name: 'Joint Committee on Printing', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssra', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax and energy provisions would harm Tennessee\'s automotive manufacturing supply chain and that the IRA represented the largest tax increase in decades. Hagerty has consistently opposed major Democratic economic legislation.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act — the first bill signed into law by President Trump in his second term — mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Hagerty has been a consistent supporter of strong immigration enforcement.',
      },
      {
        title: 'GENIUS Act (Guiding and Establishing National Innovation for U.S. Stablecoins)',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for his own GENIUS Act establishing a federal regulatory framework for stablecoins — digital currencies pegged to assets like the U.S. dollar. Hagerty, with his finance background and Banking Committee seat, authored the first major federal crypto legislation to pass either chamber, reflecting his positioning at the intersection of traditional finance and digital assets.',
      },
    ],
    keyBills: [
      {
        title: 'GENIUS Act (Guiding and Establishing National Innovation for U.S. Stablecoins)',
        year: 2025,
        month: 5,
        summary: 'Authored the first major federal stablecoin regulation to pass the Senate, establishing licensing requirements, reserve standards, and consumer protections for stablecoin issuers. Hagerty argued that clear federal rules would allow the U.S. to lead global digital finance rather than ceding the space to less regulated foreign jurisdictions, drawing on his investment background and understanding of international financial markets.',
      },
      {
        title: 'Japan Alliance Investment and Prosperity Act',
        year: 2022,
        month: 3,
        summary: 'Introduced legislation to deepen U.S.-Japan economic and security investment ties, drawing on his tenure as Ambassador to Japan. The bill aimed to expand co-investment frameworks in semiconductor manufacturing, critical minerals, and defense supply chains — priorities Hagerty had pursued diplomatically and continued through legislative channels.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'H001086',
    slug: 'diana-harshbarger',
    name: 'Diana Harshbarger',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 1st District',
    bio: 'Diana Harshbarger has represented Tennessee\'s 1st Congressional District since 2021, covering the Tri-Cities region of northeast Tennessee — Kingsport, Johnson City, and Bristol — as well as the surrounding Appalachian communities. A pharmacist who operated a small business for over 30 years, she won the open seat Republican primary following Phil Roe\'s retirement. She serves on the House Energy and Commerce Committee, where her pharmacy background informs her work on drug pricing, pharmaceutical regulation, and healthcare access in rural Appalachian communities.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling compromise, supporting its discretionary spending caps as consistent with her fiscal conservative priorities. Harshbarger has maintained a reliably conservative voting record since entering Congress.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Harshbarger has supported stricter immigration enforcement throughout her congressional tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting its tax cut extensions and spending reductions. Harshbarger backed the bill while engaging through Energy and Commerce on healthcare-related provisions affecting rural pharmacies and community health centers in northeast Tennessee.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Pharmacy Sustainability Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation to reform pharmacy benefit manager (PBM) practices that she argued are economically squeezing independent rural pharmacies out of business. Drawing on 30 years as a pharmacist and small business owner, Harshbarger argued that PBM reimbursement formulas systematically underpay rural pharmacies, threatening healthcare access in Appalachian communities with few alternatives.',
      },
    ],
  },

  {
    bioguideId: 'B001309',
    slug: 'tim-burchett',
    name: 'Tim Burchett',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 2nd District',
    bio: 'Tim Burchett has represented Tennessee\'s 2nd Congressional District since 2019, covering Knoxville and surrounding East Tennessee communities. A former Knox County Mayor and Tennessee state senator known for his folksy style and fiscal conservatism, he serves on the Foreign Affairs, Transportation and Infrastructure, and Oversight Committees. He made national news as one of the eight Republicans who voted to remove Speaker Kevin McCarthy in October 2023. He has also become a prominent congressional voice on UAP (unidentified aerial phenomena) transparency, advocating for declassification of government files on the subject.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy as Speaker — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Was one of eight Republicans who voted to remove Kevin McCarthy as Speaker of the House, citing McCarthy\'s handling of spending negotiations and what Burchett described as broken promises on fiscal discipline. The ouster triggered weeks of House dysfunction before Mike Johnson was elected Speaker.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling compromise, arguing it did not cut spending deeply enough to address the national debt. Burchett has been a consistent fiscal hawk who has opposed continuing resolutions and spending deals he views as inadequate.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Burchett has consistently supported strong immigration enforcement.',
      },
    ],
    keyBills: [
      {
        title: 'UAP Disclosure Act',
        year: 2023,
        month: 7,
        summary: 'Co-sponsored legislation requiring the declassification and public disclosure of government records related to unidentified aerial phenomena. Burchett, one of the most vocal congressional advocates for UAP transparency, organized hearings featuring military and intelligence whistleblowers and argued the public has a right to know about potential national security threats from unexplained aerial objects.',
      },
    ],
  },

  {
    bioguideId: 'F000459',
    slug: 'charles-j-chuck-fleischmann',
    name: 'Charles J. "Chuck" Fleischmann',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 3rd District',
    bio: 'Chuck Fleischmann has represented Tennessee\'s 3rd Congressional District since 2011, covering Chattanooga, Oak Ridge, and the Tennessee Valley. A Chattanooga attorney, he sits on the House Appropriations Committee — one of the most powerful assignments in Congress — where he has served on the Energy and Water Development Subcommittee. His district is home to Oak Ridge National Laboratory, one of the nation\'s premier nuclear science and energy research facilities, and he has been a steadfast advocate for ORNL\'s budget, nuclear security programs, and the Y-12 National Security Complex.',
    sinceYear: 2011,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, supporting its $200 billion in science and research investment including significant funding for DOE national laboratories. Oak Ridge National Laboratory — the crown jewel of his district — stands to benefit substantially from the act\'s research infrastructure provisions.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, advocating for provisions protecting the Y-12 National Security Complex and Oak Ridge\'s nuclear weapons maintenance mission. Fleischmann has used his Appropriations seat to consistently secure funding for the Y-12 facility, which maintains the nation\'s highly enriched uranium stockpile.',
      },
      {
        title: 'FY2026 Energy and Water Appropriations',
        year: 2025,
        month: 9,
        position: 'For',
        summary: 'Voted for the FY2026 energy and water appropriations bill, which Fleischmann helped shape through the Appropriations Committee to maintain funding for Oak Ridge National Laboratory\'s research programs and the Y-12 National Security Complex\'s weapons maintenance operations.',
      },
    ],
    keyBills: [
      {
        title: 'Oak Ridge National Laboratory Innovation Act',
        year: 2023,
        month: 6,
        summary: 'Championed legislation expanding technology transfer and public-private partnership authorities at Oak Ridge National Laboratory, making it easier for ORNL\'s research breakthroughs in nuclear energy, materials science, and computing to reach commercial applications. Fleischmann has worked consistently to grow ORNL\'s role as an economic engine for the Tennessee Valley.',
      },
      {
        title: 'Advanced Nuclear Energy Provisions — DOE Appropriations',
        year: 2024,
        month: 3,
        summary: 'Advanced appropriations provisions funding Oak Ridge\'s advanced nuclear reactor research programs, including small modular reactor (SMR) development. Fleischmann positioned Tennessee as a potential leader in next-generation nuclear energy commercialization, building on ORNL\'s historic role in nuclear science dating to the Manhattan Project.',
      },
    ],
  },

  {
    bioguideId: 'D000616',
    slug: 'scott-desjarlais',
    name: 'Scott DesJarlais',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 4th District',
    bio: 'Scott DesJarlais has represented Tennessee\'s 4th Congressional District since 2011, covering the Cumberland Plateau and southern middle Tennessee communities including Tullahoma and Winchester. A physician who practiced family medicine before entering politics, he serves on the House Agriculture and Armed Services Committees. His district includes Arnold Air Force Base — one of the Air Force\'s primary research and testing facilities — and a significant agricultural economy. DesJarlais has maintained one of the most consistently conservative voting records in the House throughout his tenure.',
    sinceYear: 2011,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax, methane fees, and energy regulations would harm Tennessee\'s manufacturing base and agricultural sector. DesJarlais has consistently opposed major Democratic legislation on economic and constitutional grounds throughout his tenure.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, protecting Arnold Air Force Base\'s aerospace testing and research mission. Arnold AFB is the nation\'s largest and most sophisticated aerospace ground-testing facility, and DesJarlais has used his Armed Services seat to maintain its funding and mission profile.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his long-standing support for strict immigration enforcement. DesJarlais has voted against immigration reform legislation throughout his congressional career.',
      },
    ],
    keyBills: [
      {
        title: 'Arnold Air Force Base Testing Modernization Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation authorizing facility modernization at Arnold Air Force Base\'s hypersonic testing infrastructure. As the U.S. and China compete in hypersonic weapons development, DesJarlais argued that Arnold\'s testing capabilities are critical national security assets requiring sustained investment to maintain the testing throughput needed for next-generation weapons programs.',
      },
    ],
  },

  {
    bioguideId: 'O000175',
    slug: 'andrew-ogles',
    name: 'Andrew Ogles',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 5th District',
    bio: 'Andrew Ogles has represented Tennessee\'s 5th Congressional District since 2023, winning the redrawn Nashville-area seat that had been held by Democrats. A former county mayor of Maury County and conservative activist, he serves on the House Homeland Security and Financial Services Committees. He was one of the Republicans who voted against Kevin McCarthy in the January 2023 Speaker vote, backing Jim Jordan instead, before ultimately supporting McCarthy. He has aligned himself with the House Freedom Caucus and has been a vocal advocate for deep spending cuts and border security.',
    sinceYear: 2023,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Kevin McCarthy for Speaker (January 2023)',
        year: 2023,
        month: 1,
        position: 'Against',
        summary: 'Voted against Kevin McCarthy in multiple rounds of the January 2023 Speaker vote, initially backing Jim Jordan before ultimately voting for McCarthy on the 15th ballot. Ogles aligned with the Freedom Caucus in demanding policy concessions from McCarthy as the price of the speakership.',
      },
      {
        title: 'Against Kevin McCarthy — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Voted for the motion to vacate removing Kevin McCarthy as Speaker, citing dissatisfaction with McCarthy\'s spending negotiations and the continuing resolution that funded the government without the spending cuts the Freedom Caucus had demanded.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Border security has been one of Ogles\' primary legislative priorities since entering Congress.',
      },
    ],
    keyBills: [
      {
        title: 'REINS Act (Regulations from the Executive in Need of Scrutiny)',
        year: 2023,
        month: 1,
        summary: 'Co-sponsored the REINS Act requiring Congress to affirmatively approve major federal regulations before they take effect. Ogles has made regulatory restraint a signature issue, arguing that unelected bureaucrats have accumulated unconstitutional authority over the American economy through rulemaking not approved by elected representatives.',
      },
    ],
  },

  {
    bioguideId: 'R000612',
    slug: 'john-w-rose',
    name: 'John W. Rose',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 6th District',
    bio: 'John Rose has represented Tennessee\'s 6th Congressional District since 2019, covering the suburban Nashville corridor including Gallatin, Lebanon, and Cookeville. A farmer, attorney, and former Tennessee Commissioner of Agriculture, he serves on the House Financial Services and Agriculture Committees. His agricultural background informs his focus on farm policy, rural banking, and USDA programs, while his Financial Services seat has given him a platform on banking regulation, digital assets, and capital markets.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling compromise, supporting its spending cap provisions as a step toward fiscal discipline. Rose has maintained a conservative fiscal record while using his committee assignments to protect agricultural programs important to his district.',
      },
      {
        title: 'FIT21 (Financial Innovation and Technology for the 21st Century Act)',
        year: 2024,
        month: 5,
        position: 'For',
        summary: 'Voted for the FIT21 Act establishing a comprehensive regulatory framework for digital assets, clarifying which cryptocurrencies fall under SEC versus CFTC jurisdiction. Rose\'s Financial Services Committee work on digital asset regulation has made him an informed voice on crypto policy in an era when the regulatory landscape is rapidly evolving.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Rose has consistently supported strong immigration enforcement throughout his congressional tenure.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Banking Capital Access Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation reducing regulatory burdens on community banks in rural markets, expanding their ability to lend to farmers and small businesses. Rose argued that post-2008 banking regulations designed for large financial institutions imposed disproportionate compliance costs on the community banks that are often the sole financial institution in rural Tennessee communities.',
      },
    ],
  },

  {
    bioguideId: 'V000139',
    slug: 'matt-van-epps',
    name: 'Matt Van Epps',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 7th District',
    bio: 'Matt Van Epps has represented Tennessee\'s 7th Congressional District since January 2025, winning the open seat vacated by Mark Green who ran for governor. A U.S. Army veteran who served in Afghanistan and Iraq, he went on to a career in business and policy consulting. His western Tennessee district covers the suburban Memphis area including Germantown and Bartlett, as well as rural communities stretching toward the Tennessee River. He serves on the Homeland Security and Science, Space, and Technology Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Van Epps campaigned on strong border security and supported the bill as one of his first votes in Congress.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its tax cut extensions and spending reductions as consistent with his campaign platform. Van Epps aligned with the majority of his Republican colleagues on the bill.',
      },
    ],
    keyBills: [
      {
        title: 'Veterans\' STEM Education Access Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation expanding GI Bill eligibility for STEM certificate programs at community colleges, making it easier for veterans to quickly gain credentials in technology and advanced manufacturing. Van Epps, drawing on his Army service and private sector background, argued that short-form credentials are often more valuable for veterans entering the workforce than traditional four-year degrees.',
      },
    ],
  },

  {
    bioguideId: 'K000392',
    slug: 'david-kustoff',
    name: 'David Kustoff',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 8th District',
    bio: 'David Kustoff has represented Tennessee\'s 8th Congressional District since 2017, covering western Tennessee including Jackson and Union City and rural communities stretching to the Mississippi River. A former U.S. Attorney for the Western District of Tennessee, he serves on the House Ways and Means Committee — a sought-after assignment that has given him influence on tax, trade, and Social Security policy. He has been a consistent supporter of Israel and has focused on antisemitism legislation as a policy priority.',
    sinceYear: 2017,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act of 2017',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the 2017 tax overhaul, supporting its corporate rate reduction from 35% to 21% and individual income tax cuts. As a Ways and Means member, Kustoff had direct input on the bill\'s structure and has defended its effects on Tennessee\'s economy throughout his tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its extension of the 2017 Tax Cuts and Jobs Act provisions set to expire. Kustoff\'s Ways and Means seat gave him direct input on the tax provisions, and he argued the extension was necessary to maintain the economic growth he attributed to the 2017 cuts.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his law enforcement background as a former U.S. Attorney and his district\'s conservative priorities on immigration enforcement.',
      },
    ],
    keyBills: [
      {
        title: 'Combating International Islamophobia Act and IHRA Antisemitism Definition Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation codifying the International Holocaust Remembrance Alliance definition of antisemitism for use by federal agencies in evaluating civil rights complaints. Kustoff, one of several Jewish Republicans in Congress, has made combating antisemitism a signature issue, particularly as campus incidents have increased.',
      },
      {
        title: 'American Innovation and Manufacturing Act — Trade Provisions',
        year: 2024,
        month: 4,
        summary: 'Worked through the Ways and Means Committee on trade provisions affecting Tennessee\'s agricultural exporters and automotive parts manufacturers. Western Tennessee\'s economy includes significant food processing and automotive supply chain operations whose competitiveness depends on tariff and trade policy Kustoff has engaged on through his committee.',
      },
    ],
  },

  {
    bioguideId: 'C001068',
    slug: 'steve-cohen',
    name: 'Steve Cohen',
    party: 'D',
    chamber: 'House',
    district: 9,
    state: 'Tennessee',
    currentTitle: 'U.S. Representative, Tennessee 9th District',
    bio: 'Steve Cohen has represented Tennessee\'s 9th Congressional District since 2007, covering Memphis — one of the most Democratic cities in the South. A former Tennessee state senator who attended Vanderbilt and Memphis State law schools, he serves on the House Judiciary and Intelligence Committees. He is the only white representative from a majority-Black congressional district in the country, having first won a crowded Democratic primary in 2006. Cohen has been a persistent advocate for criminal justice reform, civil rights, and voting rights, and was a leading voice for Congressman John Lewis\' legacy legislation.',
    sinceYear: 2007,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'George Floyd Justice in Policing Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for comprehensive police reform legislation that Cohen had championed for years, including banning chokeholds, limiting qualified immunity, and requiring body camera use. Memphis\'s painful history with police violence — including the 2023 Tyre Nichols killing — underscored for Cohen the urgency of federal police reform standards.',
      },
      {
        title: 'John R. Lewis Voting Rights Advancement Act',
        year: 2021,
        month: 8,
        position: 'For',
        summary: 'Voted for legislation to restore and modernize the Voting Rights Act following the Supreme Court\'s 2013 Shelby County decision, which struck down the preclearance formula. Cohen has been one of the most passionate advocates for restoring the VRA, honoring his late colleague John Lewis whom he knew personally.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would devastate Memphis — one of the poorest large cities in the United States — where a substantial share of residents rely on federal healthcare and food assistance programs. Cohen called the bill a direct attack on Memphis\'s most vulnerable communities.',
      },
    ],
    keyBills: [
      {
        title: 'Marijuana Opportunity Reinvestment and Expungement (MORE) Act',
        year: 2022,
        month: 4,
        summary: 'Co-authored and championed the MORE Act, which passed the House in 2022, to decriminalize marijuana at the federal level, expunge prior marijuana convictions, and direct tax revenue to communities most affected by drug enforcement. Cohen has been one of Congress\'s most persistent advocates for marijuana decriminalization and criminal justice reform for over a decade.',
      },
      {
        title: 'Abolition of the Death Penalty Act',
        year: 2023,
        month: 5,
        summary: 'Re-introduced legislation to abolish the federal death penalty, a cause Cohen has championed throughout his congressional career. He argues capital punishment is applied inequitably by race and income, is irreversible in cases of wrongful conviction, and has no demonstrated deterrent effect on violent crime — positions he has advocated consistently since his time in the Tennessee State Senate.',
      },
    ],
  },
]

export const tnDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

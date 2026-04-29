import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C000127',
    slug: 'maria-cantwell',
    name: 'Maria Cantwell',
    party: 'D',
    chamber: 'Senate',
    state: 'Washington',
    currentTitle: 'U.S. Senator from Washington',
    bio: 'Maria Cantwell has represented Washington in the U.S. Senate since 2001, having previously served in the House and as a tech executive who helped grow RealNetworks. She chaired the Senate Commerce, Science, and Transportation Committee from 2021 to 2023 and is now the Ranking Member, making her one of the Senate\'s most influential voices on technology, broadband, and trade policy. She has been a consistent advocate for Washington\'s Boeing aerospace industry, Pacific salmon restoration, tribal nations, and the state\'s dominant technology sector centered in the Puget Sound region.',
    sinceYear: 2001,
    committees: [
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, championing its clean energy provisions including offshore wind development, EV tax credits, and clean manufacturing incentives. Washington\'s clean energy economy — including hydropower, wind, and the Boeing supply chain\'s shift toward sustainable aviation — made the bill a high priority for Cantwell.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the $280 billion CHIPS and Science Act, which she helped negotiate to include major investments in semiconductor manufacturing and R&D. Washington\'s technology ecosystem — including Microsoft, Amazon, and Intel\'s Pacific Northwest operations — stands directly to benefit from the act\'s research and workforce provisions.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its rollback of clean energy tax credits, broadband investment reductions, and proposed changes to trade policy would harm Washington\'s technology and aerospace sectors. Cantwell specifically objected to provisions she argued would disadvantage U.S. companies in global technology competition.',
      },
    ],
    keyBills: [
      {
        title: 'Ocean Shipping Reform Act',
        year: 2022,
        month: 6,
        summary: 'Authored the Ocean Shipping Reform Act, the most significant overhaul of maritime shipping regulations in over two decades, giving the Federal Maritime Commission new enforcement powers against ocean carrier price gouging. Cantwell pursued the legislation after supply chain disruptions during the pandemic caused severe problems for Washington\'s agricultural exporters and importers.',
      },
      {
        title: 'KOSA (Kids Online Safety Act)',
        year: 2024,
        month: 7,
        summary: 'Co-authored the Kids Online Safety Act, which passed the Senate 91–3 in 2024, imposing new duties on social media platforms to protect minors from harmful content. As Commerce Committee chair, Cantwell shaped provisions balancing child safety with First Amendment protections, drawing on her background in the technology industry.',
      },
    ],
  },

  {
    bioguideId: 'M001111',
    slug: 'patty-murray',
    name: 'Patty Murray',
    party: 'D',
    chamber: 'Senate',
    state: 'Washington',
    currentTitle: 'U.S. Senator from Washington',
    bio: 'Patty Murray has represented Washington in the U.S. Senate since 1993, making her one of the longest-serving members of the chamber. She was the first woman to chair the Senate Appropriations Committee and remains the Ranking Member, giving her extraordinary influence over federal discretionary spending. A former preschool teacher and school board member who entered politics after being told she was "just a mom in tennis shoes," she has been a driving force on education, veterans\' healthcare, reproductive rights, and the annual federal budget. She served as Senate President pro tempore from 2023 to 2025.',
    sinceYear: 1993,
    committees: [
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Omnibus Appropriations Act FY2023',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.7 trillion omnibus appropriations bill she co-negotiated as the Senate Appropriations Committee\'s Democratic leader. The package included significant increases in non-defense discretionary spending, veterans\' healthcare funding, and child nutrition programs that Murray had championed throughout her career.',
      },
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief bill, championing its $130 billion for K-12 school reopening — a provision she shepherded through the HELP Committee as chair. Washington\'s schools had faced prolonged closures, and Murray used her dual committee positions to maximize education and healthcare investment.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill as Ranking Member on Appropriations, arguing it represented an unprecedented dismantling of the federal social safety net. Murray highlighted deep cuts to Medicaid, SNAP, and veterans\' healthcare that she said would harm Washingtonians who depend on federal programs.',
      },
    ],
    keyBills: [
      {
        title: 'PREP Act (Preparing, Saving, and Empowering Kids for School)',
        year: 2021,
        month: 3,
        summary: 'Authored the education provisions of the American Rescue Plan, directing $130 billion to K-12 schools for safe reopening, learning recovery, and mental health services. Murray used her HELP Committee chairmanship to ensure funding reached underserved communities hardest hit by the pandemic.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        summary: 'Voted for and helped negotiate this landmark gun safety legislation — the first significant federal gun control law in nearly 30 years. Murray was among Senate Democrats who pressed for inclusion of the boyfriend loophole closure and red flag law incentives that passed with Republican support.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'D000617',
    slug: 'suzan-k-delbene',
    name: 'Suzan K. DelBene',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 1st District',
    bio: 'Suzan DelBene has represented Washington\'s 1st Congressional District since 2012, covering the eastern Seattle suburbs and Eastside technology corridor including Kirkland, Redmond, and Bothell — the home of Microsoft and Amazon\'s corporate campuses. A former Microsoft executive with an MBA from the University of Washington, she chairs the Democratic Congressional Campaign Committee and serves on the House Ways and Means Committee. She has been a leading voice on technology tax policy, healthcare, and trade, particularly as it affects her district\'s global technology giants.',
    sinceYear: 2012,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, particularly championing its corporate minimum tax and research and development provisions affecting Washington\'s technology sector. DelBene worked through Ways and Means to shape how the tax provisions would apply to U.S.-based multinationals like Microsoft and Amazon headquartered in her district.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS Act, supporting its semiconductor manufacturing incentives and R&D tax provisions. Washington\'s technology economy depends on a robust domestic semiconductor supply chain, and DelBene\'s Ways and Means position allowed her to shape the act\'s tax credit structure.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, raising concerns about its impact on technology industry R&D deductions, the rollback of clean energy credits, and Medicaid cuts affecting Washington residents. As DCCC chair, she also argued the bill\'s political vulnerabilities would help Democrats in 2026.',
      },
    ],
    keyBills: [
      {
        title: 'American Innovation and Jobs Act',
        year: 2023,
        month: 3,
        summary: 'Co-authored legislation restoring the immediate expensing of research and development costs, reversing a 2017 tax law change that began requiring R&D costs to be amortized over multiple years. DelBene argued the change created a severe competitive disadvantage for Washington\'s technology companies relative to global competitors and needed to be corrected urgently.',
      },
    ],
  },

  {
    bioguideId: 'L000560',
    slug: 'rick-larsen',
    name: 'Rick Larsen',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 2nd District',
    bio: 'Rick Larsen has represented Washington\'s 2nd Congressional District since 2001, covering the communities north of Seattle including Everett, Bellingham, and the San Juan Islands — home to Naval Station Everett, Whidbey Island NAS, and the Boeing commercial airplane manufacturing complex. He is the Ranking Member of the House Transportation and Infrastructure Committee and serves as the senior Democrat on the Aviation Subcommittee, making him one of the most influential members of Congress on aerospace policy, ports, and transportation funding.',
    sinceYear: 2001,
    committees: [
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Ranking Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan $1.2 trillion infrastructure law, championing its investments in seaports, aviation, and rail infrastructure critical to Washington\'s 2nd District. Larsen used his Transportation Committee seniority to shape provisions benefiting Naval Station Everett\'s port facilities, Bellingham International Airport, and the state ferry system.',
      },
      {
        title: 'FAA Reauthorization Act of 2024',
        year: 2024,
        month: 5,
        position: 'For',
        summary: 'Voted for the five-year FAA reauthorization bill, which Larsen helped negotiate as the senior Transportation Committee Democrat on aviation. The bill addressed Boeing\'s safety manufacturing issues — a matter of direct importance to his district — and included new whistleblower protections and manufacturing oversight provisions Larsen had championed.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its cuts to transit funding, port infrastructure grants, and Medicaid would harm the 2nd District\'s workers and communities. Larsen specifically objected to provisions that would reduce competitive grant programs for rural ferry systems and small regional airports.',
      },
    ],
    keyBills: [
      {
        title: 'Boeing Safety Reform Provisions — FAA Reauthorization',
        year: 2024,
        month: 5,
        summary: 'Championed safety accountability provisions in the FAA Reauthorization Act following the 2024 Boeing door plug incident, including requirements for enhanced manufacturing inspections, expanded whistleblower protections, and tougher penalties for quality control failures. Larsen represents the heart of Boeing country and argued that accountability — not reduced oversight — was the path to restoring Boeing\'s safety culture.',
      },
    ],
  },

  {
    bioguideId: 'G000600',
    slug: 'marie-gluesenkamp-perez',
    name: 'Marie Gluesenkamp Perez',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 3rd District',
    bio: 'Marie Gluesenkamp Perez has represented Washington\'s 3rd Congressional District since 2023, winning one of the most competitive upsets of the 2022 cycle against Trump-backed Republican Joe Kent. A co-owner of an auto repair shop in Skamania County, she is one of the few working-class small business owners in Congress. Her district covers southwest Washington including Vancouver, Longview, and rural communities along the Columbia River. She serves on the House Appropriations Committee and has staked out an independent centrist posture within the Democratic caucus, frequently bucking party leadership on rural and working-class economic issues.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling compromise, breaking with some progressive Democrats to support the deal. Gluesenkamp Perez argued the bill was a necessary compromise that avoided default and that her district\'s working-class economy could not afford the uncertainty of a debt ceiling crisis.',
      },
      {
        title: 'BIOSECURE Act',
        year: 2024,
        month: 9,
        position: 'For',
        summary: 'Voted for the BIOSECURE Act restricting U.S. government contracts with Chinese biotechnology companies, reflecting her district\'s support for strong economic competition with China. Gluesenkamp Perez has been vocal on China economic policy, noting the impact of trade imbalances on southwest Washington\'s timber and manufacturing industries.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, focusing specifically on its Medicaid cuts and SNAP reductions that she argued would devastate rural southwest Washington communities. She broke with some Democratic messaging, focusing her opposition on economic impacts rather than process, reflecting her district\'s more conservative rural character.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Workforce and Technical Education Investment Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation expanding federal investment in rural community college vocational programs and apprenticeships in skilled trades. Drawing on her experience as a mechanic and auto shop co-owner, Gluesenkamp Perez argued that the trades — welding, electrical, plumbing, mechanics — are systematically underfunded relative to four-year college pipelines, leaving rural economies without skilled workers.',
      },
    ],
  },

  {
    bioguideId: 'N000189',
    slug: 'dan-newhouse',
    name: 'Dan Newhouse',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 4th District',
    bio: 'Dan Newhouse has represented Washington\'s 4th Congressional District since 2015, covering the eastern Washington agricultural heartland — the Yakima Valley, the Columbia Basin, and communities dependent on irrigation agriculture, wine production, and food processing. A hop and fruit farmer who served as Washington\'s Director of Agriculture, he sits on the House Appropriations and Agriculture Committees. He made national news in January 2021 as one of ten House Republicans who voted to impeach President Trump following the January 6th Capitol attack — a vote for which he survived a Trump-endorsed primary challenge in 2022.',
    sinceYear: 2015,
    committees: [
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Second Impeachment of President Trump',
        year: 2021,
        month: 1,
        position: 'For',
        summary: 'Was one of ten House Republicans who voted to impeach President Trump following the January 6th Capitol attack, calling the events "an unprecedented assault on the rule of law." Newhouse survived a 2022 primary challenge from Trump-backed candidate Loren Culp, winning with 57% of the vote.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling compromise, supporting its spending cap provisions. Newhouse has maintained a conservative fiscal record while pursuing appropriations for his agricultural district through his Appropriations Committee seat.',
      },
      {
        title: 'Farm Bill Extension',
        year: 2024,
        month: 9,
        position: 'For',
        summary: 'Voted for the temporary farm bill extension, buying time for the full reauthorization. Newhouse, representing one of the most productive agricultural districts in the country, used his Agriculture Committee seat to advocate for commodity support programs and crop insurance provisions protecting eastern Washington\'s hop, apple, and wine grape growers.',
      },
    ],
    keyBills: [
      {
        title: 'Lower Snake River Dams Economic Development Act',
        year: 2023,
        month: 11,
        summary: 'Championed legislation to protect the four lower Snake River dams from breaching proposals, arguing they are essential to eastern Washington\'s agriculture, energy, and transportation economy. The dams provide irrigation water, barge shipping, and hydropower for the region, and Newhouse has led congressional opposition to federal dam removal studies.',
      },
      {
        title: 'Agricultural Labor Solutions Act',
        year: 2023,
        month: 7,
        summary: 'Advocated for agricultural guest worker visa reforms to address the chronic seasonal labor shortages facing eastern Washington\'s fruit, hop, and wine grape operations. Washington\'s agriculture industry is among the most labor-intensive in the country, and Newhouse has pushed for H-2A program reforms to reduce costs and administrative burdens on small family farms.',
      },
    ],
  },

  {
    bioguideId: 'B001322',
    slug: 'michael-baumgartner',
    name: 'Michael Baumgartner',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 5th District',
    bio: 'Michael Baumgartner has represented Washington\'s 5th Congressional District since January 2025, winning the seat after longtime Republican incumbent Cathy McMorris Rodgers retired. He previously served in the Washington State Senate and worked as a U.S. diplomat and intelligence officer in Afghanistan and Pakistan. His eastern Washington district covers Spokane, Whitman County, and the Palouse farming region. He serves on the Judiciary, Education and Workforce, and Foreign Affairs Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Baumgartner ran on strong border security positions and supported the bill as one of his first votes in Congress.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its tax cut extensions and spending reductions consistent with his conservative platform. Baumgartner expressed support for the bill\'s provisions reducing federal regulatory burdens on small businesses in eastern Washington.',
      },
    ],
    keyBills: [
      {
        title: 'Foreign Agent Registration Enforcement Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation to strengthen enforcement of the Foreign Agents Registration Act, drawing on his background as a diplomat and intelligence officer who worked on countering foreign influence operations. Baumgartner argued that FARA enforcement had been inadequate and that tighter oversight is necessary to protect U.S. institutions from foreign government influence.',
      },
    ],
  },

  {
    bioguideId: 'R000621',
    slug: 'emily-randall',
    name: 'Emily Randall',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 6th District',
    bio: 'Emily Randall has represented Washington\'s 6th Congressional District since January 2025, flipping the seat held for decades by Republican Derek Kilmer\'s predecessor and then by Kilmer himself — though Kilmer was a Democrat who retired. She previously served in the Washington State Senate representing Kitsap County. Her district covers the Olympic and Kitsap Peninsulas — home to Naval Base Kitsap, the nation\'s largest nuclear submarine base, and Naval Base Bremerton. She serves on the Natural Resources and Oversight Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its cuts to military family benefits and Medicaid would harm the large population of active-duty sailors and their families stationed at Naval Base Kitsap and Bremerton. Randall highlighted the bill\'s impact on military housing assistance and TRICARE-adjacent coverage.',
      },
    ],
    keyBills: [
      {
        title: 'Naval Base Community Resilience and Infrastructure Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation to fund infrastructure improvements in communities adjacent to Naval Base Kitsap, addressing traffic, housing, and utility capacity challenges created by the base\'s large military population. Randall argued that the communities surrounding the nation\'s largest nuclear submarine base deserve federal support commensurate with the national security mission they host.',
      },
    ],
  },

  {
    bioguideId: 'J000298',
    slug: 'pramila-jayapal',
    name: 'Pramila Jayapal',
    party: 'D',
    chamber: 'House',
    district: 7,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 7th District',
    bio: 'Pramila Jayapal has represented Washington\'s 7th Congressional District since 2017, covering Seattle proper and Shoreline. She is the founding chair of the Congressional Progressive Caucus, one of the largest caucuses in Congress, and has been the most prominent national voice for Medicare for All, the Green New Deal, and progressive immigration reform. Born in India and raised in Singapore before immigrating to the U.S., she became a citizen in 2000 and was elected to the Washington State Senate before coming to Congress. She serves on the Judiciary, Budget, and Foreign Affairs Committees.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act of 2021',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief bill as a Progressive Caucus leader who had pushed for a larger package. She championed the expanded Child Tax Credit and direct payments as first steps toward the more comprehensive social investment she has advocated throughout her tenure.',
      },
      {
        title: 'Build Back Better Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Was a central negotiator pushing for the full $3.5 trillion Build Back Better social spending bill before it was reduced to the Inflation Reduction Act. As Progressive Caucus chair, Jayapal led efforts to maintain key provisions including universal pre-K, expanded Medicare benefits, and paid family leave, though most were ultimately stripped in negotiations.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill with some of the most forceful Democratic opposition, arguing the bill represented a generational assault on the social safety net — gutting Medicaid, ending food assistance, and rolling back clean energy investments to fund tax cuts for the wealthy. Jayapal organized Progressive Caucus opposition to the bill throughout the legislative process.',
      },
    ],
    keyBills: [
      {
        title: 'Medicare for All Act',
        year: 2023,
        month: 5,
        summary: 'Re-introduced the Medicare for All Act in the 118th Congress, her signature legislative priority since entering Congress. The bill would replace private health insurance with a single government-run program covering all Americans. Jayapal has made expanding the bill\'s co-sponsorship list and public support a multi-session project.',
      },
      {
        title: 'FORCE Act (Forbidding Outlays and Restrictions on Competition for Employees)',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation to ban most non-compete agreements, which she argued suppress workers\' wages and limit job mobility — particularly in Washington\'s technology sector where non-competes have been widely used by large employers. The FTC\'s own non-compete rulemaking drew partly on Jayapal\'s congressional advocacy.',
      },
    ],
  },

  {
    bioguideId: 'S001216',
    slug: 'kim-schrier',
    name: 'Kim Schrier',
    party: 'D',
    chamber: 'House',
    district: 8,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 8th District',
    bio: 'Kim Schrier has represented Washington\'s 8th Congressional District since 2019, covering Issaquah, Enumclaw, and the eastern Cascade foothills — a competitive suburban-rural district east of Seattle. A pediatrician before entering politics, she is the only female physician currently serving in the House and has focused relentlessly on healthcare access, prescription drug costs, and rural hospital sustainability. She defeated Republican Dave Reichert in her first campaign and has held the swing district through subsequent cycles. She serves on the House Energy and Commerce Committee.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, particularly championing its Medicare drug price negotiation provisions and $35 insulin price cap. As a physician, Schrier had spent years advocating for lower drug costs, and testified about patients who rationed insulin in her medical practice before the cap became law.',
      },
      {
        title: 'Lower Costs, More Cures Act',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for bipartisan legislation to accelerate generic drug and biosimilar competition, reducing prescription drug prices. Schrier used her Energy and Commerce seat and her medical background to advocate for transparency and competition provisions that she argued would most effectively reduce out-of-pocket costs for patients.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, with particularly strong opposition to its Medicaid work requirements and rollback of ACA subsidies. Schrier argued as a physician that removing coverage from millions of Americans would produce preventable deaths and increase long-term healthcare costs by delaying care until conditions became acute.',
      },
    ],
    keyBills: [
      {
        title: 'Improving Seniors\' Timely Access to Care Act',
        year: 2022,
        month: 9,
        summary: 'Championed bipartisan legislation streamlining Medicare prior authorization requirements, reducing bureaucratic barriers that delay patient access to medically necessary treatments. Schrier drew on her pediatric practice experience — though focused on adult Medicare patients — arguing that prior authorization delays cause measurable patient harm and physician burnout.',
      },
    ],
  },

  {
    bioguideId: 'S000510',
    slug: 'adam-smith',
    name: 'Adam Smith',
    party: 'D',
    chamber: 'House',
    district: 9,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 9th District',
    bio: 'Adam Smith has represented Washington\'s 9th Congressional District since 1997, covering Federal Way, Renton, and South King County. He was the Chairman of the House Armed Services Committee from 2019 to 2023 and remains the Ranking Member, making him the most influential Democrat on U.S. defense policy and the primary Democratic voice on Pentagon oversight, military readiness, and nuclear weapons policy. A graduate of Fordham University School of Law, he is known for his expertise on defense strategy, counterterrorism, and civil-military relations.',
    sinceYear: 1997,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Ranking Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024 after negotiating out contentious culture war provisions as Armed Services Ranking Member. Smith has consistently supported strong defense funding while pushing for civilian oversight of military operations and opposing extraneous social policy provisions in the must-pass defense bill.',
      },
      {
        title: 'Ukraine Security Supplemental',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $60 billion Ukraine security assistance package after months of delay — a bill Smith had advocated for since funding lapsed in December 2023. As Ranking Member on Armed Services, he was one of the most persistent voices arguing that Ukraine aid was essential to U.S. strategic interests and deterring Russian expansion.',
      },
      {
        title: 'National Defense Authorization Act FY2026',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2026 while pushing back against provisions he argued weakened civilian oversight of the military. Smith used his Ranking Member position to protect military readiness funding and oppose politicization of the officer corps through the annual defense authorization bill.',
      },
    ],
    keyBills: [
      {
        title: 'NDAA Civilian Oversight Protections',
        year: 2025,
        month: 6,
        summary: 'Championed provisions in the NDAA to protect the apolitical character of the military officer corps and reinforce civilian oversight mechanisms at the Pentagon. As Republicans pursued changes to military leadership structures, Smith led Democratic efforts to codify protections against the political use of the armed forces.',
      },
    ],
  },

  {
    bioguideId: 'S001159',
    slug: 'marilyn-strickland',
    name: 'Marilyn Strickland',
    party: 'D',
    chamber: 'House',
    district: 10,
    state: 'Washington',
    currentTitle: 'U.S. Representative, Washington 10th District',
    bio: 'Marilyn Strickland has represented Washington\'s 10th Congressional District since 2021, covering Tacoma, Olympia, and Joint Base Lewis-McChord. The first Korean American woman elected to Congress, she is the daughter of a Korean mother and an African American Army veteran father. A former Mayor of Tacoma, she serves on the House Armed Services and Transportation and Infrastructure Committees — a fitting assignment for a district anchored by JBLM, one of the largest Army installations in the country, and the Port of Tacoma.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, advocating for port and freight rail investments benefiting the Port of Tacoma — one of the nation\'s largest container ports. Strickland used her Transportation Committee seat and mayoral background to shape provisions supporting port modernization and intermodal freight efficiency.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, working to secure investments in Joint Base Lewis-McChord\'s training infrastructure and soldier quality-of-life programs. JBLM is the largest employer in the Tacoma region and Strickland has used her Armed Services seat to advocate for military family housing, healthcare access, and installation readiness.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its cuts to military family benefits and Medicaid would harm the large population of soldiers and veterans at JBLM and in the broader Tacoma community. She also objected to provisions reducing federal transit and port investment she had championed through Transportation and Infrastructure.',
      },
    ],
    keyBills: [
      {
        title: 'Korean American WWII Veterans Congressional Gold Medal Act',
        year: 2021,
        month: 10,
        summary: 'Introduced legislation to award Congressional Gold Medals to Korean Americans who served in the U.S. military during World War II. Strickland, who has made honoring Korean American military contributions a priority, argued this long-overdue recognition honors the service of a community that fought for a country that had not yet fully recognized their citizenship rights.',
      },
    ],
  },
]

export const waDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

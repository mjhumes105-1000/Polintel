import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001035',
    slug: 'susan-m-collins',
    name: 'Susan M. Collins',
    party: 'R',
    chamber: 'Senate',
    state: 'Maine',
    currentTitle: 'U.S. Senator from Maine',
    bio: 'Susan Collins has served Maine in the U.S. Senate since 1997 and is one of the most prominent moderate Republicans in Congress, frequently serving as a decisive swing vote on legislation across multiple administrations. She chairs the Senate Appropriations Committee, a position that gives her extraordinary influence over federal spending, and also sits on the HELP and Intelligence Committees. A Caribou native who worked for longtime Maine senator William Cohen, she has built a national reputation for bipartisan dealmaking, supporting same-sex marriage, voting against repealing the Affordable Care Act, and crossing party lines on confirmation votes.',
    sinceYear: 1997,
    committees: [
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Chair' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Was one of the lead Republican negotiators of the Bipartisan Safer Communities Act, the first significant federal gun safety legislation in nearly three decades. Collins helped broker the compromise that enhanced background checks for younger buyers, closed the "boyfriend loophole," and funded state red flag law implementation — representing a rare bipartisan breakthrough on a deeply divisive issue.',
      },
      {
        title: 'Against Affordable Care Act Repeal (Skinny Repeal)',
        year: 2017,
        month: 7,
        position: 'Against',
        summary: 'Was one of three Senate Republicans — along with John McCain and Lisa Murkowski — who voted against the "skinny repeal" of the Affordable Care Act, effectively killing the Republican effort to repeal the healthcare law. Collins argued the bill was too disruptive and would eliminate healthcare protections for millions of Americans, including Maine\'s significant rural and elderly populations.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 8,
        position: 'For',
        summary: 'Was one of the lead Republican negotiators of the $1.2 trillion bipartisan infrastructure law, working alongside a group of centrist senators to craft a bill that could pass with Republican support. Maine\'s aging transportation infrastructure and its coastal fishing and forestry communities stand to benefit from significant infrastructure investment.',
      },
      {
        title: 'Continuing Resolution with Disaster Relief',
        year: 2024,
        month: 9,
        position: 'For',
        summary: 'Championed the inclusion of disaster relief funding in the government funding extension, using her Appropriations chairmanship to direct resources to Maine communities affected by severe winter storms. Collins has consistently used her Appropriations position to secure federal investment in Maine\'s vulnerable coastal and rural communities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, supporting its extension of the 2017 tax cuts and energy production provisions she argued would benefit Maine\'s rural economy and small businesses. As Chair of the Senate Appropriations Committee, Collins emphasized that the bill\'s fiscal framework provided necessary certainty for federal spending priorities she has long championed for Maine\'s coastal and rural communities.',
      },
    ],
    keyBills: [
      {
        title: 'Bipartisan Background Checks Act',
        year: 2023,
        month: 6,
        summary: 'Co-led legislation expanding federal background check requirements for firearm transfers, building on the Bipartisan Safer Communities Act. Collins has been a consistent Republican advocate for background check reforms, arguing they can reduce gun violence without infringing on the constitutional rights of law-abiding gun owners.',
      },
      {
        title: 'FY2025 Appropriations Bills',
        year: 2024,
        month: 7,
        summary: 'As Chair of the Senate Appropriations Committee, Collins led bipartisan appropriations negotiations that secured funding for Maine\'s fishing industry, Coast Guard facilities in Portland and South Portland, and Acadia National Park improvements. Her Appropriations chairmanship has enabled her to direct significant federal investment to Maine\'s rural communities and ocean economy.',
      },
    ],
  },

  {
    bioguideId: 'K000383',
    slug: 'angus-s-king-jr',
    name: 'Angus S. King, Jr.',
    party: 'I',
    chamber: 'Senate',
    state: 'Maine',
    currentTitle: 'U.S. Senator from Maine',
    bio: 'Angus King is one of only two independent U.S. Senators, having served since 2013 after two terms as Maine\'s Governor. A lawyer and clean energy entrepreneur who founded an energy efficiency company, he caucuses with Senate Democrats and sits on the Armed Services, Intelligence, Energy, and Veterans\' Affairs Committees. A centrist who has worked with both parties, he is one of the Senate\'s most prominent voices on cybersecurity, renewable energy, and balanced budget policy. He announced his retirement at the end of the 119th Congress.',
    sinceYear: 2013,
    committees: [
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion bipartisan infrastructure law, having been one of the senators who helped broker the compromise. King argued the bill was essential for Maine\'s aging roads, bridges, broadband infrastructure, and clean water systems, and that it represented the kind of practical bipartisan governance he entered the Senate to pursue.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the bipartisan gun safety legislation as part of his broader commitment to evidence-based policy on public safety. King has supported limited gun safety measures while respecting Maine\'s strong hunting culture, positioning himself as a pragmatic voice on an issue that divides most senators along partisan lines.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, using his Armed Services Committee seat to advocate for Bath Iron Works — Maine\'s largest employer and a major Navy destroyer manufacturer — and for cybersecurity provisions he helped shape through his Intelligence Committee role. King has been a consistent champion of Bath Iron Works\' shipbuilding contracts as foundational to Maine\'s manufacturing economy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning through his Energy and Natural Resources Committee seat that the bill\'s rollback of clean energy incentives would undermine Maine\'s growing offshore wind industry and the investments in energy independence he championed throughout his Senate tenure. King argued the legislation\'s Medicaid cuts would fall disproportionately on Maine\'s rural residents and older population who depend on the program for long-term care.',
      },
    ],
    keyBills: [
      {
        title: 'Bipartisan Background Checks Act and Cybersecurity Legislation',
        year: 2023,
        month: 4,
        summary: 'Championed cybersecurity workforce development and critical infrastructure protection legislation through the Armed Services and Intelligence Committees, drawing on his background as a technology entrepreneur. Maine\'s Bath Iron Works and its defense supply chain are potential targets for cyberattacks, and King has made industrial cybersecurity a priority through both committees.',
      },
      {
        title: 'Bath Iron Works Shipbuilding Authorization',
        year: 2024,
        month: 5,
        summary: 'Fought through the Armed Services Committee to preserve and expand Navy destroyer contracts at Bath Iron Works, ensuring the Brunswick-based yard retains its role as one of the Navy\'s two principal surface combatant builders. Bath Iron Works employs approximately 6,700 people — the largest single-site private employer in Maine — and its contracts are central to the state\'s economic stability.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'P000597',
    slug: 'chellie-pingree',
    name: 'Chellie Pingree',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Maine',
    currentTitle: 'U.S. Representative, Maine 1st District',
    bio: 'Chellie Pingree has represented Maine\'s 1st Congressional District since 2009, having previously served as a Maine State Senator and Majority Leader. An organic farmer from North Haven Island and a long-time food systems advocate, she serves on the House Appropriations and Agriculture Committees and has been one of Congress\'s most persistent voices on sustainable agriculture, food policy, and ocean conservation. Her district includes Portland, Maine\'s largest city, and the state\'s southern coastline.',
    sinceYear: 2009,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, particularly championing its USDA conservation programs and clean energy incentives for Maine\'s farming community. The bill\'s agricultural conservation provisions — including the Environmental Quality Incentives Program and Conservation Stewardship Program — directly support Maine\'s many small organic farms.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, highlighting its coastal resilience funding and broadband expansion as critical for Maine\'s island communities. Many of Maine\'s offshore islands — including Pingree\'s home of North Haven — lack reliable broadband, and she championed connectivity programs for remote coastal communities.',
      },
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief bill, advocating for its restaurant industry and farm support provisions. Maine\'s tourism and hospitality industry, centered in Portland and along the southern coast, was severely affected by the pandemic, and Pingree championed relief for small restaurants and fishermen.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using her House Appropriations Committee platform to highlight proposed cuts to USDA conservation programs and nutrition assistance that she argued would devastate Maine\'s small organic farms and food-insecure families in Portland and the southern coast. Pingree also condemned the bill\'s rollback of clean energy agricultural incentives that had begun spurring investment in Maine\'s farming communities.',
      },
    ],
    keyBills: [
      {
        title: 'Local FARMS Act (Local Food and Regional Market Supply)',
        year: 2023,
        month: 3,
        summary: 'Championed legislation expanding USDA programs supporting local and regional food systems, including farm-to-school programs and local food purchasing initiatives. Pingree has been a consistent advocate for strengthening regional food supply chains as both an economic development strategy and a food security measure — a priority that reflects her personal background as an organic farmer.',
      },
    ],
  },

  {
    bioguideId: 'G000592',
    slug: 'jared-f-golden',
    name: 'Jared F. Golden',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Maine',
    currentTitle: 'U.S. Representative, Maine 2nd District',
    bio: 'Jared Golden has represented Maine\'s 2nd Congressional District since 2019, winning competitive elections in a rural, working-class district that voted for Donald Trump in 2016 and 2020. A Marine Corps veteran who served in Iraq and Afghanistan and a former Maine State Representative, he serves on the House Armed Services and Natural Resources Committees. He is one of the most independent Democrats in the House — regularly breaking with his party on trade, gun rights, and fiscal policy — reflecting his district\'s deeply independent political character.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill — Sole Yes on Wealth Tax',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Was the only House Democrat to vote for the Republican reconciliation bill\'s underlying motion while also being the only member to vote for adding a millionaire surtax, demonstrating his independent streak on fiscal and tax policy. Golden opposed the final bill over its Medicaid cuts but has consistently supported deficit-reduction measures.',
      },
      {
        title: 'Against $1.9 Trillion American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'Against',
        summary: 'Was one of the only House Democrats to vote against the $1.9 trillion COVID-19 relief package, arguing the overall size was excessive and that a more targeted bill would have been more effective and less inflationary. Golden has consistently prioritized fiscal restraint even when it puts him at odds with his party leadership.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, using his Armed Services Committee seat to advocate for Bath Iron Works and Maine\'s other defense contractors. As a combat veteran, Golden has been a credible voice on military policy and strongly supported provisions addressing service member pay and veteran healthcare.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing through his Natural Resources and Armed Services Committee assignments that the legislation\'s Medicaid cuts would harm working-class families across Maine\'s rural 2nd District who rely on the program. Golden broke from his usual independent streak on this vote, citing the bill\'s deep reductions to programs that sustain Aroostook County\'s agricultural workers and the timber industry communities that form the backbone of his district\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Made in America Manufacturing Renaissance Act',
        year: 2023,
        month: 8,
        summary: 'Championed legislation supporting domestic manufacturing and supply chain resilience, reflecting his district\'s significant paper mill and wood products workforce. Golden has positioned himself as an economic nationalist on trade and manufacturing, supporting tariffs on Chinese goods and domestic content requirements that reflect his rural, working-class district\'s concerns about deindustrialization.',
      },
    ],
  },
]

export const meDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

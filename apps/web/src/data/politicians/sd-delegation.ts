import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'T000250',
    slug: 'john-thune',
    name: 'John Thune',
    party: 'R',
    chamber: 'Senate',
    state: 'South Dakota',
    currentTitle: 'U.S. Senator from South Dakota',
    bio: 'John Thune has served as Senate Majority Leader since January 2025 and has represented South Dakota in the U.S. Senate since 2005. He achieved one of the most significant upsets in modern Senate history in 2004, defeating Minority Leader Tom Daschle — the first Senate party leader defeated for re-election in 52 years. A former South Dakota state official and three-term House member, he served as Senate Majority Whip, Conference Chairman, and Policy Committee Chairman before ascending to the chamber\'s top leadership position, making him one of the most experienced Senate leaders in history at the time of his election.',
    sinceYear: 2005,
    committees: [
      { slug: 'ssml', name: 'Senate Majority Leader — Floor Leadership', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    previousOffices: [
      { title: 'U.S. Representative, South Dakota At-Large', jurisdiction: 'U.S. House of Representatives', startDate: '1997-01-07', endDate: '2003-01-03' },
      { title: 'Executive Director, South Dakota Municipal League', jurisdiction: 'South Dakota', startDate: '1991-01-01', endDate: '1993-01-01' },
      { title: 'State Director, USDA Farm Service Agency — South Dakota', jurisdiction: 'U.S. Department of Agriculture', startDate: '1993-01-01', endDate: '1996-12-31' },
    ],
    keyMilestones: [
      { year: 1996, description: 'Elected to U.S. House for South Dakota\'s At-Large district, beginning a six-year House career' },
      { year: 2002, description: 'Lost Senate bid to Tim Johnson by 524 votes — at the time one of the closest Senate races in modern history' },
      { year: 2004, description: 'Defeated Senate Minority Leader Tom Daschle, 51–49% — the first defeat of a Senate party floor leader since 1952 and the signature political event of Thune\'s career' },
      { year: 2009, description: 'Elected Senate Republican Policy Committee Chairman, beginning his rise through the leadership ladder' },
      { year: 2012, description: 'Elected Senate Republican Conference Chairman — the third-ranking position in Senate Republican leadership' },
      { year: 2019, description: 'Elected Senate Republican Whip — the second-ranking position' },
      { year: 2024, description: 'Elected Senate Majority Leader on November 13, winning the Republican conference vote 29–24 over Senators Cornyn and Scott' },
    ],
    keyVotes: [
      {
        title: 'For: Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul as a member of the Senate Finance Committee, where he helped shape the bill\'s corporate tax rate reduction and pass-through business provisions. Thune championed provisions affecting South Dakota\'s agricultural and small business economy, including enhanced expensing for capital equipment purchases — a direct benefit for the farming operations that are central to his state.',
      },
      {
        title: 'For: Certifying 2020 Electoral Results',
        year: 2021,
        month: 1,
        position: 'For',
        summary: 'Voted to certify the 2020 presidential election results following the January 6th attack, one of the most senior Republicans to do so. Thune had previously said publicly that challenges to the electoral count would be "an exercise in futility" — a statement that drew fierce criticism from Trump and the MAGA base but was consistent with his institutionalist Republican positioning.',
      },
      {
        title: 'Against: American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'Against',
        summary: 'Voted against the $1.9 trillion COVID-19 relief bill on party-line grounds, arguing it was excessive, inflationary, and poorly targeted. Thune was part of the unified Republican Senate opposition to the bill, which passed without a single Republican vote through budget reconciliation.',
      },
      {
        title: 'For: One Big Beautiful Bill',
        year: 2025,
        month: 7,
        position: 'For',
        summary: 'As Senate Majority Leader, managed Senate floor consideration of the Republican reconciliation bill and voted for its passage, delivering the flagship legislative priority of the Trump second term. Thune navigated significant intra-conference tensions — particularly on Medicaid cuts and SALT provisions — to maintain a 51-vote majority and pass the bill by the narrowest possible margin.',
      },
    ],
    keyBills: [
      {
        title: 'Agriculture Improvement Act (Farm Bill) — Senate Finance provisions',
        year: 2023,
        month: 11,
        summary: 'Led Senate Finance Committee work on tax and trade provisions of the Farm Bill reauthorization, including enhanced deductions for agricultural equipment and crop insurance reform provisions critical to South Dakota\'s corn, soybean, wheat, and cattle economy. Thune has been the Senate\'s most consistent advocate for agricultural tax provisions throughout his career.',
      },
      {
        title: 'COMPETES Act / CHIPS Act Senate provisions',
        year: 2022,
        month: 7,
        summary: 'Shaped Senate Commerce Committee provisions of the CHIPS and Science Act, focusing on supply chain security and semiconductor manufacturing investment that he framed as national security imperatives. Thune\'s Commerce Committee background informed his advocacy for domestic technology manufacturing as a strategic economic and defense priority.',
      },
    ],
    topSectors: [
      { category: 'Agriculture & Agribusiness', amount: 1800000, percentage: 30 },
      { category: 'Finance & Banking', amount: 1700000, percentage: 28 },
      { category: 'Healthcare & Pharma', amount: 1200000, percentage: 20 },
      { category: 'Individual Contributors', amount: 1300000, percentage: 22 },
    ],
    recordAssessment: {
      whatTheRecordShows: [
        'Thune has compiled one of the Senate\'s most consistently conservative voting records across two decades, rarely breaking with the Republican conference on major legislation while maintaining a reputation for personal integrity and institutional respect.',
        'His 2004 defeat of Tom Daschle remains the defining electoral achievement of his career and the event that established his national political reputation — accomplished through disciplined candidate recruitment, relentless constituent outreach, and a straightforward contrast with Daschle\'s D.C. orientation.',
        'His decision to certify the 2020 election results distinguished him from most Senate Republicans and set up the conflict with Trump that defined his leadership election in 2024, which he won despite Trump\'s preference for other candidates.',
      ],
      whatWeObserve: [
        'Thune\'s elevation to Majority Leader despite Trump\'s opposition represented a rare assertion of Senate Republican independence — the conference chose the institutionalist with deep Senate experience over the Trump loyalists. His ability to manage that relationship while running the floor will define his legacy.',
        'South Dakota\'s small, rural population gives Thune enormous flexibility: his re-election is essentially guaranteed, allowing him to focus on national leadership without the political survival calculations that constrain many colleagues.',
        'His Finance Committee background is an asset in Majority Leader — the committee\'s jurisdiction over tax policy, healthcare, and trade means Thune brings substantive expertise to the most consequential legislative debates rather than just floor management skills.',
      ],
      whatIsUnresolved: [
        'Thune\'s central challenge as Majority Leader is managing the Trump relationship — close enough to deliver the president\'s agenda, independent enough to preserve Senate norms and institutional prerogatives. How he handles conflicts between the White House and Senate Republicans will define his tenure.',
      ],
    },
  },

  {
    bioguideId: 'R000605',
    slug: 'mike-rounds',
    name: 'Mike Rounds',
    party: 'R',
    chamber: 'Senate',
    state: 'South Dakota',
    currentTitle: 'U.S. Senator from South Dakota',
    bio: 'Mike Rounds has served in the U.S. Senate since 2015 and previously served as South Dakota\'s governor for eight years. A former state legislator and insurance agent, he sits on the Banking, Armed Services, and Indian Affairs committees, and has emerged as a leading Senate voice on cybersecurity, artificial intelligence, and digital infrastructure policy. He is known as a pragmatic conservative who occasionally breaks with his party on technology and financial regulation issues.',
    sinceYear: 2015,
    committees: [
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax and drug pricing provisions would harm South Dakota\'s business environment and that its energy mandates were economically and technologically premature.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, including provisions protecting Ellsworth Air Force Base — home to the B-21 Raider bomber wing and one of South Dakota\'s most important economic and strategic assets. Rounds has used his Armed Services seat to consistently defend Ellsworth\'s mission.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with his support for strong border enforcement throughout his Senate tenure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seat on the Senate Banking and Armed Services Committees, supporting its tax cut extensions and border security investments as beneficial to South Dakota\'s economy and national security. Rounds particularly backed the bill\'s provisions supporting Ellsworth Air Force Base funding and domestic energy production, calling it a fiscally responsible package that prioritizes South Dakota\'s defense and agricultural communities.',
      },
    ],
    keyBills: [
      {
        title: 'Artificial Intelligence for the Military Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation directing the Defense Department to develop AI capabilities while establishing ethical guardrails, drawing on his Armed Services and Banking committee work on technology policy. Rounds has positioned himself as a Senate thought leader on responsible AI development, particularly for national security applications.',
      },
      {
        title: 'B-21 Raider and Ellsworth AFB Support Provisions — NDAA',
        year: 2024,
        month: 12,
        summary: 'Championed provisions in the NDAA supporting the B-21 Raider bomber program\'s development and deployment at Ellsworth Air Force Base. The B-21 is the Air Force\'s next-generation strategic bomber, and Ellsworth\'s selection as the first B-21 base makes this one of the most significant defense investments in South Dakota\'s history.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'J000301',
    slug: 'dusty-johnson',
    name: 'Dusty Johnson',
    party: 'R',
    chamber: 'House',
    district: 0,
    state: 'South Dakota',
    currentTitle: 'U.S. Representative, South Dakota At-Large',
    bio: 'Dusty Johnson has represented South Dakota\'s at-large House seat since 2019. A former South Dakota Public Utilities Commissioner and chief of staff to Governor Dennis Daugaard, he chairs the House Agriculture Committee\'s Subcommittee on Commodity Markets and serves on the Transportation and Infrastructure Committee. Known as a pragmatic conservative, he has worked across the aisle on farm policy, rural infrastructure, and supply chain legislation, and is a frequent spokesperson for the moderate Main Street Caucus.',
    sinceYear: 2019,
    committees: [
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, playing a key role as a Main Street Caucus leader in building Republican support for the compromise. Johnson argued the deal\'s spending caps were a meaningful fiscal win and that defaulting on U.S. debt would be catastrophically harmful to South Dakota\'s agricultural economy.',
      },
      {
        title: 'Farm Bill Extension',
        year: 2024,
        month: 11,
        position: 'For',
        summary: 'Voted for the farm bill extension as a key Agriculture Committee member, advocating for higher reference prices and expanded crop insurance for South Dakota\'s corn, soybean, and wheat producers who have faced dramatically higher production costs since the last baseline was set.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. While Johnson is generally known as a pragmatic moderate, he supported the targeted enforcement measure as a reasonable response to border security concerns.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 reconciliation package from his seat on the House Agriculture Committee, emphasizing that its updated farm program reference prices and expanded crop insurance provisions provide critical protection for South Dakota\'s corn, soybean, and wheat producers facing volatile commodity markets. Johnson also supported the bill\'s tax cut extensions as relief for the rural small businesses and agricultural operations that are the backbone of South Dakota\'s at-large district.',
      },
    ],
    keyBills: [
      {
        title: 'FARM Act — Reference Price Updates',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation updating farm program reference prices to reflect current production cost realities, arguing the outdated baselines left South Dakota farmers dangerously exposed in years of low commodity prices. The bill became a core element of agricultural community demands heading into the farm bill reauthorization debate.',
      },
    ],
  },
]

export const sdDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

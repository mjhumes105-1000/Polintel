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
    currentTitle: 'U.S. Senate Majority Leader from South Dakota',
    bio: 'John Thune has served in the U.S. Senate since 2005 and was elected Senate Majority Leader in November 2024, succeeding Mitch McConnell. Previously representing South Dakota\'s at-large House seat from 1997 to 2003, he is one of the most senior Republicans in Congress. A former state railroad director and USDA official, he is a leading voice on agriculture, tax policy, and transportation, and sits on the Finance and Commerce committees.',
    sinceYear: 2005,
    committees: [
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the 2017 tax overhaul as a senior Finance Committee member. Thune championed provisions reducing the corporate tax rate, expanding the standard deduction, and including new pass-through business deductions particularly beneficial to South Dakota\'s agricultural operations and small businesses.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act as Senate Republican Whip, arguing its corporate minimum tax and drug pricing provisions would harm South Dakota\'s economy and that its climate spending was ideologically driven rather than economically sound.',
      },
      {
        title: 'One Big Beautiful Bill — Majority Leader Role',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for and managed passage of the Republican budget reconciliation bill as Senate Majority Leader. Thune shepherded the complex bill through the Senate\'s reconciliation process, negotiating provisions on agriculture, tax cuts, and border security with various Senate Republican factions.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for and managed floor passage of the FY2026 reconciliation package as Senate Majority Leader, championing its extension of 2017 Tax Cuts and Jobs Act provisions — which he helped write through the Finance Committee — as essential to South Dakota\'s agricultural small businesses and family farms. Thune also highlighted the bill\'s strengthened border security funding and domestic energy production incentives as priorities for South Dakota and the nation.',
      },
    ],
    keyBills: [
      {
        title: 'Farm Bill — Senate Agriculture Provisions',
        year: 2024,
        month: 11,
        summary: 'Led Senate Republican efforts on farm bill commodity title provisions, advocating for higher reference prices for South Dakota\'s key crops — corn, soybeans, wheat, and sunflowers — and enhanced crop insurance programs to address the volatility faced by Great Plains farmers.',
      },
      {
        title: 'CHIPS and Science Act — Tax Provisions',
        year: 2022,
        month: 7,
        summary: 'Worked through the Finance Committee to shape tax credit provisions in the CHIPS and Science Act that incentivize domestic semiconductor manufacturing investment. Thune supported the measure as a national security priority and an economic development opportunity for midwestern states.',
      },
    ],
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

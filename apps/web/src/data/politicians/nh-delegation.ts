import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'S001181',
    slug: 'jeanne-shaheen',
    name: 'Jeanne Shaheen',
    party: 'D',
    chamber: 'Senate',
    state: 'New Hampshire',
    currentTitle: 'U.S. Senator from New Hampshire',
    bio: 'Jeanne Shaheen has served as U.S. Senator from New Hampshire since 2009 and is the first woman in American history elected as both a governor and a U.S. senator. Before her Senate career she served three terms as New Hampshire\'s governor from 1997 to 2003. She sits on the Senate Foreign Relations Committee as Ranking Member and is a leading voice on NATO alliances, energy security, and veterans\' affairs.',
    sinceYear: 2009,
    committees: [
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the $739 billion Inflation Reduction Act, which included the largest climate investment in U.S. history and capped insulin costs. Shaheen championed energy efficiency provisions particularly relevant to New Hampshire\'s home heating costs and cold-climate energy burden.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, including provisions she secured to protect Portsmouth Naval Shipyard — one of New Hampshire\'s largest employers and the only nuclear-capable shipyard in the Northeast — and to fund NATO readiness activities.',
      },
      {
        title: 'Additional Ukraine Security Assistance',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $61 billion supplemental Ukraine aid package as a firm supporter of sustained U.S. assistance. Shaheen has been one of the Senate\'s most consistent voices arguing that robust support for Ukraine is essential to NATO solidarity and deterring further Russian aggression.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning through her Senate Foreign Relations Committee Ranking Member position that the legislation\'s foreign aid cuts would undermine NATO commitments and the allied relationships she has spent her Senate career building. Shaheen also condemned the bill\'s Medicaid reductions as devastating for New Hampshire\'s rural communities and its rollback of home energy efficiency incentives — programs she championed for nearly a decade — as a direct blow to Granite State families already burdened by high heating costs.',
      },
    ],
    keyBills: [
      {
        title: 'Portsmouth Naval Shipyard Modernization Provisions',
        year: 2023,
        month: 6,
        summary: 'Led Senate effort to secure hundreds of millions in NDAA funding for facilities modernization at Portsmouth Naval Shipyard in Kittery, Maine — the shipyard employs thousands of New Hampshire workers and is the nation\'s primary yard for refueling and overhauling nuclear-powered submarines.',
      },
      {
        title: 'Shaheen-Portman Energy Efficiency Improvement Act',
        year: 2022,
        month: 8,
        summary: 'Championed energy efficiency provisions included in the Inflation Reduction Act, including ENERGY STAR updates and commercial building efficiency standards — building on legislation she had advanced bipartisan versions of for nearly a decade to reduce heating and cooling costs for New Hampshire households.',
      },
    ],
  },

  {
    bioguideId: 'H001076',
    slug: 'margaret-wood-hassan',
    name: 'Margaret Wood Hassan',
    party: 'D',
    chamber: 'Senate',
    state: 'New Hampshire',
    currentTitle: 'U.S. Senator from New Hampshire',
    bio: 'Maggie Hassan has represented New Hampshire in the U.S. Senate since 2017, after serving two terms as the state\'s governor. She is known for her focus on bipartisan work, particularly on drug pricing, cybersecurity, and veterans\' care. Hassan serves as Ranking Member of the Joint Economic Committee and is a member of the Senate Finance and Homeland Security committees.',
    sinceYear: 2017,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the most significant federal gun safety legislation in nearly three decades, including enhanced background checks for buyers under 21 and funding for state crisis intervention programs. Hassan was part of the bipartisan group of senators who negotiated the compromise.',
      },
      {
        title: 'Inflation Reduction Act — Drug Pricing Provisions',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act with a particular focus on its Medicare drug pricing negotiation provisions, which she had long championed. Hassan cited New Hampshire\'s severe opioid crisis and the disproportionate medication costs borne by seniors as key motivations.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Was one of a small number of Senate Democrats who voted for the Laken Riley Act, which mandated ICE detention of undocumented immigrants charged with violent crimes. Hassan argued the bill reflected the kind of targeted, enforcement-focused approach her constituents supported.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using her Senate Finance Committee seat to highlight how the legislation\'s Medicaid cuts would harm New Hampshire\'s seniors and working families and reverse the drug pricing progress she helped achieve through years of bipartisan negotiation. Hassan, as Ranking Member of the Joint Economic Committee, released economic analysis showing the bill\'s tax provisions disproportionately benefited the wealthy while cutting services that New Hampshire\'s middle-income and rural communities depend on.',
      },
    ],
    keyBills: [
      {
        title: 'Improving Seniors\' Timely Access to Care Act',
        year: 2022,
        month: 9,
        summary: 'Co-authored legislation streamlining prior authorization processes for Medicare Advantage plans, reducing delays in seniors\' access to care. The bill passed the House 393–0 and received broad bipartisan Senate support, addressing a persistent complaint from New Hampshire\'s growing senior population.',
      },
      {
        title: 'CHIPS and Science Act — Workforce Provisions',
        year: 2022,
        month: 7,
        summary: 'Championed workforce training provisions within the CHIPS and Science Act to build the domestic semiconductor talent pipeline, drawing on her experience as governor overseeing New Hampshire\'s community college system and workforce development programs.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'P000614',
    slug: 'chris-pappas',
    name: 'Chris Pappas',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'New Hampshire',
    currentTitle: 'U.S. Representative, New Hampshire 1st District',
    bio: 'Chris Pappas has represented New Hampshire\'s 1st Congressional District since 2019. A fourth-generation New Hampshire restaurateur and former state representative, he is the first openly gay person elected to Congress from New England. He serves on the House Veterans\' Affairs Committee and the Transportation and Infrastructure Committee, focusing on veterans\' care, infrastructure, and fiscal responsibility.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Infrastructure Law',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion Infrastructure Investment and Jobs Act, securing investments in New Hampshire\'s aging bridges, public transit, and broadband expansion. The 1st District includes Portsmouth and Manchester, cities with significant infrastructure needs.',
      },
      {
        title: 'PACT Act — Veterans Toxic Exposure Benefits',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics Act, expanding VA benefits for veterans exposed to burn pits and other toxic substances. Pappas was a vocal advocate for the bill given New Hampshire\'s substantial veteran population.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, citing proposed cuts to Medicaid and SNAP that he argued would harm working New Hampshire families and rural hospitals serving the 1st District.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using his House Veterans\' Affairs Committee seat to warn that Medicaid cuts would strip coverage from veterans and that reductions to VA funding streams would harm New Hampshire\'s substantial veteran population who depend on the Manchester VA Medical Center and other facilities in the 1st District. Pappas also argued the bill\'s transportation funding reductions would set back the infrastructure investments in Portsmouth and Manchester that he had championed as cornerstones of his tenure.',
      },
    ],
    keyBills: [
      {
        title: 'VA Electronic Health Record Modernization Accountability Act',
        year: 2023,
        month: 3,
        summary: 'Led legislation holding the VA accountable for its troubled Oracle-Cerner electronic health records rollout, including enhanced reporting requirements and independent oversight. The bill addressed systemic problems at VA facilities including the Manchester VA Medical Center in his district.',
      },
    ],
  },

  {
    bioguideId: 'G000604',
    slug: 'maggie-goodlander',
    name: 'Maggie Goodlander',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'New Hampshire',
    currentTitle: 'U.S. Representative, New Hampshire 2nd District',
    bio: 'Maggie Goodlander was elected to represent New Hampshire\'s 2nd Congressional District in 2024, succeeding Rep. Annie Kuster. A national security attorney and former aide to then-Vice President Joe Biden and National Security Advisor Jake Sullivan, she brought extensive foreign policy experience to Congress. She is married to Attorney General nominee Matt Olsen. She serves on the House Armed Services and Small Business Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing proposed cuts to Medicaid and rural health programs would be particularly damaging to the 2nd District\'s rural communities and small hospitals across central and western New Hampshire.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, drawing on her national security background through her House Armed Services Committee seat to argue the legislation\'s foreign aid cuts and NATO funding reductions would undermine the alliances she spent her career defending as a White House national security aide. Goodlander also condemned the bill\'s Medicaid cuts as threatening the rural hospitals and community health centers that serve the 2nd District\'s small towns across central and western New Hampshire.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Portsmouth Naval Shipyard Funding',
        year: 2025,
        month: 6,
        summary: 'Worked with the New Hampshire delegation to protect Portsmouth Naval Shipyard modernization funding in the NDAA, leveraging her Armed Services Committee assignment. The shipyard is one of the largest employers in the region and a critical national defense asset for submarine maintenance.',
      },
    ],
  },
]

export const nhDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

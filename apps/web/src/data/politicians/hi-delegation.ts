import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'H001042',
    slug: 'mazie-k-hirono',
    name: 'Mazie K. Hirono',
    party: 'D',
    chamber: 'Senate',
    state: 'Hawaii',
    currentTitle: 'U.S. Senator from Hawaii',
    bio: 'Mazie Hirono has served as U.S. Senator from Hawaii since 2013 and is the first Asian-American woman, the first U.S. senator born in Japan, and the first Buddhist senator in American history. Before the Senate she served in the U.S. House representing Hawaii\'s 2nd District and previously as Hawaii\'s lieutenant governor. She is known for her progressive advocacy on immigration, voting rights, veterans\' issues, and her outspoken questioning during high-profile Senate Judiciary confirmation hearings.',
    sinceYear: 2013,
    committees: [
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its clean energy investments as critical for Hawaii\'s goal of achieving 100% renewable energy and reducing the state\'s extreme dependence on imported petroleum for electricity generation.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act to boost domestic semiconductor manufacturing and research. Hirono highlighted Hawaii\'s role in Pacific technology infrastructure and the importance of supply chain security for defense systems stationed at Pearl Harbor and other military installations.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing it would expand mandatory detention without adequate due process protections and would disproportionately harm immigrant communities, which make up a large share of Hawaii\'s population and workforce.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid cuts and clean energy rollbacks would cause severe harm to Hawaii\'s healthcare system and set back the state\'s goal of achieving 100% renewable energy. As a member of the Senate Armed Services and Veterans\' Affairs Committees, Hirono also condemned the bill\'s proposed reductions to VA healthcare access for Pacific Island veterans from the Marshall Islands and other Compact nations who serve disproportionately in the U.S. military.',
      },
    ],
    keyBills: [
      {
        title: 'Native Hawaiian Health Care Improvement Act',
        year: 2022,
        month: 3,
        summary: 'Championed reauthorization of the Native Hawaiian Health Care Improvement Act, which funds a network of Native Hawaiian health care systems addressing the community\'s disproportionately high rates of chronic disease, cancer, and behavioral health challenges.',
      },
      {
        title: 'Veterans\' Benefits Improvement Provisions',
        year: 2023,
        month: 7,
        summary: 'Led Senate Veterans\' Affairs Committee efforts to improve VA benefits delivery for Pacific Island veterans, including those from the Marshall Islands and other Compact of Free Association nations who serve disproportionately in the U.S. military but have historically had limited VA access.',
      },
    ],
  },

  {
    bioguideId: 'S001194',
    slug: 'brian-schatz',
    name: 'Brian Schatz',
    party: 'D',
    chamber: 'Senate',
    state: 'Hawaii',
    currentTitle: 'U.S. Senator from Hawaii',
    bio: 'Brian Schatz has served in the U.S. Senate since 2012, appointed following the death of Senator Daniel Inouye. He is one of Congress\'s leading voices on climate change and ocean policy, and serves on the Senate Appropriations Committee and Commerce Committee. Known for his progressive positions and social media presence, Schatz has championed legislation addressing climate adaptation, disaster preparedness, and Native Hawaiian rights.',
    sinceYear: 2012,
    committees: [
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'slet', name: 'Senate Select Committee on Ethics', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act — Climate Provisions',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act with particular emphasis on its historic climate investments. Schatz has long argued climate change poses an existential threat to low-lying Pacific islands and coral reef ecosystems that support Hawaii\'s tourism economy and marine biodiversity.',
      },
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, securing significant funding for Hawaii\'s devastated tourism sector, which accounts for over 20% of the state\'s economy and was disproportionately harmed by pandemic-era travel restrictions.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing mandatory detention provisions were overly broad and would harm Hawaii\'s immigrant community, which constitutes a significant portion of the state\'s workforce in healthcare, construction, and the hotel industry.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its elimination of clean energy tax credits would devastate Hawaii\'s transition to 100% renewable energy and undermine the ocean-based climate resilience investments he has championed for low-lying Pacific communities. As a member of the Senate Appropriations Committee, Schatz warned the bill\'s cuts to disaster preparedness and climate adaptation programs leave Hawaii — already battered by Maui\'s 2023 wildfires — dangerously exposed to future climate-driven catastrophes.',
      },
    ],
    keyBills: [
      {
        title: 'Ocean-Based Climate Solutions Act',
        year: 2021,
        month: 6,
        summary: 'Introduced comprehensive legislation supporting ocean-based strategies to address climate change, including coastal restoration, blue carbon ecosystems, and marine renewable energy. Hawaii\'s extensive coastlines and coral reefs make ocean climate policy a top priority for Schatz and his constituents.',
      },
      {
        title: 'Native Hawaiian Federal Recognition and Self-Governance Act',
        year: 2023,
        month: 4,
        summary: 'Championed legislation reaffirming the federal government\'s special political and legal relationship with the Native Hawaiian community and expanding self-governance mechanisms, building on decades of congressional efforts to provide Native Hawaiians with legal standing comparable to other Indigenous nations.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'C001055',
    slug: 'ed-case',
    name: 'Ed Case',
    party: 'D',
    chamber: 'House',
    district: 1,
    state: 'Hawaii',
    currentTitle: 'U.S. Representative, Hawaii 1st District',
    bio: 'Ed Case has represented Hawaii\'s 1st Congressional District since 2019 in his second stint in Congress, having previously served from 2002 to 2007. A descendant of American missionaries who came to Hawaii in the 1800s and a graduate of Williams College and Harvard Law School, he is known as one of Congress\'s most fiscally conservative Democrats. Case serves on the House Appropriations Committee and advocates for Hawaii\'s military installations, tourism economy, and Pacific regional partnerships.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, securing investments in Hawaii\'s aging highway system, port infrastructure, and the modernization of Honolulu\'s water systems — including federal contributions toward addressing the Navy\'s Red Hill fuel storage facility contamination of the island\'s water supply.',
      },
      {
        title: 'Against Build Back Better Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Was one of a small number of House Democrats to vote against the $1.75 trillion Build Back Better Act, citing concerns about its cost and inflationary impact. Case has consistently positioned himself as a fiscally responsible centrist within the Democratic caucus.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, securing provisions protecting Pearl Harbor-Hickam and other Hawaii military installations. Hawaii hosts some of the most strategically important U.S. military assets in the Indo-Pacific, and Case has used his Appropriations seat to defend their funding.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid cuts and clean energy rollbacks would harm Hawaii\'s residents and reverse progress on the state\'s renewable energy transition. As one of Congress\'s most fiscally conservative Democrats and an Appropriations Committee member, Case acknowledged the need for deficit reduction but argued the bill\'s approach — cutting healthcare and clean energy while extending tax cuts — was the wrong set of tradeoffs for Hawaii\'s 1st District constituents.',
      },
    ],
    keyBills: [
      {
        title: 'Red Hill Bulk Fuel Storage Facility Remediation Funding',
        year: 2022,
        month: 5,
        summary: 'Led congressional efforts to secure federal funding for the Navy\'s Red Hill fuel storage facility remediation after jet fuel contaminated Oahu\'s primary water aquifer in late 2021, sickening thousands of military families. Case pushed the Navy and EPA to accelerate closure and aquifer restoration.',
      },
    ],
  },

  {
    bioguideId: 'T000487',
    slug: 'jill-n-tokuda',
    name: 'Jill N. Tokuda',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Hawaii',
    currentTitle: 'U.S. Representative, Hawaii 2nd District',
    bio: 'Jill Tokuda was elected to represent Hawaii\'s 2nd Congressional District in 2022, becoming the first woman to represent the district. A former Hawaii State Senator who served 14 years in the state legislature, including as Senate Majority Leader, she focuses on agriculture, military readiness in the Pacific, and supporting Hawaii\'s rural communities. She serves on the House Armed Services Committee and the Agriculture Committee.',
    sinceYear: 2023,
    committees: [
      { slug: 'hszs', name: 'House Select Committee on the Strategic Competition Between the United States and the Chinese Communist Party', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, including provisions strengthening Indo-Pacific military posture critical to the 2nd District, which encompasses Schofield Barracks, Kaneohe Bay Marine Corps Base, and other installations central to U.S. Pacific deterrence strategy.',
      },
      {
        title: 'Farm Bill Reauthorization',
        year: 2024,
        month: 11,
        position: 'For',
        summary: 'Voted for the farm bill extension, advocating for provisions supporting Hawaii\'s unique agricultural economy including specialty crops, coffee, macadamia nuts, and diversified farming on the Neighbor Islands of Maui, Kauai, and the Big Island.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would harm Hawaii\'s lower-income rural communities on the Neighbor Islands and military families stationed at bases across the 2nd District.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid and SNAP cuts would harm Hawaii\'s rural Neighbor Island communities and that the rollback of clean energy tax credits would undermine local food and energy security initiatives she has championed. As a member of the House Armed Services Committee, Tokuda warned that the bill\'s broader fiscal instability could disrupt defense procurement and threaten the military installation funding critical to the 2nd District\'s economy at Schofield Barracks and Kaneohe Bay.',
      },
    ],
    keyBills: [
      {
        title: 'Strengthening Hawaii Agriculture and Food Security Act',
        year: 2024,
        month: 2,
        summary: 'Introduced legislation addressing Hawaii\'s extreme food import dependence — the state imports over 85% of its food — by expanding USDA support for local agriculture, food hubs, and school meal procurement from local farms on the Neighbor Islands.',
      },
    ],
  },
]

export const hiDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

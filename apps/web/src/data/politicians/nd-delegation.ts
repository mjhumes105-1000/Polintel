import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'H001061',
    slug: 'john-hoeven',
    name: 'John Hoeven',
    party: 'R',
    chamber: 'Senate',
    state: 'North Dakota',
    currentTitle: 'U.S. Senator from North Dakota',
    bio: 'John Hoeven has served in the U.S. Senate since 2011 and previously served as North Dakota\'s governor for ten years — one of the most popular governors in the state\'s history. A former banker and CEO of Bank of North Dakota, he is a senior member of the Appropriations and Agriculture committees, and chairs the Senate Agriculture Subcommittee on Energy and Rural Development. He is a leading advocate for precision agriculture, energy production, and Native American community needs.',
    sinceYear: 2011,
    committees: [
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its energy provisions would harm North Dakota\'s Bakken oil and gas industry and that its farm provisions failed to adequately address the needs of Great Plains grain producers facing input cost inflation.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law as one of the Republican senators who supported the deal. North Dakota secured significant highway and broadband investments, and Hoeven used his Appropriations seat to prioritize rural infrastructure including the Fargo-Moorhead flood diversion project.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with his support for strong border enforcement as governor and senator.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using his Senate Appropriations and Agriculture Committee seats to advocate for the legislation\'s commodity program protections and energy production provisions critical to North Dakota\'s Bakken oil industry and Great Plains grain farmers. Hoeven praised the bill\'s tax cut extensions as essential for the farm families and energy businesses whose investment in North Dakota\'s economy depends on long-term fiscal certainty.',
      },
    ],
    keyBills: [
      {
        title: 'Farm Bill — Commodity Title Provisions',
        year: 2023,
        month: 11,
        summary: 'Led Senate Agriculture Committee work on commodity program provisions in the farm bill, advocating for reference price updates for North Dakota\'s key crops — wheat, corn, soybeans, sunflowers, and canola — to reflect the dramatic increase in production costs since the last farm bill baseline was set.',
      },
      {
        title: 'Fargo-Moorhead Flood Diversion Appropriations',
        year: 2022,
        month: 3,
        summary: 'Secured federal appropriations for the Fargo-Moorhead Metro Flood Diversion project, the largest flood control project in U.S. history, protecting the Red River Valley from the catastrophic flooding that has repeatedly devastated the region. Hoeven used his Appropriations seat to advance funding for the $2.75 billion Army Corps of Engineers project.',
      },
    ],
  },

  {
    bioguideId: 'C001096',
    slug: 'kevin-cramer',
    name: 'Kevin Cramer',
    party: 'R',
    chamber: 'Senate',
    state: 'North Dakota',
    currentTitle: 'U.S. Senator from North Dakota',
    bio: 'Kevin Cramer has served in the U.S. Senate since 2019 and previously represented North Dakota\'s at-large House seat for six years. A close ally of President Trump, he served as an informal energy adviser during the 2016 campaign. He sits on the Banking, Armed Services, Veterans\' Affairs, and Environment committees, and is a leading Senate voice on energy policy, agricultural trade, and defense spending.',
    sinceYear: 2019,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing it would devastate North Dakota\'s Bakken oil production and that its methane emissions fees were particularly harmful to the state\'s natural gas infrastructure. He called it a "war on American energy."',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, including provisions supporting Minot Air Force Base — home to both bomber and ICBM wings and one of North Dakota\'s most important economic and strategic assets. Cramer has consistently advocated for nuclear modernization funding through his Armed Services seat.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his strong and consistent support for strict immigration enforcement throughout his congressional career.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, championing through his Senate Armed Services and Banking Committee roles the legislation\'s defense spending increases — including nuclear modernization funding critical to Minot Air Force Base — and its provisions reducing regulatory burdens on energy and financial institutions. Cramer argued the bill\'s border security investment and Bakken energy permitting relief were among the most important provisions for North Dakota\'s economy and national security posture.',
      },
    ],
    keyBills: [
      {
        title: 'Nuclear Deterrent Modernization Provisions — NDAA',
        year: 2023,
        month: 12,
        summary: 'Used his Armed Services Committee seat to champion nuclear modernization funding in the NDAA, protecting the Ground Based Strategic Deterrent program and B-21 bomber acquisition critical to Minot AFB\'s dual-wing mission. North Dakota hosts more nuclear warheads than any other state, making nuclear policy a central legislative priority.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'F000482',
    slug: 'julie-fedorchak',
    name: 'Julie Fedorchak',
    party: 'R',
    chamber: 'House',
    district: 0,
    state: 'North Dakota',
    currentTitle: 'U.S. Representative, North Dakota At-Large',
    bio: 'Julie Fedorchak was elected to represent North Dakota\'s at-large House seat in 2024, succeeding the retiring Kelly Armstrong. A former North Dakota Public Service Commission chairman who regulated the state\'s energy utilities, pipelines, and telecommunications for over a decade, she brings deep regulatory expertise to Congress. She serves on the House Energy and Commerce Committee.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in her first weeks in Congress, consistent with the border security positions she emphasized during her 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill — Energy Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill with particular focus on its energy provisions rolling back Inflation Reduction Act clean energy mandates and restoring traditional energy permitting processes — areas directly aligned with her decade of energy regulatory experience at the North Dakota Public Service Commission.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, applying her decade of energy regulatory expertise through her House Energy and Commerce Committee seat to support the legislation\'s provisions restoring market-based energy permitting and rolling back federal mandates she argued had distorted North Dakota\'s power grid. Fedorchak highlighted the bill\'s tax provisions and border security investments as delivering on the commitments she made to North Dakota\'s energy communities and agricultural families during her 2024 campaign.',
      },
    ],
    keyBills: [
      {
        title: 'Energy Permitting Reform and Grid Reliability Act',
        year: 2025,
        month: 4,
        summary: 'Drew on her experience as state utility regulator to introduce legislation streamlining federal energy infrastructure permitting and establishing grid reliability standards for the transition to renewable energy, balancing North Dakota\'s substantial wind energy resources with the reliability needs of the Midwest power grid.',
      },
    ],
  },
]

export const ndDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'N000147',
    slug: 'eleanor-holmes-norton',
    name: 'Eleanor Holmes Norton',
    party: 'D',
    chamber: 'House',
    state: 'District of Columbia',
    currentTitle: 'U.S. Delegate from the District of Columbia',
    bio: 'Eleanor Holmes Norton has served as the District of Columbia\'s non-voting Delegate to the House of Representatives since 1991, making her one of the longest-serving members of Congress. A civil rights icon, constitutional law scholar, and former chair of the Equal Employment Opportunity Commission under President Carter, she has spent her career fighting for full congressional representation and voting rights for DC residents. She is the ranking member on the House Transportation and Infrastructure Committee\'s subcommittee on Highways and Transit, and has been the primary champion of DC statehood legislation.',
    sinceYear: 1991,
    committees: [
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Washington, DC Admission Act',
        year: 2021,
        month: 4,
        position: 'For',
        summary: 'Voted for House passage of the Washington, D.C. Admission Act, which would make DC the 51st state. Norton has introduced DC statehood legislation in every Congress since 1991; the bill passed the House in 2021 for only the second time in history but stalled in the evenly divided Senate.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law, securing significant investments in DC\'s Metro system, roads, bridges, and water infrastructure. As a Transportation Committee member, Norton has long advocated for federal infrastructure investment in the District, which lacks the state-level taxing and bonding authority that other jurisdictions use for capital projects.',
      },
      {
        title: 'George Floyd Justice in Policing Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the House-passed police reform legislation establishing federal standards for use of force, banning chokeholds, and creating a national registry of police misconduct. Norton has been a civil rights advocate throughout her career and worked to ensure DC-specific police reform provisions were included in the bill.',
      },
    ],
    keyBills: [
      {
        title: 'Washington, DC Admission Act',
        year: 2023,
        month: 1,
        summary: 'Re-introduced her signature DC statehood legislation, which would grant the 700,000 residents of the District of Columbia full congressional representation and a voting House member and two senators. Norton argues DC residents pay federal taxes, serve in the military, and are subject to all federal laws but are denied the basic democratic right of congressional representation.',
      },
      {
        title: 'DC Home Rule and Budget Autonomy Provisions',
        year: 2024,
        month: 3,
        summary: 'Championed legislation protecting DC\'s home rule authority and budget autonomy from congressional interference, responding to repeated efforts by Republican-controlled Congresses to override DC laws on criminal justice, education, and other local matters. Norton argues that congressional override of DC laws represents a fundamental denial of self-governance to DC residents.',
      },
    ],
  },
]

export const dcDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'H001103',
    slug: 'pablo-jose-hernandez',
    name: 'Pablo José Hernández',
    party: 'D',
    chamber: 'House',
    state: 'Puerto Rico',
    currentTitle: 'Resident Commissioner from Puerto Rico',
    bio: 'Pablo José Hernández was elected Puerto Rico\'s Resident Commissioner in 2024, succeeding Republican Jenniffer González-Colón. A member of Puerto Rico\'s Popular Democratic Party — affiliated with the national Democratic Party — he favors Puerto Rico\'s current commonwealth status over statehood, contrasting with his predecessor. He serves on the House Natural Resources and Homeland Security committees. As Resident Commissioner, he serves a four-year term rather than the two-year terms of other House members and delegates.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing its mandatory detention provisions were overly broad and would harm Puerto Rico\'s immigrant community and due process protections. Puerto Rico has a large immigrant workforce particularly in agricultural and service sectors.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, arguing its Medicaid funding cuts would devastate Puerto Rico\'s healthcare system. Puerto Rico receives Medicaid funding through a capped block grant formula that already provides significantly less per-capita than states, and Hernández argued further cuts would trigger a healthcare crisis on the island.',
      },
    ],
    keyBills: [
      {
        title: 'Puerto Rico Medicaid Equity Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation equalizing Puerto Rico\'s Medicaid funding formula with that of the 50 states, addressing a longstanding disparity that results in Puerto Rico receiving roughly half the federal Medicaid support per beneficiary compared to the mainland. The island\'s high poverty rate — over 40% of residents live in poverty — makes Medicaid the primary source of health coverage for a majority of Puerto Ricans.',
      },
      {
        title: 'Puerto Rico Disaster Recovery and Grid Resilience Act',
        year: 2025,
        month: 6,
        summary: 'Championed legislation accelerating the release of remaining FEMA disaster recovery funds from Hurricanes Irma and Maria (2017) and Hurricane Fiona (2022), and establishing accountability mechanisms for the Puerto Rico Electric Power Authority\'s federally funded grid modernization project. PREPA\'s unreliable electrical grid has been the island\'s most pressing infrastructure challenge for years.',
      },
    ],
  },
]

export const prDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

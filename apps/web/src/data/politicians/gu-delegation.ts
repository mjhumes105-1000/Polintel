import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'M001219',
    slug: 'james-c-moylan',
    name: 'James C. Moylan',
    party: 'R',
    chamber: 'House',
    state: 'Guam',
    currentTitle: 'U.S. Delegate from Guam',
    bio: 'James Moylan was elected as Guam\'s non-voting Delegate to the House in 2022, defeating incumbent Democrat Michael San Nicolas. A businessman and former Guam Senator who served in the Guam Legislature for multiple terms, he is the first Republican to represent Guam in Congress since 1994. He serves on the House Armed Services, Education and Workforce, and Foreign Affairs committees, advocating for Guam\'s military buildup, veterans\' benefits, federal funding equity, and the self-determination rights of the Chamorro people.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, securing provisions advancing Guam\'s military buildup and the relocation of Marines from Okinawa. Guam is the westernmost U.S. territory and hosts the largest concentration of U.S. military assets in the Western Pacific, making defense investment a central priority for Moylan and his constituents.',
      },
      {
        title: 'PACT Act — Veterans Toxic Exposure Benefits',
        year: 2023,
        month: 1,
        position: 'For',
        summary: 'Supported implementation of the PACT Act\'s toxic exposure benefits for Guam\'s veterans, addressing significant barriers Guamanian veterans had faced in accessing VA care due to the island\'s geographic isolation and insufficient VA infrastructure.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with his support for the Trump administration\'s immigration enforcement priorities.',
      },
    ],
    keyBills: [
      {
        title: 'Guam World War II Loyalty Recognition Act',
        year: 2023,
        month: 7,
        summary: 'Championed legislation providing direct reparations payments to survivors and descendants of Guamanians who suffered under the Japanese occupation during World War II — a decades-long effort to provide justice for the Chamorro people\'s wartime suffering. Guam was the only U.S. jurisdiction occupied by Japan during WWII, and its residents have waited over 80 years for formal federal recognition of their sacrifice.',
      },
      {
        title: 'Guam Military Buildup Infrastructure Investment',
        year: 2024,
        month: 3,
        summary: 'Worked through the Armed Services Committee to ensure Guam\'s civilian infrastructure receives adequate federal investment alongside the military buildup, arguing that the rapid expansion of military facilities strains the island\'s roads, water systems, and schools in ways that require offsetting civilian infrastructure investment.',
      },
    ],
  },
]

export const guDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

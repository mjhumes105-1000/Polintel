import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'P000610',
    slug: 'stacey-e-plaskett',
    name: 'Stacey E. Plaskett',
    party: 'D',
    chamber: 'House',
    state: 'U.S. Virgin Islands',
    currentTitle: 'U.S. Delegate from the U.S. Virgin Islands',
    bio: 'Stacey Plaskett has served as the non-voting Delegate representing the U.S. Virgin Islands since 2015. A former federal prosecutor and Virgin Islands government attorney, she gained national attention as an impeachment manager during President Trump\'s second Senate impeachment trial in 2021. She serves on the House Permanent Select Committee on Intelligence and the Ways and Means Committee, advocating for the Virgin Islands\' economic recovery, federal tax parity, and disaster resilience following the catastrophic 2017 hurricane season.',
    sinceYear: 2015,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Second Impeachment of President Trump — Impeachment Manager',
        year: 2021,
        month: 2,
        position: 'For',
        summary: 'Served as one of nine House impeachment managers in the Senate trial following President Trump\'s second impeachment. Plaskett\'s compelling presentations during the trial — particularly her multimedia presentation of video evidence — drew broad national attention and established her as one of the most visible members of the Virgin Islands\' congressional delegation in the territory\'s history.',
      },
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, advocating for equitable treatment of the Virgin Islands and other territories in relief formula calculations. Territories have historically received less per-capita federal assistance than states under disaster and emergency relief formulas, a disparity Plaskett has consistently challenged.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its climate resilience provisions critical for the Virgin Islands, which faces severe hurricane risk amplified by warming ocean temperatures. The territory has also suffered from extreme energy costs given its reliance on petroleum-fired electricity generation.',
      },
    ],
    keyBills: [
      {
        title: 'USVI Hurricane Recovery and Resilience Act',
        year: 2021,
        month: 9,
        summary: 'Introduced legislation providing additional federal resources for long-term infrastructure resilience in the U.S. Virgin Islands following Hurricanes Irma and Maria, which caused catastrophic damage in 2017. The bill addressed the slow pace of FEMA and HUD disaster recovery funding flowing to the territory and sought to build a more storm-resilient electrical grid.',
      },
      {
        title: 'Territorial Tax Parity Provisions',
        year: 2023,
        month: 5,
        summary: 'Championed legislative fixes to extend full tax credits and benefits of the Inflation Reduction Act to residents of the U.S. territories including the Virgin Islands, Puerto Rico, Guam, and American Samoa — who pay federal taxes but were excluded from portions of the law\'s consumer credits due to their territorial status.',
      },
    ],
  },
]

export const viDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

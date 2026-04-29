import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'K000404',
    slug: 'kimberlyn-king-hinds',
    name: 'Kimberlyn King-Hinds',
    party: 'R',
    chamber: 'House',
    state: 'Northern Mariana Islands',
    currentTitle: 'U.S. Delegate from the Northern Mariana Islands',
    bio: 'Kimberlyn King-Hinds was elected as the Northern Mariana Islands\' non-voting Delegate to the House in 2024, succeeding Democrat Gregorio Kilili Camacho Sablan. A Republican businesswoman and public administrator, she is the first woman to represent the CNMI in Congress. She serves on the House Veterans\' Affairs, Small Business, and Transportation and Infrastructure committees, focusing on economic development, military-related issues, and federal funding equity for the CNMI.',
    sinceYear: 2025,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in her first weeks in Congress. The Northern Mariana Islands has unique immigration circumstances due to its historically large temporary worker population under the CNMI\'s special immigration status, and King-Hinds supported the bill\'s targeted enforcement approach.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting provisions she argued would benefit the CNMI\'s small business community and reduce regulatory burdens on the territory\'s tourism-dependent economy.',
      },
    ],
    keyBills: [
      {
        title: 'CNMI Economic Recovery and Tourism Investment Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation targeting the Northern Mariana Islands\' severely depressed tourism economy — which collapsed during COVID-19 and has been slow to recover due to reduced air service from Japan and South Korea — with targeted federal investment in tourism promotion, airport infrastructure, and small business recovery assistance.',
      },
    ],
  },
]

export const mpDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

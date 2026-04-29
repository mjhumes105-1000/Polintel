import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  {
    bioguideId: 'R000600',
    slug: 'aumua-amata-coleman-radewagen',
    name: 'Aumua Amata Coleman Radewagen',
    party: 'R',
    chamber: 'House',
    state: 'American Samoa',
    currentTitle: 'U.S. Delegate from American Samoa',
    bio: 'Aumua Amata Coleman Radewagen has served as the non-voting Delegate representing American Samoa since 2015. A former American Samoa scheduling director for President Reagan and a businesswoman, she is a member of the Republican Party — notable for a territory that sends a non-voting delegate — and one of only a handful of Native Pacific Islander women to serve in Congress. She serves on the House Veterans\' Affairs, Natural Resources, and Foreign Affairs committees, championing military service recognition, tuna industry protections, and territory federal funding equity.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'PACT Act — Veterans Toxic Exposure Benefits',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the PACT Act expanding VA healthcare and benefits for veterans exposed to burn pits and toxic substances. American Samoa has one of the highest per-capita military enlistment rates of any U.S. jurisdiction, making veterans\' benefits a top legislative priority for Radewagen.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, including provisions recognizing American Samoa\'s extraordinary military service and ensuring territorial veterans receive full federal benefits. Samoans serve in the U.S. military at a higher rate per capita than any state or territory.',
      },
      {
        title: 'Magnuson-Stevens Fishery Conservation Reauthorization',
        year: 2023,
        month: 9,
        position: 'For',
        summary: 'Voted for reauthorization of the primary federal fisheries law, advocating for provisions protecting American Samoa\'s tuna fishing and canning industry — which accounts for the vast majority of the territory\'s private-sector employment — from restrictive quota changes that would harm local canneries.',
      },
    ],
    keyBills: [
      {
        title: 'American Samoa Tuna Industry Protection Provisions',
        year: 2023,
        month: 4,
        summary: 'Championed legislation within the Natural Resources Committee to protect the StarKist tuna cannery in Pago Pago — American Samoa\'s largest employer — from federal fisheries regulations and trade policies that could make the operation economically unviable. The cannery employs thousands of workers in an economy with limited alternative employment options.',
      },
      {
        title: 'Territorial Veterans Benefits Equity Act',
        year: 2022,
        month: 6,
        summary: 'Introduced legislation ensuring American Samoa veterans who served in the U.S. military receive full federal benefits equivalent to those available to veterans from the 50 states. Veterans from territories have historically faced barriers to some benefits due to their jurisdictions\' non-state status, creating a significant inequity given American Samoa\'s exceptional military service rate.',
      },
    ],
  },
]

export const asDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

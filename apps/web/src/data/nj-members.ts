export type MemberParty = 'D' | 'R' | 'I'

export interface StateMember {
  bioguideId: string
  name: string
  party: MemberParty
  chamber: 'House' | 'Senate'
  district?: number
  photoUrl: string
}

// Source: congress.gov API — 119th Congress, retrieved 2026-04-25
export const njMembers: StateMember[] = [
  // ── Senators ──────────────────────────────────────────────────────────────
  {
    bioguideId: 'B001288',
    name: 'Cory Booker',
    party: 'D',
    chamber: 'Senate',
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/B/B001288.jpg',
  },
  {
    bioguideId: 'K000394',
    name: 'Andy Kim',
    party: 'D',
    chamber: 'Senate',
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/K/K000394.jpg',
  },

  // ── House — Districts 1–12 ────────────────────────────────────────────────
  {
    bioguideId: 'N000188',
    name: 'Donald Norcross',
    party: 'D',
    chamber: 'House',
    district: 1,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/N/N000188.jpg',
  },
  {
    bioguideId: 'V000133',
    name: 'Jeff Van Drew',
    party: 'R',
    chamber: 'House',
    district: 2,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/V/V000133.jpg',
  },
  {
    bioguideId: 'C001136',
    name: 'Herb Conaway',
    party: 'D',
    chamber: 'House',
    district: 3,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001136.jpg',
  },
  {
    bioguideId: 'S000522',
    name: 'Chris Smith',
    party: 'R',
    chamber: 'House',
    district: 4,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S000522.jpg',
  },
  {
    bioguideId: 'G000583',
    name: 'Josh Gottheimer',
    party: 'D',
    chamber: 'House',
    district: 5,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000583.jpg',
  },
  {
    bioguideId: 'P000034',
    name: 'Frank Pallone',
    party: 'D',
    chamber: 'House',
    district: 6,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/P/P000034.jpg',
  },
  {
    bioguideId: 'K000398',
    name: 'Tom Kean Jr.',
    party: 'R',
    chamber: 'House',
    district: 7,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/K/K000398.jpg',
  },
  {
    bioguideId: 'M001226',
    name: 'Rob Menendez',
    party: 'D',
    chamber: 'House',
    district: 8,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001226.jpg',
  },
  {
    bioguideId: 'P000621',
    name: 'Nellie Pou',
    party: 'D',
    chamber: 'House',
    district: 9,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/P/P000621.jpg',
  },
  {
    bioguideId: 'M001229',
    name: 'LaMonica McIver',
    party: 'D',
    chamber: 'House',
    district: 10,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001229.jpg',
  },
  {
    bioguideId: 'M001246',
    name: 'Analilia Mejia',
    party: 'D',
    chamber: 'House',
    district: 11,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001246.jpg',
  },
  {
    bioguideId: 'W000822',
    name: 'Bonnie Watson Coleman',
    party: 'D',
    chamber: 'House',
    district: 12,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000822.jpg',
  },
]

export const njSenators: StateMember[] = njMembers.filter(m => m.chamber === 'Senate')

export const njMembersByDistrict: Record<number, StateMember> = Object.fromEntries(
  njMembers.filter(m => m.chamber === 'House').map(m => [m.district!, m])
)

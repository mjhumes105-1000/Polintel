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
export const msMembers: StateMember[] = [
  // ── Senators ──────────────────────────────────────────────────────────────
  {
    bioguideId: 'W000437',
    name: 'Roger Wicker',
    party: 'R',
    chamber: 'Senate',
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000437.jpg',
  },
  {
    bioguideId: 'H001079',
    name: 'Cindy Hyde-Smith',
    party: 'R',
    chamber: 'Senate',
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/H/H001079.jpg',
  },

  // ── House — Districts 1–4 ─────────────────────────────────────────────────
  {
    bioguideId: 'K000388',
    name: 'Trent Kelly',
    party: 'R',
    chamber: 'House',
    district: 1,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/K/K000388.jpg',
  },
  {
    bioguideId: 'T000193',
    name: 'Bennie Thompson',
    party: 'D',
    chamber: 'House',
    district: 2,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/T/T000193.jpg',
  },
  {
    bioguideId: 'G000591',
    name: 'Michael Guest',
    party: 'R',
    chamber: 'House',
    district: 3,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000591.jpg',
  },
  {
    bioguideId: 'E000235',
    name: 'Mike Ezell',
    party: 'R',
    chamber: 'House',
    district: 4,
    photoUrl: 'https://bioguide.congress.gov/bioguide/photo/E/E000235.jpg',
  },
]

export const msSenators: StateMember[] = msMembers.filter(m => m.chamber === 'Senate')

export const msMembersByDistrict: Record<number, StateMember> = Object.fromEntries(
  msMembers.filter(m => m.chamber === 'House').map(m => [m.district!, m])
)

export type MemberParty = 'D' | 'R' | 'I'

export interface StateMember {
  bioguideId: string
  name: string
  party: MemberParty
  chamber: 'House' | 'Senate'
  district?: number
  photoUrl: string
}

// Source: congress.gov API — 119th Congress, retrieved 2026-04-27
export const nyMembers: StateMember[] = [
  // ── Senators ──────────────────────────────────────────────────────────────
  { bioguideId: 'S000148', name: 'Chuck Schumer',        party: 'D', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S000148.jpg' },
  { bioguideId: 'G000555', name: 'Kirsten Gillibrand',   party: 'D', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000555.jpg' },

  // ── House ─────────────────────────────────────────────────────────────────
  { bioguideId: 'L000598', name: 'Nick LaLota',                 party: 'R', chamber: 'House', district: 1,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000598.jpg' },
  { bioguideId: 'G000597', name: 'Andrew Garbarino',            party: 'R', chamber: 'House', district: 2,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000597.jpg' },
  { bioguideId: 'S001201', name: 'Tom Suozzi',                  party: 'D', chamber: 'House', district: 3,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001201.jpg' },
  { bioguideId: 'G000602', name: 'Laura Gillen',                party: 'D', chamber: 'House', district: 4,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000602.jpg' },
  { bioguideId: 'M001137', name: 'Gregory Meeks',               party: 'D', chamber: 'House', district: 5,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001137.jpg' },
  { bioguideId: 'M001188', name: 'Grace Meng',                  party: 'D', chamber: 'House', district: 6,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001188.jpg' },
  { bioguideId: 'V000081', name: 'Nydia Velázquez',             party: 'D', chamber: 'House', district: 7,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/V/V000081.jpg' },
  { bioguideId: 'J000294', name: 'Hakeem Jeffries',             party: 'D', chamber: 'House', district: 8,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/J/J000294.jpg' },
  { bioguideId: 'C001067', name: 'Yvette Clarke',               party: 'D', chamber: 'House', district: 9,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001067.jpg' },
  { bioguideId: 'G000599', name: 'Daniel Goldman',              party: 'D', chamber: 'House', district: 10, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000599.jpg' },
  { bioguideId: 'M000317', name: 'Nicole Malliotakis',          party: 'R', chamber: 'House', district: 11, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M000317.jpg' },
  { bioguideId: 'N000002', name: 'Jerry Nadler',                party: 'D', chamber: 'House', district: 12, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/N/N000002.jpg' },
  { bioguideId: 'E000297', name: 'Adriano Espaillat',           party: 'D', chamber: 'House', district: 13, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/E/E000297.jpg' },
  { bioguideId: 'O000172', name: 'Alexandria Ocasio-Cortez',    party: 'D', chamber: 'House', district: 14, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/O/O000172.jpg' },
  { bioguideId: 'T000486', name: 'Ritchie Torres',              party: 'D', chamber: 'House', district: 15, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/T/T000486.jpg' },
  { bioguideId: 'L000606', name: 'George Latimer',              party: 'D', chamber: 'House', district: 16, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000606.jpg' },
  { bioguideId: 'L000599', name: 'Michael Lawler',              party: 'R', chamber: 'House', district: 17, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000599.jpg' },
  { bioguideId: 'R000579', name: 'Patrick Ryan',                party: 'D', chamber: 'House', district: 18, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/R/R000579.jpg' },
  { bioguideId: 'R000622', name: 'Josh Riley',                  party: 'D', chamber: 'House', district: 19, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/R/R000622.jpg' },
  { bioguideId: 'T000469', name: 'Paul Tonko',                  party: 'D', chamber: 'House', district: 20, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/T/T000469.jpg' },
  { bioguideId: 'S001196', name: 'Elise Stefanik',              party: 'R', chamber: 'House', district: 21, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001196.jpg' },
  { bioguideId: 'M001231', name: 'John Mannion',                party: 'D', chamber: 'House', district: 22, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001231.jpg' },
  { bioguideId: 'L000600', name: 'Nick Langworthy',             party: 'R', chamber: 'House', district: 23, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000600.jpg' },
  { bioguideId: 'T000478', name: 'Claudia Tenney',              party: 'R', chamber: 'House', district: 24, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/T/T000478.jpg' },
  { bioguideId: 'M001206', name: 'Joseph Morelle',              party: 'D', chamber: 'House', district: 25, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001206.jpg' },
  { bioguideId: 'K000402', name: 'Timothy Kennedy',             party: 'D', chamber: 'House', district: 26, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/K/K000402.jpg' },
]

export const nySenators: StateMember[] = nyMembers.filter(m => m.chamber === 'Senate')

export const nyMembersByDistrict: Record<number, StateMember> = Object.fromEntries(
  nyMembers.filter(m => m.chamber === 'House').map(m => [m.district!, m])
)

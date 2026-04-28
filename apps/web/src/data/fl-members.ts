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
export const flMembers: StateMember[] = [
  // ── Senators ──────────────────────────────────────────────────────────────
  { bioguideId: 'S001217', name: 'Rick Scott',           party: 'R', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001217.jpg' },
  { bioguideId: 'M001244', name: 'Ashley Moody',         party: 'R', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001244.jpg' },

  // ── House ─────────────────────────────────────────────────────────────────
  { bioguideId: 'P000622', name: 'Jimmy Patronis',               party: 'R', chamber: 'House', district: 1,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/P/P000622.jpg' },
  { bioguideId: 'D000628', name: 'Neal Dunn',                    party: 'R', chamber: 'House', district: 2,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/D/D000628.jpg' },
  { bioguideId: 'C001039', name: 'Kat Cammack',                  party: 'R', chamber: 'House', district: 3,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001039.jpg' },
  { bioguideId: 'B001314', name: 'Aaron Bean',                   party: 'R', chamber: 'House', district: 4,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/B/B001314.jpg' },
  { bioguideId: 'R000609', name: 'John Rutherford',              party: 'R', chamber: 'House', district: 5,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/R/R000609.jpg' },
  { bioguideId: 'F000484', name: 'Randy Fine',                   party: 'R', chamber: 'House', district: 6,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000484.jpg' },
  { bioguideId: 'M001216', name: 'Cory Mills',                   party: 'R', chamber: 'House', district: 7,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001216.jpg' },
  { bioguideId: 'H001099', name: 'Mike Haridopolos',             party: 'R', chamber: 'House', district: 8,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/H/H001099.jpg' },
  { bioguideId: 'S001200', name: 'Darren Soto',                  party: 'D', chamber: 'House', district: 9,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001200.jpg' },
  { bioguideId: 'F000476', name: 'Maxwell Frost',                party: 'D', chamber: 'House', district: 10, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000476.jpg' },
  { bioguideId: 'W000806', name: 'Daniel Webster',               party: 'R', chamber: 'House', district: 11, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000806.jpg' },
  { bioguideId: 'B001257', name: 'Gus Bilirakis',                party: 'R', chamber: 'House', district: 12, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/B/B001257.jpg' },
  { bioguideId: 'L000596', name: 'Anna Paulina Luna',            party: 'R', chamber: 'House', district: 13, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000596.jpg' },
  { bioguideId: 'C001066', name: 'Kathy Castor',                 party: 'D', chamber: 'House', district: 14, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001066.jpg' },
  { bioguideId: 'L000597', name: 'Laurel Lee',                   party: 'R', chamber: 'House', district: 15, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000597.jpg' },
  { bioguideId: 'B001260', name: 'Vern Buchanan',                party: 'R', chamber: 'House', district: 16, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/B/B001260.jpg' },
  { bioguideId: 'S001214', name: 'Greg Steube',                  party: 'R', chamber: 'House', district: 17, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001214.jpg' },
  { bioguideId: 'F000472', name: 'Scott Franklin',               party: 'R', chamber: 'House', district: 18, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000472.jpg' },
  { bioguideId: 'D000032', name: 'Byron Donalds',                party: 'R', chamber: 'House', district: 19, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/D/D000032.jpg' },
  { bioguideId: 'C001127', name: 'Sheila Cherfilus-McCormick',   party: 'D', chamber: 'House', district: 20, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001127.jpg' },
  { bioguideId: 'M001199', name: 'Brian Mast',                   party: 'R', chamber: 'House', district: 21, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001199.jpg' },
  { bioguideId: 'F000462', name: 'Lois Frankel',                 party: 'D', chamber: 'House', district: 22, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000462.jpg' },
  { bioguideId: 'M001217', name: 'Jared Moskowitz',              party: 'D', chamber: 'House', district: 23, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001217.jpg' },
  { bioguideId: 'W000808', name: 'Frederica Wilson',             party: 'D', chamber: 'House', district: 24, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000808.jpg' },
  { bioguideId: 'W000797', name: 'Debbie Wasserman Schultz',     party: 'D', chamber: 'House', district: 25, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000797.jpg' },
  { bioguideId: 'D000600', name: 'Mario Diaz-Balart',            party: 'R', chamber: 'House', district: 26, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/D/D000600.jpg' },
  { bioguideId: 'S000168', name: 'Maria Salazar',                party: 'R', chamber: 'House', district: 27, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S000168.jpg' },
  { bioguideId: 'G000593', name: 'Carlos Gimenez',               party: 'R', chamber: 'House', district: 28, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000593.jpg' },
]

export const flSenators: StateMember[] = flMembers.filter(m => m.chamber === 'Senate')

export const flMembersByDistrict: Record<number, StateMember> = Object.fromEntries(
  flMembers.filter(m => m.chamber === 'House').map(m => [m.district!, m])
)

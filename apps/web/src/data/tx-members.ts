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
export const txMembers: StateMember[] = [
  // ── Senators ──────────────────────────────────────────────────────────────
  { bioguideId: 'C001056', name: 'John Cornyn',     party: 'R', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001056.jpg' },
  { bioguideId: 'C001098', name: 'Ted Cruz',        party: 'R', chamber: 'Senate', photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001098.jpg' },

  // ── House ─────────────────────────────────────────────────────────────────
  { bioguideId: 'M001224', name: 'Nathaniel Moran',       party: 'R', chamber: 'House', district: 1,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001224.jpg' },
  { bioguideId: 'C001120', name: 'Dan Crenshaw',          party: 'R', chamber: 'House', district: 2,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001120.jpg' },
  { bioguideId: 'S001224', name: 'Keith Self',            party: 'R', chamber: 'House', district: 3,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S001224.jpg' },
  { bioguideId: 'F000246', name: 'Pat Fallon',            party: 'R', chamber: 'House', district: 4,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000246.jpg' },
  { bioguideId: 'G000589', name: 'Lance Gooden',          party: 'R', chamber: 'House', district: 5,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000589.jpg' },
  { bioguideId: 'E000071', name: 'Jake Ellzey',           party: 'R', chamber: 'House', district: 6,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/E/E000071.jpg' },
  { bioguideId: 'F000468', name: 'Lizzie Fletcher',       party: 'D', chamber: 'House', district: 7,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/F/F000468.jpg' },
  { bioguideId: 'L000603', name: 'Morgan Luttrell',       party: 'R', chamber: 'House', district: 8,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/L/L000603.jpg' },
  { bioguideId: 'G000553', name: 'Al Green',              party: 'D', chamber: 'House', district: 9,  photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000553.jpg' },
  { bioguideId: 'M001157', name: 'Michael McCaul',        party: 'R', chamber: 'House', district: 10, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001157.jpg' },
  { bioguideId: 'P000048', name: 'August Pfluger',        party: 'R', chamber: 'House', district: 11, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/P/P000048.jpg' },
  { bioguideId: 'G000601', name: 'Craig Goldman',         party: 'R', chamber: 'House', district: 12, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000601.jpg' },
  { bioguideId: 'J000304', name: 'Ronny Jackson',         party: 'R', chamber: 'House', district: 13, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/J/J000304.jpg' },
  { bioguideId: 'W000814', name: 'Randy Weber',           party: 'R', chamber: 'House', district: 14, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000814.jpg' },
  { bioguideId: 'D000594', name: 'Monica De La Cruz',     party: 'R', chamber: 'House', district: 15, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/D/D000594.jpg' },
  { bioguideId: 'E000299', name: 'Veronica Escobar',      party: 'D', chamber: 'House', district: 16, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/E/E000299.jpg' },
  { bioguideId: 'S000250', name: 'Pete Sessions',         party: 'R', chamber: 'House', district: 17, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/S/S000250.jpg' },
  { bioguideId: 'M001245', name: 'Christian Menefee',     party: 'D', chamber: 'House', district: 18, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/M/M001245.jpg' },
  { bioguideId: 'A000375', name: 'Jodey Arrington',       party: 'R', chamber: 'House', district: 19, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/A/A000375.jpg' },
  { bioguideId: 'C001091', name: 'Joaquin Castro',        party: 'D', chamber: 'House', district: 20, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001091.jpg' },
  { bioguideId: 'R000614', name: 'Chip Roy',              party: 'R', chamber: 'House', district: 21, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/R/R000614.jpg' },
  { bioguideId: 'N000026', name: 'Troy Nehls',            party: 'R', chamber: 'House', district: 22, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/N/N000026.jpg' },
  { bioguideId: 'V000134', name: 'Beth Van Duyne',        party: 'R', chamber: 'House', district: 24, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/V/V000134.jpg' },
  { bioguideId: 'W000816', name: 'Roger Williams',        party: 'R', chamber: 'House', district: 25, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/W/W000816.jpg' },
  { bioguideId: 'G000603', name: 'Brandon Gill',          party: 'R', chamber: 'House', district: 26, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000603.jpg' },
  { bioguideId: 'C001115', name: 'Michael Cloud',         party: 'R', chamber: 'House', district: 27, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001115.jpg' },
  { bioguideId: 'C001063', name: 'Henry Cuellar',         party: 'D', chamber: 'House', district: 28, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001063.jpg' },
  { bioguideId: 'G000587', name: 'Sylvia Garcia',         party: 'D', chamber: 'House', district: 29, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000587.jpg' },
  { bioguideId: 'C001130', name: 'Jasmine Crockett',      party: 'D', chamber: 'House', district: 30, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001130.jpg' },
  { bioguideId: 'C001051', name: 'John Carter',           party: 'R', chamber: 'House', district: 31, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001051.jpg' },
  { bioguideId: 'J000310', name: 'Julie Johnson',         party: 'D', chamber: 'House', district: 32, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/J/J000310.jpg' },
  { bioguideId: 'V000131', name: 'Marc Veasey',           party: 'D', chamber: 'House', district: 33, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/V/V000131.jpg' },
  { bioguideId: 'G000581', name: 'Vicente Gonzalez',      party: 'D', chamber: 'House', district: 34, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/G/G000581.jpg' },
  { bioguideId: 'C001131', name: 'Greg Casar',            party: 'D', chamber: 'House', district: 35, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/C/C001131.jpg' },
  { bioguideId: 'B001291', name: 'Brian Babin',           party: 'R', chamber: 'House', district: 36, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/B/B001291.jpg' },
  { bioguideId: 'D000399', name: 'Lloyd Doggett',         party: 'D', chamber: 'House', district: 37, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/D/D000399.jpg' },
  { bioguideId: 'H001095', name: 'Wesley Hunt',           party: 'R', chamber: 'House', district: 38, photoUrl: 'https://bioguide.congress.gov/bioguide/photo/H/H001095.jpg' },
]

export const txSenators: StateMember[] = txMembers.filter(m => m.chamber === 'Senate')

export const txMembersByDistrict: Record<number, StateMember> = Object.fromEntries(
  txMembers.filter(m => m.chamber === 'House').map(m => [m.district!, m])
)

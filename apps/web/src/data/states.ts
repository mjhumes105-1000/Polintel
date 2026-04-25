export interface GovernorInfo {
  name: string
  party: 'D' | 'R' | 'I'
  since: string
  profileSlug?: string
}

export interface StateInfo {
  name: string
  abbr: string
  houseSeats: number
  nextGovElection: string
  governor?: GovernorInfo
  note?: string
}

export const stateData: Record<string, StateInfo> = {
  Alabama:        { name: 'Alabama',        abbr: 'AL', houseSeats: 7,  nextGovElection: '2026', governor: { name: 'Kay Ivey',                  party: 'R', since: '2017' } },
  Alaska:         { name: 'Alaska',         abbr: 'AK', houseSeats: 1,  nextGovElection: '2026', governor: { name: 'Mike Dunleavy',             party: 'R', since: '2018' } },
  Arizona:        { name: 'Arizona',        abbr: 'AZ', houseSeats: 9,  nextGovElection: '2026', governor: { name: 'Katie Hobbs',               party: 'D', since: '2023' } },
  Arkansas:       { name: 'Arkansas',       abbr: 'AR', houseSeats: 4,  nextGovElection: '2026', governor: { name: 'Sarah Huckabee Sanders',    party: 'R', since: '2023' } },
  California:     { name: 'California',     abbr: 'CA', houseSeats: 52, nextGovElection: '2026', governor: { name: 'Gavin Newsom',              party: 'D', since: '2019', profileSlug: 'gavin-newsom' } },
  Colorado:       { name: 'Colorado',       abbr: 'CO', houseSeats: 8,  nextGovElection: '2026', governor: { name: 'Jared Polis',               party: 'D', since: '2019' } },
  Connecticut:    { name: 'Connecticut',    abbr: 'CT', houseSeats: 5,  nextGovElection: '2026', governor: { name: 'Ned Lamont',                party: 'D', since: '2019' } },
  Delaware:       { name: 'Delaware',       abbr: 'DE', houseSeats: 1,  nextGovElection: '2028', governor: { name: 'Matt Meyer',                party: 'D', since: '2025' } },
  Florida:        { name: 'Florida',        abbr: 'FL', houseSeats: 28, nextGovElection: '2026', governor: { name: 'Ron DeSantis',              party: 'R', since: '2019' } },
  Georgia:        { name: 'Georgia',        abbr: 'GA', houseSeats: 14, nextGovElection: '2026', governor: { name: 'Brian Kemp',                party: 'R', since: '2019' } },
  Hawaii:         { name: 'Hawaii',         abbr: 'HI', houseSeats: 2,  nextGovElection: '2026', governor: { name: 'Josh Green',                party: 'D', since: '2023' } },
  Idaho:          { name: 'Idaho',          abbr: 'ID', houseSeats: 2,  nextGovElection: '2026', governor: { name: 'Brad Little',               party: 'R', since: '2019' } },
  Illinois:       { name: 'Illinois',       abbr: 'IL', houseSeats: 17, nextGovElection: '2026', governor: { name: 'JB Pritzker',               party: 'D', since: '2019' } },
  Indiana:        { name: 'Indiana',        abbr: 'IN', houseSeats: 9,  nextGovElection: '2028', governor: { name: 'Mike Braun',                party: 'R', since: '2025' } },
  Iowa:           { name: 'Iowa',           abbr: 'IA', houseSeats: 4,  nextGovElection: '2026', governor: { name: 'Kim Reynolds',              party: 'R', since: '2017' } },
  Kansas:         { name: 'Kansas',         abbr: 'KS', houseSeats: 4,  nextGovElection: '2026', governor: { name: 'Laura Kelly',               party: 'D', since: '2019' } },
  Kentucky:       { name: 'Kentucky',       abbr: 'KY', houseSeats: 6,  nextGovElection: '2027', governor: { name: 'Andy Beshear',              party: 'D', since: '2019' } },
  Louisiana:      { name: 'Louisiana',      abbr: 'LA', houseSeats: 6,  nextGovElection: '2027', governor: { name: 'Jeff Landry',               party: 'R', since: '2024' } },
  Maine:          { name: 'Maine',          abbr: 'ME', houseSeats: 2,  nextGovElection: '2026', governor: { name: 'Janet Mills',               party: 'D', since: '2019' } },
  Maryland:       { name: 'Maryland',       abbr: 'MD', houseSeats: 8,  nextGovElection: '2026', governor: { name: 'Wes Moore',                 party: 'D', since: '2023' } },
  Massachusetts:  { name: 'Massachusetts',  abbr: 'MA', houseSeats: 9,  nextGovElection: '2026', governor: { name: 'Maura Healey',              party: 'D', since: '2023' } },
  Michigan:       { name: 'Michigan',       abbr: 'MI', houseSeats: 13, nextGovElection: '2026', governor: { name: 'Gretchen Whitmer',          party: 'D', since: '2019' } },
  Minnesota:      { name: 'Minnesota',      abbr: 'MN', houseSeats: 8,  nextGovElection: '2026', governor: { name: 'Tim Walz',                  party: 'D', since: '2019' } },
  Mississippi:    { name: 'Mississippi',    abbr: 'MS', houseSeats: 4,  nextGovElection: '2027', governor: { name: 'Tate Reeves',               party: 'R', since: '2020' } },
  Missouri:       { name: 'Missouri',       abbr: 'MO', houseSeats: 8,  nextGovElection: '2028', governor: { name: 'Mike Kehoe',                party: 'R', since: '2025' } },
  Montana:        { name: 'Montana',        abbr: 'MT', houseSeats: 2,  nextGovElection: '2028', governor: { name: 'Greg Gianforte',            party: 'R', since: '2021' } },
  Nebraska:       { name: 'Nebraska',       abbr: 'NE', houseSeats: 3,  nextGovElection: '2026', governor: { name: 'Jim Pillen',                party: 'R', since: '2023' } },
  Nevada:         { name: 'Nevada',         abbr: 'NV', houseSeats: 4,  nextGovElection: '2026', governor: { name: 'Joe Lombardo',              party: 'R', since: '2023' } },
  'New Hampshire':{ name: 'New Hampshire',  abbr: 'NH', houseSeats: 2,  nextGovElection: '2026', governor: { name: 'Kelly Ayotte',              party: 'R', since: '2025' } },
  'New Jersey':   { name: 'New Jersey',     abbr: 'NJ', houseSeats: 12, nextGovElection: '2029', governor: { name: 'Mikie Sherrill',              party: 'D', since: '2026' } },
  'New Mexico':   { name: 'New Mexico',     abbr: 'NM', houseSeats: 3,  nextGovElection: '2026', governor: { name: 'Michelle Lujan Grisham',   party: 'D', since: '2019' } },
  'New York':     { name: 'New York',       abbr: 'NY', houseSeats: 26, nextGovElection: '2026', governor: { name: 'Kathy Hochul',              party: 'D', since: '2021' } },
  'North Carolina':{ name: 'North Carolina',abbr: 'NC', houseSeats: 14, nextGovElection: '2028', governor: { name: 'Josh Stein',               party: 'D', since: '2025' } },
  'North Dakota': { name: 'North Dakota',   abbr: 'ND', houseSeats: 1,  nextGovElection: '2028', note: 'Governor data being updated following 2024 transition.' },
  Ohio:           { name: 'Ohio',           abbr: 'OH', houseSeats: 15, nextGovElection: '2026', governor: { name: 'Mike DeWine',               party: 'R', since: '2019' } },
  Oklahoma:       { name: 'Oklahoma',       abbr: 'OK', houseSeats: 5,  nextGovElection: '2026', governor: { name: 'Kevin Stitt',               party: 'R', since: '2019' } },
  Oregon:         { name: 'Oregon',         abbr: 'OR', houseSeats: 6,  nextGovElection: '2026', governor: { name: 'Tina Kotek',                party: 'D', since: '2023' } },
  Pennsylvania:   { name: 'Pennsylvania',   abbr: 'PA', houseSeats: 17, nextGovElection: '2026', governor: { name: 'Josh Shapiro',              party: 'D', since: '2023' } },
  'Rhode Island': { name: 'Rhode Island',   abbr: 'RI', houseSeats: 2,  nextGovElection: '2026', governor: { name: 'Dan McKee',                party: 'D', since: '2021' } },
  'South Carolina':{ name: 'South Carolina',abbr: 'SC', houseSeats: 7,  nextGovElection: '2026', governor: { name: 'Henry McMaster',            party: 'R', since: '2017' } },
  'South Dakota': { name: 'South Dakota',   abbr: 'SD', houseSeats: 1,  nextGovElection: '2026', note: 'Governor data being updated following 2024 transition.' },
  Tennessee:      { name: 'Tennessee',      abbr: 'TN', houseSeats: 9,  nextGovElection: '2026', governor: { name: 'Bill Lee',                  party: 'R', since: '2019' } },
  Texas:          { name: 'Texas',          abbr: 'TX', houseSeats: 38, nextGovElection: '2026', governor: { name: 'Greg Abbott',               party: 'R', since: '2015' } },
  Utah:           { name: 'Utah',           abbr: 'UT', houseSeats: 4,  nextGovElection: '2028', governor: { name: 'Spencer Cox',               party: 'R', since: '2021' } },
  Vermont:        { name: 'Vermont',        abbr: 'VT', houseSeats: 1,  nextGovElection: '2026', governor: { name: 'Phil Scott',                party: 'R', since: '2017' } },
  Virginia:       { name: 'Virginia',       abbr: 'VA', houseSeats: 11, nextGovElection: '2025', note: 'Governor data being updated following 2025 election.' },
  Washington:     { name: 'Washington',     abbr: 'WA', houseSeats: 10, nextGovElection: '2028', governor: { name: 'Bob Ferguson',              party: 'D', since: '2025' } },
  'West Virginia':{ name: 'West Virginia',  abbr: 'WV', houseSeats: 2,  nextGovElection: '2028', governor: { name: 'Patrick Morrisey',          party: 'R', since: '2025' } },
  Wisconsin:      { name: 'Wisconsin',      abbr: 'WI', houseSeats: 8,  nextGovElection: '2026', governor: { name: 'Tony Evers',                party: 'D', since: '2019' } },
  Wyoming:        { name: 'Wyoming',        abbr: 'WY', houseSeats: 1,  nextGovElection: '2026', governor: { name: 'Mark Gordon',               party: 'R', since: '2019' } },
}

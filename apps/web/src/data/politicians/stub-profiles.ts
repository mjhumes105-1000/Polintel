import type { PoliticianProfile } from '@political-intel/types'

function stubSource(id: string, label: string, url: string, publisher: string) {
  return { id, label, url, publisher, retrievedAt: '2026-04-28', type: 'official-government' as const }
}

function stubRecord(): PoliticianProfile['recordAssessment'] {
  return { generatedAt: '2026-04-28', whatTheRecordShows: [], whatWeObserve: [], whatIsUnresolved: [] }
}

export const stubProfileSlugs = new Set([
  // Former presidents / major national figures
  'donald-trump',
  'joe-biden',
  'kamala-harris',
  'barack-obama',
  // 2028 presidential field — Republicans
  'ron-desantis',
  'jd-vance',
  'marco-rubio',
  'glenn-youngkin',
  'nikki-haley',
  'brian-kemp',
  // 2028 presidential field — Democrats (gavin-newsom has a full profile, not listed here)
  'gretchen-whitmer',
  'josh-shapiro',
  'jb-pritzker',
  'andy-beshear',
  'wes-moore',
  'pete-buttigieg',
  // Territorial delegates
  'eleanor-holmes-norton',
  'pablo-hernandez-rivera',
  'james-moylan',
  'stacey-plaskett',
  'amata-radewagen',
  'gregorio-sablan',
])

// ── Former Presidents / Vice Presidents ────────────────────────────────────────

const donaldTrump: PoliticianProfile = {
  id: 'donald-trump',
  slug: 'donald-trump',
  name: 'Donald Trump',
  currentTitle: '47th President of the United States',
  state: 'National',
  bio: 'Donald Trump is the 47th President of the United States, having previously served as the 45th President from 2017 to 2021. He is a member of the Republican Party and the first U.S. president to serve non-consecutive terms since Grover Cleveland.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/330px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg',
  contact: {
    website: 'https://www.whitehouse.gov',
  },
  social: {
    truthsocial: 'realDonaldTrump',
    twitter: 'realDonaldTrump',
    instagram: 'realdonaldtrump',
    facebook: 'DonaldTrump',
    youtube: '@DonaldTrump',
  },
  sources: [stubSource('whitehouse-trump', 'The White House — President Donald J. Trump', 'https://www.whitehouse.gov', 'The White House')],
  baselineCard: {
    currentOffice: { title: '47th President of the United States', jurisdiction: 'Federal', startDate: '2025-01-20' },
    previousOffices: [{ title: '45th President of the United States', jurisdiction: 'Federal', startDate: '2017-01-20', endDate: '2021-01-20' }],
    party: 'Republican',
    yearsInPublicService: 8,
    sourceIds: ['whitehouse-trump'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const joeBiden: PoliticianProfile = {
  id: 'joe-biden',
  slug: 'joe-biden',
  name: 'Joe Biden',
  currentTitle: 'Former President of the United States',
  state: 'Delaware',
  bio: 'Joe Biden served as the 46th President of the United States from January 2021 to January 2025, and as the 47th Vice President under President Barack Obama from 2009 to 2017. He previously served as a U.S. Senator from Delaware for 36 years.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg',
  sources: [stubSource('whitehouse-biden', 'The White House — President Biden Archives', 'https://bidenwhitehouse.archives.gov', 'National Archives')],
  baselineCard: {
    currentOffice: { title: 'Former President of the United States', jurisdiction: 'Federal', startDate: '2025-01-20' },
    previousOffices: [
      { title: '46th President of the United States', jurisdiction: 'Federal', startDate: '2021-01-20', endDate: '2025-01-20' },
      { title: '47th Vice President of the United States', jurisdiction: 'Federal', startDate: '2009-01-20', endDate: '2017-01-20' },
      { title: 'U.S. Senator from Delaware', jurisdiction: 'Delaware', startDate: '1973-01-03', endDate: '2009-01-15' },
    ],
    party: 'Democratic',
    birthDate: '1942-11-20',
    yearsInPublicService: 52,
    sourceIds: ['whitehouse-biden'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const kamalaHarris: PoliticianProfile = {
  id: 'kamala-harris',
  slug: 'kamala-harris',
  name: 'Kamala Harris',
  currentTitle: 'Former Vice President of the United States',
  state: 'California',
  bio: 'Kamala Harris served as the 49th Vice President of the United States from January 2021 to January 2025, the first woman, first Black American, and first person of South Asian descent to hold the office. She previously served as U.S. Senator from California and as California Attorney General.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/440px-Kamala_Harris_Vice_Presidential_Portrait.jpg',
  sources: [stubSource('whitehouse-harris', 'The White House — Vice President Harris Archives', 'https://bidenwhitehouse.archives.gov/the-administration/vice-president-harris/', 'National Archives')],
  baselineCard: {
    currentOffice: { title: 'Former Vice President of the United States', jurisdiction: 'Federal', startDate: '2025-01-20' },
    previousOffices: [
      { title: '49th Vice President of the United States', jurisdiction: 'Federal', startDate: '2021-01-20', endDate: '2025-01-20' },
      { title: 'U.S. Senator from California', jurisdiction: 'California', startDate: '2017-01-03', endDate: '2021-01-18' },
      { title: 'Attorney General of California', jurisdiction: 'California', startDate: '2011-01-03', endDate: '2017-01-03' },
    ],
    party: 'Democratic',
    birthDate: '1964-10-20',
    yearsInPublicService: 20,
    sourceIds: ['whitehouse-harris'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const barackObama: PoliticianProfile = {
  id: 'barack-obama',
  slug: 'barack-obama',
  name: 'Barack Obama',
  currentTitle: 'Former President of the United States',
  state: 'Illinois',
  bio: 'Barack Obama served as the 44th President of the United States from 2009 to 2017, the first African American to hold the office. He previously served as a U.S. Senator from Illinois and as an Illinois State Senator.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg',
  sources: [stubSource('obama-archives', 'Obama White House Archives', 'https://obamawhitehouse.archives.gov', 'National Archives')],
  baselineCard: {
    currentOffice: { title: 'Former President of the United States', jurisdiction: 'Federal', startDate: '2017-01-20' },
    previousOffices: [
      { title: '44th President of the United States', jurisdiction: 'Federal', startDate: '2009-01-20', endDate: '2017-01-20' },
      { title: 'U.S. Senator from Illinois', jurisdiction: 'Illinois', startDate: '2005-01-03', endDate: '2008-11-16' },
    ],
    party: 'Democratic',
    birthDate: '1961-08-04',
    yearsInPublicService: 20,
    sourceIds: ['obama-archives'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

// ── 2028 Republicans ───────────────────────────────────────────────────────────

const ronDeSantis: PoliticianProfile = {
  id: 'ron-desantis',
  slug: 'ron-desantis',
  name: 'Ron DeSantis',
  currentTitle: 'Governor of Florida',
  state: 'Florida',
  bio: 'Ron DeSantis has served as Governor of Florida since January 2019 and was re-elected in 2022 by 19 points. He previously represented Florida\'s 6th congressional district in the U.S. House from 2013 to 2018. He ran in the 2024 Republican presidential primary before suspending his campaign.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ron_DeSantis_official_portrait_%28cropped%29.jpg/440px-Ron_DeSantis_official_portrait_%28cropped%29.jpg',
  sources: [stubSource('desantis-fl', 'Office of the Governor — State of Florida', 'https://www.flgov.com', 'Office of the Governor, State of Florida')],
  baselineCard: {
    currentOffice: { title: 'Governor of Florida', jurisdiction: 'Florida', startDate: '2019-01-08' },
    previousOffices: [
      { title: 'U.S. Representative, FL-6', jurisdiction: 'Florida', startDate: '2013-01-03', endDate: '2018-09-26' },
    ],
    party: 'Republican',
    birthDate: '1978-09-14',
    yearsInPublicService: 13,
    sourceIds: ['desantis-fl'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const jdVance: PoliticianProfile = {
  id: 'jd-vance',
  slug: 'jd-vance',
  name: 'JD Vance',
  currentTitle: '50th Vice President of the United States',
  state: 'Ohio',
  bio: 'JD Vance is the 50th Vice President of the United States, inaugurated in January 2025. He previously served as U.S. Senator from Ohio (2023–2025), elected on a populist economic platform. He is the author of Hillbilly Elegy and a leading figure in the nationalist wing of the Republican Party.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance.jpg/330px-March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance.jpg',
  contact: {
    website: 'https://www.whitehouse.gov/administration/vice-president/',
  },
  social: {
    twitter: 'JDVance',
    instagram: 'jd_vance1',
    facebook: 'JDVanceOhio',
  },
  sources: [stubSource('whitehouse-vance', 'The White House — Vice President JD Vance', 'https://www.whitehouse.gov/administration/vice-president/', 'The White House')],
  baselineCard: {
    currentOffice: { title: '50th Vice President of the United States', jurisdiction: 'Federal', startDate: '2025-01-20' },
    previousOffices: [
      { title: 'U.S. Senator from Ohio', jurisdiction: 'Ohio', startDate: '2023-01-03', endDate: '2025-01-19' },
    ],
    party: 'Republican',
    birthDate: '1984-08-02',
    yearsInPublicService: 4,
    sourceIds: ['whitehouse-vance'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const marcoRubio: PoliticianProfile = {
  id: 'marco-rubio',
  slug: 'marco-rubio',
  name: 'Marco Rubio',
  currentTitle: 'U.S. Secretary of State',
  state: 'Florida',
  bio: 'Marco Rubio is the 72nd U.S. Secretary of State, confirmed in January 2025. He previously served as U.S. Senator from Florida from 2011 to 2025 and was a candidate in the 2016 Republican presidential primary. He is a senior member of the Senate Intelligence Committee and Senate Foreign Relations Committee.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Marco_Rubio_official_Senate_photo.jpg/440px-Marco_Rubio_official_Senate_photo.jpg',
  sources: [stubSource('state-rubio', 'U.S. Department of State — Secretary Marco Rubio', 'https://www.state.gov', 'U.S. Department of State')],
  baselineCard: {
    currentOffice: { title: 'U.S. Secretary of State', jurisdiction: 'Federal', startDate: '2025-01-21' },
    previousOffices: [
      { title: 'U.S. Senator from Florida', jurisdiction: 'Florida', startDate: '2011-01-05', endDate: '2025-01-20' },
    ],
    party: 'Republican',
    birthDate: '1971-05-28',
    yearsInPublicService: 16,
    sourceIds: ['state-rubio'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const nikkiHaley: PoliticianProfile = {
  id: 'nikki-haley',
  slug: 'nikki-haley',
  name: 'Nikki Haley',
  currentTitle: 'Former U.S. Ambassador to the United Nations',
  state: 'South Carolina',
  bio: 'Nikki Haley served as U.S. Ambassador to the United Nations from 2017 to 2018 and as Governor of South Carolina from 2011 to 2017. She ran in the 2024 Republican presidential primary, outlasting all other Trump challengers before suspending her campaign in March 2024.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nikki_Haley_official_photo_%282017%29.jpg/440px-Nikki_Haley_official_photo_%282017%29.jpg',
  sources: [stubSource('haley-bio', 'Nikki Haley — Official Biography', 'https://nikkihaley.com', 'NikkiHaley.com')],
  baselineCard: {
    currentOffice: { title: 'Private Citizen / Political Figure', jurisdiction: 'National', startDate: '2024-03-06' },
    previousOffices: [
      { title: 'U.S. Ambassador to the United Nations', jurisdiction: 'Federal', startDate: '2017-01-27', endDate: '2018-12-31' },
      { title: 'Governor of South Carolina', jurisdiction: 'South Carolina', startDate: '2011-01-12', endDate: '2017-01-24' },
    ],
    party: 'Republican',
    birthDate: '1972-01-20',
    yearsInPublicService: 14,
    sourceIds: ['haley-bio'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const glennYoungkin: PoliticianProfile = {
  id: 'glenn-youngkin',
  slug: 'glenn-youngkin',
  name: 'Glenn Youngkin',
  currentTitle: 'Former Governor of Virginia',
  state: 'Virginia',
  bio: 'Glenn Youngkin served as Governor of Virginia from 2022 to 2026, winning a closely-watched election in 2021 that was seen as a bellwether for Republican electoral strategy in competitive suburban districts. He is a former private equity executive and co-CEO of The Carlyle Group.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Glenn_Youngkin_official_photo.jpg/440px-Glenn_Youngkin_official_photo.jpg',
  sources: [stubSource('youngkin-va', 'Office of the Governor of Virginia', 'https://www.governor.virginia.gov', 'Commonwealth of Virginia')],
  baselineCard: {
    currentOffice: { title: 'Former Governor of Virginia', jurisdiction: 'Virginia', startDate: '2026-01-15' },
    previousOffices: [
      { title: 'Governor of Virginia', jurisdiction: 'Virginia', startDate: '2022-01-15', endDate: '2026-01-15' },
    ],
    party: 'Republican',
    birthDate: '1966-12-09',
    yearsInPublicService: 4,
    sourceIds: ['youngkin-va'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const brianKemp: PoliticianProfile = {
  id: 'brian-kemp',
  slug: 'brian-kemp',
  name: 'Brian Kemp',
  currentTitle: 'Former Governor of Georgia',
  state: 'Georgia',
  bio: 'Brian Kemp served as Governor of Georgia from 2019 to 2027, winning re-election in 2022 despite opposition from former President Trump. He is known for his refusal to overturn Georgia\'s 2020 presidential election results, drawing sustained criticism from Trump and primary challenges that he defeated decisively.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Brian_Kemp_official_portrait.jpg/440px-Brian_Kemp_official_portrait.jpg',
  sources: [stubSource('kemp-ga', 'Office of the Governor of Georgia', 'https://gov.georgia.gov', 'State of Georgia')],
  baselineCard: {
    currentOffice: { title: 'Former Governor of Georgia', jurisdiction: 'Georgia', startDate: '2027-01-13' },
    previousOffices: [
      { title: 'Governor of Georgia', jurisdiction: 'Georgia', startDate: '2019-01-14', endDate: '2027-01-13' },
      { title: 'Georgia Secretary of State', jurisdiction: 'Georgia', startDate: '2010-11-08', endDate: '2019-01-14' },
    ],
    party: 'Republican',
    birthDate: '1963-11-02',
    yearsInPublicService: 17,
    sourceIds: ['kemp-ga'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

// ── 2028 Democrats ─────────────────────────────────────────────────────────────
// Note: gavin-newsom has a full profile in gavin-newsom.ts — no stub needed

const gretchenWhitmer: PoliticianProfile = {
  id: 'gretchen-whitmer',
  slug: 'gretchen-whitmer',
  name: 'Gretchen Whitmer',
  currentTitle: 'Governor of Michigan',
  state: 'Michigan',
  bio: 'Gretchen Whitmer has served as Governor of Michigan since January 2019 and was re-elected in 2022 by more than 10 points in a critical swing state. She previously served as a state senator and minority leader. She gained national prominence during the COVID-19 pandemic and has since become a leading figure in the Democratic Party.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gretchen_Whitmer_official_portrait_%28cropped%29.jpg/440px-Gretchen_Whitmer_official_portrait_%28cropped%29.jpg',
  sources: [stubSource('whitmer-mi', 'Office of the Governor of Michigan', 'https://www.michigan.gov/whitmer', 'State of Michigan')],
  baselineCard: {
    currentOffice: { title: 'Governor of Michigan', jurisdiction: 'Michigan', startDate: '2019-01-01' },
    previousOffices: [
      { title: 'Michigan Senate Minority Leader', jurisdiction: 'Michigan', startDate: '2011-01-01', endDate: '2015-01-01' },
    ],
    party: 'Democratic',
    birthDate: '1971-08-23',
    yearsInPublicService: 20,
    sourceIds: ['whitmer-mi'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const joshShapiro: PoliticianProfile = {
  id: 'josh-shapiro',
  slug: 'josh-shapiro',
  name: 'Josh Shapiro',
  currentTitle: 'Governor of Pennsylvania',
  state: 'Pennsylvania',
  bio: 'Josh Shapiro has served as Governor of Pennsylvania since January 2023, winning the 2022 race in the nation\'s largest swing state by 14 points. He previously served as Pennsylvania Attorney General from 2017 to 2023 and as a state representative. He is widely regarded as one of the Democratic Party\'s most promising national figures.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Josh_Shapiro_official_portrait.jpg/440px-Josh_Shapiro_official_portrait.jpg',
  sources: [stubSource('shapiro-pa', 'Office of the Governor of Pennsylvania', 'https://www.governor.pa.gov', 'Commonwealth of Pennsylvania')],
  baselineCard: {
    currentOffice: { title: 'Governor of Pennsylvania', jurisdiction: 'Pennsylvania', startDate: '2023-01-17' },
    previousOffices: [
      { title: 'Attorney General of Pennsylvania', jurisdiction: 'Pennsylvania', startDate: '2017-01-17', endDate: '2023-01-17' },
    ],
    party: 'Democratic',
    birthDate: '1973-06-23',
    yearsInPublicService: 15,
    sourceIds: ['shapiro-pa'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const jbPritzker: PoliticianProfile = {
  id: 'jb-pritzker',
  slug: 'jb-pritzker',
  name: 'J.B. Pritzker',
  currentTitle: 'Governor of Illinois',
  state: 'Illinois',
  bio: 'J.B. Pritzker has served as Governor of Illinois since January 2019 and was re-elected in 2022 by 12 points. He is a billionaire heir to the Hyatt hotel fortune and a major Democratic donor. He has been a leading voice on abortion rights and LGBTQ+ protections and a persistent critic of the Trump administration.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/JB_Pritzker_official_portrait.jpg/440px-JB_Pritzker_official_portrait.jpg',
  sources: [stubSource('pritzker-il', 'Office of the Governor of Illinois', 'https://gov.illinois.gov', 'State of Illinois')],
  baselineCard: {
    currentOffice: { title: 'Governor of Illinois', jurisdiction: 'Illinois', startDate: '2019-01-14' },
    previousOffices: [],
    party: 'Democratic',
    birthDate: '1965-01-19',
    yearsInPublicService: 7,
    sourceIds: ['pritzker-il'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const andyBeshear: PoliticianProfile = {
  id: 'andy-beshear',
  slug: 'andy-beshear',
  name: 'Andy Beshear',
  currentTitle: 'Governor of Kentucky',
  state: 'Kentucky',
  bio: 'Andy Beshear has served as Governor of Kentucky since December 2019 and was re-elected in 2023 in one of the nation\'s most Republican-leaning states, making his win one of the most closely watched off-year results in the country. His ability to win in Trump country has drawn national Democratic attention.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Andy_Beshear_official_portrait.jpg/440px-Andy_Beshear_official_portrait.jpg',
  sources: [stubSource('beshear-ky', 'Office of the Governor of Kentucky', 'https://governor.ky.gov', 'Commonwealth of Kentucky')],
  baselineCard: {
    currentOffice: { title: 'Governor of Kentucky', jurisdiction: 'Kentucky', startDate: '2019-12-10' },
    previousOffices: [
      { title: 'Attorney General of Kentucky', jurisdiction: 'Kentucky', startDate: '2016-01-04', endDate: '2019-12-10' },
    ],
    party: 'Democratic',
    birthDate: '1977-11-29',
    yearsInPublicService: 10,
    sourceIds: ['beshear-ky'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const wesMoore: PoliticianProfile = {
  id: 'wes-moore',
  slug: 'wes-moore',
  name: 'Wes Moore',
  currentTitle: 'Governor of Maryland',
  state: 'Maryland',
  bio: 'Wes Moore has served as Governor of Maryland since January 2023, becoming the state\'s first Black governor and only the third Black governor elected in U.S. history. He is a U.S. Army combat veteran, Rhodes Scholar, and bestselling author. His biography and policy record have made him one of the most discussed potential national candidates in the Democratic Party.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Wes_Moore_official_portrait.jpg/440px-Wes_Moore_official_portrait.jpg',
  sources: [stubSource('moore-md', 'Office of the Governor of Maryland', 'https://governor.maryland.gov', 'State of Maryland')],
  baselineCard: {
    currentOffice: { title: 'Governor of Maryland', jurisdiction: 'Maryland', startDate: '2023-01-18' },
    previousOffices: [],
    party: 'Democratic',
    birthDate: '1978-10-15',
    yearsInPublicService: 3,
    sourceIds: ['moore-md'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

const peteButtigieg: PoliticianProfile = {
  id: 'pete-buttigieg',
  slug: 'pete-buttigieg',
  name: 'Pete Buttigieg',
  currentTitle: 'Former U.S. Secretary of Transportation',
  state: 'Indiana',
  bio: 'Pete Buttigieg served as the 19th U.S. Secretary of Transportation from February 2021 to January 2025, overseeing the largest infrastructure investment in U.S. history under the Bipartisan Infrastructure Law. He previously ran in the 2020 Democratic presidential primary, winning the Iowa caucuses, and served as Mayor of South Bend, Indiana.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Pete_Buttigieg_official_portrait.jpg/440px-Pete_Buttigieg_official_portrait.jpg',
  sources: [stubSource('buttigieg-bio', 'Pete Buttigieg — Official Biography', 'https://www.peteforamerica.com', 'PeteForAmerica.com')],
  baselineCard: {
    currentOffice: { title: 'Former U.S. Secretary of Transportation', jurisdiction: 'Federal', startDate: '2025-01-20' },
    previousOffices: [
      { title: 'U.S. Secretary of Transportation', jurisdiction: 'Federal', startDate: '2021-02-03', endDate: '2025-01-20' },
      { title: 'Mayor of South Bend, Indiana', jurisdiction: 'Indiana', startDate: '2012-01-01', endDate: '2020-01-01' },
    ],
    party: 'Democratic',
    birthDate: '1982-01-19',
    yearsInPublicService: 13,
    sourceIds: ['buttigieg-bio'],
  },
  timeline: [],
  funding: [],
  recordAssessment: stubRecord(),
}

// ── U.S. Territorial Delegates (119th Congress) ───────────────────────────────

const eleanorHolmesNorton: PoliticianProfile = {
  id: 'eleanor-holmes-norton',
  slug: 'eleanor-holmes-norton',
  name: 'Eleanor Holmes Norton',
  currentTitle: 'Delegate for the District of Columbia',
  state: 'District of Columbia',
  bio: 'Eleanor Holmes Norton has served as the non-voting Delegate for the District of Columbia since 1991, making her one of the longest-serving members of the House. A civil rights lawyer and former chair of the Equal Employment Opportunity Commission under President Carter, she has been a persistent advocate for DC statehood and full voting representation in Congress.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Eleanor_Holmes_Norton_official_photo.jpg/330px-Eleanor_Holmes_Norton_official_photo.jpg',
  sources: [stubSource('norton-house', 'Rep. Eleanor Holmes Norton — U.S. House', 'https://norton.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Delegate for the District of Columbia', jurisdiction: 'District of Columbia', startDate: '1991-01-03' },
    party: 'Democratic',
    previousOffices: [],
    yearsInPublicService: 35,
    sourceIds: ['norton-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

const pabloHernandezRivera: PoliticianProfile = {
  id: 'pablo-hernandez-rivera',
  slug: 'pablo-hernandez-rivera',
  name: 'Pablo José Hernández Rivera',
  currentTitle: 'Resident Commissioner of Puerto Rico',
  state: 'Puerto Rico',
  bio: 'Pablo José Hernández Rivera has served as Resident Commissioner of Puerto Rico since January 2025, the only member of Congress who serves a four-year term rather than two. A member of the Popular Democratic Party, which favors enhanced commonwealth status over statehood, he is a lawyer and former municipal official who represents Puerto Rico\'s approximately 3.2 million U.S. citizens.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hern%C3%A1ndez_Rivera_Pablo_119th_Congress.jpg/330px-Hern%C3%A1ndez_Rivera_Pablo_119th_Congress.jpg',
  sources: [stubSource('hernandez-house', 'Resident Commissioner Pablo Hernández Rivera', 'https://hernandezrivera.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Resident Commissioner of Puerto Rico', jurisdiction: 'Puerto Rico', startDate: '2025-01-03' },
    party: 'Democratic',
    previousOffices: [],
    yearsInPublicService: 2,
    sourceIds: ['hernandez-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

const jamesMoylan: PoliticianProfile = {
  id: 'james-moylan',
  slug: 'james-moylan',
  name: 'James Moylan',
  currentTitle: 'Delegate for Guam',
  state: 'Guam',
  bio: 'James Moylan has served as the non-voting Delegate for Guam since January 2023, the first Republican to hold the seat in decades. A businessman and former member of the Guam Legislature, he has focused on military buildup issues, veterans affairs, and Guam\'s unique federal relationship. His election ended a long streak of Democratic representation for the island territory.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/James_Moylan%2C_official_portrait_%28119th_Congress%29.jpg/330px-James_Moylan%2C_official_portrait_%28119th_Congress%29.jpg',
  sources: [stubSource('moylan-house', 'Rep. James Moylan — U.S. House', 'https://moylan.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Delegate for Guam', jurisdiction: 'Guam', startDate: '2023-01-03' },
    party: 'Republican',
    previousOffices: [],
    yearsInPublicService: 3,
    sourceIds: ['moylan-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

const staceyPlaskett: PoliticianProfile = {
  id: 'stacey-plaskett',
  slug: 'stacey-plaskett',
  name: 'Stacey Plaskett',
  currentTitle: 'Delegate for the U.S. Virgin Islands',
  state: 'U.S. Virgin Islands',
  bio: 'Stacey Plaskett has served as the non-voting Delegate for the U.S. Virgin Islands since 2015. A former assistant district attorney and member of the House Budget and Agriculture committees, she gained national prominence as an impeachment manager during the second impeachment trial of President Trump in 2021. She is one of the most prominent territorial delegates in modern congressional history.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stacey_Plaskett_116th_Congress.jpg/330px-Stacey_Plaskett_116th_Congress.jpg',
  sources: [stubSource('plaskett-house', 'Rep. Stacey Plaskett — U.S. House', 'https://plaskett.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Delegate for the U.S. Virgin Islands', jurisdiction: 'U.S. Virgin Islands', startDate: '2015-01-03' },
    party: 'Democratic',
    previousOffices: [],
    yearsInPublicService: 11,
    sourceIds: ['plaskett-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

const amataRadewagen: PoliticianProfile = {
  id: 'amata-radewagen',
  slug: 'amata-radewagen',
  name: 'Amata Coleman Radewagen',
  currentTitle: 'Delegate for American Samoa',
  state: 'American Samoa',
  bio: 'Amata Coleman Radewagen has served as the non-voting Delegate for American Samoa since 2015 and is the first Samoan-American woman elected to Congress. A Republican, she has focused on issues unique to American Samoa including national park policy, federal recognition of traditional land rights, and the territory\'s longstanding debate over birthright citizenship for those born on the island.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aumua_Amata_Radewagen_congressional_photo.jpg/330px-Aumua_Amata_Radewagen_congressional_photo.jpg',
  sources: [stubSource('radewagen-house', 'Rep. Amata Coleman Radewagen — U.S. House', 'https://radewagen.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Delegate for American Samoa', jurisdiction: 'American Samoa', startDate: '2015-01-03' },
    party: 'Republican',
    previousOffices: [],
    yearsInPublicService: 11,
    sourceIds: ['radewagen-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

const gregorioSablan: PoliticianProfile = {
  id: 'gregorio-sablan',
  slug: 'gregorio-sablan',
  name: 'Gregorio Sablan',
  currentTitle: 'Delegate for Northern Mariana Islands',
  state: 'Northern Mariana Islands',
  bio: 'Gregorio "Kilili" Sablan has served as the non-voting Delegate for the Commonwealth of the Northern Mariana Islands since 2009, the first person from the CNMI ever elected to Congress. A Democrat who serves on the House Natural Resources and Education committees, he has worked on military basing agreements, labor protections, and preserving the CNMI\'s unique federal covenant relationship with the United States.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gregorio_Kilili_Camacho_Sablan.jpg/330px-Gregorio_Kilili_Camacho_Sablan.jpg',
  sources: [stubSource('sablan-house', 'Rep. Gregorio Sablan — U.S. House', 'https://sablan.house.gov', 'U.S. House of Representatives')],
  baselineCard: {
    currentOffice: { title: 'Delegate for Northern Mariana Islands', jurisdiction: 'Northern Mariana Islands', startDate: '2009-01-03' },
    party: 'Democratic',
    previousOffices: [],
    yearsInPublicService: 17,
    sourceIds: ['sablan-house'],
  },
  timeline: [], funding: [], recordAssessment: stubRecord(),
}

export const stubProfiles: Record<string, PoliticianProfile> = {
  'donald-trump': donaldTrump,
  'joe-biden': joeBiden,
  'kamala-harris': kamalaHarris,
  'barack-obama': barackObama,
  'ron-desantis': ronDeSantis,
  'jd-vance': jdVance,
  'marco-rubio': marcoRubio,
  'nikki-haley': nikkiHaley,
  'glenn-youngkin': glennYoungkin,
  'brian-kemp': brianKemp,
  'gretchen-whitmer': gretchenWhitmer,
  'josh-shapiro': joshShapiro,
  'jb-pritzker': jbPritzker,
  'andy-beshear': andyBeshear,
  'wes-moore': wesMoore,
  'pete-buttigieg': peteButtigieg,
  // Territorial delegates
  'eleanor-holmes-norton': eleanorHolmesNorton,
  'pablo-hernandez-rivera': pabloHernandezRivera,
  'james-moylan': jamesMoylan,
  'stacey-plaskett': staceyPlaskett,
  'amata-radewagen': amataRadewagen,
  'gregorio-sablan': gregorioSablan,
}

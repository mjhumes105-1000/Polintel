import type { PoliticianProfile } from '@political-intel/types'

function stubSource(id: string, label: string, url: string, publisher: string) {
  return { id, label, url, publisher, retrievedAt: '2026-04-28', type: 'official-government' as const }
}

function stubRecord(): PoliticianProfile['recordAssessment'] {
  return { generatedAt: '2026-04-28', whatTheRecordShows: [], whatWeObserve: [], whatIsUnresolved: [] }
}

export const stubProfileSlugs = new Set([
  'donald-trump',
  'joe-biden',
  'kamala-harris',
  'barack-obama',
  'ron-desantis',
])

const donaldTrump: PoliticianProfile = {
  id: 'donald-trump',
  slug: 'donald-trump',
  name: 'Donald Trump',
  currentTitle: '47th President of the United States',
  state: 'National',
  bio: 'Donald Trump is the 47th President of the United States, having previously served as the 45th President from 2017 to 2021. He is a member of the Republican Party and the first U.S. president to serve non-consecutive terms since Grover Cleveland.',
  photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg',
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
  bio: 'Joe Biden served as the 46th President of the United States from January 2021 to January 2025, and as the 47th Vice President under President Barack Obama from 2009 to 2017. He previously served as a U.S. Senator from Delaware for 36 years. He is a member of the Democratic Party.',
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
  bio: 'Barack Obama served as the 44th President of the United States from 2009 to 2017, the first African American to hold the office. He previously served as a U.S. Senator from Illinois and as an Illinois State Senator. He is a member of the Democratic Party.',
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

const ronDeSantis: PoliticianProfile = {
  id: 'ron-desantis',
  slug: 'ron-desantis',
  name: 'Ron DeSantis',
  currentTitle: 'Governor of Florida',
  state: 'Florida',
  bio: 'Ron DeSantis has served as Governor of Florida since January 2019 and was re-elected in 2022. He previously represented Florida\'s 6th congressional district in the U.S. House from 2013 to 2018. He is a member of the Republican Party.',
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

export const stubProfiles: Record<string, PoliticianProfile> = {
  'donald-trump': donaldTrump,
  'joe-biden': joeBiden,
  'kamala-harris': kamalaHarris,
  'barack-obama': barackObama,
  'ron-desantis': ronDeSantis,
}

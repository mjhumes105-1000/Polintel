export interface PresidentialCandidate {
  name: string
  party: 'D' | 'R' | 'I'
  state: string
  currentTitle: string
  status: 'exploring' | 'declared' | 'withdrawn'
  photoUrl?: string
  profileSlug?: string
  tagline: string
}

export const presidentialCandidates2028: PresidentialCandidate[] = [
  {
    name: 'Gavin Newsom',
    party: 'D',
    state: 'California',
    currentTitle: 'Governor of California',
    status: 'exploring',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gavin_Newsom_official_portrait.jpg/400px-Gavin_Newsom_official_portrait.jpg',
    profileSlug: 'gavin-newsom',
    tagline: 'Climate, housing, and reproductive rights as national platform',
  },
  {
    name: 'Gretchen Whitmer',
    party: 'D',
    state: 'Michigan',
    currentTitle: 'Governor of Michigan',
    status: 'exploring',
    tagline: 'Manufacturing, healthcare, and Midwest coalition-building',
  },
  {
    name: 'Josh Shapiro',
    party: 'D',
    state: 'Pennsylvania',
    currentTitle: 'Governor of Pennsylvania',
    status: 'exploring',
    tagline: 'Swing-state governance and economic opportunity framing',
  },
  {
    name: 'Ron DeSantis',
    party: 'R',
    state: 'Florida',
    currentTitle: 'Governor of Florida',
    status: 'exploring',
    tagline: 'Anti-woke governance and Florida model',
  },
]

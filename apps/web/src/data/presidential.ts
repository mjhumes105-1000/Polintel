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
  // ── REPUBLICANS ────────────────────────────────────────────────────────────
  {
    name: 'JD Vance',
    party: 'R',
    state: 'Ohio',
    currentTitle: 'Vice President of the United States',
    status: 'exploring',
    profileSlug: 'jd-vance',
    tagline: 'Populist economic nationalism and MAGA continuity — near-certain frontrunner',
  },
  {
    name: 'Marco Rubio',
    party: 'R',
    state: 'Florida',
    currentTitle: 'U.S. Secretary of State',
    status: 'exploring',
    profileSlug: 'marco-rubio',
    tagline: 'Foreign policy credentials and Latino outreach as bridge from Trump era',
  },
  {
    name: 'Ron DeSantis',
    party: 'R',
    state: 'Florida',
    currentTitle: 'Governor of Florida',
    status: 'exploring',
    profileSlug: 'ron-desantis',
    tagline: 'Anti-woke governance, cultural conservatism, and the Florida model',
  },
  {
    name: 'Tom Cotton',
    party: 'R',
    state: 'Arkansas',
    currentTitle: 'U.S. Senator from Arkansas',
    status: 'exploring',
    profileSlug: 'tom-cotton',
    tagline: 'Hawkish national security and border enforcement as core platform',
  },
  {
    name: 'Glenn Youngkin',
    party: 'R',
    state: 'Virginia',
    currentTitle: 'Former Governor of Virginia',
    status: 'exploring',
    profileSlug: 'glenn-youngkin',
    tagline: 'Center-right electability pitch — can win suburban swing districts',
  },
  {
    name: 'Nikki Haley',
    party: 'R',
    state: 'South Carolina',
    currentTitle: 'Former U.S. Ambassador to the United Nations',
    status: 'exploring',
    profileSlug: 'nikki-haley',
    tagline: 'Ran in 2024 primary, positioning for hawkish internationalist lane',
  },
  {
    name: 'Brian Kemp',
    party: 'R',
    state: 'Georgia',
    currentTitle: 'Former Governor of Georgia',
    status: 'exploring',
    profileSlug: 'brian-kemp',
    tagline: 'Conservative competence and proven swing-state governance',
  },

  // ── DEMOCRATS ──────────────────────────────────────────────────────────────
  {
    name: 'Gavin Newsom',
    party: 'D',
    state: 'California',
    currentTitle: 'Governor of California',
    status: 'exploring',
    photoUrl: '/politicians/gavin-newsom.jpg',
    profileSlug: 'gavin-newsom',
    tagline: 'Climate, housing, and reproductive rights — Trump\'s most vocal Democratic foil',
  },
  {
    name: 'Gretchen Whitmer',
    party: 'D',
    state: 'Michigan',
    currentTitle: 'Governor of Michigan',
    status: 'exploring',
    profileSlug: 'gretchen-whitmer',
    tagline: 'Manufacturing revival and Midwest coalition — won by 10 points in a swing state',
  },
  {
    name: 'Josh Shapiro',
    party: 'D',
    state: 'Pennsylvania',
    currentTitle: 'Governor of Pennsylvania',
    status: 'exploring',
    profileSlug: 'josh-shapiro',
    tagline: 'Swing-state governance, economic opportunity, and bipartisan deal-making',
  },
  {
    name: 'J.B. Pritzker',
    party: 'D',
    state: 'Illinois',
    currentTitle: 'Governor of Illinois',
    status: 'exploring',
    profileSlug: 'jb-pritzker',
    tagline: 'Abortion rights, economic investment, and self-funded anti-MAGA campaign capacity',
  },
  {
    name: 'Andy Beshear',
    party: 'D',
    state: 'Kentucky',
    currentTitle: 'Governor of Kentucky',
    status: 'exploring',
    profileSlug: 'andy-beshear',
    tagline: 'Won re-election in deep-red Kentucky — a proven model for reaching Trump voters',
  },
  {
    name: 'Wes Moore',
    party: 'D',
    state: 'Maryland',
    currentTitle: 'Governor of Maryland',
    status: 'exploring',
    profileSlug: 'wes-moore',
    tagline: 'Veterans, workforce development, and a compelling biography — rapidly rising star',
  },
  {
    name: 'Pete Buttigieg',
    party: 'D',
    state: 'Indiana',
    currentTitle: 'Former U.S. Secretary of Transportation',
    status: 'exploring',
    profileSlug: 'pete-buttigieg',
    tagline: 'Infrastructure, clean energy economy, and 2020 primary experience',
  },
]

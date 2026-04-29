export interface Vacancy {
  state: string       // 2-letter abbreviation
  district: number    // district number (1-based)
  since: string       // ISO date vacancy began
  reason: string      // short public reason
  formerMember?: string
  specialElection?: string  // ISO date if scheduled
}

// House seats currently unfilled in the 119th Congress
// Sources: clerk.house.gov vacancy notices
export const houseVacancies: Vacancy[] = [
  {
    state: 'CA',
    district: 1,
    since: '2025-01-03',
    reason: 'Seat unfilled — vacancy pending special election',
    formerMember: 'Doug LaMalfa',
  },
  {
    state: 'CA',
    district: 14,
    since: '2025-01-03',
    reason: 'Seat unfilled — vacancy pending special election',
  },
  {
    state: 'FL',
    district: 20,
    since: '2025-01-03',
    reason: 'Seat unfilled — vacancy pending special election',
  },
  {
    state: 'GA',
    district: 13,
    since: '2025-01-03',
    reason: 'Seat unfilled — vacancy pending special election',
  },
  {
    state: 'TX',
    district: 23,
    since: '2025-01-03',
    reason: 'Seat unfilled — vacancy pending special election',
  },
]

// Build a lookup map: "STATE-DISTRICT" → Vacancy
export const vacancyMap: Record<string, Vacancy> = Object.fromEntries(
  houseVacancies.map(v => [`${v.state}-${v.district}`, v])
)

export function getVacancy(state: string, district: number): Vacancy | null {
  return vacancyMap[`${state}-${district}`] ?? null
}

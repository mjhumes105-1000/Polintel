// FY2025 Federal Budget — actual data (fiscal year ended September 30, 2025)
// Sources: CBO Budget and Economic Outlook, OMB Historical Tables, Treasury Fiscal Data

export interface BudgetLine {
  category: string
  amountUSD: number // in trillions
  pct: number       // percent of total spending
  color: string     // tailwind bg class for bar
  textColor: string // tailwind text class for value
  description: string
}

export const BUDGET_YEAR = 'FY2025'

export const BUDGET_OVERVIEW = {
  totalRevenueUSD: 4.92,   // $4.92 trillion
  totalSpendingUSD: 6.75,  // $6.75 trillion
  deficitUSD: -1.83,       // $1.83 trillion deficit
  debtHeldByPublicUSD: 28.9, // $28.9 trillion debt held by the public
  gdpUSD: 29.3,            // nominal GDP (calendar year 2025 estimate)
  deficitPctGdp: 6.2,      // deficit as % of GDP
  debtPctGdp: 98.6,        // debt as % of GDP
}

export const REVENUE_LINES: BudgetLine[] = [
  {
    category: 'Individual Income Taxes',
    amountUSD: 2.43,
    pct: 49.4,
    color: 'bg-accent/70',
    textColor: 'text-accent',
    description: 'Taxes on wages, salaries, capital gains, and investment income. The largest single revenue source.',
  },
  {
    category: 'Payroll Taxes (FICA)',
    amountUSD: 1.55,
    pct: 31.5,
    color: 'bg-teal-600/60',
    textColor: 'text-teal-500',
    description: 'Social Security and Medicare payroll contributions withheld from paychecks. Funds trust fund programs.',
  },
  {
    category: 'Corporate Income Taxes',
    amountUSD: 0.53,
    pct: 10.8,
    color: 'bg-accent/40',
    textColor: 'text-accent',
    description: 'Taxes on corporate profits at the 21% rate set by the Tax Cuts and Jobs Act (2017).',
  },
  {
    category: 'Customs & Tariff Duties',
    amountUSD: 0.14,
    pct: 2.8,
    color: 'bg-amber-500/50',
    textColor: 'text-amber-400',
    description: 'Revenue from tariffs on imported goods. Elevated vs. prior years due to Trump-era tariff increases.',
  },
  {
    category: 'Excise Taxes',
    amountUSD: 0.10,
    pct: 2.0,
    color: 'bg-teal-600/40',
    textColor: 'text-teal-500',
    description: 'Taxes on fuel, tobacco, alcohol, airline tickets, and other specific goods and services.',
  },
  {
    category: 'Estate & Gift Taxes',
    amountUSD: 0.034,
    pct: 0.7,
    color: 'bg-accent/25',
    textColor: 'text-accent',
    description: 'Taxes on estates above $13.6M (2025 threshold) and large lifetime gifts.',
  },
  {
    category: 'Other Revenue',
    amountUSD: 0.12,
    pct: 2.4,
    color: 'bg-surface-3',
    textColor: 'text-ink-3',
    description: 'Federal Reserve remittances, fees, fines, and miscellaneous receipts.',
  },
]

export const MANDATORY_LINES: BudgetLine[] = [
  {
    category: 'Social Security',
    amountUSD: 1.43,
    pct: 21.2,
    color: 'bg-amber-500/60',
    textColor: 'text-amber-400',
    description: 'Retirement, disability (SSDI), and survivor (SSI) benefits for 70+ million Americans. Largest single federal program.',
  },
  {
    category: 'Medicare',
    amountUSD: 0.95,
    pct: 14.1,
    color: 'bg-amber-400/50',
    textColor: 'text-amber-400',
    description: 'Federal health insurance for 65+ million Americans over 65 and those with disabilities. Parts A, B, C, and D.',
  },
  {
    category: 'Net Interest on Debt',
    amountUSD: 0.92,
    pct: 13.6,
    color: 'bg-flag/60',
    textColor: 'text-flag',
    description: 'Interest payments on the $28.9T national debt. Now the third-largest spending category — surpassed Medicaid in FY2024.',
  },
  {
    category: 'Medicaid & CHIP',
    amountUSD: 0.62,
    pct: 9.2,
    color: 'bg-amber-600/50',
    textColor: 'text-amber-400',
    description: 'Health coverage for 85+ million low-income Americans, children, seniors, and people with disabilities.',
  },
  {
    category: 'Veterans Benefits',
    amountUSD: 0.35,
    pct: 5.2,
    color: 'bg-blue-500/40',
    textColor: 'text-blue-400',
    description: 'VA disability compensation, pension, education, and healthcare for 18+ million veterans.',
  },
  {
    category: 'SNAP & Nutrition',
    amountUSD: 0.11,
    pct: 1.6,
    color: 'bg-green-600/40',
    textColor: 'text-green-400',
    description: 'Supplemental Nutrition Assistance Program (food stamps) for 42 million low-income Americans.',
  },
  {
    category: 'Other Mandatory',
    amountUSD: 0.52,
    pct: 7.7,
    color: 'bg-surface-3',
    textColor: 'text-ink-3',
    description: 'Federal employee retirement, earned income tax credit, child tax credit, student loans, farm subsidies, and more.',
  },
]

export const DISCRETIONARY_LINES: BudgetLine[] = [
  {
    category: 'Defense & Military',
    amountUSD: 0.91,
    pct: 13.5,
    color: 'bg-blue-600/60',
    textColor: 'text-blue-400',
    description: 'Pentagon base budget, military personnel, weapons procurement, research and development, and overseas operations.',
  },
  {
    category: 'Health & Human Services',
    amountUSD: 0.14,
    pct: 2.1,
    color: 'bg-pink-500/50',
    textColor: 'text-pink-400',
    description: 'NIH research, CDC, FDA, substance abuse programs, and non-Medicaid HHS programs.',
  },
  {
    category: 'Education',
    amountUSD: 0.11,
    pct: 1.6,
    color: 'bg-violet-500/50',
    textColor: 'text-violet-400',
    description: 'K-12 Title I grants, Pell Grants, special education (IDEA), student loan administration.',
  },
  {
    category: 'Transportation',
    amountUSD: 0.10,
    pct: 1.5,
    color: 'bg-teal-600/50',
    textColor: 'text-teal-400',
    description: 'FAA, highway and transit grants, Amtrak, and port infrastructure.',
  },
  {
    category: 'Veterans Affairs',
    amountUSD: 0.13,
    pct: 1.9,
    color: 'bg-blue-400/40',
    textColor: 'text-blue-400',
    description: 'VA medical centers, benefits administration, and construction — separate from mandatory VA benefits.',
  },
  {
    category: 'Other Non-Defense',
    amountUSD: 0.44,
    pct: 6.5,
    color: 'bg-surface-3',
    textColor: 'text-ink-3',
    description: 'Housing, science, energy, international affairs, justice, and other non-defense discretionary programs.',
  },
]

export const MANDATORY_TOTAL = MANDATORY_LINES.reduce((s, l) => s + l.amountUSD, 0)
export const DISCRETIONARY_TOTAL = DISCRETIONARY_LINES.reduce((s, l) => s + l.amountUSD, 0)

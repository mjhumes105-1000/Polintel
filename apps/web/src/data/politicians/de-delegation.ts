import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'C001088',
    slug: 'christopher-a-coons',
    name: 'Christopher A. Coons',
    party: 'D',
    chamber: 'Senate',
    state: 'Delaware',
    currentTitle: 'U.S. Senator from Delaware',
    bio: 'Chris Coons has served in the U.S. Senate since 2010, elected to the seat previously held by Joe Biden. A Yale-educated lawyer and theologian, he served as New Castle County Executive before entering the Senate. He is a senior member of the Senate Foreign Relations and Judiciary committees, known for his bipartisan work on foreign policy, criminal justice reform, and international development.',
    sinceYear: 2010,
    committees: [
      { slug: 'slet', name: 'Senate Select Committee on Ethics', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the most significant federal gun safety legislation in decades, which he helped negotiate. The bill enhanced background checks for young buyers, funded state crisis intervention programs, and clarified the "boyfriend loophole" in domestic violence gun restrictions.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, highlighting its clean energy provisions and drug pricing reforms as key wins for Delaware\'s residents. Delaware\'s pharmaceutical industry is one of the state\'s major employers, and Coons carefully navigated the drug pricing provisions\' impact on the sector.',
      },
      {
        title: 'Additional Ukraine Security Assistance',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $61 billion Ukraine aid package as a longtime advocate for robust U.S. support. Coons has been one of the Senate\'s most consistent voices for maintaining strong transatlantic alliances and argues that failing Ukraine would embolden authoritarian regimes worldwide.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that its Medicaid cuts and clean energy rollbacks would harm Delaware families and undermine the state\'s growing offshore wind industry. As a senior member of the Foreign Relations and Judiciary Committees, Coons also raised concerns that the bill\'s approach to international assistance funding would weaken American diplomatic leverage and development programs he has long championed.',
      },
    ],
    keyBills: [
      {
        title: 'Global Fragility Act',
        year: 2019,
        month: 12,
        summary: 'Authored the Global Fragility Act, requiring the U.S. government to develop a comprehensive 10-year strategy for preventing extremism and reducing violence in fragile states. The bipartisan law represents Coons\' focus on prevention-based foreign policy as an alternative to costly military interventions.',
      },
      {
        title: 'Endless Frontier Act — Science and Technology Competition',
        year: 2021,
        month: 5,
        summary: 'Co-authored the Endless Frontier Act that became the foundation of the CHIPS and Science Act, proposing a massive expansion of NSF and NIST investment in emerging technologies to compete with China. The legislation helped reshape the debate about federal R&D investment and industrial policy.',
      },
    ],
  },

  {
    bioguideId: 'B001303',
    slug: 'lisa-blunt-rochester',
    name: 'Lisa Blunt Rochester',
    party: 'D',
    chamber: 'Senate',
    state: 'Delaware',
    currentTitle: 'U.S. Senator from Delaware',
    bio: 'Lisa Blunt Rochester was elected to the U.S. Senate in 2024, becoming Delaware\'s first Black senator and first woman senator. She previously served in the U.S. House representing Delaware\'s at-large seat from 2017 to 2025. A former Delaware Secretary of Labor and state health official, she focuses on healthcare, workforce development, and racial equity. She serves on the Environment, Banking, HELP, and Commerce committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act as a House member, with particular emphasis on its healthcare provisions including capping insulin costs at $35 for Medicare patients — a priority she had championed for years given the disproportionate burden of diabetes and chronic disease on Delaware\'s Black community.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act in her first weeks in the Senate, arguing the mandatory detention provisions were overly broad and would harm immigrant communities who are a vital part of Delaware\'s agricultural and service economy.',
      },
      {
        title: 'PACT Act — Veterans Toxic Exposure',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the PACT Act expanding VA healthcare and benefits for veterans exposed to burn pits and toxic substances. Delaware has a significant veteran population and Blunt Rochester had been a vocal advocate for the legislation during her House tenure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning that its Medicaid cuts and rollback of the ACA\'s enhanced subsidies would strip healthcare coverage from tens of thousands of Delaware residents, with disproportionate harm to the state\'s Black community that already faces higher rates of chronic disease. As a member of the Senate HELP and Environment Committees, Blunt Rochester also opposed the bill\'s elimination of clean energy tax credits that have spurred Delaware\'s offshore wind sector and green workforce development.',
      },
    ],
    keyBills: [
      {
        title: 'Whole Health for Seniors Act',
        year: 2023,
        month: 6,
        summary: 'Championed legislation expanding Medicare coverage to include social determinants of health services addressing loneliness, food insecurity, and housing instability among seniors — conditions that significantly drive health costs. The bill drew on her experience as a Delaware health official and her focus on whole-person health equity.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'M001238',
    slug: 'sarah-mcbride',
    name: 'Sarah McBride',
    party: 'D',
    chamber: 'House',
    district: 0,
    state: 'Delaware',
    currentTitle: 'U.S. Representative, Delaware At-Large',
    bio: 'Sarah McBride was elected to represent Delaware\'s at-large House seat in 2024, becoming the first openly transgender person elected to Congress. A former Delaware State Senator who in 2020 became the highest-ranking transgender official in U.S. history at that time, she focuses on LGBTQ rights, healthcare access, paid family leave, and working families. She serves on the House Foreign Affairs and Science, Space, and Technology committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, arguing its Medicaid cuts and rollback of the Affordable Care Act subsidies would harm Delaware\'s working families and particularly its LGBTQ community, which faces higher rates of healthcare discrimination and economic instability.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, arguing its Medicaid cuts and rollback of ACA subsidies would cause severe harm to Delaware\'s working families, including LGBTQ constituents who face higher rates of healthcare access barriers. As a member of the Foreign Affairs and Science, Space, and Technology Committees, McBride also opposed provisions she argued would defund programs supporting research and international humanitarian commitments that benefit Delaware\'s academic and biomedical community.',
      },
    ],
    keyBills: [
      {
        title: 'LGBTQ+ Nondiscrimination in Federal Programs Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation codifying protections against discrimination on the basis of sexual orientation and gender identity in all federally funded programs, responding to executive actions targeting LGBTQ federal workers and federally funded services. McBride drew on her experience as a state legislator who passed Delaware\'s transgender civil rights law.',
      },
    ],
  },
]

export const deDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

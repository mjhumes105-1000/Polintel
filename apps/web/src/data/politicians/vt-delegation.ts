import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'S000033',
    slug: 'bernard-sanders',
    name: 'Bernard Sanders',
    party: 'I',
    chamber: 'Senate',
    state: 'Vermont',
    currentTitle: 'U.S. Senator from Vermont',
    bio: 'Bernie Sanders has represented Vermont in Congress since 1991 — first in the House for 16 years and then in the Senate — making him the longest-serving independent member of Congress in American history. A democratic socialist who twice ran for president in 2016 and 2020, he is among the most recognizable progressive voices in American politics. He chairs — or has chaired — the Senate Budget and HELP committees, championing Medicare for All, a $15 minimum wage, free college, and aggressive action on climate change and economic inequality.',
    sinceYear: 1991,
    committees: [
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief bill and used his role as Senate Budget Committee chair to advance the reconciliation process. Sanders argued the bill did not go far enough, particularly in failing to include a $15 federal minimum wage after the Senate parliamentarian ruled it non-germane to reconciliation.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act despite publicly criticizing it as inadequate. Sanders argued the bill\'s climate provisions, while historic, fell far short of what scientists say is needed, and that its drug pricing provisions would not lower costs for enough Americans — but he supported it as better than nothing.',
      },
      {
        title: 'Gaza Weapons Sales Resolution',
        year: 2024,
        month: 5,
        position: 'For',
        summary: 'Led Senate resolutions invoking the Arms Export Control Act to block U.S. arms sales to Israel, arguing that U.S. weapons were being used in ways that violated international humanitarian law in Gaza. The resolutions failed but drew more Senate support than any previous effort to condition military aid to Israel.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation package, condemning its deep Medicaid cuts as a catastrophic attack on Vermont\'s working families and the elderly who depend on the program. As Ranking Member of the HELP Committee, Sanders argued the bill\'s rollback of clean energy investments would accelerate climate change while slashing the social programs Vermont\'s most vulnerable residents rely on.',
      },
    ],
    keyBills: [
      {
        title: 'Medicare for All Act',
        year: 2023,
        month: 5,
        summary: 'Re-introduced his signature Medicare for All Act, proposing a universal single-payer health insurance system that would replace private insurance with a government-run program covering all Americans. The bill has not advanced through committee but has become the defining legislative proposal of the progressive healthcare movement.',
      },
      {
        title: 'Prescription Drug Price Relief Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation allowing Medicare to negotiate drug prices for all Americans — not just Medicare beneficiaries — and setting a cap at the median price paid by other wealthy nations. Sanders used his HELP Committee chairmanship to hold hearings exposing pharmaceutical executives\' pricing practices.',
      },
    ],
  },

  {
    bioguideId: 'W000800',
    slug: 'peter-welch',
    name: 'Peter Welch',
    party: 'D',
    chamber: 'Senate',
    state: 'Vermont',
    currentTitle: 'U.S. Senator from Vermont',
    bio: 'Peter Welch was elected to the U.S. Senate in 2022 and previously represented Vermont\'s at-large House seat for 16 years. A former Vermont State Senate President Pro Tempore, he is known for his pragmatic progressive approach, focusing on prescription drug pricing, rural broadband, agricultural policy, and government accountability. He sits on the Senate Judiciary, Finance, and Agriculture committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'ssra', name: 'Senate Committee on Rules and Administration', chamber: 'Senate', role: 'Member' },
      { slug: 'ssju', name: 'Senate Committee on the Judiciary', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act as a House member before joining the Senate, praising its Medicare drug price negotiation provisions that he had championed for years. Vermont\'s senior population faces high prescription drug costs, making drug pricing a consistent top priority.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the bipartisan gun safety legislation, reflecting Vermont\'s unique position as a state with high gun ownership and strong rural hunting culture, yet generally supportive of targeted gun safety measures. Welch supported the bill\'s expanded background check and mental health provisions.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing it expanded mandatory detention without adequate due process safeguards and would strain local law enforcement resources in small states like Vermont.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning through his Finance Committee role that its Medicaid funding cuts would force Vermont\'s rural hospitals and community health centers into financial crisis. Welch argued the legislation\'s clean energy rollbacks would reverse Vermont\'s progress on climate resilience and undermine the state\'s agricultural and outdoor recreation economy.',
      },
    ],
    keyBills: [
      {
        title: 'Affordable Prescriptions for Patients Act',
        year: 2023,
        month: 6,
        summary: 'Championed legislation curbing "product hopping" by pharmaceutical companies — a practice of making minor drug modifications to extend patents and block generic competition. Welch had advanced similar legislation for years in the House and continued the effort through the Senate Judiciary Committee.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'B001318',
    slug: 'becca-balint',
    name: 'Becca Balint',
    party: 'D',
    chamber: 'House',
    district: 0,
    state: 'Vermont',
    currentTitle: 'U.S. Representative, Vermont At-Large',
    bio: 'Becca Balint was elected to represent Vermont\'s at-large House seat in 2022, becoming the first woman and first openly LGBTQ person to represent Vermont in Congress. A former Vermont State Senate President Pro Tempore, she is one of the most progressive members of Congress, focusing on economic justice, LGBTQ rights, climate action, and democracy reform. She serves on the House Judiciary and Budget committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal, arguing the spending caps and work requirement expansions for SNAP recipients were harmful concessions that disproportionately harmed low-income families. She was among the progressive Democrats who opposed the Biden White House\'s negotiated compromise.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican budget reconciliation bill, calling its Medicaid cuts, SNAP reductions, and clean energy rollbacks an attack on working families and Vermont\'s climate progress. Balint was among the most vocal House progressives opposing the bill.',
      },
      {
        title: 'Gaza Arms Embargo Provisions',
        year: 2024,
        month: 3,
        position: 'For',
        summary: 'Supported resolutions and amendments calling for conditions on U.S. weapons sales to Israel in response to civilian casualties in Gaza. Balint, who is Jewish, drew significant attention by breaking with most of the House Democratic caucus on this issue, citing her conscience and her interpretation of Jewish values.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation package from her seat on the House Budget Committee, calling its Medicaid cuts and clean energy rollbacks a direct assault on Vermont\'s most vulnerable residents and the state\'s nationally recognized environmental commitments. Balint was among the most vocal House opponents, arguing the bill would force thousands of Vermonters off health coverage while gutting the climate investments the state depends on.',
      },
    ],
    keyBills: [
      {
        title: 'Dignity for Detained Immigrants Act',
        year: 2023,
        month: 7,
        summary: 'Co-led legislation establishing minimum standards for conditions in immigration detention facilities, including medical care, mental health services, and due process protections. Vermont\'s progressive tradition on civil liberties and immigrant rights has made Balint a natural champion for detention reform.',
      },
    ],
  },
]

export const vtDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'R000584',
    slug: 'james-e-risch',
    name: 'James E. Risch',
    party: 'R',
    chamber: 'Senate',
    state: 'Idaho',
    currentTitle: 'U.S. Senator from Idaho',
    bio: 'Jim Risch has served Idaho in the U.S. Senate since 2009, having previously served as Idaho Lieutenant Governor and briefly as Governor in 2006. He chairs the Senate Foreign Relations Committee and sits on the Small Business, Ethics, and Intelligence Committees. An attorney from Boise with a long career in Idaho state politics, he has been a leading Senate voice on foreign policy — particularly U.S. relations with China, Iran, and Russia — and is known for his hawkish views on national security and his opposition to foreign aid without strong oversight.',
    sinceYear: 2009,
    committees: [
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Chair' },
      { slug: 'sssb', name: 'Senate Committee on Small Business and Entrepreneurship', chamber: 'Senate', role: 'Member' },
      { slug: 'slet', name: 'Senate Select Committee on Ethics', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Ukraine Aid Supplemental',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the $61 billion Ukraine military aid supplemental, arguing it lacked sufficient accountability mechanisms and that the administration had not developed a clear strategy for ending the conflict. Despite his hawkish foreign policy posture, Risch has been skeptical of open-ended commitments without defined strategic objectives.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Risch has supported stricter immigration enforcement throughout his Senate career.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, using his Foreign Relations and Intelligence Committee roles to shape provisions on China competition, sanctions, and foreign military sales. Risch has consistently supported robust defense spending and strong deterrence postures in the Indo-Pacific.',
      },
    ],
    keyBills: [
      {
        title: 'Taiwan Policy Act',
        year: 2022,
        month: 9,
        summary: 'Co-authored the Taiwan Policy Act as Ranking Member of the Foreign Relations Committee, a sweeping bill designating Taiwan as a major non-NATO ally and dramatically increasing military assistance and diplomatic engagement. The legislation represented the most significant rethinking of U.S. Taiwan policy in decades and reflected Risch\'s view that the U.S. must be explicit about its commitment to Taiwan\'s security against Chinese aggression.',
      },
      {
        title: 'REPO for Ukrainians Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation authorizing the seizure and transfer of immobilized Russian sovereign assets to Ukraine for reconstruction purposes. Despite voting against the broader Ukraine aid package, Risch supported using frozen Russian assets — rather than U.S. taxpayer funds — as the mechanism for Ukraine financing, reflecting his effort to ensure accountability in international assistance.',
      },
    ],
  },

  {
    bioguideId: 'C000880',
    slug: 'mike-crapo',
    name: 'Mike Crapo',
    party: 'R',
    chamber: 'Senate',
    state: 'Idaho',
    currentTitle: 'U.S. Senator from Idaho',
    bio: 'Mike Crapo has served Idaho in Congress since 1993 — first in the House and then in the U.S. Senate since 1999 — making him one of the most senior members of the Senate. He chairs both the Senate Finance Committee and the Joint Committee on Taxation, positions that make him one of the most powerful fiscal and tax policymakers in Congress. A Harvard Law graduate and former Idaho State Senator, he is known for his deep expertise in tax policy and financial regulation and has been the Senate\'s lead Republican negotiator on major fiscal legislation.',
    sinceYear: 1993,
    committees: [
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Chair' },
      { slug: 'jstx', name: 'Joint Committee on Taxation', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act of 2017',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'As a senior Finance Committee member, Crapo was a lead architect of the Tax Cuts and Jobs Act, the most significant tax code overhaul since 1986. He helped negotiate the final bill\'s corporate rate reduction from 35% to 21%, the pass-through deduction, and the expanded child tax credit — provisions he has championed for permanent extension in subsequent Congresses.',
      },
      {
        title: 'SECURE 2.0 Act of 2022',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Co-authored the SECURE 2.0 Act, a sweeping bipartisan retirement savings reform that expanded access to workplace retirement plans, increased catch-up contribution limits, and created new incentives for emergency savings. Crapo led the Senate Finance Committee negotiations that produced the final bill, demonstrating his capacity for bipartisan dealmaking on complex financial policy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2025,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill as chair of the Finance Committee, having shaped its tax provisions to include permanent extension of TCJA rates and new business investment incentives. Crapo negotiated within the Republican conference to find the right balance between tax cuts and spending reductions.',
      },
    ],
    keyBills: [
      {
        title: 'SECURE 2.0 Act of 2022',
        year: 2022,
        month: 12,
        summary: 'As the lead Senate Republican negotiator, Crapo co-authored the most comprehensive reform of retirement savings law in over a decade. SECURE 2.0 expanded automatic enrollment in 401(k) plans, increased required minimum distribution ages, created emergency savings accounts within retirement plans, and improved small business retirement plan access — estimated to benefit tens of millions of American workers.',
      },
      {
        title: 'One Big Beautiful Bill Tax Provisions',
        year: 2025,
        month: 5,
        summary: 'As Senate Finance Committee Chairman, Crapo led drafting of the tax title of the Republican reconciliation bill, making TCJA cuts permanent and adding new provisions including an enhanced deduction for domestic manufacturers and a strengthened R&D credit. The legislation represents the largest tax policy action since the TCJA itself and reflects Crapo\'s decades-long focus on reducing the tax burden on American businesses and families.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'F000469',
    slug: 'russ-fulcher',
    name: 'Russ Fulcher',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Idaho',
    currentTitle: 'U.S. Representative, Idaho 1st District',
    bio: 'Russ Fulcher has represented Idaho\'s 1st Congressional District since 2019, succeeding Raul Labrador. A former Idaho State Senator and tech executive who worked at Micron Technology, he serves on the House Natural Resources and Energy and Commerce Committees. His district covers northern and southwestern Idaho including Boise and Coeur d\'Alene and encompasses vast federal lands. A member of the House Freedom Caucus, he is one of Idaho\'s most conservative voices on federal spending, land management, and technology policy.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Bipartisan Infrastructure Law',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the $1.2 trillion Infrastructure Investment and Jobs Act, arguing it was too expensive, added too much to the national debt, and included excessive federal regulatory expansion. Fulcher has consistently opposed large federal spending packages regardless of their bipartisan support.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Fulcher has been a consistent advocate for stricter immigration enforcement and border security throughout his House tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, supporting its spending reductions and tax cut extensions. Fulcher used his Natural Resources Committee position to shape provisions related to federal land management in Idaho, focusing on reducing regulatory barriers to grazing, timber, and mining on public lands.',
      },
    ],
    keyBills: [
      {
        title: 'Unleashing American Energy on Federal Lands Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation streamlining permitting for oil, gas, and mineral extraction on federal lands in Idaho and across the West. Idaho\'s economy depends on access to federal lands for timber, mining, grazing, and recreation, and Fulcher has been a persistent critic of federal land management decisions that restrict economic activity.',
      },
      {
        title: 'American Data Privacy and Protection Act provisions',
        year: 2022,
        month: 7,
        summary: 'Participated in Energy and Commerce Committee markup of comprehensive federal data privacy legislation, drawing on his tech industry background at Micron Technology. Fulcher has advocated for federal data privacy standards that preempt the patchwork of state laws and provide clear rules for Idaho\'s growing technology sector.',
      },
    ],
  },

  {
    bioguideId: 'S001148',
    slug: 'michael-k-simpson',
    name: 'Michael K. Simpson',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Idaho',
    currentTitle: 'U.S. Representative, Idaho 2nd District',
    bio: 'Mike Simpson has represented Idaho\'s 2nd Congressional District since 1999, making him one of the longest-serving members of the Idaho delegation. A dentist from Blackfoot and former Idaho Speaker of the House, he serves on the House Appropriations Committee — one of the most powerful assignments in Congress — and focuses on water policy, salmon recovery, public lands, and funding for Idaho\'s national laboratories at Idaho National Laboratory. He is known as a pragmatic appropriator willing to work across the aisle to fund Idaho priorities.',
    sinceYear: 1999,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, reflecting his pragmatic approach to governance. Simpson has generally supported bipartisan compromise on budget and appropriations matters, prioritizing the ability to fund Idaho projects and programs over ideological purity on fiscal issues.',
      },
      {
        title: 'Consolidated Appropriations Act (FY2024)',
        year: 2024,
        month: 3,
        position: 'For',
        summary: 'Voted for the bipartisan omnibus appropriations bill, having secured funding through his Appropriations Committee seat for Idaho National Laboratory\'s nuclear energy research program and for Snake River water infrastructure. Simpson\'s Appropriations role allows him to direct federal investment to Idaho in ways unavailable to junior members.',
      },
      {
        title: 'Great American Outdoors Act',
        year: 2020,
        month: 7,
        position: 'For',
        summary: 'Voted for the bipartisan Great American Outdoors Act, permanently funding the Land and Water Conservation Fund at $900 million annually and providing $9.5 billion for national park maintenance backlogs. Idaho\'s vast public lands and outdoor recreation economy make LWCF funding a significant constituency interest.',
      },
    ],
    keyBills: [
      {
        title: 'Columbia Basin Initiative — Snake River Salmon Recovery',
        year: 2023,
        month: 6,
        summary: 'Championed a comprehensive $33.5 billion Columbia Basin proposal to replace the economic benefits of the four Lower Snake River dams if they were removed to restore salmon runs — a proposal that also involved significant new clean energy, water storage, and transportation infrastructure. Simpson\'s salmon recovery effort represents one of the most ambitious and complex natural resource proposals in the Northwest in decades, attempting to resolve decades-long conflicts between hydropower interests, tribal treaty rights, and endangered salmon recovery.',
      },
      {
        title: 'Idaho National Laboratory Modernization Provisions',
        year: 2024,
        month: 5,
        summary: 'Secured through the Appropriations Committee sustained funding for Idaho National Laboratory\'s nuclear energy research and advanced reactor programs. INL is Idaho\'s largest employer with over 5,000 workers, and Simpson has protected and grown its research budget through his Appropriations seat for over two decades.',
      },
    ],
  },
]

export const idDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

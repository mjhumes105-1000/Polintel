import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'D000618',
    slug: 'steve-daines',
    name: 'Steve Daines',
    party: 'R',
    chamber: 'Senate',
    state: 'Montana',
    currentTitle: 'U.S. Senator from Montana',
    bio: 'Steve Daines has served in the U.S. Senate since 2015 and previously represented Montana\'s at-large House seat for one term. A businessman and former Procter & Gamble executive who lived in China for several years, he is a leading Senate Republican voice on China competition, energy policy, and agricultural trade. He chairs the Senate Republican Campaign Committee (NRSC) and is a member of the Finance and Foreign Relations committees.',
    sinceYear: 2015,
    committees: [
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its energy provisions would harm Montana\'s coal, oil, and natural gas industries and that its corporate minimum tax would hurt Montana\'s agricultural equipment manufacturers and small businesses.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act as one of relatively few Republicans to support it, citing the national security imperative of reducing U.S. dependence on Chinese semiconductor manufacturing and the threat that Chinese dominance in this sector poses to U.S. defense systems.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Daines has been a consistent advocate for stronger border enforcement throughout his Senate tenure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using his Senate Finance and Energy and Natural Resources Committee seats to champion the bill\'s provisions expanding domestic energy production and rolling back regulations that he argued had suppressed Montana\'s oil, gas, and coal industries. Daines highlighted the bill\'s tax cut extensions as critical for Montana\'s agricultural families and energy sector businesses facing years of regulatory uncertainty.',
      },
    ],
    keyBills: [
      {
        title: 'PROVE IT Act',
        year: 2023,
        month: 5,
        summary: 'Introduced the Providing Reliable, Objective, Verifiable Emissions Intensity and Transparency (PROVE IT) Act, requiring studies comparing the carbon intensity of U.S. and foreign production of steel, aluminum, and other industrial goods. The bill was designed to build the data foundation for a U.S. carbon border adjustment mechanism to protect domestic producers.',
      },
      {
        title: 'Restoring Whitefish Range to Montana Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation to protect Montana\'s public lands from federal overreach while maintaining access for hunting, fishing, and grazing — priorities for Montana\'s agricultural and outdoor recreation communities. Daines has been a leading Senate voice on public land access and western states\' rights.',
      },
    ],
  },

  {
    bioguideId: 'S001232',
    slug: 'tim-sheehy',
    name: 'Tim Sheehy',
    party: 'R',
    chamber: 'Senate',
    state: 'Montana',
    currentTitle: 'U.S. Senator from Montana',
    bio: 'Tim Sheehy was elected to the U.S. Senate in 2024, defeating incumbent Democrat Jon Tester. A Navy SEAL veteran who served in Afghanistan and Iraq and later founded Bridger Aerospace, a Montana aerial firefighting company, he is one of a small number of special operations veterans in the Senate. He serves on the Senate Armed Services, Veterans\' Affairs, and Commerce committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in the Senate, consistent with the immigration enforcement positions central to his 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill — Defense Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, particularly supporting its defense spending increases. Sheehy used his Armed Services Committee seat to advocate for provisions supporting veterans\' transition programs and military readiness.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using his Senate Armed Services and Veterans\' Affairs Committee assignments to advocate for the package\'s defense spending increases and border security provisions he argued were essential for national security. Sheehy highlighted provisions streamlining energy permitting and expanding domestic production as directly beneficial to Montana\'s energy economy and consistent with the self-reliance principles he emphasized during his 2024 campaign.',
      },
    ],
    keyBills: [
      {
        title: 'Wildfire Aerial Suppression Modernization Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation expanding federal contracts for aerial firefighting resources including the air tanker fleet, drawing directly on his experience founding Bridger Aerospace. Montana faces some of the nation\'s most severe wildfire seasons, and Sheehy argued modernizing the federal aerial firefighting fleet is a critical public safety investment.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'Z000018',
    slug: 'ryan-k-zinke',
    name: 'Ryan K. Zinke',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Montana',
    currentTitle: 'U.S. Representative, Montana 1st District',
    bio: 'Ryan Zinke has represented Montana\'s 1st Congressional District since 2023 in his second stint in the House, having previously served from 2015 to 2017 before joining the Trump cabinet as Secretary of the Interior. A retired Navy SEAL commander, he served as Interior Secretary until 2019 amid ethics investigations. He sits on the House Appropriations and Foreign Affairs committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting military readiness provisions and veterans\' programs. Zinke\'s SEAL background and Interior Department experience inform his strong support for defense spending and natural resources management on federal lands.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with his long-standing support for strong border security measures.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, leveraging his House Appropriations seat to secure energy and public lands provisions he argued would restore responsible development across Montana\'s federal lands after years of Biden-era restrictions. Zinke — drawing on his experience as Interior Secretary — praised the bill\'s border security and energy production titles as essential to Montana\'s sovereignty over its natural resources and the safety of its communities.',
      },
    ],
    keyBills: [
      {
        title: 'Glacier National Park Wildfire and Watershed Protection',
        year: 2023,
        month: 8,
        summary: 'Championed appropriations funding for wildfire mitigation and watershed restoration in the Glacier National Park region within Montana\'s 1st District, drawing on his experience as Interior Secretary to navigate complex federal land management processes and advocate for both conservation and recreational access.',
      },
    ],
  },

  {
    bioguideId: 'D000634',
    slug: 'troy-downing',
    name: 'Troy Downing',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Montana',
    currentTitle: 'U.S. Representative, Montana 2nd District',
    bio: 'Troy Downing was elected to represent Montana\'s newly created 2nd Congressional District in 2024. A businessman, Air Force veteran, and former Montana State Auditor and Commissioner of Securities and Insurance, he oversaw state insurance markets and championed insurance affordability. He serves on the House Financial Services and Small Business committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in office, consistent with the border security and immigration enforcement priorities he emphasized during his 2024 campaign.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, emphasizing its tax relief provisions for small businesses and its regulatory reforms affecting the financial services sector — areas aligned with his Financial Services and Small Business committee assignments.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, using his House Financial Services and Small Business Committee assignments to champion the legislation\'s tax cut extensions and deregulatory provisions he argued would lower costs for Montana\'s small businesses and rural insurance markets. Downing — drawing on his decade as Montana\'s top insurance regulator — highlighted provisions reducing federal regulatory burdens that he argued had driven up insurance premiums for Montana homeowners and farmers.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Insurance Affordability and Market Access Act',
        year: 2025,
        month: 4,
        summary: 'Drew on his experience as Montana State Auditor to introduce legislation addressing insurance market failures in rural states, particularly rising homeowner insurance costs driven by wildfire risk. The bill targeted regulatory barriers preventing new insurers from entering rural markets in states like Montana.',
      },
    ],
  },
]

export const mtDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

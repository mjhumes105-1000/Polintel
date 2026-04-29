import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'M001153',
    slug: 'lisa-murkowski',
    name: 'Lisa Murkowski',
    party: 'R',
    chamber: 'Senate',
    state: 'Alaska',
    currentTitle: 'U.S. Senator from Alaska',
    bio: 'Lisa Murkowski has served in the U.S. Senate since 2002, appointed by her father Governor Frank Murkowski and then famously re-elected in 2010 via a historic write-in campaign after losing the Republican primary — the first successful Senate write-in campaign since 1954. She chairs the Senate Committee on Indian Affairs and is one of Congress\'s most notable Republican moderates, regularly breaking with her party on healthcare, abortion rights, and constitutional issues. She is a senior member of the Appropriations committee and a leading advocate for Alaska\'s Native communities and energy resources.',
    sinceYear: 2003,
    committees: [
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Repeal of Affordable Care Act — "Skinny Repeal"',
        year: 2017,
        month: 7,
        position: 'Against',
        summary: 'Was one of three Republicans — along with Susan Collins and the late John McCain — to vote against the "skinny repeal" of the Affordable Care Act, providing the decisive vote that preserved the law. Murkowski cited concerns about the impact on Alaska\'s Medicaid expansion population and the rural healthcare system.',
      },
      {
        title: 'Bipartisan Infrastructure Law',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the $1.2 trillion Infrastructure Investment and Jobs Act, securing significant investments in Alaska\'s roads, ports, airports, and broadband. Alaska has some of the most extreme infrastructure needs of any state, with vast roadless regions and communities entirely dependent on air or water access.',
      },
      {
        title: 'Second Impeachment of President Trump',
        year: 2021,
        month: 2,
        position: 'For',
        summary: 'Voted to convict President Trump following his second impeachment over the January 6th Capitol attack, one of seven Republicans to do so. Murkowski stated that Trump\'s conduct was a betrayal of his oath of office and made her conviction vote a matter of constitutional principle.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, supporting its energy provisions that open new federal leasing opportunities critical to Alaska\'s resource economy. As a senior member of the Appropriations Committee and Energy and Natural Resources Committee, Murkowski emphasized the bill\'s provisions expanding responsible development on federal lands and securing long-term revenue for Alaska Native communities.',
      },
    ],
    keyBills: [
      {
        title: 'ANILCA Modernization and Alaska Lands Provisions',
        year: 2023,
        month: 8,
        summary: 'Led Senate efforts to update Alaska National Interest Lands Conservation Act provisions governing access and subsistence rights on federal lands in Alaska, addressing conflicts between traditional subsistence hunting and fishing rights for Alaska Native communities and federal wilderness management rules.',
      },
      {
        title: 'Indian Health Service Workforce Expansion',
        year: 2024,
        month: 4,
        summary: 'Championed legislation expanding Indian Health Service provider capacity and telehealth infrastructure as Chair of the Indian Affairs Committee, addressing Alaska Native communities\' severe shortage of healthcare providers, particularly in rural and bush villages accessible only by small aircraft.',
      },
    ],
  },

  {
    bioguideId: 'S001198',
    slug: 'dan-sullivan',
    name: 'Dan Sullivan',
    party: 'R',
    chamber: 'Senate',
    state: 'Alaska',
    currentTitle: 'U.S. Senator from Alaska',
    bio: 'Dan Sullivan has served in the U.S. Senate since 2015 after previously serving as Alaska\'s Attorney General and Commissioner of Natural Resources. A Marine Corps colonel who continues to serve in the reserves, he is a leading Senate voice on military readiness, Pacific deterrence, and Alaska\'s energy and fisheries resources. He serves on the Armed Services, Commerce, Veterans\' Affairs, and Environment committees, and has emerged as a key voice on Indo-Pacific strategy and China competition.',
    sinceYear: 2015,
    committees: [
      { slug: 'ssva', name: 'Senate Committee on Veterans\' Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its energy provisions and withdrawal of Alaskan oil and gas leasing opportunities would harm Alaska\'s economy and undermine U.S. energy security. He called for expanding — not restricting — responsible resource development in Alaska.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024 and championed provisions strengthening Alaska\'s military installations — including Elmendorf-Richardson, Fort Wainwright, and the expanding Fort Greely missile defense complex — as Alaska plays an increasingly central role in Arctic and Pacific defense strategy.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act as a national security measure, arguing that dependence on Chinese-controlled semiconductor supply chains poses unacceptable risks to military readiness and critical infrastructure, including the defense systems stationed in Alaska.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, highlighting its border security funding and provisions expanding Alaskan oil and gas development as essential for Alaska\'s economy and national energy security. As a member of the Armed Services and Commerce Committees, Sullivan also backed the bill\'s defense spending increases that strengthen Alaska\'s military installations at Elmendorf-Richardson and Fort Greely.',
      },
    ],
    keyBills: [
      {
        title: 'Arctic Policy and ANWR Development Provisions',
        year: 2023,
        month: 5,
        summary: 'Championed legislation advancing U.S. Arctic strategy including oil and gas development rights in portions of the Arctic National Wildlife Refuge coastal plain, arguing responsible Alaskan energy development reduces U.S. dependence on imports while supporting Alaska Native corporations\' economic self-determination.',
      },
      {
        title: 'Pacific Defense Initiative Provisions — NDAA',
        year: 2023,
        month: 12,
        summary: 'Led Senate Armed Services work on Pacific deterrence provisions in the NDAA, including strengthening Alaska\'s role in the missile defense architecture and expanding joint exercises with Indo-Pacific allies. Sullivan has been one of the Senate\'s most consistent voices on the strategic importance of Alaska\'s geographic position relative to Russia and China.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'B001323',
    slug: 'nicholas-j-begich-iii',
    name: 'Nicholas J. Begich III',
    party: 'R',
    chamber: 'House',
    district: 0,
    state: 'Alaska',
    currentTitle: 'U.S. Representative, Alaska At-Large',
    bio: 'Nick Begich was elected to represent Alaska\'s at-large House seat in 2024 under Alaska\'s ranked-choice voting system, defeating incumbent Democrat Mary Peltola. The grandson of former U.S. Representative Nick Begich who disappeared in a 1972 plane crash, and nephew of former U.S. Senator Mark Begich, he comes from one of Alaska\'s most prominent political families — though as a Republican rather than following the family\'s Democratic tradition. He serves on the Natural Resources, Transportation, and Science committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssy', name: 'House Committee on Science, Space, and Technology', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in Congress, consistent with the border security positions he emphasized during the 2024 campaign. Alaska\'s remote location and reliance on federal agencies for many services make immigration enforcement a complex issue in the state.',
      },
      {
        title: 'One Big Beautiful Bill — Energy Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, emphasizing its energy provisions expanding Alaskan oil and gas development opportunities including reopening ANWR leasing and reducing federal permitting barriers for resource extraction projects critical to Alaska\'s economy.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, championing its tax cut extensions and energy development provisions that directly benefit Alaska\'s at-large district. As a member of the Natural Resources and Transportation Committees, Begich highlighted the bill\'s rollback of federal permitting barriers as a breakthrough for Alaska\'s resource industries and rural infrastructure projects.',
      },
    ],
    keyBills: [
      {
        title: 'Alaska Roadless Rule Repeal',
        year: 2025,
        month: 4,
        summary: 'Championed legislation and worked with the Natural Resources Committee to support executive efforts repealing the Roadless Rule restrictions that had limited timber harvesting and road construction in the Tongass National Forest. Southeast Alaska\'s timber industry and economic development had been heavily constrained by the rule, and Begich argued it constituted federal overreach into Alaska\'s resource management.',
      },
    ],
  },
]

export const akDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

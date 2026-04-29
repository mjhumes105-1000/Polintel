import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'F000463',
    slug: 'deb-fischer',
    name: 'Deb Fischer',
    party: 'R',
    chamber: 'Senate',
    state: 'Nebraska',
    currentTitle: 'U.S. Senator from Nebraska',
    bio: 'Deb Fischer has served Nebraska in the U.S. Senate since 2013, having previously been a Nebraska State Senator. A rancher from Valentine in the Nebraska Sandhills, she serves on the Senate Armed Services Committee, the Joint Committee on Printing, and the Committee on the Library, and sits on the Select Committee on Ethics. She has been a vocal advocate for nuclear modernization, missile defense, and transportation infrastructure, and won re-election in 2024.',
    sinceYear: 2013,
    committees: [
      { slug: 'ssas', name: 'Senate Committee on Armed Services', chamber: 'Senate', role: 'Member' },
      { slug: 'jspr', name: 'Joint Committee on Printing', chamber: 'Senate', role: 'Member' },
      { slug: 'jslc', name: 'Joint Committee of Congress on the Library', chamber: 'Senate', role: 'Member' },
      { slug: 'slet', name: 'Senate Select Committee on Ethics', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, including provisions she championed for Offutt Air Force Base near Omaha — home to U.S. Strategic Command — and for nuclear modernization programs critical to Nebraska\'s defense economy. Fischer has been a consistent advocate for strategic nuclear deterrence through her Armed Services role.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its corporate minimum tax would harm Nebraska\'s agricultural cooperatives and manufacturers, and that its energy provisions were misguided government intervention in energy markets that would raise costs for Nebraska consumers.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Fischer has supported stricter immigration enforcement throughout her Senate tenure.',
      },
    ],
    keyBills: [
      {
        title: 'Moving Forward Act — Transportation Provisions',
        year: 2022,
        month: 9,
        summary: 'Championed transportation infrastructure provisions through the Senate Commerce Committee targeting rural highway and bridge improvements in Nebraska. Nebraska\'s agricultural economy depends heavily on an extensive rural road network, and Fischer has consistently advocated for federal highway funding formulas that direct resources to low-population rural states.',
      },
      {
        title: 'Prohibiting Russian Uranium Imports Act',
        year: 2024,
        month: 4,
        summary: 'Co-sponsored legislation banning U.S. imports of Russian-enriched uranium, reducing American dependence on foreign nuclear fuel sources. The bill aligned with Fischer\'s strong support for nuclear energy and domestic uranium processing capacity, which she views as essential to both energy independence and maintaining a skilled nuclear workforce.',
      },
    ],
  },

  {
    bioguideId: 'R000618',
    slug: 'pete-ricketts',
    name: 'Pete Ricketts',
    party: 'R',
    chamber: 'Senate',
    state: 'Nebraska',
    currentTitle: 'U.S. Senator from Nebraska',
    bio: 'Pete Ricketts was appointed to the U.S. Senate from Nebraska in January 2023, filling the seat vacated by Ben Sasse who resigned to become president of the University of Florida. A former two-term Nebraska Governor and a member of the Ricketts family that owns the Chicago Cubs, he sits on the Senate Foreign Relations, Environment and Public Works, Banking, and Budget Committees. A fiscal conservative and strong supporter of agricultural trade, he won election to a full Senate term in 2024.',
    sinceYear: 2023,
    committees: [
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'ssev', name: 'Senate Committee on Environment and Public Works', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in the Senate, consistent with his record as Nebraska Governor where he sued the Biden administration over immigration policies and implemented state-level immigration enforcement measures. Ricketts has been one of the Senate\'s most vocal advocates for strict border enforcement.',
      },
      {
        title: 'Against Biden Administration Ukraine Aid Package',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the Ukraine aid supplemental bill, arguing it lacked sufficient oversight mechanisms and that the administration had not articulated a clear strategy for victory. Ricketts was among Senate Republicans who opposed the aid package, reflecting skepticism about open-ended military assistance without defined objectives.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2025,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill through the Budget Committee, supporting its spending reduction framework and tax cut extensions. Ricketts has been a consistent advocate for federal fiscal restraint, drawing on his experience balancing Nebraska\'s state budget as governor.',
      },
    ],
    keyBills: [
      {
        title: 'Agricultural Trade Promotion and Market Access Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation expanding USDA market development programs for Nebraska\'s agricultural exports, particularly for beef, corn, soybeans, and pork in Asian markets. Nebraska is one of the nation\'s top agricultural export states, and Ricketts has used his Foreign Relations Committee seat to push for trade agreements and market access programs that open international markets for Nebraska farmers and ranchers.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'F000474',
    slug: 'mike-flood',
    name: 'Mike Flood',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Nebraska',
    currentTitle: 'U.S. Representative, Nebraska 1st District',
    bio: 'Mike Flood was elected to Nebraska\'s 1st Congressional District in a November 2022 special election, succeeding Jeff Fortenberry who resigned after a federal conviction. A former Nebraska State Legislature Speaker and television broadcaster from Norfolk, he serves on the House Financial Services Committee. His district covers northeastern Nebraska and Lincoln, and he focuses on agricultural finance, rural banking access, and Nebraska\'s ethanol and meat processing industries.',
    sinceYear: 2022,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal in his first full term, supporting spending caps as a necessary step to address the federal debt. Flood has emphasized fiscal responsibility as a core commitment reflecting Nebraska\'s tradition of balanced-budget governance.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, using his Financial Services Committee work to shape provisions affecting Nebraska\'s community banks and agricultural lenders. Flood prioritized provisions protecting rural banking infrastructure from regulatory burdens that he argued disproportionately affect small community lenders.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Community Bank Access Act',
        year: 2024,
        month: 2,
        summary: 'Introduced legislation through the Financial Services Committee reducing regulatory burdens on community banks serving Nebraska\'s rural agricultural communities. Nebraska\'s farm economy depends on a network of small community lenders for operating loans, equipment financing, and land purchases, and Flood has prioritized protecting this financial infrastructure from regulatory consolidation pressures.',
      },
    ],
  },

  {
    bioguideId: 'B001298',
    slug: 'don-bacon',
    name: 'Don Bacon',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Nebraska',
    currentTitle: 'U.S. Representative, Nebraska 2nd District',
    bio: 'Don Bacon has represented Nebraska\'s 2nd Congressional District since 2017, winning competitive elections in the Omaha-area district that has awarded one of its electoral votes to Democratic presidential candidates in 2008 and 2020. A retired Air Force brigadier general who commanded the 55th Wing at Offutt AFB, he serves on the House Agriculture and Armed Services Committees, focusing on defense, Offutt Air Force Base, and bipartisan compromise. He is known as one of the most moderate House Republicans and has worked across the aisle on defense and budget matters.',
    sinceYear: 2017,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, reflecting his longstanding reputation for pragmatic governance. Bacon has consistently supported bipartisan compromise over ideological purity, arguing that the Omaha district\'s competitive nature requires members who can deliver results rather than just make partisan statements.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, using his Armed Services seat and his firsthand experience at Offutt AFB to advocate for U.S. Strategic Command\'s budget and facilities. As a former Offutt wing commander, Bacon brings unique credibility to debates about the base\'s nuclear command-and-control mission.',
      },
      {
        title: 'Ukraine Aid Supplemental',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for Ukraine military aid over objections from more conservative members of his caucus, drawing on his military background to argue that supporting allied democracies against Russian aggression is essential to U.S. national security interests. Bacon has been one of the few House Republicans to consistently support Ukraine aid.',
      },
    ],
    keyBills: [
      {
        title: 'Offutt AFB Flood Recovery and Infrastructure Hardening Act',
        year: 2022,
        month: 6,
        summary: 'Championed legislation funding reconstruction and flood hardening at Offutt AFB following severe Missouri River flooding in 2019 that inundated large portions of the base. The bill secured over $800 million in reconstruction funding and prioritized hardening vulnerable infrastructure against future flood events — protecting the home of U.S. Strategic Command from climate-related risks.',
      },
    ],
  },

  {
    bioguideId: 'S001172',
    slug: 'adrian-smith',
    name: 'Adrian Smith',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Nebraska',
    currentTitle: 'U.S. Representative, Nebraska 3rd District',
    bio: 'Adrian Smith has represented Nebraska\'s 3rd Congressional District since 2007, making him the most senior member of Nebraska\'s House delegation. A former Gering City Council member and small business owner, he serves on the House Ways and Means Committee and the Joint Committee on Taxation, focusing on trade, agricultural tax policy, and fiscal conservatism. His district covers the vast western two-thirds of Nebraska — the most rural and Republican district in the state — including Scottsbluff, North Platte, and the Nebraska Panhandle.',
    sinceYear: 2007,
    committees: [
      { slug: 'jstx', name: 'Joint Committee on Taxation', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act of 2017',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the landmark Republican tax overhaul as a senior Ways and Means member, supporting lower corporate rates and pass-through deductions critical to Nebraska\'s many family farm operations and rural small businesses. Smith has used his Ways and Means position over multiple Congresses to advocate for agricultural tax provisions.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the comprehensive Republican reconciliation bill making TCJA provisions permanent and extending agricultural tax provisions. Smith\'s Ways and Means role gave him influence over the tax title of the bill, and he focused on ensuring provisions beneficial to Nebraska\'s farm families and ranching operations were preserved.',
      },
      {
        title: 'United States-Mexico-Canada Agreement Implementation',
        year: 2020,
        month: 1,
        position: 'For',
        summary: 'Voted for USMCA implementation, viewing it as essential to Nebraska\'s agricultural export economy. Nebraska\'s beef, corn, and ethanol producers depend heavily on Canadian and Mexican markets, and Smith used his Ways and Means trade jurisdiction to advocate for strong agricultural market access provisions.',
      },
    ],
    keyBills: [
      {
        title: 'Renewable Fuel Standard and Bioenergy Act',
        year: 2023,
        month: 5,
        summary: 'Championed legislation through Ways and Means extending and expanding tax incentives for biofuels production, including corn ethanol and advanced cellulosic biofuels. Nebraska is one of the nation\'s top ethanol producers, and the RFS combined with favorable tax treatment is the foundation of the state\'s corn processing economy that Smith has defended for over a decade.',
      },
    ],
  },
]

export const neDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

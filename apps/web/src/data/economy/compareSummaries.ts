/**
 * Authored editorial summaries for select country pairs.
 * Keyed by [slugA, slugB].sort().join(':') — always alphabetical order.
 * When a key is absent the comparison page auto-generates text from trade data.
 */
export interface CompareSummaryText {
  whatsDifferent: string
  whyItMatters: string
}

export const compareSummaries: Record<string, CompareSummaryText> = {

  'canada:china': {
    whatsDifferent:
      'Canada and China are comparable in total U.S. trade volume ($763B vs $575B), but represent structurally different relationships. Canada trades under USMCA with near-zero tariffs on qualifying goods and deep cross-border supply chain integration. China faces layered Section 301 and Section 232 tariffs — some exceeding 100% in specific sectors — with no formal trade agreement governing the relationship.',
    whyItMatters:
      'Both countries are strategically important in energy and critical materials, but through opposing geopolitical lenses. Canada is emerging as a trusted partner for clean energy minerals and supply chain diversification. China is being actively de-risked from U.S. electronics, pharmaceutical, and semiconductor supply chains — making these two relationships the central axis of current U.S. trade strategy.',
  },

  'canada:mexico': {
    whatsDifferent:
      'Canada and Mexico are the two largest U.S. trade partners and both trade under USMCA, but their profiles are structurally distinct. Canada\'s relationship is anchored in energy (crude oil and natural gas represent a large share of imports), shared defense infrastructure, and financial services. Mexico\'s relationship is dominated by automotive manufacturing, electronics assembly, and consumer goods production. Mexico runs a substantially larger goods deficit with the U.S. than Canada does.',
    whyItMatters:
      'Together, Canada and Mexico account for roughly 35% of all U.S. goods trade. USMCA\'s mandatory review in 2026 will cover both relationships simultaneously — understanding their structural differences matters for anticipating where renegotiation friction is most likely to emerge, particularly in auto rules of origin, agricultural access, and energy trade.',
  },

  'china:mexico': {
    whatsDifferent:
      'The U.S.–Mexico relationship is the largest in the world by total volume ($799B), governed by USMCA with near-zero tariffs on qualifying goods and deep cross-border manufacturing integration. The U.S.–China relationship ($575B) carries the largest bilateral goods deficit on earth ($279B) and is governed by escalating tariff barriers — with some sectors facing rates above 100% — rather than a trade agreement.',
    whyItMatters:
      'Mexico and China represent the two competing models for U.S. manufacturing sourcing. As the U.S. seeks to reduce dependence on Chinese supply chains in electronics, pharmaceuticals, and critical materials, Mexico is the primary nearshoring destination — attracting investment in automotive, electronics, and logistics. The Mexico–China comparison is effectively a real-time measure of how that supply chain transition is progressing.',
  },

  'china:japan': {
    whatsDifferent:
      'Japan and China are both top-5 U.S. trade partners and major sources of manufactured imports, but face fundamentally different tariff regimes. U.S.–Japan trade operates under low WTO MFN tariffs with ongoing sectoral negotiations. U.S.–China trade is subject to layered Section 301 tariffs — with rates reaching 100% on EVs and 50% on solar panels — alongside active technology export controls that have no equivalent in the Japan relationship.',
    whyItMatters:
      'Japan and China are both central to the global semiconductor supply chain and automotive industry, but as strategic competitors rather than partners. Japan is a key node in the U.S.-led semiconductor alliance alongside South Korea and Taiwan, and is hosting new TSMC fabrication capacity. In automotive, Japan and China are the two largest sources of imported vehicles with very different policy treatment — reflecting the broader U.S. strategic realignment in Asia.',
  },

  'china:germany': {
    whatsDifferent:
      'Germany and China both run significant goods deficits with the U.S., but the nature of the trade differs entirely. Germany\'s $69B deficit is concentrated in premium vehicles and pharmaceuticals from a high-income NATO ally. China\'s $279B deficit is concentrated in consumer electronics and manufactured goods, compounded by tariff barriers — including 100% on EVs and 25–50% on industrial goods — that have no equivalent in the U.S.–Germany relationship.',
    whyItMatters:
      'Germany and China are the two most consequential sources of bilateral trade tension in their respective regions. Germany has been periodically targeted in Section 232 automobile discussions; China is the primary target of Section 301 industrial and technology tariffs. Germany\'s significant corporate exposure in China also creates friction within NATO over how aggressively to restrict Chinese technology access and investment — making the Germany–China trade comparison a lens into transatlantic policy alignment.',
  },

  'china:vietnam': {
    whatsDifferent:
      'Vietnam has grown into a top-10 U.S. trade partner as manufacturers relocated from China to avoid Section 301 tariffs, now running a roughly $108B deficit with the U.S. Unlike China, Vietnam has no FTA with the U.S. but has attracted substantial foreign investment in electronics, textiles, and footwear. China\'s relationship ($575B, $279B deficit) remains roughly five times larger by volume.',
    whyItMatters:
      'Vietnam\'s trade growth is directly linked to the U.S.–China tariff conflict. Many goods now labeled "Made in Vietnam" incorporate Chinese components or were previously manufactured in China entirely. The U.S. has initiated tariff circumvention investigations into Chinese goods transshipped through Vietnam — making the Vietnam–China comparison a lens for assessing how effective the China tariff strategy actually is at reshaping supply chains versus simply relocating final assembly.',
  },

}

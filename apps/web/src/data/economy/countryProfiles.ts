import type { CountryProfile } from '@political-intel/types'
import censusRaw from './census-trade-data.json'
import htsRaw from './hts-tariff-data.json'
import beaRaw from './bea-investment-data.json'

export const countryProfiles: Record<string, CountryProfile> = {

  // ─── Mexico ──────────────────────────────────────────────────────────────────
  mexico: {
    slug: 'mexico',
    name: 'Mexico',
    officialName: 'United Mexican States',
    flagEmoji: '🇲🇽',
    region: 'Americas',
    tradePartnerRank: 1,
    gdpUSD: 1_320_000_000_000,
    gdpPerCapita: 10_050,
    currency: 'MXN (Mexican Peso)',
    geopoliticalContext: "Mexico is the United States' largest trading partner by total volume, a position cemented by USMCA and decades of supply chain integration across manufacturing, agriculture, and energy. The relationship is uniquely operational — U.S. and Mexican factories share components across the border multiple times before finished goods reach consumers. Tensions center on immigration, fentanyl precursor flows, and Mexico's energy nationalism under Pemex.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 323_400_000_000,
      usImportsUSD: 475_600_000_000,
      tradeBalanceUSD: -152_200_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Electrical Machinery & Equipment', valueUSD: 69_000_000_000, percentOfTotal: 21, direction: 'export' },
        { name: 'Mechanical Machinery', valueUSD: 45_000_000_000, percentOfTotal: 14, direction: 'export' },
        { name: 'Vehicles & Auto Parts', valueUSD: 38_000_000_000, percentOfTotal: 12, direction: 'export' },
        { name: 'Petroleum Products', valueUSD: 25_000_000_000, percentOfTotal: 8, direction: 'export' },
        { name: 'Plastics & Rubber', valueUSD: 18_000_000_000, percentOfTotal: 6, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Vehicles & Auto Parts', valueUSD: 138_000_000_000, percentOfTotal: 29, direction: 'import' },
        { name: 'Electrical Machinery & Equipment', valueUSD: 89_000_000_000, percentOfTotal: 19, direction: 'import' },
        { name: 'Mechanical Machinery', valueUSD: 44_000_000_000, percentOfTotal: 9, direction: 'import' },
        { name: 'Medical Instruments & Devices', valueUSD: 41_000_000_000, percentOfTotal: 9, direction: 'import' },
        { name: 'Agricultural Products', valueUSD: 28_000_000_000, percentOfTotal: 6, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'Qualifying USMCA Goods', rate: 0, status: 'active', effectiveDate: '2020-07-01', legalBasis: 'USMCA', note: 'Zero tariff applies to goods meeting USMCA rules of origin. Auto sector requires 75% North American content and 70% steel/aluminum from North America.' },
      { sector: 'Non-USMCA Goods', rate: 25, status: 'active', effectiveDate: '2025-03-04', legalBasis: 'IEEPA — Fentanyl/Cartel Executive Order', note: 'Non-USMCA-qualifying goods from Mexico subject to 25% tariff under the March 2025 executive order citing fentanyl trafficking and cartel activity. USMCA-compliant goods are explicitly exempted.' },
      { sector: 'Steel & Aluminum (Section 232)', rate: 25, status: 'active', effectiveDate: '2025-03-12', legalBasis: 'Section 232 — USMCA Exemption Revoked', note: 'Section 232 steel (25%) and aluminum (10%) exemptions for USMCA partners were revoked in March 2025. Steel from Mexico once again faces the full 25% Section 232 rate.' },
      { sector: 'Automobiles — Non-Qualifying', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: 'Section 232 tariffs on foreign-manufactured autos (25%) apply to Mexican vehicles not meeting USMCA content rules. Source: USITC HTS 2026, Chapter 87.' },
    ],
    agreement: {
      name: 'USMCA',
      status: 'in-force',
      inForceDate: 'July 1, 2020',
      summary: 'The United States–Mexico–Canada Agreement replaced NAFTA and governs the vast majority of U.S.–Mexico trade. It includes updated rules of origin for automobiles, new digital trade provisions, stronger labor standards, and a sunset review clause every six years.',
      keyProvisions: [
        'Auto sector: 75% North American content required for zero-tariff treatment (up from 62.5% under NAFTA)',
        'Labor: Mexico required to enforce workers\' right to organize and bargain collectively',
        'Digital trade: Prohibits data localization requirements; protects cross-border data flows',
        'Sunset clause: Agreement subject to review every 6 years; full review in 2026',
        'Dispute resolution: Rapid response mechanism for labor rights violations at specific facilities',
      ],
    },
    investment: {
      usFDIAbroadUSD: 115_000_000_000,
      foreignFDIInUSUSD: 18_000_000_000,
      majorUSInvestors: ['General Motors', 'Ford', 'Walmart', 'Citigroup', 'Amazon'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    aid: {
      fiscalYear: '2023',
      totalUSD: 320_000_000,
      economicAssistanceUSD: 195_000_000,
      militaryAssistanceUSD: 85_000_000,
      humanitarianUSD: 40_000_000,
      majorPrograms: ['Mérida Initiative', 'USAID Economic Programs', 'INL Security Assistance'],
      note: 'U.S. security assistance to Mexico has been constrained by human rights conditions tied to the Mérida Initiative.',
    },
    dependencySignals: [
      { category: 'Auto Manufacturing', severity: 'critical', direction: 'mutual', note: 'U.S. and Mexican auto industries are deeply integrated — components cross the border multiple times before final assembly. A supply chain disruption in either country has immediate bilateral effects.' },
      { category: 'Agricultural Products', severity: 'high', direction: 'inbound', note: 'Mexico is the largest supplier of fresh produce to the U.S., including avocados, tomatoes, and berries. Seasonal demand is largely met by Mexican agriculture.' },
      { category: 'Energy', severity: 'high', direction: 'inbound', note: 'Mexico supplies crude oil and natural gas to U.S. refineries, particularly in Texas. Mexican oil production is declining under Pemex.' },
      { category: 'Consumer Goods', severity: 'moderate', direction: 'inbound', note: 'Mexico is a major assembler of electronics and consumer goods, often using U.S.-sourced components.' },
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound', note: 'Some pharmaceutical manufacturing is based in Mexico, though it is not a critical single-source supplier.' },
      { category: 'Semiconductors', severity: 'low', direction: 'inbound', note: 'Limited semiconductor dependence; Mexico is primarily an assembly location, not a chip manufacturer.' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound', note: 'Mexico does not have significant rare earth production relevant to U.S. supply chains.' },
      { category: 'Defense Supply Chain', severity: 'low', direction: 'inbound', note: 'Some defense-adjacent manufacturing occurs in Mexico, particularly in the Baja California corridor.' },
    ],
    sources: [
      { id: 'census-mexico', label: 'U.S. Census Bureau — U.S. Trade with Mexico', url: 'https://www.census.gov/foreign-trade/balance/c2010.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-mexico', label: 'USTR — Mexico', url: 'https://ustr.gov/countries-regions/western-hemisphere/mexico', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
      { id: 'usaid-mexico', label: 'USAID — Mexico', url: 'https://www.usaid.gov/mexico', publisher: 'USAID', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── Canada ───────────────────────────────────────────────────────────────────
  canada: {
    slug: 'canada',
    name: 'Canada',
    officialName: 'Canada',
    flagEmoji: '🇨🇦',
    region: 'Americas',
    tradePartnerRank: 2,
    gdpUSD: 2_140_000_000_000,
    gdpPerCapita: 54_960,
    currency: 'CAD (Canadian Dollar)',
    geopoliticalContext: "Canada and the United States share the world's largest bilateral trade relationship and the longest undefended border. The relationship is anchored by USMCA, energy interdependence, and deeply integrated defense and intelligence cooperation through NATO and NORAD. Canada's largest export to the U.S. is crude oil, making it the single largest foreign energy supplier to the American market.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 349_400_000_000,
      usImportsUSD: 413_300_000_000,
      tradeBalanceUSD: -63_900_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Machinery & Equipment', valueUSD: 54_000_000_000, percentOfTotal: 15, direction: 'export' },
        { name: 'Vehicles & Auto Parts', valueUSD: 50_000_000_000, percentOfTotal: 14, direction: 'export' },
        { name: 'Electrical Equipment', valueUSD: 32_000_000_000, percentOfTotal: 9, direction: 'export' },
        { name: 'Petroleum & Gas', valueUSD: 28_000_000_000, percentOfTotal: 8, direction: 'export' },
        { name: 'Agricultural Products', valueUSD: 25_000_000_000, percentOfTotal: 7, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Crude Oil & Petroleum', valueUSD: 120_000_000_000, percentOfTotal: 29, direction: 'import' },
        { name: 'Vehicles & Auto Parts', valueUSD: 65_000_000_000, percentOfTotal: 16, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 38_000_000_000, percentOfTotal: 9, direction: 'import' },
        { name: 'Agricultural Products', valueUSD: 28_000_000_000, percentOfTotal: 7, direction: 'import' },
        { name: 'Metal Products', valueUSD: 22_000_000_000, percentOfTotal: 5, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'Qualifying USMCA Goods', rate: 0, status: 'active', effectiveDate: '2020-07-01', legalBasis: 'USMCA', note: 'The vast majority of U.S.–Canada goods trade qualifies for zero tariff treatment under USMCA.' },
      { sector: 'Non-USMCA Goods', rate: 25, status: 'active', effectiveDate: '2025-03-04', legalBasis: 'IEEPA — Fentanyl/Cartel Executive Order', note: 'Canadian goods not qualifying under USMCA rules of origin face 25% tariff. Energy and energy products are subject to 10% rate. USMCA-compliant goods remain at 0%.' },
      { sector: 'Steel & Aluminum (Section 232)', rate: 25, status: 'active', effectiveDate: '2025-03-12', legalBasis: 'Section 232 — USMCA Exemption Revoked', note: 'Section 232 exemptions for USMCA partners were revoked in March 2025. Canadian steel now faces the 25% Section 232 rate and aluminum faces 10%.' },
      { sector: 'Softwood Lumber', rate: 8.05, status: 'active', effectiveDate: '2017-06-26', legalBasis: 'Countervailing Duty Order', note: 'Ongoing anti-subsidy dispute. The U.S. argues Canadian provinces subsidize softwood lumber through below-market stumpage fees. Rate subject to periodic administrative review.' },
      { sector: 'Dairy (over TRQ)', rate: 270, status: 'active', effectiveDate: '2020-07-01', legalBasis: 'USMCA Tariff-Rate Quota', note: 'Canada maintains high over-quota tariffs (averaging 270%) to protect its supply-managed dairy sector. U.S. dairy access within TRQ limits is tariff-free.' },
    ],
    agreement: {
      name: 'USMCA',
      status: 'in-force',
      inForceDate: 'July 1, 2020',
      summary: 'USMCA governs U.S.–Canada trade, incorporating Canada\'s agricultural market access commitments, updated IP protections, and digital trade rules. The softwood lumber and dairy disputes operate outside the core USMCA framework through separate legal instruments.',
      keyProvisions: [
        'Dairy: Expanded U.S. access to Canadian dairy market — approximately 3.6% of Canadian dairy consumption',
        'IP: Extended copyright term to life + 70 years; strengthened pharmaceutical data protections',
        'Digital trade: Prohibits customs duties on digital products; protects algorithmic source code',
        'Energy: No separate energy chapter; energy trade governed by national treatment and investment rules',
      ],
    },
    investment: {
      usFDIAbroadUSD: 487_000_000_000,
      foreignFDIInUSUSD: 562_000_000_000,
      majorUSInvestors: ['Amazon', 'Apple', 'Microsoft', 'JPMorgan', 'ExxonMobil'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Energy', severity: 'critical', direction: 'inbound', note: 'Canada is the single largest supplier of crude oil to the United States. The Keystone pipeline system connects Alberta oil sands to U.S. Midwest refineries.' },
      { category: 'Auto Manufacturing', severity: 'high', direction: 'mutual', note: 'The Ontario–Michigan auto corridor is one of the world\'s most integrated manufacturing regions. Canadian plants assemble vehicles for the entire North American market.' },
      { category: 'Agricultural Products', severity: 'moderate', direction: 'mutual', note: 'Bilateral agricultural trade is roughly balanced. Canada supplies grain, canola, and seafood; the U.S. supplies fresh produce and processed foods.' },
      { category: 'Defense Supply Chain', severity: 'moderate', direction: 'mutual', note: 'Canada is a Five Eyes partner and NORAD co-commander. Canadian defense industry is deeply integrated with U.S. contractors.' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'low', direction: 'inbound', note: 'Canada has significant critical mineral reserves and is developing supply chains as an alternative to China. Nickel, cobalt, and lithium deposits are strategically significant.' },
    ],
    sources: [
      { id: 'census-canada', label: 'U.S. Census Bureau — U.S. Trade with Canada', url: 'https://www.census.gov/foreign-trade/balance/c1220.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-canada', label: 'USTR — Canada', url: 'https://ustr.gov/countries-regions/americas/canada', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── China ────────────────────────────────────────────────────────────────────
  china: {
    slug: 'china',
    name: 'China',
    officialName: "People's Republic of China",
    flagEmoji: '🇨🇳',
    region: 'East Asia',
    tradePartnerRank: 3,
    gdpUSD: 17_700_000_000_000,
    gdpPerCapita: 12_540,
    currency: 'CNY (Renminbi)',
    geopoliticalContext: "The U.S.–China trade relationship is defined by structural tension between deep economic interdependence and strategic competition. China accounts for the United States' largest bilateral goods deficit — $279B in FY2023 — concentrated in consumer electronics, industrial machinery, and manufactured goods. Section 301 tariffs introduced from 2018 onward cover over $360 billion of Chinese imports but have not substantially rebalanced the deficit. Both governments have increasingly restricted technology exports, investment, and data flows.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 147_800_000_000,
      usImportsUSD: 427_200_000_000,
      tradeBalanceUSD: -279_400_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Semiconductors & Electronics', valueUSD: 29_000_000_000, percentOfTotal: 20, direction: 'export' },
        { name: 'Agricultural Products', valueUSD: 26_000_000_000, percentOfTotal: 18, direction: 'export' },
        { name: 'Aircraft & Parts', valueUSD: 18_000_000_000, percentOfTotal: 12, direction: 'export' },
        { name: 'Chemicals & Pharmaceuticals', valueUSD: 15_000_000_000, percentOfTotal: 10, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 14_000_000_000, percentOfTotal: 10, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Electronics & Computers', valueUSD: 167_000_000_000, percentOfTotal: 39, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 58_000_000_000, percentOfTotal: 14, direction: 'import' },
        { name: 'Furniture & Bedding', valueUSD: 25_000_000_000, percentOfTotal: 6, direction: 'import' },
        { name: 'Toys, Games & Sporting Goods', valueUSD: 22_000_000_000, percentOfTotal: 5, direction: 'import' },
        { name: 'Plastics & Rubber Products', valueUSD: 18_000_000_000, percentOfTotal: 4, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'Most Chinese Goods (2025)', rate: 145, status: 'active', effectiveDate: '2025-04-09', legalBasis: 'IEEPA + Section 301 (Combined)', note: 'As of April 9, 2025, most Chinese goods face an effective rate of approximately 145%: 34% new IEEPA tariff + 10% prior IEEPA base + prior Section 301 tariffs (7.5–25%). Highest effective tariff rate in modern U.S. trade history. Source: White House Executive Order, April 2025.' },
      { sector: 'Electric Vehicles', rate: 125, status: 'active', effectiveDate: '2025-04-09', legalBasis: 'IEEPA + Section 301 (EV)', note: 'Chinese EVs face 100% Section 301 rate (effective Sept 2024) plus additional IEEPA duties. Combined effective rate exceeds 125%. Nearly bars market entry.' },
      { sector: 'Solar Cells & Panels', rate: 95, status: 'active', effectiveDate: '2025-04-09', legalBasis: 'Section 301 + IEEPA + Section 201', note: '50% Section 301 rate (raised June 2024) plus 10-25% IEEPA additional duties. Separate antidumping/CVD orders apply from specific Chinese facilities.' },
      { sector: 'Steel Products', rate: 50, status: 'active', effectiveDate: '2025-04-09', legalBasis: 'Section 232 + IEEPA', note: '25% Section 232 national security tariff plus IEEPA additional duties. China has no TRQ arrangement or exemption pathway.' },
      { sector: 'Semiconductors (Legacy)', rate: 50, status: 'active', effectiveDate: '2025-04-09', legalBasis: 'Section 301 — USTR Four-Year Review', note: '50% rate on Chinese legacy semiconductors under Section 301 four-year review (effective 2025). Advanced chips were blocked by export controls before this tariff layer.' },
    ],
    agreement: {
      name: 'No FTA — WTO MFN',
      status: 'none',
      summary: "No free trade agreement exists between the U.S. and China. Trade is governed by WTO Most-Favored-Nation rules, substantially supplemented by Section 301 tariffs (trade practices) and Section 232 national security tariffs. The Phase 1 trade deal signed in January 2020 expired without full implementation of Chinese purchase commitments.",
    },
    investment: {
      usFDIAbroadUSD: 130_000_000_000,
      foreignFDIInUSUSD: 65_000_000_000,
      majorUSInvestors: ['Apple', 'General Motors', 'Boeing', 'Intel', 'Qualcomm'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Rare Earth Minerals', severity: 'critical', direction: 'inbound', note: 'China controls approximately 60% of global rare earth mining and 85% of processing capacity. These minerals are critical inputs for defense electronics, EV batteries, wind turbines, and semiconductors.' },
      { category: 'Consumer Goods', severity: 'critical', direction: 'inbound', note: 'The U.S. is structurally dependent on Chinese manufacturing for consumer electronics, appliances, and household goods. Tariffs have shifted some production but have not resolved the underlying concentration.' },
      { category: 'Semiconductors', severity: 'high', direction: 'inbound', note: 'China is the dominant global location for semiconductor assembly, test, and packaging (ATP). U.S. chip companies design in the U.S. but rely on Chinese facilities for volume production of lower-end chips.' },
      { category: 'Pharmaceuticals', severity: 'high', direction: 'inbound', note: 'China is the dominant global producer of active pharmaceutical ingredients (APIs). The U.S. generic drug supply has significant concentration risk in Chinese chemical supply chains.' },
      { category: 'Auto Manufacturing', severity: 'moderate', direction: 'inbound', note: 'Chinese-sourced auto parts are embedded in U.S. supply chains despite tariffs. EVs from China are largely blocked by 100% tariffs, but components are not.' },
      { category: 'Agricultural Products', severity: 'low', direction: 'outbound', note: 'China is one of the largest buyers of U.S. soybeans, corn, and pork — providing U.S. agricultural exporters with leverage in trade negotiations.' },
      { category: 'Defense Supply Chain', severity: 'high', direction: 'inbound', note: 'The U.S. defense industrial base has significant exposure to Chinese-sourced materials, magnets, and components despite active efforts to diversify under the Defense Production Act.' },
      { category: 'Energy', severity: 'none', direction: 'inbound', note: 'The U.S. does not meaningfully depend on Chinese energy imports.' },
    ],
    sources: [
      { id: 'census-china', label: 'U.S. Census Bureau — U.S. Trade with China', url: 'https://www.census.gov/foreign-trade/balance/c5700.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-china', label: 'USTR — People\'s Republic of China', url: 'https://ustr.gov/countries-regions/china-mongolia-taiwan/peoples-republic-china', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
      { id: 'bea-china', label: 'BEA — U.S. Direct Investment Abroad: China', url: 'https://www.bea.gov/international/di1usdbal', publisher: 'Bureau of Economic Analysis', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },

  // ─── Germany ──────────────────────────────────────────────────────────────────
  germany: {
    slug: 'germany',
    name: 'Germany',
    officialName: 'Federal Republic of Germany',
    flagEmoji: '🇩🇪',
    region: 'Europe',
    tradePartnerRank: 4,
    gdpUSD: 4_430_000_000_000,
    gdpPerCapita: 52_800,
    currency: 'EUR (Euro)',
    geopoliticalContext: "Germany is the United States' largest European trading partner and a cornerstone NATO ally. The bilateral relationship is anchored in shared democratic values and deep economic integration, though periodic friction exists over defense spending commitments and trade imbalances. Germany's auto industry — BMW, Mercedes, Volkswagen — is the dominant driver of the bilateral goods deficit. The absence of a U.S.–EU free trade agreement (TTIP negotiations collapsed in 2016) means WTO MFN rates apply to most goods.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 79_300_000_000,
      usImportsUSD: 148_700_000_000,
      tradeBalanceUSD: -69_400_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 14_000_000_000, percentOfTotal: 18, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 12_000_000_000, percentOfTotal: 15, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 10_000_000_000, percentOfTotal: 13, direction: 'export' },
        { name: 'Vehicles & Auto Parts', valueUSD: 8_000_000_000, percentOfTotal: 10, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Vehicles & Auto Parts', valueUSD: 52_000_000_000, percentOfTotal: 35, direction: 'import' },
        { name: 'Pharmaceutical Products', valueUSD: 22_000_000_000, percentOfTotal: 15, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 18_000_000_000, percentOfTotal: 12, direction: 'import' },
        { name: 'Chemical Products', valueUSD: 12_000_000_000, percentOfTotal: 8, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: 'Universal 10% baseline tariff on all U.S. imports took effect April 5, 2025 under IEEPA executive order. Applies to all German goods during the 90-day pause period.' },
      { sector: 'EU Reciprocal Tariff', rate: 20, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — EU Reciprocal Rate (Paused)', note: '20% country-specific rate announced April 2, 2025 for the EU. 90-day pause in effect through July 9, 2025 — current rate is 10% baseline. Rate reflects U.S. calculation of EU barriers to U.S. goods.' },
      { sector: 'Automobiles', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: '25% Section 232 tariff on imported passenger vehicles and light trucks effective May 3, 2025. This is additive to the IEEPA baseline and targets the auto deficit with Germany directly. Source: USITC HTS 2026, 8703.xx: MFN 2.5% + 22.5% Section 232.' },
      { sector: 'Steel (Section 232 — TRQ)', rate: 25, status: 'suspended', effectiveDate: '2021-10-31', legalBasis: 'Section 232 — EU TRQ Arrangement', note: 'Section 232 tariffs suspended within quota limits under 2021 U.S.–EU arrangement. Future of TRQ uncertain under new 2025 tariff posture; subject to review.' },
    ],
    agreement: {
      name: 'No U.S.–EU FTA',
      status: 'none',
      summary: "No bilateral free trade agreement exists between the United States and Germany. The Transatlantic Trade and Investment Partnership (TTIP) negotiations were launched in 2013 but effectively collapsed in 2016. Trade is governed by WTO MFN rules. The EU–U.S. relationship is managed at the EU level through the Trade and Technology Council (TTC).",
    },
    investment: {
      usFDIAbroadUSD: 189_000_000_000,
      foreignFDIInUSUSD: 678_000_000_000,
      majorUSInvestors: ['Amazon', 'Google', 'Microsoft', 'Ford', 'ExxonMobil'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Auto Manufacturing', severity: 'moderate', direction: 'inbound', note: 'German luxury and premium vehicles dominate the U.S. import-deficit in autos. BMW, Mercedes, and Volkswagen all manufacture in the U.S. as well, moderating the dependency.' },
      { category: 'Pharmaceuticals', severity: 'moderate', direction: 'inbound', note: 'Germany is a major producer of specialty pharmaceuticals and APIs. Bayer, Merck KGaA, and Boehringer Ingelheim have significant U.S. market presence.' },
      { category: 'Defense Supply Chain', severity: 'low', direction: 'mutual', note: 'Germany is a NATO ally and major defense partner. Rheinmetall and other German defense companies are key NATO suppliers, though Germany has not met the 2% GDP defense spending target consistently.' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-germany', label: 'U.S. Census Bureau — U.S. Trade with Germany', url: 'https://www.census.gov/foreign-trade/balance/c4280.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-germany', label: 'USTR — European Union', url: 'https://ustr.gov/countries-regions/europe-middle-east/europe/european-union', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── Japan ────────────────────────────────────────────────────────────────────
  japan: {
    slug: 'japan',
    name: 'Japan',
    officialName: 'Japan',
    flagEmoji: '🇯🇵',
    region: 'East Asia',
    tradePartnerRank: 5,
    gdpUSD: 4_230_000_000_000,
    gdpPerCapita: 33_950,
    currency: 'JPY (Japanese Yen)',
    geopoliticalContext: "Japan is one of the United States' most important strategic partners in the Indo-Pacific, serving as the cornerstone of the U.S. alliance network in Asia. The economic relationship runs deep — Japan is the largest foreign holder of U.S. Treasury securities and has massive direct investment in U.S. manufacturing. The trade deficit is driven primarily by Japanese autos, though Japanese companies like Toyota and Honda produce millions of vehicles in the United States each year.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 75_200_000_000,
      usImportsUSD: 143_500_000_000,
      tradeBalanceUSD: -68_300_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Agricultural Products', valueUSD: 14_000_000_000, percentOfTotal: 19, direction: 'export' },
        { name: 'Aircraft & Parts', valueUSD: 12_000_000_000, percentOfTotal: 16, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 8_000_000_000, percentOfTotal: 11, direction: 'export' },
        { name: 'Semiconductor Equipment', valueUSD: 7_000_000_000, percentOfTotal: 9, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Vehicles & Auto Parts', valueUSD: 52_000_000_000, percentOfTotal: 36, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 22_000_000_000, percentOfTotal: 15, direction: 'import' },
        { name: 'Electronics & Components', valueUSD: 18_000_000_000, percentOfTotal: 13, direction: 'import' },
        { name: 'Chemical Products', valueUSD: 10_000_000_000, percentOfTotal: 7, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: 'Universal 10% baseline tariff on all U.S. imports took effect April 5, 2025. Applies to Japanese goods during the 90-day pause.' },
      { sector: 'Japan Reciprocal Tariff', rate: 24, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — Japan Reciprocal Rate (Paused)', note: '24% country-specific rate announced April 2, 2025 for Japan. 90-day pause in effect through July 9, 2025; 10% baseline applies during pause. Japan has entered active negotiations with the U.S.' },
      { sector: 'Automobiles', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: '25% Section 232 tariff on imported passenger vehicles effective May 3, 2025 — a significant blow given autos are Japan\'s largest U.S. export. Source: USITC HTS 2026, 8703.xx: MFN 2.5% + 22.5% Section 232.' },
      { sector: 'Agricultural Products', rate: 0, status: 'active', effectiveDate: '2020-01-01', legalBasis: 'U.S.–Japan Trade Agreement', note: 'Tariff-free access for approximately $7.2B of U.S. agricultural exports under the 2020 trade agreement. Separate from the 2025 IEEPA tariffs which apply to Japanese goods.' },
      { sector: 'Steel (Section 232)', rate: 25, status: 'active', effectiveDate: '2018-06-01', legalBasis: 'Section 232', note: 'Section 232 steel tariffs continue to apply to Japanese steel imports. Japan has not reached a TRQ arrangement with the U.S. unlike the EU and UK.' },
    ],
    agreement: {
      name: 'U.S.–Japan Trade Agreement (Limited)',
      status: 'in-force',
      inForceDate: 'January 1, 2020',
      summary: "The 2019 U.S.–Japan Trade Agreement is a limited sectoral deal covering agriculture and digital trade — it is not a comprehensive free trade agreement. The U.S. withdrew from TPP in 2017, removing the most viable path to a broad U.S.–Japan FTA. Tariffs on manufactured goods, including autos, remain at MFN levels.",
      keyProvisions: [
        'Agriculture: Eliminated or reduced tariffs on approximately $7.2B of U.S. farm exports',
        'Digital trade: Prohibition on data localization; protection of source code; customs-duty-free on digital products',
        'Autos: Japan committed to maintaining 0% tariff on U.S. vehicles',
      ],
    },
    investment: {
      usFDIAbroadUSD: 148_000_000_000,
      foreignFDIInUSUSD: 783_000_000_000,
      majorUSInvestors: ['Amazon', 'Apple', 'Walmart', 'IBM', 'Procter & Gamble'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Auto Manufacturing', severity: 'high', direction: 'inbound', note: 'Japan is the dominant source of the U.S. auto trade deficit. However, Toyota, Honda, and others manufacture extensively in the U.S., partially offsetting raw import dependence.' },
      { category: 'Semiconductors', severity: 'moderate', direction: 'mutual', note: 'Japan produces advanced semiconductor manufacturing equipment and specialty chemicals essential to chip production globally. The U.S.–Japan semiconductor cooperation has deepened significantly since 2022.' },
      { category: 'Defense Supply Chain', severity: 'moderate', direction: 'mutual', note: 'Japan hosts major U.S. military installations and contributes to regional deterrence. Japan\'s defense industry is a significant but secondary partner in co-production agreements.' },
      { category: 'Agricultural Products', severity: 'low', direction: 'outbound', note: 'Japan is a major buyer of U.S. beef, pork, corn, and soybeans. U.S. agricultural exports benefit significantly from Japanese market access.' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-japan', label: 'U.S. Census Bureau — U.S. Trade with Japan', url: 'https://www.census.gov/foreign-trade/balance/c5880.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-japan', label: 'USTR — Japan', url: 'https://ustr.gov/countries-regions/japan-korea-apec/japan', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── South Korea ─────────────────────────────────────────────────────────────
  'south-korea': {
    slug: 'south-korea',
    name: 'South Korea',
    officialName: 'Republic of Korea',
    flagEmoji: '🇰🇷',
    region: 'East Asia',
    tradePartnerRank: 6,
    gdpUSD: 1_710_000_000_000,
    gdpPerCapita: 33_190,
    currency: 'KRW (South Korean Won)',
    geopoliticalContext: "South Korea is a U.S. treaty ally and a major economic partner, home to the KORUS free trade agreement and significant U.S. military presence. The Korean semiconductor and battery industries — Samsung, SK Hynix, LG Energy Solution — are central to U.S. supply chain resilience strategy. The CHIPS Act and Inflation Reduction Act have drawn major Korean investment into U.S. manufacturing.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 70_800_000_000,
      usImportsUSD: 114_900_000_000,
      tradeBalanceUSD: -44_100_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 12_000_000_000, percentOfTotal: 17, direction: 'export' },
        { name: 'Semiconductor Equipment', valueUSD: 10_000_000_000, percentOfTotal: 14, direction: 'export' },
        { name: 'Agricultural Products', valueUSD: 7_000_000_000, percentOfTotal: 10, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Vehicles & Auto Parts', valueUSD: 32_000_000_000, percentOfTotal: 28, direction: 'import' },
        { name: 'Semiconductors & Components', valueUSD: 28_000_000_000, percentOfTotal: 24, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 14_000_000_000, percentOfTotal: 12, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'KORUS-Qualifying Goods', rate: 0, status: 'active', effectiveDate: '2012-03-15', legalBasis: 'KORUS FTA', note: 'The KORUS FTA eliminated tariffs on most manufactured goods at entry into force in 2012. Goods meeting KORUS rules of origin continue to enter duty-free. Source: USITC HTS 2026, Special column: Free (KR).' },
      { sector: 'Non-KORUS Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline tariff applies to Korean goods not covered by KORUS exemptions. The interaction of the 2025 IEEPA tariffs with KORUS-qualifying goods is under legal review.' },
      { sector: 'Korea Reciprocal Tariff', rate: 25, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — Korea Reciprocal Rate (Paused)', note: '25% country-specific rate announced April 2, 2025 for South Korea. 90-day pause in effect through July 9, 2025. The Trump administration has indicated KORUS goods may be exempted pending negotiations.' },
      { sector: 'Steel (Section 232)', rate: 25, status: 'active', effectiveDate: '2018-03-23', legalBasis: 'Section 232 — Quota Arrangement', note: 'South Korea agreed to a steel quota arrangement limiting exports to approximately 70% of the 2015–17 average. Quota volumes are tariff-free; above-quota steel faces 25% Section 232 rate.' },
    ],
    agreement: {
      name: 'KORUS FTA',
      status: 'in-force',
      inForceDate: 'March 15, 2012',
      summary: 'The Korea–U.S. Free Trade Agreement (KORUS) is one of the most commercially significant U.S. FTAs, covering roughly $200B in bilateral trade. It was renegotiated in 2018 to address auto trade imbalances.',
    },
    investment: {
      usFDIAbroadUSD: 45_000_000_000,
      foreignFDIInUSUSD: 78_000_000_000,
      majorUSInvestors: ['Amazon', 'Apple', 'Google', 'Goldman Sachs'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Semiconductors', severity: 'critical', direction: 'inbound', note: 'South Korea — through Samsung and SK Hynix — produces the majority of global DRAM and NAND flash memory. U.S. electronics and data center infrastructure is critically dependent on Korean memory chips.' },
      { category: 'Auto Manufacturing', severity: 'moderate', direction: 'inbound', note: 'Hyundai and Kia are major U.S. market players. Both companies have announced significant U.S. manufacturing investments following IRA incentives.' },
      { category: 'Defense Supply Chain', severity: 'moderate', direction: 'mutual', note: '28,500 U.S. troops are stationed in South Korea. The alliance is the cornerstone of Northeast Asian security.' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Pharmaceuticals', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'low', direction: 'outbound' },
    ],
    sources: [
      { id: 'census-korea', label: 'U.S. Census Bureau — U.S. Trade with South Korea', url: 'https://www.census.gov/foreign-trade/balance/c5800.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-korea', label: 'USTR — Korea', url: 'https://ustr.gov/countries-regions/japan-korea-apec/korea', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── United Kingdom ───────────────────────────────────────────────────────────
  'united-kingdom': {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    officialName: 'United Kingdom of Great Britain and Northern Ireland',
    flagEmoji: '🇬🇧',
    region: 'Europe',
    tradePartnerRank: 7,
    gdpUSD: 3_080_000_000_000,
    gdpPerCapita: 46_370,
    currency: 'GBP (British Pound)',
    geopoliticalContext: "The U.S.–UK relationship is the United States' only bilateral goods trade surplus among its top trading partners — a distinction driven by strong U.S. pharmaceutical and aerospace exports. Post-Brexit, the UK has been seeking a U.S. FTA, which the Biden and Trump administrations have both indicated support for in principle, though no formal agreement has been concluded. The Five Eyes intelligence alliance and NATO membership anchor the strategic relationship.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 81_700_000_000,
      usImportsUSD: 67_300_000_000,
      tradeBalanceUSD: 14_400_000_000,
      balance: 'surplus',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 16_000_000_000, percentOfTotal: 20, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 14_000_000_000, percentOfTotal: 17, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 11_000_000_000, percentOfTotal: 13, direction: 'export' },
        { name: 'Vehicles & Auto Parts', valueUSD: 8_000_000_000, percentOfTotal: 10, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Pharmaceutical Products', valueUSD: 18_000_000_000, percentOfTotal: 27, direction: 'import' },
        { name: 'Beverages (Spirits)', valueUSD: 9_000_000_000, percentOfTotal: 13, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 8_000_000_000, percentOfTotal: 12, direction: 'import' },
        { name: 'Vehicles & Auto Parts', valueUSD: 6_000_000_000, percentOfTotal: 9, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: 'UK received the 10% universal baseline — the same rate as all countries and notably not a higher country-specific rate. This reflects the strong U.S.–UK relationship and active FTA discussions. A bilateral deal could remove this tariff.' },
      { sector: 'Automobiles', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: '25% Section 232 tariff on imported passenger vehicles effective May 3, 2025. Applies to UK-manufactured cars (Rolls-Royce, Jaguar Land Rover, Mini). Source: USITC HTS 2026, 8703.xx.' },
      { sector: 'Steel (Section 232 — TRQ)', rate: 25, status: 'suspended', effectiveDate: '2022-05-31', legalBasis: 'Section 232 — UK TRQ Arrangement', note: 'Section 232 tariffs suspended within TRQ limits under May 2022 U.S.–UK arrangement.' },
    ],
    agreement: {
      name: 'No FTA — Under Discussion',
      status: 'negotiating',
      summary: "No free trade agreement is currently in force between the U.S. and the UK. Post-Brexit FTA negotiations began in 2020 but have proceeded slowly. Tariffs on most goods remain at MFN levels under WTO rules. A limited trade deal covering specific sectors may precede a comprehensive agreement.",
    },
    investment: {
      usFDIAbroadUSD: 855_000_000_000,
      foreignFDIInUSUSD: 567_000_000_000,
      majorUSInvestors: ['JPMorgan', 'Goldman Sachs', 'Amazon', 'Google', 'Microsoft'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound', note: 'The UK is a significant pharmaceutical producer; AstraZeneca and GSK are major suppliers to the U.S. market.' },
      { category: 'Defense Supply Chain', severity: 'moderate', direction: 'mutual', note: 'The UK is the closest U.S. defense partner outside of the Five Eyes. BAE Systems, Rolls-Royce, and other UK firms are embedded in U.S. defense procurement.' },
      { category: 'Consumer Goods', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'low', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-uk', label: 'U.S. Census Bureau — U.S. Trade with United Kingdom', url: 'https://www.census.gov/foreign-trade/balance/c4120.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-uk', label: 'USTR — United Kingdom', url: 'https://ustr.gov/countries-regions/europe-middle-east/europe/united-kingdom', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── Vietnam ──────────────────────────────────────────────────────────────────
  vietnam: {
    slug: 'vietnam',
    name: 'Vietnam',
    officialName: 'Socialist Republic of Vietnam',
    flagEmoji: '🇻🇳',
    region: 'Southeast Asia',
    tradePartnerRank: 8,
    gdpUSD: 433_000_000_000,
    gdpPerCapita: 4_480,
    currency: 'VND (Vietnamese Dong)',
    geopoliticalContext: "Vietnam has emerged as one of the most significant beneficiaries of U.S.–China trade tensions, with manufacturers shifting production from China to Vietnam to avoid Section 301 tariffs. The bilateral trade deficit with Vietnam has grown dramatically over the past decade. Despite this imbalance, the U.S. and Vietnam maintain a Comprehensive Strategic Partnership, and Vietnam hosts growing U.S. technology manufacturing, particularly from Samsung, Intel, and Apple suppliers.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 16_700_000_000,
      usImportsUSD: 121_400_000_000,
      tradeBalanceUSD: -104_700_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Agricultural Products', valueUSD: 4_000_000_000, percentOfTotal: 24, direction: 'export' },
        { name: 'Semiconductor Equipment', valueUSD: 3_000_000_000, percentOfTotal: 18, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 2_500_000_000, percentOfTotal: 15, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Electronics & Components', valueUSD: 55_000_000_000, percentOfTotal: 45, direction: 'import' },
        { name: 'Apparel & Footwear', valueUSD: 22_000_000_000, percentOfTotal: 18, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 14_000_000_000, percentOfTotal: 12, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during the 90-day pause (April 9–July 9, 2025).' },
      { sector: 'Vietnam Reciprocal Tariff', rate: 46, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — Vietnam Reciprocal Rate (Paused)', note: '46% country-specific rate announced April 2, 2025 for Vietnam — among the highest in the schedule, reflecting the large U.S. trade deficit and the concern that Vietnamese exports include China-origin goods routed through Vietnam to avoid Section 301 tariffs.' },
      { sector: 'Electronics & Apparel (MFN Baseline)', rate: 3.5, status: 'active', effectiveDate: '2007-01-11', legalBasis: 'WTO MFN — NTR', note: 'Applicable MFN rate before 2025 executive order additions. Electronics enter at 0% under ITA; apparel at 16.5% (cotton T-shirts, HTS 6109.10.00). Source: USITC HTS 2026.' },
    ],
    agreement: {
      name: 'No FTA — IPEF Observer',
      status: 'none',
      summary: "No free trade agreement is in force between the U.S. and Vietnam. Vietnam was a signatory to TPP before U.S. withdrawal in 2017; the agreement proceeded as CPTPP without the U.S. Vietnam participates in the Indo-Pacific Economic Framework (IPEF), though no binding trade commitments have been finalized.",
    },
    investment: {
      usFDIAbroadUSD: 3_000_000_000,
      foreignFDIInUSUSD: 500_000_000,
      majorUSInvestors: ['Intel', 'Apple (supply chain)', 'Nike', 'Gap'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    aid: {
      fiscalYear: '2023',
      totalUSD: 156_000_000,
      economicAssistanceUSD: 90_000_000,
      militaryAssistanceUSD: 30_000_000,
      humanitarianUSD: 36_000_000,
      majorPrograms: ['USAID Health Programs', 'PEPFAR', 'FMF Security Assistance'],
    },
    dependencySignals: [
      { category: 'Consumer Goods', severity: 'high', direction: 'inbound', note: 'Vietnam has become the dominant U.S. source for electronics assembly, apparel, and footwear — a position built partly through production shifts from China.' },
      { category: 'Semiconductors', severity: 'moderate', direction: 'inbound', note: 'Vietnam hosts Samsung\'s largest global smartphone factory and significant semiconductor assembly and test facilities. Intel operates a major chip assembly site in Ho Chi Minh City.' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'none', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Pharmaceuticals', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'low', direction: 'inbound', note: 'Vietnam has significant rare earth deposits, primarily in the north. Development is nascent but strategically relevant as an alternative to Chinese supply.' },
    ],
    sources: [
      { id: 'census-vietnam', label: 'U.S. Census Bureau — U.S. Trade with Vietnam', url: 'https://www.census.gov/foreign-trade/balance/c5520.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'usaid-vietnam', label: 'USAID — Vietnam', url: 'https://www.usaid.gov/vietnam', publisher: 'USAID', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── India ────────────────────────────────────────────────────────────────────
  india: {
    slug: 'india',
    name: 'India',
    officialName: 'Republic of India',
    flagEmoji: '🇮🇳',
    region: 'South Asia',
    tradePartnerRank: 9,
    gdpUSD: 3_550_000_000_000,
    gdpPerCapita: 2_480,
    currency: 'INR (Indian Rupee)',
    geopoliticalContext: "India is an increasingly important U.S. strategic partner through the Quad alliance and a growing economic relationship, though the bilateral trade relationship is complicated by persistent market access barriers in India and high Indian tariffs on U.S. goods. India is the world's largest generic pharmaceutical supplier — its API and finished dose production is deeply integrated into U.S. supply chains. The U.S. designated India a Generalized System of Preferences (GSP) beneficiary for decades before terminating the designation in 2019.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 41_800_000_000,
      usImportsUSD: 87_500_000_000,
      tradeBalanceUSD: -45_700_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 8_000_000_000, percentOfTotal: 19, direction: 'export' },
        { name: 'Petroleum & Gas', valueUSD: 6_000_000_000, percentOfTotal: 14, direction: 'export' },
        { name: 'Defense Equipment', valueUSD: 5_000_000_000, percentOfTotal: 12, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Pharmaceutical Products', valueUSD: 22_000_000_000, percentOfTotal: 25, direction: 'import' },
        { name: 'IT & Software Services', valueUSD: 18_000_000_000, percentOfTotal: 21, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 10_000_000_000, percentOfTotal: 11, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during the 90-day pause.' },
      { sector: 'India Reciprocal Tariff', rate: 26, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — India Reciprocal Rate (Paused)', note: '26% country-specific rate announced April 2, 2025 for India. 90-day pause in effect through July 9, 2025. India has initiated trade talks with the U.S. to negotiate market access concessions.' },
      { sector: 'Pharmaceuticals (MFN)', rate: 0, status: 'active', effectiveDate: '1995-01-01', legalBasis: 'WTO MFN — Zero Duty (Pharma)', note: 'Pharmaceuticals enter duty-free under MFN (HTS Chapter 30). Source: USITC HTS 2026, 3004.xx: Free. This is critical given Indian generics dominate the U.S. market.' },
      { sector: 'Steel (Section 232)', rate: 25, status: 'active', effectiveDate: '2018-06-01', legalBasis: 'Section 232', note: 'India was not granted a Section 232 exemption and has not reached a quota arrangement. India retaliated with tariffs on U.S. goods including almonds and apples.' },
    ],
    agreement: {
      name: 'No FTA — Mini-Deal Framework',
      status: 'negotiating',
      summary: "No free trade agreement is in force between the U.S. and India. GSP benefits — which provided duty-free treatment for approximately $5.6B of Indian exports — were terminated in 2019. The U.S. and India have discussed a limited trade package addressing key market access irritants, but a comprehensive FTA faces significant political barriers in both countries.",
    },
    investment: {
      usFDIAbroadUSD: 47_000_000_000,
      foreignFDIInUSUSD: 12_000_000_000,
      majorUSInvestors: ['Google', 'Amazon', 'Walmart (Flipkart)', 'Apple (manufacturing shift)'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    aid: {
      fiscalYear: '2023',
      totalUSD: 195_000_000,
      economicAssistanceUSD: 140_000_000,
      humanitarianUSD: 55_000_000,
      majorPrograms: ['USAID Health Programs', 'Clean Energy Finance', 'PEPFAR'],
    },
    dependencySignals: [
      { category: 'Pharmaceuticals', severity: 'high', direction: 'inbound', note: 'India produces approximately 40% of generic drugs consumed in the United States. The U.S. FDA has more inspections in India than in any other country outside the U.S.' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'low', direction: 'mutual', note: 'India is a major U.S. defense customer — F-16s, Apache helicopters, P-8 Poseidon aircraft. The Quad deepens defense industrial cooperation.' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-india', label: 'U.S. Census Bureau — U.S. Trade with India', url: 'https://www.census.gov/foreign-trade/balance/c5330.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-india', label: 'USTR — India', url: 'https://ustr.gov/countries-regions/south-central-asia/india', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── Taiwan ───────────────────────────────────────────────────────────────────
  taiwan: {
    slug: 'taiwan',
    name: 'Taiwan',
    officialName: 'Taiwan (Republic of China)',
    flagEmoji: '🇹🇼',
    region: 'East Asia',
    tradePartnerRank: 10,
    gdpUSD: 751_000_000_000,
    gdpPerCapita: 32_340,
    currency: 'TWD (New Taiwan Dollar)',
    geopoliticalContext: "Taiwan occupies a unique position in U.S. strategic thinking: it produces the majority of the world's most advanced semiconductors, yet the U.S. has no formal diplomatic recognition and operates under the deliberately ambiguous One China policy. TSMC's dominance in advanced chip fabrication — including producing chips for Apple, NVIDIA, and the U.S. defense sector — makes Taiwan's security a direct U.S. economic interest. The CHIPS Act has incentivized TSMC to build advanced fabs in Arizona.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 29_800_000_000,
      usImportsUSD: 98_800_000_000,
      tradeBalanceUSD: -69_000_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Semiconductor Manufacturing Equipment', valueUSD: 9_000_000_000, percentOfTotal: 30, direction: 'export' },
        { name: 'Agricultural Products', valueUSD: 5_000_000_000, percentOfTotal: 17, direction: 'export' },
        { name: 'Aircraft & Aerospace', valueUSD: 4_000_000_000, percentOfTotal: 13, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Semiconductors & Integrated Circuits', valueUSD: 65_000_000_000, percentOfTotal: 66, direction: 'import' },
        { name: 'Electronics & Components', valueUSD: 15_000_000_000, percentOfTotal: 15, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 7_000_000_000, percentOfTotal: 7, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'Semiconductors & Electronics (ITA)', rate: 0, status: 'active', effectiveDate: '1996-01-01', legalBasis: 'WTO ITA — Zero Duty', note: 'Semiconductors and electronics enter duty-free under the WTO Information Technology Agreement. A strategic carve-out to avoid raising costs for U.S. chip buyers. Source: USITC HTS 2026, 8471.30.01.00: Free.' },
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during the 90-day pause. Whether ITA-covered goods (semiconductors) are exempt from the IEEPA tariff remains a contested legal question.' },
      { sector: 'Taiwan Reciprocal Tariff', rate: 32, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — Taiwan Reciprocal Rate (Paused)', note: '32% country-specific rate announced April 2, 2025 for Taiwan. 90-day pause in effect through July 9, 2025. Taiwan has signaled willingness to negotiate and potentially increase U.S. chip investments.' },
    ],
    agreement: {
      name: 'U.S.–Taiwan Initiative on 21st-Century Trade',
      status: 'negotiating',
      inForceDate: undefined,
      summary: "No comprehensive FTA exists between the U.S. and Taiwan due to political sensitivities. The U.S.–Taiwan Initiative on 21st-Century Trade, launched in 2022, is negotiating binding commitments on customs, digital trade, and regulatory transparency — but does not address tariffs on goods.",
    },
    investment: {
      usFDIAbroadUSD: 22_000_000_000,
      foreignFDIInUSUSD: 12_000_000_000,
      majorUSInvestors: ['Apple (supply chain)', 'Qualcomm', 'Nvidia', 'Intel'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Semiconductors', severity: 'critical', direction: 'inbound', note: 'TSMC produces virtually all of the world\'s most advanced chips (below 5nm). The U.S. AI, defense, and consumer electronics industries are existentially dependent on Taiwanese semiconductor fabrication. The CHIPS Act is a direct response to this concentration risk.' },
      { category: 'Consumer Goods', severity: 'moderate', direction: 'inbound', note: 'Taiwan is a major source of electronics components and assemblies beyond leading-edge chips.' },
      { category: 'Defense Supply Chain', severity: 'high', direction: 'mutual', note: 'The U.S. defense sector is directly dependent on Taiwanese chips for weapons systems, communications, and electronic warfare. Taiwan sells significant quantities of U.S. defense equipment.' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'low', direction: 'outbound' },
      { category: 'Pharmaceuticals', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-taiwan', label: 'U.S. Census Bureau — U.S. Trade with Taiwan', url: 'https://www.census.gov/foreign-trade/balance/c5830.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
      { id: 'ustr-taiwan', label: 'USTR — Taiwan', url: 'https://ustr.gov/countries-regions/china-mongolia-taiwan/taiwan', publisher: 'USTR', retrievedAt: '2024-01-15', type: 'official-government' },
    ],
  },

  // ─── France ───────────────────────────────────────────────────────────────────
  france: {
    slug: 'france',
    name: 'France',
    officialName: 'French Republic',
    flagEmoji: '🇫🇷',
    region: 'Europe',
    tradePartnerRank: 11,
    gdpUSD: 2_780_000_000_000,
    currency: 'EUR (Euro)',
    geopoliticalContext: "France is a permanent UN Security Council member, NATO ally, and key European partner. The U.S. runs a goods surplus with France, driven by aircraft, pharmaceuticals, and industrial equipment. The relationship experienced significant strain in 2021 when the AUKUS submarine deal displaced a French contract with Australia, though diplomatic relations have since normalized.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 59_700_000_000,
      usImportsUSD: 46_400_000_000,
      tradeBalanceUSD: 13_300_000_000,
      balance: 'surplus',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 16_000_000_000, percentOfTotal: 27, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 9_000_000_000, percentOfTotal: 15, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 7_000_000_000, percentOfTotal: 12, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Aircraft Parts (Airbus)', valueUSD: 10_000_000_000, percentOfTotal: 22, direction: 'import' },
        { name: 'Luxury Goods & Beverages', valueUSD: 8_000_000_000, percentOfTotal: 17, direction: 'import' },
        { name: 'Pharmaceutical Products', valueUSD: 6_000_000_000, percentOfTotal: 13, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline tariff on all goods from France during 90-day pause.' },
      { sector: 'EU Reciprocal Tariff', rate: 20, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — EU Reciprocal Rate (Paused)', note: '20% EU-wide rate announced April 2, 2025. Paused until July 9, 2025 — currently 10% applies. France-specific tariff threats on luxury goods and cognac have been floated but not formally imposed.' },
      { sector: 'Automobiles', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: '25% Section 232 tariff on imported passenger vehicles. Applies to French vehicles (Renault, Peugeot) though French auto exports to the U.S. are limited. Source: USITC HTS 2026, 8703.xx.' },
    ],
    agreement: {
      name: 'No U.S.–EU FTA',
      status: 'none',
      summary: "Trade governed by WTO MFN rules. TTIP negotiations collapsed in 2016. Trade and Technology Council (TTC) manages the broader U.S.–EU relationship.",
    },
    investment: {
      usFDIAbroadUSD: 115_000_000_000,
      foreignFDIInUSUSD: 340_000_000_000,
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Defense Supply Chain', severity: 'low', direction: 'mutual', note: 'France is an independent nuclear power with its own defense industrial base (Dassault, Thales, Naval Group). Not a primary U.S. defense supplier.' },
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-france', label: 'U.S. Census Bureau — U.S. Trade with France', url: 'https://www.census.gov/foreign-trade/balance/c4279.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },

  // ─── Ireland ──────────────────────────────────────────────────────────────────
  ireland: {
    slug: 'ireland',
    name: 'Ireland',
    officialName: 'Republic of Ireland',
    flagEmoji: '🇮🇪',
    region: 'Europe',
    tradePartnerRank: 12,
    gdpUSD: 550_000_000_000,
    currency: 'EUR (Euro)',
    geopoliticalContext: "Ireland hosts the European headquarters of most major U.S. technology and pharmaceutical companies, making it the dominant source of the U.S. pharmaceutical import deficit in Europe. The bilateral trade deficit — $55.6B — is almost entirely composed of drugs manufactured in Ireland by U.S. companies like Johnson & Johnson, Pfizer, and Eli Lilly. This represents a tax and domicile structure as much as a genuine trade imbalance.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 22_500_000_000,
      usImportsUSD: 78_100_000_000,
      tradeBalanceUSD: -55_600_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 6_000_000_000, percentOfTotal: 27, direction: 'export' },
        { name: 'Computers & Software', valueUSD: 5_000_000_000, percentOfTotal: 22, direction: 'export' },
        { name: 'Medical Instruments', valueUSD: 3_000_000_000, percentOfTotal: 13, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Pharmaceutical Products', valueUSD: 60_000_000_000, percentOfTotal: 77, direction: 'import' },
        { name: 'Medical Devices', valueUSD: 10_000_000_000, percentOfTotal: 13, direction: 'import' },
        { name: 'Chemical Products', valueUSD: 4_000_000_000, percentOfTotal: 5, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during 90-day pause. Politically sensitive given most "Irish" pharmaceutical exports are manufactured by U.S. corporations — the tariff effectively taxes U.S. companies\' own products.' },
      { sector: 'EU Reciprocal Tariff', rate: 20, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — EU Reciprocal Rate (Paused)', note: '20% EU-wide rate paused until July 9, 2025. If applied to pharmaceuticals, this would uniquely impact U.S. pharma companies (Pfizer, J&J, Eli Lilly) whose Irish subsidiaries manufacture drugs sold in the U.S.' },
      { sector: 'Pharmaceuticals (MFN)', rate: 0, status: 'active', effectiveDate: '1995-01-01', legalBasis: 'WTO MFN — Zero Duty', note: 'Pharmaceuticals enter duty-free under WTO MFN rules. A separate pharmaceutical tariff has been threatened by the Trump administration — if implemented, it would be a major disruption. Source: USITC HTS 2026, Chapter 30: Free.' },
    ],
    agreement: {
      name: 'No U.S.–EU FTA',
      status: 'none',
      summary: "Trade governed by WTO MFN rules via EU common external tariff. The bilateral trade relationship is structurally shaped by U.S. corporate tax optimization strategies that route pharmaceutical and technology revenue through Irish operations.",
    },
    investment: {
      usFDIAbroadUSD: 420_000_000_000,
      foreignFDIInUSUSD: 120_000_000_000,
      majorUSInvestors: ['Apple', 'Google', 'Meta', 'Pfizer', 'Johnson & Johnson', 'Microsoft'],
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Pharmaceuticals', severity: 'high', direction: 'inbound', note: 'A substantial portion of U.S.-brand pharmaceuticals are manufactured in Ireland by U.S. companies\' Irish subsidiaries. Disruption to Irish pharma output would affect U.S. drug availability.' },
      { category: 'Consumer Goods', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-ireland', label: 'U.S. Census Bureau — U.S. Trade with Ireland', url: 'https://www.census.gov/foreign-trade/balance/c4190.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },

  // ─── Switzerland ─────────────────────────────────────────────────────────────
  switzerland: {
    slug: 'switzerland',
    name: 'Switzerland',
    officialName: 'Swiss Confederation',
    flagEmoji: '🇨🇭',
    region: 'Europe',
    tradePartnerRank: 13,
    gdpUSD: 870_000_000_000,
    currency: 'CHF (Swiss Franc)',
    geopoliticalContext: "Switzerland is a high-value trading partner dominated by pharmaceuticals, precision instruments, and financial services. Roche, Novartis, and Lonza are among the world's largest pharmaceutical manufacturers and have significant U.S. production and sales. Switzerland is not an EU member but maintains a dense network of bilateral agreements with the EU that govern its trade relationships.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 29_200_000_000,
      usImportsUSD: 66_500_000_000,
      tradeBalanceUSD: -37_300_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Medical Instruments', valueUSD: 7_000_000_000, percentOfTotal: 24, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 6_000_000_000, percentOfTotal: 21, direction: 'export' },
        { name: 'Aircraft & Aerospace', valueUSD: 4_000_000_000, percentOfTotal: 14, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Pharmaceutical Products', valueUSD: 42_000_000_000, percentOfTotal: 63, direction: 'import' },
        { name: 'Medical Instruments', valueUSD: 8_000_000_000, percentOfTotal: 12, direction: 'import' },
        { name: 'Watches & Precision Instruments', valueUSD: 5_000_000_000, percentOfTotal: 8, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during 90-day pause. Switzerland is not in the EU — its rate was calculated separately from the EU 20% rate.' },
      { sector: 'Switzerland Reciprocal Tariff', rate: 31, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — Switzerland Reciprocal Rate (Paused)', note: '31% country-specific rate announced April 2, 2025 for Switzerland. 90-day pause through July 9, 2025. Politically sensitive given Switzerland\'s pharmaceutical dominance — Roche and Novartis drugs would face this rate.' },
      { sector: 'Pharmaceuticals (MFN)', rate: 0, status: 'active', effectiveDate: '1995-01-01', legalBasis: 'WTO MFN — Zero Duty', note: 'Swiss pharma imports (Roche, Novartis, Lonza) currently enter duty-free. Any pharmaceutical tariff would materially affect U.S. drug costs. Source: USITC HTS 2026, Chapter 30: Free.' },
    ],
    agreement: {
      name: 'No FTA',
      status: 'none',
      summary: "No free trade agreement between the U.S. and Switzerland. Negotiations were launched in 2019 but are in early stages. Trade is governed by WTO MFN rules.",
    },
    investment: {
      usFDIAbroadUSD: 98_000_000_000,
      foreignFDIInUSUSD: 280_000_000_000,
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Pharmaceuticals', severity: 'high', direction: 'inbound', note: 'Switzerland is the global home of Roche, Novartis, and key specialty pharmaceutical manufacturers. Swiss-origin drugs represent a significant share of high-value specialty and biologic drug imports.' },
      { category: 'Consumer Goods', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-switzerland', label: 'U.S. Census Bureau — U.S. Trade with Switzerland', url: 'https://www.census.gov/foreign-trade/balance/c4419.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },

  // ─── Italy ────────────────────────────────────────────────────────────────────
  italy: {
    slug: 'italy',
    name: 'Italy',
    officialName: 'Italian Republic',
    flagEmoji: '🇮🇹',
    region: 'Europe',
    tradePartnerRank: 14,
    gdpUSD: 2_170_000_000_000,
    currency: 'EUR (Euro)',
    geopoliticalContext: "Italy is a G7 member and NATO ally. The bilateral trade relationship is characterized by Italian luxury goods, pharmaceuticals, and industrial machinery flowing to the U.S. and U.S. aircraft and agricultural products going the other way. Italy's strategic significance has grown as a key NATO partner in the Mediterranean.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 26_100_000_000,
      usImportsUSD: 69_400_000_000,
      tradeBalanceUSD: -43_300_000_000,
      balance: 'deficit',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 5_000_000_000, percentOfTotal: 19, direction: 'export' },
        { name: 'Agricultural Products', valueUSD: 4_000_000_000, percentOfTotal: 15, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 4_000_000_000, percentOfTotal: 15, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Pharmaceutical Products', valueUSD: 18_000_000_000, percentOfTotal: 26, direction: 'import' },
        { name: 'Vehicles & Auto Parts', valueUSD: 12_000_000_000, percentOfTotal: 17, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 10_000_000_000, percentOfTotal: 14, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during 90-day pause.' },
      { sector: 'EU Reciprocal Tariff', rate: 20, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — EU Reciprocal Rate (Paused)', note: '20% EU-wide rate paused until July 9, 2025. Italy-specific goods (wines, olive oil, luxury fashion) have been cited as potential retaliatory targets in U.S.–EU negotiations.' },
      { sector: 'Automobiles', rate: 25, status: 'active', effectiveDate: '2025-05-03', legalBasis: 'Section 232 — Auto Tariff', note: '25% Section 232 tariff on imported vehicles. Affects Italian luxury marques (Ferrari, Lamborghini, Maserati, Alfa Romeo). Source: USITC HTS 2026, 8703.xx.' },
    ],
    agreement: {
      name: 'No U.S.–EU FTA',
      status: 'none',
      summary: "Trade governed by WTO MFN rules. EU common external tariff applies.",
    },
    investment: {
      usFDIAbroadUSD: 42_000_000_000,
      foreignFDIInUSUSD: 60_000_000_000,
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Pharmaceuticals', severity: 'moderate', direction: 'inbound', note: 'Italy is a significant pharmaceutical manufacturing hub within the EU, particularly for generics.' },
      { category: 'Auto Manufacturing', severity: 'low', direction: 'inbound' },
      { category: 'Consumer Goods', severity: 'low', direction: 'inbound' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Semiconductors', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-italy', label: 'U.S. Census Bureau — U.S. Trade with Italy', url: 'https://www.census.gov/foreign-trade/balance/c4749.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },

  // ─── Netherlands ─────────────────────────────────────────────────────────────
  netherlands: {
    slug: 'netherlands',
    name: 'Netherlands',
    officialName: 'Kingdom of the Netherlands',
    flagEmoji: '🇳🇱',
    region: 'Europe',
    tradePartnerRank: 15,
    gdpUSD: 1_080_000_000_000,
    currency: 'EUR (Euro)',
    geopoliticalContext: "The Netherlands is a key U.S. trade surplus partner and an indispensable node in the global semiconductor supply chain. ASML — headquartered in Eindhoven — is the sole global manufacturer of extreme ultraviolet (EUV) lithography machines, which are required to produce the world's most advanced chips. U.S. export controls have been extended to cover ASML's sales to China, and the Dutch government has cooperated with these restrictions.",
    currentTrade: {
      fiscalYear: '2023',
      usExportsUSD: 55_900_000_000,
      usImportsUSD: 27_600_000_000,
      tradeBalanceUSD: 28_300_000_000,
      balance: 'surplus',
      topExportCategories: [
        { name: 'Aircraft & Aerospace', valueUSD: 12_000_000_000, percentOfTotal: 21, direction: 'export' },
        { name: 'Agricultural Products & Food', valueUSD: 9_000_000_000, percentOfTotal: 16, direction: 'export' },
        { name: 'Pharmaceutical Products', valueUSD: 8_000_000_000, percentOfTotal: 14, direction: 'export' },
        { name: 'Machinery & Equipment', valueUSD: 7_000_000_000, percentOfTotal: 13, direction: 'export' },
      ],
      topImportCategories: [
        { name: 'Semiconductor Equipment (ASML)', valueUSD: 10_000_000_000, percentOfTotal: 36, direction: 'import' },
        { name: 'Chemical Products', valueUSD: 6_000_000_000, percentOfTotal: 22, direction: 'import' },
        { name: 'Machinery & Equipment', valueUSD: 4_000_000_000, percentOfTotal: 14, direction: 'import' },
      ],
    },
    tariffs: [
      { sector: 'All Goods (2025 Baseline)', rate: 10, status: 'active', effectiveDate: '2025-04-05', legalBasis: 'IEEPA — Global Reciprocal Tariff', note: '10% baseline applies during 90-day pause. The Netherlands runs a significant U.S. trade surplus (U.S. exports $55.9B vs. imports $27.6B) — the tariff applies despite this favorable position.' },
      { sector: 'EU Reciprocal Tariff', rate: 20, status: 'proposed', effectiveDate: '2025-07-09', legalBasis: 'IEEPA — EU Reciprocal Rate (Paused)', note: '20% EU-wide rate paused until July 9, 2025. Strategically significant: any tariff on ASML equipment would increase the cost of semiconductor manufacturing equipment for U.S. chipmakers.' },
      { sector: 'Semiconductor Equipment (ITA)', rate: 0, status: 'active', effectiveDate: '1996-01-01', legalBasis: 'WTO ITA — Zero Duty', note: 'ASML lithography machines and semiconductor equipment enter duty-free under the WTO Information Technology Agreement. Whether IEEPA tariffs override ITA commitments is legally contested. Source: USITC HTS 2026, 8486.xx: Free.' },
    ],
    agreement: {
      name: 'No U.S.–EU FTA',
      status: 'none',
      summary: "Trade governed by WTO MFN rules. EU common external tariff applies. The Netherlands is a strategically important partner for U.S. semiconductor policy due to ASML's critical position.",
    },
    investment: {
      usFDIAbroadUSD: 225_000_000_000,
      foreignFDIInUSUSD: 310_000_000_000,
      dataAvailability: 'available',
      fiscalYear: '2022',
    },
    dependencySignals: [
      { category: 'Semiconductors', severity: 'high', direction: 'mutual', note: 'ASML\'s EUV lithography machines are the sole enabling technology for advanced chip production. The U.S. and Netherlands have cooperated to restrict ASML exports to China, making this a key axis of U.S. semiconductor strategy.' },
      { category: 'Energy', severity: 'none', direction: 'inbound' },
      { category: 'Pharmaceuticals', severity: 'low', direction: 'inbound' },
      { category: 'Consumer Goods', severity: 'none', direction: 'inbound' },
      { category: 'Rare Earth Minerals', severity: 'none', direction: 'inbound' },
      { category: 'Auto Manufacturing', severity: 'none', direction: 'inbound' },
      { category: 'Defense Supply Chain', severity: 'none', direction: 'inbound' },
      { category: 'Agricultural Products', severity: 'none', direction: 'inbound' },
    ],
    sources: [
      { id: 'census-netherlands', label: 'U.S. Census Bureau — U.S. Trade with Netherlands', url: 'https://www.census.gov/foreign-trade/balance/c4210.html', publisher: 'U.S. Census Bureau', retrievedAt: '2024-01-15', type: 'trade-data' },
    ],
  },
}

// ─── Apply live Census Bureau data ───────────────────────────────────────────
// census-trade-data.json is generated by: node scripts/fetch-census-data.mjs
// It overrides all currentTrade figures with real FY2024 Census data.

type CensusTrade = {
  fiscalYear: string
  usExportsUSD: number
  usImportsUSD: number
  tradeBalanceUSD: number
  balance: 'surplus' | 'deficit' | 'balanced'
  topExportCategories: Array<{ name: string; valueUSD: number; percentOfTotal: number; direction: 'export' | 'import' }>
  topImportCategories: Array<{ name: string; valueUSD: number; percentOfTotal: number; direction: 'export' | 'import' }>
}

const census = censusRaw.countries as Record<string, CensusTrade>

for (const slug of Object.keys(countryProfiles)) {
  if (census[slug]) {
    countryProfiles[slug].currentTrade = census[slug]
  }
}

// ─── Merge BEA bilateral FDI annual flow data ─────────────────────────────────
// bea-investment-data.json is generated by: node scripts/fetch-bea-investment-data.mjs
// Values are annual net FDI flows (ITA dataset), not accumulated position stocks.
// Countries with no individual BEA tracking (Ireland, Vietnam, Switzerland) retain
// their existing hardcoded position estimates.

type BEAInvestment = {
  fiscalYear: string
  usFDIAbroadUSD: number | null
  foreignFDIInUSUSD: number | null
}

const bea = beaRaw.countries as Record<string, BEAInvestment>

for (const slug of Object.keys(countryProfiles)) {
  const b = bea[slug]
  if (!b) continue
  if (b.usFDIAbroadUSD !== null || b.foreignFDIInUSUSD !== null) {
    if (b.usFDIAbroadUSD !== null) countryProfiles[slug].investment.usFDIAbroadUSD = b.usFDIAbroadUSD
    if (b.foreignFDIInUSUSD !== null) countryProfiles[slug].investment.foreignFDIInUSUSD = b.foreignFDIInUSUSD
    countryProfiles[slug].investment.fiscalYear = b.fiscalYear
    countryProfiles[slug].investment.dataAvailability = 'available'
  }
}

// ─── Apply live USITC HTS tariff rate data ────────────────────────────────────
// hts-tariff-data.json is generated by: node scripts/fetch-hts-tariff-data.mjs
// Exports HTS_SECTOR_RATES for UI components to show MFN baseline context.

type HtsSector = {
  naics: string
  name: string
  htsCode: string | null
  description: string
  generalRate: string
  specialCodes: string[]
  ftaPrograms: string[]
  other: string
  source: string
}

export const HTS_SECTOR_RATES: Record<string, HtsSector> =
  htsRaw.sectors as Record<string, HtsSector>

export const HTS_META = htsRaw.meta as {
  source: string
  apiBase: string
  release: string
  note: string
  retrievedAt: string
}

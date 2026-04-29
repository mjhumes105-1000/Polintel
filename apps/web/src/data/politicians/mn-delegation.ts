import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'K000367',
    slug: 'amy-klobuchar',
    name: 'Amy Klobuchar',
    party: 'D',
    chamber: 'Senate',
    state: 'Minnesota',
    currentTitle: 'U.S. Senator from Minnesota',
    bio: 'Amy Klobuchar has represented Minnesota in the U.S. Senate since 2007 and ran for president in 2020. A former Hennepin County prosecutor, she serves as Ranking Member of the Senate Agriculture, Nutrition, and Forestry Committee and sits on the Commerce and Joint Library Committees. Known for a bipartisan, pragmatic style, she has championed antitrust reform, rural broadband, agricultural policy, and prescription drug pricing throughout her career.',
    sinceYear: 2007,
    committees: [
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Ranking Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'jslc', name: 'Joint Committee of Congress on the Library', chamber: 'Senate', role: 'Member' },
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Innovation and Choice Online Act — Markup Support',
        year: 2022,
        month: 1,
        position: 'For',
        summary: 'Championed bipartisan antitrust legislation targeting self-preferencing by large tech platforms, which she co-authored as Chair of the Senate Judiciary Antitrust Subcommittee. Klobuchar has been Congress\'s leading advocate for strengthening antitrust enforcement in the digital economy, a priority she maintained after Democrats lost the Senate majority.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its prescription drug pricing reforms — particularly Medicare drug price negotiation — which she had championed for years. Klobuchar also highlighted the bill\'s agricultural conservation provisions important to Minnesota\'s farming communities.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the gun safety legislation, the first significant federal gun law in nearly 30 years. Klobuchar supported provisions tightening background checks for young buyers and closing the "boyfriend loophole" in domestic violence firearms law.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using her Ranking Member position on the Senate Agriculture Committee to highlight how the legislation\'s SNAP cuts would harm food-insecure Minnesotans and how its Medicaid reductions threatened rural hospital viability across the state. Klobuchar argued the bill reversed the prescription drug pricing progress she had fought for — including Medicare negotiation — by defunding implementation mechanisms central to lowering drug costs for Minnesota seniors.',
      },
    ],
    keyBills: [
      {
        title: 'American Innovation and Choice Online Act',
        year: 2022,
        month: 1,
        summary: 'Co-authored landmark bipartisan antitrust legislation with Sen. Chuck Grassley targeting self-preferencing by large digital platforms, the most significant antitrust bill targeting Big Tech to advance through committee in decades. Klobuchar has made antitrust modernization her signature legislative focus and produced a book on the subject.',
      },
      {
        title: 'Postal Service Reform Act of 2022',
        year: 2022,
        month: 3,
        summary: 'Was a key Senate sponsor of the Postal Service Reform Act, the most significant USPS legislation in a decade, which restructured the agency\'s pre-funding healthcare obligations and stabilized its long-term finances. USPS delivery reliability is a significant issue in rural Minnesota where mail service is often the primary connection to federal benefits.',
      },
    ],
  },

  {
    bioguideId: 'S001203',
    slug: 'tina-smith',
    name: 'Tina Smith',
    party: 'D',
    chamber: 'Senate',
    state: 'Minnesota',
    currentTitle: 'U.S. Senator from Minnesota',
    bio: 'Tina Smith has served as U.S. Senator from Minnesota since 2018, appointed to fill Al Franken\'s seat and subsequently elected to two full terms. A former Minnesota Lieutenant Governor and Planned Parenthood executive, she serves on the Agriculture, Banking, Finance, and Indian Affairs Committees. She focuses on mental health, reproductive healthcare, Indigenous communities, rural economic development, and clean energy policy.',
    sinceYear: 2018,
    committees: [
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'slia', name: 'Senate Committee on Indian Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbk', name: 'Senate Committee on Banking, Housing, and Urban Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, championing its clean energy provisions and the extension of the ACA premium subsidies that she argued were critical for rural Minnesotans who purchase insurance on the individual market. Smith has been a consistent advocate for expanded healthcare coverage throughout her Senate tenure.',
      },
      {
        title: 'Mental Health Access Improvement Act',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Championed passage of the Mental Health Access Improvement Act as part of year-end legislation, allowing Medicare to cover mental health services provided by licensed professional counselors and marriage and family therapists for the first time. Smith has made mental health policy a signature issue since entering the Senate.',
      },
      {
        title: 'Farm Bill — SNAP Nutrition Provisions',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Supported farm bill reauthorization through the Senate Agriculture Committee, prioritizing SNAP nutrition benefit adequacy and conservation program funding for Minnesota\'s farming communities. Smith has emphasized the farm bill\'s dual role in supporting agricultural production and food security for vulnerable families.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, warning through her Senate Finance and Agriculture Committee seats that the legislation\'s Medicaid cuts would eliminate coverage for thousands of rural Minnesotans and that its rollback of clean energy incentives would stall the renewable energy investments benefiting Minnesota\'s tribal nations. Smith specifically highlighted how reductions to the ACA subsidy structure would devastate Minnesotans — particularly in rural communities — who purchase coverage on the individual market.',
      },
    ],
    keyBills: [
      {
        title: 'Mental Health Access Improvement Act',
        year: 2021,
        month: 6,
        summary: 'Introduced bipartisan legislation expanding Medicare coverage of mental health services to include licensed professional counselors and marriage and family therapists — providers who make up a significant share of the mental health workforce, particularly in rural areas with provider shortages. The bill passed as part of the FY2023 omnibus.',
      },
      {
        title: 'Tribal Energy Development Improvement Act',
        year: 2023,
        month: 4,
        summary: 'Championed legislation streamlining federal approval processes for clean energy projects on tribal lands, allowing Native nations to more readily develop wind, solar, and geothermal resources on their territories. Smith has built a strong record on Indigenous affairs through her Indian Affairs Committee assignment and Minnesota\'s significant tribal nations.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'F000475',
    slug: 'brad-finstad',
    name: 'Brad Finstad',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 1st District',
    bio: 'Brad Finstad has represented Minnesota\'s 1st Congressional District — southern Minnesota including Rochester — since winning a 2022 special election to fill the seat of the late Jim Hagedorn. A farmer and former USDA rural development director in Minnesota, he serves on the Agriculture, Armed Services, and Small Business Committees, focusing on farm policy, rural broadband, and agricultural trade for one of the most agriculturally productive districts in the country.',
    sinceYear: 2022,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Farm Bill Reauthorization Support',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Voted to advance farm bill reauthorization through the House Agriculture Committee, supporting commodity programs for corn, soybeans, and sugar beets — the 1st District\'s primary crops. Finstad has prioritized farm bill passage as the central legislative focus of his congressional tenure, given the district\'s heavy dependence on agricultural federal programs.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting its agricultural provisions and tax cut extensions. Finstad emphasized provisions benefiting family farms and worked through the Agriculture Committee to ensure crop insurance and commodity programs were protected in the final package.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2024, supporting defense provisions relevant to the 1st District\'s National Guard installations. Finstad has used his Armed Services seat to advocate for Guard and Reserve readiness funding.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, championing through his House Agriculture Committee seat the bill\'s crop insurance protections and extension of the 2017 tax cuts that he argued were essential for the farm families and agricultural businesses anchoring southern Minnesota\'s economy. Finstad highlighted the bill\'s border security provisions as critical for protecting the 1st District\'s agricultural labor supply chains from illegal trafficking and smuggling activity.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Broadband Investment provisions',
        year: 2023,
        month: 5,
        summary: 'Advocated through the Agriculture Committee for expanded USDA ReConnect broadband grants targeting rural Minnesota communities with limited internet access. The 1st District\'s agricultural economy increasingly depends on high-speed connectivity for precision farming, remote veterinary services, and grain market access.',
      },
    ],
  },

  {
    bioguideId: 'C001119',
    slug: 'angie-craig',
    name: 'Angie Craig',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 2nd District',
    bio: 'Angie Craig has represented Minnesota\'s 2nd Congressional District — the south Twin Cities suburbs including Eagan and Shakopee — since 2019. A former medical device company executive, she serves as Ranking Member of the House Agriculture Committee, focusing on farm policy, insulin pricing, and rural economic development. She is one of the first openly gay parents to serve in Congress and represents a competitive suburban district she has won in multiple cycles.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Ranking Member' },
    ],
    keyVotes: [
      {
        title: 'Insulin Pricing Cap — Inflation Reduction Act provisions',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, which capped insulin costs for Medicare patients at $35 per month — a provision Craig had championed for years before it passed. She introduced standalone insulin pricing legislation multiple times and celebrated the IRA\'s inclusion of the cap as a personal legislative victory.',
      },
      {
        title: 'Farm Bill Reauthorization',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Led Democratic efforts on farm bill reauthorization through her Ranking Member position on the Agriculture Committee, pushing for stronger SNAP protections, conservation funding, and beginning farmer support. Craig has prioritized bipartisan farm bill passage and negotiated with Republican counterparts on commodity and nutrition provisions.',
      },
      {
        title: 'American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, highlighting direct payments and the restaurant revitalization fund that benefited small businesses in the 2nd District\'s suburban communities. Craig emphasized provisions supporting agricultural supply chains disrupted by the pandemic.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, leveraging her Ranking Member position on the House Agriculture Committee to warn that the legislation\'s SNAP cuts would harm food-insecure families in the 2nd District\'s southern suburbs and undermine conservation programs that Minnesota farmers depend on. Craig argued the bill would reverse insulin pricing progress she had spent years fighting for, threatening the diabetic patients in her district who had finally gained relief under the Inflation Reduction Act.',
      },
    ],
    keyBills: [
      {
        title: 'Affordable Insulin Now Act',
        year: 2022,
        month: 3,
        summary: 'Led House passage of the Affordable Insulin Now Act capping insulin costs at $35 per month for privately insured patients — a provision that was stripped in the Senate but later included for Medicare patients in the Inflation Reduction Act. Craig has made insulin affordability her signature legislative cause, drawing on her district\'s significant diabetic patient population.',
      },
    ],
  },

  {
    bioguideId: 'M001234',
    slug: 'kelly-morrison',
    name: 'Kelly Morrison',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 3rd District',
    bio: 'Kelly Morrison has represented Minnesota\'s 3rd Congressional District — the western Twin Cities suburbs including Plymouth and Minnetonka — since 2025. A physician and former Minnesota state legislator who specialized in obstetrics and gynecology, she ran primarily on reproductive rights and healthcare access following the Supreme Court\'s Dobbs decision. She serves on the Veterans\' Affairs and Small Business Committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill in one of her first major votes, arguing Medicaid cuts would harm constituents and that the bill\'s restrictions on reproductive healthcare funding violated her constituents\' rights. Morrison, an OB-GYN, has made reproductive healthcare access a defining issue of her congressional tenure.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, arguing the mandatory detention provisions lacked adequate due process protections. Morrison has emphasized a humane immigration approach while representing a competitive suburban district where immigration is a contested issue.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, drawing on her medical background to warn from her Veterans\' Affairs Committee seat that Medicaid cuts would strip coverage from veterans and low-income families in the 3rd District\'s western Twin Cities suburbs. Morrison — an OB-GYN — also condemned provisions restricting reproductive healthcare funding as a direct attack on the medical services her constituents rely on across Plymouth, Minnetonka, and surrounding communities.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Access to Reproductive Care Act',
        year: 2025,
        month: 3,
        summary: 'Introduced legislation protecting access to reproductive healthcare services including contraception and abortion for federal employees and their dependents. As a practicing OB-GYN before her election, Morrison brought clinical expertise to reproductive healthcare policy debates and made it a centerpiece of her 2024 campaign.',
      },
    ],
  },

  {
    bioguideId: 'M001143',
    slug: 'betty-mccollum',
    name: 'Betty McCollum',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 4th District',
    bio: 'Betty McCollum has represented Minnesota\'s 4th Congressional District — Saint Paul and its inner suburbs — since 2001. A former high school teacher and South St. Paul city council member, she serves on the House Appropriations Committee and focuses on federal budget priorities, veterans\' healthcare, environmental protection, and Native American affairs. She has been a consistent progressive voice on military spending oversight and Palestinian human rights.',
    sinceYear: 2001,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Israel Military Aid Package',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the Israel military aid package, having been one of the earliest congressional voices calling for conditioning military assistance on humanitarian law compliance. McCollum introduced legislation prohibiting U.S. military funds from being used in the detention of Palestinian children, making her a leading progressive critic of unconditional U.S. military support for Israel.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, emphasizing its clean energy provisions and climate investments as essential for Minnesota\'s transition away from fossil fuels. McCollum has been a consistent advocate for environmental protection and clean energy through her Appropriations work.',
      },
      {
        title: 'American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, highlighting direct payments, expanded child tax credit, and local government funding critical to Saint Paul\'s recovery from pandemic economic disruption. McCollum used her Appropriations seat to monitor implementation of the law\'s funding for city services.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using her House Appropriations Committee seat to argue that the legislation\'s deep Medicaid cuts would devastate Saint Paul\'s low-income communities and gut the environmental protection programs that safeguard the Mississippi River corridor running through the 4th District. McCollum also condemned the bill\'s rollback of clean energy investments as a threat to Minnesota\'s climate commitments and the green economy jobs growing in the Twin Cities metro.',
      },
    ],
    keyBills: [
      {
        title: 'Defending the Human Dignity of Palestinian Children and Families Act',
        year: 2021,
        month: 8,
        summary: 'Introduced legislation prohibiting U.S. military assistance from being used to detain, torture, or otherwise abuse Palestinian children in Israeli military custody. McCollum was the first member of Congress to introduce legislation specifically addressing the treatment of Palestinian children, making her a distinctive voice on Middle East human rights within the Democratic caucus.',
      },
    ],
  },

  {
    bioguideId: 'O000173',
    slug: 'ilhan-omar',
    name: 'Ilhan Omar',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 5th District',
    bio: 'Ilhan Omar has represented Minnesota\'s 5th Congressional District — Minneapolis — since 2019. A Somali-born refugee who came to the United States at age 12, she was the first Somali-American and one of the first Muslim women elected to Congress. A member of the progressive "Squad," she serves on the House Budget and Education and Workforce Committees. She was removed from the House Foreign Affairs Committee by House Republicans in 2023 over past controversial statements. She focuses on immigration reform, housing, criminal justice, and ending U.S. involvement in foreign conflicts.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Israel Military Aid Package',
        year: 2024,
        month: 4,
        position: 'Against',
        summary: 'Voted against the Israel military aid package, having been one of the most vocal congressional critics of U.S. military support for Israeli operations in Gaza. Omar has called for an immediate ceasefire and conditioning all military assistance on compliance with international humanitarian law since the October 7, 2023 Hamas attack triggered the conflict.',
      },
      {
        title: 'American Rescue Plan',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, emphasizing direct payments and rental assistance for Minneapolis residents who faced devastating pandemic economic impacts. Minneapolis\'s large Somali-American and immigrant communities were disproportionately affected by job losses in service industries.',
      },
      {
        title: 'Against Bipartisan Infrastructure Law — Initial Vote',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Initially voted against advancing the bipartisan infrastructure bill before Democratic leadership secured votes on the Build Back Better framework. Omar was part of the progressive bloc that conditioned infrastructure support on simultaneous passage of the larger social spending package, ultimately voting against the infrastructure bill when it came to a final vote without guarantees on BBB.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'Against',
        summary: 'Voted against the FY2026 budget reconciliation bill, using her House Budget Committee seat to expose how the legislation\'s Medicaid cuts and housing program reductions would devastate Minneapolis\'s low-income and immigrant communities — including the large Somali-American population in the 5th District that depends on public health programs. Omar argued the bill\'s border security spending and clean energy rollbacks represented a double attack on her constituents, who face both climate vulnerability and the threat of family separation from immigration enforcement expansion.',
      },
    ],
    keyBills: [
      {
        title: 'Homes Act',
        year: 2022,
        month: 10,
        summary: 'Introduced the Homes Act, proposing a federal social housing program to build one million mixed-income public housing units over a decade, funded by a wealth tax on billionaires. Omar has identified housing affordability as Minneapolis\'s most acute crisis and has championed direct federal construction as an alternative to market-based approaches.',
      },
    ],
  },

  {
    bioguideId: 'E000294',
    slug: 'tom-emmer',
    name: 'Tom Emmer',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 6th District',
    bio: 'Tom Emmer has represented Minnesota\'s 6th Congressional District — the northwest Twin Cities exurbs and St. Cloud area — since 2015. A former Minnesota state legislator and 2010 gubernatorial candidate, he served as House Majority Whip from 2023 to 2025, making him the third-highest-ranking Republican in Congress. He serves on the House Financial Services Committee and has been a leading voice on cryptocurrency regulation, fiscal policy, and conservative governance. He briefly won the House Speaker election in October 2023 before withdrawing after insufficient caucus support.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the 2017 Tax Cuts and Jobs Act, which he helped advance as part of House Republican leadership. Emmer has been a consistent advocate for lower business taxes and has argued the TCJA\'s corporate rate reduction drove investment back to the United States.',
      },
      {
        title: 'Speaker Election — Withdrew After Caucus Opposition',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Was elected Speaker by the House Republican Conference in October 2023 following Kevin McCarthy\'s ouster, but withdrew hours later after opposition from House Freedom Caucus members and former President Trump who opposed his past voting record. The episode demonstrated the limits of Emmer\'s whip coalition-building when the target was himself.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting it as part of his transition from Majority Whip to rank-and-file member following Democrats\' improved 2024 House performance. Emmer continues to be a reliable vote for House Republican priorities.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, supporting through his House Financial Services Committee assignment the bill\'s provisions extending the 2017 tax cuts and creating a more favorable regulatory environment for digital assets and financial innovation. Emmer argued the legislation\'s tax relief would directly benefit the small businesses and financial services firms that drive the 6th District\'s northwest Twin Cities exurb economy.',
      },
    ],
    keyBills: [
      {
        title: 'Digital Asset Market Structure and Investor Protection Act',
        year: 2022,
        month: 7,
        summary: 'Introduced legislation establishing a comprehensive regulatory framework for digital assets and cryptocurrencies, clarifying jurisdiction between the SEC and CFTC. Emmer has been one of Congress\'s most enthusiastic champions of the cryptocurrency industry and has opposed regulatory approaches he views as stifling financial innovation.',
      },
    ],
  },

  {
    bioguideId: 'F000470',
    slug: 'michelle-fischbach',
    name: 'Michelle Fischbach',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 7th District',
    bio: 'Michelle Fischbach has represented Minnesota\'s 7th Congressional District — western Minnesota\'s agricultural heartland — since 2021. A former Minnesota State Senate President Pro Tempore and lieutenant governor, she serves on the House Rules and Ways and Means Committees — powerful assignments reflecting her seniority within House Republican leadership circles. She focuses on agricultural trade, rural economic development, and conservative social policy for one of Minnesota\'s most rural and Republican districts.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, using her dual assignments on Rules and Ways and Means to help advance the legislation. Fischbach supported the bill\'s tax cut extensions and agricultural provisions, arguing they would benefit western Minnesota\'s farming communities.',
      },
      {
        title: 'Tax Cuts and Jobs Act Extension',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Supported extension of the 2017 Tax Cuts and Jobs Act through her Ways and Means Committee position, arguing that allowing the tax cuts to expire would amount to a significant tax increase on the farm families and small businesses that dominate Minnesota\'s 7th District economy.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, supporting mandatory detention of undocumented immigrants charged with violent crimes. Fischbach has maintained a consistent conservative record on immigration enforcement throughout her congressional tenure.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation bill, leveraging her dual assignments on the House Rules and Ways and Means Committees to help advance the legislation and shape its tax provisions favorable to western Minnesota\'s farm families and small businesses. Fischbach championed the bill\'s extension of the 2017 tax cuts as essential relief for the agricultural operators and rural employers who form the backbone of the 7th District\'s economy.',
      },
    ],
    keyBills: [
      {
        title: 'Agricultural Trade Promotion provisions',
        year: 2023,
        month: 6,
        summary: 'Championed through the Ways and Means Committee provisions expanding USDA trade promotion programs for Minnesota agricultural exports, particularly for pork, dairy, and small grains facing international market competition. The 7th District\'s farmers are heavily dependent on export markets, and Fischbach has prioritized trade access as a central policy focus.',
      },
    ],
  },

  {
    bioguideId: 'S001212',
    slug: 'pete-stauber',
    name: 'Pete Stauber',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Minnesota',
    currentTitle: 'U.S. Representative, Minnesota 8th District',
    bio: 'Pete Stauber has represented Minnesota\'s 8th Congressional District — northeastern Minnesota including Duluth and the Iron Range — since 2019. A former Duluth city council member, hockey player, and law enforcement officer who played in the NHL, he serves on the Natural Resources, Small Business, and Transportation Committees. He focuses on mining, timber, water infrastructure, and the Iron Range\'s mining-based economy, and has been a vocal opponent of Biden-era federal mining permit restrictions in the region.',
    sinceYear: 2019,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing it imposed excessive burdens on energy production and did not address the needs of Iron Range mining communities. Stauber has been critical of policies he argues disadvantage conventional energy and mining industries that are central to the 8th District\'s economy.',
      },
      {
        title: 'Support for Twin Metals Mining Permit Restoration',
        year: 2023,
        month: 7,
        position: 'For',
        summary: 'Supported legislation and administrative efforts to restore Twin Metals Minnesota\'s federal mining leases near the Boundary Waters Canoe Area Wilderness, which were revoked by the Biden administration in 2022. Stauber has been the lead congressional voice defending copper-nickel mining development in the Superior National Forest.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, emphasizing provisions rolling back Biden-era mining and energy regulations that he argued had suppressed Iron Range investment. Stauber has consistently aligned with efforts to expand domestic critical mineral production.',
      },
      {
        title: 'FY2026 Budget Reconciliation',
        year: 2026,
        month: 4,
        position: 'For',
        summary: 'Voted for the FY2026 budget reconciliation package, using his Natural Resources Committee seat to highlight how the bill\'s energy and mining provisions would unlock long-delayed critical mineral development on the Iron Range and restore federal permitting processes he argued the previous administration had weaponized against copper-nickel mining. Stauber praised the bill\'s tax relief and border security measures as delivering on the priorities of the 8th District\'s working-class mining and timber communities around Duluth.',
      },
    ],
    keyBills: [
      {
        title: 'American Minerals Security Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation streamlining federal permitting for critical mineral mines on federal lands, arguing the United States\'s dependence on China for battery and technology metals was a national security risk. The Iron Range contains significant deposits of copper, nickel, and cobalt — materials essential to electric vehicle batteries and renewable energy systems.',
      },
    ],
  },
]

export const mnDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

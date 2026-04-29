import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'B001230',
    slug: 'tammy-baldwin',
    name: 'Tammy Baldwin',
    party: 'D',
    chamber: 'Senate',
    state: 'Wisconsin',
    currentTitle: 'U.S. Senator from Wisconsin',
    bio: 'Tammy Baldwin has served Wisconsin in the U.S. Senate since 2013, having previously represented Madison in the House for seven terms. She was the first openly gay person elected to the Senate. A progressive voice on healthcare, manufacturing, and workers\' rights, she has focused particularly on protecting the Affordable Care Act and strengthening Buy American provisions to support Midwestern manufacturing jobs.',
    sinceYear: 1999,
    committees: [
      { slug: 'sshr', name: 'Senate Committee on Health, Education, Labor, and Pensions', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
      { slug: 'ssap', name: 'Senate Committee on Appropriations', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, which extended Affordable Care Act subsidies, established Medicare drug price negotiation, and invested heavily in clean energy manufacturing. Baldwin highlighted provisions supporting Midwestern industrial workers and reducing prescription drug costs for Wisconsin seniors.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, which provided $52 billion to revive domestic semiconductor manufacturing. Baldwin championed the legislation as essential to rebuilding American industrial capacity and argued it would create high-paying manufacturing jobs in Wisconsin\'s tech and advanced manufacturing sector.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican budget reconciliation bill, citing deep cuts to Medicaid and SNAP that she argued would harm Wisconsin working families. Baldwin specifically criticized provisions she said would eliminate coverage for hundreds of thousands of Wisconsin residents who gained insurance under the ACA.',
      },
    ],
    keyBills: [
      {
        title: 'Buy American Improvement Act',
        year: 2023,
        month: 3,
        summary: 'Championed legislation tightening Buy American requirements for federally funded infrastructure projects, building on provisions she authored in earlier legislation. Baldwin argued that federal contracts must prioritize American-made steel, iron, and manufactured goods to rebuild Midwestern manufacturing communities.',
      },
      {
        title: 'Affordable Prescriptions for Patients Act',
        year: 2022,
        month: 4,
        summary: 'Co-sponsored bipartisan legislation to limit pharmaceutical companies\' ability to use patent thickets to delay generic drug competition. The bill addressed a key driver of prescription drug costs and passed the Senate Judiciary Committee with bipartisan support before being folded into broader drug pricing legislation.',
      },
    ],
  },

  {
    bioguideId: 'J000293',
    slug: 'ron-johnson',
    name: 'Ron Johnson',
    party: 'R',
    chamber: 'Senate',
    state: 'Wisconsin',
    currentTitle: 'U.S. Senator from Wisconsin',
    bio: 'Ron Johnson has represented Wisconsin in the U.S. Senate since 2011, having defeated incumbent Democrat Russ Feingold in a Tea Party wave election. A businessman who founded a plastics manufacturing company, he is a staunch fiscal conservative and skeptic of federal spending and regulatory expansion. He sits on the Finance and Homeland Security committees and has been one of the Senate\'s most outspoken voices challenging COVID-19 policy and federal debt levels.',
    sinceYear: 2011,
    committees: [
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssbu', name: 'Senate Committee on the Budget', chamber: 'Senate', role: 'Member' },
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'Against',
        summary: 'Voted against the $1.9 trillion COVID relief package, arguing it was excessive and would fuel inflation. Johnson was among the most vocal Republican critics of the legislation, challenging both its fiscal prudence and specific provisions including state and local government aid he argued subsidized Democratic governance failures.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing its tax increases and clean energy spending would harm Wisconsin manufacturers and distort energy markets. Johnson consistently challenged the bill\'s budget accounting and called its deficit reduction projections unrealistic.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent or theft-related crimes. Johnson has been among the Senate\'s most aggressive critics of Biden-era immigration enforcement practices and supported the legislation as a baseline step toward restoring the rule of law at the border.',
      },
    ],
    keyBills: [
      {
        title: 'Federal Spending Transparency Act',
        year: 2023,
        month: 2,
        summary: 'Introduced legislation expanding public access to federal contract and grant data to improve accountability over government spending. Johnson has made fiscal transparency a signature issue, arguing that better public disclosure is a prerequisite for meaningful spending reform.',
      },
      {
        title: 'Protecting Kids on Social Media Act',
        year: 2024,
        month: 5,
        summary: 'Co-sponsored bipartisan legislation restricting children\'s access to social media platforms, requiring age verification and parental consent. Johnson joined a rare bipartisan coalition on the issue, which advanced through the Senate Commerce Committee with support from members across both parties.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'S001213',
    slug: 'bryan-steil',
    name: 'Bryan Steil',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 1st District',
    bio: 'Bryan Steil has represented Wisconsin\'s 1st Congressional District since 2019, succeeding House Speaker Paul Ryan who personally mentored him. A graduate of Georgetown and UW-Madison Law, he worked in manufacturing and legal practice before entering politics. He chairs the House Committee on House Administration, overseeing federal elections administration, and also serves on the Financial Services Committee.',
    sinceYear: 2019,
    committees: [
      { slug: 'jspr', name: 'Joint Committee on Printing', chamber: 'House', role: 'Member' },
      { slug: 'jslc', name: 'Joint Committee of Congress on the Library', chamber: 'House', role: 'Chair' },
      { slug: 'hsha', name: 'House Committee on House Administration', chamber: 'House', role: 'Chair' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American COMPETES Act — Against',
        year: 2022,
        month: 2,
        position: 'Against',
        summary: 'Voted against the House version of the COMPETES Act, arguing it included excessive non-defense spending and regulatory provisions unrelated to semiconductor competitiveness. Steil supported the underlying goal of domestic chip production but pushed for a narrower bill focused strictly on manufacturing incentives.',
      },
      {
        title: 'Electoral Count Reform Act',
        year: 2022,
        month: 12,
        position: 'For',
        summary: 'Voted for the bipartisan Electoral Count Reform Act, clarifying the vice president\'s ministerial role in certifying electoral votes and raising the threshold for congressional objections. As chairman of the House Administration Committee, which oversees federal election law, Steil played an active role in the House\'s consideration of the reform.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican budget reconciliation bill, supporting tax cuts and spending reductions he argued would reduce inflationary pressure and grow Wisconsin\'s manufacturing sector. Steil was an active advocate for provisions extending the 2017 Tax Cuts and Jobs Act.',
      },
    ],
    keyBills: [
      {
        title: 'DOGE Act — Government Efficiency Provisions',
        year: 2025,
        month: 2,
        summary: 'Introduced legislation codifying transparency and accountability measures aligned with the Department of Government Efficiency agenda, requiring detailed public reporting on federal agency spending and staffing levels. Steil positioned the bill as a complement to executive branch reform efforts.',
      },
      {
        title: 'Safeguarding Elections for Voters Act',
        year: 2023,
        month: 9,
        summary: 'Introduced legislation as House Administration Committee Chairman strengthening citizenship verification requirements for voter registration and standardizing election administration records. Steil argued the bill would increase public confidence in election integrity across federal elections.',
      },
    ],
  },

  {
    bioguideId: 'P000607',
    slug: 'mark-pocan',
    name: 'Mark Pocan',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 2nd District',
    bio: 'Mark Pocan has represented Wisconsin\'s 2nd Congressional District — anchored by Madison — since 2013. A small business owner and former state legislator, he was co-chair of the Congressional Progressive Caucus from 2017 to 2021. He sits on the House Appropriations Committee and is a vocal advocate for labor rights, LGBT equality, Medicare for All, and ending endless wars.',
    sinceYear: 2013,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, praising its direct payments, expanded child tax credit, and support for state and local governments. Pocan argued the package was essential to Wisconsin\'s economic recovery and called it the most significant anti-poverty legislation in a generation.',
      },
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Voted for the bipartisan infrastructure law after initially withholding support to pressure for a larger reconciliation package. Pocan ultimately supported the bill as an important down payment on public investment, citing Wisconsin\'s infrastructure needs including aging bridges, broadband gaps, and water systems.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, calling it "a giveaway to billionaires paid for by working people." Pocan was particularly critical of Medicaid cuts, arguing they would eliminate coverage for tens of thousands of Madisonians and increase uncompensated care costs at Wisconsin hospitals.',
      },
    ],
    keyBills: [
      {
        title: 'Medicare for All Act',
        year: 2023,
        month: 5,
        summary: 'Co-sponsored the Medicare for All Act as a leading House progressive, legislation that would establish a single-payer national health insurance system eliminating premiums, deductibles, and copays. Pocan has championed universal healthcare as a baseline right throughout his congressional career.',
      },
      {
        title: 'Protect Our Care Act',
        year: 2022,
        month: 3,
        summary: 'Introduced legislation strengthening protections for ACA marketplace enrollees and permanently extending enhanced premium subsidies. The bill addressed coverage gaps exposed during the COVID-19 pandemic and built on Pocan\'s sustained advocacy for universal healthcare access.',
      },
    ],
  },

  {
    bioguideId: 'V000135',
    slug: 'derrick-van-orden',
    name: 'Derrick Van Orden',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 3rd District',
    bio: 'Derrick Van Orden has represented Wisconsin\'s 3rd Congressional District since 2023, flipping a seat that had been held by Democrat Ron Kind for 26 years. A retired Navy SEAL who deployed 11 times including to Afghanistan, Iraq, and the Philippines, he brings a combat veteran perspective to the Armed Services and Agriculture Committees. His district spans western Wisconsin\'s agricultural heartland from La Crosse to Eau Claire.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsvr', name: 'House Committee on Veterans\' Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, supporting strong military readiness funding and provisions benefiting Wisconsin National Guard units. Van Orden drew on his SEAL background in advocating for special operations and joint force readiness funding within the Armed Services Committee.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Van Orden has been a consistent advocate for strict border security and immigration enforcement throughout his congressional tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its agricultural provisions and tax cuts he argued would benefit western Wisconsin\'s farming communities. Van Orden used his Agriculture Committee seat to advocate for commodity support and crop insurance programs critical to his district\'s dairy and grain farmers.',
      },
    ],
    keyBills: [
      {
        title: 'SEAL Family Support Act',
        year: 2024,
        month: 3,
        summary: 'Introduced legislation improving healthcare and transition assistance for Gold Star families of fallen special operations personnel, drawing directly on Van Orden\'s 26-year Navy SEAL career. The bill addressed gaps in survivor benefit programs identified by the special operations community.',
      },
      {
        title: 'Rural Broadband Access Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation streamlining USDA rural broadband grant processes to accelerate deployment in underserved communities like those across Wisconsin\'s 3rd District. Van Orden argued that rural broadband is essential infrastructure for agricultural productivity, telehealth, and economic opportunity in western Wisconsin.',
      },
    ],
  },

  {
    bioguideId: 'M001160',
    slug: 'gwen-moore',
    name: 'Gwen Moore',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 4th District',
    bio: 'Gwen Moore has represented Milwaukee\'s 4th Congressional District since 2005, becoming the first Black member of Congress elected from Wisconsin. A product of Milwaukee\'s public housing and school system, she is a leading voice on poverty, social justice, tax equity, and women\'s rights. She serves on the Ways and Means Committee and the Joint Economic Committee, where she focuses on closing the racial wealth gap and strengthening the social safety net.',
    sinceYear: 2005,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID relief package, highlighting its expanded Child Tax Credit and direct payments as transformative for Milwaukee\'s high-poverty communities. Moore argued the bill would lift hundreds of thousands of Wisconsin children out of poverty and provide a lifeline to minority-owned small businesses devastated by the pandemic.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the Inflation Reduction Act, praising its Medicare drug price negotiation provisions and premium subsidy extensions. Moore has been a long-standing advocate for reducing prescription drug costs, which she argued disproportionately burden low-income Milwaukee residents who face difficult choices between medications and other necessities.',
      },
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the Republican reconciliation bill, arguing its Medicaid and SNAP cuts would devastate Milwaukee\'s working-class communities. Moore called the bill "a declaration of war on the poor" and cited data showing Milwaukee\'s 4th District as one of the nation\'s highest-poverty districts that would be most harmed by proposed safety net reductions.',
      },
    ],
    keyBills: [
      {
        title: 'STEP Act — Stop Tax Evasion by the Privileged',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation closing the stepped-up basis tax loophole that allows wealthy estates to avoid capital gains taxes on inherited assets. Moore argued the provision disproportionately benefits the ultra-wealthy and contributes to the racial wealth gap by preserving intergenerational wealth accumulation among already-privileged families.',
      },
      {
        title: 'Expanding Child Tax Credit for Working Families',
        year: 2022,
        month: 6,
        summary: 'Championed permanent extension of the expanded Child Tax Credit established in the American Rescue Plan, which reduced child poverty dramatically during its one-year implementation. Moore\'s Ways and Means seat gave her a direct role in tax credit policy, and she was among the most vocal advocates for making the expansion permanent.',
      },
    ],
  },

  {
    bioguideId: 'F000471',
    slug: 'scott-fitzgerald',
    name: 'Scott Fitzgerald',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 5th District',
    bio: 'Scott Fitzgerald has represented Wisconsin\'s 5th Congressional District — covering the suburban Milwaukee counties of Waukesha, Jefferson, and Washington — since 2021. He served as Wisconsin State Senate Majority Leader from 2011 to 2021, leading Republicans through the redistricting fight and Act 10 battles. He sits on the House Judiciary and Financial Services Committees and is a staunch conservative on fiscal, immigration, and social issues.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal suspending the debt limit through early 2025 in exchange for discretionary spending caps. Fitzgerald supported the measure as a necessary step to extract spending concessions while avoiding a catastrophic default that would harm Wisconsin\'s financial sector.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Fitzgerald has consistently supported strict immigration enforcement as a priority issue for his suburban Milwaukee constituency.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation package, supporting its tax cuts and spending reductions. Drawing on his decade as Wisconsin Senate Majority Leader, Fitzgerald argued the bill reflected conservative fiscal principles he had championed at the state level.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting Children from Dangerous Drugs Act',
        year: 2023,
        month: 8,
        summary: 'Introduced legislation increasing criminal penalties for fentanyl distribution that results in death, building on his Judiciary Committee work on drug enforcement. Fitzgerald cited the opioid crisis\'s toll on suburban communities like those in his district as the motivation for tougher sentencing measures.',
      },
      {
        title: 'Financial Institution Regulatory Relief Act',
        year: 2022,
        month: 11,
        summary: 'Co-sponsored legislation reducing compliance burdens on community banks and credit unions, institutions that serve as primary lenders in Wisconsin\'s suburban and rural communities. Fitzgerald argued Dodd-Frank\'s regulations disproportionately burdened smaller institutions that did not contribute to the 2008 financial crisis.',
      },
    ],
  },

  {
    bioguideId: 'G000576',
    slug: 'glenn-grothman',
    name: 'Glenn Grothman',
    party: 'R',
    chamber: 'House',
    district: 6,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 6th District',
    bio: 'Glenn Grothman has represented Wisconsin\'s 6th Congressional District — covering Sheboygan, Fond du Lac, and the Fox River Valley — since 2015. A former Wisconsin State Senator known for his blunt conservatism, he serves on the Judiciary, Oversight, Education, and Budget Committees. He is one of the House\'s most consistent conservative votes and a vocal critic of federal spending, regulatory overreach, and immigration policy.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the bipartisan infrastructure law, arguing its price tag was excessive and it represented a gateway to larger Democratic spending packages. Grothman consistently opposes large-scale federal spending bills regardless of bipartisan support, citing concerns about the national debt.',
      },
      {
        title: 'Against Fiscal Responsibility Act',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the debt ceiling deal, arguing the spending cap concessions were insufficient relative to the scale of the fiscal problem. Grothman has taken hardline positions on federal spending throughout his tenure and opposed agreements he viewed as inadequate compromise.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican budget reconciliation bill, supporting its spending cuts and tax reductions. Grothman was among the members who pushed for deeper cuts and viewed the final bill as an acceptable — if incomplete — step toward fiscal consolidation.',
      },
    ],
    keyBills: [
      {
        title: 'No Taxpayer Funding for Abortion Act',
        year: 2023,
        month: 1,
        summary: 'Co-sponsored legislation making permanent the Hyde Amendment\'s prohibition on federal funding for abortion services and extending the prohibition to all federal programs. Grothman has been a consistent advocate for restricting abortion access through federal funding limits throughout his congressional career.',
      },
      {
        title: 'Welfare Reform and Upward Mobility Act',
        year: 2022,
        month: 7,
        summary: 'Introduced legislation strengthening work requirements for federal welfare programs including SNAP, Medicaid, and housing assistance. Grothman argued that robust work requirements are essential to reducing long-term dependency and encouraging upward economic mobility.',
      },
    ],
  },

  {
    bioguideId: 'T000165',
    slug: 'thomas-p-tiffany',
    name: 'Thomas P. Tiffany',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 7th District',
    bio: 'Tom Tiffany has represented Wisconsin\'s 7th Congressional District — the state\'s vast northernmost district covering the Northwoods — since winning a 2020 special election. A former state legislator and resort owner, he serves on the Judiciary and Natural Resources Committees. He is a strong advocate for resource extraction industries, hunting and fishing rights, and reducing federal land management restrictions that affect the region\'s forestry and recreation economy.',
    sinceYear: 2020,
    committees: [
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
      { slug: 'hsii', name: 'House Committee on Natural Resources', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the bipartisan infrastructure law, arguing it spent too much and would expand government\'s role in the economy. Tiffany has consistently opposed large spending packages and was among the group of House conservatives who voted against the measure despite its bipartisan Senate passage.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Tiffany has been a vocal critic of federal immigration enforcement policies he views as lax and has consistently supported stronger border security measures.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, backing provisions he argued would reduce federal regulatory burdens on Wisconsin\'s timber, agriculture, and recreation industries. Tiffany used his Natural Resources seat to advocate for provisions expanding access to federal lands for commercial and recreational use.',
      },
    ],
    keyBills: [
      {
        title: 'TRUST in Congress Act — Federal Land Disclosure',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation requiring expanded public disclosure of federal land management decisions affecting local economies, particularly in states with large federal land footprints. Tiffany argued that northern Wisconsin communities deserve greater transparency and input into decisions about national forests and federally managed waterways that dominate the regional economy.',
      },
      {
        title: 'Protecting Access to Public Lands Act',
        year: 2022,
        month: 9,
        summary: 'Championed legislation limiting the federal government\'s ability to restrict recreational access to public lands, a priority for Wisconsin\'s outdoor recreation economy including hunting, fishing, snowmobiling, and ATV use in the Northwoods.',
      },
    ],
  },

  {
    bioguideId: 'W000829',
    slug: 'tony-wied',
    name: 'Tony Wied',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Wisconsin',
    currentTitle: 'U.S. Representative, Wisconsin 8th District',
    bio: 'Tony Wied has represented Wisconsin\'s 8th Congressional District — covering Green Bay and the Fox Valley — since 2025, succeeding the retiring Mike Gallagher. A businessman and community leader from De Pere, he serves on the Small Business, Transportation, and Agriculture Committees. His district is home to significant paper, food processing, and tourism industries, and he has focused on reducing regulatory burdens on small businesses and supporting Wisconsin\'s agricultural and manufacturing sectors.',
    sinceYear: 2024,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in one of his first major floor votes as a freshman member, supporting mandatory ICE detention for undocumented immigrants charged with violent crimes. Wied argued the bill was a necessary step to restore order and accountability to federal immigration enforcement.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, supporting its tax relief for small businesses and farms he argued would directly benefit his northeastern Wisconsin district. Wied drew on his business background in advocating for provisions reducing the regulatory and tax burdens on small manufacturers.',
      },
      {
        title: 'FY2026 Government Funding Resolution',
        year: 2026,
        month: 3,
        position: 'For',
        summary: 'Voted for the continuing resolution funding the federal government through the remainder of FY2026, supporting provisions protecting transportation and agriculture programs important to the 8th District. As a freshman, Wied has generally aligned with House Republican leadership on procedural and funding votes.',
      },
    ],
    keyBills: [
      {
        title: 'Small Business Regulatory Flexibility Improvement Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation requiring federal agencies to conduct more rigorous economic impact analyses before issuing regulations affecting small businesses with fewer than 500 employees. Wied drew on his business experience to argue that regulatory compliance costs disproportionately burden smaller firms that lack the staff to navigate complex federal requirements.',
      },
      {
        title: 'Supporting American Agriculture Export Competitiveness Act',
        year: 2025,
        month: 6,
        summary: 'Championed provisions in the Agriculture Committee expanding USDA trade promotion programs for Wisconsin\'s dairy, paper, and specialty crop exporters. The 8th District\'s cheese and dairy industries depend heavily on export markets, making trade promotion a high-priority constituency issue.',
      },
    ],
  },
]

export const wiDelegationProfiles: Record<string, PoliticianProfile> = Object.fromEntries(
  memberData.map((d) => [d.slug, buildCongressProfile(d)])
)

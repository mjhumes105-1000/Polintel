import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'F000479',
    slug: 'john-fetterman',
    name: 'John Fetterman',
    party: 'D',
    chamber: 'Senate',
    state: 'Pennsylvania',
    currentTitle: 'U.S. Senator from Pennsylvania',
    bio: 'John Fetterman has served Pennsylvania in the U.S. Senate since 2023, after defeating Republican Mehmet Oz in a nationally watched race despite suffering a stroke weeks before Election Day. The former mayor of Braddock, Pennsylvania and Lieutenant Governor of Pennsylvania, he is known for his unconventional political style and has shifted toward more centrist positions on Israel and border security since taking office. He serves on the Agriculture, Commerce, Homeland Security, and Helsinki Commission committees.',
    sinceYear: 2023,
    committees: [
      { slug: 'jcse', name: 'Commission on Security and Cooperation in Europe', chamber: 'Senate', role: 'Member' },
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'ssaf', name: 'Senate Committee on Agriculture, Nutrition, and Forestry', chamber: 'Senate', role: 'Member' },
      { slug: 'sscm', name: 'Senate Committee on Commerce, Science, and Transportation', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Security Supplemental — Ukraine, Israel, Indo-Pacific',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $95 billion national security package providing aid to Ukraine, Israel, and Taiwan. Fetterman was an early and vocal Democratic supporter of robust Israel assistance after the October 7, 2023 Hamas attacks, and used the package to reinforce his positioning as a pro-Israel Democrat willing to break with progressive colleagues.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Was one of a small number of Democrats who voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, breaking with the overwhelming majority of Senate Democrats. Fetterman cited his general support for stricter immigration enforcement and argued that Democrats had lost credibility on border security issues.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Was not yet in the Senate when the Inflation Reduction Act passed (he took office in January 2023), but campaigned in support of the package\'s climate and drug pricing provisions as essential for Pennsylvania steelworkers and seniors. He has since voted to defend the law\'s clean energy incentives against Republican repeal efforts.',
      },
    ],
    keyBills: [
      {
        title: 'Pennsylvania Steel Industry Competitiveness Act',
        year: 2024,
        month: 3,
        summary: 'Championed legislation supporting the domestic steel industry, reflecting his roots in Braddock — a former steel town devastated by deindustrialization. Fetterman has been a vocal advocate for steel tariffs and domestic content requirements, aligning with both Pennsylvania\'s steelworker unions and the broader bipartisan industrial policy consensus on defending American manufacturing from Chinese competition.',
      },
    ],
  },

  {
    bioguideId: 'M001243',
    slug: 'david-mccormick',
    name: 'David McCormick',
    party: 'R',
    chamber: 'Senate',
    state: 'Pennsylvania',
    currentTitle: 'U.S. Senator from Pennsylvania',
    bio: 'David McCormick has served Pennsylvania in the U.S. Senate since January 2025, winning a rematch against Democratic incumbent Bob Casey after narrowly losing the 2022 Republican primary to Mehmet Oz. A former CEO of Bridgewater Associates and Under Secretary of the Treasury under George W. Bush, McCormick brings extensive finance and national security experience to the Senate. He serves on the Foreign Relations, Energy, Aging, and Joint Economic committees.',
    sinceYear: 2025,
    committees: [
      { slug: 'spag', name: 'Senate Special Committee on Aging', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfr', name: 'Senate Committee on Foreign Relations', chamber: 'Senate', role: 'Member' },
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'Senate', role: 'Member' },
      { slug: 'sseg', name: 'Senate Committee on Energy and Natural Resources', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in the Senate, consistent with his campaign emphasis on border security and immigration enforcement. McCormick had made border security a central campaign issue and supported the bill as a necessary step toward restoring order and rule of law at the southern border.',
      },
      {
        title: 'FY2026 Budget Reconciliation — Energy Provisions',
        year: 2025,
        month: 12,
        position: 'For',
        summary: 'Voted for budget reconciliation provisions advancing domestic energy development, using his Energy and Natural Resources Committee seat to support expanded oil, gas, and coal production in Pennsylvania. McCormick argued that energy abundance is both an economic necessity and a national security imperative, and that Pennsylvania\'s energy resources must be fully utilized.',
      },
    ],
    keyBills: [
      {
        title: 'Protecting American Energy Security Act',
        year: 2025,
        month: 3,
        summary: 'Co-led legislation streamlining federal permitting for natural gas pipelines and LNG export terminals, targeting regulatory bottlenecks that McCormick argued were preventing Pennsylvania from fully capitalizing on its vast Marcellus Shale natural gas resources. The bill drew on his background in finance and national security to link domestic energy production to U.S. geopolitical leverage over Russia and China.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'F000466',
    slug: 'brian-k-fitzpatrick',
    name: 'Brian K. Fitzpatrick',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 1st District',
    bio: 'Brian Fitzpatrick has represented Pennsylvania\'s 1st Congressional District — covering Bucks County north of Philadelphia — since 2017, succeeding his brother Mike Fitzpatrick in the seat. A former FBI Special Agent and federal prosecutor who spent years overseas on national security investigations, he co-chairs the Problem Solvers Caucus and is one of the most bipartisan Republicans in the House. He serves on the House Ways and Means and Intelligence committees.',
    sinceYear: 2017,
    committees: [
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Was one of thirteen Republicans who voted for the $1.2 trillion bipartisan infrastructure law, providing crucial votes to overcome progressive Democratic holdouts. Fitzpatrick cited the law\'s benefits for Bucks County roads, bridges, and transit connectivity to Philadelphia as directly serving his constituents, and his Problem Solvers Caucus co-chairmanship drove his instinct toward deal-making over partisanship.',
      },
      {
        title: 'Ukraine Security Assistance',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $61 billion Ukraine aid package, bucking a significant bloc of House Republicans who opposed continued assistance. Fitzpatrick drew on his national security and intelligence background to argue that abandoning Ukraine would embolden adversaries and ultimately cost the United States more in the long run.',
      },
    ],
    keyBills: [
      {
        title: 'Problem Solvers Caucus Bipartisan Policy Framework',
        year: 2023,
        month: 9,
        summary: 'Co-led the Problem Solvers Caucus framework for bipartisan government funding solutions, seeking to break the pattern of last-minute shutdown fights and continuing resolutions. Fitzpatrick\'s co-chairmanship of the group has made him a key broker in bipartisan negotiations on appropriations, immigration, and budget deals throughout the 118th and 119th Congresses.',
      },
    ],
  },

  {
    bioguideId: 'B001296',
    slug: 'brendan-f-boyle',
    name: 'Brendan F. Boyle',
    party: 'D',
    chamber: 'House',
    district: 2,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 2nd District',
    bio: 'Brendan Boyle has represented Pennsylvania\'s 2nd Congressional District — covering Philadelphia\'s northeast neighborhoods and inner suburbs — since 2015. A former Pennsylvania state representative whose father was a union laborer and mother an immigrant from Ireland, he serves as Ranking Member of the House Budget Committee and sits on Ways and Means. He is a leading Democratic voice on budget policy, tax equity, Social Security, and Medicare protection.',
    sinceYear: 2015,
    committees: [
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Ranking Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Led Democratic opposition to the House Republican reconciliation bill from his position as Budget Committee Ranking Member, releasing detailed analyses showing the bill\'s Medicaid cuts would eliminate coverage for hundreds of thousands of Pennsylvanians. Boyle called the bill "the largest transfer of wealth from the poor to the rich in American history" and organized constituent pressure campaigns targeting vulnerable Republican members.',
      },
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, which included direct payments, expanded unemployment benefits, and child tax credits he argued were transformative for working-class Philadelphia families. Boyle championed the package\'s pension relief provisions, which prevented cuts to multiemployer pension plans protecting thousands of union workers in his district.',
      },
    ],
    keyBills: [
      {
        title: 'Social Security 2100 Act',
        year: 2023,
        month: 10,
        summary: 'Co-led legislation to expand Social Security benefits and extend the program\'s solvency by making high earners pay Social Security taxes on all income above $400,000. Boyle has championed the bill as essential for northeast Philadelphia\'s large retiree population and has used his Ways and Means and Budget committee seats to advance the political debate over Social Security\'s long-term funding.',
      },
    ],
  },

  {
    bioguideId: 'E000296',
    slug: 'dwight-evans',
    name: 'Dwight Evans',
    party: 'D',
    chamber: 'House',
    district: 3,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 3rd District',
    bio: 'Dwight Evans has represented Pennsylvania\'s 3rd Congressional District — covering Philadelphia\'s predominantly Black northwest neighborhoods — since a 2016 special election. He previously served for 36 years in the Pennsylvania House of Representatives, where he rose to Appropriations Committee chair. He sits on the House Ways and Means Committee and focuses on economic development, food insecurity, small business investment, and community reinvestment in urban Philadelphia.',
    sinceYear: 2016,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'American Rescue Plan Act',
        year: 2021,
        month: 3,
        position: 'For',
        summary: 'Voted for the $1.9 trillion COVID-19 relief package, highlighting its investments in community health centers and small business relief for Philadelphia\'s hardest-hit neighborhoods. Evans focused on the bill\'s $350 billion for state and local governments as essential for Philadelphia to avoid devastating cuts to public safety and social services.',
      },
      {
        title: 'Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'For',
        summary: 'Voted for the landmark climate, health care, and tax package, emphasizing its Affordable Care Act subsidy extensions that would reduce health insurance costs for uninsured Philadelphia residents and small business owners in his district. Evans also supported the book minimum tax on corporations as a step toward making the tax system more equitable.',
      },
    ],
    keyBills: [
      {
        title: 'New Markets Tax Credit Extension Act',
        year: 2023,
        month: 5,
        summary: 'Has been a consistent champion of making the New Markets Tax Credit permanent, using his Ways and Means seat to advance legislation extending the credit that incentivizes private investment in low-income communities. The NMTC has driven significant commercial real estate development, community facility investment, and business financing in Evans\'s northwest Philadelphia district over the past two decades.',
      },
    ],
  },

  {
    bioguideId: 'D000631',
    slug: 'madeleine-dean',
    name: 'Madeleine Dean',
    party: 'D',
    chamber: 'House',
    district: 4,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 4th District',
    bio: 'Madeleine Dean has represented Pennsylvania\'s 4th Congressional District — covering Philadelphia\'s northwestern suburbs including Montgomery County — since 2019. A former Pennsylvania state representative, English professor, and lawyer, she serves on the House Foreign Affairs and Appropriations committees and became nationally known as one of the House impeachment managers during both Trump impeachment trials. She is a leading Democratic voice on democracy, rule of law, and gun violence prevention.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Second Impeachment of President Trump — Incitement of Insurrection',
        year: 2021,
        month: 1,
        position: 'For',
        summary: 'Voted to impeach President Trump for incitement of insurrection following the January 6, 2021 Capitol attack, and served as one of nine House impeachment managers in the subsequent Senate trial. Dean delivered a widely noted opening argument drawing on her background as a lawyer and English professor, presenting the constitutional case for conviction.',
      },
      {
        title: 'Bipartisan Safer Communities Act',
        year: 2022,
        month: 6,
        position: 'For',
        summary: 'Voted for the first major federal gun safety legislation in nearly three decades. Dean, who lost a friend to gun violence, has made gun safety a defining issue of her congressional career and argued the bill\'s enhanced background checks, red flag law funding, and mental health investments were a meaningful but insufficient first step.',
      },
    ],
    keyBills: [
      {
        title: 'READI Act (Research on Extreme Violence)',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation restoring CDC and NIH authority to conduct gun violence research, addressing the decades-long de facto research ban caused by the Dickey Amendment. Dean argued that treating gun violence as a public health crisis requiring rigorous scientific study is the foundation for evidence-based policy, and that defunding research has left lawmakers without the data needed to craft effective solutions.',
      },
    ],
  },

  {
    bioguideId: 'S001205',
    slug: 'mary-gay-scanlon',
    name: 'Mary Gay Scanlon',
    party: 'D',
    chamber: 'House',
    district: 5,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 5th District',
    bio: 'Mary Gay Scanlon has represented Pennsylvania\'s 5th Congressional District — covering Philadelphia\'s southern suburbs including Delaware County — since a 2018 special election. A civil rights lawyer who spent decades at public interest firms before entering Congress, she serves on the House Judiciary and Rules committees. A former impeachment manager and voting rights champion, she focuses on voting access, criminal justice reform, and immigration court reform.',
    sinceYear: 2018,
    committees: [
      { slug: 'hsru', name: 'House Committee on Rules', chamber: 'House', role: 'Member' },
      { slug: 'hsju', name: 'House Committee on the Judiciary', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'John Lewis Voting Rights Advancement Act',
        year: 2021,
        month: 8,
        position: 'For',
        summary: 'Voted for the House-passed legislation restoring and modernizing the preclearance provisions of the Voting Rights Act gutted by the Supreme Court in Shelby County v. Holder. Scanlon used her Judiciary Committee seat to lead hearings on voting rights and argued the bill was essential for protecting ballot access in states with histories of discriminatory election administration.',
      },
      {
        title: 'Against Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'Against',
        summary: 'Voted against the Laken Riley Act, drawing on her background as an immigration attorney to argue the bill violated basic due process by mandating detention without conviction. Scanlon highlighted the bill\'s potential impact on the large immigrant population in Delaware County and called for immigration reform that addresses border security without abandoning constitutional rights.',
      },
    ],
    keyBills: [
      {
        title: 'Due Process for All Act',
        year: 2023,
        month: 6,
        summary: 'Introduced legislation restoring access to federal courts for immigrants facing deportation orders who allege due process violations in immigration proceedings. Drawing on her decades of civil rights law experience, Scanlon argued that stripping judicial review from immigration cases has created a two-tiered justice system in which immigrants face potentially life-altering consequences without meaningful constitutional protection.',
      },
    ],
  },

  {
    bioguideId: 'H001085',
    slug: 'chrissy-houlahan',
    name: 'Chrissy Houlahan',
    party: 'D',
    chamber: 'House',
    district: 6,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 6th District',
    bio: 'Chrissy Houlahan has represented Pennsylvania\'s 6th Congressional District — covering Chester County west of Philadelphia — since 2019. An Air Force veteran, former engineer, and nonprofit executive, she serves on the House Armed Services and Intelligence committees and is a leading voice on military readiness, national security, and STEM workforce development. Her district includes significant defense contractors and pharmaceutical manufacturers.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, using her Armed Services Committee seat to advance provisions strengthening cybersecurity and the defense industrial base. Houlahan focused on provisions supporting defense technology innovation and the private-sector contractors in Chester County that supply critical components to the Pentagon.',
      },
      {
        title: 'Ukraine Security Assistance Package',
        year: 2024,
        month: 4,
        position: 'For',
        summary: 'Voted for the $61 billion Ukraine aid package, drawing on her military background and Intelligence Committee access to argue that Russian victory in Ukraine would fundamentally alter the European security order at enormous long-term cost to the United States. Houlahan was among the consistent Democratic voices for sustained Ukraine support.',
      },
    ],
    keyBills: [
      {
        title: 'STEM Opportunities Act',
        year: 2022,
        month: 7,
        summary: 'Co-led legislation directing federal agencies to collect better data on STEM workforce demographics and to improve support for women and underrepresented minorities pursuing science and engineering careers. Houlahan, a Penn-trained engineer, argued that broadening the STEM talent pool is both an equity imperative and a national competitiveness necessity as the United States competes with China in advanced technology sectors.',
      },
    ],
  },

  {
    bioguideId: 'M001230',
    slug: 'ryan-mackenzie',
    name: 'Ryan Mackenzie',
    party: 'R',
    chamber: 'House',
    district: 7,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 7th District',
    bio: 'Ryan Mackenzie has represented Pennsylvania\'s 7th Congressional District — covering the Lehigh Valley including Allentown and Bethlehem — since January 2025. A former Pennsylvania state representative who served in the state House since 2013, he serves on the House Homeland Security, Education and Workforce, and Foreign Affairs committees. His district\'s large manufacturing and healthcare economy shapes his focus on regulatory relief and domestic industrial policy.',
    sinceYear: 2025,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes, consistent with his Homeland Security Committee assignment and his campaign emphasis on border security. Mackenzie argued the Lehigh Valley\'s growing immigrant community deserves safety and that consistent enforcement is the foundation of an orderly immigration system.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, supporting its manufacturing incentives, border security spending, and tax provisions he argued would benefit Lehigh Valley employers. Mackenzie\'s district includes major steel and manufacturing operations and he championed provisions he said would level the playing field against foreign competition.',
      },
    ],
    keyBills: [
      {
        title: 'Lehigh Valley Manufacturing Competitiveness Act',
        year: 2025,
        month: 6,
        summary: 'Introduced legislation targeted at the regulatory burdens facing small and mid-size manufacturers in the Lehigh Valley, building on his Education and Workforce Committee seat to address workforce development gaps. The bill combined apprenticeship program expansion with targeted regulatory relief for manufacturers competing against imports.',
      },
    ],
  },

  {
    bioguideId: 'B001327',
    slug: 'robert-p-bresnahan-jr',
    name: 'Robert P. Bresnahan, Jr.',
    party: 'R',
    chamber: 'House',
    district: 8,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 8th District',
    bio: 'Rob Bresnahan has represented Pennsylvania\'s 8th Congressional District — covering the Scranton-Wilkes-Barre area and rural northeastern Pennsylvania — since January 2025. A businessman and the owner of a lumber and building materials company, he narrowly flipped the seat held by Democrat Matt Cartwright. He serves on the House Small Business, Transportation, and Agriculture committees, reflecting the district\'s working-class economic base.',
    sinceYear: 2025,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, supporting its small business tax provisions and deregulatory measures he argued would benefit northeastern Pennsylvania employers like his own family\'s building materials company. Bresnahan positioned the bill as delivering on the economic promises of the Trump agenda for working-class Scranton-area voters.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act in his first weeks in Congress, consistent with his campaign\'s immigration enforcement messaging in a district that voted for Trump by double digits. Bresnahan argued that communities like Scranton deserve a federal government that enforces immigration law consistently.',
      },
    ],
    keyBills: [
      {
        title: 'Small Business Regulatory Relief Act',
        year: 2025,
        month: 4,
        summary: 'Introduced legislation requiring federal agencies to conduct small business impact analyses before finalizing major regulations, drawing on his experience as a small business owner facing compliance costs. Bresnahan argued that small businesses like those throughout northeastern Pennsylvania lack the compliance departments of large corporations and bear a disproportionate burden from federal regulatory expansion.',
      },
    ],
  },

  {
    bioguideId: 'M001204',
    slug: 'daniel-meuser',
    name: 'Daniel Meuser',
    party: 'R',
    chamber: 'House',
    district: 9,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 9th District',
    bio: 'Dan Meuser has represented Pennsylvania\'s 9th Congressional District — covering central Pennsylvania including the Bloomsburg and Hazleton areas — since 2019. A former Pennsylvania Secretary of Revenue and business executive who ran a mobility products company, he serves on the House Financial Services and Small Business committees. He focuses on regulatory relief, financial services oversight, and economic development for rural and small-city Pennsylvania.',
    sinceYear: 2019,
    committees: [
      { slug: 'hssm', name: 'House Committee on Small Business', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the $1.2 trillion bipartisan infrastructure law, arguing that the bill\'s cost was excessive and that it provided a political win for the Biden administration while adding to the national debt. Meuser preferred more targeted infrastructure investments rather than what he characterized as a vehicle for Democratic spending priorities.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, using his Financial Services and Small Business seats to champion provisions reducing regulatory burdens on community banks and small businesses. Meuser argued the bill\'s deregulatory measures and tax cuts would spur investment in central Pennsylvania\'s rural economy.',
      },
    ],
    keyBills: [
      {
        title: 'Community Bank Regulatory Relief Act',
        year: 2023,
        month: 8,
        summary: 'Introduced legislation raising the asset threshold for enhanced prudential regulation of community banks, arguing that Dodd-Frank stress testing and compliance requirements designed for systemically important financial institutions impose unsustainable burdens on the small community banks that serve rural central Pennsylvania. Meuser used his Financial Services Committee seat to advance a broader agenda of right-sizing banking regulation for smaller institutions.',
      },
    ],
  },

  {
    bioguideId: 'P000605',
    slug: 'scott-perry',
    name: 'Scott Perry',
    party: 'R',
    chamber: 'House',
    district: 10,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 10th District',
    bio: 'Scott Perry has represented Pennsylvania\'s 10th Congressional District — covering Harrisburg and York — since 2013. A retired Army Brigadier General who served combat tours in Iraq, he chairs the House Freedom Caucus and is one of the most prominent conservative voices in the House on border security, federal spending restraint, and limiting executive power. He serves on the Foreign Affairs, Homeland Security, Intelligence, and Oversight committees, and was a central figure in post-2020 election challenges.',
    sinceYear: 2013,
    committees: [
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
      { slug: 'hsfa', name: 'House Committee on Foreign Affairs', chamber: 'House', role: 'Member' },
      { slug: 'hlig', name: 'House Permanent Select Committee on Intelligence', chamber: 'House', role: 'Member' },
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'Against',
        summary: 'Voted against the bipartisan infrastructure law, arguing it was a vehicle for excessive federal spending and would be used by Democrats to justify further social spending. As a Freedom Caucus leader, Perry was part of the conservative bloc that opposed the deal even as a bipartisan House majority passed it.',
      },
      {
        title: 'Against Kevin McCarthy as Speaker — Motion to Vacate',
        year: 2023,
        month: 10,
        position: 'For',
        summary: 'Voted for the motion to vacate the chair that removed Kevin McCarthy as Speaker of the House, one of eight Republicans who triggered the ouster. Perry cited McCarthy\'s last-minute spending deal with Democrats as a betrayal of fiscal commitments the conference had made to Freedom Caucus members as conditions for McCarthy\'s original Speaker election.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill after initially withholding support to push for deeper spending cuts, ultimately backing the package as the most conservative achievable outcome. Perry used his Freedom Caucus position to secure Medicaid work requirements and additional regulatory rollback provisions.',
      },
    ],
    keyBills: [
      {
        title: 'Border Security and Immigration Enforcement Act',
        year: 2023,
        month: 2,
        summary: 'Co-led comprehensive border security legislation mandating completion of the southern border wall, eliminating the diversity visa lottery, and ending catch-and-release practices. Perry has made border security his signature issue and used his Homeland Security and Foreign Affairs committee positions to advocate for a zero-tolerance approach to illegal immigration.',
      },
    ],
  },

  {
    bioguideId: 'S001199',
    slug: 'lloyd-smucker',
    name: 'Lloyd Smucker',
    party: 'R',
    chamber: 'House',
    district: 11,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 11th District',
    bio: 'Lloyd Smucker has represented Pennsylvania\'s 11th Congressional District — covering Lancaster County and surrounding areas — since 2017. A former state senator and commercial construction executive from a Lancaster County family, he serves on the House Ways and Means Committee, the Budget Committee, and the Joint Economic Committee. He focuses on tax policy, fiscal responsibility, and economic development for Lancaster\'s diverse agricultural and manufacturing economy.',
    sinceYear: 2017,
    committees: [
      { slug: 'jsec', name: 'Joint Economic Committee', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul, championing the corporate rate reduction and pass-through business provisions as beneficial for Lancaster County\'s large number of small and family businesses. Smucker\'s background as a construction company executive informed his strong support for the bill\'s business tax changes.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using his Ways and Means and Budget committee seats to help shape the package\'s tax and spending provisions. Smucker focused on making the 2017 Tax Cuts and Jobs Act permanent and on provisions supporting agricultural businesses critical to Lancaster County\'s farm economy.',
      },
    ],
    keyBills: [
      {
        title: 'Small Business Tax Fairness Act',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation expanding the deductibility of pass-through business income for small and family businesses, building on the 2017 tax law\'s Section 199A deduction that Smucker has advocated making permanent. The bill targeted the Lancaster County business community he knows from his years running a family construction company.',
      },
    ],
  },

  {
    bioguideId: 'L000602',
    slug: 'summer-l-lee',
    name: 'Summer L. Lee',
    party: 'D',
    chamber: 'House',
    district: 12,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 12th District',
    bio: 'Summer Lee has represented Pennsylvania\'s 12th Congressional District — covering Pittsburgh and surrounding Allegheny County communities — since 2023. The first Black woman elected to Congress from Pennsylvania, she is a former Pennsylvania state representative and progressive activist who came up through grassroots organizing. She serves on the House Oversight and Education and Workforce committees, and is a member of the Congressional Progressive Caucus and the Squad.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsgo', name: 'House Committee on Oversight and Government Reform', chamber: 'House', role: 'Member' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Was a forceful opponent of the House Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would devastate Pittsburgh\'s working-class communities of color. Lee organized constituent town halls highlighting the bill\'s impact on steelworker families, seniors, and children in her district, and called it an attack on the communities that have been most harmed by deindustrialization.',
      },
      {
        title: 'Against Gaza Cease-Fire Opposition',
        year: 2024,
        month: 2,
        position: 'For',
        summary: 'Voted for a cease-fire resolution in Gaza, breaking with House Democratic leadership to support calls for an immediate halt to military operations. Lee was among the most vocal progressive Democrats calling for conditions on U.S. military assistance to Israel following the October 7, 2023 Hamas attacks and Israel\'s military response.',
      },
    ],
    keyBills: [
      {
        title: 'Steel Industry Preservation Act',
        year: 2024,
        month: 3,
        summary: 'Co-led legislation strengthening federal procurement requirements for domestically produced steel and expanding trade enforcement mechanisms against steel dumping. Lee represents the birthplace of the American steel industry and has championed steel worker interests through both trade policy and her Oversight Committee work investigating unfair competition from state-subsidized foreign producers.',
      },
    ],
  },

  {
    bioguideId: 'J000302',
    slug: 'john-joyce',
    name: 'John Joyce',
    party: 'R',
    chamber: 'House',
    district: 13,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 13th District',
    bio: 'John Joyce has represented Pennsylvania\'s 13th Congressional District — covering central Pennsylvania including Blair, Centre, and Cambria counties — since 2019. A dermatologist who practiced medicine in Altoona for over 30 years, he serves on the House Energy and Commerce Committee and focuses on health care policy, rural health access, and prescription drug transparency. He is a reliable conservative vote in a deep-red district that includes State College and Penn State University.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsif', name: 'House Committee on Energy and Commerce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against No Surprises Act',
        year: 2021,
        month: 1,
        position: 'Against',
        summary: 'Voted against the No Surprises Act implementation rules, arguing as a physician that the arbitration process for surprise medical billing would favor insurers over providers and threaten rural physician practices. Joyce used his medical background to argue the law\'s implementation would accelerate hospital consolidation and reduce patient access in rural areas like central Pennsylvania.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, using his Energy and Commerce Committee seat to support health care provisions he argued would reduce regulatory burdens on physicians and improve Medicaid program integrity. Joyce framed his support around his 30 years of medical practice and his understanding of the regulatory challenges facing rural health providers.',
      },
    ],
    keyBills: [
      {
        title: 'Rural Physician Workforce Act',
        year: 2023,
        month: 5,
        summary: 'Introduced legislation expanding the Conrad 30 waiver program allowing foreign medical graduates to practice in underserved rural communities in exchange for visa waivers, addressing the acute physician shortage in rural Pennsylvania. Joyce drew on his decades of rural medical practice to design targeted incentives for physicians to locate in medically underserved areas of central Pennsylvania.',
      },
    ],
  },

  {
    bioguideId: 'R000610',
    slug: 'guy-reschenthaler',
    name: 'Guy Reschenthaler',
    party: 'R',
    chamber: 'House',
    district: 14,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 14th District',
    bio: 'Guy Reschenthaler has represented Pennsylvania\'s 14th Congressional District — covering southwestern Pennsylvania including Washington and Greene counties — since 2019. A former Navy JAG officer, judge, and state senator, he serves as House Republican Conference Secretary and sits on the House Appropriations Committee. He is a rising figure in House Republican leadership with a focus on defense spending, energy production, and government oversight.',
    sinceYear: 2019,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill and used his role as Conference Secretary to help marshal support within the Republican conference. Reschenthaler focused on the bill\'s energy provisions expanding natural gas production in the Marcellus and Utica shale regions that underlie his southwestern Pennsylvania district.',
      },
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2025,
        month: 7,
        position: 'For',
        summary: 'Voted for the NDAA FY2025, using his Appropriations Committee seat to advocate for defense industrial base investments and munitions production funding. Reschenthaler argued that restoring American defense manufacturing capacity is both a national security imperative and an economic opportunity for southwestern Pennsylvania\'s manufacturing workforce.',
      },
    ],
    keyBills: [
      {
        title: 'Appalachian Energy Development Act',
        year: 2024,
        month: 2,
        summary: 'Led legislation streamlining federal permitting for natural gas development on federal lands in the Appalachian Basin and expanding LNG export authority, building on his Appropriations Committee work to fund energy infrastructure development. Reschenthaler positioned the bill as both an energy security measure and an economic development package for the coalfields and shale regions of southwestern Pennsylvania.',
      },
    ],
  },

  {
    bioguideId: 'T000467',
    slug: 'glenn-thompson',
    name: 'Glenn Thompson',
    party: 'R',
    chamber: 'House',
    district: 15,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 15th District',
    bio: 'Glenn Thompson has represented Pennsylvania\'s 15th Congressional District — covering rural north-central Pennsylvania including State College and Johnstown — since 2009. A former healthcare professional and rehabilitation specialist who worked with individuals with disabilities, he chairs the House Agriculture Committee and has been the lead Republican author of the Farm Bill. He also serves on the Education and Workforce Committee and is a senior member of both panels with deep expertise in agricultural policy and disability services.',
    sinceYear: 2009,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Chair' },
      { slug: 'hsed', name: 'House Committee on Education and Workforce', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Farm Bill — Agriculture Improvement Act',
        year: 2023,
        month: 9,
        position: 'For',
        summary: 'Led House passage of the Agriculture Committee\'s Farm Bill reauthorization proposal as committee chair, incorporating commodity support programs, crop insurance reforms, and nutrition funding. Thompson worked across party lines with Ranking Member David Scott to advance the legislation, though final passage was delayed by disagreements over SNAP funding levels.',
      },
      {
        title: 'One Big Beautiful Bill — Agricultural Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the reconciliation bill and used his Agriculture Committee chairmanship to shape its agricultural and nutrition provisions. Thompson focused on maintaining commodity program support for Pennsylvania\'s dairy and grain farmers while accepting changes to SNAP work requirements as part of the broader fiscal package.',
      },
    ],
    keyBills: [
      {
        title: 'Farm Bill Reauthorization (119th Congress)',
        year: 2025,
        month: 9,
        summary: 'Led the House Agriculture Committee\'s effort to write and advance the 2025 Farm Bill reauthorization as committee chair, coordinating commodity title, nutrition title, conservation, and rural development provisions affecting every agricultural state. Thompson\'s Pennsylvania background in dairy and small-scale farming has informed his emphasis on farm program flexibility and crop insurance as the twin pillars of agricultural risk management policy.',
      },
    ],
  },

  {
    bioguideId: 'K000376',
    slug: 'mike-kelly',
    name: 'Mike Kelly',
    party: 'R',
    chamber: 'House',
    district: 16,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 16th District',
    bio: 'Mike Kelly has represented Pennsylvania\'s 16th Congressional District — covering Erie and northwestern Pennsylvania — since 2011. An automobile dealer and businessman from Butler, Pennsylvania, he serves on the House Ways and Means Committee and is a leading Republican voice on tax policy, trade, and domestic manufacturing. He has used his Ways and Means seat to champion steel tariffs, automotive manufacturing protections, and measures supporting the industrial economy of northwestern Pennsylvania.',
    sinceYear: 2011,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act',
        year: 2017,
        month: 12,
        position: 'For',
        summary: 'Voted for the $1.5 trillion tax overhaul, championing the corporate rate reduction and business expensing provisions as essential for Erie-area manufacturers and auto dealers. Kelly drew on his automotive dealership background to explain how the bill\'s pass-through business provisions would benefit the small and mid-size businesses that are the backbone of northwestern Pennsylvania\'s economy.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the House Republican reconciliation bill, focusing on its extension of the 2017 tax cuts and its provisions supporting domestic manufacturing. Kelly argued the bill was essential for preserving the economic gains made by northwestern Pennsylvania workers and businesses under the Trump tax policy framework.',
      },
    ],
    keyBills: [
      {
        title: 'American Manufacturing Competitiveness Act',
        year: 2022,
        month: 7,
        summary: 'Co-led legislation strengthening Section 232 national security tariff authorities and expanding Buy American requirements for federally funded infrastructure projects. Kelly has been one of the most consistent congressional advocates for steel and aluminum tariffs, arguing from his Ways and Means seat that trade enforcement is not protectionism but a necessary response to foreign governments subsidizing their industries at American workers\' expense.',
      },
    ],
  },

  {
    bioguideId: 'D000530',
    slug: 'christopher-r-deluzio',
    name: 'Christopher R. Deluzio',
    party: 'D',
    chamber: 'House',
    district: 17,
    state: 'Pennsylvania',
    currentTitle: 'U.S. Representative, Pennsylvania 17th District',
    bio: 'Chris Deluzio has represented Pennsylvania\'s 17th Congressional District — covering Pittsburgh\'s western suburbs including Beaver and parts of Allegheny County — since 2023. A Navy veteran, lawyer, and election security expert who worked at the University of Pittsburgh\'s Institute for Cyber Law, Policy, and Security, he serves on the House Armed Services and Transportation committees. He focuses on veterans\' issues, domestic manufacturing, election integrity, and infrastructure investment.',
    sinceYear: 2023,
    committees: [
      { slug: 'hsas', name: 'House Committee on Armed Services', chamber: 'House', role: 'Member' },
      { slug: 'hspw', name: 'House Committee on Transportation and Infrastructure', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'Against',
        summary: 'Voted against the House Republican reconciliation bill, arguing its Medicaid cuts and SNAP reductions would harm the working-class union households in his Pittsburgh-area district. Deluzio focused on the bill\'s impact on steelworker and manufacturing families who have already faced economic disruption from deindustrialization and argued the cuts compounded existing hardship.',
      },
      {
        title: 'National Defense Authorization Act FY2024',
        year: 2023,
        month: 12,
        position: 'For',
        summary: 'Voted for the $886 billion NDAA FY2024, using his Armed Services Committee seat to advance provisions supporting the defense industrial base and manufacturing workers in his district. Deluzio highlighted the importance of domestic military manufacturing and argued for stronger Buy American requirements in defense procurement.',
      },
    ],
    keyBills: [
      {
        title: 'Election Security and Oversight Act',
        year: 2023,
        month: 8,
        summary: 'Drew on his pre-congressional career as an election security researcher to introduce legislation requiring paper ballot backups for all federal elections and mandating post-election audits. Deluzio spent years at the University of Pittsburgh documenting vulnerabilities in electronic voting systems and brought that technical expertise directly to the legislative process, making election integrity one of his signature first-term issues.',
      },
    ],
  },
]

export const paDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

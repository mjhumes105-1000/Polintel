import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile, type CongressMemberData } from './ca-congress-builder'

const memberData: CongressMemberData[] = [
  // ── U.S. SENATORS ─────────────────────────────────────────────────────────

  {
    bioguideId: 'L000575',
    slug: 'james-lankford',
    name: 'James Lankford',
    party: 'R',
    chamber: 'Senate',
    state: 'Oklahoma',
    currentTitle: 'U.S. Senator from Oklahoma',
    bio: 'James Lankford has represented Oklahoma in the U.S. Senate since 2015, having previously served two terms in the House. He chairs the Senate Select Committee on Ethics and serves on the Intelligence, Finance, and Homeland Security Committees. A former Baptist youth camp director with a master\'s degree in divinity, Lankford is a consistent social conservative who has focused on government efficiency, religious liberty, and immigration reform. He co-authored a bipartisan border security bill in early 2024 that was ultimately blocked by Senate Republicans at the urging of former President Trump.',
    sinceYear: 2011,
    committees: [
      { slug: 'slet', name: 'Senate Select Committee on Ethics', chamber: 'Senate', role: 'Chair' },
      { slug: 'ssga', name: 'Senate Committee on Homeland Security and Governmental Affairs', chamber: 'Senate', role: 'Member' },
      { slug: 'slin', name: 'Senate Select Committee on Intelligence', chamber: 'Senate', role: 'Member' },
      { slug: 'ssfi', name: 'Senate Committee on Finance', chamber: 'Senate', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Border Security Bill — Vote to proceed',
        year: 2024,
        month: 2,
        position: 'For',
        summary: 'Lankford co-authored and voted to advance the bipartisan Emergency National Security Supplemental Appropriations Act, which paired Ukraine and Israel aid with sweeping border security reforms including new emergency authority to limit asylum processing during surges. The bill failed to achieve cloture after former President Trump encouraged Republican senators to block it, a reversal Lankford publicly criticized as politically motivated.',
      },
      {
        title: 'Against Inflation Reduction Act',
        year: 2022,
        month: 8,
        position: 'Against',
        summary: 'Voted against the Inflation Reduction Act, arguing the corporate minimum tax would harm Oklahoma\'s energy sector and that the bill\'s climate provisions represented government overreach into energy markets. He also objected to the Medicare drug negotiation provisions as constituting government price controls.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his decades-long advocacy for stricter immigration enforcement. Following the failure of his bipartisan border bill, Lankford supported the more targeted enforcement-focused Laken Riley Act as an achievable step forward on immigration.',
      },
    ],
    keyBills: [
      {
        title: 'Federal Bureaucracy and Spending Reduction Act',
        year: 2023,
        month: 3,
        summary: 'Introduced annual legislation identifying specific examples of government waste, fraud, and abuse in the federal budget — including items from his "Federal Fumbles" report that he has published every year since entering the Senate. Lankford has used these reports to document wasteful spending and advocate for targeted cuts and program eliminations.',
      },
      {
        title: 'Bipartisan Border Security bill — Emergency National Security Supplemental',
        year: 2024,
        month: 2,
        summary: 'Co-authored the most significant bipartisan border security legislation in years, spending months negotiating with Democratic Senator Chris Murphy and Independent Senator Kyrsten Sinema. The bill would have tightened asylum standards, funded immigration courts to clear the massive backlog, and given the executive branch new authority to limit border crossings during surges — the most substantive border security compromise in decades.',
      },
    ],
  },

  {
    bioguideId: 'A000383',
    slug: 'alan-armstrong',
    name: 'Alan Armstrong',
    party: 'R',
    chamber: 'Senate',
    state: 'Oklahoma',
    currentTitle: 'U.S. Senator from Oklahoma',
    bio: 'Alan Armstrong was elected to the U.S. Senate from Oklahoma in 2026, succeeding the retiring Jim Inhofe\'s appointed successor. A businessman and former Oklahoma state legislator, Armstrong ran on a platform of fiscal conservatism, energy development, and immigration enforcement. He is a newly sworn-in member with no current committee assignments and is establishing his Senate focus areas in his inaugural year.',
    sinceYear: 2026,
    committees: [],
    keyVotes: [
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act as part of his first votes as a newly seated senator, consistent with his campaign emphasis on strict immigration enforcement. Armstrong has positioned immigration enforcement as a core priority for his Senate tenure.',
      },
    ],
    keyBills: [
      {
        title: 'Oklahoma Energy Development Advocacy',
        year: 2026,
        month: 3,
        summary: 'In his initial months in the Senate, Armstrong has focused on joining the Energy and Natural Resources Committee and advocating for continued federal oil and natural gas leasing on federal lands in the western United States. Oklahoma\'s energy sector is the state\'s largest industry and Armstrong has emphasized energy independence as his signature economic policy priority.',
      },
    ],
  },

  // ── HOUSE ─────────────────────────────────────────────────────────────────

  {
    bioguideId: 'H001082',
    slug: 'kevin-hern',
    name: 'Kevin Hern',
    party: 'R',
    chamber: 'House',
    district: 1,
    state: 'Oklahoma',
    currentTitle: 'U.S. Representative, Oklahoma 1st District',
    bio: 'Kevin Hern has represented Oklahoma\'s 1st Congressional District — covering Tulsa — since 2019. A McDonald\'s franchise owner and businessman, he serves on the House Ways and Means Committee and has been a leading voice in the Republican Study Committee on fiscal policy. Hern briefly sought the position of House Budget Committee Chair following the 2022 elections and is known for his focus on tax policy, deregulation, and energy development critical to Tulsa\'s oil and gas-centered economy.',
    sinceYear: 2018,
    committees: [
      { slug: 'hswm', name: 'House Committee on Ways and Means', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Tax Cuts and Jobs Act — Extension advocacy',
        year: 2023,
        month: 9,
        position: 'For',
        summary: 'As a Ways and Means Committee member and business owner who directly benefited from the 2017 tax cuts, Hern has been a leading advocate for making the Tax Cuts and Jobs Act permanent rather than allowing its individual provisions to expire in 2025. He argues the lower rates are essential for small businesses like the franchise operations he built and that expiration would constitute a massive tax increase on middle-class Americans.',
      },
      {
        title: 'One Big Beautiful Bill — Tax Provisions',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, which he helped shape through Ways and Means by advocating for making the TCJA tax cuts permanent. As a small business owner turned congressman, Hern was a credible advocate for the bill\'s business-friendly provisions and supported the Medicaid and SNAP restructuring as necessary for long-term fiscal sustainability.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting it as a necessary step to extract spending concessions from the White House while avoiding default. Hern backed the bill\'s discretionary spending caps as a baseline for the larger spending reduction effort he continues to pursue through reconciliation and appropriations.',
      },
    ],
    keyBills: [
      {
        title: 'Small Business Tax Relief and Growth Act',
        year: 2023,
        month: 7,
        summary: 'Introduced legislation through Ways and Means expanding Section 199A pass-through deductions for small businesses and making permanent several expiring tax provisions critical to family-owned businesses. Drawing on his 30 years as a McDonald\'s franchisee, Hern designed the bill to address specific tax challenges facing small business owners including cash flow management and succession planning.',
      },
      {
        title: 'Energy Tax Incentives Reform',
        year: 2023,
        month: 4,
        summary: 'Introduced legislation through Ways and Means reforming the Inflation Reduction Act\'s clean energy tax credits to include oil and gas production incentives, arguing that a comprehensive energy tax approach should support all domestic energy sources rather than exclusively subsidizing renewables. Oklahoma\'s energy industry — which includes both traditional oil and gas and growing wind power — would benefit from the balanced incentive structure.',
      },
    ],
  },

  {
    bioguideId: 'B001317',
    slug: 'josh-brecheen',
    name: 'Josh Brecheen',
    party: 'R',
    chamber: 'House',
    district: 2,
    state: 'Oklahoma',
    currentTitle: 'U.S. Representative, Oklahoma 2nd District',
    bio: 'Josh Brecheen has represented Oklahoma\'s 2nd Congressional District — covering southeastern Oklahoma including the McAlester area — since 2023. A former Oklahoma state senator known for his social conservatism, he sits on the Homeland Security and Budget Committees and is a member of the House Freedom Caucus. Brecheen is one of the more ideologically conservative members of the Oklahoma delegation and has focused on border security, government spending reduction, and opposition to what he characterizes as federal overreach into state and local affairs.',
    sinceYear: 2023,
    committees: [
      { slug: 'hshm', name: 'House Committee on Homeland Security', chamber: 'House', role: 'Member' },
      { slug: 'hsbu', name: 'House Committee on the Budget', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'Against Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'Against',
        summary: 'Voted against the bipartisan debt ceiling deal as a Freedom Caucus member, arguing the spending caps were insufficient and that the bill failed to make the structural reforms necessary to address the long-term national debt trajectory. Brecheen has consistently opposed debt ceiling increases without deeper spending cuts.',
      },
      {
        title: 'Laken Riley Act',
        year: 2025,
        month: 1,
        position: 'For',
        summary: 'Voted for the Laken Riley Act, consistent with his strong border security focus on the Homeland Security Committee. Brecheen has advocated for completing the border wall, ending catch-and-release, and significantly restricting asylum eligibility throughout his House tenure.',
      },
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill after initial reservations about whether it cut spending sufficiently. As a Budget Committee member, Brecheen pushed for deeper spending reductions in the Medicaid and SNAP provisions and ultimately supported the final bill as the most achievable fiscally conservative outcome given the narrow majority.',
      },
    ],
    keyBills: [
      {
        title: 'Border Security and Wall Completion Act',
        year: 2023,
        month: 3,
        summary: 'Introduced legislation requiring the resumption of border wall construction in remaining gaps along the southern border and prohibiting the administration from reprogramming border security funds allocated by Congress. Brecheen has used his Homeland Security Committee seat to push for physical barrier completion as a non-negotiable element of border security.',
      },
      {
        title: 'Federal Spending Accountability Act',
        year: 2024,
        month: 5,
        summary: 'Introduced legislation through the Budget Committee establishing automatic across-the-board spending sequestration triggers when the national debt-to-GDP ratio exceeds specified thresholds. Brecheen argued that without automatic enforcement mechanisms, discretionary spending caps are routinely waived and that structural debt reduction requires mandatory consequences for exceeding fiscal targets.',
      },
    ],
  },

  {
    bioguideId: 'L000491',
    slug: 'frank-d-lucas',
    name: 'Frank D. Lucas',
    party: 'R',
    chamber: 'House',
    district: 3,
    state: 'Oklahoma',
    currentTitle: 'U.S. Representative, Oklahoma 3rd District',
    bio: 'Frank D. Lucas has represented Oklahoma\'s 3rd Congressional District — covering western and northwestern Oklahoma — since 1993 and is one of the longest-serving members of the current House. He chairs the House Science, Space, and Technology Committee and sits on Agriculture and Financial Services. A cattle rancher and wheat farmer who chaired the Agriculture Committee from 2011 to 2015, he authored the 2014 Farm Bill and remains one of Congress\'s leading experts on farm policy, commodity programs, and agricultural trade.',
    sinceYear: 1993,
    committees: [
      { slug: 'hsag', name: 'House Committee on Agriculture', chamber: 'House', role: 'Member' },
      { slug: 'hsba', name: 'House Committee on Financial Services', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: '2014 Farm Bill — House passage',
        year: 2014,
        month: 1,
        position: 'For',
        summary: 'As Agriculture Committee Chair, Lucas was the principal author and floor manager of the 2014 Farm Bill, the comprehensive legislation governing commodity programs, crop insurance, conservation programs, and SNAP. He navigated the bill through significant internal Republican divisions and Democratic resistance to SNAP reforms, delivering the first long-term farm bill in over a decade.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, citing the importance of avoiding default for agricultural credit markets where farmers rely on seasonal operating loans. Lucas has consistently prioritized farm credit and commodity market stability in fiscal debates, viewing financial market disruption from default as a direct threat to western Oklahoma\'s wheat and cattle producers.',
      },
      {
        title: 'CHIPS and Science Act',
        year: 2022,
        month: 7,
        position: 'For',
        summary: 'Voted for the CHIPS and Science Act, supporting its National Science Foundation research funding expansion as Science Committee Ranking Member at the time. Lucas argued that sustained federal investment in basic research — including agricultural science — is essential for American competitiveness and that Oklahoma\'s land-grant universities would benefit from the bill\'s R&D funding.',
      },
    ],
    keyBills: [
      {
        title: '2014 Farm Bill — Agricultural Act of 2014',
        year: 2014,
        month: 2,
        summary: 'Lucas authored the Agricultural Act of 2014 as Agriculture Committee Chair, replacing direct payment subsidies with the Agricultural Risk Coverage and Price Loss Coverage programs that provide countercyclical income support tied to market prices. The law restructured federal farm support to better target payments to farmers experiencing actual economic losses rather than providing guaranteed payments regardless of market conditions.',
      },
      {
        title: 'Precision Agriculture Connectivity Act',
        year: 2022,
        month: 9,
        summary: 'Introduced legislation expanding broadband and wireless connectivity infrastructure for precision agriculture technologies in rural western Oklahoma. Lucas has championed the adoption of GPS-guided equipment, remote sensing, and data analytics in farming as essential for the productivity gains necessary to keep western Oklahoma\'s grain and cattle operations competitive in global markets.',
      },
    ],
  },

  {
    bioguideId: 'C001053',
    slug: 'tom-cole',
    name: 'Tom Cole',
    party: 'R',
    chamber: 'House',
    district: 4,
    state: 'Oklahoma',
    currentTitle: 'U.S. Representative, Oklahoma 4th District',
    bio: 'Tom Cole has represented Oklahoma\'s 4th Congressional District — covering Norman and southern Oklahoma — since 2003 and chairs the House Committee on Appropriations in the 119th Congress. A political scientist with a PhD from the University of Oklahoma and a Chickasaw Nation citizen, he is one of the most institutionalist Republicans in the House. Cole has served in leadership roles throughout his career and is known for his deep knowledge of House procedure, his commitment to the regular appropriations process, and his expertise on Native American policy.',
    sinceYear: 2003,
    committees: [
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Chair' },
    ],
    keyVotes: [
      {
        title: 'Bipartisan Infrastructure Investment and Jobs Act',
        year: 2021,
        month: 11,
        position: 'For',
        summary: 'Cole was one of thirteen House Republicans who voted for the bipartisan infrastructure law, citing the importance of highway, broadband, and water infrastructure investment for Oklahoma and the urgent need to modernize the national grid. He argued the bill was a genuine bipartisan achievement in the tradition of infrastructure investment that Congress has supported for generations.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'As a senior Appropriations leader, Cole was deeply involved in the negotiations surrounding the debt ceiling deal and voted for the bill as a necessary step to avoid default while establishing spending discipline. He has consistently argued that governing requires compromise and that the appropriations process — not hostage-taking over the debt ceiling — is the proper venue for spending debates.',
      },
      {
        title: 'One Big Beautiful Bill — Appropriations Chair',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill as Appropriations Chair, having coordinated with leadership on the spending provisions while maintaining his preference for the regular appropriations process. Cole supported the bill\'s fiscal structure while publicly noting his continued commitment to returning to full, on-time appropriations bills through his committee.',
      },
    ],
    keyBills: [
      {
        title: 'Tribal Appropriations and Native American Healthcare provisions',
        year: 2023,
        month: 11,
        summary: 'As Appropriations Chair, Cole has been the House\'s most senior champion of Indian Health Service funding adequacy, consistently fighting for IHS budget increases and infrastructure investment in Native American healthcare facilities. As a Chickasaw citizen himself, Cole brings unique personal experience to his advocacy for the federal government\'s treaty obligations to Native nations.',
      },
      {
        title: 'Regular Order Appropriations Restoration effort',
        year: 2023,
        month: 7,
        summary: 'Cole has championed a return to the regular appropriations process — passing all twelve individual appropriations bills before the fiscal year deadline — as an alternative to the omnibus spending bills and continuing resolutions that have dominated federal budgeting for two decades. As Appropriations Chair he has made regular order a signature priority, arguing it improves fiscal discipline and congressional oversight.',
      },
    ],
  },

  {
    bioguideId: 'B000740',
    slug: 'stephanie-i-bice',
    name: 'Stephanie I. Bice',
    party: 'R',
    chamber: 'House',
    district: 5,
    state: 'Oklahoma',
    currentTitle: 'U.S. Representative, Oklahoma 5th District',
    bio: 'Stephanie I. Bice has represented Oklahoma\'s 5th Congressional District — covering Oklahoma City — since 2021, defeating a Democratic incumbent in the 2020 election. A former Oklahoma state senator and small business owner, she serves on the House Appropriations Committee and the Committee on House Administration. Bice has focused on fiscal conservatism, energy policy, and support for Tinker Air Force Base, one of the largest employers in the Oklahoma City metro area and a major depot maintenance hub for the Air Force.',
    sinceYear: 2021,
    committees: [
      { slug: 'hsha', name: 'House Committee on House Administration', chamber: 'House', role: 'Member' },
      { slug: 'hsap', name: 'House Committee on Appropriations', chamber: 'House', role: 'Member' },
    ],
    keyVotes: [
      {
        title: 'One Big Beautiful Bill',
        year: 2025,
        month: 5,
        position: 'For',
        summary: 'Voted for the Republican reconciliation bill, using her Appropriations seat to advocate for maintaining defense spending levels protecting Tinker Air Force Base\'s depot maintenance mission. Bice supported the bill\'s overall fiscal framework while ensuring Tinker-relevant funding was protected in the reconciliation package.',
      },
      {
        title: 'National Defense Authorization Act FY2025',
        year: 2024,
        month: 12,
        position: 'For',
        summary: 'Voted for the NDAA FY2025, supporting provisions important to Tinker Air Force Base and the Oklahoma City area\'s defense industrial base. Tinker is the Air Force\'s largest depot maintenance facility, employing over 25,000 civilian and military personnel, and Bice has consistently championed its mission and budget through her Appropriations assignment.',
      },
      {
        title: 'Fiscal Responsibility Act of 2023',
        year: 2023,
        month: 5,
        position: 'For',
        summary: 'Voted for the bipartisan debt ceiling deal, supporting it as a necessary step to prevent default while establishing discretionary spending limits. As an Appropriations member, Bice was acutely aware of the consequences of a default for federal contractors and defense industrial employers in the Oklahoma City area.',
      },
    ],
    keyBills: [
      {
        title: 'Tinker AFB Infrastructure and Mission Expansion provisions',
        year: 2023,
        month: 9,
        summary: 'Secured Appropriations funding for infrastructure upgrades at Tinker Air Force Base, including maintenance facility modernization supporting the B-21 Raider bomber\'s depot maintenance designation and expanded AWACS sustainment capacity. Bice has made protecting and expanding Tinker\'s mission the centerpiece of her Appropriations work, recognizing the base as the economic anchor of the Oklahoma City metro.',
      },
      {
        title: 'Small Business Regulatory Reform Act',
        year: 2022,
        month: 6,
        summary: 'Introduced legislation requiring federal agencies to conduct more rigorous economic analysis of the regulatory burden on small businesses before finalizing major rules. Drawing on her background as a small business owner in the marketing and communications industry, Bice argued that cumulative federal regulations impose unsustainable compliance costs on small firms that lack the legal and administrative resources of larger corporations.',
      },
    ],
  },
]

export const okDelegationProfiles: Record<string, PoliticianProfile> =
  Object.fromEntries(memberData.map(d => [d.slug, buildCongressProfile(d)]))

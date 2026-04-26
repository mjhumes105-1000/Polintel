import type { Bill } from '@political-intel/types'

// ─── Signed into Law ─────────────────────────────────────────────────────────

export const lakenRiley: Bill = {
  id: 'laken-riley-act-2025',
  slug: 'laken-riley-act-2025',
  number: 'S. 5',
  title: 'Laken Riley Act',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-01-29',
  sponsor: {
    name: 'Mike Collins',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Georgia',
  },
  summary:
    'The Laken Riley Act — the first bill signed by President Trump in his second term — requires the Department of Homeland Security to detain undocumented immigrants who have been charged with or convicted of theft, burglary, shoplifting, or any crime causing death or serious injury to a law enforcement officer. It passed with notable bipartisan support: 264–159 in the House (48 Democrats voted yes) and 64–35 in the Senate (12 Democrats voted yes). The act is named after Laken Riley, a 22-year-old nursing student killed in Athens, Georgia, in February 2024 by a Venezuelan national who had entered the country illegally and was subsequently released under a Biden-era parole policy.',
  detail:
    "The Laken Riley Act amends the Immigration and Nationality Act to mandate ICE detention of undocumented immigrants charged with certain crimes, removing prosecutorial discretion in those cases. Jose Ibarra, who was in the country illegally after entering under the Biden administration's parole policy, was convicted of Riley's murder in November 2024. Her death became a focal point in the 2024 election debate over border enforcement. The bill was introduced on January 9, 2025, and moved through both chambers within three weeks — unusually fast for major legislation. The House passage on January 16 included 48 Democratic votes, reflecting cross-party pressure in competitive districts. In the Senate, 12 Democrats including Jon Ossoff (GA), Mark Kelly (AZ), and Jacky Rosen (NV) voted yes. Opponents — including the ACLU and immigration advocacy groups — argued the bill would expand mass detention and ensnare people wrongly accused of minor offenses before trial. Supporters characterized it as a direct accountability measure for a preventable death.",
  aiExplanation:
    "The Laken Riley Act changes a specific rule in immigration enforcement: it requires ICE to detain undocumented immigrants who are charged with theft, burglary, shoplifting, or crimes that killed or seriously hurt a police officer — with no discretion to release them while charges are pending.\n\nPreviously, ICE had broad discretion over who to detain. Under enforcement priorities set by the Biden administration, undocumented immigrants who weren't considered high-priority threats could be released on supervision rather than held in detention. This bill eliminates that discretion for the covered offenses.\n\nThe political context: Laken Riley's murder — committed by someone who had entered illegally and was released under Biden parole policies — became one of the most politically charged immigration cases of 2024. Republicans used it to argue that Biden's border policies directly enabled the crime.\n\nThe unusual bipartisan support (48 House Democrats, 12 Senate Democrats) reflected the political difficulty of opposing a bill named after a murder victim in an election year where immigration was a central issue. Critics argued the bill would sweep up people who haven't been convicted of anything — just charged — and disproportionately affect communities of color.",
  legislativeHistory: [
    { date: '2025-01-09', event: 'Introduced in U.S. House by Rep. Mike Collins (R-GA)' },
    { date: '2025-01-16', event: 'Passed U.S. House of Representatives', notes: 'Vote: 264–159 · 48 Democrats voted yes' },
    { date: '2025-01-23', event: 'Passed U.S. Senate', notes: 'Vote: 64–35 · 12 Democrats voted yes' },
    { date: '2025-01-29', event: 'Signed into law by President Trump — first bill of his second term · P.L. 119-4' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed January 29, 2025 — first bill of his second term' },
    { politicianId: '', politicianName: 'Jon Ossoff', politicianTitle: 'U.S. Senator (D-GA)', action: 'yes', note: "Voted yes; Riley was killed in his home state of Georgia" },
    { politicianId: '', politicianName: 'Mark Kelly', politicianTitle: 'U.S. Senator (D-AZ)', action: 'yes', note: 'Voted yes; Arizona is a high-traffic border state' },
    { politicianId: '', politicianName: 'Bernie Sanders', politicianTitle: 'U.S. Senator (I-VT)', action: 'no', note: 'Voted no; cited concerns about expanding mandatory detention before conviction' },
  ],
  relatedPoliticianIds: [],
  tags: ['Immigration', 'Public Safety', 'Border Security', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'laken-riley-congress',
      label: 'S. 5 — Laken Riley Act (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/5',
      publisher: 'Congress.gov',
      publishedAt: '2025-01-09',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const takeItDownAct: Bill = {
  id: 'take-it-down-act-2025',
  slug: 'take-it-down-act-2025',
  number: 'S. 146',
  title: 'TAKE IT DOWN Act',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-05-19',
  sponsor: {
    name: 'Ted Cruz',
    title: 'U.S. Senator',
    party: 'Republican Party',
    state: 'Texas',
  },
  summary:
    "The TAKE IT DOWN Act — Tools to Address Known Exploitation by Immobilizing Technological Deepfakes on Websites and Networks — criminalizes the nonconsensual online publication of intimate visual depictions of individuals, including both authentic images and AI-generated deepfakes. The law requires online platforms to remove such content within 48 hours of receiving notice. It passed the House by a two-thirds supermajority on suspension of the rules on April 28, 2025, and was signed by President Trump on May 19, 2025. First Lady Melania Trump publicly championed the bill as part of her 'BE BEST' platform focus on online safety for children and teens.",
  detail:
    "The Act has two main provisions: a criminal prohibition and a platform takedown obligation. On the criminal side, it creates federal offenses for publishing or threatening to publish intimate images without consent — covering both real photos/videos and synthetic AI-generated content. On the platform side, covered online services must establish a mechanism for victims to report such content and must remove it within 48 hours of notice. Platforms that fail to comply face civil liability. The bill addresses a gap that became increasingly urgent as AI image generation tools made it trivially easy to create realistic fake intimate images of real people — a problem that disproportionately affects young women and girls. Melania Trump made appearances at the Capitol to lobby for the bill. The House passage by a 2/3 supermajority under suspension of the rules indicates very broad bipartisan agreement. Civil liberties organizations raised some concerns about the platform removal mandate creating potential for overbroad content takedowns, though did not mount significant opposition.",
  aiExplanation:
    "The TAKE IT DOWN Act is the federal government's first major response to AI-generated deepfake intimate images — a rapidly growing problem where someone can generate a realistic fake naked photo of a real person using publicly available AI tools.\n\nBefore this law: no consistent federal prohibition on non-consensual intimate imagery. Some states had laws, but enforcement was patchy and the law hadn't caught up with AI-generated content that doesn't involve any real image of the victim.\n\nWhat it does:\n1. Criminalization: Makes it a federal crime to publish or threaten to publish intimate images without consent — including AI-generated fakes.\n2. 48-hour removal: Online platforms must have a reporting mechanism and must take down flagged content within 48 hours or face civil liability.\n\nThe bipartisan support was driven by two groups with different motivations: conservatives, particularly Melania Trump and Ted Cruz, framing it as child protection; and Democrats who have long pushed for stronger protections against online harassment of women.\n\nThe platform liability piece is significant — and controversial among free speech advocates — because it puts real legal pressure on social media companies, not just individual bad actors.",
  legislativeHistory: [
    { date: '2025-01-21', event: 'Introduced in U.S. Senate by Sen. Ted Cruz (R-TX) and Sen. Amy Klobuchar (D-MN)' },
    { date: '2025-03-27', event: 'Passed U.S. Senate' },
    { date: '2025-04-28', event: 'Passed U.S. House of Representatives', notes: 'Passed by 2/3 supermajority under suspension of the rules · Strong bipartisan vote' },
    { date: '2025-05-19', event: 'Signed into law by President Trump · P.L. 119-12' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed May 19, 2025; First Lady Melania Trump championed the bill' },
    { politicianId: '', politicianName: 'Ted Cruz', politicianTitle: 'U.S. Senator (R-TX)', action: 'sponsored', note: 'Lead Senate sponsor; framed as child protection legislation' },
    { politicianId: '', politicianName: 'Amy Klobuchar', politicianTitle: 'U.S. Senator (D-MN)', action: 'co-sponsored', note: 'Lead Democratic co-sponsor; bipartisan framing as online safety' },
  ],
  relatedPoliticianIds: [],
  tags: ['Technology', 'AI', 'Deepfakes', 'Online Safety', 'Child Protection', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'take-it-down-congress',
      label: 'S. 146 — TAKE IT DOWN Act (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/146',
      publisher: 'Congress.gov',
      publishedAt: '2025-01-21',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const obbb: Bill = {
  id: 'obbb-2025',
  slug: 'obbb-2025',
  number: 'H.R. 1',
  title: 'One Big Beautiful Bill Act',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-07-04',
  sponsor: {
    name: 'Jodey Arrington',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Texas',
  },
  summary:
    "The One Big Beautiful Bill Act — signed into law on July 4, 2025 as Public Law 119-21 — is the Republican reconciliation package for the 119th Congress. The bill permanently extends the 2017 Tax Cuts and Jobs Act provisions, raises the SALT deduction cap from $10,000 to $40,000 for incomes under $500,000, increases the standard deduction and child tax credit, imposes Medicaid work requirements for able-bodied adults without dependents, restructures federal student loans, significantly increases defense and border enforcement spending, and reduces IRA clean energy tax credits. The House passed it 215–214 on May 22, 2025. The Senate passed a substantially amended version 51–50 on July 1, 2025 (Vice President Vance cast the tie-breaking vote). The House agreed to the Senate amendments on July 3, and Trump signed it on Independence Day.",
  detail:
    "The bill was advanced through the budget reconciliation process — allowing Senate passage with 51 votes rather than the 60 needed to break a filibuster, but constraining provisions to those with direct budgetary effect under the Byrd Rule. The Senate made extensive changes from the House-passed version: the SALT cap was raised further (to $40,000 from $30,000 in the House bill), Medicaid work requirements were modified, SNAP eligibility changes were adjusted, and the clean energy rollback was partially softened. The Senate version added provisions related to the debt ceiling increase. The CBO estimated the law would add approximately $3.3 trillion to the deficit over ten years after Senate modifications. Democrats universally opposed the bill, staging a 'vote-a-rama' with dozens of amendment votes over June 30–July 1 before the final 51–50 passage. All 50 Senate Republicans voted yes; VP Vance broke the tie.",
  aiExplanation:
    "The One Big Beautiful Bill is the vehicle Republicans used to advance Trump's second-term domestic agenda through budget reconciliation — passing it with 51 Senate votes instead of 60.\n\nThe biggest piece: permanently extending the 2017 Tax Cuts and Jobs Act, which was set to expire at year-end 2025. Without action, taxes would have risen for most Americans automatically.\n\nKey provisions of the final signed law:\n— Tax cuts: TCJA made permanent + SALT cap raised to $40,000 (helping high-tax state Republicans) + enhanced child tax credit + no tax on tips and overtime pay (Trump campaign promises)\n— Medicaid work requirements: Able-bodied adults without dependents must document 80 hours/month of work, job training, or community service to keep coverage. CBO estimated this would reduce Medicaid enrollment by millions.\n— Clean energy rollback: Many IRA clean energy tax credits reduced or eliminated, though some manufacturing credits were preserved after Senate negotiations.\n— Defense and border: Major increases in military spending and immigration enforcement funding.\n— Debt ceiling: Raised the statutory debt limit to prevent default.\n\nThe Senate 'vote-a-rama' — where any senator can force unlimited amendment votes before final passage — lasted over 12 hours on June 30–July 1. Democrats used it to force Republicans to take difficult votes on Medicaid, Social Security, and other politically sensitive issues. Every amendment failed on party-line votes before the bill passed 51–50.",
  legislativeHistory: [
    { date: '2025-01-20', event: 'Budget resolution directing reconciliation bill introduced' },
    { date: '2025-04-10', event: 'House Budget Committee advances reconciliation package' },
    { date: '2025-05-22', event: 'Passed U.S. House of Representatives', notes: 'Vote: 215–214 · 2 Republicans voted no, zero Democratic votes' },
    { date: '2025-05-23', event: 'Transmitted to U.S. Senate' },
    { date: '2025-06-30', event: 'Senate vote-a-rama begins — Democrats force dozens of amendment votes', notes: 'All Democratic amendments rejected on party-line votes' },
    { date: '2025-07-01', event: 'Passed U.S. Senate with amendments', notes: 'Vote: 51–50 · VP Vance cast tie-breaking vote · Zero Democratic votes' },
    { date: '2025-07-03', event: 'House agreed to Senate amendments' },
    { date: '2025-07-04', event: 'Signed into law by President Trump on Independence Day · P.L. 119-21' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed July 4, 2025 — Independence Day signing ceremony' },
    { politicianId: '', politicianName: 'JD Vance', politicianTitle: 'Vice President of the United States', action: 'yes', note: 'Cast tie-breaking 51st vote in Senate on July 1, 2025' },
    { politicianId: '', politicianName: 'Thomas Massie', politicianTitle: 'U.S. Representative (R-KY)', action: 'no', note: 'One of two Republicans who voted no in the House; cited deficit concerns' },
    { politicianId: '', politicianName: 'Hakeem Jeffries', politicianTitle: 'House Minority Leader (D-NY)', action: 'no', note: 'Led unified Democratic opposition' },
  ],
  relatedPoliticianIds: [],
  tags: ['Tax Policy', 'Reconciliation', 'Medicaid', 'Defense', 'TCJA', 'Budget', '119th Congress'],
  sources: [
    {
      id: 'obbb-congress',
      label: 'H.R. 1 — One Big Beautiful Bill Act (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/1',
      publisher: 'Congress.gov',
      publishedAt: '2025-07-04',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const geniusAct: Bill = {
  id: 'genius-act-2025',
  slug: 'genius-act-2025',
  number: 'S. 1582',
  title: 'GENIUS Act',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-07-18',
  sponsor: {
    name: 'Bill Hagerty',
    title: 'U.S. Senator',
    party: 'Republican Party',
    state: 'Tennessee',
  },
  summary:
    "The Guiding and Establishing National Innovation for U.S. Stablecoins Act establishes the first federal regulatory framework for payment stablecoins — digital assets that are pegged to a fixed value (typically $1) and redeemable on demand. Only licensed issuers may issue stablecoins for use by U.S. persons. Issuers must maintain one-to-one reserves in U.S. dollars or similarly liquid assets and submit to federal or state regulatory oversight. The bill passed the Senate 68–30 on June 17, 2025, and the House 308–122 on July 17. President Trump signed it on July 18, 2025 as Public Law 119-27.",
  detail:
    "The GENIUS Act establishes a bifurcated regulatory system: large stablecoin issuers (over $10 billion in issuance) are regulated by a new federal framework, while smaller issuers may opt into state regulation. Permitted issuers must be either subsidiaries of insured depository institutions, federally qualified nonbank issuers, or state-qualified issuers. All issuers must publish monthly reserve disclosures and submit to annual audits. The law explicitly prohibits the use of algorithmic mechanisms to maintain the peg — a response to the 2022 collapse of TerraUSD, which wiped out over $40 billion in value. Holders of stablecoins receive priority claims in bankruptcy. The law passed with bipartisan Senate support (68–30) after months of negotiations over provisions related to foreign issuers, anti-money laundering requirements, and restrictions on politicians issuing stablecoins — the latter provision added amid controversy over the Trump family's own cryptocurrency ventures. Critics argued the bill's exemptions were too broad and that it legitimized a potentially destabilizing financial product.",
  aiExplanation:
    "The GENIUS Act is the U.S. government's first major crypto regulation — specifically for stablecoins, which are cryptocurrencies designed to always be worth exactly $1.\n\nWhat are stablecoins? Unlike Bitcoin (which fluctuates wildly), stablecoins like USDC and Tether are meant to maintain a fixed value. They're used heavily in crypto trading as a dollar substitute and increasingly for payments and remittances. Combined, stablecoins represent over $200 billion in circulation.\n\nThe problem: Before this law, stablecoin issuers operated in a regulatory gray zone. Nobody verified whether they actually had the dollars backing every coin. The 2022 collapse of TerraUSD — which imploded from $1 to nearly zero in days and wiped out $40+ billion — showed how dangerous unregulated stablecoins could be.\n\nWhat the law does:\n- Only licensed companies can issue stablecoins for use by Americans\n- Issuers must hold real dollar reserves 1:1 (or equivalently liquid assets)\n- Monthly disclosure of reserves, annual audits\n- No algorithmic stablecoins (the kind that destroyed TerraUSD)\n- If an issuer goes bankrupt, stablecoin holders are first in line\n\nThe controversy: The Trump family had launched their own cryptocurrency ventures before this bill passed, leading to ethics questions about the president potentially benefiting from stablecoin legitimization. A provision restricting politicians from issuing stablecoins was debated but ultimately the final law had limits on its scope.",
  legislativeHistory: [
    { date: '2025-02-04', event: 'Introduced in U.S. Senate by Sen. Bill Hagerty (R-TN) and bipartisan co-sponsors' },
    { date: '2025-06-17', event: 'Passed U.S. Senate', notes: 'Vote: 68–30 · Strong bipartisan majority' },
    { date: '2025-07-17', event: 'Passed U.S. House of Representatives', notes: 'Vote: 308–122 · Bipartisan majority' },
    { date: '2025-07-18', event: 'Signed by President Trump · P.L. 119-27' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed July 18, 2025; Trump family had own crypto ventures, creating ethics controversy' },
    { politicianId: '', politicianName: 'Bill Hagerty', politicianTitle: 'U.S. Senator (R-TN)', action: 'sponsored', note: 'Lead sponsor; former U.S. Ambassador to Japan, finance background' },
    { politicianId: '', politicianName: 'Kirsten Gillibrand', politicianTitle: 'U.S. Senator (D-NY)', action: 'yes', note: 'Lead Democratic co-sponsor; argued regulation beats the alternative of no oversight' },
    { politicianId: '', politicianName: 'Elizabeth Warren', politicianTitle: 'U.S. Senator (D-MA)', action: 'no', note: "Voted no; argued the bill didn't adequately address systemic financial risks and enabled Trump family self-dealing" },
  ],
  relatedPoliticianIds: [],
  tags: ['Cryptocurrency', 'Stablecoins', 'Financial Regulation', 'Technology', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'genius-congress',
      label: 'S. 1582 — GENIUS Act (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/1582',
      publisher: 'Congress.gov',
      publishedAt: '2025-02-04',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const rescissionsAct: Bill = {
  id: 'rescissions-act-2025',
  slug: 'rescissions-act-2025',
  number: 'H.R. 4',
  title: 'Rescissions Act of 2025',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-07-24',
  sponsor: {
    name: 'Steve Scalise',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Louisiana',
  },
  summary:
    'The Rescissions Act of 2025 cancels $9.4 billion in unobligated federal funds that had already been appropriated by prior Congresses — primarily from the Department of State, the U.S. Agency for International Development (USAID), various international assistance programs, and the Corporation for Public Broadcasting (CPB). The rescissions were proposed by President Trump under the Impoundment Control Act of 1974, which allows the president to propose canceling previously appropriated funds if Congress approves within 45 days. The House agreed to the Senate-amended version on July 18, 2025, and Trump signed the bill on July 24 as Public Law 119-28.',
  detail:
    "The Rescissions Act is the legislative mechanism the Trump administration used to formalize spending cuts proposed by the Department of Government Efficiency (DOGE). The Impoundment Control Act of 1974 was enacted specifically to limit the president's unilateral ability to withhold congressionally appropriated funds — it was passed in direct response to President Nixon's impoundment of funds. The 1974 law created the rescission mechanism: the president can propose cuts, but Congress must vote to approve them within 45 days or the funds must be released. The bill's passage effectively endorsed roughly $9.4B in proposed cuts. The largest targets were international assistance programs — State Department foreign aid, USAID programs, multilateral development banks, and humanitarian assistance funds. The CPB (which funds NPR and PBS) was also targeted. Democrats argued the cuts violated the constitutional principle that Congress controls the purse and would harm critical foreign policy programs; Republicans argued they reflected necessary fiscal discipline and the will of voters who elected Trump on a spending-cut platform.",
  aiExplanation:
    "The Rescissions Act is Congress formally signing off on $9.4 billion of spending cuts that the Trump administration had been trying to make through executive action.\n\nBackground: When Congress passes a budget, the money doesn't have to be spent immediately — some funds sit unobligated for months or years. The Trump administration, through DOGE, had been trying to cancel billions of these unspent funds unilaterally. Courts and Congress push back on presidents who simply refuse to spend money Congress appropriated (called 'impoundment'). The Impoundment Control Act of 1974 — passed after Nixon tried to do exactly this — requires presidents to either spend appropriated money or ask Congress to cancel it.\n\nWhat got cut:\n- Department of State foreign assistance programs\n- USAID development and humanitarian programs\n- Contributions to multilateral institutions\n- Corporation for Public Broadcasting (which funds NPR and PBS)\n\nWhy it matters: This is one of the few cases where Congress formally ratified DOGE-era spending cuts rather than courts blocking them. For USAID and State Department programs, these cuts affected active development projects and diplomatic relationships around the world. For CPB, it represented a long-sought conservative goal of defunding public media.",
  legislativeHistory: [
    { date: '2025-07-01', event: 'Trump administration formally submits $9.4B rescission package to Congress under Impoundment Control Act' },
    { date: '2025-07-10', event: 'Passed U.S. House of Representatives — H.R. 4 introduced by Rep. Scalise' },
    { date: '2025-07-15', event: 'Passed U.S. Senate with amendment' },
    { date: '2025-07-18', event: 'House agreed to Senate amendment pursuant to H. Res. 590' },
    { date: '2025-07-24', event: 'Signed by President Trump · P.L. 119-28' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed July 24, 2025; proposed the rescissions via DOGE/OMB process' },
    { politicianId: '', politicianName: 'Steve Scalise', politicianTitle: 'House Majority Leader (R-LA)', action: 'sponsored', note: 'Lead House sponsor; carried the package through the floor' },
    { politicianId: '', politicianName: 'Patty Murray', politicianTitle: 'U.S. Senator (D-WA)', action: 'no', note: 'Led Democratic opposition; argued cuts to USAID would harm global health and humanitarian programs' },
    { politicianId: '', politicianName: 'Rand Paul', politicianTitle: 'U.S. Senator (R-KY)', action: 'yes', note: 'Strong supporter; long-time advocate for cutting foreign aid' },
  ],
  relatedPoliticianIds: [],
  tags: ['Spending Cuts', 'DOGE', 'Foreign Aid', 'USAID', 'Budget', 'Impoundment', '119th Congress'],
  sources: [
    {
      id: 'rescissions-congress',
      label: 'H.R. 4 — Rescissions Act of 2025 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/4',
      publisher: 'Congress.gov',
      publishedAt: '2025-07-24',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const continuingAppropriations2026: Bill = {
  id: 'continuing-appropriations-fy2026-shutdown',
  slug: 'continuing-appropriations-fy2026-shutdown',
  number: 'H.R. 5371',
  title: 'Continuing Appropriations, Agriculture, Legislative Branch, Military Construction and Veterans Affairs, and Extensions Act, 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-11-12',
  sponsor: {
    name: 'Tom Cole',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Oklahoma',
  },
  summary:
    'This law ended the 43-day federal government shutdown that began October 1, 2025 — the longest shutdown since the 35-day 2018–2019 Trump-era closure — after Congress failed to pass FY2026 appropriations before the start of the fiscal year. The law provides full-year FY2026 funding for Agriculture, Military Construction and Veterans Affairs, and the Legislative Branch, while extending continuing appropriations for most remaining agencies through January 30, 2026. The Senate passed it 60–40 on November 10, 2025, satisfying the 60-vote cloture threshold. President Trump signed it on November 12. Public Law 119-37.',
  detail:
    "The FY2026 shutdown began at midnight on September 30, 2025, after Congress — consumed throughout the summer by the One Big Beautiful Bill reconciliation package — failed to pass any FY2026 appropriations legislation before the October 1 fiscal year start. The government remained closed for 43 days, with hundreds of thousands of federal workers furloughed without pay, national parks closed, and numerous government services suspended or slowed. Government contractors went unpaid for the duration. The shutdown ended when H.R. 5371 was signed, which included a continuing resolution that funded most agencies at roughly FY2025 levels through January 30, 2026, buying time for Congress to complete the remaining FY2026 appropriations bills. The law also provided full-year funding for Agriculture, Military Construction/VA, and the Legislative Branch, effectively completing three of twelve annual appropriations subgroups. The Senate required 60 votes (the 60–40 margin reflecting at least 10 Democratic votes), meaning the shutdown resolution required bipartisan cooperation. Subsequent appropriations bills completed the remaining subgroups through January–February 2026.",
  aiExplanation:
    "The 43-day government shutdown of 2025 was a direct consequence of Congress failing to do its basic annual job: funding the government by October 1.\n\nWhy the shutdown happened: The 119th Congress spent most of 2025 focused on the One Big Beautiful Bill reconciliation package — which was the legislative priority for Trump's second term. Appropriations work got crowded out. When September 30 arrived with no FY2026 spending bills passed, the government ran out of authority to spend money and shut down.\n\nWhat a shutdown does:\n- 'Essential' federal employees (military, law enforcement, air traffic control) keep working but don't get paid until the shutdown ends\n- 'Non-essential' employees are furloughed (sent home without pay)\n- National parks, museums, and visitor services close\n- Government contractors stop getting paid (and usually don't get back pay)\n- Federal loans, permits, and benefit processing slow dramatically\n\nThe 60-vote problem: Even though Republicans controlled both chambers, the Senate requires 60 votes to break a filibuster on most legislation. That meant Senate Republicans needed at least 10 Democratic votes to end the shutdown. That bipartisan necessity — and the political pain of a shutdown stretching into weeks — eventually produced the 60–40 vote.\n\nWhat came next: This law bought time through January 30, 2026, but Congress still had to complete the remaining FY2026 appropriations bills. That process played out through February 2026, including a second partial DHS-only shutdown in February.",
  legislativeHistory: [
    { date: '2025-10-01', event: 'FY2026 begins without enacted appropriations — 43-day government shutdown begins', notes: 'Longest shutdown since 2018–2019; hundreds of thousands of federal workers furloughed' },
    { date: '2025-10-01', event: 'First day of shutdown — national parks close, federal services suspended' },
    { date: '2025-11-10', event: 'Passed U.S. Senate', notes: 'Vote: 60–40 · Required bipartisan support to clear cloture' },
    { date: '2025-11-12', event: 'Signed by President Trump — 43-day shutdown ends · P.L. 119-37', notes: 'Full-year funding for Agriculture, Mil-Con/VA, and Legislative Branch; CR for most other agencies through January 30, 2026' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed November 12, 2025, ending the 43-day shutdown' },
    { politicianId: '', politicianName: 'Tom Cole', politicianTitle: 'Chair, House Appropriations Committee (R-OK)', action: 'sponsored', note: 'Lead House negotiator on all FY2026 appropriations legislation' },
    { politicianId: '', politicianName: 'Chuck Schumer', politicianTitle: 'U.S. Senate Minority Leader (D-NY)', action: 'yes', note: 'Democrats provided votes to clear the 60-vote threshold; used leverage to protect some spending programs' },
    { politicianId: '', politicianName: 'Mike Johnson', politicianTitle: 'Speaker of the U.S. House (R-LA)', action: 'yes', note: 'Supported the resolution; had prioritized OBBB reconciliation, which contributed to the delayed FY2026 funding process' },
  ],
  relatedPoliticianIds: [],
  tags: ['Appropriations', 'Government Shutdown', 'Government Funding', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'cr2026-shutdown-congress',
      label: 'H.R. 5371 — Continuing Appropriations Act, 2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/5371',
      publisher: 'Congress.gov',
      publishedAt: '2025-11-12',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const ndaaFy2026: Bill = {
  id: 'ndaa-fy2026',
  slug: 'ndaa-fy2026',
  number: 'S. 1071',
  title: 'National Defense Authorization Act for Fiscal Year 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2025-12-18',
  sponsor: {
    name: 'John Cornyn',
    title: 'U.S. Senator',
    party: 'Republican Party',
    state: 'Texas',
  },
  summary:
    "The National Defense Authorization Act for Fiscal Year 2026 sets defense policy and authorizes military spending levels for FY2026. The Senate agreed to the House amendment 77–20 on December 17, 2025, and President Trump signed it on December 18 as Public Law 119-60. The NDAA authorizes procurement of aircraft, ships, and missiles; establishes active duty and reserve strength levels; sets military compensation and healthcare policy; governs defense acquisitions and domestic sourcing requirements; and addresses foreign policy matters including Israel, Ukraine, and the Indo-Pacific. The bill marks the 64th consecutive year Congress has enacted an NDAA.",
  detail:
    "The NDAA is the one bill Congress has passed every year for over six decades, making it one of the most reliable legislative vehicles. In addition to authorizing defense spending levels (the actual money is appropriated separately), the NDAA often carries significant policy provisions that wouldn't advance as standalone bills. The FY2026 NDAA includes provisions related to cybersecurity operations, artificial intelligence in defense applications, Pacific deterrence and INDOPACOM posture, nuclear modernization, and domestic defense supply chain requirements. Ukraine-related provisions reflect the ongoing debate over U.S. support levels. The 77–20 Senate vote indicates bipartisan support despite the partisan environment — defense authorization traditionally attracts some Democratic support even when the broader political relationship is adversarial. The House-passed amendment that the Senate agreed to incorporated significant House Armed Services Committee changes.",
  aiExplanation:
    "The NDAA is Congress's annual defense policy bill — and the one piece of major legislation that almost always gets done, even when everything else fails.\n\nWhat it does: The NDAA doesn't actually spend money — it authorizes spending levels and sets policy for the Defense Department. The actual appropriation (the check) is written in the defense appropriations bill, which is one of the twelve annual spending bills.\n\nThink of the NDAA as the instruction manual: it says what the military can and can't do, how many troops at what rank, what weapons to buy, which bases to keep open. Congress uses it as a vehicle for all sorts of defense and national security policy.\n\nWhy it almost always passes: Defense is the one area where there's always enough bipartisan consensus to get to 60 Senate votes (77–20 here). Members from districts with military bases and defense contractors have strong incentives to support it regardless of party.\n\nFY2026 highlights:\n- Major procurement authorizations for the Pacific theater (ships, missiles, forward positioning)\n- AI and autonomous systems policy for military applications\n- Provisions on Ukraine assistance and conditions\n- Domestic sourcing requirements for defense supply chains\n- Cybersecurity and offensive/defensive cyber operations authority",
  legislativeHistory: [
    { date: '2025-06-05', event: 'Senate Armed Services Committee markup — bill reported out' },
    { date: '2025-10-15', event: 'Passed U.S. Senate (original version)' },
    { date: '2025-11-20', event: 'House Armed Services Committee adopts substantial amendments' },
    { date: '2025-12-05', event: 'Passed U.S. House of Representatives with amendments' },
    { date: '2025-12-17', event: 'Senate agreed to House amendment', notes: 'Vote: 77–20 · Bipartisan' },
    { date: '2025-12-18', event: 'Signed by President Trump · P.L. 119-60 · 64th consecutive NDAA enacted' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed December 18, 2025' },
    { politicianId: '', politicianName: 'John Cornyn', politicianTitle: 'U.S. Senator (R-TX)', action: 'sponsored', note: 'Lead Senate sponsor; Chair of Senate Armed Services Committee' },
    { politicianId: '', politicianName: 'Jack Reed', politicianTitle: 'U.S. Senator (D-RI)', action: 'yes', note: 'Ranking member of Senate Armed Services; Democrats supported despite policy differences' },
    { politicianId: '', politicianName: 'Bernie Sanders', politicianTitle: 'U.S. Senator (I-VT)', action: 'no', note: 'Voted no; cited overall defense spending levels and objections to specific provisions' },
  ],
  relatedPoliticianIds: [],
  tags: ['Defense', 'Military', 'National Security', 'NDAA', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'ndaa-2026-congress',
      label: 'S. 1071 — National Defense Authorization Act for FY2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/1071',
      publisher: 'Congress.gov',
      publishedAt: '2025-12-18',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const consolidatedAppropriations2026: Bill = {
  id: 'consolidated-appropriations-act-2026',
  slug: 'consolidated-appropriations-act-2026',
  number: 'H.R. 7148',
  title: 'Consolidated Appropriations Act, 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2026-02-03',
  sponsor: {
    name: 'Tom Cole',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Oklahoma',
  },
  summary:
    "The Consolidated Appropriations Act, 2026 (P.L. 119-75) provides full-year FY2026 funding for five appropriations subgroups: Defense, Labor/HHS/Education, Transportation/HUD, Financial Services/General Government, and State/National Security — plus a short-term continuing resolution for DHS through February 13. The House passed it 341–88 on January 22, 2026, and the Senate cleared it with 60+ votes on January 30. President Trump signed it February 3. The bill was the final major piece of a fractured FY2026 funding process that included the 43-day shutdown (Oct–Nov 2025) and a prior mini-bus for Commerce, Justice, Science, Energy/Water, and Interior enacted January 23.",
  detail:
    "By the time this bill was signed, FY2026 funding had come through multiple vehicles. The CR ending the shutdown (H.R. 5371, signed Nov 12, 2025) covered most agencies through January 30, 2026, while completing Agriculture, Mil-Con/VA, and the Legislative Branch for the full year. H.R. 6938 (P.L. 119-74, signed January 23, 2026) covered Commerce, Justice, Science; Energy and Water; and Interior. H.R. 7148 then completed the five remaining major subgroups. A separate continuing resolution for DHS and the remaining agencies was still working through the Senate in early 2026. The House 341–88 vote was highly bipartisan, reflecting the political reality that government funding bills require Senate supermajority approval. The Senate passage with 60+ votes required meaningful Democratic cooperation. DHS, still without full-year funding, subsequently had a brief partial shutdown beginning February 14 when the H.R. 7148 DHS CR expired before a full-year DHS bill was enacted.",
  aiExplanation:
    "The Consolidated Appropriations Act, 2026 closed out most of the FY2026 budget — the final big piece of a funding process that had been painfully slow all year.\n\nThe backstory: FY2026 started October 1, 2025. The government shut down for 43 days (Oct–Nov) because Congress was focused on the Big Beautiful Bill. Then a stopgap CR extended most funding through January 30. Then a mini-bus covered some smaller departments in January. This bill covered the big five: Defense, Labor/HHS/Ed, Transportation/HUD, Financial Services, and State/National Security.\n\nWhy the 341–88 bipartisan House vote? Even in a deeply partisan Congress, appropriations bills need 60 Senate votes (requiring ~10 Democrats). House leadership needed a bill that could clear that threshold. The alternative — another shutdown — was politically toxic for everyone.\n\nDHS left out: The Department of Homeland Security was only funded through February 13 in this bill — a placeholder while a separate DHS appropriations bill moved through Congress. DHS had a brief partial shutdown starting February 14 when that placeholder expired. The standalone DHS bill eventually passed the House 221–209 on March 5, 2026, but remained in the Senate as of late April.",
  legislativeHistory: [
    { date: '2026-01-20', event: 'Introduced by Rep. Tom Cole (R-OK), House Appropriations Chair' },
    { date: '2026-01-22', event: 'Passed U.S. House of Representatives', notes: 'Vote: 341–88 · Strong bipartisan majority' },
    { date: '2026-01-23', event: 'H.R. 6938 signed — Commerce, Justice, Science; Energy & Water; Interior (P.L. 119-74)' },
    { date: '2026-01-30', event: 'Passed U.S. Senate', notes: '60+ Yea-Nay votes · Bipartisan majority required for cloture' },
    { date: '2026-02-03', event: 'Signed by President Trump · P.L. 119-75' },
    { date: '2026-02-14', event: 'Partial DHS shutdown begins — DHS CR in this bill expired, standalone DHS bill not yet enacted' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed February 3, 2026 as P.L. 119-75' },
    { politicianId: '', politicianName: 'Tom Cole', politicianTitle: 'Chair, House Appropriations Committee (R-OK)', action: 'sponsored', note: 'Lead House negotiator; sponsored every FY2026 appropriations vehicle' },
    { politicianId: '', politicianName: 'Mike Johnson', politicianTitle: 'Speaker of the U.S. House (R-LA)', action: 'yes', note: 'Supported; OBBB reconciliation focus had delayed FY2026 funding process' },
    { politicianId: '', politicianName: 'Hakeem Jeffries', politicianTitle: 'House Minority Leader (D-NY)', action: 'yes', note: 'Democrats provided critical votes to clear the 60-vote Senate threshold' },
  ],
  relatedPoliticianIds: [],
  tags: ['Appropriations', 'Government Funding', 'Defense', 'Bipartisan', '119th Congress'],
  sources: [
    {
      id: 'hr7148-congress',
      label: 'H.R. 7148 — Consolidated Appropriations Act, 2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/7148',
      publisher: 'Congress.gov',
      publishedAt: '2026-02-03',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const fisaReauthorization2026: Bill = {
  id: 'fisa-reauthorization-2026',
  slug: 'fisa-reauthorization-2026',
  number: 'H.R. 8322',
  title: 'FISA Section 702 Extension Act of 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'signed',
  statusDate: '2026-04-18',
  sponsor: {
    name: 'Austin Scott',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Georgia',
  },
  summary:
    'H.R. 8322 extends the authorities of Title VII of the FISA Amendments Act of 2008 — primarily Section 702, which authorizes NSA collection of communications from non-U.S. persons abroad. The prior authorization, enacted in April 2024, was set to expire in April 2026. The bill passed both chambers by voice vote on April 17, 2026, and President Trump signed it on April 18 as Public Law 119-84. The extension continues the controversy over warrantless FBI access to databases of American communications incidentally collected under 702.',
  detail:
    "Section 702 has required reauthorization every two years since 2008, and each cycle has produced the same debate: the intelligence community argues it is one of the most valuable foreign intelligence collection tools in existence; civil liberties advocates argue it amounts to a backdoor for warrantless surveillance of Americans who communicate with foreign targets. The 2024 reauthorization cycle saw a dramatic 212–212 tie on a warrant requirement amendment in the House, with Speaker Johnson casting the deciding vote against requiring FBI to obtain warrants before searching 702 databases for Americans' data. The 2026 extension appears to have passed with less controversy — both chambers passed it by voice vote — suggesting the reform effort lost momentum. The duration of the extension (whether it's another two years through 2028 or a different period) continues a recurring pattern of short reauthorizations that force periodic reviews without resolving the core surveillance debate.",
  aiExplanation:
    "This is the third time in three years that Congress has extended FISA Section 702 — and the second time without major reform.\n\nThe recurring fight: Section 702 lets the NSA collect communications from foreign targets outside the U.S. The problem: when a foreigner talks to an American, that American's communications get collected too. The FBI can search this database when investigating Americans in domestic criminal cases — without a warrant.\n\nWhat happened in 2024: A reform amendment that would have required the FBI to get a warrant before searching this database for Americans' data tied 212–212 in the House. Speaker Johnson voted against the warrant requirement, breaking the tie. The 2024 law extended 702 for two years (through April 2026) without reform.\n\nWhat happened in 2026: The extension passed both chambers by voice vote — no recorded votes, no drama. The reform effort that nearly succeeded in 2024 didn't gain enough traction for another floor fight. The result: 702 gets another extension, the FBI still doesn't need a warrant to access Americans' incidentally collected communications, and the debate continues.\n\nThe pattern: Congress has extended 702 multiple times now without resolving the underlying civil liberties question. The intelligence community's argument — that 702 is essential for counterterrorism — consistently wins over reform advocates' Fourth Amendment concerns, at least enough to prevent the authority from lapsing.",
  legislativeHistory: [
    { date: '2026-04-17', event: 'Passed U.S. House of Representatives without objection (voice vote)' },
    { date: '2026-04-17', event: 'Passed U.S. Senate by voice vote' },
    { date: '2026-04-18', event: 'Signed by President Trump · P.L. 119-84' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Donald Trump', politicianTitle: 'President of the United States', action: 'signed', note: 'Signed April 18, 2026; intelligence community had strongly advocated for renewal' },
    { politicianId: '', politicianName: 'Ron Wyden', politicianTitle: 'U.S. Senator (D-OR)', action: 'no', note: 'Longstanding opponent of 702 without warrant requirement; has voted against every reauthorization' },
    { politicianId: '', politicianName: 'Rand Paul', politicianTitle: 'U.S. Senator (R-KY)', action: 'no', note: 'Voted no on civil liberties grounds; has opposed 702 reauthorization consistently' },
    { politicianId: '', politicianName: 'Austin Scott', politicianTitle: 'Chair, House Intelligence Committee (R-GA)', action: 'yes', note: 'Lead sponsor; argued 702 remains indispensable for counterterrorism and foreign intelligence' },
  ],
  relatedPoliticianIds: [],
  tags: ['Intelligence', 'Surveillance', 'FISA', 'Civil Liberties', 'National Security', '119th Congress'],
  sources: [
    {
      id: 'fisa-2026-congress',
      label: 'H.R. 8322 — FISA Section 702 Extension Act of 2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/8322',
      publisher: 'Congress.gov',
      publishedAt: '2026-04-17',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

// ─── In Process ──────────────────────────────────────────────────────────────

export const dhsAppropriations2026: Bill = {
  id: 'dhs-appropriations-act-2026',
  slug: 'dhs-appropriations-act-2026',
  number: 'H.R. 7744',
  title: 'Department of Homeland Security Appropriations Act, 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'passed',
  statusDate: '2026-03-05',
  sponsor: {
    name: 'Tom Cole',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Oklahoma',
  },
  summary:
    "H.R. 7744 provides full-year FY2026 appropriations for the Department of Homeland Security and ended a partial DHS-only shutdown that began February 14, 2026, when the short-term DHS continuing resolution in the Consolidated Appropriations Act expired before a standalone DHS bill was enacted. The House passed the bill 221–209 on March 5, 2026. As of late April 2026, it awaits Senate action — DHS has been operating under the appropriations provided by the House-passed bill's predecessor authorities pending Senate passage.",
  detail:
    "DHS was the last major federal agency without full-year FY2026 funding after the February 3 Consolidated Appropriations Act included only a two-week DHS continuing resolution. When that CR expired on February 14, 2026, DHS entered a partial shutdown — affecting non-essential employees at CBP, TSA, FEMA, and other components. The House passed the standalone DHS bill 221–209 on March 5. The tight margin reflected Republican-only support; the bill included spending levels and border enforcement provisions that Democrats opposed. The DHS bill includes significant funding for immigration enforcement, deportation operations, border wall construction, and detention capacity — all priorities of the Trump administration's immigration agenda. The Senate, where 60 votes are required, faces a more difficult path for a partisan DHS bill compared to the broader bipartisan omnibus packages.",
  aiExplanation:
    "The DHS Appropriations Act is the last unfinished piece of FY2026 funding — and it's the hardest because DHS funding is the most politically contentious.\n\nWhy DHS is different: Almost every other federal department's appropriations can get bipartisan support in the Senate. DHS funding is different because it directly funds border enforcement, immigration detention, deportation operations, and the border wall — all of which are deeply polarizing.\n\nThe partial shutdown: DHS briefly shut down for about three weeks starting February 14, 2026, when the placeholder CR in the Consolidated Appropriations Act expired. Federal workers at CBP, ICE, TSA, FEMA, and other DHS components were affected.\n\nThe 221–209 vote: The tight, mostly party-line House vote shows this is not a bipartisan bill. Senate Democrats have strong incentives to demand changes to immigration enforcement funding levels before providing the 60 votes needed for cloture. This creates the same dynamic as every DHS appropriations fight: House Republicans pass what they want, Senate Democrats insist on changes, negotiations drag on.\n\nStatus: House-passed, awaiting Senate action as of late April 2026.",
  legislativeHistory: [
    { date: '2026-02-14', event: 'Partial DHS shutdown begins — DHS CR from Consolidated Appropriations Act expired' },
    { date: '2026-03-05', event: 'Passed U.S. House of Representatives', notes: 'Vote: 221–209 · Near party-line vote' },
    { date: '2026-03-09', event: 'Received in the Senate, referred to Senate Appropriations Committee' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Tom Cole', politicianTitle: 'Chair, House Appropriations Committee (R-OK)', action: 'sponsored', note: 'Lead House negotiator on all FY2026 appropriations' },
    { politicianId: '', politicianName: 'Mike Johnson', politicianTitle: 'Speaker of the U.S. House (R-LA)', action: 'yes', note: 'Supported; bill includes border enforcement and wall construction funding' },
    { politicianId: '', politicianName: 'Hakeem Jeffries', politicianTitle: 'House Minority Leader (D-NY)', action: 'no', note: 'Led Democratic opposition to the bill; objected to immigration enforcement funding levels' },
  ],
  relatedPoliticianIds: [],
  tags: ['Appropriations', 'DHS', 'Border Security', 'Government Funding', 'Government Shutdown', '119th Congress'],
  sources: [
    {
      id: 'hr7744-congress',
      label: 'H.R. 7744 — Department of Homeland Security Appropriations Act, 2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/7744',
      publisher: 'Congress.gov',
      publishedAt: '2026-03-05',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const farmBill2026: Bill = {
  id: 'farm-bill-2026',
  slug: 'farm-bill-2026',
  number: 'H.R. 7567',
  title: 'Farm, Food, and National Security Act of 2026',
  jurisdiction: 'U.S. Congress',
  session: '119th Congress',
  status: 'in-committee',
  statusDate: '2026-04-21',
  sponsor: {
    name: 'Glenn Thompson',
    title: 'U.S. Representative',
    party: 'Republican Party',
    state: 'Pennsylvania',
  },
  summary:
    "The Farm, Food, and National Security Act of 2026 reauthorizes through FY2031 the major USDA programs that form the backbone of U.S. agricultural policy — including commodity price supports, crop insurance, conservation programs, trade and food aid, the SNAP nutrition assistance program, rural development, farm credit, research, energy, and horticulture. The bill was placed on the House Union Calendar on April 21, 2026, meaning it has cleared committee and is awaiting a full House floor vote. The farm bill is years overdue — the prior 2018 Farm Bill was extended multiple times through FY2024 before expiring; Congress has been operating under emergency extensions since.",
  detail:
    "The farm bill is one of the most complex pieces of legislation Congress produces — a sprawling multi-title bill that encompasses not just agriculture but also the nation's largest nutrition assistance program (SNAP, formerly food stamps), which accounts for roughly 80% of the farm bill's total spending. The 2018 Farm Bill was a five-year authorization through FY2023, but Congress failed to pass a new farm bill in 2023, 2024, or 2025, operating instead under a series of short-term extensions. The 2026 version reflects the new Republican majority's priorities: commodity title reforms, conservation program restructuring, energy title revisions (trimming some Biden-era climate programs), and SNAP eligibility modifications. SNAP changes are always the most contentious aspect of farm bill negotiations — conservative Republicans seek work requirements and eligibility restrictions; Democrats defend existing benefit levels and access. The five-year reauthorization through FY2031 would provide stability for farmers, rural communities, and program recipients if enacted.",
  aiExplanation:
    "The farm bill is a once-every-five-years megabill that most people have never heard of — but it directly affects what food costs at the grocery store, whether farmers can get insurance, and whether millions of low-income Americans can buy food.\n\nWhy it's called the 'farm bill' when 80% goes to food stamps: The farm bill bundles two politically incongruent constituencies — farm-state conservatives who want crop subsidies and urban Democrats who want food assistance (SNAP) — into one package. Each side needs the other's votes, so the deal holds together. Separate them, and both fail.\n\nWhat it covers:\n- Commodity programs: Price supports and insurance for corn, soybeans, wheat, cotton, and other major crops\n- Crop insurance: Subsidized risk management for farmers against weather and price losses\n- SNAP: The $100B+/year nutrition assistance program for ~42 million Americans\n- Conservation: Programs that pay farmers to use land in environmentally beneficial ways\n- Rural development: Loans and grants for rural broadband, housing, and business development\n\nWhy it's late (again): The 2018 Farm Bill expired in 2023. Congress failed to pass a new one in 2023, 2024, or 2025. Negotiations stalled over SNAP work requirements and conservation program spending. The 2026 version is now placed on the House Union Calendar — meaning it's ready for a floor vote but hasn't passed the House yet.\n\nThe SNAP fight: Republicans want to add work requirements and tighten eligibility; Democrats say changes would cut food access for working poor families. This is the core negotiation that has stalled every recent farm bill.",
  legislativeHistory: [
    { date: '2023-09-30', event: '2018 Farm Bill expires — Congress begins operating on emergency extensions' },
    { date: '2024-11-30', event: 'Previous extension expires; Congress passes further short-term extension' },
    { date: '2026-02-20', event: 'House Agriculture Committee marks up Farm, Food, and National Security Act of 2026' },
    { date: '2026-04-21', event: 'Placed on House Union Calendar — bill cleared committee, awaiting full House floor vote', notes: 'Calendar No. 537' },
  ],
  votes: [
    { politicianId: '', politicianName: 'Glenn Thompson', politicianTitle: 'Chair, House Agriculture Committee (R-PA)', action: 'sponsored', note: 'Lead House sponsor; navigating the SNAP and conservation title disagreements' },
    { politicianId: '', politicianName: 'David Scott', politicianTitle: 'Ranking Member, House Agriculture Committee (D-GA)', action: 'opposed', note: 'Democratic opposition centered on proposed SNAP eligibility changes and conservation program cuts' },
  ],
  relatedPoliticianIds: [],
  tags: ['Agriculture', 'SNAP', 'Food Policy', 'Rural Development', 'Farm Policy', '119th Congress'],
  sources: [
    {
      id: 'hr7567-congress',
      label: 'H.R. 7567 — Farm, Food, and National Security Act of 2026 (Congress.gov)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/7567',
      publisher: 'Congress.gov',
      publishedAt: '2026-04-21',
      retrievedAt: '2026-04-25',
      type: 'legislative-record',
    },
  ],
}

export const allBills: Bill[] = [
  // In process (most recent activity first)
  farmBill2026,
  dhsAppropriations2026,
  // Signed into law (newest first)
  fisaReauthorization2026,
  consolidatedAppropriations2026,
  ndaaFy2026,
  continuingAppropriations2026,
  rescissionsAct,
  geniusAct,
  obbb,
  takeItDownAct,
  lakenRiley,
]

export const billsById: Record<string, Bill> = Object.fromEntries(
  allBills.map((b) => [b.slug, b])
)

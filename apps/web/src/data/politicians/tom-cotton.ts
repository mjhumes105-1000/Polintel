import type { PoliticianProfile } from '@political-intel/types'
import { buildCongressProfile } from './ca-congress-builder'

const data = {
  bioguideId: 'C001095',
  slug: 'tom-cotton',
  name: 'Tom Cotton',
  party: 'R' as const,
  chamber: 'Senate' as const,
  state: 'Arkansas',
  currentTitle: 'U.S. Senator from Arkansas',
  bio: 'Tom Cotton has served as U.S. Senator from Arkansas since January 2015, when he unseated Democratic incumbent Mark Pryor by 17 points in the largest margin of any Senate race that cycle. A Harvard College and Harvard Law graduate, he served as a U.S. Army captain with the 101st Airborne in Iraq and the 3rd U.S. Infantry Regiment (Old Guard) guarding the Tomb of the Unknown Soldier, earning the Combat Infantryman Badge and Bronze Star. He has emerged as one of the Senate\'s most hawkish voices on foreign policy, China competition, and immigration, and is widely regarded as a leading potential presidential candidate.',
  sinceYear: 2015,
  committees: [
    {
      slug: 'ssas',
      name: 'Senate Committee on Armed Services',
      chamber: 'Senate' as const,
      role: 'Member' as const,
    },
    {
      slug: 'ssin',
      name: 'Senate Select Committee on Intelligence',
      chamber: 'Senate' as const,
      role: 'Member' as const,
    },
    {
      slug: 'ssbk',
      name: 'Senate Committee on Banking, Housing, and Urban Affairs',
      chamber: 'Senate' as const,
      role: 'Member' as const,
    },
  ],
  previousOffices: [
    {
      title: 'U.S. Representative, Arkansas 4th District',
      jurisdiction: 'U.S. House of Representatives',
      startDate: '2013-01-03',
      endDate: '2015-01-03',
    },
    {
      title: 'U.S. Army Captain — 101st Airborne Division & Old Guard',
      jurisdiction: 'United States Army',
      startDate: '2005-01-01',
      endDate: '2009-01-01',
    },
  ],
  keyMilestones: [
    {
      year: 2006,
      description: 'Deployed to Iraq with the 101st Airborne Division; earned the Combat Infantryman Badge and Bronze Star for actions in Anbar Province',
    },
    {
      year: 2007,
      description: 'Assigned to the 3rd U.S. Infantry Regiment (Old Guard) in Washington, D.C., guarding the Tomb of the Unknown Soldier at Arlington National Cemetery',
    },
    {
      year: 2012,
      description: 'Elected to U.S. House for Arkansas\'s 4th Congressional District, defeating Democratic incumbent Mike Ross with 60% of the vote',
    },
    {
      year: 2014,
      description: 'Unseated Democratic Senator Mark Pryor by 17 points — the first Senate seat to fall in the 2014 midterm wave and the largest margin of any Senate race that cycle',
    },
    {
      year: 2015,
      description: 'Organized the "Cotton Letter" — an open letter to Iranian leadership signed by 47 Republican senators warning that any nuclear agreement could be reversed by a future Congress or president, generating significant international controversy',
    },
    {
      year: 2020,
      description: 'Published a New York Times op-ed titled "Send In the Troops" calling for the use of federal military force to suppress George Floyd protests, triggering an internal revolt at the Times and the resignation of editorial page editor James Bennet',
    },
    {
      year: 2021,
      description: 'Broke with Ted Cruz and Josh Hawley, releasing a statement that Congress lacked constitutional authority to reject certified electoral votes — a position that set him apart within the GOP\'s contested-election faction',
    },
    {
      year: 2024,
      description: 'Published "Only the Strong," outlining a foreign policy vision centered on military strength, China deterrence, and American industrial revival; re-elected to Senate with 66% of the vote',
    },
  ],
  keyVotes: [
    {
      title: 'Against Nuclear Agreement Review Act — Iran Letter',
      year: 2015,
      month: 3,
      position: 'Against' as const,
      summary: 'Organized the open letter to Iranian leadership signed by 47 Republican senators, arguing that any executive agreement on Iran\'s nuclear program could be voided by a future administration or Congress. The letter drew international condemnation as interference with executive diplomacy, but it energized Cotton\'s national security profile and positioned him as the Senate\'s most aggressive Iran hawk at the start of his first term.',
    },
    {
      title: 'For: Tax Cuts and Jobs Act',
      year: 2017,
      month: 12,
      position: 'For' as const,
      summary: 'Voted for the $1.5 trillion tax overhaul, which reduced the corporate rate from 35% to 21%, created a 20% pass-through deduction, and temporarily lowered individual rates. Cotton supported the bill as a driver of economic growth and manufacturing investment, though Arkansas\'s rural economy saw mixed effects — the corporate rate cut primarily benefited large employers while the pass-through deduction helped small business owners.',
    },
    {
      title: 'Against Infrastructure Investment and Jobs Act',
      year: 2021,
      month: 11,
      position: 'Against' as const,
      summary: 'Voted against the $1.2 trillion bipartisan infrastructure law, opposing it alongside most Senate conservatives as excessive spending. Cotton argued the bill — which 19 Republicans supported — was too large and would contribute to inflation. His opposition placed him outside the group of Republican senators who worked with the Biden administration on the deal, including Rob Portman and Lisa Murkowski.',
    },
    {
      title: 'For: National Defense Authorization Act (NDAA) FY2024',
      year: 2023,
      month: 12,
      position: 'For' as const,
      summary: 'Voted for the FY2024 NDAA from his Armed Services Committee seat, securing provisions targeting Chinese military technology infiltration and strengthening Indo-Pacific deterrence. Cotton has consistently backed increases to defense authorizations and used his Armed Services position to champion expanded investment in nuclear modernization, missile defense, and Special Operations Forces.',
    },
    {
      title: 'For: Laken Riley Act',
      year: 2025,
      month: 1,
      position: 'For' as const,
      summary: 'Voted for the Laken Riley Act mandating ICE detention of undocumented immigrants charged with violent crimes. Cotton had been among the Senate\'s most vocal immigration restrictionists for a decade and framed the bill as a long-overdue enforcement measure. He has co-authored multiple immigration bills tying visa categories, legal immigration levels, and border enforcement to stricter criteria.',
    },
    {
      title: 'For: One Big Beautiful Bill',
      year: 2025,
      month: 7,
      position: 'For' as const,
      summary: 'Voted for the Republican budget reconciliation bill, supporting its tax cut extensions, Medicaid work requirements, and border enforcement spending. Cotton backed the bill as advancing the national security and fiscal priorities he has championed throughout his Senate tenure, including defense spending increases tied to offset cuts in domestic programs.',
    },
  ],
  keyBills: [
    {
      title: 'RAISE Act — Reforming American Immigration for Strong Employment',
      year: 2017,
      month: 8,
      summary: 'Introduced with Senator David Perdue, the RAISE Act would have cut legal immigration levels by approximately 50% over a decade, shifting the system from family-based reunification to a merit-based points system prioritizing education, skills, and English proficiency. President Trump endorsed the bill at a White House event. While it did not pass the Senate, it established the intellectual framework for the immigration restrictionism that became central to the Trump agenda.',
    },
    {
      title: 'BIOSECURE Act',
      year: 2024,
      month: 1,
      summary: 'Introduced bipartisan legislation barring U.S. federal agencies from contracting with Chinese biotechnology companies including BGI Genomics and WuXi AppTec — firms Cotton argued posed national security risks through access to American genomic and health data. The bill passed the House with strong bipartisan support and reflected Cotton\'s broader effort to restrict Chinese access to sensitive American technology sectors, extending his China competition work from his Intelligence Committee seat.',
    },
    {
      title: 'Senate Armed Services Committee — China Competition Provisions',
      year: 2023,
      month: 7,
      summary: 'Led Armed Services Committee work on provisions restricting Chinese military and intelligence access to U.S. technology and defense supply chains, including limits on rare earth mineral dependence and semiconductor sourcing from Chinese companies. Cotton has been the Senate\'s most active member on integrating China competition into defense authorization language.',
    },
  ],
  topSectors: [
    { category: 'Defense & Aerospace', amount: 1800000, percentage: 32 },
    { category: 'Finance & Banking', amount: 1500000, percentage: 27 },
    { category: 'Energy & Natural Resources', amount: 900000, percentage: 16 },
    { category: 'Individual Contributors', amount: 1400000, percentage: 25 },
  ],
  recordAssessment: {
    whatTheRecordShows: [
      'Cotton has compiled one of the Senate\'s most consistently hawkish foreign policy records, opposing diplomatic agreements with Iran, China, and Russia that he views as insufficiently hard on adversaries.',
      'His immigration record is among the most restrictionist in the Senate — he has co-authored legislation cutting legal immigration levels, opposed most comprehensive immigration reform bills, and been a leading voice for merit-based selection over family reunification.',
      'He has voted with Senate Republicans on nearly every major piece of legislation and has not developed a reputation for bipartisan dealmaking, with the exception of the BIOSECURE Act and select defense bills.',
    ],
    whatWeObserve: [
      'Cotton is one of the most strategically self-aware members of the Senate, consistently positioning himself on issues — China, Iran, immigration, crime — that he believes define Republican voters\' priorities and his potential national candidacy.',
      'His military background is central to his political identity and public persona in a way that few modern senators replicate. He draws on his combat service to establish credibility on national security arguments that his Ivy League credentials alone would not provide.',
      'The Iran letter, the NYT op-ed, and his January 6 position all reveal a politician willing to take high-risk moves — with mixed results. The Iran letter made him a conservative hero; the NYT op-ed damaged him with moderates; his January 6 position set him apart from the Trump-aligned majority of his party without cost to his eventual re-election.',
    ],
    whatIsUnresolved: [
      'Cotton has been discussed as a 2028 presidential candidate since at least 2016. His path to the presidency requires navigating a Republican primary electorate that is deeply loyal to Trump and may not reward the kind of institutionalist conservatism Cotton represents on some issues.',
    ],
  },
}

const tomCotton: PoliticianProfile = buildCongressProfile(data)
export default tomCotton

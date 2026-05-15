export type EssaySection = {
  id: string
  title?: string   // undefined = intro (no rendered H2, not in ToC)
  body: string[]   // paragraphs; [text](url) markdown links are parsed inline
}

export const essay = {
  title: 'The Unaudited Investment',
  subtitle:
    'Black voters have built the most reliable bloc in American politics. The terms of that arrangement have never been audited.',

  sections: [
    {
      id: 'intro',
      body: [
        'For six decades, Black Americans have delivered the most consistent bloc of votes in the Democratic Party. They have done so through realignment, recession, war, and reform. They have done so when the candidate was a young senator from Illinois and when the candidate was an aging vice president from Delaware. They have done so when turned out by churches, mobilized by unions, organized by sororities, and rallied by celebrities. In 2024, after a campaign cycle marked by inflation, immigration anxiety, and visible dissatisfaction among Black men, Pew’s validated voter analysis still recorded Black voters backing Kamala Harris over Donald Trump by 83% to 15%.',
        'That is loyalty by any measure. The question this essay asks is whether it has been a sound investment.',
        'It is a question that polite political conversation tends to avoid, because raising it invites accusations from all directions — that the inquiry is naïve, partisan, ungrateful, or worse. But the question is neither partisan nor disrespectful. It is the same question an investor asks of any capital deployed over a long horizon. What has the investment purchased? Where have the returns shown up? Who has been held accountable when they have not? And what would change if the investor began to behave like an investor rather than a customer?',
        'The answer that emerges from the data is uncomfortable for both parties. It is also a roadmap.',
      ],
    },
    {
      id: 'bloc-cannot-be-moved',
      title: 'A Bloc That Cannot Be Moved Is a Bloc That Need Not Be Heard',
      body: [
        'The political economy of a guaranteed vote is straightforward. When one party assumes a constituency, it tends to manage that constituency for turnout rather than compete for it on policy. When the other party assumes the same constituency is unreachable, it tends to underinvest, stereotype, or substitute viral cultural moments for sustained local presence. The result is a bloc that is simultaneously celebrated and ignored — visible at conventions, invisible in budget negotiations.',
        'This is not a hypothesis. It is the structure of the modern American electorate. [Gallup found](https://news.gallup.com/poll/609776/democrats-lose-ground-black-hispanic-adults.aspx) that Black adults’ Democratic identification has slipped from 77% in 2020 to 66% in 2023, while Republican identification rose from 11% to 19%. That is movement. It is not enough movement.',
        '[Pew’s 2024 analysis](https://www.pewresearch.org/politics/2025/06/26/voting-patterns-in-the-2024-election/) shows Trump’s Black vote share climbing from 6% in 2016 to 8% in 2020 to 15% in 2024. Pew is careful to note that much of the 2024 shift reflects changes in who turned out rather than wholesale individual defection — but that distinction is academic. From the perspective of a campaign strategist allocating a final week of resources, a five-point swing among Black men under 45, which the [AP VoteCast](https://www.ap.org/news-highlights/spotlights/2024/how-5-key-demographic-groups-voted-in-2024-ap-votecast/) reported approached 30%, is a five-point swing whether it came from persuasion or selective demobilization.',
        'What it is not is a number that has yet purchased serious accountability from either party. Democrats responded to the 2024 enthusiasm gap with an “Opportunity Agenda for Black Men,” released roughly four weeks before Election Day. It included up to $20,000 in forgivable loans for Black entrepreneurs, apprenticeship expansion, and health initiatives on sickle cell disease and prostate cancer. As policy, it had substance. As timing, it was the work of a campaign reacting to a crisis it had been told was coming for a year.',
      ],
    },
    {
      id: 'identity-as-argument',
      title: 'The Trouble With Identity as Argument',
      body: [
        'The clearest evidence that the Democratic Party views Black voters as a managed constituency rather than a contested one is the persistent reach for identity pressure when policy persuasion is not at hand.',
        'In May of 2020, Joe Biden told the host of The Breakfast Club, “If you have a problem figuring out whether you’re for me or Trump, then you ain’t black.” He apologized within hours, saying he had been “much too cavalier.” His campaign explained the remark was offered in jest. The apology was warranted. The reflex was revealing.',
        'Four years later, Barack Obama stood in a Harris campaign field office in Pittsburgh and suggested that Black men’s lower enthusiasm for the vice president might reflect discomfort with “the idea of having a woman as president.” Critics inside the Democratic coalition objected. Former Ohio state senator Nina Turner asked why Black men were being “lectured to” and “belittled in ways that no other voting group” had been. Defenders argued — fairly — that sexism is real, that Obama was making the case for a candidate he believed in, and that frank persuasion is part of politics. Both can be true. What is harder to defend is the absence, in either moment, of a specific policy proposition tied to Black male economic concerns, public safety in Black neighborhoods, or the cost of housing in cities where Black families have been priced out by a decade of Democratic municipal governance.',
        'A party that treats its strongest constituency as one to be persuaded rather than serviced does not need to deploy identity as argument. It can lead with returns. The reach for shame is the tell.',
      ],
    },
    {
      id: 'bloc-not-monolithic',
      title: 'The Bloc Is Not What Its Voting Pattern Says It Is',
      body: [
        'One reason the captured-constituency dynamic has held is that Black voters are routinely treated as ideologically monolithic when the data say otherwise. [The KFF/theGrio survey](https://www.kff.org/racial-equity-and-health-policy/kff-thegrio-survey-of-black-voters/) of 1,000 Black registered voters in 2022 found that 54% described themselves as moderate, 28% as liberal, and just 17% as conservative — even as 74% identified with or leaned toward Democrats. A bloc that votes 80-plus percent for one party while describing itself as majority-moderate is not a bloc whose policy preferences have been carefully matched to its political behavior.',
        'The religion data tell the same story from a different angle. [Pew found](https://www.pewresearch.org/religion/2021/02/16/religion-and-politics/) that 81% of Black weekly religious attenders identify with the Democratic Party, statistically indistinguishable from the 84% of Black adults who seldom or never attend. Among White Americans, the religion-party correlation is sharp and well documented. Among Black Americans, it does not exist in any meaningful form. Whatever explains Black Democratic loyalty, it is not a simple alignment between progressive cultural politics and a constituency that holds majority-conservative views on family structure, public safety, religion, entrepreneurship, and personal responsibility.',
        'The most honest explanation is risk-based. Many Black voters view the Republican Party as worse on civil rights, voting rights, criminal justice, public education, labor protections, and the federal safety net — and they may be right. But “the alternative is worse” is not a return on investment. It is a justification for tolerating the absence of one.',
      ],
    },
    {
      id: 'republican-failure',
      title: 'The Republican Failure Is Equally Real',
      body: [
        'This is not a partisan brief. The Republican Party bears its share of responsibility for the captured-constituency problem, and a serious accounting must name it.',
        '[Pew reports](https://www.pewresearch.org/short-reads/2022/11/07/10-facts-about-black-republicans/) that only about one in ten Black adults identifies with or leans toward the GOP. The reasons are not mysterious. Black affiliation with Republicans began to decline in the 1940s and collapsed after the Civil Rights Act under Lyndon Johnson. The Southern Strategy, modern rhetoric on race and immigration, sporadic and underfunded outreach, and a recurring tendency to elevate a handful of Black conservative validators in place of building infrastructure have left the party with a chronic credibility deficit that even significant policy alignment on inflation, school choice, religious liberty, and small-business formation cannot overcome.',
        'The 2024 cycle illustrated the pattern. [The Associated Press reported](https://apnews.com/article/trump-black-latino-asian-voters-d421f0859579a48adfb03bbf305aad78) that the Trump campaign’s minority outreach was criticized inside the party for closed local offices, reliance on viral celebrity moments, and a coalition-building effort that arrived late and stayed shallow. The campaign defended its work as historic in scope. Both descriptions have evidence behind them.',
        'Republican opportunity is real. Republican investment has not been. And as long as the second remains true, Black voters cannot extract maximum leverage from the first — because leverage requires a credible alternative, and a credible alternative requires the alternative party to do the work.',
      ],
    },
    {
      id: 'safety-and-schools',
      title: 'The Test Both Parties Have Failed: Safety and Schools',
      body: [
        'The cleanest measure of any political arrangement is whether it improves daily life in the places where the constituency actually lives. For Black Americans, that test reduces to two questions: Are neighborhoods safer? Are children better educated?',
        'The answers are not what six decades of political investment should have purchased.',
        '[The 2024 NAEP results](https://www.nationsreportcard.gov/reports/reading/2024/g4_8/) found that 33% of American eighth graders performed below NAEP Basic in reading — the largest share in the assessment’s history. The [National Assessment Governing Board’s analysis](https://www.nagb.gov/powered-by-naep/the-2024-nations-report-card/10-takeaways-from-2024-naep-results.html) noted that what gains existed in fourth-grade math among Black students were concentrated at the top of the distribution, while lower-performing students remained flat. Translation: the children of Black families with the most resources are inching forward. The children of Black families with the fewest resources are not moving at all. This is the central educational fact of contemporary Black America, and it is occurring under municipal and state administrations that Black voters have supported, in many cases overwhelmingly, for generations.',
        'Safety follows the same pattern. KFF/theGrio polling found that 77% of Black voters rated gun violence as very important, 75% rated criminal justice and policing as very important, and 75% rated housing affordability as very important. These are not abstract concerns. They are the lived texture of public space, schools, and the daily commute. They are also the policy areas where local Democratic governance has produced the most uneven results, and where Republican alternatives have offered the least credible local presence.',
        'A constituency that has voted reliably for one party for sixty years should, by any reasonable accounting, have purchased better schools and safer streets. The fact that the receipts do not show those purchases is not a refutation of Black political loyalty. It is the indictment of an arrangement in which loyalty was never tied to return.',
      ],
    },
    {
      id: 'audited-investment',
      title: 'What an Audited Investment Would Look Like',
      body: [
        'Leverage is not a feeling. It is a structure. And the structure of a high-leverage political relationship is already well understood, because it is the structure that other organized constituencies — labor unions, evangelical Christians, agricultural interests, technology firms — use as a matter of routine.',
        'It begins with a written agenda. Not a wish list, not a manifesto. A short document of ten to twenty demands, each tied to a measurable target: a percentage reduction in shootings over two years; a percentage increase in third-grade reading proficiency; a procurement floor for Black-owned businesses; an absenteeism reduction in named school districts; a clearance-rate target for assault investigations. Candidates seeking endorsement sign onto it before primaries, not after.',
        'It continues with public scorecards. Annual, by office, with names attached. A mayor is graded on public safety and city services. A prosecutor is graded on case clearance and use-of-force review. A school board member is graded on literacy, attendance, and teacher retention. The scorecards live on the websites of Black civic institutions, churches, and PACs, and they are referenced in voter guides handed out in October.',
        'It enforces consequences. A grade of D earns a primary challenge or a withheld endorsement. A grade of F earns active opposition. A grade of A earns enthusiastic support, including financial. The novelty of the proposal is not that it exists — every effective constituency operates this way — but that it would represent a structural departure from a politics in which Black voters are asked, every two years, to choose between a Democratic candidate whose record is rarely audited and a Republican candidate who has not shown up.',
        'The point is not to leave the Democratic Party. The point is to make leaving credible enough that staying produces results.',
      ],
    },
    {
      id: 'counterargument',
      title: 'The Counterargument Worth Taking Seriously',
      body: [
        'The strongest objection to this argument is that Black distrust of the Republican Party is not a defect of Black political culture but a rational reading of Republican political culture. The Southern Strategy was not imagined. Voter ID laws, redistricting fights, rhetoric on policing and immigration, and the absence of sustained local Republican presence in Black neighborhoods are not paranoid inventions. A bloc that has watched one party court its enemies and the other take its support for granted has no obviously better option, and the leverage strategy outlined above presumes a competitive alternative that, at present, does not reliably exist.',
        'This is true. It is also why the work is worth doing. A bloc that cannot be lost is a bloc that need not be heard. The path to being heard does not require defection. It requires the credible willingness to defect — in specific races, in specific cycles, for specific reasons — and the institutional infrastructure to make that willingness visible. The Black church already knows how to organize. The Divine Nine already know how to mobilize. HBCUs already know how to develop talent. The missing layer is the accountability architecture: the scorecards, the dashboards, the conditional endorsements, the annual hearings. Those are not exotic instruments. They are the basic tools that every organized political constituency in America already uses.',
      ],
    },
    {
      id: 'the-audit',
      title: 'The Audit',
      body: [
        'Sixty years is long enough to ask what the investment has bought.',
        'It has bought representation, and representation matters. It has bought judicial appointments, civil-rights enforcement, voting-rights litigation, and a permanent Black presence in the highest offices of American government. These are real returns. They should be counted.',
        'But they should also be measured against what they have not bought: literacy, numeracy, safety, ownership, and the kind of generational compounding that turns political power into community power. A constituency that has delivered the most consistent loyalty in modern American politics deserves an arrangement in which loyalty produces measurable improvement in the places where its members live. It does not have one. It has not had one for a long time.',
        'The question is not whether Black voters should leave the Democratic Party. The question is whether Black political institutions are willing to organize themselves around accountability rather than affinity, around outcomes rather than identity, around the slow construction of leverage rather than the cyclical performance of loyalty.',
        'That work would be unglamorous. It would generate internal disagreement and external accusations. It would force confrontations with politicians who are accustomed to being honored rather than evaluated. It would require treating votes as capital and turnout as labor — and demanding, as any capital deployment demands, a return.',
        'It would also be the first audit in sixty years. And on the present evidence, the books are overdue.',
      ],
    },
  ] satisfies EssaySection[],
}

// Sections that appear in the ToC (titled sections only)
export const tocSections = essay.sections.filter((s) => s.title != null) as (EssaySection & { title: string })[]

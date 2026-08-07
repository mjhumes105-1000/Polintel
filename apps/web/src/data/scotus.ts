// Supreme Court of the United States — current composition.
// Verified August 2026: all nine seats filled; no changes since Ketanji Brown
// Jackson took her seat on June 30, 2022 (no 2025–26 retirements or deaths).
// Source: Supreme Court of the United States (supremecourt.gov/about/members).

export interface Justice {
  name: string
  role: 'Chief Justice' | 'Associate Justice'
  /** President who appointed the justice. */
  appointedBy: string
  /** Party of the appointing president — used only as neutral appointment context. */
  appointedByParty: 'R' | 'D'
  /** Calendar year the justice took the seat. */
  tookSeat: number
  /** Most notable role held immediately before joining the Court. */
  priorRole: string
  /** 1 = Chief Justice, then associates by seniority (date commissioned). */
  seniority: number
  photoUrl?: string
}

// Ordered by seniority: Chief Justice first, then associate justices by the date
// they took their seats — the Court's own order of precedence.
export const supremeCourt: Justice[] = [
  {
    name: 'John G. Roberts Jr.',
    role: 'Chief Justice',
    appointedBy: 'George W. Bush',
    appointedByParty: 'R',
    tookSeat: 2005,
    priorRole: 'Judge, U.S. Court of Appeals, D.C. Circuit',
    seniority: 1,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Official_roberts_CJ.jpg/330px-Official_roberts_CJ.jpg',
  },
  {
    name: 'Clarence Thomas',
    role: 'Associate Justice',
    appointedBy: 'George H. W. Bush',
    appointedByParty: 'R',
    tookSeat: 1991,
    priorRole: 'Judge, U.S. Court of Appeals, D.C. Circuit',
    seniority: 2,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Clarence_Thomas_official_SCOTUS_portrait_%283x4_cropped%29.jpg/330px-Clarence_Thomas_official_SCOTUS_portrait_%283x4_cropped%29.jpg',
  },
  {
    name: 'Samuel A. Alito Jr.',
    role: 'Associate Justice',
    appointedBy: 'George W. Bush',
    appointedByParty: 'R',
    tookSeat: 2006,
    priorRole: 'Judge, U.S. Court of Appeals, 3rd Circuit',
    seniority: 3,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Samuel_Alito_official_photo.jpg/330px-Samuel_Alito_official_photo.jpg',
  },
  {
    name: 'Sonia Sotomayor',
    role: 'Associate Justice',
    appointedBy: 'Barack Obama',
    appointedByParty: 'D',
    tookSeat: 2009,
    priorRole: 'Judge, U.S. Court of Appeals, 2nd Circuit',
    seniority: 4,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sonia_Sotomayor_in_SCOTUS_robe.jpg/330px-Sonia_Sotomayor_in_SCOTUS_robe.jpg',
  },
  {
    name: 'Elena Kagan',
    role: 'Associate Justice',
    appointedBy: 'Barack Obama',
    appointedByParty: 'D',
    tookSeat: 2010,
    priorRole: 'U.S. Solicitor General',
    seniority: 5,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg/330px-Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg',
  },
  {
    name: 'Neil M. Gorsuch',
    role: 'Associate Justice',
    appointedBy: 'Donald Trump',
    appointedByParty: 'R',
    tookSeat: 2017,
    priorRole: 'Judge, U.S. Court of Appeals, 10th Circuit',
    seniority: 6,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Associate_Justice_Neil_Gorsuch_Official_Portrait.jpg/330px-Associate_Justice_Neil_Gorsuch_Official_Portrait.jpg',
  },
  {
    name: 'Brett M. Kavanaugh',
    role: 'Associate Justice',
    appointedBy: 'Donald Trump',
    appointedByParty: 'R',
    tookSeat: 2018,
    priorRole: 'Judge, U.S. Court of Appeals, D.C. Circuit',
    seniority: 7,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Associate_Justice_Brett_Kavanaugh_Official_Portrait_%28full_length%29.jpg/330px-Associate_Justice_Brett_Kavanaugh_Official_Portrait_%28full_length%29.jpg',
  },
  {
    name: 'Amy Coney Barrett',
    role: 'Associate Justice',
    appointedBy: 'Donald Trump',
    appointedByParty: 'R',
    tookSeat: 2020,
    priorRole: 'Judge, U.S. Court of Appeals, 7th Circuit',
    seniority: 8,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Official_Amy_Barrett_photo.jpg/330px-Official_Amy_Barrett_photo.jpg',
  },
  {
    name: 'Ketanji Brown Jackson',
    role: 'Associate Justice',
    appointedBy: 'Joe Biden',
    appointedByParty: 'D',
    tookSeat: 2022,
    priorRole: 'Judge, U.S. Court of Appeals, D.C. Circuit',
    seniority: 9,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ketanji_Brown_Jackson_official_SCOTUS_portrait.jpg/330px-Ketanji_Brown_Jackson_official_SCOTUS_portrait.jpg',
  },
]

/** Count of justices appointed by presidents of each party — neutral tally. */
export const courtComposition = {
  republicanAppointed: supremeCourt.filter(j => j.appointedByParty === 'R').length,
  democratAppointed: supremeCourt.filter(j => j.appointedByParty === 'D').length,
}

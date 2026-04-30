export interface CongressLeader {
  name: string
  title: string
  shortTitle: string
  chamber: 'house' | 'senate'
  party: 'Republican' | 'Democrat' | 'Independent'
  state: string
  photoUrl: string
  profileSlug?: string
  url: string
}

export const HOUSE_LEADERS: CongressLeader[] = [
  {
    name: 'Mike Johnson',
    title: 'Speaker of the House',
    shortTitle: 'Speaker',
    chamber: 'house',
    party: 'Republican',
    state: 'Louisiana',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Speaker_Mike_Johnson_Official_Portrait_%28cropped%29%28b%29.jpg/330px-Speaker_Mike_Johnson_Official_Portrait_%28cropped%29%28b%29.jpg',
    profileSlug: 'mike-johnson',
    url: 'https://mikejohnson.house.gov',
  },
  {
    name: 'Steve Scalise',
    title: 'House Majority Leader',
    shortTitle: 'Majority Leader',
    chamber: 'house',
    party: 'Republican',
    state: 'Louisiana',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Steve_Scalise_116th_Congress_official_photo.jpg/330px-Steve_Scalise_116th_Congress_official_photo.jpg',
    profileSlug: 'steve-scalise',
    url: 'https://scalise.house.gov',
  },
  {
    name: 'Tom Emmer',
    title: 'House Majority Whip',
    shortTitle: 'Majority Whip',
    chamber: 'house',
    party: 'Republican',
    state: 'Minnesota',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tom_Emmer_Congressional_Photo_2.jpg/330px-Tom_Emmer_Congressional_Photo_2.jpg',
    profileSlug: 'tom-emmer',
    url: 'https://emmer.house.gov',
  },
  {
    name: 'Hakeem Jeffries',
    title: 'House Minority Leader',
    shortTitle: 'Minority Leader',
    chamber: 'house',
    party: 'Democrat',
    state: 'New York',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rep-Hakeem-Jeffries-Official-Portrait_%28cropped%29.jpg/330px-Rep-Hakeem-Jeffries-Official-Portrait_%28cropped%29.jpg',
    profileSlug: 'hakeem-jeffries',
    url: 'https://jeffries.house.gov',
  },
  {
    name: 'Katherine Clark',
    title: 'House Minority Whip',
    shortTitle: 'Minority Whip',
    chamber: 'house',
    party: 'Democrat',
    state: 'Massachusetts',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Katherine_Clark%2C_official_portrait%2C_118th_Congress_cropped%29.jpg/330px-Katherine_Clark%2C_official_portrait%2C_118th_Congress_cropped%29.jpg',
    profileSlug: 'katherine-clark',
    url: 'https://katherineclark.house.gov',
  },
]

export const SENATE_LEADERS: CongressLeader[] = [
  {
    name: 'John Thune',
    title: 'Senate Majority Leader',
    shortTitle: 'Majority Leader',
    chamber: 'senate',
    party: 'Republican',
    state: 'South Dakota',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/John_Thune_117th_Congress_portrait.jpg/330px-John_Thune_117th_Congress_portrait.jpg',
    profileSlug: 'john-thune',
    url: 'https://www.thune.senate.gov',
  },
  {
    name: 'John Barrasso',
    title: 'Senate Majority Whip',
    shortTitle: 'Majority Whip',
    chamber: 'senate',
    party: 'Republican',
    state: 'Wyoming',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/John_Barrasso_official_portrait_112th_Congress.jpg/330px-John_Barrasso_official_portrait_112th_Congress.jpg',
    profileSlug: 'john-barrasso',
    url: 'https://www.barrasso.senate.gov',
  },
  {
    name: 'Chuck Schumer',
    title: 'Senate Minority Leader',
    shortTitle: 'Minority Leader',
    chamber: 'senate',
    party: 'Democrat',
    state: 'New York',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chuck_Schumer_official_photo.jpg/330px-Chuck_Schumer_official_photo.jpg',
    profileSlug: 'chuck-schumer',
    url: 'https://www.schumer.senate.gov',
  },
  {
    name: 'Dick Durbin',
    title: 'Senate Minority Whip',
    shortTitle: 'Minority Whip',
    chamber: 'senate',
    party: 'Democrat',
    state: 'Illinois',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dick_Durbin_117th_Congress_portrait_%281%29_%28crop%29.jpeg/330px-Dick_Durbin_117th_Congress_portrait_%281%29_%28crop%29.jpeg',
    profileSlug: 'dick-durbin',
    url: 'https://www.durbin.senate.gov',
  },
]

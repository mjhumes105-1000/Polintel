export interface NewsItem {
  title: string
  url: string
  source: string
  date: string
  summary?: string
}

const REVALIDATE = 3600 // 1h

interface GovTrackStatement {
  title: string
  url: string
  created: string
  person: { name: string }
  body_html_truncated?: string
}

export async function fetchNewsItems(
  govtrackId: number | null,
  politicianName: string,
): Promise<NewsItem[]> {
  const items: NewsItem[] = []

  // 1. GovTrack press releases / statements
  if (govtrackId) {
    try {
      const url = `https://www.govtrack.us/api/v2/statement?person=${govtrackId}&limit=5&order_by=-created`
      const res = await fetch(url, { next: { revalidate: REVALIDATE } })
      if (res.ok) {
        const data: { objects: GovTrackStatement[] } = await res.json()
        for (const s of data.objects) {
          items.push({
            title: s.title,
            url: s.url,
            source: 'GovTrack — Official Statements',
            date: s.created.slice(0, 10),
            summary: s.body_html_truncated?.replace(/<[^>]+>/g, '').slice(0, 160),
          })
        }
      }
    } catch {
      // fail silently
    }
  }

  // 2. Link out to Google News search (no API key needed — just a search URL)
  // We return these as "news links" so users can explore further
  items.push({
    title: `Search Google News for "${politicianName}"`,
    url: `https://news.google.com/search?q=${encodeURIComponent(politicianName)}&hl=en-US&gl=US`,
    source: 'Google News',
    date: new Date().toISOString().slice(0, 10),
    summary: `View the latest news coverage for ${politicianName} from major outlets.`,
  })

  return items
}

// Abstract search provider — swap in Perplexity/Sonar, Tavily, Exa, or SerpAPI without changing call sites.

export interface SearchResult {
  title: string
  url: string
  snippet: string
  publisher?: string
  publishedAt?: string
}

export interface SearchOptions {
  maxResults?: number
  domain?: string
  dateRange?: { from?: string; to?: string }
}

export interface SearchProvider {
  readonly name: string
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>
}

class NoOpSearchProvider implements SearchProvider {
  readonly name = 'noop'
  async search(): Promise<SearchResult[]> {
    return []
  }
}

export const defaultSearchProvider: SearchProvider = new NoOpSearchProvider()

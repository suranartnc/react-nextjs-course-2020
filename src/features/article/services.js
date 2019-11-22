import * as API from './repository'

export function getArticles({ keyword, start = 0, limit = 5 } = {}) {
  return API.getArticles({ keyword, start, limit })
}

// Add more services here...

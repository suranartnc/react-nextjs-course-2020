import { fetchAPI } from '@lib/api'

export function getSearchResults(q, { limit, offset, token } = {}) {
  return fetchAPI({
    path: '/search',
    params: {
      type: 'album,playlist',
      q,
      limit,
      offset,
    },
    token,
  })
}

import { fetchAPI } from '@lib/api'

export function getSearchResults(q, { token }) {
  return fetchAPI({
    path: '/search',
    params: {
      type: 'album,playlist',
      q,
    },
    token,
  })
}

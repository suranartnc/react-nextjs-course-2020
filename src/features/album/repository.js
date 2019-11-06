import { fetchAPI } from '@lib/api'

export function getNewReleases({ token }) {
  return fetchAPI({
    path: '/browse/new-releases/',
    token,
  })
}

import { fetchAPI } from '@lib/api'

export function getNewReleases({ token, limit = 18 } = {}) {
  return fetchAPI({
    path: '/browse/new-releases/',
    token,
    params: {
      limit,
    },
  })
}

export function getAlbumById(id, { token }) {
  return fetchAPI({
    path: `/albums/${id}`,
    token,
  })
}

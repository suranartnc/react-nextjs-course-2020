import * as API from './repository'

export function getNewReleases({ token, limit }) {
  return API.getNewReleases({ token, limit })
}

export function getAlbumById(id, { token }) {
  return API.getAlbumById(id, { token })
}

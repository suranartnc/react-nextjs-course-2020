import * as API from './repository'

export function getNewReleases({ token }) {
  return API.getNewReleases({ token })
}

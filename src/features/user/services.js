import * as API from './repository'

export function getCurrentUserProfile({ token }) {
  return API.getCurrentUserProfile({ token })
}

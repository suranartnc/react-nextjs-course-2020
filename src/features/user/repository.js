import { fetchAPI } from '@lib/api'

export function getCurrentUserProfile({ token } = {}) {
  return fetchAPI({
    path: '/me',
    token,
  })
}

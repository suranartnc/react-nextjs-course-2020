import * as API from './repository'

import { debouncePromise } from '@lib/api'

export function getSearchResults(q, { token }) {
  const promise = API.getSearchResults(q, { token }).then(prepareData)

  return debouncePromise(promise, 500)
}

function prepareData(data) {
  return data.playlists
}

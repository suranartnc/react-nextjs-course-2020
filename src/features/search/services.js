import * as API from './repository'

import { debouncePromise } from '@lib/api'

export function getSearchResults(q, options) {
  const promise = API.getSearchResults(q, options)

  return debouncePromise(promise, 500)
}

import debounce from 'awesome-debounce-promise'
import * as API from './repository'

const getDebouncedSearchResults = debounce(API.getSearchResults, 500)

export function getSearchResults(q, options) {
  return getDebouncedSearchResults(q, options)
}

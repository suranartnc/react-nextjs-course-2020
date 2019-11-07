import * as API from './repository'

export function getSearchResults(q, { token }) {
  return API.getSearchResults(q, { token }).then(prepareData)
}

function prepareData(data) {
  return data.playlists
}

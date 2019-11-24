import * as API from './repository'

export function getPlaylistById(id, { token }) {
  return API.getPlaylistById(id, { token })
}

export function getMyPlaylist({ token }) {
  return API.getMyPlaylist({ token })
}

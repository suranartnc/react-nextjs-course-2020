import { fetchAPI } from '@lib/api'

export function getPlaylistById(id, { token }) {
  return fetchAPI({
    path: `/playlists/${id}`,
    token,
  })
}

export function getMyPlaylist({ token }) {
  return fetchAPI({
    path: `/me/playlists`,
    token,
  })
}

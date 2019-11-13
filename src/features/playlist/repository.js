import { fetchAPI } from '@lib/api'

export function getPlaylists({ token }) {
  return fetchAPI({
    path: `/browse/featured-playlists/?country=TH&timestamp=${new Date()
      .toISOString()
      .slice(0, -5)}`,
    token,
  })
}

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

import * as API from './repository'

export function getPlaylists({ token }) {
  return API.getPlaylists({ token })
}

export function getPlaylistById(id, { token }) {
  return API.getPlaylistById(id, { token }).then(prepareData)
}

export function getMyPlaylist({ token }) {
  return API.getMyPlaylist({ token })
}

function prepareData({ owner, images, name, tracks }) {
  console.log('tracks', tracks)
  return {
    title: name,
    subTitle: owner.display_name,
    bottomLine: `${tracks.total} Tracks`,
    image: images[0].url,
    tracks: tracks.items
      .map(item => item.track)
      .map(
        ({
          name,
          album,
          artists,
          preview_url: previewUrl,
          duration_ms: durationMs,
        }) => ({
          name,
          artist: artists[0].name,
          album: album.name,
          image: album.images[0].url,
          previewUrl,
          durationMs,
        }),
      ),
  }
}

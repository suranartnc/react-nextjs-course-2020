import * as API from './repository'

export function getNewReleases({ token }) {
  return API.getNewReleases({ token })
}

export function getAlbumById(id, { token }) {
  return API.getAlbumById(id, { token }).then(prepareData)
}

function prepareData({
  artists,
  images,
  name,
  total_tracks: totalTracks,
  tracks,
  release_date: releaseDate,
}) {
  return {
    title: name,
    subTitle: artists[0].name,
    bottomLine: `${releaseDate.split('-')[0]} • ${totalTracks} Tracks`,
    image: images[0].url,
    tracks: tracks.items.map(
      ({ name: trackName, artists, duration_ms: durationMs }) => ({
        name: trackName,
        artist: artists[0].name,
        album: name,
        durationMs,
      }),
    ),
  }
}

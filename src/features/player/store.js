import { observable, action } from 'mobx'

function convertSecondsToMinutes(totalSeconds) {
  totalSeconds = Math.round(totalSeconds)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const addLeadingZero = number => `${number <= 9 ? '0' : ''}${number}`

  return `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`
}

export default class PlayerStore {
  @observable
  nowPlaying = {
    playing: false,
    url: '',
    title: '',
    subTitle: '',
    image: '',
  }

  @observable
  progress = {
    timeElapsed: '',
    duration: '',
    progress: 0.0,
  }

  @observable
  queue = {
    tracks: [],
  }

  @action
  play(track) {
    const { previewUrl, name, artist, image } = track

    this.nowPlaying.playing = true

    this.nowPlaying.url = previewUrl
    this.nowPlaying.title = name
    this.nowPlaying.subTitle = artist
    this.nowPlaying.image = image

    this.replaceQueueWithTracks([track])
  }

  @action
  resume() {
    this.nowPlaying.playing = true
  }

  @action
  pause() {
    this.nowPlaying.playing = false
  }

  @action
  seek(progress) {
    this.progress.progress = progress
  }

  @action
  setProgress({ playedSeconds, played, loadedSeconds }) {
    this.progress.timeElapsed = convertSecondsToMinutes(playedSeconds)
    this.progress.duration = convertSecondsToMinutes(loadedSeconds)
    this.progress.progress = played
  }

  @action
  addTrackToQueue(track) {
    this.queue.queue.push(track)
  }

  @action
  replaceQueueWithTracks(tracks) {
    this.queue.tracks = tracks
  }
}

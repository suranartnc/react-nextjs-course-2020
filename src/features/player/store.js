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

  @observable.struct
  queue = {
    tracks: [],
    currentIndex: 0,
  }

  @observable
  options = {
    repeat: true,
    shuffle: false,
  }

  @action
  play(track) {
    const { previewUrl, name, artist, image } = track

    this.nowPlaying.playing = true

    this.nowPlaying.url = previewUrl
    this.nowPlaying.title = name
    this.nowPlaying.subTitle = artist
    this.nowPlaying.image = image

    this.replaceQueueWithTrack(track)
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
    this.queue.tracks.push(track)
  }

  @action
  replaceQueueWithTrack(track) {
    const isTrackInQueue = this.queue.tracks.find(
      trackInQueue => trackInQueue.name === track.name,
    )

    if (!isTrackInQueue) {
      this.queue.tracks = [track]
    }
  }

  @action
  playNextTrackInQueue() {
    const isDone = this.queue.tracks.length === this.queue.currentIndex + 1

    if (!isDone) {
      this.queue.currentIndex++
    } else if (this.options.repeat === true) {
      this.queue.currentIndex = 0
    }

    const nextTrack = this.queue.tracks[this.queue.currentIndex]
    this.play(nextTrack)
  }

  @action
  playPreviousTrackInQueue() {
    const hasPrevious = this.queue.currentIndex > 0

    if (hasPrevious) {
      this.queue.currentIndex--
    } else if (this.options.repeat === true) {
      this.queue.currentIndex = this.queue.tracks.length - 1
    }

    const previousTrack = this.queue.tracks[this.queue.currentIndex]
    this.play(previousTrack)
  }
}

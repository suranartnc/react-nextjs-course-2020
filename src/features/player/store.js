import { observable, action } from 'mobx'
import { shuffle } from 'lodash'

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
    shuffledIndexes: null,
  }

  @observable
  options = {
    repeat: false,
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
    this.queue.playedTracks = [0]
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
    const trackFoundInQueue = this.queue.tracks.findIndex(
      trackInQueue => trackInQueue.name === track.name,
    )

    if (trackFoundInQueue === -1) {
      this.queue.tracks = [track]
      this.queue.currentIndex = 0
    } else {
      this.queue.currentIndex = trackFoundInQueue
    }
  }

  getNextShuffleIndex() {
    const foundIndex = this.queue.shuffledIndexes.findIndex(
      index => index === this.queue.currentIndex,
    )

    const isLastTrack = this.queue.tracks.length === foundIndex + 1

    if (!isLastTrack) {
      return this.queue.shuffledIndexes[foundIndex + 1]
    }

    if (this.options.repeat === true) {
      return this.queue.shuffledIndexes[0]
    }

    return this.queue.shuffledIndexes[foundIndex]
  }

  getNextIndex() {
    const isLastTrack = this.queue.tracks.length === this.queue.currentIndex + 1

    if (!isLastTrack) {
      return this.queue.currentIndex + 1
    }

    if (this.options.repeat === true) {
      return 0
    }

    return this.queue.currentIndex
  }

  @action
  playNextTrackInQueue() {
    if (this.queue.shuffledIndexes !== null) {
      this.queue.currentIndex = this.getNextShuffleIndex()
    } else {
      this.queue.currentIndex = this.getNextIndex()
    }

    const nextTrack = this.queue.tracks[this.queue.currentIndex]
    this.play(nextTrack)
  }

  getPreviousShuffleIndex() {
    const foundIndex = this.queue.shuffledIndexes.findIndex(
      index => index === this.queue.currentIndex,
    )

    const isFirstTrack = foundIndex === 0

    if (!isFirstTrack) {
      return this.queue.shuffledIndexes[foundIndex - 1]
    }

    if (this.options.repeat === true) {
      return this.queue.shuffledIndexes[this.queue.tracks.length - 1]
    }

    return this.queue.shuffledIndexes[foundIndex]
  }

  getPreviousIndex() {
    const isFirstTrack = this.queue.currentIndex === 0

    if (!isFirstTrack) {
      return this.queue.currentIndex - 1
    }

    if (this.options.repeat === true) {
      return this.queue.tracks.length - 1
    }

    return this.queue.currentIndex
  }

  @action
  playPreviousTrackInQueue() {
    if (this.queue.shuffledIndexes !== null) {
      this.queue.currentIndex = this.getPreviousShuffleIndex()
    } else {
      this.queue.currentIndex = this.getPreviousIndex()
    }

    const previousTrack = this.queue.tracks[this.queue.currentIndex]
    this.play(previousTrack)
  }

  @action
  toggleRepeat() {
    this.options.repeat = !this.options.repeat
  }

  @action
  toggleShuffle() {
    const nextValue = !this.options.shuffle

    if (nextValue === true) {
      const indexes = [...Array(this.queue.tracks.length).keys()]
      const rawShuffledIndexes = shuffle(indexes)
      const shuffledIndexes = [
        this.queue.currentIndex,
        ...rawShuffledIndexes.filter(
          index => index !== this.queue.currentIndex,
        ),
      ]
      this.queue.shuffledIndexes = shuffledIndexes
      console.log('shuffledIndexes', shuffledIndexes)
    } else {
      this.queue.shuffledIndexes = null
    }

    this.options.shuffle = nextValue
  }
}

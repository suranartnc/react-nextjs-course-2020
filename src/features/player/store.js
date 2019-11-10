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
    progress: 0.0,
    duration: '',
  }

  @action
  setNowPlaying({ url, title, subTitle, image }) {
    this.nowPlaying.playing = true
    this.nowPlaying.url = url
    this.nowPlaying.title = title
    this.nowPlaying.subTitle = subTitle
    this.nowPlaying.image = image
  }

  @action
  play() {
    this.nowPlaying.playing = true
  }

  @action
  pause() {
    this.nowPlaying.playing = false
  }

  @action
  setProgress({ playedSeconds, played, loadedSeconds }) {
    this.progress.timeElapsed = convertSecondsToMinutes(playedSeconds)
    this.progress.duration = convertSecondsToMinutes(loadedSeconds)
    this.progress.progress = played
  }
}

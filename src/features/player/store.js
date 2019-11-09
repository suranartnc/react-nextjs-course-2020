import { observable, action, computed } from 'mobx'

export default class PlayerStore {
  @observable
  nowPlaying = {
    url:
      'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
    title: 'ไกลแค่ไหนคือใกล้',
    subTitle: 'Getsunova',
    image: 'https://i.scdn.co/image/f17a44967fc4a5d505a0151add0824bfd0f5ad47',
  }

  @action
  setNowPlaying(data) {
    this.nowPlaying = data
  }
}

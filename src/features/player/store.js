import { observable, action } from 'mobx'

export default class PlayerStore {
  @observable
  nowPlaying = {
    url: '',
    title: '',
    subTitle: '',
    image: '',
  }

  @action
  setNowPlaying({ url, title, subTitle, image }) {
    this.nowPlaying.url = url
    this.nowPlaying.title = title
    this.nowPlaying.subTitle = subTitle
    this.nowPlaying.image = image
  }
}

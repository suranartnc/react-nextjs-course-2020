import { configure } from 'mobx'

import UIStore from '@features/_ui/store'
import ErrorStore from '@features/_error/store'
import PlayerStore from '@features/player/store'
import UserStore from '@features/user/store'

configure({ enforceActions: 'observed' })

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
    this.errorStore = new ErrorStore(this)

    this.playerStore = new PlayerStore(this)
    this.userStore = new UserStore(this)
  }
}

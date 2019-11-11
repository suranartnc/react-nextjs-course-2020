import { observable, action, runInAction } from 'mobx'
import * as UserService from '@features/user/services'

export default class PlayerStore {
  @observable
  profile = null

  @action
  fetchCurrentUserProfile({ token }) {
    UserService.getCurrentUserProfile({ token }).then(data => {
      runInAction(() => {
        this.profile = data
      })
    })
  }
}

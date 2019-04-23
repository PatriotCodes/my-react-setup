import { observable, action } from 'mobx'
import { authApi } from '../api'
import commonStore from './common.store';

class AuthStore {
  @observable inProgress = false

  @observable values = {
    username: '',
    email: '',
    password: ''
  }

  @action setUsername(username) {
    this.values.username = username
  }

  @action setEmail(email) {
    this.values.email = email
  }

  @action setPassword(password) {
    this.values.password = password
  }

  @action reset() {
    this.values.username = ''
    this.values.email = ''
    this.values.password = ''
  }

  @action login() {
    this.inProgress = true
    return authApi.login(this.values.email, this.values.password)
      .then(({ user, token }) => commonStore.setToken(token))
      .catch(action((err) => { throw err }))
      .finally(action(() => { this.inProgress = false }))
  }
}

export default new AuthStore()

export default {
  storeAccessToken (token) {
    localStorage.setItem('access_token', token)
  },
  getStoredAcessToken () {
    return localStorage.getItem('access_token')
  },
  storeUserInfo (user) {
    localStorage.setItem('user', JSON.stringify(user))
  },
  getStoredUserInfo () {
    try {
      const json = localStorage.getItem('user')
      return json ? JSON.parse(json) : null
    } catch (error) {
      return null
    }
  },
  loggedIn () {
    return Boolean(this.getStoredAcessToken() && this.getStoredUserInfo())
  }
}

import utils from '@/utils/auth'
import api from '@/api/auth'

export const register = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    api.register(user)
      .then(response => {
        commit('registered', response.data)
        utils.storeAccessToken(response.data.access_token)
        utils.storeUserInfo(response.data.user)
        resolve()
      }, error => {
        reject(error)
      })
  })
}

export default {
  register
}

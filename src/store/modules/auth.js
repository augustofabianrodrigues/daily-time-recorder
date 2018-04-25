import axios from 'axios'
import { auth } from '../../utils'

export const mutations = {
  registered (state, payload) {
    state.expiresIn = payload.expires_in
    state.token = payload.access_token
    state.user = payload.user
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    expiresIn: null,
    token: auth.getStoredAcessToken(),
    user: auth.getStoredUserInfo()
  },
  actions: {
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('/api/auth/register', user)
          .then(response => {
            commit('registered', response.data)
            auth.storeAccessToken(response.data.access_token)
            auth.storeUserInfo(response.data.user)
            resolve()
          }, error => {
            reject(error)
          })
      })
    }
  },
  mutations,
  getters: {
    isLoggedIn (state) {
      return !!state.token
    },
    headerAuthorization (state) {
      return state.token ? `Bearer ${state.token}` : ''
    }
  }
}

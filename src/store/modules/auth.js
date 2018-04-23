import axios from 'axios'
import { auth } from '../../utils'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    error: null,
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
            commit('failedToRegister', error)
            reject(error)
          })
      })
    }
  },
  mutations: {
    registered (state, payload) {
      state.error = null
      state.expiresIn = payload.expires_in
      state.token = payload.access_token
      state.user = payload.user
    },
    failedToRegister (state, payload) {
      state.error = payload.response.data
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    },
    headerAuthorization (state) {
      return state.token ? `Bearer ${state.token}` : ''
    }
  }
}

import utils from '@/utils/auth'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    expiresIn: null,
    token: utils.getStoredAcessToken(),
    user: utils.getStoredUserInfo()
  },
  actions,
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

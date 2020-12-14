import Vue from 'vue'
import Vuex from 'vuex'

import groups from './modules/groups.js'
import posts from './modules/posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sdk: {},
    loggedIn: false,
    token: '',
    userId: '',
    currentGroup: null
  },
  getters: {
    getSDK: state => state.sdk,
    getLoggedIn: state => state.loggedIn,
    getToken: state => state.token,
    getUserId: state => state.userId,
    getCurrentGroup: state => state.currentGroup
  },
  actions: {
    setSDK({ commit }, sdk) {
      commit('updateSDK', sdk)
    },
    setLoginStatus({ commit }, { loggedIn, token, userId }) {
      commit('updateLoginStatus', { loggedIn, token, userId })
    },
    setCurrentGroup({ commit }, group) {
      commit('updateCurrentGroup', group)
    }
  },
  mutations: {
    updateSDK(state, sdk) {
      state.sdk = sdk
    },
    updateLoginStatus(state, { loggedIn, token, userId }) {
      state.loggedIn = !!loggedIn
      state.token = token || ''
      state.userId = userId || ''
    },
    updateCurrentGroup(state, group) {
      state.currentGroup = group
    }
  },
  modules: {
    groups,
    posts
  }
})

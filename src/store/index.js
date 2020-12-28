import Vue from 'vue'
import Vuex from 'vuex'

import groups from './modules/groups.js'
import posts from './modules/posts.js'
import post from './modules/post.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sdk: {},
    loggedIn: false,
    token: '',
    userId: '',
    requestedGroupId: null,
    currentGroup: null
  },
  getters: {
    getSDK: state => state.sdk,
    getLoggedIn: state => state.loggedIn,
    getToken: state => state.token,
    getUserId: state => state.userId,
    getRequestedGroupId: state => state.requestedGroupId,
    getCurrentGroup: state => state.currentGroup
  },
  actions: {
    setSDK({ commit }, sdk) {
      commit('updateSDK', sdk)
    },
    login({ commit, dispatch }, { token, userId }) {
      commit('updateLoginStatus', { loggedIn: true, token, userId })
    },
    logout({ commit, dispatch }) {
      commit('updateLoginStatus', {
        loggedIn: false,
        token: '',
        userId: ''
      })
    },
    setCurrentGroup({ commit }, group) {
      commit('updateCurrentGroup', group)
    },
    setRequestedGroupId({ commit }, id) {
      commit('updateRequestedGroupId', id)
    },
    findRequestedGroupAndSetAsCurrent({ getters, commit }) {
      const id = getters.getRequestedGroupId
      if (id) {
        const group = getters.getGroups.find(g => g.id === id)
        if (group) commit('updateCurrentGroup', group)
      }
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
    updateRequestedGroupId(state, id) {
      state.requestedGroupId = id
    },
    updateCurrentGroup(state, group) {
      state.currentGroup = group
    }
  },
  modules: {
    groups,
    posts,
    post
  }
})

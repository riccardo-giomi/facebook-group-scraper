const state = {
  groups: []
}

const getters = {
  getGroups: state => state.groups
}

const actions = {
  fetchGroups({ rootState, commit }) {
    if (rootState.loggedIn) {
      const sdk = rootState.sdk
      const userId = rootState.userId
      try {
        sdk.api(`/${userId}/groups?fields=name,administrator`, function(
          response
        ) {
          const administeredGroups = response.data.filter(
            group => group.administrator === true
          )
          commit('updateGroups', administeredGroups)
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}

const mutations = {
  updateGroups(state, groups) {
    state.groups = groups
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

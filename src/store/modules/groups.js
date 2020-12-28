const state = {
  groups: []
}

const getters = {
  getGroups: state => state.groups
}

const actions = {
  fetchGroups({ commit, getters, dispatch }) {
    if (getters.getLoggedIn) {
      const sdk = getters.getSDK
      const userId = getters.getUserId
      try {
        sdk.api(`/${userId}/groups?fields=name,administrator`, function(
          response
        ) {
          const administeredGroups = response.data.filter(
            group => group.administrator === true
          )
          commit('updateGroups', administeredGroups)
          dispatch('findRequestedGroupAndSetAsCurrent')
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      commit('updateGroups', [])
      commit('updateCurrentGroup', null)
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

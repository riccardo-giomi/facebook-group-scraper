const state = {
  posts: [],
  fields: ['from', 'updated_time', 'story']
}

const getters = {
  getPosts: state => state.posts,
  getFields: state => state.fields
}

const actions = {
  fetchPosts({ rootState, commit }) {
    if (rootState.loggedIn && rootState.currentGroup) {
      const sdk = rootState.sdk
      const groupId = rootState.currentGroup.id
      try {
        sdk.api(`/${groupId}/feed?fields=from, updated_time, story`, function(
          response
        ) {
          commit('updatePosts', response.data)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  setFields({ commit }, fields) {
    commit('updateFields', fields)
  }
}

const mutations = {
  updatePosts(state, posts) {
    state.posts = posts
  },
  updateFields(state, fields) {
    state.fields = fields
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

/*  getPosts: (state, _getters, rootState) => {
    if (rootState.loggedIn) {
      const sdk = rootState.sdk
      const userId = rootState.userId

      sdk.api(`/${userId}/posts`, function(response) {
        state.posts = response.data
      })
    } else {
      return state.posts
    }
  }
*/

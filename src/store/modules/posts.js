const state = {
  posts: [],
  fields: ['from', 'updated_time', 'text']
}

const getters = {
  getPosts: state => state.posts,
  getFields: state => state.fields
}

const actions = {
  fetchPosts({ commit, getters }) {
    if (getters.getLoggedIn && getters.getCurrentGroup) {
      const sdk = getters.getSDK
      const groupId = getters.getCurrentGroup.id
      try {
        sdk.api(
          `/${groupId}/feed?fields=from,updated_time,story,message`,
          function(response) {
            commit('updatePosts', response.data)
          }
        )
      } catch (e) {
        console.log(e)
      }
    } else commit('updatePosts', [])
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

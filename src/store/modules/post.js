const state = {
  requestedPostId: null,
  post: null,
  commentFields: ['from', 'created_time', 'message']
}

const getters = {
  getRequestedPostId: state => state.requestedPostId,
  getPost: state => state.post,
  getCommentFields: state => state.commentFields
}

const actions = {
  setRequestedPostId: ({ commit }, id) => commit('updateRequestedPostId', id),
  fetchPost({ commit, getters }) {
    if (getters.getLoggedIn) {
      const sdk = getters.getSDK
      const groupId = getters.getRequestedGroupId
      const postId = getters.getRequestedPostId

      const uri = `/${groupId}_${postId}?fields=from,story,message,comments`

      try {
        sdk.api(uri, function(response) {
          if (response.comments) {
            response.comments = response.comments.data
          } else {
            response.comments = []
          }
          commit('updatePost', response)
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      commit('setPost', null)
    }
  },
  setCommentFields: ({ commit }, fields) =>
    commit('updateCommentFields', fields)
}

const mutations = {
  updateRequestedPostId: (state, id) => (state.requestedPostId = id),
  updatePost: (state, post) => (state.post = post),
  updateCommentFields: (state, fields) => (state.commentFields = fields)
}

export default {
  state,
  getters,
  actions,
  mutations
}

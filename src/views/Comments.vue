<template>
  <div>
    <Navbar>
      <FacebookLogin @user-logged-in="fetchPost" @user-logged-out="fetchPost" />
    </Navbar>
    <b-container class="d-md-flex justify-content-center">
      <ContentBody v-if="post">
        <template v-slot:lead>
          <h3>{{ post.message || post.story }}</h3>
        </template>
        <div v-if="hasComments()">
          <FilterFBCommentFields />
          <div><ExportFBCommentsToText /></div>
          <div class="mt-3"><ShowFBComments /></div>
        </div>
        <p v-if="!hasComments()">No comments found.</p>
      </ContentBody>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FacebookLogin from '@/components/FacebookLogin.vue'
import ContentBody from '@/components/ContentBody.vue'
import FilterFBCommentFields from '@/components/FilterFBCommentFields.vue'
import ExportFBCommentsToText from '@/components/ExportFBCommentsToText.vue'
import ShowFBComments from '@/components/ShowFBComments.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Comments',
  props: {
    groupId: String,
    postId: String
  },
  components: {
    Navbar,
    FacebookLogin,
    ContentBody,
    FilterFBCommentFields,
    ExportFBCommentsToText,
    ShowFBComments
  },
  computed: {
    ...mapGetters({ loggedIn: 'getLoggedIn', post: 'getPost' })
  },
  methods: {
    ...mapActions(['setRequestedGroupId', 'setRequestedPostId', 'fetchPost']),
    hasComments() {
      return this.post && this.post.comments.length > 0
    }
  },
  created() {
    this.setRequestedGroupId(this.groupId)
    this.setRequestedPostId(this.postId)
  }
}
</script>

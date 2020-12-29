<template>
  <div>
    <h4>Comments</h4>
    <b-list-group>
      <b-list-group-item v-for="comment in post.comments" :key="comment.id">
        <div v-if="fields.includes('created_time')">
          <small>{{ comment.created_time | formatDate }}</small>
        </div>
        <div v-if="fields.includes('from')">
          <small>{{ comment.from | formatAuthor}}</small>
        </div>
        <p v-if="fields.includes('message')">
          <Truncate :text="comment.message" v-if="comment.message" />
        </p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Truncate from 'vue-truncate-collapsed'
import moment from 'moment'

export default {
  name: 'ShowFBComments',
  components: {
    Truncate
  },
  computed: mapGetters({
    group: 'getCurrentGroup',
    post: 'getPost',
    fields: 'getCommentFields'
  }),
  filters: {
    formatDate: string => moment(string),
    formatAuthor: from => from ? from.name : '-PERMISSION REQUIRED-'
  }
}
</script>

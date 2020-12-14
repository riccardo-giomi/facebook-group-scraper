<template>
  <b-list-group>
    <b-list-group-item v-for="post in posts" :key="post.id">
      <p v-if="fields.includes('updated_time')">
        <small>{{ post.updated_time | formatDate }}</small>
      </p>
      <p v-if="fields.includes('from')">
        {{ post.from.name }}
      </p>
      <p v-if="fields.includes('story')">
        <Truncate :text="post.story" />
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters } from 'vuex'
import Truncate from 'vue-truncate-collapsed'
import moment from 'moment'

export default {
  name: 'ShowFBPosts',
  components: {
    Truncate
  },
  computed: mapGetters({ posts: 'getPosts', fields: 'getFields' }),
  filters: {
    formatDate: string => moment(string)
  }
}
</script>

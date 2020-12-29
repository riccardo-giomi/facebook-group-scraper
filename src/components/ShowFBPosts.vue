<template>
  <b-list-group>
    <b-list-group-item v-for="post in posts" :key="post.id">
      <b-row>
        <b-col md="9">
          <div v-if="fields.includes('updated_time')">
            <small>{{ post.updated_time | formatDate }}</small>
          </div>
          <div v-if="fields.includes('from')">
            <small>{{ post.from | formatAuthor }}</small>
          </div>
          <p v-if="fields.includes('text')">
            <Truncate :text="post.story" v-if="post.story" />
            <Truncate :text="post.message" v-if="post.message" />
          </p>
        </b-col>
        <b-col md="3" class="my-auto">
          <b-button :to="`/${post.id}`" router-link variant="primary" block
            >Comments</b-button
          >
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Truncate from 'vue-truncate-collapsed'
import moment from 'moment'

export default {
  name: 'ShowFBPosts',
  components: {
    Truncate
  },
  computed: mapGetters({
    group: 'getCurrentGroup',
    posts: 'getPosts',
    fields: 'getFields'
  }),
  methods: mapActions(['fetchPosts']),
  watch: {
    group() {
      console.log('here')
      this.fetchPosts()
    }
  },
  filters: {
    formatDate: string => moment(string),
    formatAuthor: from => from ? from.name : '-PERMISSION REQUIRED-'
  }
}
</script>

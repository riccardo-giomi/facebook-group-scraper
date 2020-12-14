<template>
  <b-button
    v-if="posts.length > 0"
    :href="postsExportLink()"
    download="Group posts.txt"
    variant="success"
    >Save results as text</b-button
  >
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ExportFBPostsToText',
  computed: mapGetters({ posts: 'getPosts', fields: 'getFields' }),
  methods: {
    postsExportLink() {
      let content = ''
      for (let post of this.posts) {
        for (let field of this.fields) {
          if (field === 'from') {
            content += post.from.name + '\n'
          } else {
            content += post[field] + '\n'
          }
        }
        content += '\n'
      }
      return 'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
    }
  }
}
</script>

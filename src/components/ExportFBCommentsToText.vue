<template>
  <b-button
    v-if="post.comments.length > 0"
    :href="commentsExportLink()"
    download="Post Comments.txt"
    variant="success"
    >Save results as text</b-button
  >
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ExportFBCommentsToText',
  computed: mapGetters({ post: 'getPost', fields: 'getCommentFields' }),
  methods: {
    commentsExportLink() {
      let content = ''
      for (let comment of this.post.comments) {
        for (let field of this.fields) {
          if (field === 'from') {
            content += comment.from.name + '\n'
          } else {
            content += comment[field] + '\n'
          }
        }
        content += '\n'
      }
      return 'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
    }
  }
}
</script>

<template>
  <ContentBody>
    <template v-slot:lead>
      <h2>Extracts post information from a facebook group</h2>

      <b-button size="sm" v-b-toggle.collapse-instructions class="m-1"
        >See instructions</b-button
      >
      <b-collapse id="collapse-instructions">
        <b-list-group>
          <b-list-group-item :variant="loggedIn ? 'success' : 'default'"
            >1. Log in with your facebook account</b-list-group-item
          >
          <b-list-group-item :variant="group ? 'success' : 'default'"
            >2. Select a facebook group (only groups where you are admin will be
            shown)</b-list-group-item
          >
          <div v-if="loggedIn && group">
            <b-list-group-item variant="info">
              You can now:<br />
              > filter what information is shown<br />
              > export the results as text
            </b-list-group-item>
          </div>
        </b-list-group>
      </b-collapse>
    </template>
    <slot></slot>
  </ContentBody>
</template>

<script>
import ContentBody from '@/components/ContentBody.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Instructions',
  components: {
    ContentBody
  },
  computed: mapGetters({ loggedIn: 'getLoggedIn', group: 'getCurrentGroup' })
}
</script>

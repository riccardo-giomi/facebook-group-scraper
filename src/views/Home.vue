<template>
  <div>
    <Navbar>
      <FacebookLogin
        @user-logged-in="fetchGroups"
        @user-logged-out="fetchGroups"
      />
    </Navbar>

    <b-container class="d-md-flex justify-content-center">
      <Instructions>
        <div class="p-3" v-if="loggedIn">
          <div><SelectFBGroup /></div>
          <div class="mt-2">
            <FilterFBPostFields />
          </div>
          <div>
            <div><ExportFBPostsToText /></div>
            <div class="mt-3"><ShowFBPosts /></div>
          </div>
        </div>
      </Instructions>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FacebookLogin from '@/components/FacebookLogin.vue'
import Instructions from '@/components/Instructions.vue'
import SelectFBGroup from '@/components/SelectFBGroup.vue'
import FilterFBPostFields from '@/components/FilterFBPostFields.vue'
import ExportFBPostsToText from '@/components/ExportFBPostsToText.vue'

import ShowFBPosts from '@/components/ShowFBPosts.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  props: {
    groupId: String
  },
  components: {
    Navbar,
    Instructions,
    FacebookLogin,
    SelectFBGroup,
    ExportFBPostsToText,
    FilterFBPostFields,
    ShowFBPosts
  },
  computed: mapGetters({
    currentGroup: 'getCurrentGroup',
    loggedIn: 'getLoggedIn',
    groups: 'getGroups'
  }),
  methods: mapActions(['setRequestedGroupId', 'fetchGroups']),
  mounted() {
    if (this.groupId) this.setRequestedGroupId(this.groupId)
  }
}
</script>

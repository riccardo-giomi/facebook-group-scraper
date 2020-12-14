<template>
  <VueSelect label="name" :options="groups" @input="groupSelected" />
</template>

<script>
import 'vue-select/dist/vue-select.css'
import VueSelect from 'vue-select'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SelectFBGroup',
  components: {
    VueSelect
  },
  computed: mapGetters({ groups: 'getGroups', group: 'getCurrentGroup' }),
  methods: {
    ...mapActions(['setCurrentGroup', 'fetchPosts']),
    groupSelected(value) {
      if (value && value.id) {
        this.setCurrentGroup(value)
      } else this.setCurrentGroup(null)
      this.fetchPosts()
    }
  }
}
</script>

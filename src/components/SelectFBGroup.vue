<template>
  <VueSelect
    label="name"
    :value="group"
    :options="groups"
    @input="groupSelected"
  />
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
    groupSelected(group) {
      if (group && group.id) {
        this.setCurrentGroup(group)
      } else this.setCurrentGroup(null)
    }
  }
}
</script>

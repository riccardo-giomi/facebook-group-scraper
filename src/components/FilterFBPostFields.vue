<template>
  <b-form-group>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
    ></b-form-checkbox-group>
  </b-form-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterFBPostsFields',
  data() {
    return {
      options: [
        { text: 'Date', value: 'updated_time' },
        { text: 'Author', value: 'from' },
        { text: 'Text', value: 'text' }
      ]
    }
  },
  computed: {
    ...mapGetters({ fields: 'getFields' }),
    selected: {
      get() {
        return this.fields
      },
      set(selected) {
        this.setFields(selected)
      }
    }
  },
  methods: mapActions(['setFields'])
}
</script>

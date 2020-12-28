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
  name: 'FilterFBCommentFields',
  data() {
    return {
      options: [
        { text: 'Date', value: 'created_time' },
        { text: 'Author', value: 'from' },
        { text: 'Text', value: 'message' }
      ]
    }
  },
  computed: {
    ...mapGetters({ fields: 'getCommentFields' }),
    selected: {
      get() {
        return this.fields
      },
      set(selected) {
        this.setCommentFields(selected)
      }
    }
  },
  methods: mapActions(['setCommentFields'])
}
</script>

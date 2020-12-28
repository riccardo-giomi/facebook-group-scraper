<template>
  <b-navbar toggleable="sm" type="light" variant="info">
    <b-navbar-brand :to="homePath">Facebook Group Scraper</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <slot></slot>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({ group: 'getRequestedGroupId' }),
    homePath() {
      let path = '/'
      if (this.group) path += String(this.group)
      return path
    }
  }
}
</script>

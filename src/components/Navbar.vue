<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand to="/">Facebook Group Scraper</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <slot></slot>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

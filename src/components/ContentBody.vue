<template>
  <b-jumbotron border-variant="dark" class="mt-5">
    <template #lead>
      <slot name="lead"></slot>
      <hr class="my-4" />
    </template>

    <slot mame="content"></slot>
  </b-jumbotron>
</template>

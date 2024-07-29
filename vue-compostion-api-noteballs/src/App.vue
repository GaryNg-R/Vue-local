

<template>

  <NavBar/>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="stats" class="button">Stats</RouterLink> -->
  <div class="container is-max-desktop px-2 py-4">  <RouterView/></div>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import NavBar from '@/components/Layout/NavBar.vue'

</script>


<style scoped>
/* @import 'bulma/css/bulma.min.css'; */
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css";
</style>

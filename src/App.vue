<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="wrapper">
    <Navbar />
  </div>
  <RouterView />
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="app--wrapper">
    <Navbar />
  </div>
  <RouterView />
</template>

<style scoped></style>

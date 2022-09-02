<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="app--wrapper">
    <header>
      <Navbar />
    </header>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
header {
  position: fixed;
  transition: 0.5s ease all;
  //width: 100%;
  color: white;
}
</style>

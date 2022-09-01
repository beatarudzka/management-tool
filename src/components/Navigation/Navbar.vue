<template>
  <nav class="navbar--wrapper">
    <router-link class="navbar--link" :to="{ name: 'home' }">
      <NavItem>
        <template #icon>
          <HomeIcon />
        </template>
        <template #heading>Home</template>
      </NavItem>
    </router-link>
    <router-link class="navbar--link" :to="{ name: 'calendar' }">
      <NavItem>
        <template #icon>
          <CalendarIcon />
        </template>
        <template #heading>Calendar</template>
      </NavItem>
    </router-link>
    <router-link class="navbar--link" :to="{ name: 'mind-map' }">
      <NavItem>
        <template #icon>
          <MindMapIcon />
        </template>
        <template #heading>Mind Map</template>
      </NavItem>
    </router-link>
  </nav>
</template>

<script lang="ts">
import NavItem from "./NavItem.vue";
import HomeIcon from "../icons/HomeIcon.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import MindMapIcon from "../icons/MindMapIcon.vue";
export default {
  name: "Navbar",
  components: { NavItem, HomeIcon, CalendarIcon, MindMapIcon },
};
</script>

<style scoped lang="scss">
.navbar {
  &--wrapper {
    height: 100vh;
    width: calc(2rem + 32px); // padding + icons
    background-color: darkmagenta;
    overflow: hidden;
    padding: 1rem;
    transition: 0.2s ease-out;
    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
}
</style>

<template>
  <nav class="navbar__wrapper">
    <div v-show="!mobile">
      <ul>
        <NavItem routePath="home" routeName="Home"><HomeIcon /></NavItem>
        <NavItem routePath="calendar" routeName="Calendar"
          ><CalendarIcon
        /></NavItem>
        <NavItem routePath="mind-map" routeName="Mind Map"
          ><MindMapIcon
        /></NavItem>
      </ul>
    </div>
    <div
      class="navbar__mobile--icon"
      v-show="mobile"
      @click="toggleMobileView"
      :class="{ 'icon-active': mobileNav }"
    >
      <NavbarMobileIcon />
    </div>
    <transition>
      <div v-show="mobileNav" class="navbar__dropdown--nav">
        <ul class="mt-4">
          <NavItem routePath="home" routeName="Home"><HomeIcon /></NavItem>
          <NavItem routePath="calendar" routeName="Calendar"
            ><CalendarIcon
          /></NavItem>
          <NavItem routePath="mind-map" routeName="Mind Map"
            ><MindMapIcon
          /></NavItem>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import NavItem from "./NavItem.vue";
import HomeIcon from "../icons/HomeIcon.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import MindMapIcon from "../icons/MindMapIcon.vue";
import NavbarMobileIcon from "../icons/NavbarMobileIcon.vue";
export default {
  name: "Navbar",
  components: {
    NavItem,
    HomeIcon,
    CalendarIcon,
    MindMapIcon,
    NavbarMobileIcon,
  },
  data() {
    return {
      scrollPosition: null,
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  &__wrapper {
    height: 100vh;
    background-color: rgb(36, 21, 73);
    padding: 1rem;
    transition: 0.5s ease all;
    @media (max-width: 768px) {
      max-width: 1140px;
    }
  }
  .icon-active {
    transform: rotate(180deg);
  }
}
</style>

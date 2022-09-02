<template>
  <nav class="navbar--wrapper">
    <div v-show="!mobile">
      <ul v-for="route in routes" :key="route.routeName">
        <NavItem :route="route" />
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
        <ul v-for="route in routes" :key="route.routeName">
          <NavItem :route="route" />
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
      routes: [
        { id: 1, routeName: "Home", routePath: "home" },
        { id: 2, routeName: "Calendar", routePath: "calendar" },
        { id: 3, routeName: "Mind Map", routePath: "mind-map" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  &--wrapper {
    height: 100vh;
    width: 90%;
    background-color: rgb(36, 21, 73);
    padding: 1rem;
    transition: 0.5s ease all;
    @media (max-width: 768px) {
      max-width: 1140px;
    }
  }
  &--link {
    transition: 0.5s ease all;
    padding-bottom: 4px;
  }
  .icon-active {
    transform: rotate(180deg);
  }
}
</style>

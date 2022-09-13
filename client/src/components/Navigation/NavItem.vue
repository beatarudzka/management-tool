<template>
  <li class="navbar__link">
    <router-link class="navbar__link--item" :to="{ name: routePath }">
      <slot></slot>
      <p class="navbar__link--name">
        {{ routeName }}
      </p></router-link
    >
  </li>
</template>

<script lang="ts">
export default {
  name: "NavItem",
  props: {
    routeName: {
      type: String,
    },
    routePath: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.navbar__link {
  width: 100%;
  &--item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  &--name {
    display: inline-block;
    width: 100%;
    margin-left: 1rem;
    font-size: 15px;
    color: white;
  }
}
</style>

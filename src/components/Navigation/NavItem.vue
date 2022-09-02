<template>
  <li>
    <router-link class="navbar--link" :to="{ name: route.routePath }">{{
      route.routeName
    }}</router-link>
  </li>
</template>

<script lang="ts">
export default {
  name: "NavItem",
  props: {
    route: {
      type: Object,
    },
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
  color: white;
  font-weight: 500;
  list-style: none;
  text-decoration: none;
  margin-right: 10px;
}
h3 {
  color: white;
  font-size: 13px;
}
.item {
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
}
</style>

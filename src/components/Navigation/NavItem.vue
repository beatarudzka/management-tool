<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
i {
  color: white;
}
h3 {
  color: white;
}
.item {
  color: white;
  padding: 2rem;
  margin: auto;
  display: flex;
}
</style>

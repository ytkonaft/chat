<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>

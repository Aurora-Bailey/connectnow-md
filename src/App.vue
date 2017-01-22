<template>
  <div id="app">

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="router-nav" name="nav"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
</style>

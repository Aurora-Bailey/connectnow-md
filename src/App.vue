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
  flex: 1;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all .4s cubic-bezier(.25,.8,.25,1);

  .page {
    color: purple;
    overflow: auto;
    padding: 24px;
  }
}
@media (min-width: 1281px) {
  #app {
    padding-left: 260px;
  }
}

</style>

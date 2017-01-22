<template>
  <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue">
    <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">{{$route.name}}</h2>

    <md-button class="md-icon-button">
      <md-icon>search</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
      </md-button>
    </md-whiteframe>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top-nav {
  opacity: 1;
}
</style>

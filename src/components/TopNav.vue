<template>
  <md-whiteframe md-tag="md-toolbar" class="md-large" md-elevation="2" md-theme="light-blue">
    <div class="md-toolbar-container">
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
    </div>
    <div class="md-toolbar-container">
      <router-link tag="md-button" to="/matches">Matches</router-link>
      <router-link tag="md-button" to="/connections">Connections</router-link>
      <router-link tag="md-button" to="/groups">Groups</router-link>
      <router-link tag="md-button" to="/profile">Profile</router-link>
    </div>
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

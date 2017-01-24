<template>
  <div class="home-page-nav">
    <md-whiteframe id="home-page-toolbar" md-tag="md-toolbar" class="md-theme-white md-fixed" :class="{'md-large': $root.$data.scroll < 75}" md-elevation="2">
      <h2 class="md-title toolbar-title">Connect Now</h2>
      <span style="flex: 1"></span>
      <div>
        <router-link to="/login/signup" class="md-default" tag="md-button">Create Account</router-link>
        <router-link to="/login" class="md-default" tag="md-button">Sign In</router-link>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'home-page-nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#home-page-toolbar .toolbar-title {
  margin-left: 24px;
  font-size: 24px;
}
</style>

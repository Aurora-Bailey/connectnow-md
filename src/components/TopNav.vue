<template>
  <div class="top-nav">
    <md-whiteframe id="main-toolbar" md-tag="md-toolbar" md-elevation="2" md-theme="light-blue">
      <md-button class="md-icon-button sidebar-toggle" @click="$refs.sidenav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title toolbar-title" style="flex: 1">{{$route.name}}</h2>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-whiteframe>

    <md-sidenav id="main-sidebar" md-theme="white" class="md-left md-fixed" ref="sidenav">
      <md-toolbar class="sidebar-logo md-theme-white">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Vue">
          <!-- <span>Connect Now</span> -->
        </router-link>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidenav.close(); $router.push('/matches')" :class="{'md-accent': $route.path === '/matches'}">
          <md-icon>public</md-icon> <span>Matches</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.close(); $router.push('/connections')" :class="{'md-accent': $route.path === '/connections'}">
          <md-icon>contacts</md-icon> <span>Connections</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.close(); $router.push('/groups')" :class="{'md-accent': $route.path === '/groups'}">
          <md-icon>group</md-icon> <span>Groups</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.close(); $router.push('/profile')" :class="{'md-accent': $route.path === '/profile'}">
          <md-icon>person</md-icon> <span>Profile</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.close(); $router.push('/login')" :class="{'md-accent': $route.path === '/login'}">
          <md-icon>settings</md-icon> <span>Login</span>
        </md-list-item>

      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#main-sidebar .sidebar-logo {
  min-height: 172px;
  border-bottom:1px solid rgba(0,0,0,.12);
  font-size: 24px;
}
#main-sidebar .sidebar-logo img {
    width: 160px;
    margin-bottom: 16px;
}
#main-sidebar .sidebar-logo a {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
}
#main-sidebar .md-sidenav-content {
  width: 260px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}
@media (min-width: 1281px) {
  #main-sidebar .md-sidenav-content {
    top: 0;
    pointer-events: auto;
    transform: translateZ(0);
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  }
  #main-sidebar .md-backdrop {
    opacity: 0;
    pointer-events: none;
}
  #main-toolbar .sidebar-toggle {
    display: none;
  }
  #main-toolbar .toolbar-title {
    margin-left: 16px
  }
}
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import JsonApi from './plugins/JsonApi'
import Routes from './Routes'

// The Vue thing
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(JsonApi)

// Theme
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'deep-orange',
    background: 'white'
  },
  "default-dark": {
    primary: {
      color: 'blue',
      hue: 600
    },
    accent: 'deep-orange'
  },
  invert: {
    primary: 'deep-orange',
    accent: 'blue'
  },
  white: {
    primary: 'white',
    accent: 'deep-orange'
  }
})

// Router thing
const router = new VueRouter({
  // History mode makes links prettier, but requires dedicated hosting. (or in s3 set 404 to index.html)
  mode: 'history',
  routes: Routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data () {
    return {
      version: "0.001",
      scroll: 0
    }
  }
})

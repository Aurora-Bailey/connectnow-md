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
      version: "0.001"
    }
  }
})

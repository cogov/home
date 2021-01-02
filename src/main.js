import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import VueFriendlyIframe from 'vue-friendly-iframe'

import App from './App.vue'
import { routes } from './routes.js'
import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
    // defaultIconPack: 'fas',
    defaultContainerElement: '.page-body',
})
Vue.use(VueFriendlyIframe)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

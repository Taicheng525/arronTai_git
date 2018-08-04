import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'font-awesome-animation/dist/font-awesome-animation.min.css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'font-awesome-animation/dist/font-awesome-animation.min.css'

//setup jquery (have to use require)
const $ = require('jquery')
window.$ = $

// fontawesome setup
library.add(faCoffee, faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

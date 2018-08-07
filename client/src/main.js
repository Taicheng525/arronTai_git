import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faTwitch } from '@fortawesome/fontawesome-free-brands';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.use(VueAxios, axios)

//setup jquery (have to use require)
const $ = require('jquery')
window.$ = $

// fontawesome setup
library.add(faCoffee, faCog, faFacebook, faTwitter, faInstagram, faTwitch)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

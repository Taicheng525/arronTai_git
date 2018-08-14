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
// import VueYoutube from 'vue-youtube'
import 'vue2-dropzone/dist/vue2Dropzone.css'

// Apollo client Vue
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// Vue.use(VueYoutube)
Vue.use(VueAxios, axios)

//setup jquery (have to use require)
const $ = require('jquery')
window.$ = $

// fontawesome setup
library.add(faCoffee, faCog, faFacebook, faTwitter, faInstagram, faTwitch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Apollo client setup
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo);

Vue.config.productionTip = false

new Vue({
  router,
  provide: apolloProvider.provide(),
  store,
  render: h => h(App)
}).$mount('#app')

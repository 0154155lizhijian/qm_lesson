import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

// Vue.use(router)

// const routers = [{
//   path:'/',
//   component:Home
// }]

// const router = new VueRouter({
//   router
// });

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

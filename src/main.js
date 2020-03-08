import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import blur from '@/directives/blur'
import msToMm from '@/filters/ms-to-mm'

// inyección de plugins
Vue.use(Buefy)
Vue.use(blur) 
Vue.use(msToMm)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

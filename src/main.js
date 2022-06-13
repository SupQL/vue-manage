import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // 引入Element
import 'element-ui/lib/theme-chalk/index.css' // 引入Element
import './assets/less/index.less'
import http from 'axios'
import './api/mock'

Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.commit('addMenu', router)
  }
}).$mount('#app')

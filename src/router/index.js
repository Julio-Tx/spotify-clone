import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

// import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Home from '@/components/Home'
import App from '@/components/App'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'App',
      component: App
    }
  ]
})

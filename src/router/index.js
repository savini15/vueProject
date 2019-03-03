import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tab from '@/components/tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id/:name',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    }
  ]
})
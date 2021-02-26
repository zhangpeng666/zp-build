import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/accumulate',
      component: Layout,
      name: 'accumulate',
      children: [{
        path: '/accumulate/index',
        name: 'accumulateIndex',
        component: () => import('@/components/accumulate/'),
      }]
    }
  ]
})

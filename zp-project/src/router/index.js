import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hpmepage',
      component: homepage
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

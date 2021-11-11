import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import OverView from '../views/OverView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'OverView',
    component: OverView,
  },
  {
    path: '/scenicSpot',
    name: 'ScenicSpot',
    // component: ScenicSpot,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ScenicSpot.vue'),
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Restaurant.vue'),
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Hotel.vue'),
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Activity.vue'),
  },
  {
    path: '/quickPick',
    name: 'QuickPick',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/QuickPick.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

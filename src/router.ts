import Vue from 'vue'
import Router from 'vue-router'
import { scenicspontmoduleRouter } from './router/scenicspontmodulerouter/scenicspontmodulerouter';
import { errorRoutes } from './router/error/error';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ './views/Login.vue') },
    { path: '/home', name: 'home', children: [...scenicspontmoduleRouter, ...errorRoutes], component: () => import(/* webpackChunkName: "home" */ './views/Home.vue') },
    { path: '/', redirect: '/home' },
  ]
})


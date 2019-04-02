export
const errorRoutes = [{
  path: '/404',
  name: '页面不存在',
  component: () => import(/* webpackChunkName: "error" */ '@/views/error/Page404.vue')
}, {
  path: '*',
  redirect: '/404'
}]

import Vue from 'vue'
import VueRouter from 'vue-router'
import hooks from './hooks'
Vue.use(VueRouter)

let files = require.context('/', false, /\.router\.js$/);
let routes = [];
files.keys().forEach(key => {
  routes.push(...files(key).default);
})

// 入口文件

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook.bind(router)) // this绑定为router
})

export default router;
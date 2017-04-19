// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
// import rt from '/router';
Vue.use(VueRouter)
// 创建路由实例并配置路由映射
// // 并且配置路由规则
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: require('./views/index.vue')
    },
    {
      name: 'show',
      path: '/show',
      component: require('./views/show.vue')
    },
    {
      name: 'director',
      path: '/director/:id',
      component: require('./views/director.vue')
    },
    {
      name: 'list',
      path: '/list',
      component: require('./views/list.vue')
    }
  ]
})
// 输出router
export default router

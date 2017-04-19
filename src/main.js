
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
Vue.use(VueResource)

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app') // 这里绑定的是index.html中的id为app的div元素
router.push('/index')
export default app

# my-movie

> A Vue.js project

使用vue.js+webpack+豆瓣api写的一个[电影webapp](http://liyahui.github.io/vue-movie)，由于部分接口需要权限，豆瓣已经关闭了apikey的申请，最初计划做的一些功能没有实现

```shell
git clone https://github.com/liyahui/vue-movie.git


1、安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org
2、安装webpack   cnpm install webpack -g
3、安装vue脚手架  npm install vue-cli -g
4、创建项目  vue init webpack my-project 工程名字<工程名字不能用中文>
5、cd进入项目安装项目依赖 cnpm install
6、安装 vue 路由模块vue-router和网络请求模块vue-resource   cnpm install vue-router vue-resource --save
7、启动项目  cnpm run dev

# 开发环境(localhost:8080)
npm run dev

# 发布代码
npm run build
```
components  //组件放在这儿
App.vue  //初始化工作，以及挂载路由的router-view组件
main.js //入口程序
router.js //SPA 路由配置文件
index.vue //为路由指向页面
list.vue、show.vue //渲染后展示的组件

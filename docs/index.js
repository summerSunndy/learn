import Vue from 'vue'
import vueRouter from 'vue-router'
import index from './index.vue'
import entry from './entry'
import dialog from './dialog'

// require("../src/scss/ionic.scss")
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
// children还可配置下一级，name指定视图，components指定多个视图，default为默认；或router-view中name指定的。
// redirect重定向，路径或name或方法
const routes = {
    mode: 'abstract',  //history hash  abstract
    routes: [
        {
            path :'/docs', 
            component:  entry
        },
        {
            path :'/dialog', 
            component: dialog
        }
    ]
}
Vue.use(vueRouter)
// router 实例
var router = new vueRouter(routes);

// 创建 挂载根实例，router配置参数路由，让整个应用都有路由功能
const app = new Vue({
    router,
    ...index
}).$mount('#root')

// $route.params watch-->$route
// router.start(app,'#root')
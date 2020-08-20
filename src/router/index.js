import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({routes})

/**
 * 注册一个全局前置守卫
 * @params to: Router 即将要进入的目标路由对象
 * @params from: Router 当前导航正要离开的路由
 * @params next: Function 一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数。
 *   next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航状态就是confirmed(确认的)。
 *   next(false): 中断当前的导航。如果浏览器的URL改变了(可能是用户手动或浏览器后退按钮)，那么URL地址会重置到from路由对应的地址。
 *   next('/') 或 next({path: '/'}): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向next传递任意位置对象，且允许设置诸如replace: true, name:'home'之类的选项以及任何用在router-link的to prop或 router.push中的选项。
 *   next(error): (2.4.0+)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。
 * 注意：确保要调用next方法，否则钩子就不会被resolved。
 */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue-Admin' // 更新页面标题
    // 此处可验证登陆有效性
    next(true)
})

export default router

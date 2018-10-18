/*
 * 路由的懒加载
 * 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
 * 结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。
 * 代码的打包分离，具体解释看如下链接：
 * https://www.cnblogs.com/Man-Dream-Necessary/p/9543738.html
 */
const index = () => import(/* webpackChunkName: "index" */ '@/views/index') // index页
const homePage = () => import(/* webpackChunkName: "index" */ '@/views/homePage/homePage') // homePage页
const notFound = () => import(/* webpackChunkName: "common" */ '@/views/common/404') // 404页

/*
 * 注意：默认子路由不应该有name属性
 */
const routes = [
    {
        path: '/',
        component: index,
        children: [
            {
                path: '/',
                component: homePage,
                meta: {
                    title: 'homePage'
                }
            },
            {
                path: '/homePage',
                name: 'homePage',
                component: homePage,
                meta: {
                    title: 'homePage'
                }
            }
        ]
    },
    {
        path: '*',
        name: 'notFound',
        component: notFound,
        meta: {
            title: '404'
        }
    }
]

export default routes
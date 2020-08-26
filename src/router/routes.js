/**
 * 路由的懒加载
 * 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
 * 结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。
 * 代码的打包分离，具体解释看如下链接：
 * https://www.cnblogs.com/Man-Dream-Necessary/p/9543738.html
 * @warn 默认子路有不应有name属性
 */

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Layout/DashboardLayout'),
        redirect: '/dashboard',
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import(/* webpackChunkName: "index" */ '@/views/Dashboard')
            },
            {
                path: "user",
                name: "User Profile",
                component: () => import(/* webpackChunkName: "components" */ '@/views/UserProfile')
            },
            {
                path: "table",
                name: "Table List",
                component: () => import(/* webpackChunkName: "components" */ '@/views/TableList')
            },
            {
                path: "typography",
                name: "Typography",
                component: () => import(/* webpackChunkName: "components" */ '@/views/Typography')
            },
            {
                path: "icons",
                name: "Icons",
                component: () => import(/* webpackChunkName: "components" */ '@/views/Icons')
            },
            {
                path: "maps",
                name: "Maps",
                meta: {
                    hideFooter: true
                },
                component: () => import(/* webpackChunkName: "components" */ '@/views/Maps')
            },
            {
                path: "notifications",
                name: "Notifications",
                component: () => import(/* webpackChunkName: "components" */ '@/views/Notifications')
            },
            {
                path: "upgrade",
                name: "Upgrade to PRO",
                component: () => import(/* webpackChunkName: "components" */ '@/views/UpgradeToPRO')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "common" */ '@/views/common/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "common" */ '@/views/common/404'),
        meta: {
            title: '404'
        }
    }
]

export default routes

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/scss/index'
import './assets/styles/index'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'
import Chartist from 'chartist'

Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

Vue.prototype.$Chartist = Chartist

Vue.config.productionTip = false

new Vue({
    router,
    store,
    data: {
        Chartist: Chartist
    },
    render: h => h(App)
}).$mount('#app')

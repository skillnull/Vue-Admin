import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/scss/index'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

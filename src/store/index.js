import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: modules
})

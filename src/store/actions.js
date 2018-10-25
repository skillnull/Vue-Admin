import {getUrl} from '@/config/urlConfig'
import {getRequest, postRequest} from '@/services/request'

export default {
    async getSocketInfoFun ({commit, state}, params) { // 获取socket连接信息
        let url = getUrl('homePage', 'getSocketInfo')
        let result = await getRequest(url, params)
        return result
    },
    async getUserInfoFun ({commit, state}, params) { // 获取用户信息
        const url = getUrl('homePage', 'getUserInfo')
        let result = await getRequest(url, params)
        commit('USER_INFO', result)
        return result
    },
    sideNavFlagFun ({commit, state}, data) { // 左侧导航显隐
        commit('SIDE_NAV_FLAG', data)
    }
}

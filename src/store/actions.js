import {getUrl} from '@/config/urlConfig'
import {getRequest, postRequest} from '@/service/request'

export default {
    async getUserInfoFun ({commit, state}, params) { // 获取用户信息
        const url = getUrl('homePage', 'getUserInfo')
        let result = await getRequest(url, params)
        commit('USER_INFO', result)
        return result
    }
}

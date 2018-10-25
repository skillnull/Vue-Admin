export default {
    USER_INFO (state, data) { // 用户信息
        state.userInfo = data
    },
    SIDE_NAV_FLAG (state, data) { // 左侧导航显隐
        state.sideNavFlag = data
    }
}

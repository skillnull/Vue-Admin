export default {
    userInfo: {}, // 用户信息
    sideNavFlag: false, // 左侧导航显隐
    menus: [
        {
            icon: 'el-icon-odometer',
            to: '',
            title: '大盘',
            children: [
                {
                    icon: 'dashboard',
                    to: '/dashboard',
                    title: 'Dashboard'
                }
            ]
        },
        {
            icon: 'el-icon-user',
            to: '/user',
            title: 'User Profile'
        },
        {
            icon: 'el-icon-date',
            to: '/table',
            title: 'Table list'
        },
        {
            icon: 'el-icon-notebook-1',
            to: '/typography',
            title: 'Icons'
        },
        {
            icon: 'el-icon-map-location',
            to: '/maps',
            title: 'Maps'
        },
        {
            icon: 'el-icon-bell',
            to: '/notifications',
            title: 'Notifications'
        },
        {
            icon: 'el-icon-upload2',
            to: '/upgrade',
            title: 'Upgrade to PRO'
        }
    ]
}

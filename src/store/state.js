export default {
    userInfo: {}, // 用户信息
    sideNavFlag: false, // 左侧导航显隐
    menus: [
        {
            icon: 'el-icon-odometer',
            to: '',
            title: 'Dashboard',
            children: [
                {
                    icon: 'dashboard',
                    to: '/dashboard',
                    title: 'Dashboard'
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
                }
            ]
        },
        {
            icon: 'el-icon-map-location',
            to: '',
            title: 'Others',
            children: [
                {
                    icon: 'el-icon-map-location',
                    to: '/maps',
                    title: 'Maps'
                },
                {
                    icon: 'el-icon-upload2',
                    to: '/upgrade',
                    title: 'Upgrade to PRO'
                }
            ]
        },
        {
            icon: 'el-icon-bell',
            to: '/notifications',
            title: 'Notifications'
        }
    ]
}

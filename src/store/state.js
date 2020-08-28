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
                },
                {
                    icon: 'person',
                    to: '/user',
                    title: 'User Profile'
                },
            ]
        },
        {
            icon: 'content_paste',
            to: '/table',
            title: 'Table list'
        },
        {
            icon: 'library_books',
            to: '/typography',
            title: 'Icons'
        },
        {
            icon: 'location_on',
            to: '/maps',
            title: 'Maps'
        },
        {
            icon: 'notifications',
            to: '/notifications',
            title: 'Notifications'
        },
        {
            icon: 'unarchive',
            to: '/upgrade',
            title: 'Upgrade to PRO'
        }
    ]
}

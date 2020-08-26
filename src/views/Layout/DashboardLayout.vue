<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <notifications></notifications>
        <side-bar>
            <mobile-menu slot="content"></mobile-menu>
            <sidebar-link :to="item.to" :key="index" v-for="(item, index) in menus">
                <md-icon>{{item.icon}}</md-icon>
                <p>{{item.title}}</p>
            </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>
            <dashboard-content></dashboard-content>
            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/views/Layout/MobileMenu.vue";

export default {
    data () {
        return {
            menus: [
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
    },
    components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,
        MobileMenu
    }
}
</script>
<style scoped lang="scss">
    .main-panel {
        width: calc(100% - #{$sidebar-w});
        height: 100vh;
        overflow: hidden;

        .content {
            height: calc(100vh - #{$footer-h} - #{$top-naver-h});
            overflow-y: auto;
        }
    }

    @media (max-width: 991px) {
        .main-panel {
            width: 100%;
        }
        .nav-open .main-panel {
            transform: translate3d(-#{$sidebar-w}, 0, 0);
        }
    }
</style>

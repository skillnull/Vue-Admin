<template>
    <div class="wrap">
        <SideNav class="side-nav" :class="{'show-side-nav':sideNavFlagLocal}"></SideNav>
        <section class="main-panel">
            <Header class="header"></Header>
            <Main class="content"></Main>
            <Footer class="footer"></Footer>
        </section>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Header from '@/views/layout/Header'
import SideNav from '@/views/layout/SideNav'
import Main from '@/views/layout/Main'
import Footer from '@/views/layout/Footer'
import {socketService} from '@/services/socket'

export default {
    name: 'index',
    data () {
        return {
            sideNavFlagLocal: false
        }
    },
    computed: {
        ...mapGetters(['sideNavFlag'])
    },
    watch: {
        sideNavFlag: {
            deep: true,
            handler (v, ov) {
                this.sideNavFlagLocal = v
            }
        }
    },
    components: {
        Header, SideNav, Main, Footer
    },
    methods: {
        getUserInfo () { // 获取用户信息
            this.$store.dispatch('getUserInfoFun').then((result) => {
                console.log(result)
            }).catch((reason) => {
                console.log(reason)
            })
        },
        socketConnect () { // socket连接
            this.$store.dispatch('getSocketInfoFun').then((result) => { // 获取socket连接信息
                socketService(result) // 连接socket
            }).catch((reason) => {
                console.log(reason)
            })
        }
    },
    mounted () {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 150)
        window.onresize = () => {
            let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (windowWidth <= 991) {
                this.sideNavFlagLocal = false
                this.$store.dispatch('sideNavFlagFun', false)
            } else {
                this.sideNavFlagLocal = true
                this.$store.dispatch('sideNavFlagFun', true)
            }
        }
        // TODO this.getUserInfo()
        // TODO this.socketConnect()
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        height: 100vh;
        position: relative;
        top: 0;
        .side-nav {
            height: 100%;
            max-height: 100%;
            width: $side-nav-width;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            background: #fff;
            transition: all 0.5s ease-in-out;
            box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
        }
        .main-panel {
            height: 100%;
            max-height: 100%;
            float: right;
            position: relative;
            width: calc(100% - #{$side-nav-width});
            transition: all 0.5s ease-in-out;
            .header {
                height: $header-height;
            }
            .content {
                min-height: calc(100vh - #{$header-height});
            }
        }
        .show-side-nav {
            opacity: 1 !important;
            left: 0 !important;
        }
        @media screen and (max-width: 991px) {
            .side-nav {
                opacity: 0;
                left: - $side-nav-width;
            }
            .main-panel {
                width: 100%;
            }
        }
    }
</style>

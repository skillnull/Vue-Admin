<template>
    <div class="side-nav-container">
        <div class="logo">
            SKILLNULL
        </div>
        <div class="side-nav">
            <Menu v-if="sideNavFlagLocal"></Menu>
            <div class="nav-content">
                <ul>
                    <li :key="index" v-for="(item, index) in sideNavItemArr">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="side-nav-bg" :style="{background: 'url(' + sideNavBg + ')'}"></div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Menu from './Menu'

export default {
    name: 'SideNav',
    data () {
        return {
            sideNavFlagLocal: false,
            sideNavItemArr: ['nav-1', 'nav-2', 'nav-3'],
            sideNavBg: require('@/assets/images/sideNav/sidebar-bg.jpg')
        }
    },
    computed: {
        ...mapGetters(['sideNavFlag'])
    },
    components: {Menu},
    watch: {
        sideNavFlag: {
            deep: true,
            handler (v, ov) {
                this.sideNavFlagLocal = v
            }
        }
    },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
    .side-nav-container {
        position: relative;
        overflow: hidden;
        .logo {
            @extend .flex-center;
            height: $header-height;
            position: relative;
            z-index: 4;
            text-transform: uppercase;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 15px;
                height: 1px;
                width: calc(100% - 30px);
                background-color: hsla(0, 0%, 71%, .3);
            }
        }
        .side-nav {
            @extend .cover-window;
            height: calc(100vh - #{$header-height});
            overflow: auto;
            position: relative;
            width: 260px;
            z-index: 4;
            padding-bottom: 30px;
            .nav-content {
                ul {
                    @extend .cover-window;
                    li {
                        text-align: center;
                        padding: 10px 0 0 0;
                    }
                }
            }
        }
        .side-nav-bg {
            position: absolute;
            z-index: 1;
            height: 100%;
            width: 100%;
            display: block;
            top: 0;
            left: 0;
            background-size: cover;
            background-position: 50%;
            &:after {
                position: absolute;
                z-index: 3;
                width: 100%;
                height: 100%;
                content: "";
                display: block;
                background: #fff;
                opacity: .93;
            }
        }
        @media screen and (min-width: 992px) {
            .side-nav {
                .menu {
                    display: none;
                }
            }
        }
    }
</style>
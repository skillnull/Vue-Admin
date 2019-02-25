<template>
    <div class="header-container">
        <div class="header-left">
            breadcrumb navigation
        </div>
        <div class="header-right">
            <div class="menu-wrap">
                <Menu></Menu>
            </div>
            <img class="menu-icon" src="../../assets/img/menu.png" alt="MENU" @click="showSideNav">
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Menu from './Menu'

export default {
    name: 'Header',
    data () {
        return {}
    },
    computed: {
        ...mapGetters(['sideNavFlag'])
    },
    components: {Menu},
    methods: {
        showSideNav () {
            this.$store.dispatch('sideNavFlagFun', !this.sideNavFlag)
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-container {
        @extend .flex-center;
        justify-content: space-between;
        height: $header-height;
        width: 100%;
        background-color: $default-bg-color;
        opacity: 1;
        transform: translateY(0);
        transition: transform .3s cubic-bezier(.4, 0, .2, 1) .3s, opacity 0s .3s;
        color: #333;
        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 15px;
            height: 1px;
            width: calc(100% - 30px);
            background-color: hsla(0, 0%, 71%, .3);
        }
        .header-left {
            @extend .cover-window;
            @extend .flex-center;
            justify-content: flex-start;
            padding-left: 24px;
            margin-right: auto;
            font-size: 16px;
            font-weight: 300;
        }
        .header-right {
            @extend .cover-window;
            @extend .flex-center;
            justify-content: flex-end;
            text-transform: capitalize;
            padding-right: 24px;
            margin-left: auto;
            .menu-wrap {
                @extend .cover-window;
            }
            .menu-icon {
                width: 30px;
                height: 30px;
                display: none;
                cursor: pointer;
                transition: all 0.5s ease-in-out;
            }
        }
        @media screen and (max-width: 991px) {
            .header-right {
                .menu-wrap {
                    display: none;
                }
                .menu-icon {
                    display: block;
                }
            }
        }
    }
</style>
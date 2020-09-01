<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <notifications></notifications>
        <side-bar>
            <mobile-menu slot="content"></mobile-menu>
            <el-menu background-color="transparent" class="el-menu-vertical" :default-openeds="defaultOpens" unique-opened>
                <slot :key="index" v-for="(item, index) in menus">
                    <el-submenu :index="`${index}`" v-if="item.children">
                        <template slot="title">
                            <sidebar-link :to="item.to">
                                <i :class="[item.icon]"></i>
                                <p>{{item.title}}</p>
                            </sidebar-link>
                        </template>
                        <el-menu-item :index="`${index}-${childIndex}`" :key="childIndex"
                                      v-for="(child,childIndex) in item.children"
                                      style="padding: 0 25px;"
                        >
                            <template slot="title">
                                <sidebar-link :to="child.to">
                                    <p style="padding: 0 15px;">{{child.title}}</p>
                                </sidebar-link>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item :index="`${index}`" v-else style="padding: 0 15px;">
                        <template slot="title">
                            <sidebar-link :to="item.to" :children="item.children">
                                <i :class="[item.icon]"></i>
                                <p>{{item.title}}</p>
                            </sidebar-link>
                        </template>
                    </el-menu-item>
                </slot>
            </el-menu>
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
            menus: this.$store.state.menus
        }
    },
    components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,
        MobileMenu
    },
    computed: {
        defaultOpens () {
            const path = this.$route.path
            let default_opens = []
            this.menus && this.menus.length > 0 && this.menus.map((item, index) => {
                if (item.children && this.recursion_menus(item, path)) {
                    default_opens = [`${index}`]
                }
            })
            return default_opens
        }
    },
    methods: {
        recursion_menus (item, path) {
            for (let [key, value] of Object.entries(item.children)) {
                if (value.children) {
                    this.recursion_menus(value, path)
                } else {
                    if (value.to === path) {
                        return true
                    }
                }
            }
        }
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

    /deep/ .el-menu-vertical {
        .el-submenu__icon-arrow {
            font-size: 18px !important;
        }

        .md-list-item .md-list-item-container .md-ripple {
            padding: 4px 5px;
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

<template>
    <li class="md-list-item">
        <router-link
            class="md-list-item-router md-list-item-container md-button-clean"
            @click="hideSidebar"
            v-bind="$attrs"
            v-if="$attrs.to"
        >
            <div class="md-list-item-content md-ripple">
                <slot>
                    <i :class="link.icon"></i>
                    <p>{{ link.name }}</p>
                </slot>
            </div>
        </router-link>
        <div class="md-list-item-content md-ripple" v-else>
            <slot>
                <i :class="link.icon"></i>
                <p>{{ link.name }}</p>
            </slot>
        </div>
    </li>
</template>
<script>
export default {
    inject: {
        autoClose: {
            default: true
        }
    },
    props: {
        link: {
            type: [String, Object],
            default: () => {
                return {
                    name: "",
                    path: "",
                    icon: ""
                };
            }
        },
        tag: {
            type: String,
            default: "router-link"
        }
    },
    methods: {
        hideSidebar () {
            if (
                this.autoClose &&
                this.$sidebar &&
                this.$sidebar.showSidebar === true
            ) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
    /deep/ .md-list.md-theme-default .md-selected .md-list-item-content, .md-list.md-theme-default .router-link-active .md-list-item-content {
        color: #409eff !important;
        background-color: hsla(0, 0%, 78.4%, .2) !important;

        i {
            margin-right: 5px !important;
        }
    }

    /deep/ .off-canvas-sidebar .md-list .md-list-item-content, .sidebar .md-list .md-list-item-content {
        color: white !important;
    }

    /deep/ .off-canvas-sidebar .nav li a, .sidebar .nav li a {
        margin: 5px 15px 0 0 !important;
    }
</style>

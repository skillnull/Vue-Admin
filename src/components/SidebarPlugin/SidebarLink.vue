<template>
    <li class="md-list-item">
        <router-link
            class="md-list-item-router md-list-item-container md-button-clean"
            @click="hideSidebar"
            v-bind="$attrs"
        >
            <div class="md-list-item-content md-ripple">
                <slot>
                    <md-icon>{{ link.icon }}</md-icon>
                    <p>{{ link.name }}</p>
                </slot>
            </div>
        </router-link>
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
        color: #409eff;
        background-color: hsla(0, 0%, 78.4%, .2) !important;
    }
</style>

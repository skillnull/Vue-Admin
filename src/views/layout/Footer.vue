<template>
    <div class="footer-container">
        © {{nowYear}}, made with favorite by <a href="https://github.com/skillnull"> skillnull </a> for a better web.
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    computed: {
        nowYear () {
            return new Date().getFullYear()
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer-container {
        @extend .flex-center;
        height: 50px;
        justify-content: flex-end;
        padding-right: 24px;
        border-top: 1px solid #e7e7e7;
        a {
            padding: 0 5px;
        }
        @media screen and (max-width: 991px) {
            & {
                justify-content: center;
            }
        }
    }
</style>
<template>
    <div class="homePageWrap">
        <div class="title">haha</div>
        <router-link to="homePage">homePage</router-link>
    </div>
</template>

<script>
export default {
    name: 'homePage',
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
    .homePageWrap {
        font-size: 20px;
        .title{
            color: $default-color;
        }
    }
</style>

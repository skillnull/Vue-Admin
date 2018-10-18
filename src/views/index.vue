<template>
    <div class="wrap">
        <sidebar></sidebar>
        <top></top>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
import sidebar from '@/views/common/sidebar'
import top from '@/views/common/top'

export default {
    name: 'home',
    components: {
        sidebar, top
    }
}
</script>
<style scoped>

</style>

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
import {socketService} from '@/services/socket'
import sidebar from '@/views/common/sidebar'
import top from '@/views/common/top'

export default {
    name: 'home',
    components: {
        sidebar, top
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
        // TODO this.getUserInfo()
        // TODO this.socketConnect()
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        @extend .coverWindow;
    }
</style>

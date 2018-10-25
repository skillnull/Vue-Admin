<template>
    <div class="menu">
        <ul>
            <li :key="item.key" v-for="item in menuItem">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Menu',
    data () {
        return {
            menuItem: [
                {name: 'Home', key: 'home', path: '/home'},
                {name: 'About', key: 'about', path: '/about'}
            ]
        }
    },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
    .menu {
        @extend .cover-window;
        @extend .flex-center;
        ul {
            @extend .cover-window;
            @extend .flex-center;
            justify-content: flex-end;
            li {
                @extend .cover-window;
                @extend .flex-center;
                padding: 0 10px;
                cursor: pointer;
                max-width: 60px;
                text-align: center;
                &:hover {
                    color: #0752d6;
                }
            }
        }
    }

    @media screen and (max-width: 991px) {
        .menu {
            display: block;
            height: auto;
            ul {
                display: block;
                li {
                    display: block;
                    text-align: center;
                    max-width: 100%;
                    padding: 10px 0 0 0;
                }
            }
        }
    }
</style>
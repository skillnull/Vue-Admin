<template>
    <md-toolbar md-elevation="0" class="md-transparent">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <h3 class="md-title">{{ $route.name }}</h3>
            </div>
            <div class="md-toolbar-section-end">
                <md-button
                    class="md-just-icon md-simple md-toolbar-toggle"
                    :class="{ toggled: $sidebar.showSidebar }"
                    @click="toggleSidebar"
                >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                    <div class="md-autocomplete">
                        <md-autocomplete
                            class="search"
                            v-model="selectedEmployee"
                            :md-options="employees"
                        >
                            <label>Search...</label>
                        </md-autocomplete>
                    </div>
                    <md-list>
                        <md-list-item href="#/">
                            <i class="material-icons">dashboard</i>
                            <p class="hidden-lg hidden-md">Dashboard</p>
                        </md-list-item>

                        <md-list-item href="#/notifications" class="dropdown">
                            <drop-down>
                                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="material-icons">notifications</i>
                                    <span class="notification">5</span>
                                    <p class="hidden-lg hidden-md">Notifications</p>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="#">Mike John responded to your email</a></li>
                                    <li><a href="#">You have 5 new tasks</a></li>
                                    <li><a href="#">You're now friend with Andrew</a></li>
                                    <li><a href="#">Another Notification</a></li>
                                    <li><a href="#">Another One</a></li>
                                </ul>
                            </drop-down>
                        </md-list-item>

                        <md-list-item>
                            <el-dropdown trigger="click" @command="handleCommand">
                                <span class="el-dropdown-link">
                                    <i class="material-icons" style="font-size: 20px;cursor: pointer">person</i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-tickets" command="profile">个人信息</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-s-promotion" command="logout" divided>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </md-list-item>
                    </md-list>
                </div>
            </div>
        </div>
    </md-toolbar>
</template>

<script>
export default {
    data () {
        return {
            selectedEmployee: null,
            employees: [
                "Jim Halpert",
                "Dwight Schrute",
                "Michael Scott",
                "Pam Beesly",
                "Angela Martin",
                "Kelly Kapoor",
                "Ryan Howard",
                "Kevin Malone"
            ]
        };
    },
    methods: {
        toggleSidebar () {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        handleCommand (command) {
            switch (command) {
                case 'profile':
                    this.$router.push('/user')
                    break
                case 'logout':
                    this.$router.push('/login')
                    break
                default:
                    break
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .md-transparent, .md-toolbar {
        height: $top-naver-h;
        min-height: $top-naver-h;
        padding: 0;

        .md-title {
            font-size: 14px;
        }
    }
</style>


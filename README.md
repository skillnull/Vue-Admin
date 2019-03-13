> 适合快速搭建响应式管理后台的Vue模板

| Integration | Version |
| :--- | :--- |
| vue-router | ^3.0.1 |
| vuex           | ^3.0.1 |
| vue-cli        | vue-cli-3 |
| axios           | ^0.18.0 |
| socket.io-client | ^2.1.1 |
| vue-material | ^1.0.0-beta-10.2 |

> 注
```
.env 本地环境配置
.env.development 开发测试环境配置
.env.production 正式发布环境配置
```
> 接口domain配置

将各环境的 VUE_APP_API_DOMAIN 更改为实际 domain 即可

> 项目命令
```
启动项目：npm run serve 
打包测试环境：npm run build-dev
打包正式环境：npm run build-pro
```

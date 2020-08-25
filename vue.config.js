/**
 * fs 模块提供了一些 API，用于以一种类似标准 POSIX 函数的方式与文件系统进行交互。
 * @function fs.readFile(path[, options], callback)
 * @param path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
 * @param lintOnSave: Type: boolean | 'error', 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
 * 这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
 * @param options <Object> | <string>
 *           encoding <string> | <null> 默认为 null。
 *           flag <string> 详见支持的文件系统flag。默认为 'r'。
 * @param callback <Function>
 *           err <Error>
 *           data <string> | <Buffer>
 * 异步地读取一个文件的全部内容:
 *      fs.readFile('/etc/passwd', (err, data) => {
 *           if (err) throw err;
 *           console.log(data);
 *      });
 * 如果 options 是一个字符串，则它指定了字符编码: fs.readFile('/etc/passwd', 'utf8', callback)
 *
 * @function fs.readFileSync(path[, options])
 * @return 返回 path 的内容。
 */
const fs = require('fs')

/**
 * path 模块的默认操作会根据 Node.js 应用程序运行的操作系统的不同而变化。
 * @method path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
 * 长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
 */
const path = require('path')

var scssSource = fs.readFileSync('src/assets/scss/global.scss', 'utf-8') + '\r\n' +
    fs.readFileSync('src/assets/scss/common.scss', 'utf-8') + '\r\n' +
    fs.readFileSync('src/assets/scss/variables.scss', 'utf-8')

function resolve (dir) {
    return path.join(__dirname, dir)
}

/**
 * @param productionSourceMap: 正式发布环境是否打开 source map
 * @param crossorigin: 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
 *          -------------------------------------------------------------------------
 *         | anonymous        | 元素的跨域资源请求不需要凭证标志设置。                   |
 *         --------------------------------------------------------------------------
 *         | use-credentials | 元素的跨域资源请求需要凭证标志设置，意味着该请求需要提供凭证。|
 *         --------------------------------------------------------------------------
 * @type {{baseUrl: *, outputDir: *, productionSourceMap: boolean, crossorigin: string, chainWebpack: module.exports.chainWebpack, css: {loaderOptions: {sass: {data: string}}}}}
 */
module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL,
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV !== 'production',
    crossorigin: 'anonymous',
    css: {
        loaderOptions: {
            sass: {
                data: scssSource
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@views', resolve('src/views'))
            .set('@assets', resolve('src/assets'))
    },
    devServer: {
        // 关闭 http://localhost:8080/sockjs-node/info?t=
        injectClient: false,
        host: '0.0.0.0',
        port: 8080,
        // 方向代理解决跨域
        proxy: {
            'api': {
                target: 'http://www.skillnull.com',
                pathRewrite: {'^/api': ''},
                changeOrigin: true,
                secure: false
            }
        }
    }
}

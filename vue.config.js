const fs = require('fs')
const path = require('path')
var sassSource = fs.readFileSync('src/assets/css/scss/variables.scss', 'utf-8') + '\r\n' +
    fs.readFileSync('src/assets/css/scss/common.scss', 'utf-8')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    baseUrl: process.env.VUE_APP_BASE_URL,
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@views', resolve('src/views'))
            .set('@services', resolve('src/services'))
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: sassSource
            }
        }
    }
}
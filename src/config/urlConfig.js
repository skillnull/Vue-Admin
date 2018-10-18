import homePage from './url/homePage'

const url = Object.assign(homePage)

/**
 * @function 拼接接口域名和路径
 * @param type: 接口类别; path: 接口路径
 */
export function getUrl (type, path) {
    return (`${process.env.VUE_APP_API_DOMAIN}${url[type][path]}`)
}
/*
 * axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端, 它本身具有以下特征：
 * 1.从浏览器中创建 XMLHttpRequest
 * 2.从 node.js 发出 http 请求
 * 3.支持 Promise API
 * 4.拦截请求和响应
 * 5.转换请求和响应数据
 * 6.取消请求
 * 7.自动转换JSON数据
 * 8.客户端支持防止 CSRF/XSRF
 */
import axios from 'axios'
/*
 * npm install axios 的时候默认会安装 qs
 * qs.stringify() 和JSON.stringify()功能都是序列化，区别如下：
 * 对于{name:'demo',age:10}
 * qs.stringify 序列化结果为：name=demo&age=10
 * SON.stringify 序列化结果为："{"name":"demo","age":10}"
 */
import qs from 'qs'
import router from "../router";

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is send, such as open loading  animation
    config.headers['client_id'] = '912ad09c483c45c685af639b3d35f728'
    if (config.data && config.data.isForm) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        config.timeout = 60 * 1000
        const params = new URLSearchParams()
        for (const key in config.data) {
            if (config.data.hasOwnProperty(key)) {
                params.append(key, config.data[key])
            }
        }
        config.data = params
        delete config.data.isForm
    } else {
        config.headers['Content-Type'] = 'application/json'
        config.timeout = 5 * 60 * 1000
        config.data = JSON.stringify(config.data)
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data, such as close loading animation
    switch (response.data.code) {
        case 200: // 成功
            return Promise.resolve(response.data.data)
            break
        case 401: // 登陆失效
            router.push('/login').catch(() => {
            })
            break
        case 500:
            this.$message('服务错误')
            return Promise.reject(response.data)
            break
        default:
            return Promise.reject(response.data)
    }
}, function (error) {
    // Do something with response error
    return Promise.reject(error)
})

/**
 * GET request
 * @param url, params
 * @returns {Promise<any>}
 */
export const getRequest = async (url, params) => {
    let resultParams = ''
    for (let key in params) {
        resultParams = resultParams + '&' + key + '=' + params[key]
    }
    let urlStr = url + `?${resultParams.substr(1)}`
    let parameters = {
        url: params ? urlStr : url,
        method: 'get'
    }
    axios.defaults.withCredentials = true
    let data = await axios.request(parameters)
    return data
}

/**
 * POST request
 * @param url,params
 * @returns {Promise<any>}
 */
export const postRequest = async (url, params, isForm) => {
    let finalParams

    if (isForm === undefined || !isForm) {
        finalParams = params
    } else {
        params.isForm = true
        finalParams = params
    }

    let parameters = {
        url: url,
        method: 'post',
        data: finalParams
    }
    axios.defaults.withCredentials = true
    let data = await axios.request(parameters)
    return data
}

/**
 * 保留小数并千分位格式化
 * @param number
 * @param digit 保留小数的位数
 * @param showZero 是否显示小数点后面的0，默认显示
 * @returns {string}
 */
export function thousandsFormateTofixed (number, digit, showZero) {
    if (typeof number === 'string') {
        number = +number
    }
    // 保留小数
    number = number && (number).toFixed(digit)
    number += ''
    if (!number.includes('.')) number += '.'
    var result = number.replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
        return $1 + ','
    }).replace(/\.$/, '')
    // 是否显示小数点后面的0,默认显示
    if (showZero === false) {
        if (+result.split('.')[1] === 0) {
            result = result.split('.')[0]
        }
    }
    return result
}


/**
 * 监听浏览器标签页的显示与隐藏
 */
export class ListenerPageVisibility {
    constructor () {
        // 设置隐藏属性和改变可见属性的事件的名称
        this.hidden = ''
        this.visibilityChange = ''
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            this.hidden = "hidden"
            this.visibilityChange = "visibilitychange"
        } else if (typeof document.msHidden !== "undefined") {
            this.hidden = "msHidden"
            this.visibilityChange = "msvisibilitychange"
        } else if (typeof document.webkitHidden !== "undefined") {
            this.hidden = "webkitHidden"
            this.visibilityChange = "webkitvisibilitychange"
        }

        this.handleChange = (callBackHidden, callBackVisibility) => {
            if (document[this.hidden]) {
                // 页面是隐藏状态
                callBackHidden && callBackHidden()
            } else {
                // 页面是展示状态
                callBackVisibility && callBackVisibility()
            }
        }

    }

    /**
     * 全局访问点
     * @param callBackHidden 页面隐藏执行的回调方法
     * @param callBackVisibility 页面显示执行的回调方法
     */
    linsternVisibility (callBackHidden, callBackVisibility) {

        // 如果浏览器不支持addEventListener 或 Page Visibility API 给出警告
        if (typeof document.addEventListener === "undefined" || typeof document[this.hidden] === "undefined") {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.")
        } else {
            // 处理页面可见属性的改变
            document.addEventListener(this.visibilityChange, () => {
                this.handleChange(callBackHidden, callBackVisibility)
            }, false)
        }
    }
}


/**
 * 比较两个时间的时间差
 * @param startTime 开始时间
 * @param endTime 结束时间
 */
export function compareTime (startTime, endTime) {
    var retValue = {}

    var compareTime = endTime - startTime  // 时间差的毫秒数

    // 计算出相差天数
    var days = Math.floor(compareTime / (24 * 3600 * 1000))
    retValue.Days = days

    // 计算出相差年数
    var years = Math.floor(days / 365)
    retValue.Years = years

    // 计算出相差月数
    var months = Math.floor(days / 30)
    retValue.Months = months

    // 计算出小时数
    var leaveHours = compareTime % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
    var hours = Math.floor(leaveHours / (3600 * 1000))
    retValue.Hours = hours

    // 计算相差分钟数
    var leaveMinutes = leaveHours % (3600 * 1000) // 计算小时数后剩余的毫秒数
    var minutes = Math.floor(leaveMinutes / (60 * 1000))
    retValue.Minutes = minutes

    // 计算相差秒数
    var leaveSeconds = leaveMinutes % (60 * 1000) // 计算分钟数后剩余的毫秒数
    var seconds = Math.round(leaveSeconds / 1000)
    retValue.Seconds = seconds

    var resultSeconds = 0
    if (years >= 1) {
        resultSeconds = resultSeconds + years * 365 * 24 * 60 * 60
    }
    if (months >= 1) {
        resultSeconds = resultSeconds + months * 30 * 24 * 60 * 60
    }
    if (days >= 1) {
        resultSeconds = resultSeconds + days * 24 * 60 * 60
    }
    if (hours >= 1) {
        resultSeconds = resultSeconds + hours * 60 * 60
    }
    if (minutes >= 1) {
        resultSeconds = resultSeconds + minutes * 60
    }
    if (seconds >= 1) {
        resultSeconds = resultSeconds + seconds
    }
    retValue.resultSeconds = resultSeconds

    return retValue
}

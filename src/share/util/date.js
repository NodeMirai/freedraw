/**
 * 日期相关操作
 */

class DateUtil {
  static format(date) {
    let y = date.getFullYear()
    let M = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
  }
}

export default DateUtil

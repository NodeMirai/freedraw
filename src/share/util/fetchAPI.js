/**
 * 基于fetch封装restful请求
 * 默认携带http基本认证token
 */

 // 获取token，用于每次请求认证
const token = localStorage.getItem('token')

/**
 * fetch接口封装
 * @param {*} url 接口地址
 * @param {*} options 配置信息，包括method,headers,data(GET HEAD下不可使用)
 * @param {*} callback 获取数据成功后的回调
 */
export default fetchAPI = (url, options, callback ) => {
  let init = {
    method: options.method,
  }

  // 仅当数据存在时赋值，不存在则不尽兴添加
  options.headers && (init.headers = options.headers)
  options.data && (init.data = options.data)

  fetch(url, init)
    .then(res => res.json())
    .then(data => {
      callback(data)
    })
    .catch(err => console.error(err))

}

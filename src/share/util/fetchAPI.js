/**
 * 基于fetch封装restful请求
 * 默认携带http基本认证token
 */

 // 获取token，用于每次请求认证
const token = sessionStorage.getItem('token')

/**
 * fetch接口封装
 * @param {*} url 接口地址
 * @param {*} options 配置信息，包括method,headers,data(GET HEAD下不可使用)
 * @param {*} callback 获取数据成功后的回调
 */
export default (url, options, callback ) => {
  let init = {
    method: options.method,
    headers: {
      Authorization: token,
      'Content-type': 'application/json',  //  使用form data时content-type必须为application/x-www-form-urlencoded
    },
  }

  // 仅当数据存在时赋值，不存在则不尽兴添加
  options.data && (init.body = JSON.stringify(options.data))
  // 自定义content-type
  options['Content-type'] && (init.headers['Content-type'] = options['Content-type'])
  // 删除content-type
  options.noContentType && delete init.headers['Content-type']

  fetch(url, init)
    .then(res => res.json())
    .then(data => {
      if (data.status === 200)
        callback(data)
      else if (data.status === 403)
        // token失效后处理
        console.log(data.message)
    })
    .catch(err => {
      console.error(err)
    })

}

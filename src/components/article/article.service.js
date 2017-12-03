/**
 * ajax相关操作放在这里
 */
import fetchAPI from '../../share/util/fetchAPI'

// 查询全部文章
export function getAllArticle() {
  // 调用查询文章列表接口
  return new Promise((resolve, reject) => {
    fetchAPI('/api/article/', { method: "GET" }, (data) => {
      if (data.status === 200) {
        resolve(data.data || [])
      } else {
        reject()
      }
    })
  })
}

export function addArticle(article) {

  return new Promise((resolve, reject) => {
    fetchAPI('/api/article/', { method: "POST", data: article }, (data) => {
      if (data.status === 200) {
        resolve()
      } else {
        reject()
      }
    })
  })

}

export function removeArticle(id) {

  return new Promise((resolve, reject) => {
    fetchAPI(`/api/article/${id}`, { method: "DELETE" }, (data) => {
      if (data.status === 200) {
        resolve()
      } else {
        reject()
      }
    })
  })

}

export function updateArticle(article) {

  return new Promise((resolve, reject) => {
    fetchAPI('/api/article/', { method: "PUT", data: article }, (data) => {
      if (data.status === 200) {
        resolve()
      } else {
        reject()
      }
    })
  })

}

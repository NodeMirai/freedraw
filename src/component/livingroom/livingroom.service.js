
export function getAllArticle() {
  return new Promise((resolve, reject) => {
    fetch('/api/article')
      .then(data => data.json())
      .then(data => {
        if (data.status === 200)
          resolve(data.data)
        else
          reject('请求失败')
        }
      )
      .catch(err => reject(err))
  })
}

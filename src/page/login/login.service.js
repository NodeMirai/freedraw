import fetchAPI from '../../share/util/fetchAPI'

export function register(username, password) {
  return new Promise((resolve, reject) => {
    fetch(`/api/authenticate/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    fetch(`/api/authenticate/`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        if (data.status === 200) {
          resolve(data)
        } else {
          reject('报错')
        }
      })
      .catch(err => console.error(err))
  })
}

export function checkname(username) {
  return new Promise((resolve, reject) => {
    fetch(`/api/authenticate/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          resolve()
        } else {
          reject()
        }
      })
      .catch(err => {
        reject()
        console.error(err)
      })
  })
}

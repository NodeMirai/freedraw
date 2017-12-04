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
  return Promise((resolve, reject) => {
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
    .then(res => res.json())
    .then(data => {
      resolve(data)
    })
    .catch(err => reject(err))
  })
}

export function checkname(username) {
  return new Promise((resolve, reject) => {
    fetch(`/api/authenticate/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.data) {
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

import * as loginService from '../../page/login/login.service'

export const CHECK_USERNAME = 'CHECK_USERNAME'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const CHANGE_TYPE = 'CHANGE_TYPE'

export function checkUsername(username) {
  return dispatch => loginService.checkname(username)
           .then(() => dispatch({ type: CHECK_USERNAME, isUsernameRepeat: false })).catch(() => dispatch({ type: CHECK_USERNAME, isUsernameRepeat: true }))
}

export function changeType(formType) {
  return { type: CHANGE_TYPE, formType }
}

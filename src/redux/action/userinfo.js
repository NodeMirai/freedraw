/**
 * 用户信息显示与修改组建action编写
 */

export const GET_USERINFO = 'GET_USERINFO'
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export function getUserInfo(userinfo) {
  return { type: GET_USERINFO, userinfo }
}

export function updateUserInfo(userInfo) {
  return { type: UPDATE_USERINFO, userinfo }
}


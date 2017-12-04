import * as loginAction from '../action/login'

const initialState = {
  // username: '', //  登陆状态
  // password: '',
  type: 1, // 1:登陆 2:注册
  isUsernameRepeat: false,
}

console.log(loginAction)

export default (state = initialState, action) => {
  switch (action.type) {
    case loginAction.CHECK_USERNAME:
      return Object.assign({}, state, { isUsernameRepeat: action.isUsernameRepeat })
    case loginAction.CHANGE_TYPE:
      return Object.assign({}, state, { type: action.formType })
    default:
      return state
  }
}

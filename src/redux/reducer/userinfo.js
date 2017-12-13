import * as userInfoAction from '../action/userinfo'

const initialState = {
  userinfo: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case userInfoAction.GET_USERINFO:
      return Object.assign({}, state, action.userinfo)
    case userInfoAction.UPDATE_USERINFO:
      return Object.assign({}, state, action.userinfo)
    default:
      return state
  }
}

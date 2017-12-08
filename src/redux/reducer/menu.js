import * as menuAction from '../action/menu'

/**
 * article组件中的初始状态
 */
const initialState = {
  isMenuShow: false,
}

/**
 * reducer返回的值为store.getState()
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case menuAction.SHOW_MENU:
      return Object.assign({}, state, { isMenuShow: action.isMenuShow } )
    default:
      return state
  }
}

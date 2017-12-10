import * as modalAction from '../action/modal'

const initalState = {
  isModalShow: false,
}

export default (state = initalState, action) => {
  switch(action.type) {
    case modalAction.MODAL_TOGGLE:
      return Object.assign({}, state, { isModalShow: action.isModalShow } )
    default:
      return state
  }
}

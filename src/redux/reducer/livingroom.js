import * as livingroomAction from '../action/livingroom'

const initialState = {
  articleList: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case livingroomAction.GET_ARTICLES:
      return Object.assign({}, state, { articleList: action.articleList })
    default:
      return state
  }
}

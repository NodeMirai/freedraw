import * as articleAction from '../action/article'

/**
 * article组件中的初始状态
 * 根据文件名会将数据合并到store.getState().article中
 */
const initialState = {
  articleList: [],
  currentId: '',   // 当前选中文章
}

/**
 * reducer返回的值为store.getState()
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case articleAction.GET_ARTICLE:
      return Object.assign({}, state, { articleList: action.articleList } )
    case articleAction.SELECT_ARTICLE:
      return Object.assign({}, state, { currentId: action.id })
    default:
      return state
  }
}

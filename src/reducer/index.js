import { combineReducers } from 'redux'
import article from './article'

// 合并所有reducer
const rootReducer = combineReducers({
  article
})

export default rootReducer

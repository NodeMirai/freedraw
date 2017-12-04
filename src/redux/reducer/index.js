import { combineReducers } from 'redux'
import article from './article'
import login from './login'

// 合并所有reducer
const rootReducer = combineReducers({
  article,
  login,
})

export default rootReducer

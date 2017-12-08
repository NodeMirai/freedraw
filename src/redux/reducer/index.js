import { combineReducers } from 'redux'
import article from './article'
import login from './login'
import menu from './menu'

// 合并所有reducer
const rootReducer = combineReducers({
  article,
  login,
  menu,
})

export default rootReducer

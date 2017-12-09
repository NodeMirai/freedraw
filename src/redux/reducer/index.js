import { combineReducers } from 'redux'
import article from './article'
import login from './login'
import menu from './menu'
import livingroom from './livingroom'

// 合并所有reducer
const rootReducer = combineReducers({
  article,
  login,
  menu,
  livingroom,
})

export default rootReducer

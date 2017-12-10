import { combineReducers } from 'redux'
import article from './article'
import login from './login'
import menu from './menu'
import livingroom from './livingroom'
import modal from './modal'

// 合并所有reducer
const rootReducer = combineReducers({
  article,
  login,
  menu,
  livingroom,
  modal,
})

export default rootReducer

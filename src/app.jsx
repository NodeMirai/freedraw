import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { bindActionCreators, createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import Modal from './share/highlevel/modal/modal'
import highContainer from './share/highlevel/container/container'
import LivingRoom from './component/livingroom/livingroom'
import UserInfo from './component/userinfo/userinfo'

import Login from './page/login/login'
import UserCenter from './page/usercenter/usercenter'
import ArticleContent from './page/articlecontent/articlecontent'

import highHome from './share/highlevel/home/home'
let data = {
  title: '万事不顺屋',
  menuItem: [
    '个人中心',
    '收藏',
    '消息',
  ],
  CustomModal: Modal({
    headerText: '个人资料',
    modalBody: <UserInfo />,
  }),
  container: highContainer(<LivingRoom />)
}
const Home = highHome(data)
/**
 * 获取所有action与reducer
 */
import rootReducer from './redux/reducer'
import * as actionCreators from './redux/action'

import './app.scss'
/**
 * 1. 添加thunk中间件，时action内部可以实现多次异步dispatch(例如新增与删除后再更新文章列表)
 * 2. 通过createStore将reducer中的state合并为一个单独的state对象存储在store中，可通过store.getState()获取
 */
const store = applyMiddleware(
  thunkMiddleware
)(createStore)(rootReducer)

/**
 * 增强App组件，通过connect方法可使组件得到获取store与actions的能力
 */
const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(Home)

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(
  <Provider store={ store }>
    <Router basename="/">
      <div>
        <Route exact path="/" component={ App } />
        <Route exact path="/index/login/:type" component={ Login } />
        <Route path="/index/usercenter" component={ UserCenter } />
        <Route path="/index/article/detail/:articleId" component={ ArticleContent } />
      </div>
    </Router>
  </Provider>
  ,
  app,
)

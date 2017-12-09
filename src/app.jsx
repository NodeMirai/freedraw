import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { bindActionCreators, createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Layout from './share/component/layout/layout'
import Menu from './share/component/menu/menu'

import Login from './page/login/login'
import UserCenter from './page/usercenter/usercenter'

import * as highlevel from './share/highlevel/container'

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

// !这个组件应该封装在component或者container中
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '万事不顺屋',
      menuItem: [
        '个人中心',
        '收藏',
        '消息'
      ]
    }
  }

  render() {
    const { title } = this.state
    return (
      <div className="app">
        <Header title={title} />
        { highlevel.highContainer() }
        <Footer />
        <Layout />
        <Menu items={this.state.menuItem} />
      </div>
    )
  }
}

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
    <Router>
      <div>
        <Route exact path="/" component={ App } />
        <Route exact path="/login/:type" component={ Login } />
        <Route path="/usercenter" component={ UserCenter } />
      </div>
    </Router>
  </Provider>
  ,
  app,
)

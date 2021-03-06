import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import indexAction from '../../redux/action/index'

import './header.scss'

function signout() {
  sessionStorage.setItem('token', '')
  location.href = '/'
}

// 无状态函数组件
function Header(props) {
  let showMenu = props.showMenu
  let modalToggle = props.showModalToggle
  let token = sessionStorage.getItem('token')
  let avatar = sessionStorage.getItem('avatar')
  let user = token ? (
    // 个人头像加下拉列表：消息，收藏，个人中心，退出登陆
    <div className="user">
      <img className="user--avatar" src={avatar} onClick={() => modalToggle(true)} onMouseEnter={() => showMenu(true)} />
      <a className="user-signout" onClick={() => signout()} href="#">退出登陆</a>
    </div>

  ) : (
      <div className="login-btn-group">
        <Link to="/index/login/1">登陆</Link>
        {/* 这里需要路由传值 */}
        <Link to="/index/login/2">注册</Link>
      </div>
    )

  return (
    <header className="clearfix header-wrap">
      <div className="title">
        <h1>
          <a href="#title" style={{ color: '#000', textDecoration: 'none' }}>{props.title}</a>
        </h1>
        <i>如果一次也不回头 我能走到哪里</i>
      </div>
      <form className="search-form">
        <input type="input" autoComplete="on" placeholder="搜索..." />
        <i className="fa fa-search"></i>
      </form>

      {user}
    </header>
  )
}
Header = connect(
  (state) => state,
  (dispatch) => ({
    showModalToggle(isModalShow) {
      dispatch(indexAction.modalAction.modalToggle(isModalShow))
    },
    showMenu(isMenuShow) {
      dispatch(indexAction.menuAction.showMenu(isMenuShow))
    }
  }),
)(Header)

export default Header

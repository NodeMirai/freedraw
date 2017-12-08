import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

function signout() {
  sessionStorage.setItem('token', '')
  location.href = '/'
}

// 无状态函数组件
function Navbar(props) {
  let token = sessionStorage.getItem('token')
  let avatar = sessionStorage.getItem('avatar')
  let user = token ? (
    // 个人头像加下拉列表：消息，收藏，个人中心，退出登陆
    <div className="user">
      <img className="user--avatar" src={avatar}/>
      <ul className="user--menu">
        <li><a>个人中心</a></li>
        <li><a>收藏</a></li>
        <li><a>消息</a></li>
      </ul>
      <a className="user-signout" onClick={()=> signout()} href="#">退出登陆</a>
    </div>

  ) : (
      <div className="login-btn-group">
        <Link to="/login/1">登陆</Link>
        {/* 这里需要路由传值 */}
        <Link to="/login/2">注册</Link>
      </div>
    )

  return (
    <header className="clearfix">
      <div className="header-wrap">
        <div className="title">
          <h1>
            <a href="#title" style={{ color: '#000', textDecoration: 'none' }}>{props.title}</a>
          </h1>
          <i>如果一次也不回头 我能走到哪里</i>
        </div>

        <nav className="nav-top">
          <ul>
            <li><Link to="/article">文章</Link></li>
            <li><Link to="/audio">音频</Link></li>
            <li><Link to="/picture">图片</Link></li>
            <li><Link to="/video">视频</Link></li>
          </ul>
        </nav>

        <form className="search-form">
          <input type="input" autoComplete="on" placeholder="搜索..." />
          <i className="fa fa-search"></i>
        </form>

        { user }
      </div>
    </header>
  )
}

export default Navbar

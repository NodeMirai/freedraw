import React from 'react'

import './header.scss'

// 无状态函数组件
function Navbar(props) {
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
            <li>文章</li>
            <li>音频</li>
            <li>图片</li>
            <li>视频</li>
          </ul>
        </nav>

        <form className="search-form">
          <input type="input" autoComplete="on" placeholder="搜索..." />
          <i className="fa fa-search"></i>
        </form>

        <div className="login">
          <a className="login-btn">登录</a>
        </div>
      </div>

    </header>
  )
}

export default Navbar

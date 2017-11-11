import React from 'react'

import './header.scss'

// 无状态函数组件
function Navbar(props) {
  return (
    <header className="clearfix">
      <h1 className="title">
        <a href="#title" style={{ color: '#000', textDecoration: 'none' }}>{props.title}</a>
      </h1>

      <form className="search-form">
        <input type="input" placeholder="搜索..." />
      </form>

      <nav>
        <ul className="nav-top m0">
          <li>文章</li>
          <li>音频</li>
          <li>图片</li>
          <li>视频</li>

          <a style={{ verticalAlign: 'super' }}>登录</a>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar

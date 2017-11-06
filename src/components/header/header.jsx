import React from 'react'

import './header.scss'

// 无状态函数组件
function Navbar(props) {
  return (
    <header className="clearfix">
      <h1 className="title">
        <a href="#title">{ props.title }</a>
      </h1>
      <nav>
        <ul>
          <li>文章</li>
          <li>音频</li>
          <li>图片</li>
          <li>视频</li>
        </ul>
      </nav>
      <form className="search-form">
        <input type="search" placeholder="搜索..." />
      </form>
      <span>登录</span>
    </header>
  )
}

export default Navbar

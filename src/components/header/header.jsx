import React from 'react'

import './header.scss'

// 无状态函数组件
function Navbar(props) {
  return (
    <header className="clearfix">
      <h1 className="title">
        <a href="#title">{ props.title }</a>
      </h1>
      {/* <h2>案内</h2>
      <h2>本丸</h2> */}
      <form className="search-form">
        <input type="search" placeholder="搜索..." />
      </form>
      <span>登录</span>
    </header>
  )
}

module.exports = Navbar

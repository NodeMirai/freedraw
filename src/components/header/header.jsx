import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

import $ from 'jquery'

let client_id = 1106547932
let redirect_uri = 'http%3A%2F%2Fnodemirai.com'
let state = 'test'

function login() {
  $.ajax(
    {
      url: `/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`,
      //url: '/oauth',
      success: (data) => {
        $('#chat').html(data)
      },
      error: (data) => {
        console.log(data)
      },
      type: 'GET',
      dataType: 'html'
    }
)
}

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

        <div className="login">
          <a className="login-btn" onClick={login} />
        </div>
      </div>

    </header>
  )
}

export default Navbar

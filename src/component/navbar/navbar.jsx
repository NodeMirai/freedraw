import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

function Navbar() {
  return (
    <nav className="nav-top">
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/index/usercenter/article">文章</Link></li>
        <li><Link to="/index/usercenter/audio">音频</Link></li>
        <li><Link to="/index/usercenter/picture">图片</Link></li>
        <li><Link to="/index/usercenter/video">视频</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom';

import Article from '../article/article'
import Video from '../video/video'
import Picture from '../picture/picture'
import Chat from '../chat/chat'

import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
      <Route exact path="/index/usercenter/article" component={Article} />
      <Route exact path="/index/usercenter/audio" component={ Video} />
      <Route exact path="/index/usercenter/picture" component={Picture} />
      <Route exact path="/index/usercenter/video" component={ Video} />
    </section>
  )
}

export default Content

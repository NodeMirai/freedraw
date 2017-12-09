import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom';

import Article from '../article/article'
import Video from '../video/video'
import Picture from '../picture/picture'
import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
      <Route exact path="/usercenter/article" component={Article} />
      <Route exact path="/usercenter/audio" component={ Video} />
      <Route exact path="/usercenter/picture" component={Picture} />
      <Route exact path="/usercenter/video" component={ Video} />
    </section>
  )
}

export default Content

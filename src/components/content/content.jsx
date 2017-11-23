import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom';

import Contentaside from '../content-aside/aside'
import Contentmain from '../content-main/main'
import Article from '../article/article'
import Video from '../video/video'
import Picture from '../picture/picture'
import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
      <Route exact path="/" component={Article} />
      <Route exact path="/audio" component={ Video} />
      <Route exact path="/picture" component={Picture} />
      <Route exact path="/video" component={ Video} />
    </section>
  )
}

export default Content

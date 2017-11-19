import React from 'react'
import {
  Route,
  Switch
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
      <Switch>
        <Route path="/article" component={Article} />
        <Route path="/picture" component={Picture} />
        <Route path="/video" component={ Video} />
      </Switch>
    </section>
  )
}

export default Content

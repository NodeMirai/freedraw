import React from 'react'

import Contentaside from '../content-aside/aside'
import Contentmain from '../content-main/main'
import Article from '../article/article'
import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
      {/* <Contentmain /> */}
      <Article />
      {/* <Contentaside className="content-aside">内容推荐，外部链接</Contentaside> */}
      <Contentmain />
      {/* <Contentaside className="content-aside">内容推荐，外部链接</Contentaside> */}
    </section>
  )
}

export default Content

import React from 'react'

import Contentaside from '../content-aside/aside'
import Contentmain from '../content-main/main'
import Article from '../article/article'
import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
<<<<<<< HEAD
      <Contentnav />
      {/* <Contentmain /> */}
      <Article />
      {/* <Contentaside className="content-aside">内容推荐，外部链接</Contentaside> */}
=======

      <Contentmain />
      <Contentaside className="content-aside">内容推荐，外部链接</Contentaside>
>>>>>>> f3fd650fad95e50d2bfa80f4c601233bcf9f99c6
    </section>
  )
}

export default Content

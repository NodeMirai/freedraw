import React from 'react'

import Contentnav from '../content-nav/nav'
import Contentaside from '../content-aside/aside'
import Contentmain from '../content-main/main'
import './content.scss'

// 无状态函数组件
function Content() {
  return (
    <section className="content">
      <Contentnav />
      <Contentmain />
      <Contentaside className="content-aside">内容推荐，外部链接</Contentaside>
    </section>
  )
}

module.exports = Content

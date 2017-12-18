import React from 'react'

import Header from '../../component/header/header'
import Navbar from '../../component/navbar/navbar'
import Menu from '../../share/component/menu/menu'
import Layout from '../../share/component/layout/layout'
import ArticleDetail from '../../component/articledetail/articledetail'
import Modal from '../../share/highlevel/modal/modal'

import * as highlevel from '../../share/highlevel/container/container'

import './articlecontent.scss'

function ArticleContent(props) {
  let title = "万事不顺屋"
  let menuItem = [
    '个人中心',
    '收藏',
    '消息'
  ]
  let articleId = props.match.params.articleId
  return (
    <div>
      <Header title={title} />
      <Navbar />
      {highlevel.highContainer(<ArticleDetail articleId={articleId} />)}
      <Menu items={menuItem} />
      <Layout />
    </div>
  )
}

export default ArticleContent

import React from 'react'

import ArticleDetail from '../../component/articledetail/articledetail'
import highContainer from '../../share/highlevel/container/container'
import highHome from '../../share/highlevel/home/home'
import Modal from '../../share/highlevel/modal/modal'
import UserInfo from '../../component/userinfo/userinfo'

import './articlecontent.scss'

function ArticleContent(props) {
  let articleId = props.match.params.articleId
  let data = {
    title: '万事不顺屋',
    menuItem: [
      '个人中心',
      '收藏',
      '消息',
    ],
    CustomModal: Modal({
      headerText: '个人资料',
      modalBody: <UserInfo />,
    }),
    container: highContainer(<ArticleDetail articleId={articleId} />)
  }
  const Home = highHome(data)
  return (
    <div>
      <Home />
    </div>
  )
}

export default ArticleContent

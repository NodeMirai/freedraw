/**
 * 首页数据模型部分
 * @param
 */
import React from 'react' // ???为什么这里要用

import Modal from '../share/highlevel/modal/modal'
import highContainer from '../share/highlevel/container/container'
import LivingRoom from '../component/livingroom/livingroom'
import UserInfo from '../component/userinfo/userinfo'
import ArticleDetail from '../component/articledetail/articledetail'
import Content from '../component/content/content'

// Home模型中公共部分
class HomeBaseModal {

  title
  menuItem
  UserInfoModal
  container

  constructor(props) {
    this.title = '万事不顺屋'
    this.menuItem = [
      '个人中心',
      '收藏',
      '消息',
    ]
    this.UserInfoModal = props.UserInfoModal
    this.container = props.container
  }

}

const HomeModal = {
  app: new HomeBaseModal({
    UserInfoModal: Modal({
      headerText: '个人资料',
      modalBody: <UserInfo />,
    }),
    container: highContainer(<LivingRoom />)
  }),
  articleContent: (articleId) => {
    return new HomeBaseModal({
      UserInfoModal: Modal({
        headerText: '个人资料',
        modalBody: <UserInfo />,
      }),
      container: highContainer(<ArticleDetail articleId={articleId} />)
    })
  },
  userCenter: new HomeBaseModal({
    UserInfoModal: Modal({
      headerText: '个人资料',
      modalBody: <UserInfo />,
    }),
    container: highContainer(<Content />)
  })
}

export default HomeModal

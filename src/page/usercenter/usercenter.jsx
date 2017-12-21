import React from 'react'

import Content from '../../component/content/content'
import highContainer from '../../share/highlevel/container/container'
import highHome from '../../share/highlevel/home/home'
import UserInfo from '../../component/userinfo/userinfo'
import Modal from '../../share/highlevel/modal/modal'

import * as highlevel from '../../share/highlevel/container/container'

import './usercenter.scss'

function UserCenter() {
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
    container: highContainer(<Content />)
  }
  const Home = highHome(data)
  return (
    <div>
      <Home />
    </div>
  )
}

export default UserCenter

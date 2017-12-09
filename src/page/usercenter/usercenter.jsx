import React from 'react'

import Header from '../../component/header/header'
import Content from '../../component/content/content'
import Navbar from '../../component/navbar/navbar'
import Menu from '../../share/component/menu/menu'
import Layout from '../../share/component/layout/layout'

import * as highlevel from '../../share/highlevel/container/container'

import './usercenter.scss'

function UserCenter() {
  let title = "万事不顺屋"
  let menuItem = [
    '个人中心',
    '收藏',
    '消息'
  ]
  return (
    <div>
      <Header title={title} />
      <Navbar />
      { highlevel.highContainer(<Content />) }
      <Menu items={menuItem} />
      <Layout />
    </div>
  )
}

export default UserCenter

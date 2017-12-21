import React from 'react'

import Header from '../../../component/header/header'
import Footer from '../../../component/footer/footer'
import Navbar from '../../../component/navbar/navbar'
import UserInfo from '../../../component/userinfo/userinfo'
import LivingRoom from '../../../component/livingroom/livingroom'

import Layout from '../../component/layout/layout'
import Menu from '../../component/menu/menu'

import Modal from '../modal/modal'

// !这个组件应该封装在component或者container中
function highHome({ title, menuItem, UserInfoModal, container }) {
  return function Home() {
    return (
      <div className="app">
        <Header title={title} />
        <Navbar />
        {container}
        <Footer />
        <Layout />
        <Menu items={menuItem} />
        <UserInfoModal />
      </div>
    )
  }
}

export default highHome

import React from 'react'

import Header from '../../component/header/header'
import Content from '../../component/content/content'
import Navbar from '../../component/navbar/navbar'

import * as highlevel from '../../share/highlevel/container/container'

import './usercenter.scss'

function UserCenter() {
  let title = "万事不顺屋"
  return (
    <div>
      <Header title={title} />
      <Navbar />
      {/* <Containter /> */}
      { highlevel.highContainer(<Content />) }
    </div>
  )
}

export default UserCenter

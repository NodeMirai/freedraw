import React from 'react'

import Header from '../../components/header/header'
import Content from '../../components/content/content'
import * as highlevel from '../../share/highlevel/container'

import './usercenter.scss'

function UserCenter() {
  let title = "万事不顺屋"
  return (
    <div>
      <Header title={title} />
      {/* <Containter /> */}
      { highlevel.highContainer(<Content />) }
    </div>
  )
}

export default UserCenter

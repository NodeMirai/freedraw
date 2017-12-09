import React from 'react'

import Header from '../../components/header/header'
import Containter from '../../components/container/container'

import './usercenter.scss'

function UserCenter() {
  let title = "万事不顺屋"
  return (
    <div>
      <Header title={title} />
      <Containter />
    </div>
  )
}

export default UserCenter

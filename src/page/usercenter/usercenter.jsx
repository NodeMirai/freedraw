import React from 'react'

import highHome from '../../share/highlevel/home/home'
import HomeModal from '../../modal/homemodal'

import './usercenter.scss'

function UserCenter() {
  const Home = highHome(HomeModal.userCenter)
  return (
    <div>
      <Home />
    </div>
  )
}

export default UserCenter

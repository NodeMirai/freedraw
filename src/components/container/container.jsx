import React from 'react'

import Content from '../content/content'
import Chat from '../chat/chat'
import './container.scss'

// 无状态函数组件
function Container() {
  return (
    <main className="clearfix container">
      <Content />
      <Chat />
    </main>
  )
}

export default Container
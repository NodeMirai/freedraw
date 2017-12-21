/**
 * 为复用容器组件，该模块对外暴露一个函数
 * @param 子组件
 * @returns 容器组件
 */
import React from 'react'
import './container.scss'

function highContainer(child) {
  return (function Container() {
    return (
      <main>
        { child }
      </main>
    )
  })()
}

export default highContainer

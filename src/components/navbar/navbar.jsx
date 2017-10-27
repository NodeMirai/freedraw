import React from 'react'

// 创建属性校验


// 无状态函数组件
function Navbar(props) {
  return (
    <nav>
      <h1 className="title">
        <a href="#title">{ props.title }</a>
      </h1>
    </nav>
  )
}

module.exports = Navbar

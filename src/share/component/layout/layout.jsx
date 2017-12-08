import React from 'react'
import { connect } from 'react-redux'
import * as menuAction from '../../../redux/action/menu'

import './layout.scss'

function Layout(props) {
  let { showMenu, menu } = props

  return (
    <div className="layout" style={{ display: menu.isMenuShow ? 'block':'none' }} onMouseEnter={ showMenu.bind(null, false) } ></div>
  )

}

Layout = connect(
  (state) => state,
  menuAction
)(Layout)

export default Layout

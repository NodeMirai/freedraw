import React from 'react'
import { connect } from 'react-redux'
import * as menuAction from '../../../redux/action/menu'

import './menu.scss'

function Menu(props) {
  let { items, showMenu, menu } = props

  return (
    <ul className="user--menu" style={{ display: menu.isMenuShow ? 'block' : 'none' }} onMouseEnter={showMenu.bind(null, true)} >
      {
        items.map(val => <li key={val}><a>{ val }</a></li>)
      }
    </ul>
  )
}

Menu = connect(
  (state) => state,
  menuAction,
)(Menu)

export default Menu

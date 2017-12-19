import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as menuAction from '../../../redux/action/menu'

import './menu.scss'

function Menu(props) {
  let { items, showMenu, menu } = props

  return (
    <ul className="user__menu" style={{ display: menu.isMenuShow ? 'block' : 'none' }} onMouseEnter={showMenu.bind(null, true)} >
      {
        items.map(val => <li key={val}><Link to="/index/usercenter">{ val }</Link></li>)
      }
    </ul>
  )
}

Menu = connect(
  (state) => state,
  menuAction,
)(Menu)

export default Menu

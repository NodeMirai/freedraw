import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './login.scss'

import $ from 'jquery'

// 用户名与密码必填且合法校验
const propTypes = {
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    let type = parseInt(props.match.params.type, 10)
    this.state = {
      username: '',      //  登陆状态
      password: '',
      type: type,  // 1:登陆 2:注册
      isUsernameRepeat: false,
    }
  }

  changeTab() {
    let type = this.state.type
    if (type === 2) {
      this.setState({
        type: 1
      })
    } else {
      this.setState({
        type: 2
      })
    }
  }

  // 失去焦点后查询用户名是否重复，重复则提示
  checkUsername() {
    let username = this.refs.loginUsername.value
    $.get(`/user/${username}`, (data, status) => {
      if (data.status === 200) {
        if (data.data) {
          this.setState({
            isUsernameRepeat: true
          })
        } else[
          this.setState({
            isUsernameRepeat: false
          })
        ]
      } else {
        this.setState({
          isUsernameRepeat: false
        })
      }
    })
  }

  register() {
    let username = this.refs.loginUsername.value
    let password = this.refs.password.value
    $.ajax({
      url: '/user',
      type: 'POST',
      dataType: 'json',
      data: {
        username: username,
        password: password,
      },
      success: (data) => {
        alert(data.message)
        this.refs.loginUsername.value = ''
        this.refs.password.value = ''
        // 跳转至首页
        window.location.href = '/'
      },
    })
  }

  render() {
    let { type, isUsernameRepeat } = this.state

    let tabContent = type === 2 ?
      (
        <div className="tab-content">
          <div className="username">
            <input type="text" ref="loginUsername" placeholder="用户名" onBlur={() => this.checkUsername()} />
          </div>

          <div className="password">
            <input type="password" ref="password" placeholder="密码" />
          </div>
          {
            isUsernameRepeat && <p style={{ color: 'rgb(255, 0, 0)' }}>用户名重复</p>
          }
          <button onClick={() => this.register()}>注册</button>
        </div>
      )
      :
      (
        <div className="tab-content">
          <div className="username">
            <input type="text" ref="registerUsername" placeholder="用户名" />
          </div>

          <div className="password">
            <input type="password" ref="password" placeholder="密码" />
          </div>
          <button>登陆</button>
        </div>
      )
    return (
      <div className="login">
        <h1>
          <Link to="/"> 万事不顺屋 </Link>
        </h1>
        <div className="tab">
          <div className="tab-head">
            <h3>
              <a className={type === 2 ? 'unclicked' : 'clicked'} onClick={() => this.changeTab()}>登陆</a>
              <a className={type === 2 ? 'clicked' : 'unclicked'} onClick={() => this.changeTab()}>注册</a>
            </h3>
          </div>
          { tabContent }
        </div>
      </div>
    )
  }
}

Login.propTypes = propTypes
export default Login

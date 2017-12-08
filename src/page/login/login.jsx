import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './login.scss'
import * as loginService from './login.service'
// 用户名与密码必填且合法校验
const propTypes = {
}

@connect(
  (loginData) => (loginData.login),
  require('../../redux/action/login'),
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    let type = parseInt(props.match.params.type, 10)
    let changeType = props.changeType
    changeType(type)
  }

  changeTab() {
    let { type, changeType} = this.props
    if (type === 2) {
      changeType(1)
    } else {
      changeType(2)
    }
  }

  // 失去焦点后查询用户名是否重复，重复则提示
  checkUsername() {
    let username = this.refs.registerUsername.value
    let { checkUsername } = this.props
    checkUsername(username)
  }

  register() {
    let username = this.refs.registerUsername.value
    let password = this.refs.registerPassword.value
    let { register } = this.props
    loginService.register(username, password)
      .then(data => {
        alert(data.message)
        this.refs.loginUsername.value = ''
        this.refs.password.value = ''
        // 跳转至首页
        window.location.href = '/'
      })
      .catch(() => {
        console.error(err)
      })
  }

  login() {
    let username = this.refs.loginUsername.value
    let password = this.refs.loginPassword.value

    loginService.login(username, password)
      .then(data => {
        /**
         * 登陆成功后将获取的token存在sessionStorage中，用于判断登陆状态
         * 同时跳转至首页
         */
        let token = data.token
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('avatar', "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg")
        location.href = '/'
        // 存储用户信息至sessionStorage中，例如用户头像

      })
      .catch(err => console.error(err))
  }

  render() {
    let { type, isUsernameRepeat } = this.props

    let tabContent = type === 2 ?
      (
        <div className="tab-content">
          <div className="username">
            <input type="text" ref="registerUsername" placeholder="用户名" onBlur={() => this.checkUsername()} />
          </div>

          <div className="password">
            <input type="password" ref="registerPassword" placeholder="密码" />
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
            <input type="text" ref="loginUsername" placeholder="用户名" />
          </div>

          <div className="password">
            <input type="password" ref="loginPassword" placeholder="密码" />
          </div>
          <button onClick={() => this.login()}>登陆</button>
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
          {tabContent}
        </div>
      </div>
    )
  }
}

Login.propTypes = propTypes
export default Login

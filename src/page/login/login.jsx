import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './login.scss'

// 用户名与密码必填且合法校验
const propTypes = {
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',      //  登陆状态
      password: '',
      isLogin: false,   //  需要路由传值
    }
  }

  changeTab() {
    let isLogin = this.state.isLogin
    this.setState({
      isLogin: !isLogin
    })
  }

  render() {
    let { isLogin } = this.state

    let loginBtn = isLogin ? (<button>注册</button>) : (<button>登陆</button>)
    return (
      <div className="login">
        <h1>
          <Link to="/"> 万事不顺屋 </Link>
        </h1>
        <div className="tab">
          <div className="tab-head">
            <h3>
              <a className={isLogin ? 'unclicked' : 'clicked'} onClick={() => this.changeTab()}>登陆</a>
              <a className={isLogin ? 'clicked' : 'unclicked'} onClick={() => this.changeTab()}>注册</a>
            </h3>
          </div>
          <div className="tab-content">
            <div className="username">
              <input type="text" placeholder="用户名" />
            </div>
            <div className="password">
              <input type="text" placeholder="密码" />
            </div>
            {loginBtn}
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = propTypes
export default Login

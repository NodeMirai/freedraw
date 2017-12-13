import React from 'react'
import { connect } from 'react-redux'

import './userinfo.scss'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <form className="userinfo">
        <section className="userinfo__avatar">
          <label>头像</label>
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg" alt="" />
          <button>上传新头像</button>
          <p>支持JPG, BMP, PNG格式，最大不超过1M</p>
        </section>
        <section className="userinfo__nickname">
          <label>昵称:</label>
          <input type="text" />
        </section>
        <section className="userinfo__sex">
          <label>性别</label>
          <span><input type="radio" name="sex" value="1" defaultChecked/>男</span>
          <span><input type="radio" name="sex" value="0" />女</span>
        </section>
        <section className="userinfo__birthday">
          <label>生日</label>
          <select name="year">
            <option value="1960">1960</option>
          </select>
          年
          <select name="month">
            <option value="1">1</option>
          </select>
          月
          <select name="day">
            <option value="12">12</option>
          </select>
          日
        </section>
        <section className="userinfo__btn">
          <button className="userinfo__btn__save">保存</button>
          <button className="userinfo__btn__concel">取消</button>
        </section>
      </form>
    )
  }
}

export default UserInfo

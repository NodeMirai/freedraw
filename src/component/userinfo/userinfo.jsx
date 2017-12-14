import React from 'react'
import { connect } from 'react-redux'

import fetchAPI from '../../share/util/fetchAPI'
import indexAction from '../../redux/action/index'

import './userinfo.scss'

@connect(
  (state) => state,
  (dispatch) => (
    {
      showModalToggle(isModalShow) {
        dispatch(indexAction.modalAction.modalToggle(isModalShow))
      },
    }
  )
)
class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      img: '',
      year: 1990,
      month: 6,
      day: 1,
      sex: '1',
    }
  }

  componentWillMount() {

    fetchAPI('/api/user', { method: 'GET' }, (result) => {
      if (result.status === 200) {
        let birthday = new Date(result.data.birthday)
        this.setState({
          nickname: result.data.nickname || '',
          img: result.data.img || '',
          year: birthday.getFullYear(),
          month: birthday.getMonth() + 1,
          day: birthday.getDate(),
          sex: (result.data.sex || '') + '1',
        })
      }
    })
  }

  /*******  表单验证区域  ********/
  handleNickName(e) {
    console.log(e.target.value)
    this.setState({ nickname: e.target.value })
  }

  handleSex(e) {
    console.log(e.target.value)
    this.setState({ sex: e.target.value })
  }

  handleYear(e) {
    console.log(e.target.value)
    this.setState({ year: e.target.value })
  }

  handleMonth(e) {
    console.log(e.target.value)
    this.setState({ month: e.target.value })
  }

  handleDay(e) {
    console.log(e.target.value)
    this.setState({ day: e.target.value })
  }

  updateInfo() {
    let { nickname, sex, year, month, day, img } = this.state
    let file = this.refs.file.files[0]

    fetchAPI('/api/user', { method: 'PUT', data: { nickname, sex, birthday: new Date(year, month, day), img } }, (data) => {
      if (data.status === 200) {
        console.log(data)

        // 文件上传
        console.log(file)
        var fd = new FormData();
        fd.append('file', file);
        var ext = file.name.substring(file.name.lastIndexOf('.'));
        fd.append('extention', ext);
        fd.append('maxsize', 1024 * 1024 * 4);// 默认一次上传最大4MB
        fd.append('isClip', -1);
        console.log(fd.get('file'))
        fetch('/api/upload', { method: 'POST', headers: { Authorization: sessionStorage.getItem('token'), }, body: fd })
          .then(result => console.log(result))
      }
    })

  }

  viewAvatar() {
    let img = this.refs.avatarImg
    let file = this.refs.file.files[0]

    let viewloader = new FileReader()
    let fileloader = new FileReader()
    viewloader.onloadend = () => {
      if (viewloader.readyState === fileloader.DONE) {
        this.setState({
          img: viewloader.result,
        })
      }
    }

    viewloader.readAsDataURL(file)
  }

  render() {
    let { nickname, sex, year, month, day, img } = this.state
    let showModalToggle = this.props.showModalToggle
    return (
      <form className="userinfo">
        <section className="userinfo__avatar">
          <label>头像</label>
          <img src={img} alt="头像" ref="avatarImg" />
          <input type="file" ref="file" readOnly onChange={this.viewAvatar.bind(this)} />
          <p>支持JPG, BMP, PNG格式，最大不超过1M</p>
        </section>
        <section className="userinfo__nickname">
          <label>昵称:</label>
          <input type="text" value={nickname} onChange={this.handleNickName.bind(this)} />
        </section>
        <section className="userinfo__sex">
          <label>性别</label>
          <span><input type="radio" name="sex" value="1" checked={sex === '1'} onChange={this.handleSex.bind(this)} />男</span>
          <span><input type="radio" name="sex" value="0" checked={sex === '0'} onChange={this.handleSex.bind(this)} />女</span>
        </section>
        <section className="userinfo__birthday">
          <label>生日</label>
          <select name="year" value={year} onChange={this.handleYear.bind(this)}>
            <option value="1960">1960</option>
            <option value="1990">1990</option>
            <option value="2000">2000</option>
          </select>
          年
          <select name="month" value={month} onChange={this.handleMonth.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="6">6</option>
          </select>
          月
          <select name="day" value={day} onChange={this.handleDay.bind(this)}>
            <option value="1">1</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          日
        </section>
        <section className="userinfo__btn">
          <button className="userinfo__btn__save" onClick={this.updateInfo.bind(this)} type="button">保存</button>
          <button className="userinfo__btn__concel" onClick={showModalToggle.bind(null, false)} type="button">取消</button>
        </section>
      </form>
    )
  }
}

export default UserInfo

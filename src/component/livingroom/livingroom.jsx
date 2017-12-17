import React from 'react'
import { connect } from 'react-redux'

import * as livingroomAction from '../../redux/action/livingroom'

import dateUtil from '../../share/util/date'
import './livingroom.scss'

@connect(
  (state) => state.livingroom,
  livingroomAction
)
class LivingRoom extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // 获取文章列表，视频列表，图片列表
    let getArticles = this.props.getArticles
    getArticles()
  }

  render() {
    let { articleList } = this.props
    return (
      <div className="livingroom">
        {/* 文章列表 */}
        <h2>文章</h2>
        <ul className="article-list">
          {
            articleList.map(val => {
              return (
                <li key={val._id}>
                  <img src={val.user.avatar} alt="头像" />
                  <strong>{val.user.nickname}</strong>
                  <time>{dateUtil.format(new Date(val.datetime))}</time>
                  <h3>{val.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: val.content }}></p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default LivingRoom

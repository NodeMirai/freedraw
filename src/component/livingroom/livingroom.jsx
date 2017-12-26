import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
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

  componentDidMount() {
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
                  <div className="author-info">
                    <img src={val.user.avatar} alt="头像" />
                    <strong className="author__nickname">{val.user.nickname}</strong>
                    <time>{dateUtil.format(new Date(val.datetime))}</time>
                  </div>
                  <Link className="article-list__item__title" to={"/index/article/detail/" + val._id}>{val.title}</Link>
                  <p dangerouslySetInnerHTML={{ __html: val.digest }}></p>
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

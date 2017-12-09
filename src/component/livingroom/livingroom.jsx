import React from 'react'
import { connect } from 'react-redux'

import * as livingroomAction from '../../redux/action/livingroom'

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
      <div>
        {/* 文章列表 */}
        <ul>
          {
            articleList.map(val => {
              return (
                <li key={ val._id }>
                  <h2>{ val.title }</h2>
                  <p dangerouslySetInnerHTML={{__html: val.content}}></p>
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

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
    articleList = [
      {
        _id: 1,
        title: '第一条诗句',
        content: '<p>今天天气真不错呵呵</p>',
        author: '小狼',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg',
        time: '1小时前'
      },{
        _id: 2,
        title: '第一条诗句',
        content: '<p>今天天气真不错呵呵</p>',
        author: '小狼',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg',
        time: '1小时前'
      },{
        _id: 3,
        title: '第一条诗句',
        content: '<p>今天天气真不错呵呵</p>',
        author: '小狼',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg',
        time: '1小时前'
      },{
        _id: 4,
        title: '第一条诗句',
        content: '<p>今天天气真不错呵呵</p>',
        author: '小狼',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg',
        time: '1小时前'
      },{
        _id: 5,
        title: '第一条诗句',
        content: '<p>今天天气真不错呵呵</p>',
        author: '小狼',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1870247392,1316906891&fm=27&gp=0.jpg',
        time: '1小时前'
      }
    ]
    return (
      <div className="livingroom">
        {/* 文章列表 */}
        <h2>文章</h2>
        <ul className="article-list">
          {
            articleList.map(val => {
              return (
                <li key={ val._id }>
                  <img src={val.img} alt="头像"/>
                  <strong>小狼</strong>
                  <time>{ val.time }</time>
                  <h3>{ val.title }</h3>
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

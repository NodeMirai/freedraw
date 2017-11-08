import React from 'react'
import $ from 'jquery'
import Simditor from 'simditor'
import 'style-loader!css-loader!../../../node_modules/simditor/styles/simditor.css'
import './article.scss'

import moment from 'moment'
import config from '../../../config'

class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      editor: null,
      articleList: [],
      article: {}   // 当前选中文章
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    let editor = this.state.editor
    // 查找textarea dom
    editor = new Simditor({
      textarea: this.refs.article
    })
    this.setState({
      editor
    })
    // 调用查询文章列表接口
    $.get('/article/', (data, status) => {
      if (data.status === 200) {
        this.setState({
          articleList: data.data
        })
      }
    })
  }

  addArticle() {
    let { articleList, article, editor } = this.state

    article = {
      title: '无',
      content: '',
      type: '',
      datetime: moment().format('YYYY-MM-DD')
    }
    $.post('/article/', article, (data, status) => {
      if (status === 200) {
        // 添加完成后获取最新列表
        $.get('/article/', (data, status) => {
          if (data.status === 200) {
            this.setState({
              articleList: data.data
            })
          }
        })
      }
    })
    articleList.push()

    this.setState({
      articleList,
    })
  }

  // 点击已存在的文章时现实文章内容
  clickArticle(title,content) {
    // 获取simditor实例
    let {editor} = this.state
    editor.setValue(content)
    this.refs.title = title
  }

  render() {
    // 获取文章列表 articleList
    let { article ,articleList, editor } = this.state

    articleList = articleList.map((val) => {
      return (
        <li className="clearfix" onClick={ this.clickArticle.bind(this, val.title, val.content) }>
          <h3 className="article-title">{ val.title }</h3>
          <i className="article-datetime">{ val.datetime }</i>
        </li>
      )
    })

    return (
      <section id="article">
        <ul className="article-list">
          <a className="add-article" onClick={ this.addArticle.bind(this) }>新建文章</a>
          { articleList }
        </ul>
        <form className="editor">
          <input className="editor-title" name="title" type="text" ref="title" defaultValue="" placeholder="请输入标题"/>
          <textarea ref="article" defaultValue=""></textarea>
        </form>
      </section>
    )
  }

}

export default Article

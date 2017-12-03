import React from 'react'
import { connect } from 'react-redux'

import Simditor from 'simditor'
import 'style-loader!css-loader!../../../node_modules/simditor/styles/simditor.css'
import './article.scss'

import moment from 'moment'
import config from '../../../config'

import * as articleService from './article.service'

/**
 * 使用connect装饰器直接增强组件
 * 参数同connect中的参数，被注释的组件则为增强组件
 */
@connect(
  (articleData) => (articleData.article),
  require('../../action/article')
)
class Article extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentWillMount() {

  }

  // 模版渲染完成后开始渲染初始数据
  componentDidMount() {
    let { editor, getArticle } = this.props
    // 查找textarea dom
    editor = new Simditor({
      textarea: this.refs.article
    })
    this.setState({
      editor
    })
    getArticle()
  }

  // 新增文章
  addArticle() {
    let { addArticle } = this.props
    let article = {
      title: '无',
      content: '',
      type: '',
      datetime: moment().format('YYYY-MM-DD')
    }
    addArticle(article)
  }

  // 初始化当前文章状态
  initArticle() {
    let { article } = this.props
    let editor = this.state.editor
    // 清空title与editor
    this.refs.title.value = ''
    editor.setValue('')
  }

  // 删除文章
  removeArticle(id) {
    let editor = this.state.editor
    let { deleteArticle } = this.props
    deleteArticle(id)
    editor.setValue('')
    this.refs.title.value = ''
  }

  // 更新文章
  updateArticle(id, title, content) {
    let { updateArticle } = this.props
    let editor = this.state.editor
    let article = {
      id: id,
      title, title,
      content: content,
    }
    updateArticle(article)
    editor.setValue(content)
    this.refs.title.value = title
  }

  // 点击已存在的文章时现实文章内容
  clickArticle(id) {

    // 获取simditor实例
    let { editor } = this.state
    let { articleList, selectArticle } = this.props
    let article = articleList.find(val => val._id === id)
    editor.setValue(article.content)
    this.refs.title.value = article.title
    selectArticle(id) //
  }

  render() {
    // 获取文章列表 articleList
    let { article, articleList, editor, } = this.props
    let toolbar =  [
      {
        text: '保存',
        onclick: (id) => {
          // 调用修改文章接口
          this.updateArticle(article._id, this.refs.title.value, this.state.editor.getValue())
        }
      }, {
        text: '删除',
        onclick: (id) => {
          // 删除接口
          this.removeArticle(article._id)
        }
      }
    ]
    if (!article) {
      article = articleList[0]  // 默认显示第一个文章，如果文章列表无文章则不显示
    }

    // 工具栏数据,当点击文章后才会出现
    if (article) {
      toolbar = toolbar.map((val) => {
        return (
          <li key={val.text} onClick={val.onclick.bind(this)}>{val.text}</li>
        )
      })
    } else {
      toolbar = []
    }

    // 文章列表数据
    articleList = articleList.map((val) => {
      // datetime时间格式化
      let formatTime = moment(val.datetime).format('YYYY-MM-DD')

      return (
        <li className="clearfix" key={val._id} onClick={this.clickArticle.bind(this, val._id)}>
          <h3 className="article-title">{val.title}</h3>
          <i className="article-datetime">{formatTime}</i>
        </li>
      )
    })

    return (
      <section id="article">
        <section className="article-list">
          <a className="add-article" onClick={this.addArticle.bind(this)}>
            <i className="fa fa-plus-circle" style={{ marginRight: .5 + 'rem' }}></i>新建文章
          </a>
          <ul className="list p0 m0">
            {articleList}
          </ul>
        </section>
        <form className="editor-area">
          <input className="editor-title" name="title" type="text" ref="title" defaultValue="" placeholder="请输入标题" />
          <ul className="toolbar clearfix m0">
            {/* 操作工具栏，后期需要支持word或者excel导入导出，以及其他扩展功能，需要保存在状态中 */}
            {toolbar}
          </ul>
          <div className="editor">
            <textarea ref="article" defaultValue=""></textarea>
          </div>
        </form>
      </section>
    )
  }

}

export default Article

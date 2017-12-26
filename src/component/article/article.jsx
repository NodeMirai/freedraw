import React from 'react'
import { connect } from 'react-redux'

import moment from 'moment'
import config from '../../../config'
import wangeditor from 'wangeditor'
import * as articleService from './article.service'
import './article.scss'

/**
 * 使用connect装饰器直接增强组件
 * 参数同connect中的参数，被注释的组件则为增强组件
 */
@connect(
  (articleData) => (articleData.article),
  require('../../redux/action/article')
)
class Article extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { getArticle } = this.props
    let editor = new wangeditor(this.refs.toolbar, this.refs.article)

    getArticle()
    editor.create()
    this.setState({
      editor
    })

  }

  componentWillUnmount() {
    let selectArticle = this.props.selectArticle
    selectArticle('')
  }

  addArticle() {
    let { getArticle } = this.props
    let article = {
      title: '无',
      content: '',
      type: '',
      datetime: moment().format('YYYY-MM-DD')
    }
    articleService
      .addArticle(article)
      .then(() => getArticle())
  }

  // 初始化当前文章状态
  initArticle() {
    let editor = this.state.editor
    // 清空title与editor
    this.refs.title.value = ''
    editor.txt.clear()
  }

  removeArticle(id) {
    let { getArticle, selectArticle } = this.props
    articleService
      .removeArticle(id)
      .then(() => {
        selectArticle('')
        this.initArticle()
        getArticle()
      })
  }

  updateArticle(id) {
    let { getArticle } = this.props
    let editor = this.state.editor
    let contentText = editor.txt.text()
    let article = {
      id: id,
      title: this.refs.title.value,
      content: editor.txt.html(),
      digest: contentText.slice(0, 100),
      words: contentText.length,
    }
    articleService
      .updateArticle(article)
      .then(() => getArticle())
  }

  clickArticle(id) {
    let { editor } = this.state
    let { articleList, selectArticle } = this.props
    let article = articleList.find(val => val._id === id)

    selectArticle(id)

    editor.txt.html(article.content)
    this.refs.title.value = article.title
  }

  render() {
    let { currentId, articleList, } = this.props
    let currentArticle = {}, toolbar = []

    /**
     * 待优化，思考是否可以只在每次初始化时
     */
    if (currentId) {
      toolbar = [
        {
          text: '保存',
          onclick: (id) => {
            this.updateArticle(id)
          }
        }, {
          text: '删除',
          onclick: (id) => {
            this.removeArticle(id)
          }
        }
      ]
    }

    return (
      <section id="article">

        <section className="article-list">
          <a className="add-article" onClick={this.addArticle.bind(this)}>
            <i className="fa fa-plus-circle" style={{ marginRight: .5 + 'rem' }}></i>新建文章
          </a>
          <ul className="list p0 m0">
            {
              articleList.map((val) => {
                // datetime时间格式化
                let formatTime = moment(val.datetime).format('YYYY-MM-DD')

                return (
                  <li className="clearfix" key={val._id} onClick={this.clickArticle.bind(this, val._id)}>
                    <h3 className="article-title">{val.title}</h3>
                    <i className="article-datetime">{formatTime}</i>
                  </li>
                )
              })
            }
          </ul>
        </section>

        <form className="editor-area">
          <input className="editor-title" name="title" type="text" ref="title" defaultValue="" placeholder="请输入标题" />
          <ul className="toolbar clearfix m0">
            {
              toolbar.map((val) => {
                return (
                  <li key={val.text} onClick={val.onclick.bind(this, currentId)}>{val.text}</li>
                )
              })
            }
          </ul>
          <div ref="toolbar">

          </div>
          <div className="editor" ref="article">
            <p></p>
          </div>
        </form>

      </section>
    )
  }

}

export default Article

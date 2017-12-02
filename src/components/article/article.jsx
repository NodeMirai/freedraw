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
      article: {
        title: '',
        content: ''
      },   // 当前选中文章
      toolbar: [
        {
          text: '保存',
          onclick: (article) => {
            // 调用修改文章接口
            this.updateArticle(article._id, this.refs.title.value, this.state.editor.getValue())
          }
        }, {
          text: '删除',
          onclick: (article) => {
            // 删除接口
            this.removeArticle(article._id)
          }
        }
      ]
    }
  }

  componentWillMount() {

  }

  // 模版渲染完成后开始渲染初始数据
  componentDidMount() {
    let editor = this.state.editor
    // 查找textarea dom
    editor = new Simditor({
      textarea: this.refs.article
    })
    this.setState({
      editor
    })
    this.getAllArticle()
  }

  // 查询全部文章
  getAllArticle() {
    // 调用查询文章列表接口
    $.get('/api/article/', (data, status) => {
      if (data.status === 200) {
        this.setState({
          articleList: data.data || []
        })
      }
    })
  }

  // 新增文章
  addArticle() {
    let { articleList, article, editor } = this.state

    article = {
      title: '无',
      content: '',
      type: '',
      datetime: moment().format('YYYY-MM-DD')
    }
    $.post('/api/article/', article, (data, status) => {
      if (data.status === 200) {
        // 添加完成后获取最新列表
        this.getAllArticle()
      }
    })

  }

  // 初始化当前文章状态
  initArticle() {
    let { editor, article } = this.state
    // 清空title与editor
    this.refs.title.value = ''
    editor.setValue('')
  }

  // 删除文章
  removeArticle(id) {
    let editor = this.state.editor
    $.ajax({
      type: 'DELETE',
      url: `/api/article/${id}`,
      dataType: 'json',
      success: (data) => {
        this.getAllArticle()
        this.refs.title.value = ''
        editor.setValue('')
      },
    })
  }

  // 更新文章
  updateArticle(id, title, content) {
    $.ajax({
      type: 'PUT',
      url: `/api/article/`,
      data: {
        id: id,
        title, title,
        content: content,
      },
      dataType: 'json',
      success: (data) => {
        this.getAllArticle()
      },
    })
  }

  // 点击已存在的文章时现实文章内容
  clickArticle(article) {
    // 获取simditor实例
    let { editor } = this.state
    editor.setValue(article.content)
    this.refs.title.value = article.title
    this.setState({
      article
    })
  }

  render() {
    // 获取文章列表 articleList
    let { article, articleList, editor, toolbar } = this.state

    if (!article) {
      article = articleList[0]  // 默认显示第一个文章，如果文章列表无文章则不显示
    }

    // 工具栏数据,当点击文章后才会出现
    if (article) {
      toolbar = toolbar.map((val) => {
        return (
          <li key={val.text} onClick={val.onclick.bind(this, article)}>{val.text}</li>
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
        <li className="clearfix" key={val._id} onClick={this.clickArticle.bind(this, val)}>
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

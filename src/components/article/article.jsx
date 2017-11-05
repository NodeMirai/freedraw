import React from 'react'
import $ from 'jquery'
import Simditor from 'simditor'
import 'style-loader!css-loader!../../../node_modules/simditor/styles/simditor.css'
import './article.scss'

class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      editor: null,
    }
    // 引入文本编辑器

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

  }

  clickArticle(content) {
    // 获取simditor实例
    let editor = this.state.editor
    editor.setValue(content)
  }

  render() {
    // 获取文章列表 articleList
    let articleList = [{
      id: 1,
      title: 'one',
      content: 'one content',
      datetime: '2017-11-05'
    }, {
      id: 2,
      title: 'two',
      content: 'two content',
      datetime: '2017-11-06'
    }, {
      id: 3,
      title: 'three',
      content: 'three content',
      datetime: '2017-11-07'
    }, {
      id: 4,
      title: 'four',
      content: 'four content',
      datetime: '2017-11-08'
    }].map((val) => {
      return (
        <li key={ val.id } className="clearfix" onClick={ this.clickArticle.bind(this, val.content) }>
          <h3 className="article-title">{ val.title }</h3>
          <i className="article-datetime">{ val.datetime }</i>
        </li>
      )
    })

    return (
      <section id="article">
        <ul className="article-list">
          <a className="add-article">新建文章</a>
          { articleList }
        </ul>
        <form className="editor">
          <input className="editor-title" type="text" placeholder="请输入标题"/>
          <textarea ref="article"></textarea>
        </form>
      </section>
    )
  }

}

export default Article

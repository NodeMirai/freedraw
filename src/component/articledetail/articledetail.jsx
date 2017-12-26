import React from 'react'

import fetchAPI from '../../share/util/fetchAPI'

class ArticleDetail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      detail: {
        title: '',
        content: ''
      },
      articleId: props.articleId
    }
  }

  componentDidMount() {
    let articleId = this.state.articleId
    fetchAPI(`/api/index/article/${articleId}`,{method:'GET'}, (result) => {
      if (result.status === 200) {
        this.setState({
          detail: result.data,
        })
      }
    })
  }

  render() {
    let { detail } = this.state
    return (
      <section className="article__detail">
        <h2>{detail.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: detail.content }}></p>
      </section>
    )
  }
}

export default ArticleDetail

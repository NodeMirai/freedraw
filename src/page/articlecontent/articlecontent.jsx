import React from 'react'

import highHome from '../../share/highlevel/home/home'
import HomeModal from '../../model/homemodel'

import './articlecontent.scss'

function ArticleContent(props) {
  let articleId = props.match.params.articleId

  const Home = highHome(HomeModal.articleContent(articleId))
  return (
    <div>
      <Home />
    </div>
  )
}

export default ArticleContent

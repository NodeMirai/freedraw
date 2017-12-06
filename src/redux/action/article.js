/**
 * 文章action
 * 目前主要为查询，新增，选择，修改，删除5个action
 * action creator参数主要用来传给state，因此在设计参数时需要知道每个行为对state的影响
 * 然后再考虑传递参数
 */
import * as articleService from '../../components/article/article.service'

export const GET_ARTICLE = 'GET_ARTICLE'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

function getDisArticle(articleList) {
  return { type: GET_ARTICLE, articleList }
}

export function getArticle() {
  return dispatch =>
    articleService.getAllArticle()
      .then(articleList => dispatch(getDisArticle(articleList)))
      .catch(err => console.error(err))

}

// 新增后需要通过dispatch处罚GET_ARTICLE ACTION
export function addArticle(article) {
  return dispatch => {
    articleService.addArticle(article)
      .then(() => articleService.getAllArticle())
      .then((articleList) => dispatch(getDisArticle(articleList)))
  }
}

export function selectArticle(id) {
  return { type: SELECT_ARTICLE, id }
}

export function updateArticle(article) {
  return dispatch => {
    articleService.updateArticle(article)
      .then(() => articleService.getAllArticle())
      .then((articleList) => dispatch(getDisArticle(articleList)))
  }
}

// { type: UPDATE_ARTICLE, article: article }

export function deleteArticle(id) {
  return dispatch => {
    articleService.removeArticle(id)
      .then(() => articleService.getAllArticle())
      .then((articleList) => dispatch(getDisArticle(articleList)))
  }
}

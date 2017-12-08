/**
 * 文章action
 * 目前主要为查询，新增，选择，修改，删除5个action
 * action creator参数主要用来传给state，因此在设计参数时需要知道每个行为对state的影响
 * 然后再考虑传递参数
 */
import * as articleService from '../../components/article/article.service'

export const GET_ARTICLE = 'GET_ARTICLE'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'

export function getArticle() {
  return dispatch =>
    articleService.getAllArticle()
      .then(articleList => dispatch({ type: GET_ARTICLE, articleList }))
      .catch(err => console.error(err))
}

export function selectArticle(id) {
  return { type: SELECT_ARTICLE, id }
}

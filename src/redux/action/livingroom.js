import * as livingroomService from '../../component/livingroom/livingroom.service'

export const GET_ARTICLES = 'GET_ARTICLES'

export function getArticles(articleList) {
  return dispatch => {
    livingroomService
      .getAllArticle()
      .then((articleList) =>
        dispatch({ type: GET_ARTICLES, articleList })
      )
  }
}

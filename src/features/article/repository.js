import { fetchAPI } from '@lib/api'

export function getArticles({ keyword, start, limit }) {
  return fetchAPI({
    path: '/articles',
    params: { q: keyword, _start: start, _limit: limit },
  })
}

export function getArticleById(id) {
  return fetchAPI({
    path: `/articles/${id}`,
  })
}

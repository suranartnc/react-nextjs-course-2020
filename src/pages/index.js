import React from 'react'
import withPage from '@lib/page/withPage'
import * as ArticleService from '@features/article/services'

function HomePage({ data }) {
  return (
    <div>
      <h1>Latest Articles</h1>

      <ul>
        {data.map(article => {
          return <li key={article.id}>{article.title}</li>
        })}
      </ul>
    </div>
  )
}

HomePage.getInitialProps = async function() {
  const data = await ArticleService.getArticles()

  return {
    data,
  }
}

export default withPage()(HomePage)

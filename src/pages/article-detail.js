import React from 'react'
import withPage from '@lib/page/withPage'

function ArticleDetailPage({ data }) {
  return (
    <article>
      <h1>{data.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </article>
  )
}

export default withPage()(ArticleDetailPage)

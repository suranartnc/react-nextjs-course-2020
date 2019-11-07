import React from 'react'
import { Flex, Box } from '@grid'

import withPage from '@lib/page/withPage'
import { Fetch } from '@lib/api'

import * as AlbumService from '@features/album/services'

function AlbumDetailPage({ articleDetail }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 2 / 3]} pr={[0, 20]}></Box>
    </Flex>
  )
}

AlbumDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await AlbumService.getNewReleases(query.id)

  return {
    title: articleDetail.title,
    meta: {
      description: articleDetail.excerpt,
      keywords: articleDetail.tags.join(', '),
      'og:title': articleDetail.title,
      'og:description': articleDetail.excerpt,
    },
    stats: {
      gtm: {
        customDimensions: {
          customDM1: articleDetail.author.name,
          customDM2: articleDetail.pubDate,
        },
      },
    },
    breadcrumb: [
      {
        label: articleDetail.title,
        route: {
          name: 'article-detail',
          params: {
            id: articleDetail.id,
          },
        },
      },
    ],
    articleDetail,
  }
}

export default withPage()(AlbumDetailPage)

import React from 'react'
import { Flex, Box } from '@grid'

import Link from '@link'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as SearchService from '@features/search/services'

function SearchPage() {
  const { token } = useMember()

  if (token === null) {
    return null
  }
  const q = 'blackpink'

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Fetch service={() => SearchService.getSearchResults(q, { token })}>
        {({ data }) =>
          data.items.map(playlist => (
            <Box width={1 / 6} px={10} py={10} key={playlist.id}>
              <article>
                <Link route="playlist-detail" params={{ id: playlist.id }}>
                  <a>
                    <img src={playlist.images[0].url} />
                  </a>
                </Link>
                <h3
                  css={{
                    fontSize: '0.8em',
                    fontWeight: 'bold',
                    lineHeight: '1.5',
                    marginTop: '10px',
                    textAlign: 'center',
                  }}>
                  <Link route="playlist-detail" params={{ id: playlist.id }}>
                    <a>{playlist.name}</a>
                  </Link>
                </h3>
              </article>
            </Box>
          ))
        }
      </Fetch>
    </Flex>
  )
}

export default withPage({ restricted: true })(SearchPage)

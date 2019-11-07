import React, { useState, Fragment } from 'react'
import { Flex, Box } from '@grid'
import Link from '@link'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as SearchService from '@features/search/services'

import colors from '@features/_ui/colors'

function SearchPage() {
  const { token } = useMember()
  const [keyword, setKeyword] = useState('')

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1}>
        <input
          type="text"
          value={keyword}
          placeholder="Search for artists, albums or playlists..."
          css={{
            padding: '15px 20px',
            borderRadius: '40px',
            border: 'none',
            width: '500px',
          }}
          onChange={e => {
            setKeyword(e.target.value)
          }}
        />
      </Box>

      {keyword !== '' && (
        <Fetch
          service={() =>
            SearchService.getSearchResults(keyword, { token, limit: 6 })
          }>
          {({ data }) => {
            return (
              <Fragment>
                <ResultRow
                  title="Albums"
                  data={data.albums.items}
                  route="album-detail"
                />
                <ResultRow
                  title="Playlists"
                  data={data.playlists.items}
                  route="playlist-detail"
                />
              </Fragment>
            )
          }}
        </Fetch>
      )}
    </Flex>
  )
}

function ResultRow({ title, data, route }) {
  return (
    <Fragment>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '1.8em',
            padding: '50px 10px 0px',
          }}>
          {title}
        </h1>
      </Box>
      <Box width={1}>
        <Flex flexWrap="wrap">
          {data.map(item => (
            <Box width={1 / 6} px={10} py={20} key={item.id}>
              <article>
                <Link route={route} params={{ id: item.id }}>
                  <a>
                    <img src={item.images[0].url} />
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
                  <Link route={route} params={{ id: item.id }}>
                    <a>{item.name}</a>
                  </Link>
                </h3>
              </article>
            </Box>
          ))}
        </Flex>
      </Box>
    </Fragment>
  )
}

export default withPage({ restricted: true })(SearchPage)

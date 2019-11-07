import React from 'react'
import { Flex, Box } from '@grid'

export default function DetailPageHeader({ data }) {
  console.log('data', data)
  return (
    <Flex flexWrap="wrap" css={{ padding: '20px 50px' }}>
      <Box width={1}>
        <article css={{}}>
          <img src={data.images[0].url} />
        </article>
      </Box>
      <Box width={1}>
        <article css={{}}>
          <h1>{data.name}</h1>
          <p>{data.owner.display_name}</p>
          <p>
            <button>Play</button>
          </p>
          <p>{data.tracks.total} tracks</p>
        </article>
      </Box>
    </Flex>
  )
}

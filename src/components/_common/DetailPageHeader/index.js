import React from 'react'
import { Flex, Box } from '@grid'
import Button from '@common/Button'
import colors from '@features/_ui/colors'

export default function DetailPageHeader({ data }) {
  console.log('data', data)
  return (
    <Flex flexWrap="wrap" css={{ padding: '20px 70px' }}>
      <Box width={1}>
        <img src={data.images[0].url} />
        <div css={{ textAlign: 'center' }}>
          <h1
            css={{
              color: colors.link,
              fontSize: '1.6em',
              fontWeight: 'bold',
              padding: '20px 0 10px',
            }}>
            {data.name}
          </h1>
          <p css={{ padding: '0 0 40px', fontSize: '0.8em' }}>
            {data.owner.display_name}
          </p>
          <p>
            <Button>Play</Button>
          </p>
          <p css={{ paddingTop: '15px', fontSize: '0.7em' }}>
            {data.tracks.total} Tracks
          </p>
        </div>
      </Box>
    </Flex>
  )
}

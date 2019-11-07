import React from 'react'
import { Flex, Box } from '@grid'
import Button from '@common/Button'
import colors from '@features/_ui/colors'

export default function DetailPageHeader({ data }) {
  return (
    <Flex flexWrap="wrap" css={{ padding: '20px 70px' }}>
      <Box width={1}>
        <img src={data.image} />
        <div css={{ textAlign: 'center' }}>
          <h1
            css={{
              color: colors.link,
              fontSize: '1.6em',
              fontWeight: 'bold',
              lineHeight: 1.5,
              padding: '8px 0 10px',
            }}>
            {data.title}
          </h1>
          <p css={{ padding: '0 0 40px', fontSize: '0.8em' }}>
            {data.subTitle}
          </p>
          <p>
            <Button>Play</Button>
          </p>
          <p css={{ paddingTop: '15px', fontSize: '0.7em' }}>
            {data.bottomLine}
          </p>
        </div>
      </Box>
    </Flex>
  )
}

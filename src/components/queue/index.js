import React from 'react'
import { Flex, Box } from '@grid'

import Link from '@link'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import colors from '@features/_ui/colors'

function QueuePage() {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '2em',
            padding: '50px 10px 10px',
          }}>
          Queue
        </h1>
      </Box>
    </Flex>
  )
}

export default withPage({ restricted: true })(QueuePage)

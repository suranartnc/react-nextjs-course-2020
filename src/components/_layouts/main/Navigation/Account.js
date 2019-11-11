import React, { useEffect } from 'react'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'
import Link from '@link'
import { useMember } from '@lib/auth'
import { inject } from '@lib/store'

function Account({ userStore }) {
  const { token } = useMember()

  useEffect(() => {
    if (token !== null && userStore.profile === null) {
      userStore.fetchCurrentUserProfile({ token })
    }
  })

  if (token === null || userStore.profile === null) {
    return null
  }

  const { images, display_name } = userStore.profile

  return (
    <div
      css={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}>
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        css={{
          width: '185px',
          margin: '0 auto',
          padding: '6px 0',
          borderTop: `1px solid ${colors.background.light}`,
          fontSize: '0.85em',
          fontWeight: 'bold',
          color: colors.link,
        }}>
        <Box>
          <Link route="account">
            <a>
              <img
                src={images[0].url}
                alt={display_name}
                css={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                }}
              />
            </a>
          </Link>
        </Box>
        <Box>
          <Link route="account">
            <a>{display_name}</a>
          </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default inject('userStore')(Account)

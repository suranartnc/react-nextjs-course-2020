import React from 'react'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'
import Link from '@link'

Account.defaultProps = {
  name: 'Suranart Niamcome',
  image:
    'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=632953206868161&height=200&width=200&ext=1576212527&hash=AeQa68J5fTX4UbRR',
}

function Account(props) {
  const { image, name } = props

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
                src={image}
                alt={name}
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
            <a>{name}</a>
          </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default Account

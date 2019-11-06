import React from 'react'

import { Flex, Box } from '@grid'
import withPage from '@lib/page/withPage'
import { getStatic } from '@lib/static'

import { signIn } from '@features/_auth'

const logoStyle = {
  display: 'block',
  paddingBottom: '30px',
}

const loginButton = {
  backgroundColor: '#1ed761 !important',
  borderColor: '#1ed761 !important',
  padding: '10px 50px',
  borderRadius: '30px',
  fontSize: '24px',
  fontWeight: 'bold',
  cursor: 'pointer',
}

function LoginPage() {
  const login = e => {
    e.preventDefault()
    signIn()
  }

  return (
    <div css={{ maxWidth: '480px', margin: '0 auto', height: '100vh' }}>
      <Flex
        css={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}>
        <Box width={1}>
          <img
            css={logoStyle}
            src={getStatic('images/spotifyLogo.png')}
            alt={'SpotifyLogo'}
          />
        </Box>
        <Box width={1} css={{ textAlign: 'center' }}>
          <button css={loginButton} onClick={login}>
            Login
          </button>
        </Box>
      </Flex>
    </div>
  )
}

export default withPage({ layout: false })(LoginPage)

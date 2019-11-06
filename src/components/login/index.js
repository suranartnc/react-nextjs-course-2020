import React from 'react'

import { Flex, Box } from '@grid'
import withPage from '@lib/page/withPage'
import { getStatic } from '@lib/static'

import { signIn } from '@features/_auth'

const logoStyle = {
  display: 'block',
  paddingBottom: '30px',
  margin: 'auto',
  maxWidth: '500px',
}

const loginButton = {
  backgroundColor: '#1ed761 !important',
  borderColor: '#1ed761 !important',
  padding: '10px 50px',
  borderRadius: '30px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  cursor: 'pointer',
}

function LoginPage() {
  const login = e => {
    e.preventDefault()
    signIn()
  }

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Box width={1}>
        <img
          css={logoStyle}
          src={getStatic('images/spotifyLogo.png')}
          alt={'SpotifyLogo'}
        />
      </Box>
      <Box width={1} style={{ textAlign: 'center' }}>
        <button css={loginButton} onClick={login}>
          Login
        </button>
      </Box>
    </Flex>
  )
}

export default withPage({ layout: false })(LoginPage)

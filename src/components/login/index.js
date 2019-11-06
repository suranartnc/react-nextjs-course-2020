import React from 'react'

import withPage from '@lib/page/withPage'

import { signIn } from '@features/_auth'

function LoginPage() {
  const login = e => {
    e.preventDefault()
    signIn()
  }

  return (
    <form onSubmit={login}>
      <button>Log in</button>
    </form>
  )
}

export default withPage()(LoginPage)

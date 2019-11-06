import React from 'react'
import { css, Global } from '@emotion/core'

import colors from '@features/_ui/colors'
import normalize from './normalize'
import reset from './reset'

const baseStyles = css`
  ${normalize}
  ${reset}
  html,
  body {
    background: ${colors.background.normal};
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: ${colors.text};
  }
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  a {
    color: ${colors.link};
  }
`

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}

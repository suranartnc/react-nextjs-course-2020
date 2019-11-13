import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import Router from 'next/router'
import { Provider } from 'mobx-react'
import { CookiesProvider } from 'react-cookie'

import { withAuth } from '@lib/auth'
import { initStore } from '@lib/store'
import * as font from '@lib/font'
import { GlobalStyles } from '@lib/styles'

import MusicPlayer from '@features/player/Player'

class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')
    WebFont.load(font.config)

    Router.events.on('routeChangeStart', url => {
      if (window.__NEXT_DATA__.props.isSSR === undefined) {
        window.__NEXT_DATA__.props.isSSR = false
      }
    })
  }

  render() {
    const { Component, router } = this.props
    const rootStore = initStore()

    const children = (
      <Fragment>
        <GlobalStyles />
        <Helmet titleTemplate={`%s - nextweb.js`} />
        <Provider RootStore={rootStore}>
          <Component {...this.props.pageProps} router={router} />
          <MusicPlayer />
        </Provider>
      </Fragment>
    )

    if (process.browser) {
      return <CookiesProvider>{children}</CookiesProvider>
    }

    return children
  }
}

export default withAuth(MyApp)

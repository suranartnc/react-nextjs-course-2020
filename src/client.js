import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const container = document.getElementById('root')

ReactDOM.hydrate(<App />, container)

import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import App from './app'

const port = 3000
const server = express()

server.listen(port)
server.use(express.static('public'))

server.get('/', function(req, res) {
  const content = ReactDOM.renderToString(<App />)

  const html = `
    <html>
      <head>
        <title>RNG Stack Course 2018</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

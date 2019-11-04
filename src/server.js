import express from 'express'

import { renderPage } from './utils/output'
import renderApp from './app'

const port = 3000
const server = express()

server.listen(port)
server.use(express.static('public'))

server.get('/', function(req, res) {
  const app = renderApp()
  const html = renderPage(app)
  res.send(html)
})

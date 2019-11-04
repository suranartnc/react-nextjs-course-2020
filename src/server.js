import express from 'express'

import { renderToString } from './utils/output'
import renderApp from './app'

const port = 3000
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('/', function(req, res) {
  const content = renderApp()
  const html = renderToString(content)
  res.send(html)
})

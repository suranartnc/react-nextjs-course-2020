import express from 'express'

const port = 3000
const server = express()

server.listen(port)
server.use(express.static('public'))

server.get('/', function(req, res) {
  res.send(`
    <html>
        <head>
          <title>React Next.js Course 2020</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="/build/client.bundle.js"></script>
        </body>
      </html>
  `)
})

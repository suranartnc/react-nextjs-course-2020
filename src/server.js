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
        <title>React Next.js Course 2020</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style>
          * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
          }
          html {
            font-size: 87.5%;
          }
          body {
            font-family: arial, 'sans-serif';
            font-size: 1em;
            color: #888;  
          }
          input {
            padding: 5px;
            font-size: 1.8rem;
          }
          button {
            padding: 5px 10px;
            background: none;
            border: 0;
            font-size: 1rem;   
            color: #888;      
          }
        </style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

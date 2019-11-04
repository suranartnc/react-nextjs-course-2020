export function renderToDom(content, node = 'root') {
  document.getElementById(node).innerHTML = content
}

export function renderPage(content) {
  var html = `
    <html>
      <head>
        <title>React Next.js Course 2020</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  return html
}

const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello wolrd')
})

server.listen(8888, () => {
  console.log('server listen ' + 8888)
})

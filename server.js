const http = require('http')
const app = require('./src/app') // main route

// getting port(default or 3000)
const port = process.env.PORT || 3000

// running new server
const server = http.createServer(app)

// add new listener
server.listen(port)
const express = require('express')
//const db = require('')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Week 3 on API project')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const express = require('express')

const db = require('./data/dbConfig.js')

const server = express()

//const recipeRouter = require('/api/recipes', recipeRouter)

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Week 3 on API project')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

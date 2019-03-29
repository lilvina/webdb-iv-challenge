const express = require('express')

const db = require('./data/dbConfig.js')
const recipeRouter = require('./recipe-router.js')
const dishRouter = require('./dish-router.js')
const server = express()

server.use(express.json())

server.use('/api/dishes', recipeRouter)
server.use('/api/recipes', dishRouter)

server.get('/', (req, res) => {
  res.send('Week 3 on API project')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

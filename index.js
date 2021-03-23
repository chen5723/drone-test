const express = require('express')

const {
  PORT,
} = require('./consts')

const app = express()

app.get('/test', (req, res) => {
  res.json({ running: 'OK' })
})

app.listen(PORT, () => {
  console.log(`server is up on ${PORT}`)
})

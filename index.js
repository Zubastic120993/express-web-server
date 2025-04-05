import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World from express web server')
})

app.listen(3000)
const express = require('express')
const bodyParser = require('body-parser')
const elasticClient = require('./services/elastic-client')
const routes = require('./routes')
require('express-async-errors')

const app = express()

app.use(bodyParser.json());
app.use(routes)

app.get('/', (req, res) => {
  res.status(200).send('Success')
})


app.listen(8080, (res, err) => {
  console.log(8080)
  if (err) console.log(err)
})
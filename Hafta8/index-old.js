const express = require('express')
const bodyParser = require('body-parser')
const elasticClient = require('./services/elastic-client')

require('express-async-errors')

const app = express()

app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.status(200).send('Success')
})

app.post('/posts', async (req, res) => {
  try {
    const result = await elasticClient.index({
      index: "posts",
      document: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      }
    })
    res.status(201).send(result)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/posts', async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: "posts",
      query: { match_all: {} }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
})

app.put('/posts', async (req, res) => {
  try {
    const result = await elasticClient.update({
      index: 'posts',
      id: req.query.id,
      doc: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      }
    })
    res.status(202).send(result.result)
  } catch (e) {
    res.send(e.message)
  }
})

app.delete('/posts', async (req, res) => {
  try {
    const result = await elasticClient.delete({
      index: 'posts',
      id: req.query.id
    })
    res.status(202).send(result)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/search-posts', async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: "posts",
      query: { match_phrase: { author: req.query.author } }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
})

/* search-author */

app.post('/author', async (req, res) => {
  try {
    const result = await elasticClient.index({
      index: 'search-author',
      document: {
        name: req.body.name,
        birth: req.body.birth,
      }
    })
    res.status(201).send(result)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/author', async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: 'search-author',
      query: { match_all: {} }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
})

app.put('/author', async (req, res) => {
  try {
    const result = await elasticClient.update({
      index: 'search-author',
      id: req.query.id,
      doc: {
        name: req.body.name,
        birth: req.body.birth,
      }
    })
    res.status(202).send(result.result)
  } catch (e) {
    res.send(e.message)
  }
})

app.delete('/author', async (req, res) => {
  try {
    const result = await elasticClient.delete({
      index: 'search-author',
      id: req.query.id
    })
    res.status(202).send(result)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/search-author', async (req, res) => {

  const searchObj = req.query

  try {
    const result = await elasticClient.search({
      index: 'search-author',
      query: { match_all: { _name: req.query.name } }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
})


app.listen(8080)
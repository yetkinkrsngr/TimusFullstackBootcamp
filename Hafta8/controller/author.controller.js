const elasticClient = require('../services/elastic-client')

exports.saveAuthor = async (req, res) => {
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
}
exports.getAllAuthors = async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: 'search-author',
      query: { match_all: {} }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
}
exports.updateAuthor = async (req, res) => {
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
}
exports.deleteAuthor = async (req, res) => {
  try {
    const result = await elasticClient.delete({
      index: 'search-author',
      id: req.query.id
    })
    res.status(202).send(result)
  } catch (e) {
    res.send(e.message)
  }
}
exports.searchAuthorsByName = async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: 'search-author',
      query: { match_all: { _name: req.query.name } }
    })

    res.status(200).send(result.hits.hits)
  } catch (e) {
    res.send(e.message)
  }
}
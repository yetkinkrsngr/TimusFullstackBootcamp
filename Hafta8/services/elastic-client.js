const { Client } = require('@elastic/elasticsearch')

const elasticClient = new Client({
  node: '', // Elasticsearch endpoint
  auth: {
    username: '',
    password: ''
  }
})

module.exports = elasticClient;
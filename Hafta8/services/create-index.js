const elasticClient = require('../elastic-client')

const createIndex = async (indexName) => {
  await elasticClient.indices.create({ index: indexName })
  console.log('Index Created: ' + indexName)
}

module.exports = createIndex
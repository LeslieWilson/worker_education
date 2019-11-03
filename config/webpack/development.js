process.env.NODE_ENV = process.env.NODE_ENV || 'development'


 environment = require('./environment')

module.exports = environment.toWebpackConfig()

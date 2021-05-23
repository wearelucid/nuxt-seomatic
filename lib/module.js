const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['@wearelucid/nuxt-seomatic'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-seomatic.js',
    options
  })
}

module.exports.meta = require('../package.json')

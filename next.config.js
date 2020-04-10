const path = require('path')
const basePath = '/base'
module.exports = {
  distDir: 'build',
  webpack(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components/')
    return config;
  }
};
const path = require('path')
const basePath = '/base'
module.exports = {
  distDir: 'build',
  assetPrefix: basePath,
  env: {
    basePath
  },
  webpack(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components/')
    return config;
  }
};
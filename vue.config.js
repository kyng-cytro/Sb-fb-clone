// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/fb-lite/' : '/',
}

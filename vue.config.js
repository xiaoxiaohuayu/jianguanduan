module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true
  },
  devServer: {
    open: false,
    port: 8085,
    https: false,
    hotOnly: false,
    open: true,
    // hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://mockhttp.cn/mock/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};

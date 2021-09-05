module.exports = {
  outputDir: './build',
  // productionsSourceMap: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}

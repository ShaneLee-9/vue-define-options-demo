const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '.',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-define-options/webpack')()
    ]
  }
})

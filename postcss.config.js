module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('font-')
        }
        return options
      })
  }
}

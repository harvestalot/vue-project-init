module.exports = {
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/var.scss";',
      },
    },
  },
  productionSourceMap: false,
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    // https: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'VUE初始化项目';
      return args;
    });
  },
};

const StatsPlugin = require("stats-webpack-plugin");
module.exports = {
  // 指定publicPath保证请求资源路径正确
  publicPath: "//127.0.0.1:3000/",
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
    extract: false
  },
  configureWebpack: {
    devtool: "none", // 不打包sourcemap
    output: {
      // 重点： 将其导出为library库文件
      library: "singleVue", // 导出名称
      libraryTarget: "window" //挂载目标
    },
    plugins: [
      new StatsPlugin("manifest.json", {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/]
      })
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./",
    compress: true
  }
};

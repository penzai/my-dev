const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      patterns: [
        path.resolve(__dirname, "src/styles/variables.less"),
        path.resolve(__dirname, "src/styles/mixins.less")
      ],
      preProcessor: "less"
    }
  },
  devServer: {
    proxy: "http://localhost:3000"
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  }
};

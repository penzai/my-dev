const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      patterns: [
        path.resolve(__dirname, "src/styles/variables.less"),
        path.resolve(__dirname, "src/styles/mixins.less")
      ],
      preProcessor: "less"
    }
  }
};

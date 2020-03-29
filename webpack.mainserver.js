const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/server/main.js",
  node: {
    __dirname: true
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build/server")
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

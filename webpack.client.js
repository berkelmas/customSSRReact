const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/client/app/main-web.js",

  output: {
    filename: "[name]-bundle-[chunkhash:8].js",
    publicPath: `/build/client/`,
    path: path.resolve(__dirname, "build/client")
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [new LoadablePlugin()]
};

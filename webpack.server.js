const path = require("path");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  target: "node",
  entry: "./src/client/app/main-node.js",

  node: {
    __dirname: true
  },

  output: {
    filename: "[name]-bundle-[chunkhash:8].js",
    publicPath: `/build/node/`,
    path: path.resolve(__dirname, "build/node"),
    libraryTarget: "commonjs2"
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
  },
  plugins: [new LoadablePlugin()]
};

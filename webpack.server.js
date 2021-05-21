const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge").merge;
const baseConfig = require("./webpack.base");

const config = {
  entry: "./src/server/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: "css-loader",
      },
    ],
  },
};

module.exports = merge(baseConfig, config);

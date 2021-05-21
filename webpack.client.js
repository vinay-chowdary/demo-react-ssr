const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge").merge;
const baseConfig = require("./webpack.base");

const config = {
  entry: "./src/client/client.js",
  // externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build", "public"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);

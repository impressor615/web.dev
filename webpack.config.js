const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/service-worker.js", to: "./service-worker.js" },
      { from: "./src/register-sw.js", to: "./register-sw.js" },
    ]),
    new CleanWebpackPlugin('dist'),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
};

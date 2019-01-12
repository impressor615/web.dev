const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require('workbox-webpack-plugin');

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
    new CleanWebpackPlugin('dist'),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      // runtimeCaching configuration
      // runtimeCaching: [{
      //   urlPattern: new RegExp('https://hacker-news.firebaseio.com'),
      //   handler: 'staleWhileRevalidate'
      // }],
    }),
  ],
};

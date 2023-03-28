const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
    },
  output: {
    path: path.resolve(__dirname, './src/dist_webpack'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
    filename: "[name].css"
  }), 
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: '[name].html',
    chunks: ['index']
 })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '.',
              publicPath: '.',
            },
          },
        ],
      },
    ],
  },
  
  plugins: [ 
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/libros-populares.html',
      filename: 'libros-populares.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/lp1.html',
      filename: 'lp1.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/lp2.html',
      filename: 'lp2.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/lp3.html',
      filename: 'lp3.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/lp4.html',
      filename: 'lp4.html',
    }),
   new HtmlWebpackPlugin({
      template: './src/lp5.html',
      filename: 'lp5.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/nuevos-lanzamientos.html',
      filename: 'nuevos-lanzamientos.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/nl1.html',
      filename: 'nl1.html',
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  
};
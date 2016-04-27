'use strict';
const path = require('path');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: ['bootstrap-loader', 'font-awesome-loader', './src/js/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style', 'css', 'postcss']},
      {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
      {test: /\.jade$/, loader: 'jade?self'},
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?name=font/[hash:6].[ext]&limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?name=font/[hash:6].[ext]'
      },
      {test: /\.(png|jpg|gif)$/, loader: 'url?name=img/img-[hash:6].[ext]&limit=8192'},
      {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'},
      {
        test: /\.js$/,
        exclude: [node_modules_dir],
        loader: 'babel'
      }
    ]
  },
  resolve: {extensions: ['', '.js']}
};

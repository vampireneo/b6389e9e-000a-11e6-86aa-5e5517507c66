'use strict';
module.exports = {
  entry: [ 'bootstrap-loader', 'font-awesome-loader', './src/js/app' ],
  // entry: './src/js/app.js',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  resolve: { extensions: [ '', '.js' ] }
};

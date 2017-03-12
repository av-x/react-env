var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!stylus-loader'
});

module.exports = {
  entry: [
    './src/app.jsx',
    './src/app.styl'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, include: __dirname + '/src', loader: 'babel-loader' },
      { test: /\.styl$/, include: __dirname + '/src', loader: stylusLoader }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin('app.css')]
};

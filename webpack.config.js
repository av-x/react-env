var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// injects bundle.js into the index.html file
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

// loader for .styl files
var stylusLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!stylus-loader'
});

var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: stylusLoader
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl']
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true
  },
  plugins: isProduction ? [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ] : [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('app.css')
  ]
};

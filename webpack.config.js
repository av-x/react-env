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

// css-loader modules config
var cssLoaderConfig = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  }
};

var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: isProduction ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoaderConfig, 'postcss-loader']
        }) : ['style-loader', cssLoaderConfig, 'postcss-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    inline: true
  },
  plugins: isProduction ? [
    HTMLWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new ExtractTextPlugin({filename:'app.css', disable: false, allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}})
  ] : [
    HTMLWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new ExtractTextPlugin({filename:'app.css', disable: false, allChunks: true}),
  ]
};

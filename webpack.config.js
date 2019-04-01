const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicEnv = require('./config');
const isProduction = process.env.NODE_ENV === 'production';

// injects bundle.js into the index.html file
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'classnames',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: false,
  },
  optimization: {
    minimizer: [
      // uglify is default and built-in, but currently having issues
      new TerserPlugin({
        sourceMap: true, // for sentry error handling
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(publicEnv) }),
  ].concat(isProduction
    ? [
      new CleanWebpackPlugin({ verbose: false }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
      }),
      new webpack.HashedModuleIdsPlugin(),
    ]
    : [new webpack.HotModuleReplacementPlugin()]
  ),
};

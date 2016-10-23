const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  // 外部引入,分离css和js
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 依据模板生成html
const Autoprefixer = require('autoprefixer');

const PubilcDir = path.resolve(__dirname, './src');
const APP_PATH = path.resolve(PubilcDir, './main.js');
const BUILD_PATH = path.resolve(__dirname, './build');
const HtmlTemp = path.resolve(PubilcDir, './common/index.tmpl.html');
const BootstrapDir = path.resolve(PubilcDir, './config');

// const ExtractLess = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: [
    'bootstrap-webpack!bootstrapConfig',
    APP_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_module|bootstrap/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_module|bootstrap/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')   // style-loader css-loader
      },
      {
        test: /\.less$/,
        exclude: /node_module|bootstrap/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' // 小于8KB的直接转base64 同时加hash
      }

    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  postcss: [
    Autoprefixer
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],  // 设置require、import时可以不需要文件名后缀
    alias: {
      bootstrapConfig: path.resolve(BootstrapDir, 'bootstrap.config')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HtmlTemp
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('[name].[hash:8].css')
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3355,
    contentBase: './build'
  }
};

const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'build');

const def = {
  context: ROOT,
  entry: {
    'rangen': './index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: DESTINATION,
    library: 'rangen'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {}
};

const umd = {
  context: ROOT,
  entry: {
    'rangen': './index.ts'
  },
  output: {
    filename: '[name].bundle.umd.js',
    path: DESTINATION,
    library: 'rangen',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {}
};

module.exports = [def, umd];


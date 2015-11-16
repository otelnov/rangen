'use strict';

let webpack = require('webpack');
let path = require('path');
let fs = require('fs');

let dev = process.env.NODE_ENV === 'development';

let nodeModules = {};
['axios'].forEach(m => nodeModules[m] = `commonjs ${m}`);

let config = {
  context: path.join(__dirname, '/lib'),
  entry: {
    rangen: './rangen.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: `rangen.${dev ? '' : 'min.'}js`,
    library: 'rangen',
    libraryTarget: 'umd'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

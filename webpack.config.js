'use strict'

const path = require('path');
const webpack = require('webpack');
module.exports = {
  
  stats: {
    hash: false,
    version: true,
    timings: false,
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    cached: true,
    reasons: true,
    source: false,
    errorDetails: true,
    chunkOrigins: false,
    modulesSort: false,
    chunksSort: false,
    assetsSort: false,
    colors: true
  },
  entry: {
    "index": "./src/index.jsx",
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  resolve: {
    root: [path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.coffee', '.jsx'],
    alias: {
      underscore: 'lodash'
    }
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony', exclude: /node_modules/ },
      { test: /\.(?:js|jsx)$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};

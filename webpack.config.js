const webpack = require('webpack'); // eslint-disable-line no-unused-vars

const browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: __dirname,
    filename: './dist/client/js/sgs-app-bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-react']}
      }
    ]
  }
};

const serverConfig = {
  entry: {
    server: ['@babel/polyfill', './src/server/index.js']
  },
  target: 'node',
  output: {
    path: __dirname,
    filename: './dist/server/server.js'
  },
  devtool: 'cheap-module-source-map',
  stats: {warnings: false},
  optimization: {nodeEnv: false},
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: (url) => url.replace(/public/, ''),
          emit: false
        }
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-react']}
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];
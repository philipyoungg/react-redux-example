const path = require('path')

const BUILD_DIR =  path.join(__dirname, 'src/client/public')
const APP_DIR =  path.join(__dirname, 'src/client/app')

const config = {
  entry: APP_DIR + '/index',

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
}

module.exports = config

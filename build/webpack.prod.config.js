const path = require('path');

const resolve = (dir) =>  path.resolve(__dirname, dir)
module.exports = {
  mode: 'production',
  entry:  resolve('../src/index.js'),
  output: {
    filename: 'wakeup.min.js',
    path: resolve( '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

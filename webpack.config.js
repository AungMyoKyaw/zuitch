const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    zuitch: path.resolve(__dirname, 'src/zuitch.js')
  },
  output: {
    path: path.resolve(__dirname, 'docs/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!knayi-myscript)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  target: 'web'
};

module.exports = config;

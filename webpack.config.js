const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  devServer: {
    proxy: [{
      path: '/api/',
      target: 'http://localhost:3001',
    }],
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};

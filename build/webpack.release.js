const path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');
const config = {

  context: path.resolve(__dirname),
  entry: '../src/app.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'release.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      { test: /\.(jsx|js)$/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
      { test: /\.(png|jpg|jpeg|gif|woff|eot|ttf)$/, use: 'file-loader' },
    ],
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: '../src/assets/',
      to: __dirname + '/dist/'
    }])
  ],
}

module.exports = config

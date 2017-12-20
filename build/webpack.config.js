const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {

  context: path.resolve(__dirname),
  entry: '../src/app.jsx',

  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'dev.bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
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
    ],
  },

  devServer: {
    contentBase: '/',
    publicPath: '/',
  },

  plugins: [
    new htmlWebpackPlugin({
      title: '万事不顺屋',
      template: '../build/dev/index.html'
    }),
  ],
}

module.exports = config

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

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

  /* externals: {
    "react": 'React',
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    'history': "History",
    'redux': 'Redux',
    'react-redux': 'ReactRedux'
  }, */

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
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
      /* {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }, */
      /* {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]',
              publicPath: '/',
              outputPath: '/build/dev/'
            }
          }
        ]
      } */
    ],
  },

  devServer: {
    contentBase: '/',
  },

  plugins: [
    new htmlWebpackPlugin({
      title: '万事不顺屋',
      template: '../build/dev/index.html'
    }),
    new CopyWebpackPlugin([{
      from: '../src/assets/',
      to: __dirname + '/dev/'
  }])
  ],
}

module.exports = config

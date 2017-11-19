const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {

  context: path.resolve(__dirname),
  entry: '../src/app.jsx',

  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'dev.bundle.js',
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
      { test: /\.(png|jpg|jpeg|gif|eot|ttf)$/, use: 'file-loader' },
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
    ],
  },

  devServer: {
    contentBase: './dev',
  },

  plugins: [
    new htmlWebpackPlugin({
      title: '万事不顺屋',
      template: './dev/index.html'
    })
  ],
}

module.exports = config

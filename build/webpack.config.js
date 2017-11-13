const path = require('path')

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

  externals: {
    "react": 'React',
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    'history': "History",
    'redux': 'Redux',
    'react-redux': 'ReactRedux'
  },

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
      }
    ],
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [

  ],
}

module.exports = config

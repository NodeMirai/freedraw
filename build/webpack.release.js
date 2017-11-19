const path = require('path')

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
      { test: /\.(png|jpg|jpeg|gif|woff|eot|ttf)$/, use: 'file-loader' },
    ],
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [
  ],
}

module.exports = config

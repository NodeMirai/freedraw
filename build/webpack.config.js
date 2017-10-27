const path = require('path')

const config = {
  context: path.resolve(__dirname),
  entry: '../src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'release.bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
}

module.exports = config

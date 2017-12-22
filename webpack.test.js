var path = require('path')
module.exports = {
  context: path.resolve(__dirname),
  devtool: 'inline-source-map',
  entry: './src/app.jsx',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
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
}

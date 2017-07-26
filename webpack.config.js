const path = require('path')

module.exports = {
  entry: './docs2/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'docs2')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'docs2/',
    historyApiFallback: true
  }
}

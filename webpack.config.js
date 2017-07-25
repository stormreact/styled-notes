const path = require('path')

module.exports = {
  entry: './docs1/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'docs1')
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
    contentBase: 'docs1/',
    historyApiFallback: true
  }
}

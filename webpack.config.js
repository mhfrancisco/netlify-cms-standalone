const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/admin/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true
  }
}

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  },
  output: {
    filename: 'example.js',
    path: path.resolve(__dirname, 'dist')
  }
}

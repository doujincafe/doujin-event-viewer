// ============================================================================
// Event Viewer
// Copyright (C) 2023 Aiko Fujimoto & Contributors
//
// Licensed under MIT
// ============================================================================

const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  optimization: {
    minimize: true
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}

import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'candela-treeheatmap.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: {
                  node: 'current'
                }
              }]
            ]
          }
        }
      }
    ]
  }
}
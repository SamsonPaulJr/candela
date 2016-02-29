var webpack = require('webpack');
var path = require('path');

var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    candela: './src/index.js'
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    path: 'build',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vega: path.resolve(__dirname, 'node_modules/vega/index.js'),
      d3: path.resolve(__dirname, 'node_modules/d3/d3.min.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      vg: 'vega'
    }),

    new CleanPlugin([
      './build/candela.js',
      './build/common.js',
      './build/index.js'
    ])
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'semistandard',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'src', 'external')
      }
    ],
    loaders: [
      {
        test: require.resolve('./src/candela.js'),
        loader: 'expose?candela'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: __dirname + '/src'
      },
      {
        test: function (path) {
          return path.endsWith('/src/external/pc.js');
        },
        loader: 'legacy'
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      },
      {
        test: /\.jade$/,
        loaders: ['jade']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

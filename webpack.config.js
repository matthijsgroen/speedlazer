const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    game: "./app/game.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    rules: [
      {
        test: /crafty/,
        use: 'script-loader'
      }
    ]
  },
  resolve: {
    alias: {
      crafty: "craftyjs/dist/crafty"
    }
  }
};

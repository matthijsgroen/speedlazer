const path    = require("path");
const webpack = require("webpack");
const babel   = require("./config/babel");
const uglify  = require("./config/uglify");
const env = process.env.NODE_ENV || "development";
const isProd = env === "production";

const plugins = [];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(uglify)
  );
  babel.presets.push("babili");
};

module.exports = {
  entry: {
    game: "./src/game.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: babel
      }
    ]
  },
  resolve: {
    alias: {
      crafty$: path.join(__dirname, "src/crafty-loader"),
      src: path.join(__dirname, "src")
    }
  }
};

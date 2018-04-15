var path = require("path");
var webpack = require("webpack");

var client = path.join(__dirname, "client"),
    dist = path.join(__dirname, "dist");

module.exports = {
  entry: path.join(client, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: dist,
  },

  module: {
    rules: [
      {
        test : /\.jsx?/,
        include : client,
        loader : 'babel-loader',
      },
      {
        test : /\.(scss|sass|css)$/i,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]'}},
          'sass-loader',
        ],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      client,
      "node_modules",
    ],
  },
};

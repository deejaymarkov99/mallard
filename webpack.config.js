var path = require("path");

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
      }
    ],
  },

  resolve: {
    modules: [
      client,
      "node_modules",
    ],
  },
};

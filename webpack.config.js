var glob = require('glob');
var path = require('path');

var entries = {};
glob.sync("./src/**/*.ts").map(function (file) {
  entries[file.replace("src\/", "dist\/").replace(/\.ts/, ".js")] = file;
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name]',
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ]
  },
};

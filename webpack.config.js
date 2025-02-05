const { resolve } = require("path");

module.exports = {
  entry: "./leadmanager/frontend/src/index.js",
  output: {
    path: resolve(__dirname, "leadmanager/frontend/static/frontend"),
    filename: "main.js", // Output file
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/, // Regex to target .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use babel-loader
        },
      },
    ],
  },
};

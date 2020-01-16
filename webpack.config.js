const path = require("path");
var webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "src", "index.html"),
  filename: "index.html"
});

console.log(__dirname);

module.exports = {
  context: __dirname,
  // entry: "/src/index.js",
  // output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "main.js"
  //   },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

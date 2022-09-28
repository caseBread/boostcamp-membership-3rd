var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/client/webpack.js",
  output: {
    path: path.resolve(__dirname, "./src/client/public"),
    filename: "index-build.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // 원하는 filename
    }),
    new CleanWebpackPlugin({ filename: "build.js" }),
  ],
};

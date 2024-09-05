const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./entry.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /lib/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["module:@react-native/babel-preset"],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /lib/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};

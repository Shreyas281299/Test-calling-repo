const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js", // Specify the entry point
  output: {
    filename: "main.js", // Specify the output bundle filename
    path: path.resolve(__dirname, "./src/dist"), // Specify the output directory
  },
  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url"),
      assert: require.resolve("assert"),
      fs: false,
      querystring: require.resolve("querystring-es3"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

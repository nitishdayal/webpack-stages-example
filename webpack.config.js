const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  devtool: env === "production" ? "source-map" : "cheap-eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js(x)?/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "You're the Man Now, Dog!",
      filename: "build/index.html",
      inject: "body",
      template: "./index.html"
    })
  ]
});

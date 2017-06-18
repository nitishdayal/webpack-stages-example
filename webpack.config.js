const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  devtool: env && env.production ? "source-map" : "inline-source-map",
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
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          entryFileIsJs: true
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "You're the Man Now, Dog!",
      filename: "./build/index.html",
      inject: "body",
      template: "./index.html"
    })
  ]
});

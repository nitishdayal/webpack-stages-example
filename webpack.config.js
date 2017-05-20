module.exports = env => ({
  devtool: env === "production" ? "source-map" : "cheap-eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js(x)?/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
});

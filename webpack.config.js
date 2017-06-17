module.exports = env => ({
  devtool: env === "production" ? "source-map" : "cheap-eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
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

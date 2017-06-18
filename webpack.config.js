module.exports = env => ({
  devtool: env && env.production ? "source-map" : "inline-source-map",
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
      },
      {
        test: /\.js(x)?/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
});

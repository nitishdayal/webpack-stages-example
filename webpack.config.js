module.exports = env => ({
  devtool: env && env.production ? "source-map" : "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
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
  resolve: {
    extensions: [".js"]
  }
});

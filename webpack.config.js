module.exports = env => ({
  devtool: env === "production" ? "source-map" : "cheap-eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  resolve: {
    extensions: [".js"]
  }
});

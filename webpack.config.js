module.exports = env => ({
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  resolve: {
    extensions: [".js"]
  }
});

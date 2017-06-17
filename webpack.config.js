module.exports = env => {
  const devtool = env === "production" ? "source-map" : "cheap-eval-source-map";

  /**
   * ES5 Equivalent:
   *
   * var devtool;
   * if (env === 'production') {
   *     devtool = 'source-map'
   * } else {
   *     devtool = 'cheap-eval-source-map'
   * }
   */

  return {
    devtool,
    entry: "./src/index.js",
    output: { filename: "./build/bundle.js" },
    resolve: { extensions: [".js"] }
  };
};

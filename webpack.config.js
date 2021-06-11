module.exports = {
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        type: "asset/resource",
        test: /\.svg$/
      }
    ]
  },
  devtool: false,
  stats: "verbose"
};

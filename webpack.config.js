module.exports = {
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        type: "asset/source",
        test: /\.svg$/
      }
    ]
  },
  devtool: false,
  stats: "verbose"
};

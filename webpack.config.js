module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
};

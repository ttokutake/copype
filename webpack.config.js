module.exports = {
  mode: process.env.NODE_ENV === 'prod' ? 'production' : 'development',
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

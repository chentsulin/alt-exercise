module.exports = {
  entry: './scripts/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}

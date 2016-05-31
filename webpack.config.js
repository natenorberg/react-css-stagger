/* eslint prefer-template: 0 */
/* eslint no-var: 0 */

var path = require('path');

module.exports = {
  entry: './src',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Stagger'
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    // Can require('file') instead of require('file.js') etc.
    extensions: ['', '.js', '.json']
  },
  plugins: []
};

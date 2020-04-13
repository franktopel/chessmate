var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

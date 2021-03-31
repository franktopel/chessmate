var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'raw-loader' ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'chessmate.js',
    },
    plugins: [ new HtmlWebpackPlugin() ],
}

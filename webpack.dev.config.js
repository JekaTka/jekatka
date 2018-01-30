var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './app/index.js')
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        historyApiFallback: true
    }
};
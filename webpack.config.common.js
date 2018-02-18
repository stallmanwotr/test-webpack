const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        dist: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Test App',
            filename: 'index.html',
            template: './public/index.html'
        })
    ],

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] }},
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] }},
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};

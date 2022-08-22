const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.[hash].js',
        clean: true,
    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
        ]
    }
}
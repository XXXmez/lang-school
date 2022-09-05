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
                test: /\.css$/i,
                use: ['css-loader']
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|webp|gif|svg|ico)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                },
            }
        ]
    }
}
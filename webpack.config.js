const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // настроена точка входа
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу-шаблону
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}
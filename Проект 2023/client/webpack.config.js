const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            api: path.resolve(__dirname, 'src/api'),
            routes: path.resolve(__dirname, 'src/routes'),
            theme: path.resolve(__dirname, 'src/theme'),
            layout: path.resolve(__dirname, 'src/layout'),
            pages: path.resolve(__dirname, 'src/pages'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            title: 'Exam Process',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true,
    },
}

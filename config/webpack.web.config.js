const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { index: './src/web/index.js' },
    output: {
        path: path.resolve(__dirname, '../build/web'),
        filename: '[name].[hash].js',
    },
    devtool: 'source-map',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/web/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/web/public', to: './' }],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '../build/web'),
        compress: true,
        port: process.env.WEB_PORT || 3000,
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            '/env.js': `http://localhost:${process.env.SERVER_PORT || 4000}`,
            '/graphql': `http://localhost:${process.env.SERVER_PORT || 4000}`,
        },
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    ...require('./webpack.shared.config'),
};

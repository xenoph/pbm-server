const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/worker/index.js',
    output: {
        path: path.resolve(__dirname, '../build/worker'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    devtool: 'source-map',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: nodeExternals(),
    plugins: [
        new webpack.BannerPlugin({
            banner: `require("source-map-support").install(); require('dotenv').config();`,
            raw: true,
            entryOnly: false,
        }),
    ],
    ...require('./webpack.shared.config'),
};

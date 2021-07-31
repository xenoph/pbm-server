const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname, '../build/server/'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    devtool: 'eval-source-map',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: nodeExternals(),
    plugins: [
        //new CopyPlugin([{ from: 'src/server/assets', to: './' }]),
        new webpack.BannerPlugin({
            banner: `require("source-map-support").install(); require('dotenv').config();`,
            raw: true,
            entryOnly: false,
        }),
    ],
    ...require('./webpack.shared.config'),
};

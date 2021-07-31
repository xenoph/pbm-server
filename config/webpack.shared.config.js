const path = require('path');

module.exports = {
	resolve: {
		alias: {
			server: path.resolve(__dirname, '../src/server/'),
			web: path.resolve(__dirname, '../src/web/'),
			worker: path.resolve(__dirname, '../src/worker/'),
		},
	},
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot|png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true, // true outputs JSX tags
							svgo: {
								plugins: [
									{
										removeViewBox: false,
									},
								],
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

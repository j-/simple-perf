const path = require('path');

module.exports = {
	entry: {
		'bundle': './src/entry/application.jsx',
		'benchmark-worker': './src/entry/benchmark-worker.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.jsx?$/,
			},
			{
				loader: 'json',
				test: /\.json$/,
			},
			{
				loader: 'style!css',
				test: /\.css$/,
			},
			{
				// Regular LESS loader for general styles
				loader: 'style!css!less',
				include: [
					path.resolve(__dirname, 'src/styles'),
				],
				test: /\.less$/,
			},
			{
				loader: 'file',
				test: /\.(eot|svg|ttf|woff2?)$/,
			},
		],
	},
	devtool: 'source-map',
};

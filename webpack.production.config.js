const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
	plugins: [
		...(config.plugins || []),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			},
		}),

		new webpack.optimize.UglifyJsPlugin(),
	],
});

const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');

const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
	return merge(common(env, options), {
		mode: 'development',
		devtool: 'inline-source-map',
		plugins: [
			new CopyPlugin({
				patterns: [
					{from: 'content/images/commands', to: 'assets/images/commands'},
					{from: 'src/modernizr-custom.js', to: 'modernizr-custom.js'}
				]
			}),
			//new BundleAnalyzerPlugin()
		]
	})
};

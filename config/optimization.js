const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const minimizers = [
	new UglifyJsPlugin({
		cache: true,
		parallel: true,
		sourceMap: false
	}),
	new OptimizeCSSAssetsPlugin({})
]

module.exports = isDev => ({
	minimizer: isDev ? [] : minimizers 
})
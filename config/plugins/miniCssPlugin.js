const webpack = require('webpack')
const rupture = require('rupture')
const postStylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const stylusLoaderOptions = new webpack.LoaderOptionsPlugin({
	test: /\.styl$/,
	stylus: {
		preferPathResolver: 'webpack',
		default: {
			use: [
				postStylus([
					autoprefixer({ browsers: ['ie 10'] }),
					'css-mqpacker'
				]),
				rupture()
			]
		},
		options: {
			context: __dirname
		}
	}
})

const miniCssPlugin = new MiniCssExtractPlugin({
	filename: '[name]-[hash:8].css'
})

module.exports = isDev => !isDev
	? [miniCssPlugin, stylusLoaderOptions]
	: []
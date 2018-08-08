const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = () => [
	new HtmlWebPackPlugin({
		template: './template/index.html',
		filename: './index.html'
	})
]
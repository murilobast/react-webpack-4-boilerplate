const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Loaders
const cssLoader = require('./loaders/cssLoader')

// Plugins
const htmlPlugin = require('./plugins/htmlPlugin')
const miniCssPlugin = require('./plugins/miniCssPlugin')

// Optimization
const optimization = require('./optimization')

module.exports = (env, argv) => {
    const isDev = argv.mode !== 'production'

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                ...cssLoader(isDev)
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, '../'),
                verbose: true
            }),
            ...htmlPlugin(),
            ...miniCssPlugin(isDev),
            new webpack.ProvidePlugin({
                React: 'react'
            })
        ],
        output: {
            filename: '[name]-[hash:8].bundle.js'
        },
        optimization: optimization(isDev)
    }
}
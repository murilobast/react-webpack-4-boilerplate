const { loader } = require('mini-css-extract-plugin')

const styleLoader = isDev => isDev ? 'style-loader' : loader

const cssLoader = isDev => ({
    loader: 'css-loader',
    options: {
        importLoaders: 1,
        modules: false,
        minimize: !isDev,
        sourceMap: isDev,
        discardComments: { removeAll: !isDev }
    }
})

module.exports = isDev => [
    {
        test: /\.css$/,
        use: [styleLoader(isDev), cssLoader(isDev)]
    },
    {
        test: /\.styl$/,
        use: [styleLoader(isDev), cssLoader(isDev), 'stylus-loader']
    }
]
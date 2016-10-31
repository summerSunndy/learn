var webpack = require('webpack'),
    config = require('./webpack.config.js'),
    htmlWebpackPlugin = require('html-webpack-plugin');

// definePlugin(输出开发调试内容), extractTextPlugin, commonChunkPlugin, webpack-dev-middleware, webpack-hot-middleware, ProvidePlugin
// plugins: [
//     // new webpack.DefinePlugin({
//     //   __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
//     //   __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true')),
//     //   }),
//     new WebpackNotifierPlugin({
//         title: 'Webpack 编译成功',
//         alwaysNotify: true
//     }),
//
// ],

module.exports = config

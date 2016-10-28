var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');


module.exports = {
    watch: true,
    debug: true,
    devtool: 'source-map',
    // definePlugin(输出开发调试内容), extractTextPlugin, commonChunkPlugin, webpack-dev-middleware, webpack-hot-middleware, ProvidePlugin
    plugins: [
      // new webpack.DefinePlugin({
      //   __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
      //   __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true')),
      //   }),
      new WebpackNotifierPlugin({
          title: 'Webpack 编译成功',
          alwaysNotify: true
      }),

    ],
    entry: {
        iwjwVue: './src/js/iwjwVue.js',
        // iwjwReact: './src/js/iwjwReact.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '',
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime','transform-object-rest-spread'],
    },
    module: {
        // !之间为不同的处理器
        // vue与react loader
        loaders: [
            {
                test: /\.js[x]?$|\.vue$/,
                exclude: /(node_modules)|(global\/lib\/)/,
                loader: 'babel',
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.jsx$/,
                loader: 'babel!jsx?harmony',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'happypack/loader?id=css')
            },
            // {
            //     test: /\.less$/,
            //     loader: ExtractTextPlugin.extract('style', 'css-loader?-convertValues!less-loader')
            // },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            },
            {
                test: /\.html/,
                loader: "html-loader?" + JSON.stringify({
                    minimize: false,
                    attrs:false
                })
            },
            {
                 test: /\.json$/,
                 loader: "json"
            },
        ]
    },
    resolve: {
        // 引入可以省略扩展名
        extensions:['','webpack.js','.vue','.js','jsx'],
        // alias:
    }
}

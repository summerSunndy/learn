var path = require('path'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
    devtool: 'source-map',
    watch: true,
    debug: true,
    // entry: [
    //     'webpack/hot/dev-server',
    //     'webpack-dev-server/client?http://localhost:8080',
    //     path.resolve(__dirname, '../src/main.js')
    // ],
    entry: {
        main: './docs/index.js',
        base: './src/scss/ionic.scss'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json','.scss'],
        alias: {
            'js': path.resolve(__dirname, '../src/js'),
            // 'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        // preLoaders: [{
        //     test: /\.js$/,
        //     loader: 'eslint-loader',
        //     exclude: /node_modules/,
        //     include: /src/
        // }],
        loaders: [{
                test: /\.(js|vue)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // sourcemap也是独立的文件？
            { 
                test: /\.scss$/i, 
                loader: ExtractTextPlugin.extract(['css','sass']) 
            }, 
            {
               test: /\.css$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url?limit=25000"
            }, 
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            }, 
            {
                test: /\.html/,
                loader: "html-loader?" + JSON.stringify({
                    minimize: false,
                    attrs: false
                })
            }, 
            {
                test: /\.json$/,
                loader: "json"
            },
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin({
            title: '编译成功',
            alwaysNotify: true
        }),
        // 或"[name].css?[hash]"
        new ExtractTextPlugin('[name].css'),
        // new htmlWebpackPlugin({
        //     title: [name],
        //     filename: '[name].vue',
        //     template: '../docs/index.html'
        // }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    babel: {
        // stage-0   --hide-modules
        presets: ['es2015'],
        plugins: ['transform-runtime', 'transform-object-rest-spread'],
        comments: false
    },
    // vue: {
    //     loaders: {
    //         js: 'babel!eslint'
    //     }
    // },
    // eslint: {
    //     formatter: require('eslint-friendly-formatter')
    // }
};

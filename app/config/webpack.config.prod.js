/**
 * Created by yitala on 2017/11/12.
 */
var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {

    entry:{
        app:['./modules/index.js'],
    },
    output:{
        filename:'./public/js/[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot-loader/webpack',
                    'babel-loader'
                ]
            },
            {
                test:/\.css$/,
                loader:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: './public/css/style.css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(), //minify everything
        new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
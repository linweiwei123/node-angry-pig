/**
 * Created by yitala on 2017/11/12.
 */
var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry:{
        app:['./modules/index.js'],
    },
    output:{
        filename:'./public/js/[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'jsx-loader',
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
        new webpack.HotModuleReplacementPlugin()
    ]
};
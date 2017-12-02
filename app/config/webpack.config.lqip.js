/**
 * Created by yitala on 2017/12/2.
 */
/**
 * Created by yitala on 2017/11/12.
 */
var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry:{
        app:['./modules/lqip.js'],
    },
    output:{
        filename:'./public/js/[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module:{
        rules:[
            {

                test: /\.jpe?g$/,
                loaders: [
                    {
                        loader: 'lqip-loader',
                        options: {
                            path: '/media', // your image going to be in media folder in the output dir
                            name: '[name].[ext]',// you can use [hash].[ext] too if you wish,
                            base64: true, // default: true, gives the base64 encoded image
                            palette: true // default: false, gives the dominant colours palette
                        }
                    },
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
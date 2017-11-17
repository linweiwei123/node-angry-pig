/**
 * Created by yitala on 2017/11/12.
 */

switch (process.env.NODE_ENV){
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.config.prod');
        break;
    case 'dev':
    case 'development':
        module.exports = require('./config/webpack.config.dev');
        break;
    default:
        module.exports = require('./config/webpack.config.dev');
}
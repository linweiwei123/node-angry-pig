/**
 * Created by Administrator on 2016/11/24.
 */
//当前文件所在路径
var path = require('path');

// Helper functions
//获取上级文件目录，相当于cd ../, 同级src就是 ../src
var ROOT = path.resolve(__dirname, '..');

//此方法用于改变根路径
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

exports.root = root;
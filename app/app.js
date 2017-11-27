var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./routes');
var mysql = require('mysql');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var error = require('debug')('express:error');

var app = express();

// 设置日志系统
var logDirectory = path.join(__dirname,'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // 每天输出日志
    path: logDirectory
});

process.on('uncaughtException',function(err){
    error("hello world：" + (err.stack)||err);
});

var a = 1000;
var b = a+1;
/**
 * 初始化 MySQL Connection
 */
global.db = mysql.createConnection({
    port: '3306',
    host: 'rm-2zezv7kb7kh5i53w68o.mysql.rds.aliyuncs.com',
    user: 'ued',
    password: 'HE5lBejvKOXO',
    database: 'ued-nodejs',
    timezone: 'UTC',
});
db.connect();

db.query(`
    SET sql_mode = "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
`);


app.use(logger('combined', {stream: accessLogStream}));
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

    // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var math = require('./math');
var noteDao = require('../../models/note-sequelize');

function init(app){
    app.get('/playground',function(req,res,next){
        //noteDao.create('title test','hello word');
        // noteDao.create_mysql(['title test2','hello word2']);
        var sql = 'INSERT INTO Notes(title,body) VALUES(?,?)';
        db.query(sql,['随便一说','你好啊'],(err)=>{
            console.log(err);
        });
        if(req.query.fiboval){
            res.render('playground/index',{
                fiboval:req.query.fiboval,
                fibonacci:math.fibonacci(req.query.fiboval)
            })
        }
        else{
            res.render('playground/index',{
                fiboval:undefined,
                fibonacci:undefined
            })
        }
    })
}

module.exports = {
    init: init
};
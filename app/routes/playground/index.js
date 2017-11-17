var math = require('./math');

function init(app){
    app.get('/playground',function(req,res,next){
        res.render('playground/index',{fibonacci:math.fibonacci(10),name:'lww'})
    })
}

module.exports = {
    init: init
};
module.exports = {
    init: init
};

function init(app){
    app.get('/',function (req,res,next) {
        res.render('home/index',{ title : '小怒猪'})
    })
}
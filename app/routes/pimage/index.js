/**
 * Created by yitala on 2017/12/2.
 */
module.exports = {
    init:init
};

function init(app){
    app.get('/medium',(req,res,next)=>{
        res.render('pimage/medium')
    })
    app.get('/ori_medium',(req,res,next)=>{
        res.render('pimage/ori_medium')
    })
    app.get('/progress_medium',(req,res,next)=>{
        res.render('pimage/progress_medium')
    })
    app.get('/manyimgs',(req,res,next)=>{
        res.render('pimage/manyimgs')
    })
    app.get('/manyimgs_ori',(req,res,next)=>{
        res.render('pimage/manyimgs_ori')
    })
    app.get('/manyimgs_lazysizes',(req,res,next)=>{
        res.render('pimage/manyimgs_lazysizes')
    })
}
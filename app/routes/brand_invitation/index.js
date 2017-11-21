var BrandMIDao = require('../../models/brand_meeting_invitation');
var ExpressJoi = require('meetyou-express-joi');
var Joi = require('joi');

const debug = require('debug')('express:sequelize-model');
const debugError = require('debug')('express:error');

var bodySchema = {
    body:{
        name:Joi.string().max(20).required(),
        company:Joi.string().max(60).required(),
        position:Joi.string().max(60).required(),
        phone:Joi.string().length(11).required(),
        email:Joi.string().email().max(50).required()
    }
}

function init(app){
    app.post('/brand_invitation/save',ExpressJoi(bodySchema),(req,res,next)=>{
        debug('debug out *****');
        debug(req.body);
        var params = req.body;
        BrandMIDao.create(params)
            .then((response)=>{
                console.log(response);
                res.status(201).send({
                    code:'1000',
                    data:'success',
                    userMessage:'报名提交成功',
                    developMessage:'保存成功'
                })
            })
            .catch((error)=>{
                debugError(error);
                res.status(500).send({
                    code:'2000',
                    data:'error',
                    userMessage:'提交失败，请稍后再试',
                    developMessage:'保存失败'
                })
            })
        // var sql = 'INSERT INTO brand_meeting_invitations(name,company,position,phone,email) VALUES(?,?,?,?,?)';
        // db.query(sql,[params.name,params.company,params.position,params.phone,params.email],(err)=>{
        //     console.log(err);
        // });
    })
}

module.exports = {
    init:init
};

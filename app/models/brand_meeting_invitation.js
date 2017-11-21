const fs = require('fs');
const jsyaml = require('js-yaml');
const Sequelize = require("sequelize");
const log = require('debug')('angry-pig:sequelize-model');
const error = require('debug')('angry-pig:error');

exports.connectDB = function () {
    var SQBrandMI;
    var sequlz;
    if (SQBrandMI) return SQBrandMI.sync();
    return new Promise((resolve, reject) => {
        fs.readFile(process.env.SEQUELIZE_CONNECT, 'utf8',
            (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
         })
        .then(yamltext => {
            return jsyaml.safeLoad(yamltext, 'utf8');
        })
        .then(params => {
            sequlz = new Sequelize(params.dbname,
                params.username, params.password,
                params.params);
            SQBrandMI = sequlz.define('brand_meeting_invitation', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true, unique: true
                },
                name: Sequelize.STRING,
                company: Sequelize.STRING,
                position: Sequelize.STRING,
                phone: Sequelize.STRING,
                email: Sequelize.STRING,
            });
            return SQBrandMI.sync();
        })
        .catch((error)=>{
            console.log(error);
        });
};

exports.create = function (BrandMI) {
    return exports.connectDB()
        .then(SQBrandMI => {
            return SQBrandMI.create({
                name: BrandMI.name,
                company: BrandMI.company,
                position: BrandMI.position,
                phone: BrandMI.phone,
                email: BrandMI.email,
            });
        });
};
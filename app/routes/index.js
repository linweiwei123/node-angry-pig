module.exports = {
    init:init
};

function init(app){
  require('./home/index').init(app);
  require('./playground/index').init(app);
  require('./brand_invitation/index').init(app);
}

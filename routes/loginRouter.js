/**
 * 登录接口 路由
 * Created by wangjian on 2018/10/30
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('loginRouter');

// 本地依赖
const LoginController = require('../controllers/LoginController');

/*
* 登录接口
* */
router.get('/', function(req, res, next) {

  try{
    //调用 login控制器
    new LoginController(req).checkUser(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }

});

module.exports = router;
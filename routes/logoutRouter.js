/**
 * 登出接口 路由
 * Created by wangjian on 2018/11/16
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('logoutRouter');

// 本地依赖
const LogoutController = require('../controllers/LogoutController');

/*
* 登录接口
* */
router.get('/', function(req, res, next) {

  try{
    console.log(123)//调用 login控制器
    new LogoutController(req).logout(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }

});

module.exports = router;
/**
 * 用户接口 路由
 * Created by wangjian on 2018/11/15
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('loginRouter');

// 本地依赖
const UserController = require('../controllers/UserController');

/*
* 登录接口
* */
router.get('/', function(req, res, next) {
  try{
    //调用 login控制器
    new UserController(req).checkLogin(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }

});

module.exports = router;
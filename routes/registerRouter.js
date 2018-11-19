/**
 * 注册接口 路由
 * Created by wangjian on 2018/10/15
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('registerRouter');

// 本地依赖
const RegisterController = require('../controllers/RegisterController');

/*
* 注册接口
* */
router.post('/', function(req, res, next) {

  try{
    //调用 register控制器
    new RegisterController(req).register(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }

});

module.exports = router;
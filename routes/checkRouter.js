/**
 * web服务入口 路由
 * Created by wangjian on 2018/11/14
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('checkRouter');

// 本地依赖
const CheckController = require('../controllers/CheckController');

/*
* auth 接口
* @
* @
* */
router.use('/', function(req, res, next) {

  try{
    //调用 login控制器
    new CheckController(req).checkLogin(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }
});

module.exports = router;
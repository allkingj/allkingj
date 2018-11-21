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
* 用户信息校验 接口
* @cookie
* */

router.use('/', function(req, res, next) {

  try{
    //调用 check控制器
    new CheckController(req).checkLogin(req, res, next);
  }catch(err){
    logger.error(err);
    next(err);
  }
});

module.exports = router;
/**
 * 首页接口 路由
 * Created by wangjian on 2018/11/13
 */

//第三方依赖
const router = require('express').Router();
const logger = require('log4js').getLogger('homeRouter');

// 本地依赖
const HomeController = require('../controllers/HomeController');

/*
* 首页接口
* */
router.get('/', function(req, res, next) {
  res.json({data: 'home'});
  // try{
  //   //调用 home控制器
  //   new HomeController(req).checkUser(req, res, next);
  // }catch(err){
  //   logger.error(err);
  //   next(err);
  // }

});

module.exports = router;
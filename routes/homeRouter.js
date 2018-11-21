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
});

module.exports = router;
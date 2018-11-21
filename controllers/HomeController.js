/**
 * 首页接口 控制器
 * Created by wangjian on 2018/11/13
 */

// 本地依赖
const BaseController = require('./BaseController');
const HomeService = require('../services/HomeService');

class HomeController extends BaseController{

  /*
	 * 构造函数
	 * */
  constructor(req) {

    super(req);

    //实例化
    this.homeService = new HomeService();

  }

}

module.exports = HomeController;
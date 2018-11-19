/**
 * 首页接口 服务层
 * Created by wangjian on 2018/11/13
 */

// 本地依赖
const BaseService = require('./BaseService');
const LoginModel = require('../models/LoginModel');

class HomeService extends BaseService {

  /*
 	* 构造
 	* */
  constructor(){
    super();
    this.loginModel = new LoginModel();
  }


}

module.exports = HomeService;
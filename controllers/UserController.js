/**
 * 用户接口 控制器
 * Created by wangjian on 2018/11/15
 */

// 本地依赖
const BaseController = require('./BaseController');
const UserService = require('../services/UserService');

class UserController extends BaseController {

  /*
	 * 构造函数
	 * */
  constructor(req) {

    super(req);

    //实例化
    this.userService = new UserService();

  }

  //校验是否登录
  checkLogin(req, res, next){

    //获取必要参数
    const self = this;
    const {access_token} = req.cookies;
    const {type} = req.query;

    /*
		* 参数设置
		* @手机号码
		* @密码
		* */
    const params = {
      res,
      access_token
    };

    if(!type){
      self.logger.error('UserController', '参数不合法');
      return self.dealAppRes.resJson({res: res, status: null, code: -5000, msg: '参数不合法', data: null});
    }
    if(!access_token){
      self.logger.error('UserController', '用户未登录');
      return self.dealAppRes.resJson({res: res, status: null, code: -3000, msg: '用户未登录', data: null});
    }

    self.userService.checkMessage(params, (err, data)=>{
      if(err){
        self.logger.error('UserController', err);
        return self.dealAppRes.resJson({res: res, status: null, code: -3000, msg: err, data: null});
      }
      return self.dealAppRes.resJson({res: res, status: null, code: 0, msg: err, data: data});
    });

  }
}

module.exports = UserController;

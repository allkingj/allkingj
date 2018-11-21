/**
 * 登出接口 控制器
 * Created by wangjian on 2018/11/16
 */

// 本地依赖
const BaseController = require('./BaseController');
const LogoutService = require('../services/LogoutService');

class LogoutController extends BaseController {

  /*
	 * 构造函数
	 * */
  constructor(req) {

    super(req);
    //实例化
    this.logoutService = new LogoutService();
  }

  // 登录验证方法
  logout(req, res, next) {

    //获取必要参数
    const self = this;
    const {access_token} = req.cookies;

    const params = {
      res,
      access_token
    };

    /*
			* 调用loginService 处理服务层数据
			* @param
			* @cb
			* */
    self.logoutService.dealLogout(params, (err, data)=>{
      // 错误处理
      if(err){
        self.logger.error('LoginController', err);
        return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: err, data: null});
      }

      //验证成功
      self.logger.info('LoginController', '退出成功');
      self.dealAppRes.resJson({res: res, status: null, code: 0, msg: '退出成功', data: data});
    });


  }
}

module.exports = LogoutController;
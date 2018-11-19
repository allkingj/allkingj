/**
 * 登录接口 控制器
 * Created by wangjian on 2018/10/30
 */

// 本地依赖
const BaseController = require('./BaseController');
const LoginService = require('../services/LoginService');

class LoginController extends BaseController {

  /*
	 * 构造
	 * */
  constructor(req) {

    super(req);

    //实例化
    this.loginService = new LoginService();
  }

  // 登录验证方法
  checkUser(req, res, next){

    //获取必要参数
    const self = this;
    const {mobile, password} = req.query;  //@手机号码，@密码

    /*
		* 参数设置
		* @手机号码
		* @密码
		* */
    const params = {
      res,
      mobile,
      password
    };
    //参数处理
    const validator = new self.schema(self.fieldSchema.login);
    validator.validate(params, (errors, fields)=>{
      if(errors){
        return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: errors[0].message, data: null});
      }

      /*
			* 调用loginService 处理服务层数据
			* @param
			* @cb
			* */
      self.loginService.dealLogin(params, (err, data)=>{

        // 错误处理
        if(err){
          self.logger.error('LoginController', err);
          return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: err, data: null});
        }

        //验证成功
        self.logger.info('LoginController', '验证成功');
        self.dealAppRes.resJson({res: res, status: null, code: 0, msg: '验证成功', data: data});
      });
    });
  }

}

module.exports = LoginController;
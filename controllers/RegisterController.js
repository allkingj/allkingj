/**
 * 注册接口 控制器
 * Created by wangjian on 2018/10/29
 */

// 本地依赖
const BaseController = require('./BaseController');
const RegisterService = require('../services/RegisterService');

class RegisterController extends BaseController {

  /*
	 * 构造
	 * */
  constructor(req) {

    super(req);

    //实例化
    this.registerService = new RegisterService();
  }

  // 注册方法
  register(req, res, next){

    //获取必要参数
    const self = this;
    const {mobile, password, username} = req.body;  //@手机号码，@密码

    /*
		* 参数设置
		* @手机号码
		* @密码
		* */
    const params = {
      res,
      username,
      mobile,
      password
    };

    //参数处理
    const validator = new self.schema(self.fieldSchema.register);
    validator.validate(params, (errors, fields)=>{
      if(errors){
        return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: errors[0].message, data: null});
      }

      /*
			* 调用registerService 处理服务层数据
			* @param
			* @cb
			* */
      self.registerService.dealRegister(params, (err, data)=>{

        // 错误处理
        if(err){
          self.logger.error('RegisterController', err);
          return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: err, data: null});
        }

        //注册成功
        self.logger.info('RegisterController', '注册成功');
        self.dealAppRes.resJson({res: res, status: null, code: 0, msg: '注册成功', data: data});

      });
    });
  }

}

module.exports = RegisterController;